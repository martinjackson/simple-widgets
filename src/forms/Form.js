
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

  if (props.debug) {
    console.log('--- Form ' + prop2str(props, ['parentRecName', 'name', 'data', 'value', 'setData']) )
  }

  const [dataRowStart, setDataRowStart] = useState(0)
  const recPrevFn = () => {setDataRowStart(dataRowStart-1)}
  const recNextFn = () => {setDataRowStart(dataRowStart+1)}

  // The top most Form will have data
  // all sub-forms will have info in props.value
  let incomingData = (props.data) ? props.data : props.value

  let dataRow = incomingData
  const gqlName = getGqlNameFromForm(props.name)
  if (incomingData && incomingData[gqlName])   // if it is an object, ie. result from graphQL query and the graphQL noun is there
     dataRow = incomingData[gqlName]

  let activeData = (dataRow && dataRow[dataRowStart]) ? dataRow[dataRowStart] : dataRow

  const onChange = (change) => {
    onFormChange(change, props, '<Form ', setMsg, activeData)
  }

  // included in {...props}
  // header={props.header}
  // parentRecName={props.parentRecName}
  // addRecFn={props.addRecFn}
  // cloneRecFn={props.cloneRecFn}
  // noAdd={props.noAdd}
  // noClone={props.noClone}
  // loadInProgress={props.loadInProgress}

  // included in {...props}
  // parentRecName={props.parentRecName}
  // name={props.name}
  // businessLogic={props.businessLogic}
  // pendingUpdates={props.pendingUpdates}
  // noAdd={props.noAdd}
  // noClone={props.noClone}
  // showDebug={props.debug}


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

