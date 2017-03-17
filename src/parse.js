var path = require('path')
var isFilePath = require('./isFilePath')
var isDirPath = require('./isDirPath')

/**
 * Parse the path
 * @param {String} _path
 * @return {Object}
 * {
 *    fileCheck {String} Whether it is a file path
 *    dirCheck {String} Whether it is a directory path
 *    base: {String} File name + '.' + Suffix name (eg: index.html)
 *    file: {String} File name (eg: index)
 *    dotSuffix: {String} '.' + Suffix name (eg: .html)
 *    suffix: {String} Suffix name (eg: html)
 *    dir: {}, {String} Directory name (eg: http://tool.chinaz.com/regex/)
 *    fullPath, {String} The original path
 * }
 */
function parse(_path) {

    var filePath = isFilePath(_path);
    var dirPath = isDirPath(_path);
    var basename, filename, suffix, suffixType, dirname;

    if (filePath) {

        basename = path.basename(_path);
        filename = basename.split('.')[0];
        suffix = path.extname(_path);
        suffixType = suffix.split('.')[1];
        dirname = _path.split(basename)[0];

    }

    else if (dirPath) {

        basename = null;
        filename = null;
        suffix = null;
        suffixType = null;

    }

    return {
        fileCheck: filePath,
        dirCheck: dirPath,
        base: basename,
        file: filename,
        dotSuffix: suffix,
        suffix: suffixType,
        dir: dirname,
        fullPath: _path
    }

}

module.exports = parse;