
import { dTS } from '../../time.js'
import { getAppSpecificInfo, setAppSpecificInfoExample } from './appSpecificInfo.js';

// -----------------------------------------------------------------------------------------------------
export const getTablePKs = (tableName) => {

  const {dbStruct} = getAppSpecificInfo()

  if (!dbStruct) {
    console.log(dTS(), `no dbStructure defined. no place to look up: ${tableName} `)
    console.log(dTS(), `read about having the line ${setAppSpecificInfoExample} in your App.js `)
    return []
  }

  if (!dbStruct[tableName]) {
    console.log(dTS(), `${tableName} not found. try the following table names:`);
    console.log(dTS(), Object.keys(dbStruct));
    return []
  }

  return dbStruct[tableName].pk
}

// -----------------------------------------------------------------------------------------------------
export const findTableByGqlName = (gqlTableName) => {

    const {dbStruct} = getAppSpecificInfo()

    if (!dbStruct) {    // no database Dictionary to look up, probably there is no database
       return null
    }

    const tableNames = Object.keys(dbStruct)
    const f = tableNames.find( k => (dbStruct[k].gqlNames.table == gqlTableName) )

    if (f && dbStruct[f])
       return dbStruct[f]

    return null
}

// -----------------------------------------------------------------------------------------------------
const keyReverse = (obj) => {

  const keys = Object.keys(obj)
  const newObj = {}
  keys.every( k => newObj[obj[k]] = k)

  return newObj          // {"A": 1, "B": 2}  becomes {1: "A", 2: "B"}
}

// -----------------------------------------------------------------------------------------------------
export const getGqlFieldNames = (gqlTableName) => {

  const dbInfo = findTableByGqlName(gqlTableName)
  if (!dbInfo) {
    return null
  }

  const gqlFieldNames = dbInfo.gqlNames.fields.keys()

  return gqlFieldNames
}

// -----------------------------------------------------------------------------------------------------
export const getGqlPKs = (gqlTableName) => {

  const dbInfo = findTableByGqlName(gqlTableName)
  if (!dbInfo) {
    return null
  }

  const gqlFields = dbInfo.gqlNames.fields    // keys by gql field names
  const translate = keyReverse(gqlFields)

  return dbInfo.pk.map(pk => translate[pk])
}
