import React, { useState } from 'react'

import { Form }                from './Form.jsx'
import { getGqlNameFromForm }  from './FormFields.jsx'
import { isFunction }          from './isFunction.js'

import { dTS }                 from '../time.js'


// ---------------------------------------------------------------------------------------------------------------------------------
export function SimpleEntryScreen(props) {

  const [pendingUpdates, setPendingUpdates] = useState({});
  const [pendingRecordCount, setPendingRecordCount] = useState(0);

  const updateRec = props.updateRec

  if (!isFunction(updateRec)) {
     console.log(dTS(), "*** SimpleEntryScreen missing props.updateRec -- record updates disabled.");
  }

  if (props.debug > 1) {
    console.log(dTS(), '== SimpleEntryScreen render ==', props)
 }



  const clearData = () => {
    setPendingUpdates({}); // remove all pending updates
    setPendingRecordCount(0);
  };

  const saveData = () => {
    console.log(dTS(), "*** Save Changes on Form:");

    const pendingKeys = Object.keys(pendingUpdates);
    pendingKeys.forEach(k => {
      const r = pendingUpdates[k];
      if (isFunction(updateRec)) {
        updateRec(r.gqlTable, r.fields, r.where)
          .then(rec => {
            const status = rec.data.updateRecord;
            if (status) {
              delete pendingUpdates[k];
              setPendingRecordCount(prevCnt => {
                return (prevCnt - 1);
              });
            }
          })
          .catch(err => {
            props.logErrors('Unable to save ' + k + ' -- ' + err);
          });
      }
    });

  };

  const onSubmit = e => {
    e.preventDefault();
    saveData();
  };

  // accumulate field changes by table:keys
  const addUpdate = (prev, u) => {
    if (!u.where) {
      const msg = 'This record in Table ' + u.gqlTable + ' is missing record keys. Can not save changes.';
      console.log('ERROR:', msg);
      return prev;
    }

    const keysStr = JSON.stringify(u.where).replaceAll('"', '');
    const id = u.gqlTable + ':' + keysStr;
    if (!prev[id]) {
      prev[id] = {
        fields: {},
        gqlTable: u.gqlTable,
        where: u.where
      };
      setPendingRecordCount(prevCnt => prevCnt + 1);
    }
    prev[id].fields[u.gqlField] = u.value;
    return prev;
  }

  const pendingUpdatesFn = (update) => {
    setPendingUpdates(prev => addUpdate(prev, update))
  }

  const addRecFn = (parentRecName, formName, activeDataRec) => {
    const recName = getGqlNameFromForm(formName)
    props.newRecord(false, parentRecName, recName, activeDataRec)              // not a clone
  }

  const cloneRecFn = (parentRecName, formName, activeDataRec) => {
    const recName = getGqlNameFromForm(formName)
    props.newRecord(true, parentRecName, recName, activeDataRec)              // clone new record
  }

  const disabled = (pendingRecordCount == 0);

  const pendingDataArea = (props.showPendingData) ? <pre>{JSON.stringify(pendingUpdates, null, 2)}</pre> : null
  const pendingMessage = (pendingRecordCount > 0) ? <h1 className="text-white   bg-green-700 text-center">You have Pending Changes</h1> : null

  // included in {...props}
  // header, loadInProgress,  data, setData, cloneFeature, noAdd, noClone, debug, onChangeSpecial

  // Form  props.pendingUpdatesFn -> passed as one of the props to sub-Forms
  //
  //    onFormChange() -> moreChanges()
  //      const changes = applyDeepValueChange(data, targetName, targetValue, info, props.debug)
  //
  //     if (props.pendingUpdatesFn) {
  //        props.pendingUpdatesFn(changes.update)
  //                      update = {
  //                        gqlTable: gqlName,
  //                        gqlField: fieldName,
  //                        value: value,
  //                        where: keyValues
  //                      }

  return <>
    {pendingMessage}

    <div className={props.header+"SectionFramed"}>
      <Form className={props.styleSelected}
        name={props.formName}
        addRecFn={addRecFn}
        cloneRecFn={cloneRecFn}
        pendingUpdatesFn={pendingUpdatesFn}
        isLoading={!props.rec || props.rec.loading}
        {...props}
        />
    </div>
    <div className={props.styleSelected}>
      <div className="footer">
        <input key="submit1" type="button" onClick={onSubmit} value="Save" disabled={disabled} />
        <input key="submit2" type="button" onClick={clearData} value="Cancel Changes" disabled={disabled} />
        <hr />
        {pendingDataArea}
      </div>
    </div>
  </>;

}
