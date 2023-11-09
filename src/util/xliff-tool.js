// Get he module
import he from "he";
const { decode } = he;

/**
 * Escape < and > from a string
 *
 * @param {string} value    The original string
 * @returns {string}        The modified string
 */
function esc(value) {
    return value.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

/**
 * Unifies line feeds within a string to LF
 *
 * @param {string} data The original string
 * @returns {string}    The modified string
 */
function unifyLF(data) {
    return data.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
}

/**
 * Adds header and footer to xliff entries
 *
 * @param {string} entries  String containing the finished xliff translation units
 * @returns {string}        Finished xliff as a string
 */
function finalizeXliff(entries) {
    let xliff = `<?xml version="1.0" encoding="UTF-8"?>`;
    xliff += `<xliff xmlns="urn:oasis:names:tc:xliff:document:1.2" version="1.2">`;
    xliff += `\n  <file source-language="EN" target-language="DE">\n    <body>\n`;
    xliff += entries;
    xliff += `    </body>\n  </file>\n</xliff>`;
    return xliff;
}

/**
 * Create a new translation unit as a string
 *
 * @param {string} key      The translation unit ID
 * @param {string} value    The translation unit source
 * @returns {string}        The new translation unit
 */
function newTranslationEntry(key, value) {
    let newEntry = `      <trans-unit id="${esc(key)}">\n`;
    newEntry += `        <source>${esc(unifyLF(value))}</source>\n`;
    newEntry += `        <target state="new"/>\n`;
    newEntry += `      </trans-unit>\n`;

    return newEntry;
}

/**
 * Compares an existing translation unit with a source value and updates it if neccessary
 *
 * @param {{source: string, key: string, state: string, note: string}} entry    Object containing the data for the translation unit
 * @param {string} value                                                        String containing the updated value
 * @returns {string}                                                            The updated translation unit
 */
function updateTranslationEntry(entry, value) {
    entry.source = unifyLF(entry.source);
    value = unifyLF(value);
    // For updates on untranslated sources, add new entry instead of updating the current one
    if (entry.translation === null) {
        return newTranslationEntry(entry.key, value);
    }
    if (entry.source !== value) {
        entry.note = `Old source text:\n${entry.source}`;
        entry.state = "needs-translation";
        entry.source = value;
    }
    let updatedEntry = `      <trans-unit id="${esc(entry.key)}">\n`;
    updatedEntry += `        <source>${esc(entry.source)}</source>\n`;
    updatedEntry += `        <target state="${entry.state}">`;
    updatedEntry += `${esc(entry.translation)}</target>\n`;
    if (entry.note && entry.note !== "") {
        updatedEntry += `        <note>${esc(entry.note)}</note>\n`;
    }
    updatedEntry += `      </trans-unit>\n`;
    return updatedEntry;
}

/**
 * Creates a new xliff from a flattened JSON structure
 *
 * @param {Object} jsonData Flattened JSON structure
 * @returns {string}        String containing the xliff data
 */
export function jsonToXliff(jsonData) {
    let xliff = "";

    Object.keys(jsonData).forEach((key) => {
        xliff += newTranslationEntry(key, jsonData[key]);
    });

    return finalizeXliff(xliff);
}

/**
 * Creates a JSON structure from a xliff. If metadata is set to true, the function returns an object for each key containing source,
 * translation, state, key, and note. Otherwise it creates a flattened JSON object with only key and value
 *
 * @param {string} xliffData                                                             Xliff data as string
 * @param {boolean} metadata                                                             Return metadata for translation units?
 * @returns {Object|Array<{source: string, key: string, state: string, note: string}>}   Flattened JSON object including either values only or metadata
 */
export function xliffToJson(xliffData, metadata = false) {
    // Get all translation units
    const transUnits = xliffData.match(/<trans-unit[\s\S]*?<\/trans-unit>/g);
    return Object.fromEntries(
        transUnits.map((transUnit) => {
            const key = decode(transUnit.match(/<trans-unit id="([^"]*?)"[^>]*?>/)[1]);
            const source = decode(transUnit.match(/<source>([^<]*?)</)[1]);
            const targetUnit = transUnit.match(/<target state="[^"]*?">([^<]*?)</);
            const translation =
                Array.isArray(targetUnit) && targetUnit.length > 1 ? unifyLF(decode(targetUnit[1])) : null;
            if (!metadata) {
                return [key, translation === null ? source : translation];
            }
            const state = transUnit.match(/<target state="([^"]*?)"\/?>/)[1];
            const noteUnit = transUnit.match(/<note>([^<]*?)</);
            const note = Array.isArray(noteUnit) && noteUnit.length > 1 ? noteUnit[1] : null;
            const data = { key: key, state: state, source: source, translation: translation, note: note };
            return [key, data];
        })
    );
}

/**
 * Updates xliff data with updates from a flattened JSON object
 *
 * @param {string} xliffData    The xliff data
 * @param {Object} update       Flattened JSON object
 * @returns {string}            Updated xliff as string
 */
export function updateXliff(xliffData, update) {
    // Extract flattened object from xliffData
    const xliff = xliffToJson(xliffData, true);

    // Initialize updated xliff
    let updatedXliff = "";

    // Loop through update
    Object.keys(update).forEach((key) => {
        updatedXliff += xliff[key]
            ? updateTranslationEntry(xliff[key], update[key])
            : newTranslationEntry(key, update[key]);
    });
    return finalizeXliff(updatedXliff);
}
