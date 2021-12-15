# Invalid Messaging

This will show the user how to show errors on fields.  The field in error will show up as pink and if the user hovers over the field it will display the error message.  The mousehover.css file will need to be included.

How to use:

### Invalid Values format for the screen:
```javascript
invalidValues = [
 { validity: true or false,  
 /* This indicates whether the input item contains an invalid item (true) or not (false).  The initial value will be false, until an invalid item is found for this input item. */
   display: true or false,   
/* This indicates whether the message should be displayed or not.  Initially this value will be false, when an invalid value for this input item is found, it will be set to true.  When the mouse is clicked for this input item, the value will be set back to false. */
   message: string
/* The message that will be displayed whenever the mouse is hovered over the input item and display is true. */
 }, ...
]
```

### Input Values format for the table:
```javascript
invalidValues = [<br>
 { validity: [],             
/* Each array position will indicate whether that input item on a row in the table is invalid (true).  Only those items that have invalid values are placed in the array.  Initially the array will be empty. */
   display: [],              
/* Each array position will indicate whether the message should be displayed for that item (true) or not (false) for that row in the table.  The value will be true when initally inserted with the validity value.  When the user click on the mouse on the input item, the value will be changed to false. */
   index: [],                
/* Each array position will contain the row number (starting at 0) in the table for the input item that constains the invalid value.  Initially the array will be empty. */
  message: [],
/* Each array positon will contain the message that will be displayed whenever the mouse is hovered over the input item and the display is true.  Initially the array will be empty. */
 }
]
```

### Input Values format for both screen and table (dual):

 The invalid values array will contain the format for the screen (see above) and the format
 for the table (see above).  The screen format should be first followed by the table.


### **Contants**<br>
 The constants indicate the array position for each input item.  The are generally given a
 name followed by the index value.  The name is given in the code.


## **Screen Example:**
```javascript
 invalidValues = [
     { validity: false, display: false, message: 'The name must be given a value' },
     { validity: true, display: true, message: 'The SSN must be given a value' },
     { validity: true, display: false, message: 'The address must be given a value' }
 ]

 const NAME = 0;
 const SSN = 1;
 const ADDR = 2;
```
 invalidValues[NAME] contains a valid name, since validity is false.
 invalidValues[SSN] contains an invalid SSN (validity is true) and the message will be 
     displayed when the mouse is hovered over it, since display is true.  If the user, 
     clicks on the input item, display will be set to false and the message will not be
     displayed.
 invalidValues[ADDR] contains an invalid addresss (validity is true), but the message will
     not be displayed, since display is false.


## **Table Example:**
```javascript 
 invalidValues = [
     { validity: [true, true], display: [true, false], index: [3, 4], message: ['The name is a duplicate, 'Invalid Name']},
     { validity: [true, true], display: [true, false], index: [8, 14], message: ['The SSN is a duplicate, 'Invalid SSN']},
 ]

 const NAME = 0;
 const SSN = 1;
```

 invalidValues[NAME] contains two invalid names (validity is true) in the table at rows 3 and 4 
     (actual 4 and 5).  The message 'The name is a duplicate' is being displayed, since display is true
     for that input item on row 3 of the table.   The message 'Invalid name' will not be displayed,
     since display is false for that input item on row 4 of the table.

 ivalidValues[SSN] contains two invalid SSNs (validity is true) in the table at rows 8 and 14 
 (actual 9 and 15).  The message 'The SSN is a duplicate' is being displayed, since display is true
     for that input item on row 8 of the table.   The message 'Invalid SSN' will not be displayed,
     since display is false for that input item on row 14 of the table.

