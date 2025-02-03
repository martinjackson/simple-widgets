

import { fetchLookupData } from './index.js'

// ------------------------------------------------------------------------
export function genEmptyRecord(typeName, children=false, whereTraveled=[]) {

  //   const nouns = testData.data.__schema.types

  const info = fetchLookupData('DICTIONARY_ITEMS')
  const nouns = info.__schema.types

  if (whereTraveled.includes(typeName))
     return null

  whereTraveled.push(typeName)

  const emptyObj = {}
  const item = nouns.find(noun => noun.name == typeName)
  if (item == null) {
    console.log('can not find record type', typeName, 'in list', nouns);
    return emptyObj
  }

  item.fields.map(f => {

    if (f.type.kind == 'LIST') {
      emptyObj[f.name] = []
      if (children) {
        const kid = genEmptyRecord(f.type.ofType.name,children, whereTraveled)
        if (kid) {
          emptyObj[f.name].push( kid )
        }
      }

    } else {
      let type = (f.type.name) ? f.type.name : f.type.ofType['name']
      let defValue = ""
      if (type == "Boolean")  defValue = false
      if (type == "Date")     defValue = ''
      if (type == "Float")    defValue = 0.0
      if (type == "Int")      defValue = 0
      if (type == "String")   defValue = ''
      if (type == null)  {    defValue = null; console.log('What ???', typeName, f.name); }

      emptyObj[f.name] = defValue
    }
  })

  return emptyObj

}

