
# TODO

**WARNING:** Can not test with npm link -- app using simple-widgets will be unable to resolve react and react-dom
npm link does not behave like a regular npm installed library
Don't try testing with npm link (lost two full days, 4/6/2023 and 4/7/2023) chasing false errors:

- duplicate react error message in the browser
- app using simple-widgets will be unable to resolve react and react-dom

- Had to do  npm i --legacy-peer-deps to get npm install to work in a completely new cloned directory (no previous node_modules)
- Move calendar from simple-forms to simple-widgets, it is less complicated an removed many dependancies
- WSL paste is not keybound on laptop
- can we still use enzyme-adapter-react-16 even though we are React 17?

[ ] What to do when the list is all UpperCase and the incoming value is lowercase?

```bash

LocalChoice.js:36    name: sex value: m is not found in selection list: (3) [{…}, {…}, {…}]
LocalChoice.js:162    sex not selectable, lookup undefined does not contain  m => m
```

## DeepScan found calls to setTableTD() with three arguments, function only takes two arguements

```bash
rg 'setTableTD'
src/SearchSortTable.js
378:    const setTableTD = (obj, i) => {
421:                            { [{row, col}].map((obj) => setTableTD(obj, index, idx)) }
441:                            { [{row, col}].map((obj, i) => setTableTD(obj, index, idx)) }
```

## remove the need for dbStruct info to in the forground code

better solution is to make this info from the server side as an api and then
functions in the application that feed simple-widgets -- not have simple-widgets access
dbStruct directly.

❯ rg 'dbStruct.*getAppSpecificInfo'
src/forms/model/getTablePKs.js
8:  const {dbStruct} = getAppSpecificInfo()
28:    const {dbStruct} = getAppSpecificInfo()

getTablePKs()          src/forms/model/getTablePKs.js      used by genDictionaryEntry.js
findTableByGqlName()   src/forms/model/getTablePKs.js      used by getGqlPKs(), src/forms/newRecord.js, src/forms/applyDeepValueChange.js,

formFromTableInfo()    src/forms/model/formFromTableInfo.js  used by src/forms/model/genDictionaryEntry.js
getTableColumns()      src/forms/model/getTableColumns.js    used by src/forms/model/genDictionaryEntry.js, src/forms/genRowBuilder.js
