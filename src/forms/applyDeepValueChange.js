
/* global debug */

import { getKeyValues, getGqlName, getGqlPKs, dTS, TS, getSubRecord } from '../index.js'

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
export const getRecordKeyInfo = (data, recName) => {                // recName = "person[0].appointment[0]"

    if (debug) {
    //   console.log('  const data=',JSON.stringify(data,null,2))
    //   console.log(`  getRecordKeyInfo(data, "${recName}")   `)
    }

    const gqlName = getGqlName(recName)                                         // gqlName = "appointment"
    const pkNames = getGqlPKs(gqlName)                                          // pkNames = ['appointmentId']

    // if (debug) {
    //   console.log(`  getGqlName("${recName}")  returns "${gqlName}" `);
    //   console.log(`  getGqlPKs("${gqlName}")   returns "${pkNames}" `)
    // }

    let subRec = getSubRecord(recName, data)
    const keyValues = (pkNames) ? getKeyValues(pkNames, subRec, gqlName) : 'BIG PROBLEM: '+gqlName+' has no keys defined in dbStruct.'
    const update = {
      gqlTable: gqlName,
      where: keyValues
    }

    return update
}

// ------------------------------------------------------------------------------
const calcRecordUpdateInfo = (data, targetName, value) => {

  const lastDot = targetName.lastIndexOf('.')                                   // lastDot = 24, targetName = "person[0].appointment[0].apptNote"
  let recName = (lastDot != -1) ? targetName.substr(0, lastDot) : targetName    // recName = "person[0].appointment[0]"
  let fieldName = (lastDot != -1) ? targetName.substr(lastDot+1) : targetName   // fieldName = "appNote"

  let update = {errMsg: 'unknown gqlRecName: '+recName}
  if (!recName.startsWith('undefined')) {
    update = getRecordKeyInfo(data, recName)
    update['gqlField'] = fieldName
    update['value'] = value
  }

    return update
}

// ------------------------------------------------------------------------------
export const applyDeepValueChange = (data, targetName, value, info, debug) => {     // info {parentRecName, formName}

      const dataType = arrTypeOf(data)

      const howCalled = `applyDeepValueChange(dataType: ${dataType}, targetName: '${targetName}', value: '${value}', parentRecName: ${info.parentRecName} formName: ${info.formName})`
      if (debug) {
        console.log(dTS(), howCalled, data)
      }

      if (data === undefined || data === null) {
        console.log(dTS(), '*** applyDeepValueChange() w/o a data record to modify: ', howCalled, data)
        console.log()
        throw new Error(howCalled)
      }

      const isArray = dataType.startsWith('array')

      const newData = structuredClone(data)     // must return a new reference or useEffect and render wont trigger, old version must stay unmodified
                                                // if original is modified, libraries like  use-deep-compare-effect will not work
                                                // import useDeepCompareEffect from 'use-deep-compare-effect'

      let update = calcRecordUpdateInfo(newData, targetName, value)
      if (debug) {
          console.log(TS(), 'Transactions:', update);
      }

      if (isArray) {
        let varAssignment = removeName(targetName)
        const fields = varAssignment.split(/[[\].]+/)
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
          console.log(` [applyDeepValueChange] doing              newData[${update.gqlField}] = ${value}`);
        }
        newData[update.gqlField] = value               // same as     newData[fieldName] = value
      }

      const returning = {newData, update}
      if (debug) {
        console.log(' [applyDeepValueChange]    returning:', returning);
      }

    return (returning)
}


