/**
 * Convert array to object list with array index as keys
 * @param {Array<any>} sourceArray
 * @returns {Object}
 */
function convertArray(sourceArray) {
    if (Array.isArray(sourceArray)) {
        return Object.assign({}, sourceArray);
    }
    return sourceArray;
}

/**
 * Sort an object by key
 * @param {Object} sourceObject
 * @returns {Object}
 */
function sortObject(sourceObject) {
    return Object.keys(sourceObject)
        .sort()
        .reduce((obj, key) => {
            obj[key] = sourceObject[key];
            return obj;
        }, {});
}
