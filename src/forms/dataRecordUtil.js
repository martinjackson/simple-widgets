
import { getKeyValues, getGqlName } from './getKeyValues.js'
import { getGqlPKs } from './model/getTablePKs.js'

// ------------------------------------------------------------------------------
const stringify = (val) => {

       // possible typeof: string, number, bigint, boolean, undefined, symbol, null
       // TODO how to handle symbol ???

      const valType = typeof val
      let s = val

      if (['number', 'bigint','boolean'].indexOf(valType) != -1 ) {
          s = ''+val
      }

      if (valType === 'object' || valType === 'string') {
        s = JSON.stringify(val)
      }

      // console.log(`${s} is a ${valType}.`);

      return s
}


// ------------------------------------------------------------------------------
export const applyDeepValueChange = (data, name, value) => {
            // console.log(TS(), 'applyDeepValueChange() data change: ', data, name, value)

            const howCalled = `applyDeepValueChange(${data}, ${name}, ${value})`
            if (data === undefined || data === null) {
              throw new Error(howCalled)
            }

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
                console.log('getFnStr:', getFnStr)

                const where = (e.fileName && e.lineNumber) ? e.fileName+':'+e.lineNumber : ''
                console.log(howCalled);
                console.log('applyDeepValueChange() in dataRecordUtil.js:68', where, e.message, );
            }

            let tmp
            try {
              const changeDataFn = new Function(setFnStr)();
              tmp = changeDataFn(data)
            } catch(e) {
              console.log('setFnStr:', setFnStr)
              console.log(howCalled);
              console.log('applyDeepValueChange() in dataRecordUtil.js:78', e);
            }

            const gqlName = getGqlName(recName)
            const pkNames = getGqlPKs(gqlName)
            const keyValues = (pkNames) ? getKeyValues(pkNames, rec, gqlName) : 'BIG PROBLEM: '+gqlName+' has no keys defined in dbStruct.'
            const update = {
              gqlTable: gqlName,
              gqlField: fieldName,
              value: value,
              where: keyValues
            }
            // console.log(TS(), 'Transactions:', update);

    return ({newData: tmp, update: update})
}