## **Dual Example (screen and table):**
```javascript
 invalidValues = [
     { validity: false, display: false, message: 'The name must be given a value' },
     { validity: true, display: true, message: 'The SSN must be given a value' },
     { validity: true, display: false, message: 'The address must be given a value' }
     { validity: [true, true], display: [true, false], index: [3, 4], message: ['The name is a duplicate, 'Invalid Name']},
     { validity: [true, true], display: [true, false], index: [8, 14], message: ['The SSN is a duplicate, 'Invalid SSN']},
 ]

 const NAME = 0;
 const SSN = 1;
 const ADDR = 2;
 const NAMET = 3;
 const SSNT = 4;
```

 invalidValues[NAME] see invalidValues[NAME] in the Screen Example.
 invalidValues[SSN] see invalidValues[SSN] in the Screen Example.
 invalidValues[ADDR] see invalidValues[ADDR] in the Screen Example.
 invalidValues[NAMET] see invalidValues[NAME] in the Table Example.
 invalidValues[SSNT] see invalidValues[SSN] in the Table Example.

## **Functions**
Assist Functions (functions that will assist in building fields showing up in pink and hovering over the pink fields to show errors):

1. **checkValidityScreen**<br>
    This will check to see if there is an invalid screen entry, and if there is, it will display an invalid message.

    Parameters:
    - invalidValues = the invalid array that contains what entries are invalid
    - constant = the screen constant that represents the array index to check in the invalid array.
                            
2. **checkValidityTable**<br>
    This will check to see if there is an invalid table entry, and if there is, it will display an invalid message.

    Parameters:
    - invalidValues = the invalid array that contains what entries are invalid
    - constant = the table constant that represents the array index to check in the invalid array.
    - index = the index into the table that contains the value being validated.
                            This is not the invalid array.

3. **clearInvalidDual**<br>
    This will clear the invalid values array, and reset the array to its original settings.  It will do this for the screen and table parts.

    Parameters:
    - invalidValues = list of invalid inputs for the screen and table
    - screen = array holding the starting and ending indexes (contants) for the screen part of the array
    - table = array holding the starting and ending indexes (contants) for the screen part of the array

4. **clearInvalidScreen**<br>
    This will clear the invalid values array, and reset the array to its original settings.  It will do this for the screen.

    Parameters:
    - invalidValues = list of invalid inputs for the screen

5. **clearInvalidScreenOnly**<br>
    This function is used when there are both screen and table invalid entries.  This will clear the invalid screen entries only.  It will not clear the table entries.
 
    Parameters:
    -  invalidValues = list of invalid inputs for the screen
    -  constant = the constant for the last screen entry

6. **clearInvalidTable**<br>
    This will clear the invalid values array, and reset the array to its original settings.  It will do this for the table.

    Parameters:
    - invalidValues = list of invalid inputs for the table

7. **generateInvalid**<br>
    This will generate the invalid array mentioned above for both screen and table.  It will then return the invalid array.  If there are no screen entries set the number of screen constants parameter to 0.  If there are not table entries set the number of table constants parameter to 0.

    Parameters:
    - numScreenConstants = the number of entries for the screen.  If there are no screen entries then the value should be zero.
    - numTableConstants = the number of entries for the table.  If there are no table entries then the value should be zero.

8. **getInvalidMessage**<br>
    This will retrieve the message from the entry invalid value array for a table entry.

    Parameters:
    - invalid = a specific input item in the invalid value array (specific index)
    - pos = row number in the table if looking up a table entry or -1 for a screen entry

9. **isInvalid** <br>
    This will determine if the input item contains an invalid value and the message should be displayed or not based on the validity and display values for that item in the invalid value array.  This will work for screen or table entry.  If a screen entry, pos should be -1.

    Parameters:
    - invalid = a specific input item in the invalid value array (specific index)
    - pos = row number in the table if looking up a table entry or -1 for a screen entry

10. **processInvalidStyleScreen**<br>
    This will determine if the style should change to the background color to the invalid color because the input table item has an invalid value.  This will return the style for the component.

    Parameters:
    - invalidValues = list of invalid inputs
    - constant = indicates which of the input items is invalid (the index into the array)
    - cssClassName = the name of a cssClassName that will be concatenated with either
    theme_normalBackground or theme_errorBackground.  This parameter is optional and is only there if a CSS class name is to be included.

