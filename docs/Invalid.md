# Invalid Messaging

This will show the user how to show errors on fields.  The field in error will show up as pink and if the user hovers over the field it will display the error message.

How to use:

Invalid Values format for the screen:

invalidValues = [
 { validity: true or false,  This indicates whether the input item contains an
                             invalid item (true) or not (false).  The initial value
                             will be false, until an invalid item is found for this
                             input item.
   display: true or false,   This indicates whether the message should be displayed
                             or not.  Initially this value will be false, when an
                             invalid value for this input item is found, it will 
                             be set to true.  When the mouse is clicked for this
                             input item, the value will be set back to false.
   message: string           The message that will be displayed whenever the mouse
                             is hovered over the input item and display is true.
 }, ...
]


Input Values format for the table:

invalidValues = [
 { validity: [],             Each array position will indicate whether that input item on
                             a row in the table is invalid (true).  Only those items that 
                             have invalid values are placed in the array.  Initially the 
                             array will be empty.
   display: [],              Each array position will indicate whether the message should
                             be displayed for that item (true) or not (false) for that row
                             in the table.  The value will be true when initally inserted
                             with the validity value.  When the user click on the mouse on
                             the input item, the value will be changed to false.
   index: [],                Each array position will contain the row number (starting at 0) 
                             in the table for the input item that constains the invalid
                             value.  Initially the array will be empty.
   message: [],              Each array positon will contain the message that will be displayed
                             whenever the mouse is hovered over the input item and the display
                             is true.  Initially the array will be empty.
 }
]


Input Values format for both screen and table (dual):

 The invalid values array will contain the format for the screen (see above) and the format
 for the table (see above).  The screen format should be first followed by the table.


Contants
 The constants indicate the array position for each input item.  The are generally given a
 name followed by the index value.  The name is given in the code.


Screen Example:

 invalidValues = [
     { validity: false, display: false, message: 'The name must be given a value' },
     { validity: true, display: true, message: 'The SSN must be given a value' },
     { validity: true, display: false, message: 'The address must be given a value' }
 ]

 const NAME = 0;
 const SSN = 1;
 const ADDR = 2;

 invalidValues[NAME] contains a valid name, since validity is false.
 invalidValues[SSN] contains an invalid SSN (validity is true) and the message will be 
     displayed when the mouse is hovered over it, since display is true.  If the user, 
     clicks on the input item, display will be set to false and the message will not be
     displayed.
 invalidValues[ADDR] contains an invalid addresss (validity is true), but the message will
     not be displayed, since display is false.


