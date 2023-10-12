import React, { useState } from 'react'
import { FormFields } from './FormFields.js'
import { arrLen } from './arrLen.js'
import { applyDeepValueChange } from './dataRecordUtil.js'
import { getLabels } from './getLabels.js'
import { FormHeader } from './FormHeader.js'

import { onFormChange } from './onFormChange.js'
import { formStartMessage } from './formStartMessage.js'

// ----------------------------------------------------------------------------------------------------------------------------------------------
export const FormTable = (props) => {

  formStartMessage(props, 'FormTable')

  const [dataRowStart, setDataRowStart] = useState(0);
  const recPrevFn = () => { setDataRowStart(dataRowStart - 1); };
  const recNextFn = () => { setDataRowStart(dataRowStart + 1); };

  if (props.isLoading) {
    return <span>Loading...</span>;
  }

  const gqlName = getGqlNameFromForm(props.name)
  let incomingData = (props.data) ? props.data : props.value

  let dataRow = incomingData
  if (incomingData && incomingData[gqlName])   // if it is an object, ie. result from graphQL query and the graphQL noun is there
     dataRow = incomingData[gqlName]

  let activeData = incomingData    // keep as an array

  const onChange = (change) => {
    onFormChange(change, props, '<FormTable ')
  }


  const rows = (activeData) ? activeData.length : 0;
  // const [rowIndexes, setRowIndexes] = useState( [...Array(rows).keys()] )
  const rowIndexes = [...Array(rows).keys()];

  let labels = getLabels(props.name);

  const headStyle = {
    position: 'sticky',
    top: 0,
    zIndex: 1,
    // important, otherwise background is transparent and data row is seen
    backgroundColor: 'var(--background-color)'
  };

  const headerWrap = (k, f) => <th style={headStyle} key={k}>{f}</th>;
  const fieldWrap = (k, f) => <td key={k}>{f}</td>;

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
          loadInProgress={props.loadInProgress} />
        <div>                                {/* style={{display:"inline-block"}}>  does not allow cells to resize  */}
          <div style={{ overflow: 'auto' }}>   {/* height: (props.visRows+0.5) + 'rem'   does not allow cells to resize (textArea, etc) */}
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
                    {(i === dataRowStart) ? <td>▶</td> : <td></td>}
                    <FormFields
                      parentRecName={props.parentRecName}
                      name={props.name}
                      businessLogic={props.businessLogic}
                      pendingUpdates={props.pendingUpdates}
                      noAdd={props.noAdd}
                      noClone={props.noClone}
                      dataIndex={i}
                      formData={(activeData && activeData[i]) ? activeData[i] : null}
                      showDebug={props.debug}
                      onChange={onChange}
                      withLabels={false}
                      wrapWith={fieldWrap} />
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


