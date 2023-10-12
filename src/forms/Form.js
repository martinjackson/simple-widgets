
import React, {useState} from 'react'

import { FormFields, getGqlNameFromForm } from './FormFields.js'
import { arrLen } from './arrLen.js'

import './Form.css'
import { FormHeader } from './FormHeader.js'
import { onFormChange } from './onFormChange.js'
import { formStartMessage } from './formStartMessage.js';

// ----------------------------------------------------------------------------------------------------------------------------------------------
export const Form = (props) => {

  const [msg, setMsg] = useState(null);

  formStartMessage(props, 'Form');

  const [dataRowStart, setDataRowStart] = useState(0)
  const recPrevFn = () => {setDataRowStart(dataRowStart-1)}
  const recNextFn = () => {setDataRowStart(dataRowStart+1)}

  let incomingData = (props.data) ? props.data : props.value

  let dataRow = incomingData
  const gqlName = getGqlNameFromForm(props.name)
  if (incomingData && incomingData[gqlName])   // if it is an object, ie. result from graphQL query and the graphQL noun is there
     dataRow = incomingData[gqlName]

  let activeData = (dataRow && dataRow[dataRowStart]) ? dataRow[dataRowStart] : dataRow

  const onChange = (change) => {
    onFormChange(change, props, '<Form ', setMsg, activeData)
  }

    return (
      <div className='flex flex-row'>

        <div className={props.className}>
          {msg}
          <div className={'form sw-form'}>
          <FormHeader
               header={props.header}
               dataRowStart={dataRowStart}
               parentRecName={props.parentRecName}
               addRecFn={props.addRecFn}
               cloneRecFn={props.cloneRecFn}
               numRecs={arrLen(dataRow)}
               recPrevFn={recPrevFn}
               recNextFn={recNextFn}
               noAdd={props.noAdd}
               noClone={props.noClone}
               loadInProgress={props.loadInProgress}
               />
          <FormFields
              parentRecName={props.parentRecName}
              name={props.name}
              businessLogic={props.businessLogic}
              pendingUpdates={props.pendingUpdates}
              noAdd={props.noAdd}
              noClone={props.noClone}
              dataIndex={dataRowStart}
              formData={activeData}
              showDebug={props.debug}
              onChange={onChange}
              withLabels={true}
          />
        </div>
        </div>
      </div>)

}

