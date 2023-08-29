import { writeFileSync } from "fs";
import { resolvePath, resolveValue } from "path-value";
import { convertArray, sortObject } from "../util/utilities.js";

const SKILLS = [
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

/**
 * Extract data from a single pack and write extration file
 * @param {Object} packData
 * @param {Object} database
 * @param {Object} config
 */
export function extractPack(packData, database, config) {
    // Get config data
    const packName = config.name;
    const packConfig = config.packConfig;
    const mappings = config.mappings;
    const packSavePath = config.savePath;

    // Create basic json structure
    const extractedPack = {
        label: packName,
        entries: {},
        mapping: {},
    };

    // Unsorted extracted entries
    const entries = {};

    // Build comparison database for this pack?
    const createComparisonData = resolvePath(packConfig, ["packCompendiumMapping", packName]).exists ? true : false;
    database.actorItemComparison = database.actorItemComparison || {};

    // Loop through source data and look for keys included in the mappings
    Object.values(packData).forEach((packDataEntry) => {
        // Add entry to comparison database if active for this pack
        if (createComparisonData) {
            const entryUUID = `Compendium.${packConfig.packCompendiumMapping[packName]}.Item.${packDataEntry._id}`;
            Object.assign(database.actorItemComparison, { [entryUUID]: packDataEntry });
        }

        // Extract entries based on mapping in config
        const entryConfig = { entryMapping: mappings[packConfig.mapping], mappings: mappings };
        //TODO - checken ob das mittels Array sein muss oder ob auch z.B. über ein Objekt. Außerdem prüfen, ob addMapping vereinfacht werden kann
        const extractedEntry = extractEntry(packDataEntry, database, entryConfig);
        if (extractedEntry[0] !== undefined) {
            Object.assign(entries, extractedEntry[0]);
        }
        if (extractedEntry[1] !== undefined) {
            addMapping(extractedPack.mapping, extractedEntry[1]);
        }
    });

    // Sort entries and assign them to final export object
    extractedPack.entries = sortObject(entries);

    // Sort mapping
    extractedPack.mapping = sortObject(extractedPack.mapping);

    // Save file to directory
    writeFileSync(`${packSavePath}/${packName}.json`, JSON.stringify(extractedPack, null, 2));

    extractMessage(packName);
}

/**
 * Extract pack data from a list of pack groups and write extration files
 * @param {Array<Object>} packs
 * @param {Object} database
 * @param {Object} config
 */
export function extractPackGroupList(packs, database, config) {
    for (const [packGroup, packConfig] of Object.entries(config.packGroupList)) {
        const packGroupConfig = {
            name: packGroup,
            packConfig: packConfig,
            mappings: config.mappings,
            savePath: config.filePaths[packConfig.savePath],
        };
        extractPackGroup(
            packs.filter((pack) => packConfig.packNames.includes(pack.fileName)),
            database,
            packGroupConfig
        );
    }
}

/**
 * Extract data from a pack group and write extraction files
 * @param {Array<Object>} packs
 * @param {Object} database
 * @param {Object} config
 */
export function extractPackGroup(packs, database, config) {
    // Loop through packs and extract data defined in mappings
    extractMessage(config.name, true);
    packs.forEach((pack) => {
        config.name = pack.fileName;
        extractPack(JSON.parse(pack.content), database, config);
    });
}

/**
 * Add mappingData to existing mapping object without duplicates
 * @param {Object} mapping
 * @param {Object} mappingData
 * @param {boolean} converter
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
 * Extends dictionary with new extracted data without duplicates
 * @param {Object} dictionary
 * @param {string} mappingKey
 * @param {Array<string>} extractedData
 */
function extendDictionary(dictionary, dictionaryGroup, dictionaryValue) {
    const dictionaryKey = String(dictionaryValue).toLowerCase();
    if (!resolvePath(dictionary, dictionaryGroup).exists) {
        dictionary[dictionaryGroup] = {};
    }
    if (!resolvePath(dictionary, [dictionaryGroup, dictionaryKey]).exists) {
        dictionary[dictionaryGroup][dictionaryKey] = dictionaryValue;
    }
}

/**
 * Extract an entry using a specified mapping
 * @param {Object|string} baseMapping
 * @param {Object} packDataEntry
 * @param {Object} database
 * @param {Object} config
 * @param {string} idType
 * @param {string} idName
 * @param {boolean|string} specialExtraction
 * @param {boolean} addToMapping
 * @returns {Object}
 */
function extractEntry(
    packDataEntry,
    database,
    config,
    idType = "dynamic",
    idName = "name",
    specialExtraction = false,
    addToMapping = true
) {
    // Get config data
    const entryMapping = config.entryMapping;
    const mappings = config.mappings;

    // Apply special extraction rules on entry level
    if (specialExtraction !== false) {
        if (specialExtraction === "actorItem") {
            idType = "static";
            idName = `${packDataEntry.type}->`;
            if (packDataEntry.type === "melee") {
                idName = `strike-${packDataEntry.system.weaponType.value}->`;
            }
            idName = idName.concat(`${packDataEntry.name}`);
        } else if (specialExtraction === "tableResult") {
            idType = "static";
            idName = `${packDataEntry.range[0]}-${packDataEntry.range[1]}`;
        }
    }

    // Initialize variables for data and mapping extraction and get
    let currentEntry = {};
    const currentMapping = {};

    // Loop through mappings for the entry, extract matching data
    for (let [mappingKey, mappingData] of Object.entries(entryMapping)) {
        // Get added options for extraction
        const extractOptions = resolvePath(mappingData, "extractOptions").exists ? mappingData.extractOptions : false;
        mappingKey = resolvePath(extractOptions, "setMappingKey").exists ? extractOptions.setMappingKey : mappingKey;
        const option_actorItemExtraction = resolvePath(extractOptions, "actorItemExtraction").exists
            ? extractOptions.actorItemExtraction
            : true;
        const option_addSubMappingToMapping = resolvePath(extractOptions, "addSubMappingToMapping").exists
            ? extractOptions.addSubMappingToMapping
            : false;
        const option_addToDictionary = resolvePath(extractOptions, "addToDictionary").exists
            ? extractOptions.addToDictionary
            : false;
        const option_addToMapping = resolvePath(extractOptions, "addToMapping").exists
            ? extractOptions.addToMapping
            : true;
        const option_alwaysAddMapping = resolvePath(extractOptions, "alwaysAddMapping").exists
            ? extractOptions.alwaysAddMapping
            : false;
        const option_extractValue = resolvePath(extractOptions, "extractValue").exists
            ? extractOptions.extractValue
            : true;
        const option_dictionaryName = resolvePath(extractOptions, "dictionaryName").exists
            ? extractOptions.dictionaryName
            : mappingKey;
        const option_idType = resolvePath(extractOptions, "idType").exists ? extractOptions.idType : false;
        const option_idName = resolvePath(extractOptions, "idName").exists ? extractOptions.idName : false;
        const option_specialExtraction = resolvePath(extractOptions, "specialExtraction").exists
            ? extractOptions.specialExtraction
            : false;
        const option_subMapping = resolvePath(extractOptions, "subMapping").exists ? extractOptions.subMapping : false;

        // Check if the current field uses a converter
        const hasConverter = mappingData.converter ? mappingData.converter : false;

        // Check if path to the data field is a single entry or an array of possible paths
        const dataPath = resolvePath(mappingData, "path").exists ? mappingData.path : "";

        // Check if the current field exists in the db entry
        let extractedData = resolvePath(packDataEntry, dataPath).exists ? resolveValue(packDataEntry, dataPath) : false;
        // Add mappings that should always be included
        if (addToMapping && option_alwaysAddMapping) {
            addMapping(currentMapping, { [mappingKey]: dataPath }, hasConverter);
        }

        // Extract the data, ignoring empty data fields, objects and arrays
        // Also ignore numbers, values already containing a localization variable like "PF2E." and other variables
        if (
            extractedData &&
            ((!Array.isArray(extractedData) &&
                typeof extractedData !== "object" &&
                extractedData !== null &&
                isNaN(extractedData) &&
                extractedData !== "" &&
                extractedData.substring(0, 4) !== "PF2E" &&
                extractedData.search(RegExp(`^\\{[^\\}]*\\}$`, "g")) === -1 &&
                extractedData.search(RegExp(`^<p>@Localize\\[[^\\]]*\\]</p>$`, "g")) === -1) ||
                (!Array.isArray(extractedData) &&
                    typeof extractedData === "object" &&
                    Object.keys(extractedData).length > 0) ||
                (Array.isArray(extractedData) && extractedData.length > 0))
        ) {

            // Add mapping
            if (addToMapping && option_addToMapping && !option_alwaysAddMapping) {
                addMapping(currentMapping, { [mappingKey]: dataPath }, hasConverter);
            }

            // Add to dictionary
            if (option_addToDictionary) {
                extendDictionary(database.dictionary, option_dictionaryName, extractedData);
            }

            // Extract the data
            if (option_extractValue) {
                // If extracted data is an array, convert it to an object list
                if (Array.isArray(extractedData) && !resolvePath(extractOptions, "noArrayConvert").exists) {
                    extractedData = convertArray(extractedData);
                }

                let extracted = false;
                // Apply special extraction rules on mapping entry level

                if (specialExtraction) {
                    // Special extraction for actor items
                    if (specialExtraction === "actorItem") {
                        // Don't extract fields that are excluded for actor items
                        if (option_actorItemExtraction) {
                            extracted = extractActorItem(
                                currentEntry,
                                extractedData,
                                mappingKey,
                                packDataEntry,
                                dataPath,
                                database
                            );
                        } else {
                            extracted = true;
                        }
                    }
                    if (specialExtraction === "tableResult") {
                        currentEntry = extractedData;
                        extracted = true;
                    }
                }
                if (!extracted) {
                    // Convert nested data in case submappings exist
                    if (option_subMapping) {
                        Object.keys(extractedData).forEach((subEntry) => {
                            const entryConfig = { entryMapping: mappings[option_subMapping], mappings: mappings };
                            const extractedSubEntry = extractEntry(
                                extractedData[subEntry],
                                database,
                                entryConfig,
                                option_idType !== false ? option_idType : "static",
                                option_idName !== false ? option_idName : subEntry,
                                option_specialExtraction,
                                option_addSubMappingToMapping
                            );
                            if (extractedSubEntry[0] !== undefined) {
                                currentEntry[mappingKey] = currentEntry[mappingKey] || {};
                                Object.assign(currentEntry[mappingKey], extractedSubEntry[0]);
                            }
                            if (extractedSubEntry[1] !== undefined) {
                                addMapping(currentMapping, extractedSubEntry[1]);
                            }
                        });

                        // Extract the plain entry, taking special extractions into account
                    } else {
                        currentEntry[mappingKey] = extractedData;
                    }
                }
            }
        }
    }
    // create the return value, consisting of the data and the mapping
    const returnValue = [];
    const entryId = idType === "dynamic" ? packDataEntry[idName] : idName;
    returnValue.push(Object.keys(currentEntry).length > 0 ? Object.assign({}, { [entryId]: currentEntry }) : undefined);
    returnValue.push(Object.keys(currentMapping).length > 0 ? currentMapping : undefined);
    return returnValue;
}

/**
 * Write files from Blob
 * @param {Array<Object>} files
 * @param {string} savePath
 */
export function extractFiles(files, savePath) {
    extractMessage("i18n files", true);
    files.forEach((entry) => {
        const filePath = `${savePath}/${entry.fileName}.${entry.fileType}`;
        let content = entry.content;

        if (entry.fileType === "json") {
            content = JSON.stringify(JSON.parse(content), null, 2);
        }

        writeFileSync(filePath, content);
        extractMessage(`${entry.fileName}.${entry.fileType}`);
    });
}

/**
 * Post extraction status messages to console
 * @param {string} extractedContent   Name of the extracted content
 * @param {boolean} header    Set for posting a header message
 */
function extractMessage(extractedContent, header = false) {
    const message = header
        ? `\n--------------------------\nExtracting: ${extractedContent}\n--------------------------`
        : `Extracted file: ${extractedContent}`;
    console.log(message);
}

// All fields to be extracted are checked against the source id if available
// and only get extracted if values differ from each other
// (exptions: no extraction for the descriptions of ancestries, backgrounds, classes, feats, heritages, and spells)
// Regular extraction if no source id is provided
function extractActorItem(currentEntry, extractedData, mappingKey, packDataEntry, dataPath, database) {
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

    let extracted = false;

    // Do some special treatment first...

    // ...Don't extract names for skills
    if (packDataEntry.type === "lore" && mappingKey === "name" && skills.includes(packDataEntry.name)) {
        extracted = true;

        // ... for weapons, include runes into the name
    } else if (
        packDataEntry.type === "weapon" &&
        mappingKey === "name" &&
        !resolvePath(packDataEntry, "system.specific.value").exists
    ) {
        const nameAdditions = [];
        // Potency rune
        if (
            resolvePath(packDataEntry, "system.potencyRune.value").exists &&
            packDataEntry.system.potencyRune.value > 0
        ) {
            nameAdditions.push("+".concat(packDataEntry.system.potencyRune.value));
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
                resolvePath(packDataEntry, property).exists &&
                resolveValue(packDataEntry, property) !== null &&
                resolveValue(packDataEntry, property) !== ""
            ) {
                nameAdditions.push(resolveValue(packDataEntry, property));
            }
        });
        if (nameAdditions.length > 0) {
            currentEntry[mappingKey] = `${extractedData} (${nameAdditions.join(",")})`;
            extracted = true;
        }
    }
    // Check for source ID
    if (
        !extracted &&
        resolvePath(packDataEntry, "flags.core.sourceId").exists &&
        packDataEntry.flags.core.sourceId.includes("Compendium.pf2e")
    ) {
        const compendiumEntry = resolvePath(database, ["actorItemComparison", packDataEntry.flags.core.sourceId]).exists
            ? resolveValue(database, ["actorItemComparison", packDataEntry.flags.core.sourceId])
            : undefined;
        if (typeof compendiumEntry === "undefined") {
            // Data quality check currently not active, because embedded documents don't get checked for broken links in pf2e system
            // console.warn("Broken Link: ".concat(packDataEntry.flags.core.sourceId));
            // Don't extract descriptions for defined item types. Those always use the description from the compendium entry
        } else if (
            mappingKey === "description" &&
            ["ancestry", "background", "class", "feat", "heritage", "spell"].includes(packDataEntry.type)
        ) {
            extracted = true;
            // Don't extract data if value is identical to compendium data
        } else if (
            resolvePath(compendiumEntry, dataPath).exists &&
            extractedData === resolveValue(compendiumEntry, dataPath)
        ) {
            extracted = true;

            // If value differs from compendium data, add translation note for name and description
        } else if (
            resolvePath(compendiumEntry, dataPath).exists &&
            ["description", "name"].includes(mappingKey) &&
            extractedData !== resolveValue(compendiumEntry, dataPath)
        ) {
            currentEntry[
                mappingKey
            ] = `<Compendium> tag will get replaced with text from compendium entry @UUID[${packDataEntry.flags.core.sourceId}]\n${extractedData}`;
            extracted = true;
        }
    }
    return extracted;
}
