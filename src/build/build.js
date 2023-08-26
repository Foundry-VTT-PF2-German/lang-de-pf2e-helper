import { mkdirSync, accessSync, readdirSync, rmSync, cpSync, statSync, writeFileSync, existsSync } from "fs";
import { readJSONFile, CONFIG_FILE } from "./config_helper.js";

export const build = (paths, targetFolder, extraConverters) => {
    if (targetFolder === undefined && existsSync(CONFIG_FILE)) {
        // We may want to move this higher in case we get more relevant parameters in the config file
        targetFolder = readJSONFile(CONFIG_FILE).buildPath;
    }

    // Default value in case no folder was given and no preference was found in the config file
    if (targetFolder === undefined) {
        targetFolder = "./build";
    }

    // Check if folder exists and eventually create it
    try {
        accessSync(targetFolder);
    } catch (error) {
        if (error.code === "ENOENT") {
            mkdirSync(targetFolder);
        } else {
            throw error;
        }
    }

    // Delete all files and folders below target folder, so we don't get any artifacts from previous builds
    for (const path of readdirSync(targetFolder)) {
        rmSync(targetFolder + "/" + path, { recursive: true });
    }

    const recursiveCopy = (path) => {
        const stats = statSync(path);
        if (stats.isDirectory()) {
            mkdirSync(targetFolder + "/" + path, { recursive: true });
            for (const child of readdirSync(path)) {
                recursiveCopy(path + "/" + child);
            }
        } else {
            if (path.substr(path.length - 5) == ".json") {
                const jsonContent = readJSONFile(path);
                if (extraConverters && extraConverters[path]) {
                    extraConverters[path](jsonContent);
                }

                // Minify JSON
                writeFileSync(targetFolder + "/" + path, JSON.stringify(jsonContent)); //, null, 0));
            } else {
                cpSync(path, targetFolder + "/" + path);
            }
        }
    };

    for (const file of paths) {
        recursiveCopy(file);
    }
};
