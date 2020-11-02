import Theme from './Theme';

/***************************************************************************************
 * 
 * Invalid Values format for the screen:
 * 
 * invalidValues = [
 *  { validity: true or false,  This indicates whether the input item contains an
 *                              invalid item (true) or not (false).  The initial value
 *                              will be false, until an invalid item is found for this
 *                              input item.
 *    display: true or false,   This indicates whether the message should be displayed
 *                              or not.  Initially this value will be false, when an
 *                              invalid value for this input item is found, it will 
 *                              be set to true.  When the mouse is clicked for this
 *                              input item, the value will be set back to false.
 *    message: string           The message that will be displayed whenever the mouse
 *                              is hovered over the input item and display is true.
 *  }, ...
 * ]
 * 
 * 
 * Input Values format for the table:
 * 
 * invalidValues = [
 *  { validity: [],             Each array position will indicate whether that input item on
 *                              a row in the table is invalid (true).  Only those items that 
 *                              have invalid values are placed in the array.  Initially the 
 *                              array will be empty.
 *    display: [],              Each array position will indicate whether the message should
 *                              be displayed for that item (true) or not (false) for that row
 *                              in the table.  The value will be true when initally inserted
 *                              with the validity value.  When the user click on the mouse on
 *                              the input item, the value will be changed to false.
 *    index: [],                Each array position will contain the row number (starting at 0) 
 *                              in the table for the input item that constains the invalid
 *                              value.  Initially the array will be empty.
 *    message: [],              Each array positon will contain the message that will be displayed
 *                              whenever the mouse is hovered over the input item and the display
 *                              is true.  Initially the array will be empty.
 *  }
 * ]
 * 
 * 
 * Input Values format for both screen and table (dual):
 * 
 *  The invalid values array will contain the format for the screen (see above) and the format
 *  for the table (see above).  The screen format should be first followed by the table.
 * 
 * 
 * Contants
 *  The constants indicate the array position for each input item.  The are generally given a
 *  name followed by the index value.  The name is given in the code.
 * 
 * 
 * Screen Example:
 * 
 *  invalidValues = [
 *      { validity: false, display: false, message: 'The name must be given a value' },
 *      { validity: true, display: true, message: 'The SSN must be given a value' },
 *      { validity: true, display: false, message: 'The address must be given a value' }
 *  ]
 * 
 *  const NAME = 0;
 *  const SSN = 1;
 *  const ADDR = 2;
 * 
 *  invalidValues[NAME] contains a valid name, since validity is false.
 *  invalidValues[SSN] contains an invalid SSN (validity is true) and the message will be 
 *      displayed when the mouse is hovered over it, since display is true.  If the user, 
 *      clicks on the input item, display will be set to false and the message will not be
 *      displayed.
 *  invalidValues[ADDR] contains an invalid addresss (validity is true), but the message will
 *      not be displayed, since display is false.
 * 
 * 
 * Table Example:
 *  
 *  invalidValues = [
 *      { validity: [true, true], display: [true, false], index: [3, 4], message: ['The name is a duplicate, 'Invalid Name']},
 *      { validity: [true, true], display: [true, false], index: [8, 14], message: ['The SSN is a duplicate, 'Invalid SSN']},
 *  ]
 * 
 *  const NAME = 0;
 *  const SSN = 1;
 * 
 *  invalidValues[NAME] contains two invalid names (validity is true) in the table at rows 3 and 4 
 *      (actual 4 and 5).  The message 'The name is a duplicate' is being displayed, since display is true
 *      for that input item on row 3 of the table.   The message 'Invalid name' will not be displayed,
 *      since display is false for that input item on row 4 of the table.
 * 
 *  ivalidValues[SSN] contains two invalid SSNs (validity is true) in the table at rows 8 and 14 
 *  (actual 9 and 15).  The message 'The SSN is a duplicate' is being displayed, since display is true
 *      for that input item on row 8 of the table.   The message 'Invalid SSN' will not be displayed,
 *      since display is false for that input item on row 14 of the table.
 * 
 * Dual Example (screen and table):
 * 
 *  invalidValues = [
 *      { validity: false, display: false, message: 'The name must be given a value' },
 *      { validity: true, display: true, message: 'The SSN must be given a value' },
 *      { validity: true, display: false, message: 'The address must be given a value' }
 *      { validity: [true, true], display: [true, false], index: [3, 4], message: ['The name is a duplicate, 'Invalid Name']},
 *      { validity: [true, true], display: [true, false], index: [8, 14], message: ['The SSN is a duplicate, 'Invalid SSN']},
 *  ]
 * 
 *  const NAME = 0;
 *  const SSN = 1;
 *  const ADDR = 2;
 *  const NAMET = 3;
 *  const SSNT = 4;
 * 
 *  invalidValues[NAME] see invalidValues[NAME] in the Screen Example.
 *  invalidValues[SSN] see invalidValues[SSN] in the Screen Example.
 *  invalidValues[ADDR] see invalidValues[ADDR] in the Screen Example.
 *  invalidValues[NAMET] see invalidValues[NAME] in the Table Example.
 *  invalidValues[SSNT] see invalidValues[SSN] in the Table Example.
 *  
 ************************************************************************************************/

