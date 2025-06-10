
import { dTS, getAppSpecificInfo, setAppSpecificInfoExample } from '../../index.js'

// -----------------------------------------------------------------------------------------------------
export const getTableColumns = (tableName) => {
  // console.log(dTS(), 'getTableColumns(', tableName, ') => ', dbStruct[tableName]);

  const {dbStruct} = getAppSpecificInfo()

  if (!dbStruct) {
    console.log(dTS(), `no dbStructure defined. no place to look up: ${tableName} `)
    console.log(dTS(), `read about having the line ${setAppSpecificInfoExample} in your App.js `)
    return []
  }

  if (!dbStruct[tableName]) {
    console.log(dTS(), `${tableName} not found. try the following:`);
    console.log(dTS(), Object.keys(dbStruct));
    return []
  }

  return dbStruct[tableName].fields.map(f => f.COLUMN_NAME)
}