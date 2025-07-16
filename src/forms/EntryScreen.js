
// cSpell:ignore  closeFunct

import React, { useState } from 'react'

import { dTS, ErrorList, useErrorList, SimpleEntryScreen, getAppSpecificInfo } from '../index.js'


// --------------------------------------------------------------------------
export function EntryScreen(props) {

  // TODO: redo the code to detect the only key in the data returned from the query -- to derive the recordName and not need it passed as a prop

  if (!props['recordName']) {      // null or undefined
    const ErrorMsg = `Error <EntryScreen props 'recordName' is missing.`
    console.log(ErrorMsg);
    console.log('TODO: Someday props.recordName can be derived from the GraphQL query and no longer need to be passed to <EntryScreen />.');
    return ErrorMsg
  }

  if (!props['keys']) {      // null or undefined
    const ErrorMsg = `Error <EntryScreen props 'keys' is missing.`
    console.log(ErrorMsg);
    return ErrorMsg
  }

  if (!props['formName']) {      // null or undefined
    const ErrorMsg = `Error <EntryScreen props 'formName' is missing.`
    console.log(ErrorMsg);
    return ErrorMsg
  }

  return <EntryScreenKeyed {...props} />
}

// --------------------------------------------------------------------------
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// --------------------------------------------------------------------------
export function genRecordTypeFromName(recordName) {
    const recordType = capitalizeFirstLetter(recordName)
    return recordType
}

// --------------------------------------------------------------------------
function hasNonNullKeys(keys) {
  const keyNames = Object.keys(keys)
  return keyNames.find(name => keys[name] != null) != null
}

// --------------------------------------------------------------------------
function EntryScreenKeyed(props) {                     // local use only (no export)

  if (props.debug > 1) {
     console.log(dTS(), '== EntryScreenKeyed render ==', props)
  }

  const { execQuery } = getAppSpecificInfo()

  const [keys, setKeys] = useState(props.keys)
  const [data, setData] = useState(null)

  const [errors, logErrors] = useErrorList()

  const [needsLoading, setNeedsLoading] = useState(hasNonNullKeys(keys))

  const where = { ...props.keys, ...keys }

  const onCompleted = (data) => {
    if (data === null) {
      console.log(`execQuery(${props.queryName}, { where: ${where} }) returned NULL data.`)
      return
    }

    // data might look like this   const data = {data: {…}, loading: false, networkStatus: 7}  <-- oracle-ism
    if (data['data']) {
      data = data['data']
    }

    setNeedsLoading(false)
    if (data[props.recordName] && data[props.recordName].length == 0) {
      console.log(dTS(), 'No ' + props.recordName + ' records retrieved for:', where)

      console.log(dTS(), 'using (new record):', data[props.recordName])
    } else {
      console.log(dTS(), `loaded data[${props.recordName}] record for:`, where, data)
      setData(data)

      // call businessLogic after record has arrived -- allow lookup fields that are based on other fields
      if (props.businessLogic) {
        const change = {target:{name:props.recordName+'[0]'}}   // signal whole record was loaded
        props.businessLogic(change, data)                 // props.businessLogic()  can change multiple fields in currentRec via moreChanges
      }

    }
  }

  const onError = (error) => {
    const msg = `  EntryScreen execQuery error: ${error.message} --> QueryName: ${props.queryName} Keys:` + JSON.stringify(props.keys)
    console.log(msg)
    console.log(error.stack)
    logErrors(msg)
  }

  if (needsLoading) {
    execQuery(props.queryName, { where: where })
      .then(results => onCompleted(results))
      .catch(error => onError(error))
  }

  if (needsLoading && props.debug > 0) {
    console.log(dTS(), `  needs loading query ${props.queryName}, Keys:`, props.keys)
  }

  const onChangeSpecial = (change, moreChanges) => {

    // special business logic
    if (props.businessLogic) {
      const ok = props.businessLogic(change, data, moreChanges)     // props.businessLogic()  can change multiple fields in currentRec via moreChanges
      if (!ok) {
        return true;   // signal it is handled without allowing the data to change
      }
    }

    if (change.target) {

      const keyNames = Object.keys(keys)
      const matchKeyNames = keyNames.filter(name => (props.recordName + '[0].' + name === change.target.name) )
      if (matchKeyNames.length > 0) {
        const matchKey = matchKeyNames[0]
        const emptyRecWithKey = { [props.recordName]: [{ [matchKey]: change.target.value }] }   // empty record + key
        setData(emptyRecWithKey)
        setKeys(prev => {
          prev[matchKey] = change.target.value
          return prev
        })

        if (props.debug) {
          console.log('   EntryScreen: Does the record need loading? name:', change.target.name, 'value:', change.target.value)
        }
        if (change.target.value === '' || change.target.value === null) {      // cleared for search, but no answer selected

        } else {
          if (props.debug) {
            console.log('   EntryScreen: thinking it needs loading ...')
          }
          setNeedsLoading(true)
        }
        return true; // signal it is handled
      }
    } else {
      console.log(dTS(), '*** Unexpected', props.recordName, 'rec msg: ', change)
      return true
    }

    return false
  }

  const styleSelected = (props.styleSelected) ? props.styleSelected : 'form-style-11'

  // included in {...props}
  // header={props.header}
  // formName={props.formName}
  // recordName={props.recordName}
  // newRecord={newRecord}                                <--- (onAdd, onClone refactored out) replaced by newRecord interface 2024-05-06
  // showPendingData={props.showPendingData}
  // debug={props.debug}
  // updateRec={props.updateRec}             updateRec(r.gqlTable, r.fields, r.where)   table name, json of field values, where clause as json

  return <>
    <ErrorList list={errors} />
    <SimpleEntryScreen
      {...props}
      styleSelected={styleSelected}
      loadInProgress={needsLoading}
      data={data}
      setData={setData}

      logErrors={logErrors}
      onChangeSpecial={onChangeSpecial}
      />
  </>
}
