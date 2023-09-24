
import React, {useState} from 'react'

import { FormFields, getGqlNameFromForm } from './FormFields.js'
import { Button } from './Button.js'
import {AddRecordIcon, CloneRecordIcon} from './img/FormImages.js'
import { arrLen } from './arrLen.js'
import { getAppSpecificInfo }   from './model/appSpecificInfo.js'
import { applyDeepValueChange } from './dataRecordUtil.js'

import './Form.css'

  // <a target="_blank" href="https://icons8.com/icon/gxuEDgFteZdP/database">Database</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
  import databaseLoading from './icons8-database.gif'

  // --------------------------------------------------------------------------
  export const DatabaseLoadingIcon = (props) => {
    const cn = (props.className) ? props.className+' ' : ''
    return (<img style={props.style} className={cn+'sw-DatabaseLoadingIcon'} src={databaseLoading}></img>)
  }



// ----------------------------------------------------------------------------------------------------------------------------------------------
function getLabels(formName) {
  const { formDictionary } = getAppSpecificInfo()

  let labels = []
  const formStructure = formDictionary(formName)
  if (formStructure) {
    labels = formStructure.fieldList.map(f => f.label)
  } else {
    console.log('getting form labels for unknown:', formName)
  }
  return labels
}


// ----------------------------------------------------------------------------------------------------------------------------------------------
export const FormHeader = (props) => {

  const numRecs = props.numRecs
  const defaults = {
    addRecFn:  () => {
        if (props.onChange) {
          props.onChange("add record "+props.parentRecName+" "+props.name)
      }
    },
    cloneRecFn:  () => {
        if (props.onChange) {
          props.onChange("clone record "+props.parentRecName+" "+props.name)
      }
    }
  }
  const addRecFn   = (props.addRecFn)   ? props.addRecFn   : defaults.addRecFn
  const cloneRecFn = (props.cloneRecFn) ? props.cloneRecFn : defaults.cloneRecFn
  const AddRecButton   = (props.noAdd)   ? null : <button title="New" onClick={addRecFn}><AddRecordIcon/></button>
  const CloneRecButton = (props.noClone) ? null :  <button title="New cloned data" onClick={cloneRecFn}><CloneRecordIcon/></button>
  const isLoading = (props.loadInProgress) ? <DatabaseLoadingIcon /> : null

  let recMsg = ''
  let cntMsg = ''
  if (numRecs) {   // not null
    recMsg = (numRecs != 1) ? `${numRecs} records ` : 'one record '
    cntMsg = (numRecs != 1) ? props.dataRowStart+1 : ''
    if (!props.parentRecName) {
      recMsg = ''
    }
  }

  const noLeft = <span>&nbsp;&nbsp;&nbsp;</span>   // same width as left arrow ??
  const LeftArrow  = (props.dataRowStart > 0) ?         <Button title="Previous"  text={"\u25C0"} onClick={props.recPrevFn} /> : noLeft
  const RightArrow = (props.dataRowStart < numRecs-1) ? <Button title="Next"      text={"\u25B6"} onClick={props.recNextFn} /> : <></>
  const FormHeaderLabel = <span className='formHeaderLabel'>{props.header}</span>  // initially for puppeteer location

  return  <div className="heading">
          <div className="flex justify-between">
              <div>{FormHeaderLabel} {isLoading} {AddRecButton} {CloneRecButton}   {LeftArrow} {cntMsg} {RightArrow} </div>
              <div>{recMsg}</div>
          </div>
        </div>

}


