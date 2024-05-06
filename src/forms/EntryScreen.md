
# EntryScreen

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
5. ***genPKsForNewRecords*** =
   ... called from inside  genNewRecordKeys(parentRecName, recName, activeDataRec, props.genPKsForNewRecords)
6. ***genPickListOfNew*** = function that returns a list of choices for the new record  &lt;------- likely to be phased out
7. ***styleSelected*** = if not specified defaults to styleSelected={'form-style-11'}
8. ***NewRecordGui*** = if missing, defaulted to SimpleTable.  This is the pop-up widget to select a new record.
9. ***noAdd*** = true or false, if true suppress the '+' add new record.
10. ***noClone*** = true or false, if true suppress the 'clone symbol' to create a new record and fill with current record values, minus keys.
11. ***showPendingData*** = true or false, if true, show the changed fields (as JSON) that are pending a save.
12. ***hiddenLookupColumns*** = if present, a list of columns to be hidden in the SearchSortTable.

## 2 Options to use EntryScreen

### Option 1: provide a list to choice from and pass the function that generates the list with the props.genPickListOfNew

   ```js
    <EntryScreen ... genPickListOfNew={genListOfNewPeople} />
   ```

    The following code inside EntryScreen is triggered when the "Plus" or "Clone" button on the top record is clicked

   ```js
           const newRecList = props.genPickListOfNew()
   ```

   After the modal is visible, the modal contains:

   ```js
           <NewRecordGui data={newRecList} height='30em' dataSelected={newRecRowSelected} />
   ```

   If there is NewRecordGui prop is missing, EntryScreen uses

   ```js
             <SimpleTable data={newRecList} height='30em' dataSelected={newRecRowSelected} />
   ```

   when a row is selected in SimpleTable, the row/record is passed to the props.dataSelected() function

    inside NewRecordGui ---> when selection of input has completed
                             const newRec = {key1: value, entry2: value2, etc}
                             props.dataSelected(newRec)
                                               ^--- this new record matches the data structure returned by the query

### How Props are related

    NewRecordGui props.data         returned by EntryScreen props.genPickListOfNew()
           an array of objects [{nctrId:1649, name:'Smith, Bob'}, {id:1650, name:'Jones, Jeff'}, ...]

    NewRecordGui props.height         hardcoded to '30em' and can be ignored
    NewRecordGui props.dataSelected   should be called with the record selected or entered.  The modal will be closed.
                                      this record data will then be populated in the top record of the EntryScreen
                                      any keyed fields that do not exist in the record will be ignored.

## Examples

```js

import { fetchLookupData, EntryScreen, SimpleTable }  from 'simple-widgets'

// --------------------------------------------------------------------------
const genListOfNewPeople = () => {
  const active = fetchLookupData('NCTR_ACTIVE')       // bad example, new people will not already be ACTIVE

  return active
}


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
function NewPeopleGui(props) {      // NewRecordGui

    return  <SimpleTable data={props.data} height='30em' dataSelected={props.dataSelected} />
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
              genPickListOfNew={genListOfNewPeople}
              businessLogic={businessLogic}
              NewRecordGui={NewPeopleGui}

              styleSelected={'form-style-11'}
              debug={false}
              />
}

```
