
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
  const gqlName = getGqlNameFromForm(props.name)          // TODO: is the pollution of Form to know anything about GraphQL ???
  if (incomingData && incomingData[gqlName])   // if it is an object, ie. result from graphQL query and the graphQL noun is there
     dataRow = incomingData[gqlName]

  let activeData = (dataRow && dataRow[dataRowStart]) ? dataRow[dataRowStart] : dataRow

  let onAddRec = null
  let onCloneRec = null

  if (props.newRecord) {
    onAddRec = () => {
      if (props.onChangeMsg) {
        props.onChangeMsg("add record " + props.parentRecName + " " + props.name);
      }
      props.newRecord(false, props.parentRecName, props.name, activeData)
    }

    onCloneRec = () => {
      if (props.onChangeMsg) {
        props.onChangeMsg("clone record " + props.parentRecName + " " + props.name);
      }
      props.newRecord(props.parentRecName, props.name, activeData)
    }
  }

  const onChange = (change) => {
    onFormChange(change, props, '<Form ', setMsg, activeData)
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
               onAddRec={onAddRec}
               onCloneRec={onCloneRec}
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

