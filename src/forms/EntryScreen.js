
// cSpell:ignore  closeFunct

import React, { useState } from 'react'
import { useQuery } from '@apollo/client'

import { dTS }                from '../time.js'

import { client }             from './client.js'
import { makeGqlAST }         from './makeGqlAST.js'
import { ErrorList }          from './ErrorList.js'
import { useErrorList }       from './useErrorList.js'
import { SimpleEntryScreen }  from './SimpleEntryScreen.js'
import { getAppSpecificInfo } from './model/appSpecificInfo.js'


// --------------------------------------------------------------------------
export function EntryScreen(props) {

  const { namedQueries } = getAppSpecificInfo()
  const queryStr = namedQueries(props.queryName)

  if (!queryStr) {      // null or undefined
    const ErrorMsg = `Error query named: ${props.queryName}, has no definition.`
    console.log(ErrorMsg);
    return ErrorMsg
  }

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

  return <EntryScreenKeyed {...props} queryStr={queryStr} />
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
function EntryScreenKeyed(props) {

  if (props.debug > 1) {
     console.log(dTS(), '== EntryScreenKeyed render ==', props)
  }

  const [keys, setKeys] = useState(props.keys)
  const [data, setData] = useState(null)

  const [errors, logErrors] = useErrorList()

  const [needsLoading, setNeedsLoading] = useState(hasNonNullKeys(keys))

  const where = { ...props.keys, ...keys }

  const onCompleted = (data) => {
    setNeedsLoading(false)
    if (data[props.recordName].length == 0) {
      console.log(dTS(), 'No ' + props.recordName + ' records retrieved for:', where)

      console.log(dTS(), 'using (new record):', data[props.recordName])
    } else {
      console.log(dTS(), 'loaded record for:', where, data)
      setData(data)

      // call businessLogic after record has arrived -- allow lookup fields that are based on other fields
      if (props.businessLogic) {
        const change = {target:{name:props.recordName+'[0]'}}   // signal whole record was loaded
        props.businessLogic(change, data)                 // props.businessLogic()  can change multiple fields in currentRec via moreChanges
      }

    }
  }

  const onError = (error) => {
    console.log(`  EntryScreen useQuery error ${props.queryName} Keys:`, props.keys)
    logErrors(error.message)
  }

  // console.log(`  EntryScreen.js:106  makeGqlAST  ${props.queryName} str:`, props.queryStr)

  useQuery(makeGqlAST(props.queryStr), {
    skip: !needsLoading,
    variables: { where: where },
    client,
    fetchPolicy: 'network-only',
    onCompleted: onCompleted,
    onError: onError
  })


  if (needsLoading && props.debug > 0) {
    console.log(dTS(), `  needs loading query ${props.queryName}, Keys:`, props.keys)
  }

  // was newRecord() { .. } defined here
  // was pickNewTopRecord() { .. } defined here
  // was newRecRowSelected() { .. } defined here


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