/***************************************************************************************
 * 
 * This indicates that one of the input items on the screen contains an invalid value.
 * 
 * @param {*} invalidValues     list of valid and invalid inputs for the screen
 * @param {*} constant          indicates which of the input items that is in invalid
 *                              (the index into the array)
 * @param {*} message           message for the invalid value
 * 
 ****************************************************************************************/
export const setInvalidScreen = (invalidValues, constant, message) => {
    console.log ('invalidValues', invalidValues);
    console.log ('constant', constant);
    console.log ('message', message);
    
    invalidValues[constant].validity = true;    // Indicates the value is invalid
    invalidValues[constant].display = true;     // Indicates the message should be displayed
    if (message !== null) { // There is a message
        invalidValues[constant].message = message;
    }

    return invalidValues;
}

/*******************************************************************************************
 * 
 * This indicates that one of the input items in a table contains an invalid value.
 * 
 * @param {*} invalidValues     list of invalid inputs for the table
 * @param {*} constant          indicates which of the input items is invalid (the index
 *                              into the array)
 * @param {*} index             row number (from zero) in the table that contains the 
 *                              invalid item 
 * @param {*} message           message for the invalid value
 * 
 ********************************************************************************************/
export const setInvalidTable = (invalidValues, constant, index, message) => {
    let found = false;  // Indicates whether the invalid item already exists in the invalid values array
    let pos = 0;        // Position where the item was found in the index array

    // Spin through the array to find whether the item already exists in the 
    // index array for that input item
    for (let i = 0; i < invalidValues[constant].index.length; i++) {
        if (invalidValues[constant].index[i] === index) {
            found = true;
            pos = i;
        }
    }

    if (found) {    // Item already exists
        invalidValues[constant].validity[pos] = true;
        invalidValues[constant].display[pos] = true;
        if (message !== null) { // There is a message
            invalidValues[constant].message[pos] = message;
        }
    } else {    // Item does not exist, so place in in the appropriate arrays for that input item in the table
        invalidValues[constant].validity.push(true);
        invalidValues[constant].display.push(true);
        invalidValues[constant].index.push(index);
        if (message !== null) { // There is a message
            invalidValues[constant].message.push(message);
        } else {
            invalidValues[constant].message.push('');
        }
    }

    return invalidValues;
}

/***********************************************************************************************
 * 
 * This indicates that one of the input items is either on the screen or in a table and 
 * contains an invalid value.
 * 
 * @param {*} invalidValues list of invalid inputs for the screen or table
 * @param {*} constant1     index into the screen input items
 * @param {*} constant2     index into the table screen items
 * @param {*} index         row number in the table from zero
 * @param {*} type          indicates whether it is a screen entry (I) or table entry
 * @param {*} message       message for the invalid value
 * 
 ***********************************************************************************************/
