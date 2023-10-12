
import { getKeyValues, getGqlName } from './getKeyValues.js'
import { getGqlPKs } from './model/getTablePKs.js'
import { dTS }  from '../time.js'

// ------------------------------------------------------------------------------
// const O2s = (obj) => JSON.stringify(obj, null, 2)

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
export const applyDeepValueChange = (data, targetName, value, info, debug) => {                   // info {parentRecName, formName}

      const dataType = arrTypeOf(data)

      const howCalled = `applyDeepValueChange(data: ${dataType}, targetName: '${targetName}', value: '${value}', info: ${info.parentRecName} ${info.formName})`
      if (debug) {
        console.log(dTS(), howCalled, data)
      }

      if (data === undefined || data === null) {
        console.log(dTS(), '*** applyDeepValueChange() w/o a data record to modify: ', howCalled, data)
        console.log()
        throw new Error(howCalled)
      }

      const isArray = dataType.startsWith('array')

      const newData = structuredClone(data)     // must return a new reference or useEffect and render wont tirgger, old version must stay unmodified
                                                // if original is modified, libraries like  use-deep-compare-effect will not work
                                                // import useDeepCompareEffect from 'use-deep-compare-effect'


      const lastDot = targetName.lastIndexOf('.')
      let recName = (lastDot != -1) ? targetName.substr(0, lastDot) : targetName
      let fieldName = (lastDot != -1) ? targetName.substr(lastDot+1) : targetName

      let update = {errMsg: 'unknown gqlRecName: '+recName}
      if (!recName.startsWith('undefined')) {
        const gqlName = getGqlName(recName)
        const pkNames = getGqlPKs(gqlName)
        let rec = (isArray) ? newData[0] : newData     // TODO: is it always data[0] ???
        const keyValues = (pkNames) ? getKeyValues(pkNames, rec, gqlName) : 'BIG PROBLEM: '+gqlName+' has no keys defined in dbStruct.'
        update = {
          gqlTable: gqlName,
          gqlField: fieldName,
          value: value,
          where: keyValues
        }
        if (debug) {
          console.log(TS(), 'Transactions:', update);
        }
      }

      if (isArray) {
        let varAssignment = removeName(targetName)
        const fields = varAssignment.split(/[\[\]\.]+/)
        console.log('varAssignment:', varAssignment, 'split -->', fields)
        if (fields.length === 3) {
          const i = Number(fields[1])
          const fieldName = fields[2]

          // untested
          console.log(` [applyDeepValueChange] doing              newData[${i}][${fieldName}] = ${value}`);
          newData[i][fieldName] = value

        } else {

          // TODO: if seen (applyDeepValueChange    would have...), this is a problem
          console.log(` [PUNT]  applyDeepValueChange    would have...      newData${varAssignment} = ${value}, this is a problem`);
        }
      } else {

        // tested
        if (debug) {
          console.log(` [applyDeepValueChange] doing              newData[${fieldName}] = ${value}`);
        }
        newData[fieldName] = value
      }


      const returning = {newData, update}
      if (debug) {
        console.log(' [applyDeepValueChange]    returning:', returning);
      }

    return (returning)
}

