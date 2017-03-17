/**
 * @license v2js v0.0.1
 * (c) 2016-2017 toxixhl
 * License: MIT
 */
var checkFileName = require('./src/checkFileName')
var getPathSep = require('./src/getPathSep')
var isDirPath = require('./src/isDirPath')
var isFilePath = require('./src/isFilePath')
var parse = require('./src/parse')
var standardDir = require('./src/standardDir')

module.exports = {
    checkFileName,
    getPathSep,
    isDirPath,
    isFilePath,
    parse,
    standardDir
}
