
import { dTS }                from '../time.js'
import { genEmptyRecord }     from './genEmptyRecord.js'
import { getGqlPKs, getGqlFieldNames } from './model/getTablePKs.js'
import { getGqlName } from './getKeyValues.js'
import { genRecordTypeFromName } from './EntryScreen.js'

// import { getSubRecord }       from './getSubRecord.js'

// --------------------------------------------------------------------------
function genNewRecordKeys(parentRecName, recName, siblingDataRec, genPKsForNewRecords) {
  console.log(dTS(), 'genNewRecordKeys()', {parentRecName, recName, siblingDataRec})

  const parentGqlName = getGqlName(parentRecName)
  const parentFields = getGqlFieldNames(parentGqlName)

  const recGqlName = getGqlName(recName)
  const recPks = getGqlPKs(recGqlName)

  const samePKs = recPks.filter(name => parentFields.includes(name))     // recPks[] not in parentFields[]
  const missingPkNames = recPks.filter(name => !parentFields.includes(name))     // recPks[] not in parentFields[]

  const newPks = genPKsForNewRecords(recGqlName, missingPkNames, siblingDataRec)
  const recordType = genRecordTypeFromName(recName)    // assumes recName has no . or []
  const newRec = genEmptyRecord(recordType, true)
  samePKs.map(k => newRec[k] = siblingDataRec[k])  // copy over all the same PK fields
  missingPkNames.map(k => newRec[k] = newPks[k])

  return newRec
}

// --------------------------------------------------------------------------
export function newRecord(cloneFlag, parentRecName, recName, activeDataRec, genPKsForNewRecords, debug) {

  if (debug) {
    if (cloneFlag)
      console.log(dTS(), '== newRecord (clone) ==', { parentRecName, recName, activeDataRec })
    else
      console.log(dTS(), '== newRecord ==', { parentRecName, recName, activeDataRec })
  }

    const msg = (cloneFlag) ? 'cloning record:' : 'creating new record:'

    let newRec = null
    try {
      // activeDataRec is the siblingDataRec
      newRec = genNewRecordKeys(parentRecName, recName, activeDataRec, genPKsForNewRecords)
    } catch (e) {
      const errMsg = 'ERROR ' + msg + ' -- requires newRecord(cloneFlag, parentRecName, recName, activeDataRec, **genPKsForNewRecords**), but the prop is missing.'
      console.log(dTS(), errMsg, { parentRecName, recName, activeDataRec })
      throw new Error(errMsg)
    }

    return newRec
}
