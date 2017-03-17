var getPathSep = require('./getPathSep')
var checkFileName = require('./checkFileName')

/**
 * This method is used to detect whether a string meets the requirements of the directory path
 *
 * The following example will return true
 *
 * - http://tool.chinaz.com/regex.
 * - http://tool.chinaz.com/regex/
 * - http://tool.chinaz.com/regex
 *
 * @param {String} path
 * @return {Boolean} test result
 */
function isDirPath(_path) {

    const reg = /^(\w|:|\/|\\|\.)+(\/|\\)$/;
    const sep = getPathSep(_path);

    if (!sep) return false;

    /**
     * Detects the contents after the decimal points
     * @return {boolean}
     */
    function checkDotPostion() {
        if (/\./.test(_path)) {

            var splitArr = _path.split('.');
            var last = splitArr.pop();

            // Dot behind the "\" or "/" description is not a file path
            if (last && /(\\|\/)/.test(last)) {
                return true;
            }

            // Has a suffix name, that is the file path
            else if (last && /\w+/.test(last)) {
                return false;
            }

            else if (last === '') {
                return true;
            }

        }

        else {
            return true;
        }
    }

    return reg.test(_path) || checkFileName(_path.split(sep).pop()) && checkDotPostion();

}

module.exports = isDirPath;