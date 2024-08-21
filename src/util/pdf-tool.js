import { existsSync, readdirSync, readFileSync } from "fs";
import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";
import { parsePath, saveFileWithDirectories } from "./file-handler.js";

const path = process.argv[2] ? process.argv[2] : "./";

if (!existsSync(path)) {
    console.warn(`Path ${path} does not exist.`);
}

async function extractTextFromPDF2(filePath) {
    const data = new Uint8Array(readFileSync(filePath));

    const pdfDocument = await getDocument({ data }).promise;
    let textContent = "";

    for (let pageNum = 1; pageNum <= pdfDocument.numPages; pageNum++) {
        const page = await pdfDocument.getPage(pageNum);
        const textContentItems = await page.getTextContent();
        const pageText = textContentItems.items.map((item) => item.str).join(" ");
        textContent += pageText + "\n";
    }

    // Text formating
    textContent = textContent.replace(/ +/g, ` `).replace(/- /g, ``).replace(/\. /g, `.\n\n`);

    return textContent;
}

console.warn(`Extracting PDF in ${path}`);
const dirData = readdirSync(path);
for (const file of dirData) {
    const fileInfo = parsePath(file);
    if (fileInfo.fileType !== "pdf") {
        continue;
    }
    const filePath = path + fileInfo.fileName;
    console.warn(`  - Extracting data from ${filePath}`);
    const extractedData = await extractTextFromPDF2(filePath + ".pdf");
    saveFileWithDirectories(filePath + ".txt", extractedData);
}
