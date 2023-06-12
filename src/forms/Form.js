
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
    addRecFn:  () => { props.onChange("add record "+props.parentRecName+" "+props.name) },
    cloneRecFn:  () => { props.onChange("clone record "+props.parentRecName+" "+props.name) }
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


  return  <div className="heading">
          <div className="flex justify-between">
              <div>{props.header} {isLoading} {AddRecButton} {CloneRecButton}   {LeftArrow} {cntMsg} {RightArrow} </div>
              <div>{recMsg}</div>
          </div>
        </div>

}


// ----------------------------------------------------------------------------------------------------------------------------------------------
export const FormTable = (props) => {

    // console.log('FormTable name:',props.name,'value:', props.value);

    const [dataRowStart, setDataRowStart] = useState(0)
    const recPrevFn = () => {setDataRowStart(dataRowStart-1)}
    const recNextFn = () => {setDataRowStart(dataRowStart+1)}

    if (props.isLoading) {
      return <span>Loading...</span>
    }

    let data = (props.data) ? props.data : props.value   // props.value should always be the case, especially sub-tables, props.data is legacy

    if (props.debug && (props.data || props.value)) {
        console.log(' FormTable props:', props.parentRecName, props.name, props.data, props.value);
    }

    const onChange = (change) => {

      const moreChanges = (data, targetName, targetValue) => {

        try {
          const changes = applyDeepValueChange(data, targetName, targetValue)
          props.pendingUpdates(changes.update)
          props.setData(changes.newData); // reg field value changes
        } catch (e) {
          props.logErrors(e.message);
        }

      }

      const handled = props.onChangeSpecial(change, moreChanges);
      if (change.target && !handled) {
        // console.log(`   ${change.target.name} <== ${change.target.value}`);
        moreChanges(props.data, change.target.name, change.target.value)
      }

    }

    const rows = (data) ? data.length : 0
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
               numRecs={arrLen(data)}
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
                        noAdd={props.noAdd}
                        noClone={props.noClone}
                        dataIndex={i}
                        formData={ (data && data[i]) ? data[i] : null }
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

  const gqlName = getGqlNameFromForm(props.name)

  const [dataRowStart, setDataRowStart] = useState(0)
  const recPrevFn = () => {setDataRowStart(dataRowStart-1)}
  const recNextFn = () => {setDataRowStart(dataRowStart+1)}

  if (props.debug) {
    console.log(' Form:', props.parentRecName, props.name, props.data, props.value);
  }

  let incomingData = (props.data) ? props.data : props.value
  const dataRow = Array.isArray(incomingData) ? incomingData : incomingData[gqlName]
  let data = (dataRow && dataRow[dataRowStart]) ? dataRow[dataRowStart] : dataRow


  const onChange = (change) => {

    console.log('<Forms onChange() change:', change)


    const moreChanges = (data, targetName, targetValue) => {

      try {
        const changes = applyDeepValueChange(data, targetName, targetValue)
        if (props.pendingUpdates) {
           props.pendingUpdates(changes.update)
        }

        if (props.setData) {
           props.setData(changes.newData); // reg field value changes
        }

      } catch (e) {
        if (props.logErrors) {
          props.logErrors(e.message)
        } else {
          console.log('<Forms onChange() error:', e.message)
        }
      }

    }

    let handled = false
    if (props.onChangeSpecial) {
      handled = props.onChangeSpecial(change, moreChanges);
    }

    if (change.target && !handled) {
      console.log(`  <Form>   ${change.target.name} <== ${change.target.value} (${typeof change.target.value})`);
      moreChanges(props.data, change.target.name, change.target.value)
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
              noAdd={props.noAdd}
              noClone={props.noClone}
              dataIndex={dataRowStart}
              formData={data}
              showDebug={props.debug}
              onChange={onChange}
              withLabels={true}
          />
        </div>
        </div>
      </div>)

}