Table Example:
 
 invalidValues = [
     { validity: [true, true], display: [true, false], index: [3, 4], message: ['The name is a duplicate, 'Invalid Name']},
     { validity: [true, true], display: [true, false], index: [8, 14], message: ['The SSN is a duplicate, 'Invalid SSN']},
 ]

 const NAME = 0;
 const SSN = 1;

 invalidValues[NAME] contains two invalid names (validity is true) in the table at rows 3 and 4 
     (actual 4 and 5).  The message 'The name is a duplicate' is being displayed, since display is true
     for that input item on row 3 of the table.   The message 'Invalid name' will not be displayed,
     since display is false for that input item on row 4 of the table.

 ivalidValues[SSN] contains two invalid SSNs (validity is true) in the table at rows 8 and 14 
 (actual 9 and 15).  The message 'The SSN is a duplicate' is being displayed, since display is true
     for that input item on row 8 of the table.   The message 'Invalid SSN' will not be displayed,
     since display is false for that input item on row 14 of the table.

Dual Example (screen and table):

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

 invalidValues[NAME] see invalidValues[NAME] in the Screen Example.
 invalidValues[SSN] see invalidValues[SSN] in the Screen Example.
 invalidValues[ADDR] see invalidValues[ADDR] in the Screen Example.
 invalidValues[NAMET] see invalidValues[NAME] in the Table Example.
 invalidValues[SSNT] see invalidValues[SSN] in the Table Example.

Assist Functions (functions that will assist in building fields showing up in pink and hovering over the pink fields to show errors):

1.  isInvalid 
        This will determine if the input item contains an invalid value and the message should be displayed or not based on the validity and display values for that item in the invalid value array.  This will work for screen or table entry.  If a screen entry, pos should be -1.

        Parameters:
    
        a. invalid  a specific input item in the invalid value array (specific index)
        b. pos      row number in the table if looking up a table entry or -1 for a screen entry

2.  setInvalidScreen
        This indicates that one of the input items on the screen contains an invalid value.

        Parameters:
        a. invalidValues    list of valid and invalid inputs for the screen
        b. constant         indicates which of the input items that is in invalid (the index into the array)
        c. message          message for the invalid value (will be displayed when the user hovers over the field)

3.  setInvalidTable
        This indicates that one of the input items in a table contains an invalid value.

        Parameters:
        a. invalidValues    list of invalid inputs for the table
        b. constant         indicates which of the input items is invalid (the index into the array)
        c. index            row number (from zero) in the table that contains the invalid item 
        d. message          message for the invalid value

4.  setInvalidDual
        This indicates that one of the input items is either on the screen or in a table and contains an invalid value.
 
        Parameters:
        a. invalidValues    list of invalid inputs for the screen or table
        b. constant1        index into the screen input items
        c. constant2        index into the table screen items
        d. index            row number in the table from zero
        e. type             indicates whether it is a screen entry (S) or table entry (T)
        f. message          message for the invalid value

5.  resetDisplayScreen
        This will set the display value to false for an invalid input item.
 
        Parameters:
        a. invalidValues    list of invalid inputs for the screen
        b. constant         indicates which of the input items is invalid (the index into the array)

6.  resetDisplayTable
        This will set the display value to false for an invalid input item.
 
        Parameters:
        a. invalidValues    list of invalid inputs for the screen
        b. constant         indicates which of the input items is invalid (the index into the array)
        c. index            row number in the table from zero

7.  wasClickedScreen
        Indicates that the mouse was clicked on a input, Choice, ChoiceText, Radio, or textarea HTML tag on the regular screen.  If the field was invalid and clicked on, it will remove the error message from being displayed when the mouse is hovered over the HTML item.  Do not use on radio buttons or check boxes.
 
        Parameters:
        a. invalidValues    list of invalid inputs for the screen
        b. constant         indicates which item the mouse was clicked on.  Set the contants after the invalid array.
        c. setInvalid       a state variable function that will place the invalidValues in the corresponding state variable.

8.  wasClickedTable
        Indicates that the mouse was clicked on a input, Choice, ChoiceText, Radio, or textarea HTML tag on a table.  If the field was invalid and clicked on, it will remove the error message from being displayed when the mouse is hovered over the HTML item.  Do not use on radio buttons
        or check boxes.

        Parameters:
        a. invalidValues    list of invalid inputs for the screen
        b. constant         indicates which item the mouse was clicked on.  Set the contants after the invalid array.
        c. index            row number in the table from zero
        d. setInvalid       a state variable function that will place the invalidValues in the corresponding state variable.

9.  validCheckDual
        This will check to see if any of the validity values is true in the invalid values array.  If one of the values is true, this function returns false.  If all the values are false, it returns true to indicate that there are not invalid values.  This is genearally called at the end of the validation function.
 
        Parameters:
        a. invalidValues    list of invalid inputs for the screen or table
        b. constants        list of screen constants to distinguish between screen and table constants

10. validCheckScreen
        This will check to see if any of the screen validity values is true in the invalid values array.  If one of the values is true, this function returns false.  If all the values are false, it returns true to indicate that there are not invalid values.  This is genearally  called at the end of the validation function.

        Parameters:
        a. invalidValues    list of invalid inputs for the screen

11. validCheckTable
        This will check to see if any of the table validity values is true in the invalid values array.  If one of the values is true, this function returns false.  If all the values are false, it returns true to indicate that there are not invalid values.  This is genearally called at the end of the validation function.

        Parameters: 
        a. invalidValues    list of invalid inputs for the table

12. clearInvalidDual
        This will clear the invalid values array, and reset the array to its original settings.  It will do this for the screen and table parts.

        Parameters:
        a. invalidValues    list of invalid inputs for the screen and table
        b. screen           array holding the starting and ending indexes (contants) for the screen part of the array
        c. table            array holding the starting and ending indexes (contants) for the screen part of the array

13. clearInvalidScreen
        This will clear the invalid values array, and reset the array to its original settings.  It will do this for the screen.

        Parameters:
        a. invalidValues    list of invalid inputs for the screen

14. clearInvalidScreenOnly
        This function is used when there are both screen and table invalid entries.  This will clear
        the invalid screen entries only.  It will not clear the table entries.
 
        Parameters:
        a. invalidValues    list of invalid inputs for the screen
        b. constant         the constant for the last screen entry


15. clearInvalidTable
        This will clear the invalid values array, and reset the array to its original settings.  It will do this for the table.

        Parameters:
        a. invalidValues    list of invalid inputs for the table

16. copyStyle
        This will copy another style of the form:
 
        const someStyle = {
                cssname: cssvalue;
        };
        
        Parameters:
        a. copyStyle        the style to copy

17. processStyleScreen
        This will determine if the style should change to the background color to the invalid color because the input table item has an invalid value.
 
        Parameters:
        a. invalidValues    list of invalid inputs
        b. constant         indicates which of the input items is invalid (the index into the array)
        c. style            the style to change the backgound 

18. processStyleTable
        This will determine if the style should change to the background color to the invalid color because the input table item has an invalid value.
 
        Parameters:
        a. invalidValues    list of invalid inputs for the table
        b. constant         indicates which of the input items is invalid (the index into the array)
        c. pos              row number in the table
        d. style            the style to change the backgound 

19. validStyling
        This will create a style with a normal background color, this a valid style.  No parameters.

20. invalidStyling
        This will create a style with a invalid background color, this a invalid style.  No parameters.

21. getInvalidMessage
        This will retrieve the message from the entry invalid value array for a table entry.

        Parameters:
        a. invalid         a specific input item in the invalid value array (specific index)
        b. pos             row number in the table if looking up a table entry or -1 for a screen entry



mousehover.css

This file contains two important class names:

1. checkForError = checks to see if the field contains an error when the mouse is hovered over it and indicates the position of the error
2. errMessage = contains the css for the error message (tootip) that is to be displayed



Both classes are required.  See the examples below.

Examples:

Screen

```javascript
import { isInvalid, setInvalidScreen, validCheckScreen, clearInvalidScreen, 
         wasClickedScreen, validStyling, invalidStyling,
         copyStyle, processStyleScreen} from './Invalid';
import 'mousehover.css'
...
const Test = (props) => {
    const invalidArray = [
        { validity: false, display: false, message: ''},
        { validity: false, display: false, message: ''},
        { validity: false, display: false, message: ''},
    ];

    const NAME = 0;
    const SAMPLE = 1;
    const ADDR = 2;
...
    const [name, setName] = useState('');
    // Need state variables for sample and address (same as name)
    const [invalid, setInvalid] = useState(invalidArray);
...
    const listStyle = {
        marginTop: '10px',
        width: '20%',
    };

    let nameStyle = copyStyle(listStyle);
    nameStyle.backgroundColor = Theme.getNormalBackColor(),
    nameStyle = processStyleScreen(invalid, NAME, nameStyle);

    // Need styles for sample and address (same as name)

    return (
        <div className="checkForError">
            <label htmlFor="id_name" className="tableLabel">Name:</label>
            <input type="text" 
                   id="id_name" 
                   name="name" 
                   value={name} 
                   onChange={(event) => setName(event.target.value)} 
                   onClick={() => wasClickedScreen(invalid, NAME, setInvalid)} 
                   style={nameStyle} /><br />
            {(isInvalid(invalid[NAME], -1) === true) ? <span className="errMessage">{invalid[NAME].message}</span> : null }
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

Table

```javascript
import { isInvalid, setInvalidTable, 
         validCheckTable, clearInvalidTable, 
         wasClickedTable,
         getInvalidMessage,
         copyStyle, processStyleTable, validStyling } from './Invalid';
import 'mousehover.css';

const Test = (props) => {
    const invalidArray = [  // Used to tell whether the user entered and invalid value or not
        { validity: [], display: [], index: [], message: [] },
        { validity: [], display: [], index: [], message: [] },
        { validity: [], display: [], index: [], message: [] },
    ];

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

        let nameStyle = validStyling();
        nameStyle = processStyleTable(invalid, NAME, i, nameStyle);

        // Need styles for sample and address (same as name)

        return (  // Build the row in the table
            <tr key={key}>
                <td className="checkForError">
                    <input type="text" 
                           id="id_name name="name" 
                           value={row.name} 
                           onChange={(event) => processName(event, i)} 
                           onClick={() => wasClickedTable(invalid, NAME, i, setInvalid)} 
                           style={nameStyle} />
                    {(isInvalid(invalid[NAME], i) === true) ? <span className="errMessage">{getInvalidMessage(invalid[NAME], i)}</span> : null }
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

Dual

```javascript
import { isInvalid, setInvalidScreen, validCheckScreen, clearInvalidScreen, 
         wasClickedScreen, validStyling, 
         copyStyle, processStyleScreen} from './Invalid';
import 'mousehover.css'
...
const Test = (props) => {
    const invalidArray = [
        { validity: false, display: false, message: ''},
        { validity: false, display: false, message: ''},
        { validity: false, display: false, message: ''},
        { validity: [], display: [], index: [], message: [] },
        { validity: [], display: [], index: [], message: [] },
    ];

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

    let nameStyle = validStyling();
    nameStyle = processStyleScreen(invalid, NAME, ipListStyle);

    // Need styles for address and city (same as name)

    return (
        <div className="checkForError">
            <label htmlFor="id_name" className="tableLabel">Name:</label>
            <input type="text" 
                   id="id_name" 
                   name="name" 
                   value={name} 
                   onChange={(event) => setName(event.target.value)} 
                   onClick={() => wasClickedScreen(invalid, NAME, setInvalid)} 
                   style={nameStyle} /><br />
            {(isInvalid(invalid[NAME], -1) === true) ? <span className="errMessage">{invalid[NAME].message}</span> : null }
            // Need address and city (same as name)
            ...
        </div>
    )

    function eachRow (row, i) {
        let key = "row_" + i;                       // The key attribute for a row in the table

        let sampleStyle = validStyling();
        sampleStyle = processStyleTable(invalid, SAMPLE, i, sampleStyle);

        // Need style for description (same as sample)

        return (  // Build the row in the table
            <tr key={key}>
                <td className="checkForError">
                    <input type="text" 
                           id="id_sample"
                           name="sample" 
                           value={row.sample} 
                           onChange={(event) => processSample(event, i)} 
                           onClick={() => wasClickedTable(invalid, SAMPLE, i, setInvalid)} 
                           style={sampleStyle} />
                    {(isInvalid(invalid[SAMPLE], i) === true) ? <span className="errMessage">{getInvalidMessage(invalid[SAMPLE], i)}</span> : null }
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