
import { TS } from '../../time.js'
import { getAppSpecificInfo } from './appSpecificInfo.js';

// -----------------------------------------------------------------------------------------------------
export const getTableColumns = (tableName) => {
  // console.log(TS(), 'getTableColumns(', tableName, ') => ', dbStruct[tableName]);

  const {dbStruct} = getAppSpecificInfo()

  if (!dbStruct) {
    console.log(TS(), `no dbStructure defined. no place to look up: ${tableName} `)
    console.log(TS(), `read about having the line setAppSpecificInfo({dbStruct, formDictionary, namedQueries}) in your App.js `)
    return []
  }

  if (!dbStruct[tableName]) {
    console.log(TS(), `${tableName} not found. try the following:`);
    console.log(TS(), Object.keys(dbStruct));
    return []
  }

  return dbStruct[tableName].fields.map(f => f.COLUMN_NAME)
}