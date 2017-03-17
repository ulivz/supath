var supath = require('../index')

var aPath = './config/global/global-config.ts'

var result = supath.parse(aPath)

console.log(JSON.stringify(result, null, 2))