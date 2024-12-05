
# EntryScreen

cSpell: ignore nctr userdir

TODO: needs brief description.

## Required Props

1. ***formName*** =  a string the identifies the form registered in the named forms dictionary.
2. ***recordName*** = the name of the object returned from the GraphQL query.
3. ***queryName*** = a string the identifies the graphql query registered in the query dictionary.
   Someday props.recordName can be derived from the GraphQL query and no longer need to be passed to <EntryScreen />.
4. ***keys*** = the key/value pairs of the initial record that should be loaded.  If the value os null, no record will be loaded,
   but the form will need this information in order to build the update sql command.

## Optional Props

1. ***debug*** = 0 no extra debug out to console.log, 1 or greater gives more and more debug info
2. ***header*** = a string, a title for top of the form
3. ***who*** = Normally who={props.username}, passed down from the authentication
4. ***businessLogic*** = a function if passes as a prop is called  props.businessLogic(change, data)
   when record load is completed, then the whole record is signaled as changed.

   ```js
        const change = {target:{name:props.recordName+'[0]'}}   // signal whole record was loaded
        props.businessLogic(change, data)
   ```

   Returns true if the change was allowed.   Returns false if the change did not pass validation.
5. ***styleSelected*** = if not specified defaults to styleSelected={'form-style-11'}
6. ***showPendingData*** = true or false, if true, show the changed fields (as JSON) that are pending a save.
7. ***hiddenLookupColumns*** = if present, a list of columns to be hidden in the SearchSortTable.

## Examples

```js

import { fetchLookupData, EntryScreen, SimpleTable }  from 'simple-widgets'

// --------------------------------------------------------------------------
function businessLogic(change, data) {

  // data: record should already have the field change change.target.name
  if (change.target) {
    console.log('businessLogic()  change.target:', change.target);
    console.log('businessLogic()  data:', data);
    }

  return true;               // return false if businessLogic dictates the change can not be made
}

// --------------------------------------------------------------------------
export function Employee(props) {

  const keys = {nctrId: 14382}  // initial record to auto-load

    return <EntryScreen
              header="Employee"
              who={props.username}

              formName="shared.Userdir"
              recordName="userdir"
              queryName="SHARED_USERDIR"

              keys={keys}
              businessLogic={businessLogic}

              styleSelected={'form-style-11'}
              debug={false}
              />
}

```

-----------------------------------------------------------------------------------


```js
  if (needsLoading) {
    execQuery(props.queryName, { where: where })
      .then(results => onCompleted(results))
      .catch(error => onError(error))
  }
```


It is up to the application's implmentation of execQuery() whether queries are named or are literal queries