11. **processInvalidStyleTable**<br>
    This will determine if the style should change to the background color to the invalid color because the input table item has an invalid value.  This will return the style for the component.

    Parameters:
    - invalidValues = list of invalid inputs for the table
    - constant = indicates which of the input items is invalid (the index into the array)
    - pos = row number in the table
    - cssClassName = the name of a cssClassName that will be concatenated with either
    theme_normalBackground or theme_errorBackground.  This parameter is optional and is only there if a CSS class name is to be included.

12. **processStyleScreen**<br>
    This will determine if the style should change to the background color to the invalid color because the input table item has an invalid value.
 
    Parameters:
    - invalidValues = list of invalid inputs
    - constant = indicates which of the input items is invalid (the index into the array)
    - cssClassName = the name of a cssClassName that will be concatenated with either
    theme_normalBackground or theme_errorBackground.  This parameter is optional and is only there if a CSS class name is to be included.


13. **processStyleTable**<br>
    This will determine if the style should change to the background color to the invalid color because the input table item has an invalid value.
 
    Parameters:
    - invalidValues = list of invalid inputs for the table
    - constant = indicates which of the input items is invalid (the index into the array)
    - pos = row number in the table
    - cssClassName = the name of a cssClassName that will be concatenated with either
    theme_normalBackground or theme_errorBackground.  This parameter is optional and is only there if a CSS class name is to be included.

14. **resetDisplayScreen**<br>
    This will set the display value to false for an invalid input item.
 
    Parameters:
    - invalidValues = list of invalid inputs for the screen
    - constant = indicates which of the input items is invalid (the index into the array)

15. **resetDisplayTable**<br>
    This will set the display value to false for an invalid input item.
 
    Parameters:
    - invalidValues = list of invalid inputs for the screen
    - constant = indicates which of the input items is invalid (the index into the array)
    - index = row number in the table from zero

16. **setInvalidDual**<br>
    This indicates that one of the input items is either on the screen or in a table and contains an invalid value.
 
    Parameters:
    - invalidValues = list of invalid inputs for the screen or table
    - constant1 = index into the screen input items
    - constant2 = index into the table screen items
    - index = row number in the table from zero
    - type = indicates whether it is a screen entry (S) or table entry (T)
    - message = message for the invalid value

17. **setInvalidScreen**<br>
    This indicates that one of the input items on the screen contains an invalid value.

    Parameters:
    - invalidValues = list of valid and invalid inputs for the screen
    - constant = indicates which of the input items that is in invalid (the index into the array)
    - message = message for the invalid value (will be displayed when the user hovers over the field)

18. **setInvalidTable**<br>
    This indicates that one of the input items in a table contains an invalid value.

    Parameters:
    - invalidValues = list of invalid inputs for the table
    - constant = indicates which of the input items is invalid (the index into the array)
    - index = row number (from zero) in the table that contains the invalid item 
    - message = message for the invalid value

19. **validCheckDual**<br>
    This will check to see if any of the validity values is true in the invalid values array.  If one of the values is true, this function returns false.  If all the values are false, it returns true to indicate that there are not invalid values.  This is genearally called at the end of the validation function.
 
    Parameters:
    - invalidValues = list of invalid inputs for the screen or table
    - constants = list of screen constants to distinguish between screen and table constants

20. **validCheckScreen**<br>
    This will check to see if any of the screen validity values is true in the invalid values array.  If one of the values is true, this function returns false.  If all the values are false, it returns true to indicate that there are not invalid values.  This is genearally  called at the end of the validation function.

    Parameters:
    - invalidValues = list of invalid inputs for the screen

21. **validCheckTable**<br>
    This will check to see if any of the table validity values is true in the invalid values array.  If one of the values is true, this function returns false.  If all the values are false, it returns true to indicate that there are not invalid values.  This is genearally called at the end of the validation function.

    Parameters: 
    - invalidValues = list of invalid inputs for the table

