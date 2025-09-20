import { ACTOR_REDIRECTS } from "../pack-extractor/constants.js";

const keepImportPrefix = "[keep-on-import]";

// Based on ActorSizePF2e from PF2e system: https://github.com/foundryvtt/pf2e/blob/940278c8f6efc687b59098688293ce24f24df228/src/module/actor/data/size.ts#L55
const defaultSpaces = {
    tiny: { long: 2.5, wide: 2.5 },
    sm: { long: 5, wide: 5 },
    med: { long: 5, wide: 5 },
    lg: { long: 10, wide: 10 },
    huge: { long: 15, wide: 15 },
    grg: { long: 20, wide: 20 },
}

let remasterMap = null;

const getRemasterSourceID = (originalSourceID) => {
    if (!remasterMap) {
        remasterMap = {};
        for (const actorEntry of ACTOR_REDIRECTS) {
            remasterMap[actorEntry.linkOld] = actorEntry.linkNew;
        }
    }
    const splitID = originalSourceID.split(".");
    if (splitID.length === 4) {
        splitID.splice(3, 0, "Actor");
    }
    const checkID = splitID.join(".");

    if (remasterMap[checkID]) {
        return remasterMap[checkID];
    } else {
        return originalSourceID;
    }
};

const getPackData = (document) => {
    // Skip actors without sourceId
    const sourceID = document._stats?.compendiumSource || document.flags?.core?.sourceId;
    if (!sourceID) {
        return null;
    }
    // Determine pack
    const splitPack = getRemasterSourceID(sourceID).split(".");
    // Remove first and last element, the pack name seems to be in the middle
    // Evaluation based on https://github.com/foundryvtt/pf2e/blob/3400aea5ad67e47b5d2a19b0a9777b89a453c9c8/build/lib/compendium-pack.ts#L313C5-L315C6
    const documentID = splitPack.pop();
    const importType = splitPack.shift();
    // Based on observation, some actors do not have a .Actor in their ID, probably outdated
    // But let's try to support them anyway, after all this script is meant to help avoiding manual updates :)
    if (["Actor", "Item"].includes(splitPack[splitPack.length - 1])) {
        splitPack.pop();
    }
    const packName = splitPack.join(".");

    return {
        documentID,
        importType,
        packName,
    };
};

const getSource = async (packData) => {
    const pack = game.packs.get(packData.packName);
    if (!pack) {
        console.warn(`Pack not found: ${packData.packName}`);
        return null;
    }
    const source = await pack.getDocument(packData.documentID);
    if (!source) {
        console.warn(`No source found for ID ${packData.packName} => ${packData.documentID}`);
    }
    return source;
};

export const registerAdventureImporter = (packName) => {
    Hooks.on("preImportAdventure", async (adventure, formData, toCreate, toUpdate) => {
        if (adventure.pack != packName) {
            return true;
        }
        const updatedActors = new Map();
        let count = 0;
        for (const container of [toCreate, toUpdate]) {
            count++;
            if (container.Actor) {
                for (const actor of container.Actor) {
                    const packData = getPackData(actor);
                    // Skip actors without sourceId
                    if (!packData) {
                        if (actor.type !== "loot") {
                            console.warn("Actor does not have source ID");
                            console.warn(actor);
                            console.warn(actor.name);
                            console.warn(actor?.flags?.babele?.originalName);
                        }
                        continue;
                    }
                    if (packData.importType !== "Compendium") {
                        if (actor.type !== "loot") {
                            console.warn("Non-loot actor not imported via Compendium");
                            console.warn(actor);
                        }
                        continue;
                    }
                    const source = await getSource(packData);
                    if (!source) {
                        console.warn(`No source found for actor: ${actor.name} (${actor._id})`);
                        console.warn(actor);
                        continue;
                    }
                    const sourceData = source.toObject();

                    const items = sourceData.items;

                    for (const item of actor.items) {
                        if (item.name.substr(0, keepImportPrefix.length).toLowerCase() == keepImportPrefix) {
                            const itemPackData = getPackData(item);
                            let addItem = item;
                            addItem.name = item.name.substr(keepImportPrefix.length);
                            if (itemPackData) {
                                const sourceItem = await getSource(itemPackData);
                                if (sourceItem) {
                                    const sourceItemData = sourceItem.toObject();

                                    // Take identification state, equipped, material and runes from original item, if available
                                    const system = foundry.utils.mergeObject(sourceItemData.system, {
                                        identification: item.system.identification,
                                        equipped: item.system.equipped,
                                        material: item.system.material,
                                        potencyRune: item.system.potencyRune,
                                        propertyRune1: item.system.propertyRune1,
                                        propertyRune2: item.system.propertyRune2,
                                        propertyRune3: item.system.propertyRune3,
                                        propertyRune4: item.system.propertyRune4,
                                        strikingRune: item.system.strikingRune,
                                        runes: item.system.runes,
                                    });
                                    addItem = foundry.utils.mergeObject(item, {
                                        system: system,
                                        effects: sourceItemData.effects,
                                        "flags.core.sourceId": sourceItem.uuid,
                                    });
                                }
                            }
                            items.push(addItem);
                        }
                    }

                    foundry.utils.mergeObject(actor, {
                        system: sourceData.system,
                        items: items,
                        effects: sourceData.effects,
                        prototypeToken: sourceData.prototypeToken,
                        rules: sourceData.rules,
                        "flags.core.sourceId": source.uuid,
                    });
                    updatedActors.set(actor._id, actor);
                }
            }
        }
        // Update actors in scenes based on updated actors
        for (const container of [toCreate, toUpdate]) {
            if (container.Scene) {
                for (const scene of container.Scene) {
                    if (scene.tokens) {
                        for (const token of scene.tokens) {
                            if (updatedActors.has(token.actorId)) {
                                const actor = updatedActors.get(token.actorId);
                                const spaces = defaultSpaces[actor?.system?.traits?.size?.value];
                                if (!spaces) {
                                    continue;
                                }
                                foundry.utils.mergeObject(token, {
                                    height: spaces.long / 5,
                                    width: spaces.wide / 5,
                                    actorLink: true,
                                });
                            }
                        }
                    }
                }
            }
        }
        adventure.importContent({
            toCreate: toCreate,
            toUpdate: toUpdate,
            documentCount: count,
        });
        return false;
    });
};
