import { BlobReader, BlobWriter, ZipReader } from "@zip.js/zip.js";

// Get file from URL as blob
export async function getBlobFromURL(url) {
    return fetch(url).then((res) => res.blob());
}

// Get zip file from URL, return array of objects containing filename and file content
export async function getAndUnzipFromURL(url, json = false) {
    const zipFileBlob = await getBlobFromURL(url);
    const zipReader = new ZipReader(new BlobReader(zipFileBlob));
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
            ["filename"]: entry.filename,
            ["content"]: json ? JSON.parse(fileContents[i]) : fileContents[i],
        };
        i = i + 1;
        return mappedEntry;
    });
    return results;
}
