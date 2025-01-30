import { createPack, getJSONfromPack } from "../util/level-db.js";

if (process.argv.length < 4) {
    console.error("Please enter levelDB source path and a destination path for the modified levelDB");
} else {
    const sourceDB = process.argv[2];
    const targetDB = process.argv[3];
    if (sourceDB === targetDB) {
        console.error("Source and destination path must be different");
    }

    const jsonFile = await getJSONfromPack(sourceDB);

    for (const data of jsonFile.packData) {
        for (const scene of data.scenes) {
            for (const token of scene.tokens) {
                token.delta.system = {};
                token.delta.items = [];
                token.delta.effects = [];
            }
        }
    }

    createPack(targetDB, jsonFile.packType, jsonFile.packData, jsonFile.folders);
}
