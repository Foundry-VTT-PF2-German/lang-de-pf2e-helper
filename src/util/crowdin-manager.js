import crowdin from "@crowdin/crowdin-api-client";

/**
 * Get the project labels for a specified Crowdin project
 *
 * @param {string} projectId    Crowdin project id
 * @param {string} token        Crowdin API access token
 * @returns {Array<Object>}     Object array containing the labels
 */
export function getLabels(projectId, token) {
    const { labelsApi } = new crowdin.default({ token: token });

    return labelsApi.listLabels(projectId, { limit: 500 }).then((labels) => {
        return labels.data.map((entry) => entry.data);
    });
}

/**
 * Get the source files for a specified crowdin project
 *
 * @param {string} projectId    Crowdin project id
 * @param {string} token        Crowdin API access token
 * @returns {Array<Object>}     Object array containing the source files
 */
export function getSourceFiles(projectId, token) {
    const { sourceFilesApi } = new crowdin.default({ token: token });

    return sourceFilesApi.listProjectFiles(projectId, { limit: 500 }).then(async (files) => {
        return files.data.map((entry) => entry.data);
    });
}

/**
 * Get the source strings for a source file within a specified crowdin project
 *
 * @param {string} projectId    Crowdin project id
 * @param {string} token        Crowdin API access token
 * @param {string} sourceFile   Crowdin source file id
 * @returns {Array<Object>}     Object array containing the source strings
 */
export function getSourceStrings(projectId, token, sourceFile) {
    const { sourceStringsApi } = new crowdin.default({ token: token });
    return new Promise(async (resolve) => {
        let sourceStrings = [];
        let offsetCounter = 0;
        let limit = 500;
        let arrayHasData = true;
        do {
            await sourceStringsApi
                .listProjectStrings(projectId, {
                    fileId: sourceFile,
                    limit: limit,
                    offset: offsetCounter * limit,
                })
                .then((sourceStringData) => {
                    if (sourceStringData.data.length > 0) {
                        sourceStrings = sourceStrings.concat(sourceStringData.data.map((entry) => entry.data));
                    } else {
                        arrayHasData = false;
                    }
                });
            offsetCounter = offsetCounter + 1;
        } while (arrayHasData);
        resolve(sourceStrings);
    });
}
