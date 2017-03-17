/**
 * Note: this method differs from " fs.statSync (path) .isFile () "
 * Path checking does not require that the file pointed to must exist
 * Just used to verify the legitimacy of the path
 *
 * The following example will return true：
 *　http://tool.chinaz.com/regex/toxichl.html
 *
 * @param {String} path
 * @return {Boolean} test result
 */
function isFilePath(_path) {

    var reg = /^.*(\/|\\)[^\\/:*?""<>|]+\.\w+$/;
    return reg.test(_path);

}

module.exports = isFilePath;