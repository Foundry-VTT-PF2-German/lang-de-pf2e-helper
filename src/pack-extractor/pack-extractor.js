import { resolvePath, resolveValue } from "path-value";
import { convertArray, sortObject, mergeNestedObjects } from "../util/utilities.js";

/**
 * Extract pack data from a list of pack groups
 * Returns extracted data and a dictionary for specified fields
 *
 * @param {Array<Object>} packs An array of compendium packs
 * @param {Object} config       Contains the config for the packGroupList
 * @returns {Object}            Extracted data, stored in extractedPackGroups and packGroupListDictionary
 */
export function extractPackGroupList(packs, config) {
    const extractedPackGroupListData = {
        extractedPackGroups: {},
        packGroupListDictionary: {},
    };
    for (const [groupName, packGroupConfig] of Object.entries(config)) {
        const extractedPackGroupData = extractPackGroup(
            groupName,
            packs.filter((pack) => packGroupConfig.packNames.includes(pack.fileName)),
            packGroupConfig.mapping
        );
        extractedPackGroupListData.extractedPackGroups[groupName] = extractedPackGroupData.extractedPacks;
        extractedPackGroupListData.packGroupListDictionary = mergeNestedObjects(
            extractedPackGroupListData.packGroupListDictionary,
            extractedPackGroupData.packGroupDictionary
        );
    }
    return extractedPackGroupListData;
}

/**
 * Extract pack data from a pack group
 * Returns extracted data and a dictionary for specified fields
 *
 * @param {Array<Object>} groupName Name of the pack group
 * @param {Array<Object>} packs     An array of compendium packs
 * @param {Object} mapping          Contains the mapping for the packGroup
 * @returns {Object}                Extracted data, stored in extractedPacks and packGroupDictionary
 */
export function extractPackGroup(groupName, packs, mapping) {
    postExtractMessage(groupName, true);

    const extractedPackGroupData = {
        extractedPacks: {},
        packGroupDictionary: {},
    };

    packs.forEach((pack) => {
        const extractedPackData = extractPack(pack.fileName, JSON.parse(pack.content), mapping);
        extractedPackGroupData.extractedPacks[pack.fileName] = extractedPackData.extractedPack;
        extractedPackGroupData.packGroupDictionary = mergeNestedObjects(
            extractedPackGroupData.packGroupDictionary,
            extractedPackData.packDictionary
        );
    });

    return extractedPackGroupData;
}

/**
 * Extract data from a pack
 * Returns extracted data and a dictionary for specified fields
 *
 * @param {Array<Object>} packName  Name of the pack
 * @param {Array<Object>} pack      A compendium pack
 * @param {Object} mapping          Contains the mapping for the pack
 * @returns {Object}                Extracted data, stored in extractedPack and packDictionary
 */
export function extractPack(packName, pack, mapping) {
    postExtractMessage(packName);

    const extractedPackData = {
        extractedPack: {
            label: packName,
            entries: {},
            mapping: {},
        },
        packDictionary: {},
    };

    pack.forEach((entry) => {
        const extractedEntryData = extractEntry(entry, mapping);

        extractedPackData.extractedPack.entries[entry.name] = extractedEntryData.extractedEntry;

        extractedPackData.extractedPack.mapping = mergeNestedObjects(
            extractedPackData.extractedPack.mapping,
            extractedEntryData.entryMapping
        );

        extractedPackData.packDictionary = mergeNestedObjects(
            extractedPackData.packDictionary,
            extractedEntryData.entryDictionary
        );
    });
    extractedPackData.extractedPack.entries = sortObject(extractedPackData.extractedPack.entries);
    return extractedPackData;
}

/**
 * Extract data from an entry
 * Returns extracted data, a dictionary, and a mapping for specified fields
 *
 * @param {Object} entry                                                                Entry with data that should get extracted
 * @param {Object} mapping                                                              Paths to fields that should get extracted
 * @param {boolean|string} nestedEntryType                                              Specifies, if the entry is nested within other entries, e.g. an ector item
 * @returns {{extractedEntry: Object, entryMapping: Object, entryDictionary: Object}}   Extracted data, mapping, and dictionary entries
 */
