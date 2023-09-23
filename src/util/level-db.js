import { ClassicLevel } from "classic-level";
import { readFileSync } from "fs";
import { saveFileWithDirectories } from "./fileHandler";

// Currently not needed
//const DB_KEYS = ["actors", "items", "journal", "macros", "tables"];
//const EMBEDDED_KEYS = ["items", "pages", "results"];

/**
 * Extracts data from a levelDB pack as JSON. Currently only supports adventure extraction, since other types have nested structures
 *
 * @param {string} databasePath //Path to the levelDB database
 * @param {string} jsonPath     //Extraction path and file name for the JSON file
 */
export async function getJSONfromPack(databasePath, jsonPath) {
    const db = new ClassicLevel(databasePath, { valueEncoding: "json" });
    const keys = await db.keys().all();
    const extractedPacks = await db.getMany(keys.filter((key) => key.includes("!adventures!")));
    saveFileWithDirectories(jsonPath, JSON.stringify(extractedPacks, null, 2));
}

/**
 * Creates a levelDB pack from a JSON. Currently only supports adventure extraction, since other types have nested structures
 *
 * @param {string} jsonPath     //Path and file name for the JSON file
 * @param {string} databasePath //Path to the levelDB database
 */
export function createPackFromJSON(jsonPath, databasePath) {
    const db = new ClassicLevel(databasePath, { valueEncoding: "json" });
    const sourceJSON = JSON.parse(readFileSync(jsonPath, "utf-8"));
    sourceJSON.forEach((entry) => {
        db.put(`!adventures!${entry._id}`, entry);
    });
}
