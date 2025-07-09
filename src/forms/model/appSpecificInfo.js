
let appSpecificInfo = {}

export function setAppSpecificInfo(functionsFromApp) {

  appSpecificInfo = functionsFromApp
  // console.log('setAppSpecificInfo() <-', appSpecificInfo)

}

export function getAppSpecificInfo() {
  // console.log('getAppSpecificInfo() <-', appSpecificInfo)
  return appSpecificInfo
}

export const setAppSpecificInfoExample = 'setAppSpecificInfo({dbStruct, formDictionary, execQuery})'

// How to Use:
//    import { getAppSpecificInfo } from 'simple-widgets'
//    const {dbStruct, formDictionary, execQuery} = getAppSpecificInfo()


// execQuery()            src/forms/lookupUtil.js
//                        src/forms/EntryScreen.js
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