export function extractEntry(entry, mapping, nestedEntryType = false) {
    const extractedEntryData = {
        extractedEntry: {},
        entryMapping: {},
        entryDictionary: {},
    };

    // Initialize default extract options for entry fields
    const defaultExtractOptions = {
        addToDictionary: false,
        addToMapping: true,
        alternateMappingKey: false,
        alwaysAddMapping: false,
        convertArray: true,
        extractForActorItem: true,
        extractValue: true,
        specialExtraction: false,
        subMapping: false,
    };

    // Loop through mappings for the entry, extract matching data
    for (let [mappingKey, mappingData] of Object.entries(mapping)) {
        // Get extract options for the current mapping entry
        const extractOptions = mappingData.extractOptions
            ? { ...defaultExtractOptions, ...mappingData.extractOptions }
            : defaultExtractOptions;

        // Check is alternate mapping key should be used
        mappingKey = extractOptions.alternateMappingKey ? extractOptions.alternateMappingKey : mappingKey;

        // Check if the current field uses a converter
        const hasConverter = mappingData.converter ? mappingData.converter : false;

        // Check if the current field exists in the compendium entry and extract its value
        let extractedValue = resolvePath(entry, mappingData.path).exists
            ? resolveValue(entry, mappingData.path)
            : false;

        // Add mappings that should always be included
        if (extractOptions.alwaysAddMapping) {
            addMapping(extractedEntryData.entryMapping, { [mappingKey]: mappingData.path }, hasConverter);
        }

        // Check if the current field is relevant for localization
        // Skip further steps if not relevant
        if (!checkLocalizationRelevance(extractedValue)) continue;

        // Further progress extraction steps if field is relevant for localization

        // Add mapping
        if (extractOptions.addToMapping && !extractOptions.alwaysAddMapping) {
            addMapping(extractedEntryData.entryMapping, { [mappingKey]: mappingData.path }, hasConverter);
        }

        // Add to dictionary
        if (extractOptions.addToDictionary) {
            extractedEntryData.entryDictionary = mergeNestedObjects(extractedEntryData.entryDictionary, {
                [mappingKey]: { [String(extractedValue).toLowerCase()]: extractedValue },
            });
        }

        // Check if the current field should get extracted
        // Skip further steps if not
        if (!extractOptions.extractValue) continue;

        // Don't extract fields that are excluded for actor items
        if (nestedEntryType === "actorItem" && !extractOptions.extractForActorItem) continue;

        // Further progress extraction steps if field should get extracted

        // If extracted value is an array, convert it to an object list
        if (Array.isArray(extractedValue) && extractOptions.convertArray) {
            extractedValue = convertArray(extractedValue);
        }

        if (extractOptions.subMapping) {
            // Loop through list of sub entries and extract their data
            Object.keys(extractedValue).forEach((subEntry) => {
                let subEntryKey = subEntry;
                // For actor items, build special key indicate the subentry is an actor item to start a modified extraction
                if (extractOptions.specialExtraction === "actorItems") {
                    subEntryKey = `${extractedValue[subEntry].type}->`;
                    if (extractedValue[subEntry].type === "melee") {
                        subEntryKey = `strike-${extractedValue[subEntry].system.weaponType.value}->`;
                    }
                    subEntryKey = subEntryKey.concat(`${extractedValue[subEntry].name}`);
                    nestedEntryType = "actorItems";
                }

                // For table results, build special key consisting of the roll ranges
                if (extractOptions.specialExtraction === "tableResults") {
                    subEntryKey = `${extractedValue[subEntry].range[0]}-${extractedValue[subEntry].range[1]}`;
                    nestedEntryType = "tableResults";
                }

                // For journal pages, build special key consisting of the sub entry name
                if (extractOptions.specialExtraction === "journalPages") {
                    subEntryKey = extractedValue[subEntry].name;
                }

                const extractedSubEntry = extractEntry(
                    extractedValue[subEntry],
                    extractOptions.subMapping,
                    nestedEntryType
                );

                // Initialize structure for the current entry in order to receive subentry data and assign subentry data
                if (Object.keys(extractedSubEntry.extractedEntry).length > 0) {
                    extractedEntryData.extractedEntry[mappingKey] = extractedEntryData.extractedEntry[mappingKey] || {};
                    Object.assign(extractedEntryData.extractedEntry[mappingKey], {
                        [subEntryKey]: extractedSubEntry.extractedEntry,
                    });
                }

                extractedEntryData.entryDictionary = mergeNestedObjects(
                    extractedEntryData.entryDictionary,
                    extractedSubEntry.entryDictionary
                );
            });
            continue;
        }
        // Apply special extraction rules on value level
        // Special extraction for actor items
        if (nestedEntryType === "actorItems") {
            const formatedActorItem = formatActorItem(extractedValue, mappingKey, entry);
            if (formatedActorItem) {
                extractedEntryData.extractedEntry[mappingKey] = formatedActorItem;
            }
            continue;
        }

        // For tableResults, return the plain value instead of an object using the mapping key
        // This is neccessary due to the required babele data structure for rollable tables
        if (nestedEntryType === "tableResults") {
            extractedEntryData.extractedEntry = extractedValue;
            continue;
        }

        extractedEntryData.extractedEntry[mappingKey] = extractedValue;
    }
    return extractedEntryData;
}

/**
 * Formats an extracted value for an actor item
 * This is neccessary, due to the Foundry data structure of many actor items being
 * copies from compendium entries, but receive changes in differenz fields (e.g. name)
 *
 * @param {string} extractedValue   The extracted value that should get formated
 * @param {string} mappingKey       The data field that got its value extracted
 * @param {Object} item             The current actor item
 * @returns {string}                The formated value
 */
