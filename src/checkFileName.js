const FILE_NAME_CHECK = /^[^\\/:*?""<>|]+$/;

/**
 * detect the legitimacy of the file name
 * @param fileName
 * @returns {boolean}
 */
function checkFileName(fileName) {
    return FILE_NAME_CHECK.test(fileName);
}

module.exports = checkFileName;