22. **wasClickedScreen**<br>
    Indicates that the mouse was clicked on a input, Choice, ChoiceText, Radio, or textarea HTML tag on the regular screen.  If the field was invalid and clicked on, it will remove the error message from being displayed when the mouse is hovered over the HTML item.  Do not use on radio buttons or check boxes.
 
    Parameters:
    - invalidValues = list of invalid inputs for the screen
    - constant = indicates which item the mouse was clicked on.  Set the contants after the invalid array.
    - setInvalid = a state variable function that will place the invalidValues in the corresponding state variable.

23. **wasClickedTable**<br>
    Indicates that the mouse was clicked on a input, Choice, ChoiceText, Radio, or textarea HTML tag on a table.  If the field was invalid and clicked on, it will remove the error message from being displayed when the mouse is hovered over the HTML item.  Do not use on radio buttons or check boxes.

    Parameters:
    - invalidValues = list of invalid inputs for the screen
    - constant = indicates which item the mouse was clicked on.  Set the contants after the invalid array.
    - index = row number in the table from zero
    - setInvalid = a state variable function that will place the invalidValues in the  corresponding state variable.



### **mousehover.css**

This file contains two important class names:

1. ***checkForError*** = checks to see if the field contains an error when the mouse is hovered over it and indicates the position of the error.
2. ***errMessage*** = contains the css for the error message (tootip) that is to be displayed.
3. ***checkForError:hover .errMessage = what to do when you hover over the component that caused the error.

```css

.checkForError {
    position: relative;
/*    display: inline-block; */
  }
  
 .errMessage {
    visibility: hidden;
    background-color: black;
    color: #fff;
    width: 350px; 
    text-align: center;
    border-radius: 6px;
    padding: 10px;
  
    /* Position the tooltip */
    position: absolute; 
    z-index: 1; 
  }


.checkForError:hover .errMessage {
    visibility: visible;
  }
```

Both classes are required.  See the examples below.

## **Examples:**

### **Screen**

```javascript
import { isInvalid, setInvalidScreen, validCheckScreen, clearInvalidScreen, 
         wasClickedScreen, validStyling, invalidStyling,
         copyStyle, processStyleScreen} from './Invalid';
import '../node_modules/simple-widgets/lib/mousehover.css'
...
const Test = (props) => {
    const invalidArray = generateInvalid(3, 0);

    const NAME = 0;
    const SAMPLE = 1;
    const ADDR = 2;
...
    const [name, setName] = useState('');
    // Need state variables for sample and address (same as name)
    const [invalid, setInvalid] = useState(invalidArray);
...
    return (
        <div className="sw-invalid_checkForError">
            <label htmlFor="id_name" className="tableLabel">Name:</label>
            <input type="text" 
                   id="id_name" 
                   name="name" 
                   value={name} 
                   onChange={(event) => setName(event.target.value)} 
                   onClick={() => wasClickedScreen(invalid, NAME, setInvalid)} 
                   className={processInvalidStyleScreen(invalid, NAME)} /><br />
            { checkValidityScreen(invalid, NAME) }
            // Need sample and address (same as name)
            ...
        </div>
    )

    function validate() {
        let localInvalid = [...invalid];

        localInvalid = clearInvalidScreen(localInvalid);

        if (name === '') { // Make sure a model was selected from the drop down list
            localInvalid = setInvalidScreen(localInvalid, NAME, 'A Name must be entered');
        }

        // Need validation for sample and address (same as name)

        setInvalid(localInvalid);

        return validCheckScreen(localInvalid); // Everything validated correctly
    }
```

## **Table**

