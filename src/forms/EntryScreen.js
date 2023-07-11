import React, { useState } from 'react'
import { useQuery } from '@apollo/client'

import { SimpleTable }       from '../SimpleTable.js'
import { dTS }                from '../time.js'

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

  const { namedQueries } = getAppSpecificInfo()
  const queryStr = namedQueries(props.queryName)

  if (!queryStr) {      // null or undefined
    const ErrorMsg = `Error query named: ${props.queryName}, has no definitiion.`
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
function genRecordTypeFromName(recordName) {
    const recordType = capitalizeFirstLetter(recordName)
    return recordType
}

// --------------------------------------------------------------------------
function EntryScreenKeyed(props) {
  // console.log(dTS(), '== EntryScreenKeyed render ==', props)

  const [showModal, setShowModal]   = useState(false)
  const [cloneRec, setCloneRec]     = useState(false)
  const [newRecList, setNewRecList] = useState([])

  const [keys, setKeys] = useState(props.keys)
  const [data, setData] = useState(null)

  const [errors, logErrors] = useErrorList()

  const keyNames = Object.keys(keys)
  const hasNonNullKeys = keyNames.find(name => keys[name] != null) != null
  const [needsLoading, setNeedsLoading] = useState(hasNonNullKeys)

  const where = { ...props.keys, ...keys }

  const onCompleted = (data) => {
    setNeedsLoading(false)
    if (data[props.recordName].length == 0) {
      console.log(dTS(), 'No ' + props.recordName + ' records retrieved for:', where)

      console.log(dTS(), 'using (new record):', data[props.recordName])
    } else {
      console.log(dTS(), 'loaded record for:', where, data)
      setData(data)

      // TODO call businessLogic after record has arrived -- allow lookup fields that are based on other fields
      if (props.businessLogic) {
        const change = {target:{name:props.recordName+'[0]'}}   // signal wholre record was loaded
        props.businessLogic(change, data)                 // props.businessLogic()  can change multiple fields in currentRec via moreChanges
      }

    }
  }

  const onError = (error) => {
    console.log(`  EntryScreen useQuery error ${props.queryName} Keys:`, props.keys)
    logErrors(error.message)
  }

  // console.log(`  EntryScreen.js:77  makeGqlAST  ${props.queryName} str:`, props.queryStr)

  useQuery(makeGqlAST(props.queryStr), {
    skip: !needsLoading,
    variables: { where: where },
    client,
    fetchPolicy: 'network-only',
    onCompleted: onCompleted,
    onError: onError
  })


  if (needsLoading) {
    console.log(dTS(), `  needs loading query ${props.queryName}, Keys:`, props.keys)
  }

  const pickNewTopRecord = (cloneFlag) => {
    setCloneRec(cloneFlag)

    if (props.genPickListOfNew) {
      const newRecList = props.genPickListOfNew()
      if (newRecList.length <= 0) {
        console.log('newRecList selection is broken.')
      } else {
        setNewRecList(newRecList)
        setShowModal(true)
      }
    } else {
      setShowModal(true)
    }
  }

  const newRecRowSelected = (rowSelected) => {
    console.log('rowSelected:', rowSelected);

    const recordType = genRecordTypeFromName(props.recordName)
    const empty = genEmptyRecord(recordType, true)
    const legalFields = Object.keys(empty)
    const incomingFields = Object.keys(rowSelected)
    const goodFields = incomingFields.filter(f => legalFields.includes(f))
    const goodKeys = incomingFields.filter(f => keyNames.includes(f))

    if (cloneRec) {
      if (data) { // clone from previous data
        goodFields.forEach(f => {
          data[props.recordName][0][f] = rowSelected[f]
        })
      }
    } else { // empty record
      console.log('Creating Empty Record[',recordType,']', empty);

      goodFields.forEach(f => {
        empty[f] = rowSelected[f]
      })
      setData({ [props.recordName]: [empty] })

      // TODO: comes from  genPickListOfNew() and is not the normal lookup for the first field

    }

    const newKeys = {}
    goodKeys.forEach(f => {
      newKeys[f] = rowSelected[f]
    })
    setKeys(newKeys)
    setShowModal(false)
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

      const matchKeyNames = keyNames.filter(name => (props.recordName + '[0].' + name === change.target.name) )
      if (matchKeyNames.length > 0) {
        const matchKey = matchKeyNames[0]
        const emptyRecWithKey = { [props.recordName]: [{ [matchKey]: change.target.value }] }   // empty record + key
        setData(emptyRecWithKey)
        setKeys(prev => {
          prev[matchKey] = change.target.value
          return prev
        })

        console.log('   EntryScreen: Does the record need loading? name:', change.target.name, 'value:', change.target.value);
        if (change.target.value === '' || change.target.value === null) {      // cleared for search, but no answer selected

        } else {
          console.log('   EntryScreen: thinking it needs loading ...');
          setNeedsLoading(true)
        }
        return true; // signal it is handled
      }
    } else {
      console.log(dTS(), '*** Unexpected', props.recordName, 'rec msg: ', change)

      pickNewTopRecord(false); // TODO: verify this is not a clone

      return true
    }

    return false
  }

  const styleSelected = (props.styleSelected) ? props.styleSelected : 'form-style-11'
  const PopUpWidget = (props.NewRecordGui) ? props.NewRecordGui : SimpleTable


  return <>
    <MakeModal show={showModal} closeFunct={setShowModal} >
      <PopUpWidget data={newRecList} height='30em' dataSelected={newRecRowSelected} hiddenLookupColumns={props.hiddenLookupColumns} />
    </MakeModal>

    <ErrorList list={errors} />
    <SimpleEntryScreen
      header={props.header}
      formName={props.formName}
      who={props.who}
      recordName={props.recordName}
      styleSelected={styleSelected}

      loadInProgress={needsLoading}

      data={data}
      setData={setData}

      noAdd={props.noAdd}
      noClone={props.noClone}

      pickNewTopRecord={pickNewTopRecord}
      logErrors={logErrors}
      onChangeSpecial={onChangeSpecial}

      showPendingData={props.showPendingData}
      />
  </>
}
