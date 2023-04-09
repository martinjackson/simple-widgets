import React, { useState } from 'react'
import { useQuery } from '@apollo/client'

import { SimpleTable }       from '../SimpleTable.js'
import { TS }                from '../time.js'

import { client }            from './client.js'
import { genEmptyRecord }    from './genEmptyRecord.js'
import { MakeModal }         from './MakeModal.js'
import { makeGqlAST }        from './makeGqlAST.js'
import { ErrorList }         from './ErrorList.js'
import { useErrorList }      from './useErrorList.js'
import { SimpleEntryScreen } from './SimpleEntryScreen.js'
import { getAppSpecificInfo } from './model/appSpecificInfo.js'

// --------------------------------------------------------------------------
export function EntryScreen(props) {

  const {dbStruct, formDictionary, namedQueries} = getAppSpecificInfo()
  const queryStr = namedQueries(props.queryName)

  if (!queryStr) {      // null or undefined
    const ErrorMsg = `Error query named: ${props.queryName}, has no definitiion.`
    console.log(ErrorMsg);
    return ErrorMsg
  }

  return <EntryScreenKeyed {...props} queryStr={queryStr} />
}

// --------------------------------------------------------------------------
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// --------------------------------------------------------------------------
function genRecordTypeFromName(recordName) {
    const recordType = capitalizeFirstLetter(recordName)
    return recordType
}

// --------------------------------------------------------------------------
function EntryScreenKeyed(props) {
  // console.log(TS(), '== EntryScreenKeyed render ==', props)

  const keyNames = Object.keys(props.keys)        // TODO: add code for support of multiple keys
  const keyName = keyNames[0]                     // TODO: assumes only one key

  const [showModal, setShowModal]   = useState(false)
  const [cloneRec, setCloneRec]     = useState(false)
  const [newRecList, setNewRecList] = useState([])

  const [keyId, setKeyId] = useState(props.keys[keyName])              // TODO: assumes only one key
  const [data, setData]   = useState(null)

  const [errors, logErrors] = useErrorList()

  const [needsLoading, setNeedsLoading] = useState(true)

  const recordName = props.recordName
  const where = { ...props.keys, [keyName]: keyId }

  const onCompleted = (data) => {
    setNeedsLoading(false)
    if (data[recordName].length == 0) {
      console.log('No ' + recordName + ' records retrieved for:', where)

      console.log('using (new record):', data[recordName])
    } else {
      console.log(TS(), 'loaded record for:', where, data)
      setData(data)
    }
  }

  const onError = (error) => {
    console.log(`  EntryScreen useQuery error ${props.queryName} keys:`, props.keys)
    logErrors(error.message)
  }

  // console.log(`  EntryScreen.js:77  makeGqlAST  ${props.queryName} str:`, props.queryStr)

  useQuery(makeGqlAST(props.queryStr), {
    skip: !needsLoading,
    variables: { where: where },    // TODO: assumes only one key
    client,
    fetchPolicy: 'network-only',
    onCompleted: onCompleted,
    onError: onError
  })


  if (needsLoading) {
    console.log(TS(), `  needs loading query ${props.queryName}, keys:`, props.keys)
  }

  const pickNewTopRecord = (cloneFlag) => {
    setCloneRec(cloneFlag)
    const newRecList = props.genPickListOfNew()
    // console.log('newRecList:', newRecList)
    if (newRecList.length <= 0) {
      console.log('newRecList selection is broken.')
    } else {
      setNewRecList(newRecList)
      setShowModal(true)
    }
  }

  const newRecRowSelected = (rowSelected) => {
    console.log('rowSelected:', rowSelected);
    const newId = rowSelected.id          // TODO: is this always {id,value} pair  -- and where the single key comes from (need to get field name and use with keyId for multiple keys)
    if (cloneRec) {
      if (data) { // clone from previous data
        data[recordName][0][keyName] = newId
      }
    } else { // empty record
      const recordType = genRecordTypeFromName(props.recordName)
      const empty = genEmptyRecord(recordType, true)
      console.log('Creating Empty Record[',recordType,']', empty);

      empty[keyName] = newId                    // TODO: coded for simple key --- what if there aare multiple keys ??
      setData({ [recordName]: [empty] })

      // TODO: comes from  genPickListOfNew() and is not the normal lookup for the first field

    }
    setKeyId(newId)
    setShowModal(false)
  }


  const onChangeSpecial = (change, moreChanges) => {

    // special business logic only applied to Employee screen
    if (props.businessLogic) {
      const ok = props.businessLogic(change, data, moreChanges)     // props.businessLogic()  can change multiple fields in currentRec via moreChanges
      if (!ok) {
        return true;   // signal it is handled without allowing the data to change
      }
    }

    if (change.target) {
      const topRecordKeyName = recordName + '[0].' + keyName
      if (change.target.name === topRecordKeyName) {
         // TODO: need to get field name (change.target.value ??) and use with multiple keyNames
         // const keys = getAllCurrentKeyValues()
         // keys[change.target.name]= change.target.value
         // const emptyRecWithKey = { [recordName]: [keys] }   // empty record + keys
         const emptyRecWithKey = { [recordName]: [{ [keyName]: change.target.value }] }   // empty record + key
        setData(emptyRecWithKey)
        setKeyId(change.target.value)
        setNeedsLoading(true)
        return true; // signal it is handled
      }
    } else {
      console.log(TS(), 'Employee rec msg: ', change)

      pickNewTopRecord(false); // TODO: verify this is not a clone

      return true
    }

    return false
  }

  const styleSelected = (props.styleSelected) ? props.styleSelected : 'form-style-11'

  return <>
    <MakeModal show={showModal} closeFunct={setShowModal} >
      <SimpleTable data={newRecList} height='30em'
        dataSelected={newRecRowSelected} />
    </MakeModal>

    <ErrorList list={errors} />
    <SimpleEntryScreen
      header={props.header}
      formName={props.formName}
      who={props.who}
      recordName={recordName}
      styleSelected={styleSelected}

      data={data}
      setData={setData}

      pickNewTopRecord={pickNewTopRecord}
      logErrors={logErrors}
      onChangeSpecial={onChangeSpecial} />
  </>
}
