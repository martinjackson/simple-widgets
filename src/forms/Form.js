
import React, {useState} from 'react'

import { FormFields, getGqlNameFromForm } from './FormFields.js'
import { arrLen } from './arrLen.js'
import { applyDeepValueChange } from './dataRecordUtil.js'

import './Form.css'
import { FormHeader } from './FormHeader.js'

  // <a target="_blank" href="https://icons8.com/icon/gxuEDgFteZdP/database">Database</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
  export const databaseLoading = '/icons8-database.gif'     // dont import complicates bundler rules

// ----------------------------------------------------------------------------------------------------------------------------------------------
export const Form = (props) => {

  const [msg, setMsg] = useState(null);

  if (props.debug) {
      if (props.data) {
        console.log('--- Form parent:', props.parentRecName, 'name:',props.name, 'data:', props.data)     // The top most Form will have data
      }

      if (props.value) {
        console.log('--- Form parent:', props.parentRecName, 'name:',props.name, 'value:', props.value)  // all sub-forms will have info in props.value
      }
  }


  // it's OK, not every form will go back to a database, could be a compound search form
  // if (!props.pendingUpdates) {
  //   console.log('--- Form parent:', props.parentRecName, 'form name:',props.name, 'props.pendingUpdates is missng')
  // }

  // console.log('--- Form props:', props);

  let incomingData = (props.data) ? props.data : props.value

  const gqlName = getGqlNameFromForm(props.name)

  const [dataRowStart, setDataRowStart] = useState(0)
  const recPrevFn = () => {setDataRowStart(dataRowStart-1)}
  const recNextFn = () => {setDataRowStart(dataRowStart+1)}

  const logErrors = (e, help) => {
    if (props.logErrors) {
      props.logErrors(e.message)
    }
    console.log(help, e.message)
    console.log(e.stack)
  }

  let dataRow = incomingData
  if (incomingData && incomingData[gqlName])   // if it is an object, ie. result from graphQL query and the graphQL noun is there
     dataRow = incomingData[gqlName]

  let activeData = (dataRow && dataRow[dataRowStart]) ? dataRow[dataRowStart] : dataRow

  /*
  console.log(' Form props.parentRecName props.name:', props.parentRecName, props.name)
  console.log(' Form props.data:', props.data);
  console.log(' Form props.value:', props.value);
  console.log(' Form data:', activeData);
  */

  const onChange = (change) => {

    if (props.debug) {
      console.log('<Forms form name:', props.name, 'onChange() change:', change)
    }

    const moreChanges = (data, targetName, targetValue) => {

      if (data === undefined || data === null) {
        const msg = 'Attempting field changes in Form where there is no data record.'

        const e = new Error('<Form  '+msg)
        logErrors(e, '<Form onChange() error:')
        setMsg(msg)
        return
      }

      try {
        // BUG: what if data is an array, not object
        const info = {parentRecName: props.parentRecName, formName: props.name}
        const changes = applyDeepValueChange(data, targetName, targetValue, info, props.debug)

        // echo back up the chain if requested
        if (props.pendingUpdates) {
          props.pendingUpdates(changes.update)
        } else {
          // it's OK, not every form will go back to a database, could be a compound search form
          // console.log('props.pendingUpdates is not defined in form:',props.name ,'record update info will be lost:',changes.update);
        }

        if (props.setData) {
          props.setData(changes.newData); // reg field value changes
        }

      } catch (e) {
          logErrors(e, '<Form onChange() error:')
      }

    }

    let handled = false
    if (props.onChangeSpecial) {
      handled = props.onChangeSpecial(change, moreChanges);
    }

    if (change.target && !handled) {
      if (props.debug) {
         console.log(`  <Form name='${props.name}'>   ${change.target.name} <== ${change.target.value} (${typeof change.target.value})`);
      }
      moreChanges(activeData, change.target.name, change.target.value)
    }

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

