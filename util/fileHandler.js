import { BlobReader, BlobWriter, ZipReader } from "@zip.js/zip.js";

// Read zip file, return array of objects containing filename, file path, and file content
export async function getContentFromZip(file) {
    const zipReader = new ZipReader(new BlobReader(file));
    const zipContent = await zipReader.getEntries();
    const filteredZipContent = [];
    zipContent.forEach((entry) => {
        if (!entry.filename.endsWith("/")) filteredZipContent.push(entry);
    });
    const fileContentPromises = [];
    filteredZipContent.forEach((entry) => {
        fileContentPromises.push(entry.getData(new BlobWriter()).then((blobRes) => blobRes.text()));
    });
    const fileContents = await Promise.all(fileContentPromises);
    let i = 0;
    const results = filteredZipContent.map((entry) => {
        const mappedEntry = {
            ...getSplittedFileName(entry.filename),
            ["content"]: fileContents[i],
        };
        i = i + 1;
        return mappedEntry;
    });
    return results;
}

// Get file from URL as blob
export async function getFileFromURL(url) {
    return fetch(url).then((res) => res.blob());
}

// Separate file path and file name from a given string
export function getSplittedFileName(filePath) {
    const filename = filePath.split("\\").pop().split("/").pop();
    const filenameSplit = {
        filename: filename,
        path: filePath.replace(filename, ""),
    };
    return filenameSplit;
}

// Fetches zip file from URL and returns array containing filename, file path, and file content as text
export async function getZipContentFromURL(url) {
    return getContentFromZip(await getFileFromURL(url));
}

const packs = await getZipContentFromURL("https://github.com/foundryvtt/pf2e/releases/latest/download/json-assets.zip");
const test = packs[10];
console.warn(JSON.parse(test.content));
/*test.forEach((entry) => {
    if (entry.name === "Zridi") {
        console.warn(entry.system.abilities.cha);
    }
});*/
