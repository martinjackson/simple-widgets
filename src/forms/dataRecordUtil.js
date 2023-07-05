
import { getKeyValues, getGqlName } from './getKeyValues.js'
import { getGqlPKs } from './model/getTablePKs.js'
import { dTS }  from '../time.js'

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
const O2s = (obj) => JSON.stringify(obj, null, 2)

// ------------------------------------------------------------------------------
const arrTypeOf = (obj) => {

    if (Array.isArray(obj)) {
      return 'array['+obj.length+']'
    }

    if (obj === null)
       return 'null'

    return typeof obj
}

// ------------------------------------------------------------------------------
const removeName = (exp) => {
  const bracket = exp.indexOf('[')
  return exp.substr(bracket)
}

// ------------------------------------------------------------------------------
export const applyDeepValueChange = (data, targetName, value, info) => {                   // info {parentRecName, formName}

      const dataType = arrTypeOf(data)
      const howCalled = `applyDeepValueChange(${dataType}, targetName: '${targetName}', value: '${value}', info: ${info.parentRecName} ${info.formName})`
      console.log(dTS(), howCalled, data)

      if (data === undefined || data === null) {
        throw new Error(howCalled)
      }

      const isArray = dataType.startsWith('array')

      const lastDot = targetName.lastIndexOf('.')
      let recName = (lastDot != -1) ? targetName.substr(0, lastDot) : targetName
      let fieldName = (lastDot != -1) ? targetName.substr(lastDot+1) : targetName

      let tmp = structuredClone(data)
      let rec = (isArray) ? data[0] : data     // TODO: is it always data[0] ???

      if (isArray) {
        let varAssignment = removeName(targetName)
        const fields = varAssignment.split(/[\[\]\.]+/);
        if (fields.length === 2) {
          const i = Number(fields[0])
          console.log(` [PUNT]  applyDeepValueChange    doing              tmp[${i}][${fields[1]}] = ${value}`);
          tmp[i][fields[1]] = value
        } else {
          console.log(` [PUNT]  applyDeepValueChange    would have...      tmp${varAssignment} = ${value}`);
        }
      } else {
        console.log(` [PUNT]  applyDeepValueChange    doing              tmp[${fieldName}] = ${value}`);
        tmp[fieldName] = value         // TODO: Is this right even when deep ???
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

      const returning = {newData: tmp, update: update}
      console.log(' [PUNT]  applyDeepValueChange    returning:', returning);

    return (returning)
}

/*
        // https://stackoverflow.com/questions/7650071/is-there-a-way-to-create-a-function-from-a-string-with-javascript
        // var func = new Function("return " + "function (a, b) { return a + b; }")();

        let valExpression = stringify(value)
        let recNameExpression = (isArray) ? removeName(recName) : '.'+recName


        const setFnStr = `return function changeDataFn(data) {
            // ${info.parentRecName} ${info.formName}
            console.log('return function changeDataFn(',data,') {');
            const tmp = structuredClone(data)                              // {...data} not a deep copy
            tmp${fqVarName} = ${valExpression}
            return tmp
          }
          `

        const getFnStr = (info.parentRecName == undefined) ?
          `return function getDataFn(data) {
            return data
          }
          ` :
          `return function getDataFn(data) {
            return data${recNameExpression}
          }
          `

        let rec = {}
        try {
            const getDataFn = new Function(getFnStr)();
            rec = getDataFn(data)
        } catch(e) {
            console.log('getFnStr:', getFnStr)

            const where = (e.fileName && e.lineNumber) ? e.fileName+':'+e.lineNumber : ''
            console.log(howCalled,'in dataRecordUtil.js:74', where, e.message, );
        }

        let tmp
        try {
          const changeDataFn = new Function(setFnStr)();
          tmp = changeDataFn(data)
        } catch(e) {
          console.log('setFnStr:', setFnStr)
          console.log(howCalled, 'in dataRecordUtil.js setFnStr', e);
        }
*/
