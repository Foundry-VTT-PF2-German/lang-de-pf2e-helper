const keepImportPrefix = "[keep-on-import]";

const getPackData = (document) => {
    // Skip actors without sourceId
    if (!document.flags || !document.flags.core || !document.flags.core.sourceId) {
        return null;
    }
    // Determine pack
    const splitPack = document.flags.core.sourceId.split(".");
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
        let count = 0;
        for (const container of [toCreate, toUpdate]) {
            count++;
            if (container.Actor) {
                for (const actor of container.Actor) {
                    const packData = getPackData(actor);
                    // Skip actors without sourceId
                    if (!packData) {
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
