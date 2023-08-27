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
