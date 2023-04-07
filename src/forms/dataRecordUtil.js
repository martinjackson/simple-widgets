import { TS } from './time.js'

import { getKeyValues, getGqlName } from './getKeyValues.js'
import { getGqlPKs } from './model/getTablePKs.js'

// ------------------------------------------------------------------------------
const stringify = (val) => {
      let s = ' "'+val+'"'
      if (typeof val == 'number' ) {
          s = ''+val
      }
      if (typeof val == 'object' ) {
          s = JSON.stringify(val)
      }
      return s
}


// ------------------------------------------------------------------------------
export const applyDeepValueChange = (data, name, value) => {
            // console.log(TS(), 'data change: ', name, value);

            let fqVarName = name
            let valExpression = stringify(value)

            const idx = fqVarName.lastIndexOf('.')
            let recName = (idx != -1) ? fqVarName.substr(0, idx) : name
            let fieldName = (idx != -1) ? fqVarName.substr(idx+1) : name

            // https://stackoverflow.com/questions/7650071/is-there-a-way-to-create-a-function-from-a-string-with-javascript
            // var func = new Function("return " + "function (a, b) { return a + b; }")();

            const setFnStr = `return function changeDataFn(data) {
                const tmp = structuredClone(data)                              // {...data} not a deep copy
                tmp.${fqVarName} = ${valExpression}
                return tmp
              }
              `

            const getFnStr = `return function getDataFn(data) {
                return data.${recName}
              }
              `
            let rec = {}
            try {
                const getDataFn = new Function(getFnStr)();
                rec = getDataFn(data)
            } catch(e) {
                console.log('applyDeepValueChange() in dataRecordUtil.js:46 and', e.fileName+':'+e.lineNumber, e.message, );
            }

            let tmp
            try {
              const changeDataFn = new Function(setFnStr)();
              tmp = changeDataFn(data)
            } catch(e) {
              console.log('applyDeepValueChange() in dataRecordUtil.js:54', e);
            }

            const gqlName = getGqlName(recName)
            const pkNames = getGqlPKs(gqlName)
            if (!pkNames) {
              // Should never see this db Structure as ROWID as PK on tables w/o keys
              const msg = 'BIG PROBLEM: '+gqlName+' has no keys.'
              throw new Error(msg)
            }

            const keyValues = getKeyValues(pkNames, rec, gqlName)
            const update = {
              gqlTable: gqlName,
              gqlField: fieldName,
              value: value,
              where: keyValues
            }
            // console.log(TS(), 'Transactions:', update);

    return ({newData: tmp, update: update})
}