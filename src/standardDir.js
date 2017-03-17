var getPathSep = require('./getPathSep')

/**
 * Directory path normalization - directory path ends with '/ \' or no '/ \'
 *
 * The default value of {flag} is true
 *
 * {flag} = true, returns the path string with '/ \' at the end
 * {flag} = false, return to the end of the path string without '/ \'
 *
 * @param {Array} path
 * @param {Boolean} flag
 */

function standardDir(_path, flag) {

    var sep = getPathSep(_path);

    if (flag || flag === undefined) {

        if (_path.split(sep).pop() !== sep) {
            return _path + sep;
        }

    } else if (!flag) {

        if (_path.split(sep).pop() === sep) {
            _path = _path.split(sep).pop().join(sep);
            return _path;
        }

    }
    return _path;
}

module.exports = standardDir;