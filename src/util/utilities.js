/**
 * Convert array to object list with array index as keys
 * @param {Array<any>} sourceArray
 * @returns {Object}
 */
export function convertArray(sourceArray) {
    if (Array.isArray(sourceArray)) {
        return Object.assign({}, sourceArray);
    }
    return sourceArray;
}

/**
 * Recursively sort an object by key
 * @param {Object} obj
 * @returns {Object}
 */
export function sortObject(obj) {
    if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
        return obj;
    }

    const sortedObject = {};

    Object.keys(obj)
        .sort()
        .forEach((key) => {
            sortedObject[key] = recursivelySortObject(obj[key]);
        });

    return sortedObject;
}
