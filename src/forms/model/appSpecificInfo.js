
let appSpecificInfo = {}

export const setAppSpecificInfo = (functionsFromApp) => {
  appSpecificInfo = functionsFromApp
}

export const getAppSpecificInfo = () => { return appSpecificInfo }

export const setAppSpecificInfoExample = 'setAppSpecificInfo({dbStruct, formDictionary, namedQueries, execNamedQuery, fetchRec})'

// How to Use:
//    import { getAppSpecificInfo } from './model/appSpecificInfo.js'
//    const {dbStruct, formDictionary, namedQueries, etc} = getAppSpecificInfo()


// execNamedQuery()       src/forms/lookupUtil.js
//
// namedQueries()         src/forms/EntryScreen.js
//                        src/forms/SimpleDataTable.js
//
// fetchRec()             src/forms/EntryScreen.js
//                        src/forms/SimpleDataTable.js
//
// dbStruct               src/forms/FormFields.js
//                        src/forms/model/formFromTableInfo.js
//                        src/forms/model/getTablePKs.js
//                        src/forms/model/getTableColumns.js
//
// formDictionary         src/forms/FormFields.js
//                        src/forms/getLabels.js
//

