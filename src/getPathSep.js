/**
 * Gets the delimiter for a given path
 *
 * note: This method is not used to get the system's delimiter
 * Returns the undefined if the path contains '/ \' or both '/ \'
 * @param {String} _path
 */
function getPathSep(_path) {

    const sepRegUnix = /\//;
    const sepRegWin = /\\/;
    var sep;
    var unixTest = sepRegUnix.test(_path);
    var winTest = sepRegWin.test(_path);

    if (winTest && !unixTest) {
        sep = '\\';
    }

    else if (unixTest && !winTest) {
        sep = '\/';
    }

    return sep;

}

module.exports = getPathSep;