
import { TS } from '../time.js'
import { getAppSpecificInfo } from './appSpecificInfo.js';

// -----------------------------------------------------------------------------------------------------
export const getTablePKs = (tableName) => {

  const {dbStruct} = getAppSpecificInfo()

  if (!dbStruct[tableName]) {
    console.log(TS(), `${tableName} not found. try the following:`);
    console.log(TS(), Object.keys(dbStruct));
    return []
  }

  return dbStruct[tableName].pk
}

// -----------------------------------------------------------------------------------------------------
export const findTableByGqlName = (gqlTableName) => {

    const {dbStruct} = getAppSpecificInfo()

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
export const getGqlPKs = (gqlTableName) => {

  const dbInfo = findTableByGqlName(gqlTableName)
  if (!dbInfo) {
    return null
  }

  const gqlFields = dbInfo.gqlNames.fields    // keys by gql field names
  const translate = keyReverse(gqlFields)

  return dbInfo.pk.map(pk => translate[pk])
}