// ----------------------------------------------------------------------------------------------------------------------------------------------
export const FormTable = (props) => {

    if (props.debug) {
      if (props.data) {
        console.log('--- FormTable parent:', props.parentRecName, 'form name:',props.name, 'data:', props.data)     // The top most Form will have data
      }

      if (props.value) {
        console.log('--- FormTable parent:', props.parentRecName, 'form name:',props.name, 'value:', props.value)  // all sub-forms will have info in props.value
      }
    }

    if (!props.pendingUpdates) {
      console.log('--- FormTable parent:', props.parentRecName, 'form name:',props.name, 'props.pendingUpdates is missng')
    }

    console.log('--- FormTable props:', props);
    // chase down why no (props.pendingUpdates) or (props.setData)

    let activeData = (props.data) ? props.data : props.value

    const [dataRowStart, setDataRowStart] = useState(0)
    const recPrevFn = () => {setDataRowStart(dataRowStart-1)}
    const recNextFn = () => {setDataRowStart(dataRowStart+1)}

    if (props.isLoading) {
      return <span>Loading...</span>
    }

    const logErrors = (e, help) => {
      if (props.logErrors) {
        props.logErrors(e.message)
      }
      console.log(help, e.message)
      console.log(e.stack)
    }

    const onChange = (change) => {

      const moreChanges = (data, targetName, targetValue) => {

        try {
          const info = {parentRecName: props.parentRecName, formName: props.name}
          const changes = applyDeepValueChange(data, targetName, targetValue, info)
          if (props.pendingUpdates) {
            props.pendingUpdates(changes.update)
          } else {
            console.log('** missing props fn pendingUpdates --- FormTable parent:', props.parentRecName, 'form name:',props.name)
          }
          if (props.setData) {
            props.setData(changes.newData) // reg field value changes
          } else {
            console.log('** missing props fn setData --- FormTable parent:', props.parentRecName, 'form name:',props.name)
          }
        } catch (e) {
            logErrors(e, '<FormTable onChange() error:')
        }

      }

      const handled = (props.onChangeSpecial) ? props.onChangeSpecial(change, moreChanges) : false
      if (change.target && !handled) {
        // console.log(`   ${change.target.name} <== ${change.target.value}`);
        moreChanges(activeData, change.target.name, change.target.value)
      }

    }

    const rows = (activeData) ? activeData.length : 0
    // const [rowIndexes, setRowIndexes] = useState( [...Array(rows).keys()] )
    const rowIndexes = [...Array(rows).keys()]

    let labels = getLabels(props.name)

    const headStyle = {   // thead th
      position: 'sticky',
      top: 0,
      zIndex: 1,
      // important, otherwise background is transparent and data row is seen
      backgroundColor: 'var(--background-color)'
    }

    const headerWrap = (k,f) => <th style={headStyle} key={k}>{f}</th>
    const fieldWrap = (k,f) => <td key={k}>{f}</td>

return (
    <div className={props.className}>
      <div className={"form sw-form"}>
         <FormHeader
               header={props.header}
               dataRowStart={dataRowStart}
               parentRecName={props.parentRecName}
               addRecFn={props.addRecFn}
               cloneRecFn={props.cloneRecFn}
               numRecs={arrLen(activeData)}
               recPrevFn={recPrevFn}
               recNextFn={recNextFn}
               noAdd={props.noAdd}
               noClone={props.noClone}
               loadInProgress={props.loadInProgress}
               />
        <div>                                {/* style={{display:"inline-block"}}>  does not allow cells to resize  */}
          <div style={{overflow: 'auto'}}>   {/* height: (props.visRows+0.5) + 'rem'   does not allow cells to resize (textArea, etc) */}
            <table>
              <thead style={headStyle}>
                <tr className={"sw-form-tr"}>
                  <th></th>
                  {labels.map((f, j) => headerWrap(j, f))}
                </tr>
              </thead>
              <tbody>
                  {rowIndexes.map((i) => (
                    <tr key={i} className={"sw-form-tr"}>
                      { (i === dataRowStart) ? <td>▶</td> : <td></td> }
                      <FormFields
                        parentRecName={props.parentRecName}
                        name={props.name}
                        businessLogic={props.businessLogic}
                        pendingUpdates={props.pendingUpdates}
                        noAdd={props.noAdd}
                        noClone={props.noClone}
                        dataIndex={i}
                        formData={ (activeData && activeData[i]) ? activeData[i] : null }
                        showDebug={props.debug}
                        onChange={onChange}
                        withLabels={false}
                        wrapWith={fieldWrap}
                      />
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------------------------------------------------------------------------------
export const Form = (props) => {

  if (props.debug) {
      if (props.data) {
        console.log('--- Form parent:', props.parentRecName, 'name:',props.name, 'data:', props.data)     // The top most Form will have data
      }

      if (props.value) {
        console.log('--- Form parent:', props.parentRecName, 'name:',props.name, 'value:', props.value)  // all sub-forms will have info in props.value
      }
  }

  if (!props.pendingUpdates) {
    console.log('--- Form parent:', props.parentRecName, 'form name:',props.name, 'props.pendingUpdates is missng')
  }

  console.log('--- Form props:', props);
  // chase down why no (props.pendingUpdates) or (props.setData)

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

    console.log('<Forms form name:', props.name, 'onChange() change:', change)

    const moreChanges = (data, targetName, targetValue) => {

      try {
        // BUG: what if data is an array, not object
        const info = {parentRecName: props.parentRecName, formName: props.name}
        const changes = applyDeepValueChange(data, targetName, targetValue, info)

        // echo back up the chain if requested
        if (props.pendingUpdates) {
          props.pendingUpdates(changes.update)
        } else {
          console.log('props.pendingUpdates is not defined in form:',props.name ,'record update info will be lost:',changes.update);
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
      console.log(`  <Form name='${props.name}'>   ${change.target.name} <== ${change.target.value} (${typeof change.target.value})`);
      moreChanges(activeData, change.target.name, change.target.value)
    }

  }

    return (
      <div className='flex flex-row'>

        <div className={props.className}>
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

