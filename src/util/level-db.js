import { ClassicLevel } from "classic-level";
import { isDoc } from "./utilities.js";

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
 * Creates a Foundry levelDB pack. Can also add folder structures if provided
 *
 * @param {string} databasePath         Save path for the LevelDB
 * @param {string} packType             The pack type (adventures, actors, items, journal, macros, tables)
 * @param {Array<Object>} sourceData    The pack's data
 * @param {Array<Object>} folders       The pack's folders
 */
export async function createPack(databasePath, packType, sourceData, folders = []) {
    const db = new ClassicLevel(databasePath, DB_OPTIONS);
    const { dbKey, subKey } = { dbKey: packType, subKey: getSubKey(packType) };

    // Initialize sublevel DBs
    const mainDb = db.sublevel(dbKey, DB_OPTIONS);
    const subDb = dbKey ? db.sublevel(`${dbKey}.${subKey}`, DB_OPTIONS) : null;
    const foldersDb = db.sublevel("folders", DB_OPTIONS);

    const docBatch = mainDb.batch();
    const embeddedBatch = subDb?.batch();

    // Loop through pack data
    for (const source of sourceData) {
        if (subKey) {
            const embeddedDocs = source[subKey];
            if (Array.isArray(embeddedDocs)) {
                for (let i = 0; i < embeddedDocs.length; i++) {
                    const doc = embeddedDocs[i];
                    if (isDoc(doc) && embeddedBatch) {
                        embeddedBatch.put(`${source._id}.${doc._id}`, doc);
                        embeddedDocs[i] = doc._id;
                    }
                }
            }
        }
        docBatch.put(source._id, source);
    }
    await docBatch.write();
    if (embeddedBatch?.length) {
        await embeddedBatch.write();
    }

    // Add pack folders if provided
    if (folders.length) {
        const folderBatch = foldersDb.batch();
        for (const folder of folders) {
            folderBatch.put(folder._id, folder);
        }
        await folderBatch.write();
    }
    await db.close();
}
