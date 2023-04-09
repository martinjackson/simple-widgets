import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import gql from 'graphql-tag';

import { client }               from './client.js'
import { Form }                 from './Form.js'
import { TS }                   from './time.js'
import { applyDeepValueChange } from './dataRecordUtil.js'
import { useUserInfo }          from '../getUserInfo.js'

const UPDATE_RECORD = gql`mutation($gqlTable: String, $input: JSON, $where: JSON, $who: String) {
  updateRecord(gqlTable: $gqlTable, input: $input, where: $where, who: $who) }`

// ---------------------------------------------------------------------------------------------------------------------------------
export function SimpleEntryScreen(props) {

  const [username, _setUsername] = useUserInfo()

  const [pendingUpdates, setPendingUpdates] = useState({});
  const [pendingRecordCount, setPendingRecordCount] = useState(0);

  // const [createRecord] = useMutation(CREATE_RECORD, {client, fetchPolicy: 'network-only'});
  // const [deleteRecord] = useMutation(DELETE_RECORD, {client, fetchPolicy: 'network-only'});
  const [updateRecord] = useMutation(UPDATE_RECORD, { client, fetchPolicy: 'network-only' });


  const clearData = () => {
    setPendingUpdates({}); // remove all pending updates
    setPendingRecordCount(0);
  };

  const saveData = () => {
    console.log(TS(), "*** Save Changes on Form:");

    const pendingKeys = Object.keys(pendingUpdates);
    pendingKeys.map(k => {
      const r = pendingUpdates[k];
      updateRecord({ variables: { gqlTable: r.gqlTable, input: r.fields, where: r.where, who: username } })
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
  };

  const moreChanges = (data, targetName, targetValue) => {

      try {
        const changes = applyDeepValueChange(data, targetName, targetValue)
        setPendingUpdates(prev => addUpdate(prev, changes.update))
        props.setData(changes.newData); // reg field value changes
      } catch (e) {
        props.logErrors(e.message);
      }

  }

  const onChange = (change) => {

    const handled = props.onChangeSpecial(change, moreChanges);
    if (change.target && !handled) {
      // console.log(`   ${change.target.name} <== ${change.target.value}`);
      moreChanges(props.data, change.target.name, change.target.value)
    }

  }

  const addRecFn = () => {
    props.pickNewTopRecord(false); // not a clone
  }

  const cloneRecFn = () => {
    props.pickNewTopRecord(true);
  };

  const data = (props.data && props.recordName in props.data) ? props.data[props.recordName] : null
  const disabled = (pendingRecordCount == 0);

  // TODO: 2023-03-16 set debug={false}

  return <>
    {pendingRecordCount > 0 && <h1 className="text-white   bg-green-700 text-center">You have Pending Changes</h1>}

    <div className={props.header+"SectionFramed"}>
      <Form className={props.styleSelected}
        name={props.formName}
        header={props.header}
        data={data}
        onChange={onChange}
        addRecFn={addRecFn}
        cloneRecFn={cloneRecFn}
        isLoading={!props.rec || props.rec.loading}
        debug={props.debug} />
    </div>
    <div className={props.styleSelected}>
      <div className="footer">
        <input key="submit1" type="button" onClick={onSubmit} value="Save" disabled={disabled} />
        <input key="submit2" type="button" onClick={clearData} value="Cancel Changes" disabled={disabled} />
        <hr />
        <pre>{JSON.stringify(pendingUpdates, null, 2)}</pre>
      </div>
    </div>
  </>;

}