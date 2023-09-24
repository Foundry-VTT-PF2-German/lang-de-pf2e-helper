import { ClassicLevel } from "classic-level";
import { readFileSync } from "fs";

// Supported database types
const DB_KEYS = ["adventures", "actors", "items", "journal", "macros", "tables"];

// Database options
const DB_OPTIONS = { keyEncoding: "utf8", valueEncoding: "json" };

/**
 * Extracts the relevant keys for a pack from the pack's keys
 *
 * @param {Array<string>} packKeys                   Array containing the pack's keys
 * @returns {{dbKey:string|null,subKey:string|null}|null}   Object containing key and sub key for a database
 */
function getPackKeys(packKeys) {
    for (const packKey of packKeys) {
        for (const dbKey of DB_KEYS) {
            if (packKey.startsWith(`!${dbKey}!`)) {
                return { dbKey: dbKey, subKey: getSubKey(dbKey) };
            }
        }
    }
    return null;
}

/**
 * Gets the sub key for a given pack type
 *
 * @param {string} packType     The pack type
 * @returns {string|null}       The sub key for the pack type
 */
function getSubKey(packType) {
    switch (packType) {
        case "actors":
            return "items";
        case "journal":
            return "pages";
        case "tables":
            return "results";
        default:
            return null;
    }
}

/**
 * Extracts data from a levelDB pack
 *
 * @param {string} databasePath                                                         Path to the levelDB database
 * @returns {Promise<{packType:string, packData:Array<Object>,folders:Array<Object>}>}  Promise for an object including the pack type, pack data and the pack's folders
 */
export async function getJSONfromPack(databasePath, packType = null) {
    const db = new ClassicLevel(databasePath, DB_OPTIONS);
    const { dbKey, subKey } = packType
        ? { dbKey: packType, subKey: getSubKey(packType) }
        : getPackKeys(await db.keys().all());

    if (!dbKey) {
        return null;
    }

    const mainDb = db.sublevel(dbKey, DB_OPTIONS);
    const subDb = dbKey ? db.sublevel(`${dbKey}.${subKey}`, DB_OPTIONS) : null;
    const foldersDb = db.sublevel("folders", DB_OPTIONS);

    const packData = [];
    for await (const [mainId, source] of mainDb.iterator()) {
        if (subKey && source[subKey] && subDb) {
            const subDocs = await subDb.getMany(source[subKey]?.map((subId) => `${mainId}.${subId}`) ?? []);
            source[subKey] = subDocs;
        }
        packData.push(source);
    }
    const folders = [];
    for await (const [_key, folder] of foldersDb.iterator()) {
        folders.push(folder);
    }
    await db.close();

    return { packType: dbKey, packData: packData, folders: folders };
}

/**
 * Creates a levelDB pack from a JSON. Currently only supports adventure extraction, since other types have nested structures
 *
 * @param {string} jsonPath     Path and file name for the JSON file
 * @param {string} databasePath Path to the levelDB database
 */
export function createPackFromJSON(jsonPath, databasePath) {
    const db = new ClassicLevel(databasePath, { keyEncoding: "utf8", valueEncoding: "json" });
    const sourceJSON = JSON.parse(readFileSync(jsonPath, "utf-8"));
    sourceJSON.forEach((entry) => {
        db.put(`!adventures!${entry._id}`, entry);
    });
}