function formatActorItem(extractedValue, mappingKey, item) {
    const skills = [
        "Acrobatics",
        "Arcana",
        "Athletics",
        "Crafting",
        "Deception",
        "Diplomacy",
        "Intimidation",
        "Medicine",
        "Nature",
        "Occultism",
        "Performance",
        "Religion",
        "Society",
        "Stealth",
        "Survival",
        "Thievery",
    ];

    // Do some special treatment first...

    // ...don't extract names for skills
    if (item.type === "lore" && mappingKey === "name" && skills.includes(item.name)) {
        return false;
    }
    // ... for weapons, include runes into the name
    if (item.type === "weapon" && mappingKey === "name" && !resolvePath(item, "system.specific.value").exists) {
        const nameAdditions = [];
        // Potency rune
        if (resolvePath(item, "system.potencyRune.value").exists && item.system.potencyRune.value > 0) {
            nameAdditions.push("+".concat(item.system.potencyRune.value));
        }

        // Other runes and material
        [
            "system.strikingRune.value",
            "system.preciousMaterial.value",
            "system.propertyRune1.value",
            "system.propertyRune2.value",
            "system.propertyRune3.value",
            "system.propertyRune4.value",
        ].forEach((property) => {
            if (
                resolvePath(item, property).exists &&
                resolveValue(item, property) !== null &&
                resolveValue(item, property) !== ""
            ) {
                nameAdditions.push(resolveValue(item, property));
            }
        });
        if (nameAdditions.length > 0) {
            return `${extractedValue} (${nameAdditions.join(",")})`;
        }
    }

    // Check if the item is from a compendium
    if (resolvePath(item, "flags.core.sourceId").exists && item.flags.core.sourceId.includes("Compendium.pf2e")) {
        // ...Don't extract names for defined item types. Those always use the name from the compendium entry
        if (mappingKey === "name" && ["ancestry", "background", "class"].includes(item.type)) {
            return false;
        }
        // Don't extract descriptions for defined item types. Those always use the description from the compendium entry
        if (
            mappingKey === "description" &&
            ["ancestry", "background", "class", "feat", "heritage", "spell"].includes(item.type)
        ) {
            return false;
        }
        // Add note for description and name to use <Compendium> as a translation if the value should be taken from the compendium
        if (["description", "name"].includes(mappingKey)) {
            return `<Compendium> tag will get replaced with text from compendium entry @UUID[${item.flags.core.sourceId}]\n${extractedValue}`;
        }
    }
    return extractedValue;
}

/**
 * Add mappingData to existing mapping object without duplicates
 * @param {Object} mapping      The current mapping data
 * @param {Object} mappingData  The new mapping that should get added
 * @param {boolean} converter   Specifies if the added mapping has a converter entry
 */
function addMapping(mapping, mappingData, converter = false) {
    Object.keys(mappingData).forEach((mappingKey) => {
        if (!resolvePath(mapping, mappingKey).exists) {
            // Check if the current mapping entry already contains a complete converter mapping
            if (resolvePath(mappingData, [mappingKey, converter]).exists) {
                Object.assign(mapping, { [mappingKey]: mappingData[mappingKey] });
            } else {
                const newMapping = converter
                    ? { path: mappingData[mappingKey], converter: converter }
                    : mappingData[mappingKey];

                Object.assign(mapping, { [mappingKey]: newMapping });
            }
        }
    });
}

/**
 * Post extraction status messages to console
 * @param {string} extractedContent Name of the extracted content
 * @param {boolean} header          Set for posting a header message
 */
export function postExtractMessage(extractedContent, header = false) {
    const message = header
        ? `\n--------------------------\nExtracting: ${extractedContent}\n--------------------------`
        : `Extracted file: ${extractedContent}`;
    console.log(message);
}

/**
 * Check data for localization relevance
 * Ignore empty data fields, empty arrays, and empty objects
 * Ignore numbers, values already containing a localization variable like "PF2E." and other variables
 *
 * @param {*} data      The data that should get checked for relevance
 * @return {boolean}    The check result
 */
function checkLocalizationRelevance(data) {
    if (!data) return false;
    if (Array.isArray(data) && !data.length > 0) return false;
    if (!Array.isArray(data) && typeof data === "object" && !Object.keys(data).length > 0) return false;
    if (!Array.isArray(data) && typeof data !== "object") {
        if (data === null || data === "") return false;
        if (!isNaN(data)) return false;
        if (data.substring(0, 4) === "PF2E") return false;
        if (data.search(RegExp(`^\\{[^\\}]*\\}$`, "g")) !== -1) return false;
        if (data.search(RegExp(`^<p>@Localize\\[[^\\]]*\\]</p>$`, "g")) !== -1) return false;
    }
    return true;
}
