
import React, {useState} from 'react'

import { FormFields, getGqlNameFromForm } from './FormFields.js'
import { arrLen } from './arrLen.js'

import './Form.css'
import { FormHeader } from './FormHeader.js'
import { onFormChange } from './onFormChange.js'
import { prop2str } from "./prop2str"

// ----------------------------------------------------------------------------------------------------------------------------------------------
export const Form = (props) => {

  const [msg, setMsg] = useState(null);

  if (props.debug > 2) {
    console.log('--- Form ' + prop2str(props, ['parentRecName', 'name', 'data', 'value', 'setData']) )
  }

  const [dataRowStart, setDataRowStart] = useState(0)
  const recPrevFn = () => {setDataRowStart(dataRowStart-1)}
  const recNextFn = () => {setDataRowStart(dataRowStart+1)}

  // The top most Form will have data
  // all sub-forms will have info in props.value
  let incomingData = (props.data) ? props.data : props.value

  let dataRow = incomingData
  const gqlName = getGqlNameFromForm(props.name)          // TODO: is the polution of Form to know anything about GraphQL ???
  if (incomingData && incomingData[gqlName])   // if it is an object, ie. result from graphQL query and the graphQL noun is there
     dataRow = incomingData[gqlName]

  let activeData = (dataRow && dataRow[dataRowStart]) ? dataRow[dataRowStart] : dataRow

  const onAddRecButton = () => {
    if (props.onChangeMsg) {
      props.onChangeMsg("add record " + props.parentRecName + " " + props.name);
    }
    if (props.addRecFn) {
      props.addRecFn(props.parentRecName, props.name, activeData)
    }
  }

  const onCloneRecButton = () => {
    if (props.onChangeMsg) {
      props.onChangeMsg("clone record " + props.parentRecName + " " + props.name);
    }
    if (props.cloneRecFn) {
      props.cloneRecFn(props.parentRecName, props.name, activeData)
    }
  }

  const onChange = (change) => {
    onFormChange(change, props, '<Form ', setMsg, activeData)
    //          onFormChange(change, props, msgPrefix, setMsg, activeData)
    // handled = props.onChangeSpecial(change, moreChanges)
    // -- or --
    // moreChanges(activeData, change.target.name, change.target.value, props, msgPrefix, setMsg)
    //          moreChanges(data, targetName, targetValue, props, msgPrefix, setMsg)
    //   \---->
    //          const info = { parentRecName: props.parentRecName, formName: props.name }
    //          const changes = applyDeepValueChange(data, targetName, targetValue, info, props.debug)
    //          \---->
    //                 let update = calcRecorcUpdateInfo(data, targetName, targetValue)
    //              returns
    //                      update = {
    //                        gqlTable: gqlName,
    //                        gqlField: fieldName,
    //                        value: value,
    //                        where: keyValues
    //                      }
    //
    //                   getRecorcKeyInfo = (data, recName) => {                // recName = "person[0].appointment[0]"
    //              returns
    //                      update = {
    //                        gqlTable: gqlName,
    //                        where: keyValues
    //                      }

  }

  // included in {...props}
  // header, parentRecName, addRecFn, cloneRecFn,  noAdd, noClone, loadInProgress
  // name, businessLogic, pendingUpdatesFn, noAdd, noClone, showDebug

    return (
      <div className='flex flex-row'>

        <div className={props.className}>
          {msg}
          <div className={'form sw-form'}>
          <FormHeader
               dataRowStart={dataRowStart}
               numRecs={arrLen(dataRow)}
               recPrevFn={recPrevFn}
               recNextFn={recNextFn}
               onAddRecButton={onAddRecButton}
               onCloneRecButton={onCloneRecButton}
               {...props}
               />
          <FormFields
              dataIndex={dataRowStart}
              formData={activeData}
              onChange={onChange}
              withLabels={true}
              {...props}
          />
        </div>
        </div>
      </div>)

}

