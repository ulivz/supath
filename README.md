# supath
An additional path parsing module for nodejs

# Qucik Start

installation:

```
$ npm install supath --save-dev
```

Introduced in the project:

```js
var supath = require('supath')

var aPath = './config/global/global-config.ts'

var result = supath.parse(aPath)
```

`result` will get the following values:
```json
{
  "fileCheck": true,
  "dirCheck": false,
  "base": "global-config.ts",
  "file": "global-config",
  "dotSuffix": ".ts",
  "suffix": "ts",
  "dir": "./config/global/",
  "fullPath": "./config/global/global-config.ts"
}
```

More api please continue to look down.

# API

## supath.checkFileName(fileName)
- ParamType: `String`
- Description: `Check if a file name is valid`

## supath.getPathSep(path)
- Type: `String`
- Description: `Gets a delimiter for a path`

This method is not used to get the system's delimiter
and Returns `undefined` if the path contains '/ \' or both '/ \'


## supath.isFilePath(path)
- ParamType: `String`
- Description: `detect whether a string meets the requirements of the [directory] path`

this method differs from `fs.statSync(path).isFile()`
Path checking does not require that the file or  pointed to must exist
Just used to verify the legitimacy of the path

The following example will return `true`:

```markdown
http://tool.chinaz.com/regex/toxichl.html
C:\Program Files\ASUS\AMDA\AXSP\ATKEX.dll
```



## supath.isDirPath(path)
- ParamType: `String`
- Description: `detect whether a string meets the requirements of the [directory] path`


The following example will return `true`:

```markdown
- http://tool.chinaz.com/regex.
- http://tool.chinaz.com/regex/
- http://tool.chinaz.com/regex
```


## supath.parse(path)
- ParamType: `String`
- Description: `Returns the various details of a path`

the description of the Returning object:

key|desc
---|---
fileCheck|Whether it is a `file` path
dirCheck|Whether it is a `directory` path
base| `File name + '.' + Suffix name` (eg: `index.html`)
file| `File name` (eg: `index`)
dotSuffix| `'.' + Suffix name` (eg: `.html`)
suffix| `Suffix name` (eg: `html`)
dir| `Directory name` (eg: `http://tool.chinaz.com/regex/`)
fullPath| `The original path`


## supath.standardDir(path, flag)
- ParamType: `(String, Boolean)`
- Description: `Directory path normalization - directory path ends with '/' or no '\`

The default value of `flag` is `true`, For the role of flag, please see the table below

flag|desc
---|---
true|returns the path string with `\` at the end
false|return to the end of the path string without `\`
