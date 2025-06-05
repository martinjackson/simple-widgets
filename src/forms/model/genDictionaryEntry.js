
import { dTS, toCamelCaseVar, toEnglishPhrase, getTableColumns, getTablePKs, formFromTableInfo } from '../index.js'

// ---------------------------------------------------------------------------------------------------------------------
export const genDictionaryEntry = (nameArgs) => {

  // console.log(dTS(), 'genDictionaryEntry()', nameArgs);

  const tableNames = (Array.isArray(nameArgs)) ? nameArgs : nameArgs.split(',')

  let tables = []

  tableNames.map((tableName) => {
    const dbFields = getTableColumns(tableName)
    const labels = dbFields.map(f => toEnglishPhrase(f))
    const fieldList = formFromTableInfo(tableName, dbFields, labels)
    const keyList = getTablePKs(tableName).map(f => toCamelCaseVar(f))
    const shortName = removeSchemaName(tableName)

    const newEntry = {
      table: tableName,
      dbFields: dbFields,
      labels: labels,
      gqlName: toEnglishPhrase(shortName).replace(' ',''),
      gqlKeys: keyList,
      fieldList: fieldList
    }
    tables.push(newEntry)
  })

  console.log(dTS(), `const tables = [
    ${ tables.map(entry => genOneTableEntryForm(entry)).join(',\n') }
  ]`)


}

// ---------------------------------------------------------------------------------------------------------------------
const removeSchemaName = (fullName) => {

  let table = fullName
  const i = fullName.indexOf('.')
  if (i > -1) {
     table = fullName.substring(i+1)
  }

  return table
}

// ---------------------------------------------------------------------------------------------------------------------
const qs = (arr) => {           // array of quotes strings
  return '"' + arr.join('","') + '"';
}

// ---------------------------------------------------------------------------------------------------------------------
const genOneTableEntryForm = (entry) => {

    const fields = entry.fieldList.map(f => JSON.stringify(f)).join(',\n')

    return `
    {
    "table": "${entry.table}",
    "dbFields": [${qs(entry.dbFields)}],
    "labels": [${qs(entry.labels)}],

    "gqlName": "${entry.gqlName}",
    "gqlKeys": [${qs(entry.gqlKeys)}],

    "fieldList": [
      ${fields}
      ]
    }
    `
}
