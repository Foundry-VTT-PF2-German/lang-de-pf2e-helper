/**
 * Convert array to object list with array index as keys
 *
 * @param {Array<any>} sourceArray  The array that shluld get converted
 * @returns {Object}                The converted Object
 */
export function convertArray(sourceArray) {
    if (Array.isArray(sourceArray)) {
        return Object.assign({}, sourceArray);
    }
    return sourceArray;
}

/**
 * Sort an object by key with additional sort options
 *
 * @param {Object} obj                              The initial object that should get sorted
 * @param {object} [options={}]                     Additional options that configure the sort
 * @param {boolean} [options.recursiveSort=false]   Do the sort recursive
 * @returns {Object}                                The new sorted object
 */
export function sortObject(obj, { recursiveSort = false } = {}) {
    if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
        return obj;
    }

    const options = { recursiveSort };
    const sortedObject = {};

    Object.keys(obj)
        .sort()
        .forEach((key) => {
            sortedObject[key] = recursiveSort ? sortObject(obj[key], options) : obj[key];
        });

    return sortedObject;
}

/**
 * Recursively loop through a complex object and search for the specified properties and replace their values
 * Property values for the found properties are used as keys for the replacement object
 *
 * @param {Object} baseObject                   The baseObject object which should get updated
 * @param {Array<string>} updatedProperties     Array containing property names thas should get updated
 * @param {Object} replacements                 Object containing the replacement values
 */
export function replaceProperties(baseObject, updatedProperties, replacements) {
    for (const key in baseObject) {
        if (baseObject.hasOwnProperty(key)) {
            if (updatedProperties.includes(key) && replacements[baseObject[key]]) {
                baseObject[key] = replacements[baseObject[key]];
            } else if (typeof baseObject[key] === "object") {
                if (Array.isArray(baseObject[key])) {
                    for (let i = 0; i < baseObject[key].length; i++) {
                        if (typeof baseObject[key][i] === "object") {
                            replaceProperties(baseObject[key][i], updatedProperties, replacements);
                        }
                    }
                } else {
                    replaceProperties(baseObject[key], updatedProperties, replacements);
                }
            }
        }
    }
}

/**
 * Merges properties of two nested objects and sorts them
 * New keys are always added in lower case
 *
 * @param {Object} target   The object that should get updated
 * @param {Object} source   The data that gets added
 * @returns {Object}        The combined and sorted object
 */
export function mergeNestedObjects(target, source) {
    for (const key in source) {
        if (source.hasOwnProperty(key)) {
            if (
                typeof source[key] === "object" &&
                source[key] !== null &&
                source[key] !== undefined &&
                !Array.isArray(source[key])
            ) {
                // Wenn die Eigenschaft ein verschachteltes Objekt ist, rufe die Funktion rekursiv auf
                target[key] = mergeNestedObjects(target[key] || {}, source[key]);
            } else {
                // Füge die Eigenschaft in das Zielobjekt ein
                target[key] = source[key];
            }
        }
    }
    return sortObject(target, { recursiveSort: true });
}