export const setInvalidDual = (invalidValues, constant1, constant2, index, type, message) => {
    if (type === 'S') { // Screen entry
        invalidValues = setInvalidScreen (invalidValues, constant1, message);
    } else if (type === 'T') {    // Table entry
        invalidValues = setInvalidTable (invalidValues, constant2, index, message);
    }

    return invalidValues;
}

/***********************************************************************************************
 * 
 * This will set the display value to false for an invalid input item.
 * 
 * @param {*} invalidValues list of invalid inputs for the screen
 * @param {*} constant      indicates which of the input items is invalid (the index
 *                          into the array)
 * 
 ***********************************************************************************************/
export const resetDisplayScreen = (invalidValues, constant) => {
    invalidValues[constant].display = false;

    return invalidValues;
}

/***********************************************************************************************
 * 
 * This will set the display value to false for an invalid input item.
 * 
 * @param {*} invalidValues list of invalid inputs for the screen
 * @param {*} constant      indicates which of the input items is invalid (the index
 *                          into the array)
 * @param {*} index         row number in the table from zero
 * 
 ***********************************************************************************************/
export const resetDisplayTable = (invalidValues, constant, index) => {
    let found = false;  // Indicates whether the invalid item already exists in the invalid values array
    let pos = 0;        // Position where the item was found in the index array

    // Spin through the array to find whether the item already exists in the 
    // index array for that input item
    for (let i = 0; i < invalidValues[constant].index.length; i++) {
        if (invalidValues[constant].index[i] === index) {
            found = true;
            pos = i;
        }
    }

    if (found) {    // Item was found, so set the display to false
        invalidValues[constant].display[pos] = false;
    }

    return invalidValues;

}

/*******************************************************************************************
 * 
 * Indicates that the mouse was clicked on a input, Choice, ChoiceText, Radio, or textarea
 * HTML tag on the regular screen.  If the field was invalid and clicked on, it will remove 
 * the error message from being displayed when the mouse is hovered over the HTML item.
 * 
 * @param {*} constant  indicates which item the mouse was clicked on.  Set the contants
 *                      after the invalid array.
 * 
 ******************************************************************************************/
export const wasClickedScreen = (invalidValues, constant, setInvalid) => {
    let localInvalid = [...invalidValues];
    localInvalid = resetDisplayScreen(localInvalid, constant);
    setInvalid (localInvalid);
}

/*******************************************************************************************
 * 
 * Indicates that the mouse was clicked on a input, Choice, ChoiceText, Radio, or textarea
 * HTML tag on a table.  If the field was invalid and clicked on, it will remove 
 * the error message from being displayed when the mouse is hovered over the HTML item.
 * 
 * @param {*} constant  indicates which item the mouse was clicked on.  Set the contants
 *                      after the invalid array.
 * 
 ******************************************************************************************/
export const wasClickedTable = (invalidValues, constant, pos, setInvalid) => {
    let localInvalid = [...invalidValues];
    localInvalid = resetDisplayTable(localInvalid, constant, pos);
    setInvalid (localInvalid);
}


/*********************************************************************************************
 * 
 * Indicates whether the index matches one of the screen constants (constant indexes into the 
 * invalidValues array) (true) or not (false).
 * 
 * @param {*} index     an index into the invalidArray to see if it matches one of the 
 *                      screen constants or not
 * @param {*} constants the array of screen contants to see if there is a match
 * 
 *********************************************************************************************/
export const isConstant = (index, constants) => {
    // Spin through the array of contants to see if the index matches one of them
    for (let i = 0; i < constants.length; i++) {
        if (constants[i] === index) {
            return true;
        }
    }

    return false;
}

/***********************************************************************************************
 * 
 * This will check to see if any of the validity values is true in the invalid values array.
 * If one of the values is true, this function returns false.  If all the values are false, it
 * returns true to indicate that there are not invalid values.  This is genearally called at
 * the end of the validation function.
 * 
 * @param {*} invalidValues list of invalid inputs for the screen or table
 * @param {*} constants     list of screen constants
 * 
 ***********************************************************************************************/