```javascript
import { isInvalid, setInvalidTable, 
         validCheckTable, clearInvalidTable, 
         wasClickedTable,
         getInvalidMessage,
         copyStyle, processStyleTable, validStyling } from './Invalid';
import '../node_modules/simple-widgets/lib/mousehover.css'

const Test = (props) => {
    const invalidArray = generateInvalid(0, 3);

    const NAME = 0;
    const SAMPLE = 1;
    const ADDR = 2;
...
    const [name, setName] = useState([]);
    // Need state variables for sample and address (same as name)
    const [invalid, setInvalid] = useState(invalidArray);
...
    function eachRow (row, i) {
        let key = "row_" + i;                       // The key attribute for a row in the table

        return (  // Build the row in the table
            <tr key={key}>
                <td className="sw-invalid_checkForError">
                    <input type="text" 
                           id="id_name name="name" 
                           value={row.name} 
                           onChange={(event) => processName(event, i)} 
                           onClick={() => wasClickedTable(invalid, NAME, i, setInvalid)} 
                           className={processInvalidStyleTable(invalid, NAME, i)} />
                    { checkValidityTable(invalid, NAME, i) }
                </td>
                // Need td for sample and address (same as name)
                ...
            </tr>
        );
    }

   function validate(i) {
        let localInvalid = [...invalid];

        localInvalid = clearInvalidTable(localInvalid);

        if (name[i] !== '') {
            localInvalid = setInvalidTable(localInvalid, NAME, i, 'A Name must be entered');
        }

        // Need validation for sample and address (same as name)

        setInvalid(localInvalid);

        return validCheckTable(localInvalid); // Everything validated correctly
    }

```

## **Dual**

```javascript
import { isInvalid, setInvalidScreen, validCheckScreen, clearInvalidScreen, 
         wasClickedScreen, validStyling, 
         copyStyle, processStyleScreen} from './Invalid';
import '../node_modules/simple-widgets/lib/mousehover.css'
...
const Test = (props) => {
    const invalidArray = generateInvalid(3, 2);

    const NAME = 0;
    const ADDR = 1;
    const CITY = 3;
    const SAMPLE = 2;
    const DESC = 3;
...
    const [name, setName] = useState('');
    const [sample, setSample] = useState([]);
    // Need state variables for address and city (same as name) and description (same as sample)
    const [invalid, setInvalid] = useState(invalidArray);
...

    return (
        <div className="sw-invalid_checkForError">
            <label htmlFor="id_name" className="tableLabel">Name:</label>
            <input type="text" 
                   id="id_name" 
                   name="name" 
                   value={name} 
                   onChange={(event) => setName(event.target.value)} 
                   onClick={() => wasClickedScreen(invalid, NAME, setInvalid)} 
                   className={processInvalidStyleScreen(invalid, NAME)} /><br />
            { checkValidityScreen(invalid, NAME) }
            // Need address and city (same as name)
            ...
        </div>
    )

    function eachRow (row, i) {
        let key = "row_" + i;                       // The key attribute for a row in the table

        return (  // Build the row in the table
            <tr key={key}>
                <td className="sw-invalid_checkForError">
                    <input type="text" 
                           id="id_sample"
                           name="sample" 
                           value={row.sample} 
                           onChange={(event) => processSample(event, i)} 
                           onClick={() => wasClickedTable(invalid, SAMPLE, i, setInvalid)} 
                           className={processInvalidStyleTable(invalid, SAMPLE, i} />
                    { checkValidityScreen(invalid, SAMPLE, i) }
                </td>
                // Description (same as sample)
                ... 
            </tr>
        );
    }

    function validate(i) {
        let localInvalid = [...invalid];

        localInvalid = clearInvalidDual(localInvalid, [NAME, CITY], [SAMPLE, DESC]);

        if (name === '') { 
            localInvalid = setInvalidScreen(localInvalid, NAME, 'A Name must be entered');
        }
        // Validation for address and city (same as name)
        ...
        if (sample[i] === '') {
            localInvalid = setInvalidTable(localInvalid, SAMPLE, 'A Sample must be entered');
        }
        // Validation for description (same as sample)
        ...

        setInvalid(localInvalid);

        return validCheckDual(localInvalid, [NAME, ADDR, CITY]); 
    }

```