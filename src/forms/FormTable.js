import React, { useState } from 'react';
import { FormFields } from './FormFields.js';
import { arrLen } from './arrLen.js';
import { applyDeepValueChange } from './dataRecordUtil.js';
import { getLabels } from './getLabels.js';
import { FormHeader } from './FormHeader.js';

// ----------------------------------------------------------------------------------------------------------------------------------------------
export const FormTable = (props) => {

  if (props.debug) {
    if (props.data) {
      console.log('--- FormTable parent:', props.parentRecName, 'form name:', props.name, 'data:', props.data); // The top most Form will have data
    }

    if (props.value) {
      console.log('--- FormTable parent:', props.parentRecName, 'form name:', props.name, 'value:', props.value); // all sub-forms will have info in props.value
    }
  }

  // it's OK, not every form will go back to a database, could be a compound search form
  // if (!props.pendingUpdates) {
  //   console.log('--- FormTable parent:', props.parentRecName, 'form name:',props.name, 'props.pendingUpdates is missng')
  // }
  // console.log('--- FormTable props:', props);
  let activeData = (props.data) ? props.data : props.value;

  const [dataRowStart, setDataRowStart] = useState(0);
  const recPrevFn = () => { setDataRowStart(dataRowStart - 1); };
  const recNextFn = () => { setDataRowStart(dataRowStart + 1); };

  if (props.isLoading) {
    return <span>Loading...</span>;
  }

  const logErrors = (e, help) => {
    if (props.logErrors) {
      props.logErrors(e.message);
    }
    console.log(help, e.message);
    console.log(e.stack);
  };

  const onChange = (change) => {

    const moreChanges = (data, targetName, targetValue) => {

      try {
        const info = { parentRecName: props.parentRecName, formName: props.name };
        const changes = applyDeepValueChange(data, targetName, targetValue, info, props.debug);
        if (props.pendingUpdates) {
          props.pendingUpdates(changes.update);
        } else {
          // it's OK, not every form will go back to a database, could be a compound search form
          // console.log('** missing props fn pendingUpdates --- FormTable parent:', props.parentRecName, 'form name:',props.name)
        }
        if (props.setData) {
          props.setData(changes.newData); // reg field value changes
        } else {
          const msg = '** missing props fn setData --- FormTable parent: ' + props.parentRecName + '  form name: ' + props.name;
          console.log(msg);
          throw new Error(msg);
        }
      } catch (e) {
        logErrors(e, '<FormTable onChange() error:');
      }

    };

    const handled = (props.onChangeSpecial) ? props.onChangeSpecial(change, moreChanges) : false;
    if (change.target && !handled) {
      // console.log(`   ${change.target.name} <== ${change.target.value}`);
      moreChanges(activeData, change.target.name, change.target.value);
    }

  };

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
};