export const validCheckDual = (invalidValues, constants) => {
    // Determine if any of the validation checks were invalid
    for (let i = 0; i < invalidValues.length; i++) { 
        if (isConstant(i, constants) === true) {   // Checking screen edits
            if (invalidValues[i].validity === true) {
                return false;
            }
        } else {    // Checking table edits
            for (let j = 0; j < invalidValues[i].validity.length; j++) {
                if (invalidValues[i].validity[j] === true) {
                    return false;
                }
            }
        }  
    }
    
    return true;
}

/**********************************************************************************************
 * 
 * This will check to see if any of the screen validity values is true in the invalid values 
 * array.  If one of the values is true, this function returns false.  If all the values are 
 * false, it returns true to indicate that there are not invalid values.  This is genearally 
 * called at the end of the validation function.
 * 
 * @param {*} invalidValues list of invalid inputs for the screen
 * 
 **********************************************************************************************/
export const validCheckScreen = (invalidValues) => {
    for (let i = 0; i < invalidValues.length; i++) {
        if (invalidValues[i].validity === true) { // Checking screen edits
            return false;
        }
    }

    return true;
}

/**********************************************************************************************
 * 
 * This will check to see if any of the table validity values is true in the invalid values 
 * array.  If one of the values is true, this function returns false.  If all the values are 
 * false, it returns true to indicate that there are not invalid values.  This is genearally 
 * called at the end of the validation function.
 * 
 * @param {*} invalidValues list of invalid inputs for the table
 * 
 **********************************************************************************************/
export const validCheckTable = (invalidValues) => {
    // Determine if any of the validation checks were invalid
    for (let i = 0; i < invalidValues.length; i++) { 
        for (let j = 0; j < invalidValues[i].validity.length; j++) {
            if (invalidValues[i].validity[j] === true) {
                return false;
            }
        }
    }
    
    return true;
}

/***********************************************************************************************
 * 
 * This will clear the invalid values array, and reset the array to its original settings.  It
 * will do this for the screen and table parts.
 * 
 * @param {*} invalidValues list of invalid inputs for the screen and table
 * @param {*} screen        array holding the starting and ending indexes (contants) for the 
 *                          screen part of the array
 * @param {*} table         array holding the starting and ending indexes (contants) for the 
 *                          screen part of the array
 * 
 ***********************************************************************************************/
export const clearInvalidDual = (invalidValues, screen, table) => {
    // Clear the screen part of the array
    for (let i = screen[0]; i <= screen[1]; i++) {
        invalidValues[i].validity = false;  // Set the validity and display parts back to false
        invalidValues[i].display = false;
    }

    // Cler the table part of the array, by setting them to empty arrays
    for (let i = table[0]; i <= table[1]; i++) {
        invalidValues[i].validity = [];
        invalidValues[i].display = [];
        invalidValues[i].index = [];
        invalidValues[i].message = [];
    }

    return invalidValues;
}

/***********************************************************************************************
 * 
 * This will clear the invalid values array, and reset the array to its original settings.  It
 * will do this for the screen.
 * 
 * @param {*} invalidValues list of invalid inputs for the screen
 * 
 ***********************************************************************************************/
export const clearInvalidScreen = (invalidValues) => {
    // Clear the screen values
    for (let i = 0; i < invalidValues.length; i++) {
        invalidValues[i].validity = false;
        invalidValues[i].display = false;
    }

    return invalidValues;
}

/***********************************************************************************************
 * 
 * This will clear the invalid values array, and reset the array to its original settings.  It
 * will do this for the table.
 * 
 * @param {*} invalidValues list of invalid inputs for the table
 * 
 ***********************************************************************************************/
export const clearInvalidTable = (invalidValues) => {
    // Clear the table entries, by setting to empty arrays
    for (let i = 0; i < invalidValues.length; i++) {
        invalidValues[i].validity = [];
        invalidValues[i].display = [];
        invalidValues[i].index = [];
        invalidValues[i].message = [];
    }

    return invalidValues;
}

/***********************************************************************************************
 * 
 * This will copy another style of the form:
 * 
 *  const someStyle = {
 *    cssname: cssvalue;
 *  };
 * 
 * @param {*} copyStyle the style to copy
 * 
 ***********************************************************************************************/
export const copyStyle = (copyStyle) => {
    let style = { ...copyStyle };   // Copy the style and set the background color to normal
    style.backgroundColor = Theme.getNormalBackColor();

    return style;
}

/***********************************************************************************************
 * 
 * This will determine if the style should change to the background color to the invalid color 
 * because the input table item has an invalid value.
 * 
 * @param {*} invalidValues list of invalid inputs
 * @param {*} constant      indicates which of the input items is invalid (the index
 *                          into the array)
 * @param {*} style         the style to change the backgound 
 * 
 ***********************************************************************************************/
export const processStyleScreen = (invalidValues, constant, style) => {
    if (invalidValues[constant].validity === true) { // and the entry is invalid
        style.backgroundColor = Theme.getErrorColor();
    } else {
        style.backgroundColor = Theme.getNormalBackColor();
    }

    return style;
}


/***********************************************************************************************
 * 
 * This will determine if the style should change to the background color to the invalid color 
 * because the input table item has an invalid value.
 * 
 * @param {*} invalidValues list of invalid inputs for the table
 * @param {*} constant      indicates which of the input items is invalid (the index
 *                          into the array)
 * @param {*} pos           row number in the table
 * @param {*} style         the style to change the backgound 
 * 
 ***********************************************************************************************/
export const processStyleTable = (invalidValues, constant, pos, style) => {
    // Spin through the validity array for that item in the invalid values array
    for (let j = 0; j < invalidValues[constant].validity.length; j++) {
        if (pos === invalidValues[constant].index[j]) { // Check to see if it is the correct index
            if (invalidValues[constant].validity[j] === true) { // and the entry is invalid
                style.backgroundColor = Theme.getErrorColor();
            }
        }
    }

    return style;
}

/**********************************************************************************************
 * 
 * This will create a style with a normal background color, this a valid style.
 * 
 **********************************************************************************************/
export const validStyling = () => {
    const validStyle = {
        backgroundColor: Theme.getNormalBackColor(),
    };

    return validStyle;
}

/**********************************************************************************************
 * 
 * This will create a style with a invalid background color, this a invalid style.
 * 
 **********************************************************************************************/
export const invalidStyling = () => {
    const invalidStyle = {
        backgroundColor: Theme.getErrorColor(),
    }

    return invalidStyle;
}

/*********************************************************************************************
 * 
 * This will determine if the input item contains an invalid value and the message should be
 * displayed or not based on the validity and display values for that item in the invalid 
 * value array.  This will work for screen or table entry.  If a screen entry, pos should 
 * be -1.
 * 
 * @param {*} invalid   a specific input item in the invalid value array (specific index)
 * @param {*} pos       row number in the table if looking up a table entry or -1 for a 
 *                      screen entry
 * 
 ***********************************************************************************************/
export const isInvalid = (invalid, pos) => {
    if (pos === -1) {   // Screen entry
        return (invalid.validity && invalid.display);
    } else {    // Table entry
        for (let i = 0; i < invalid.validity.length; i++) {
            if (invalid.index[i] === pos) { // Find the entry for that row in the table
                return invalid.validity[i] && invalid.display[i];
            }
        }
    }

    return false;
}

/**********************************************************************************************
 * 
 * This will retrieve the message from the entry invalid value array for a table entry.
 * 
 * @param {*} invalid   a specific input item in the invalid value array (specific index)
 * @param {*} pos       row number in the table if looking up a table entry or -1 for a 
 *                      screen entry
 * 
 **********************************************************************************************/
export const getInvalidMessage = (invalid, pos) => {
    for (let i = 0; i < invalid.index.length; i++) {
        if (invalid.index[i] === pos) { // Find the entry for that row in the table
            return invalid.message[i];  // Return the message
        }
    }
    
    return '';
}
