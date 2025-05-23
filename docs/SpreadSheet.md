# **Spread Sheet**

This will allow a user to display a spread sheet on the screen.  The user can tab through the items on the spread sheet and enter values.  Buttons may also be placed in the spread sheet that will open a Modal to select an item athat will appear to the item to the left.

The user can also use the Top, Bottom, Previous, and Next buttons to display the next set of values in the table.

## ***Example***

```js
import React, { useState, useEffect } from 'react';
import { AlertModal, ErrorModal } from 'simple-widgets';
import SpreadSheet from './SpreadSheet';

const Breed2 = (props) => {
    const [username] = useUserInfo();
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);
    const [showBreeding, setShowBreeding] = useState(false);
    const [type, setType] = useState('');
    const [index, setIndex] = useState('');
    const [title, setTitle] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const sexValues = ['', 'Male', 'Female'];
    const pregValues = ['', 'Yes', 'No'];

    const saveData = async(data) => {
        try {
            // Write the data to the place where you want to save it.
        } catch (err) {
            setError (true);
            console.log ('The following error occurred: ', err);
            setErrorMessage (err.message);
            setShowError(true);
            return;
        }
    }

    let sheet = [        
        { header: 'Female ID',              name: 'femaleID',           validate: true,  save: false, hidden: false, disabled: false,    type: 'text' },
        { header: 'Day In',                 name: 'dayIn',              validate: true,  save: true,  hidden: false, disabled: false,    type: 'date' },
        { header: 'Pregnant',               name: 'pregnantName',       validate: false, save: false, hidden: false, disabled: false,    type: 'Choice', choices: pregValues},
        { header: 'Expected Sex',           name: 'expectedSexName',    validate: false, save: false, hidden: false, disabled: false,    type: 'ChoiceText', choices: sexValues },
        { header: 'Breeding Note',          name: 'note',               validate: false, save: true,  hidden: false, disabled: false,    type: 'textarea' },
        { header: 'Gestation Period',       name: 'gestPeriod',         validate: false, save: true,  hidden: false, disabled: false,    type: 'number' },
        { header: 'Born Alive',             name: 'bornAlive',          validate: false, save: true,  hidden: false, disabled: false,    type: 'CheckBox', 
        selectedValue: 'Y' },
    ];

    return (
        <div>
            <h1>Breeding</h1>
            <SpreadSheet 
                sheet={sheet}
                saveFunct={saveData}
                error={error} />
            <AlertModal show={showAlert} closeFunct={setShowAlert} message={alertMessage} />
            <ErrorModal show={showError} closeFunct={setShowError} message={errorMessage} />
        </div>
    )
}

export default Breed2;
```

### **Props**

In order for the user to use the Spread Sheet, they must pass the following props:

1.  ***sheet*** = is an object that defines how the spread sheet should look.  This prop is required.  The object must contain the following:
    - ***header*** = the name of the header for that column in the spread sheet.
    - ***name*** = the name of the variable that the value should be stored in.
    - ***checked*** = contains true if the column and the column header is to contain checkboxes.  If the buttonName and buttonFunct re used, which indicates that the developer will give name of the button and its behavior when items are checked in this column.  If no buttonName and buttonFunct are given, the default button Remove will be used, which will remove the row(s) that are checked.
    - ***disabled*** = contains true if the field is to be disabled and false if it is not.  This field is optional if disabled is to be false.
    - ***hidden*** = contains true if the field is not to be displayed in the spread sheet and false if is to be displayed.  If hidden is true, the header field can be a blank (' ').  This field is optional if hidden is to be false.
    - ***save*** = contains true if the field is to be saved when the Save button is pressed and false if it is not to be saved.  This field is optional if save is to be true.
    - ***search*** = contains true if the field is to be searched on.  The search will appear at the bottom of the spreadsheet.
    - ***sort*** = contains true if the field is to be sorted on.
    - ***validate*** = contains true if the field is to be validated or false if it is not to be validated.  This field is optional if validate is to be false.
    - ***type*** = indicates the type of field that will be displayed.  This field is optional if hidden is true.  The following are the different types of field to display.
        - ***button*** = indicates that a button field should be displayed to invoke a modal.  The name of the onClick function and parameters must be supplied.  The name of the button will be what is in the name field on the sheet.
            - ***buttonOnClick*** = the name of the onClick function for the button.  This should display the Modal.
            - ***parameters*** = an array that contains any parameters that need to be sent to the onClick function.
        - ***html*** = any other HTML that should be displayed in the field.
        - ***CheckBox*** = indicates that a check box field should be displayed.  See the CheckBox documentation for more details
            - ***selectedValue*** = the value to be placed in the check box when it is selected (checked).
        - ***Choice*** = indicates that a drop down field should be displayed.  See the Choice documentation for more details.
            - ***choices*** = an array that contains the values for the drop down
        - ***ChoiceText*** = indicates that a drop down field that can be typed in and searched should be displayed.  See the ChoiceText documentation for more details.
            - ***choices*** = an array that contains the values for the drop down
        - ***date*** = indicates a date field should be displayed.
        - ***number*** = indicates a numeric text field should be displayed.
        - ***Radio*** = indicates that a radio button field should be displayed.  See the Radio documentation for more details.
            - ***selectedValue*** = the value to be placed in the check box when it is selected (checked).
        - ***text*** = indicates a text field should be displayed.
        - ***textarea*** = indicates a textarea for the field should be displayed.

Example:
```js
    const sexValues = ['', 'Male', 'Female'];
    const pregValues = ['', 'Yes', 'No'];

    let theSpan = <span>Breeding Info</span>;

    let sheet = [        
        { header: 'Female ID',              name: 'femaleID',           validate: true,  save: false, hidden: false,    type: 'text' },
        { header: '',                       name: 'femaleUAI',          validate: false, save: true,  hidden: true },
        { header: '',                       name: 'Get',                validate: false, save: false, hidden: false,    type: 'button',         buttonOnClick: getButton, parameters: ['F'] },
        { header: 'Day In',                 name: 'dayIn',              validate: true,  save: true,  hidden: false,    type: 'date' },
        { header: 'Pregnant',               name: 'pregnantName',       validate: false, save: false, hidden: false,    type: 'Choice', choices: pregValues},
        { header: '',                       name: 'pregnant',           validate: false, save: true,  hidden: true },
        { header: 'Expected Sex',           name: 'expectedSexName',    validate: false, save: false, hidden: false,    type: 'ChoiceText', choices: sexValues },
        { header: '',                       name: 'expectedSex',        validate: false, save: true,  hidden: true },
        { header: 'Breeding Note',          name: 'note',               validate: false, save: true,  hidden: false,    type: 'textarea' },
        { header: 'Gestation Period',       name: 'gestPeriod',         validate: false, save: true,  hidden: false,    type: 'number' },
        { header: 'Born Alive',             name: 'bornAlive',          validate: false, save: true,  hidden: false,    type: 'CheckBox', 
        selectedValue: 'Y' },
        { header: 'Information',            name: 'info',               validate: false, save: false, hidden: false,    type: 'html', html: theSpan, search: cp },
        { header: 'Name',                   name: 'name',               validate: true,  save: false, hidden: false,    type: 'text', search: true, sort: true },
        { header: '', name: '', checked: true }
    ];
```

Female ID and femaleID

-    The header for the first column will contain Female ID.
-    The name for the field that the value will be stored under is femaleID.
-    The field should be validated.
-    The field will ***not*** be saved when the save button is pressed.
-    The field should ***not*** be hidden and will be displayed.
-    The type that will be displayed for the field will be a text box.

Female UAI
-    The is no need for a header since the field will be hidden.
-    The name of the field that the value will be stored under is femaleUAI.
-    The field will ***not*** be validated.
-    The field will be saved when the save button is pressed.
-    The field is hidden.
-    There is no need for a type since the field is hidden.

Get
-    There is no header since the field is a button to invoke the modal.
-    The name of the button will be Get, since the is the name in the name field.
-    The field will ***not*** be validated.
-    The field will ***not*** be saved when the save button is pressed.
-    The field will be displayed and ***not*** hidden.
-    The type for the field will be a button.  The name of the function that will be called when the Get button is pressed will be getButton.  The parameters array that will be passed to the function will be an 'F'.  The format of the getButton function will be:

```js
        const getButton (param, index, data) {
            
        }
```

- The name of the function is getButton.  The param parameter will be an array that contains the parameters in the sheet array (see above).  
        
- The index parameter is the index of the Get button within the data array.  If the Get button on the first row of the spread sheet was pressed, the index will be 0.

- The data is the data that is stored in the spread sheet.  For example, if the Get button on the first row of the spread sheet was pressed, you can access data[index].femaleID.  Each element in the data array is an object with the field names being the names in the field name in the sheet array.

Days In and DaysIn

- The header for the first column will contain Days In.
- The name for the field that the value will be stored under is daysIn.
- The field will be validated.
- The field will be saved when the save button is pressed.
- The field should ***not*** be hidden and will be displayed.
- The type that will be displayed for the field will be a date box.

Pregnant and Pregnant Name

- The header for the first column will contain Pregnant.
- The name for the field that the value will be stored under is pregnantName.
- The field should ***not*** be validated.
- The field will be ***not*** saved when the save button is pressed.
- The field should ***not*** be hidden and will be displayed.
- The type that will be displayed for the field will be a Choice (a drop down).  
- The values for the drop down are in choices, which are in pregValues.

Pregnant

- The is no need for a header since the field will be hidden.
- The name for the field that the value will be stored under is pregnant.
- The field should ***not*** be validated.
- The field will be saved when the save button is pressed.
- The field should be hidden and will ***not*** be displayed.
- There is no need for a type since the field is hidden.
    
Expected Sex and Expected Sex Name

- The header for the first column will contain Expected Sex.
- The name for the field that the value will be stored under is expectedSexName.
- The field should ***not*** be validated.
- The field will be ***not*** saved when the save button is pressed.
- The field should ***not*** be hidden and will be displayed.
- The type that will be displayed for the field will be a ChoiceText (a drop down).  
- The values for the drop down are in choices, which are in sexValues.

Expected Sex

- The is no need for a header since the field will be hidden.
- The name for the field that the value will be stored under is expectedSex.
- The field should ***not*** be validated.
- The field will be saved when the save button is pressed.
- The field should be hidden and will ***not*** be displayed.
- There is no need for a type since the field is hidden.
    
Breeding Note and Note

- The header for the first column will contain Breeding Note.
- The name for the field that the value will be stored under is note.
- The field should be ***not*** be validated.
- The field will be saved when the save button is pressed.
- The field should ***not*** be hidden and will be displayed.
- The type that will be displayed for the field will be a textarea.

Gestation Period and Gest Period

- The header for the first column will contain Gestation Period.
- The name for the field that the value will be stored under is gestPeriod.
- The field should be ***not*** be validated.
- The field will be saved when the save button is pressed.
- The field should ***not*** be hidden and will be displayed.
- The type that will be displayed for the field will be a numeric field.

Born Alive and bornAlive

- The header for the first column will contain Born Alive.
- The name for the field that the value will be stored under is bornAlive.
- The field should be ***not*** be validated.
- The field will be saved when the save button is pressed.
- The field should ***not*** be hidden and will be displayed.
- The type that will be displayed for the field will be a CheckBox.

Information and Info

- The header for the first column will contain Information.
- The name for the field that the value will be stored under is info.
- The field should be ***not*** be validated.
- The field will ***not*** be saved when the save button is pressed.
- The field should ***not*** be hidden and will be displayed.
- The type that will be displayed for the field will be a html.
- The html field contains a span that will display the word Information.

Name and name

-    The header for the first column will contain Name.
-    The name for the field that the value will be stored under is name.
-    The field should be validated.
-    The field will ***not*** be saved when the save button is pressed.
-    The field should ***not*** be hidden and will be displayed.
-    The type that will be displayed for the field will be a text box.
-    The field can be sorted and searched on.

last entry and checked: true

-   There is no header or name.
-   The checked: true indicates that the entire column will contain checkboxes.
-   The checkbox in the table header indicates whether all the rows should be checked or not.
-   When checked is true, another button will appear by default.  The name of the button is Remove, which will remove the checked row from the table.
-   The default button can have it name change and its default behavior overrridden with the buttonName and buttonFunct props.



2.  ***saveFunct*** = the name of the save function that will save the data.  This is not required if the noSave attribute is used.

```js
    const saveData = (data) => {
        ...
    }
```

-    The data is the spread sheet data that needs to be saved.  It will only have the field names that are to be saved in the sheet array (see above).

3.  ***removeFunct*** = the name of the remove function that will remove the checked data from the data.  This is not required (optional).

```js
    const removeData = (data) => {
        ...
    }
```

-    The data to be removed are those items that are checked in the spread sheet data.  It will only have the field names that are to be removed in the sheet array (see above).


4.  ***data*** = contains the spread sheet data.  This is only required if a button for a modal is being used.  If used, data should be set to an empty array.

The rest of the props are optional:

5.  ***specialProcessing*** = this function is called anytime a value is placed in one of the fields indicated in the sheet array.

```js
    const processValue = (data, name, value, index) {
        ...

        return data;
    }
```

- The name of the specialProcessing function is processValue.  The four parameters passed to it are:
    - data = the data in the spread sheet.
    - name = the name of the field the value is being placed.
    - value = the value that is being placed in the name field.
    - index = the row number in the data array where the data is being placed.
-   The data needs to be returned so that it can be incorporated into the spread sheet.

6.  ***specialProcessingSave*** = this function is called to do any processing before the save function (see the saveFunct prop) is called.
```js
    const processSave = (data) => {
        ...

        return data;
    }
```

-    The name of the specialProcessingSave function is processSave.  The data parameter is the data for the current row being processed in the spread sheet.
-   The data needs to be returned so that it can be incorporated into the spread sheet.

7.  ***maxItems*** = is the maximum number of items that can be displayed in the spreadsheet.  Pagination is used to see the rest of the rows in the spread sheet.  The default is 50.

```js
    maxItems="30"
```

-    The maximum number of items to display at one time in the spread sheet is 30.  

8.  ***blankRows*** = the total number of blank rows in the spread sheet.  If all the rows are to be displayed at once, make the maxItems and blankRows the same value.  The default is 100.

```js
    blankRows="50"
```

-    The number of blank rows in the spread sheet will be 50.

9.  ***additionRows*** = the number of additional rows to be added when the Add Rows button is pressed.  The default is 20.

```js
    additionalRows="10"
```

-    The number of additional rows added to the spread sheet is 10.

10.  ***preload*** = this a function that is called to pre load data into the spreadsheet. The function is called when the spread sheet is initially rendered, when the data is cleared, and when rows are added (it will only do it to the added rows).  The format for the function is:

```js
    const preLoadData = (data) => {
        ...

        return data;
    }
```

- The name of the pre Load function is preLoadData.
- data = the data in the spread sheet.
- The data needs to be returned so that it can be incorporated into the spread sheet.

11.  ***buttonName*** = the name of the button that is used in conjunction with checked: true (generates a column of checkboxes).  If checked is true, and there is no buttonName, the name of the button will be Remove.  If the name does not match what button is actually doing, then it can be changed.  The behavoir of the button is defined with ***buttonFunct***.

12.  ***buttonFunct*** = this is a function that defines the behavior of the name button with ***buttonName***.  This function is called when the user clicks on the button.  The format of the function is:

```js
    const buttonBehavior = (data) => {
        ...

        return data;
    }
```

13.  ***title*** = the centered title to be displayed above the spread sheet.  No title will be displayed if the prop is not present.

```js
    title="Breeding"
```

-    Breeding will be the title that appears centered before the spread sheet.

14. ***nosave*** = indicates that the Save button should not appear on the screen.  If this prop is used, there is no need for the saveFunct prop.

15. ***noclear*** = indicates that the Clear button should not appear on the screen.

16. ***noaddrows*** = indicates that the Add Rows button should not appear on the screen.  If this prop is used, there is no need for the additionalRows prop.

17. ***nopdf*** = indicates that the PDF button and Orientation drop down should not appear on the screen.

18. ***noexcel*** = indicates that the Excel button should not appear on the screen.

19. ***alignment*** = this will determine if the Clear, Save, and Remove buttons are on the left, center, or right on the spreadsheet.  The possible values are: left, center (default), and right. 

20. ***placement*** = indicates whether the Clear, Save, and Remove buttons are on the top or bottom of the spreadsheet.  The possible values are top and bottom (default).

21. ***height*** = the height of the spread sheet.  The default is 675px.

```js
    height="700px"
```

-    The height of the spread sheet is 700px.

22. ***error*** = indicates that an error occurred.  This will disable all buttons and certain fields in the spread sheet.

```js
    error={error}
```

-    The variable error will be passed into the spread Sheet.

23. ***indexing*** = is a function that returns the indexes into the current data being displayed.  This will rarely be used.  The user will need to add the indexing as a state variable.  See indexing in the Search Sort Table.

24. ***startEnd*** = is a function that returns the current starting and ending positions in the data being displayed.  This will rarely be used.  See startEnd in the Search Sort Table.


### ***CSS Files***

### ***sw-spreadSheet.css***
This is the CSS file that styles the SpreadSheet component.

## ***Classes***
1.  ***.sw-ss_button*** = the style for all the buttons in the Spread Sheet.

```css
.sw-ss_button {
    margin: var(--sw-theme_buttonMargin);
    border-radius: var(--sw-theme_buttonRadius);
    color: var(--sw-theme_buttonTextColor);
    font: var(--sw-theme_buttonFont);
    font-weight: var(--sw-theme_buttonFontWeight);
    font-size: var(--sw-theme_buttonFontSize);
}
```

2.  ***sw-ss_center*** = used to center the title of the Spread Sheet and buttons on the spreadsheet.

```css
.sw-ss_center {
    text-align: center;
}
```

3.  ***sw-ss_left*** = used to align the spreadsheet buttons to the left.

```css
.sw-ss_left {
    text-align: left;
}

```

4.  ***sw-ss_right*** = used to align the spreadsheet buttons to the right.

```css
.sw-ss_right {
    text-align: right;
}
```

5.  ***sw-ss_check*** = the size of the checkbox.

```css
.sw-ss_check {
    font-size: x-large;
}
```

6.  ***sw-ss_checked_background*** = the background color of the row when the checkbox is checked.

```css
.sw-ss_checked_background {
    background-color: var(--sw-theme_checkedBackground);
}
```

7.  ***sw-ss_background*** = the normal background color of the row when the checkbox is unchecked.

```css
.sw-ss_background {
    background-color: var(--sw-theme_backgroundColor);
}
```

## ***More Examples:***

### ***Example 1***
```js
import React, { useState, useEffect } from 'react';
import { AlertModal, ErrorModal, SpreadSheet } from 'simple-widgets';
import AnimalModal from './AnimalModal';
import { getUAI } from './Common';

const Breed2 = (props) => {
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);
    const [showBreeding, setShowBreeding] = useState(false);
    const [type, setType] = useState('');
    const [index, setIndex] = useState('');
    const [title, setTitle] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const sexValues = ['', 'Male', 'Female'];
    const pregValues = ['', 'Yes', 'No'];

    const saveData = async(data) => {
        try {
            // Code to save the data
        } catch (err) {
            setError (true);
            if (first === true) {
                first = false;
                console.log ('The following error occurred: ', err);
                setErrorMessage (err.message);
                setShowError(true);
            }
            return;
        }
    }

    const getButton = (param, index, localData) => {
        setType(param[0]);
        setIndex(index);
        setShowBreeding(true);
        setData(localData);

        if (param[0] === 'M') {
            setTitle('Breeding Male IDs');
        } else {
            setTitle('Breeding Female IDs');
        }
    }

    const processValue = (localData, name, value, index) => {
        if (name === 'femaleID') {
            localData[index].femaleUAI = getUAI(value);
        }

        if (name === 'maleID') {
            localData[index].maleUAI = getUAI(value);
        }

        return localData;
    }

    const processSave = (localData) => {
        if (localData.pregnantName === 'Yes') localData.pregnant = 'Y';
        if (localData.pregnantName === 'No') localData.pregnant = 'N';
        if (localData.pregnantName === '') localData.pregnant = '';
        if (localData.expectedSexName === 'Male') localData.expectedSex = 'M';
        if (localData.expectedSexName === 'Female') localData.expectedSex = 'F';
        if (localData.expectedSexName === '') localData.expectedSex = '';

        return localData;
    }


    const processAnimalID = (value) => {
        let localData = [...data];

        if (type === 'M') {
            localData[index].maleID = value.ANIMAL_ID;
            localData[index].maleUAI = parseInt(value.UAI);
        } else {
            localData[index].femaleID = value.ANIMAL_ID;
            localData[index].femaleUAI = parseInt(value.UAI);
        }

        setData(localData);
    }

    let sheet = [        
        { header: 'Female ID',              name: 'femaleID',           validate: true,  save: false, hidden: false,    type: 'text' },
        { header: '',                       name: 'femaleUAI',          validate: false, save: true,  hidden: true },
        { header: '',                       name: 'Get',                validate: false, save: false, hidden: false,    type: 'button', buttonOnClick: getButton, parameters: ['F'] },
        { header: 'Male ID',                name: 'maleID',             validate: true,  save: false, hidden: false,    type: 'text' },
        { header: '',                       name: 'maleUAI',            validate: false, save: true,  hidden: true },
        { header: '',                       name: 'Get',                validate: false, save: false, hidden: false,    type: 'button', buttonOnClick: getButton, parameters: ['M'] },
        { header: 'Day In',                 name: 'dayIn',              validate: true,  save: true,  hidden: false,    type: 'date' },
        { header: 'Day Out',                name: 'dayOut',             validate: false, save: true,  hidden: false,    type: 'date' },
        { header: 'Palpation Date',         name: 'palpationDate',      validate: false, save: true,  hidden: false,    type: 'date' },
        { header: 'Pregnant',               name: 'pregnantName',       validate: false, save: false, hidden: false,    type: 'Choice', choices: pregValues},
        { header: '',                       name: 'pregnant',           validate: false, save: true,  hidden: true },
        { header: 'Conception Date',        name: 'conceptionDate',     validate: false, save: true,  hidden: false,    type: 'date' },
        { header: 'Expected Delivery Date', name: 'expDelDate',         validate: false, save: true,  hidden: false,    type: 'date' },
        { header: 'Expected Sex',           name: 'expectedSexName',    validate: false, save: false, hidden: false,    type: 'Choice', choices: sexValues },
        { header: '',                       name: 'expectedSex',        validate: false, save: true,  hidden: true },
        { header: 'Breeding Note',          name: 'note',               validate: false, save: true,  hidden: false,    type: 'textarea' },
    ];

    return (
        <div>
            <h1>Breeding</h1>
            <SpreadSheet 
                sheet={sheet}
                maxItems="50"
                specialProcessing={processValue}
                specialProcessingSave={processSave}
                saveFunct={saveData}
                error={error}
                data={data} />
            <AnimalModal show={showBreeding} closeFunct={setShowBreeding} type={type} selFunct={processAnimalID} title={title} />
            <AlertModal show={showAlert} closeFunct={setShowAlert} message={alertMessage} />
            <ErrorModal show={showError} closeFunct={setShowError} message={errorMessage} />
        </div>
    )
}

export default Breed2;
```

## ***Example 2***

```js
    <SpreadSheet 
        sheet={sheet}
        maxItems="50"
        noSave
        noClear
        noaddrows
        error={error}
        data={data} />
 ```

-    In the above example the Save, Clear, and Add Rows button will not appear at the bottom of the spread sheet.

## ***Example 3***

```js
            <SpreadSheet 
                sheet={sheet}
                maxItems="100"
                blankRows="100"
                additionalRows="50"
                specialProcessing={processValue}
                specialProcessingSave={processSave}
                saveFunct={saveData}
                error={error}
                data={data} />
```

-    In the above example, the max rows on the screen match blank rows; therefore, the entire spread sheet will appear on the screen.
-    If the user presses the Add Rows button, 50 more blank rows will be added to the spread sheet.

## ***Example 4***

```js
  const sheet = [
    { header: 'Name',     name: 'name',   validate: true, hidden: false, save: false, disabled: false, type: 'text' },
    { header: 'City',     name: 'city',   validate: true, hidden: false, save: false, disabled: false, type: 'text' },
    { header: 'State',    name: 'state',  validate: true, hidden: false, save: false, disabled: false, type: 'Choice', choices: stateValues },
    { header: 'Zip Code', name: 'zip',    validate: true, hidden: false, save: false, disabled: false, type: 'number' },
    { header: 'Date',     name: 'date',   validate: true, hidden: false, save: false, disabled: false, type: 'date' },
  ];

  const populateSS = (localData) => {
    for (let i = 0; i < localData.length; i++) {
      localData[i].date = currentDBDate();
    }

    console.log('localData :', localData);

    return localData;
  }

  return    <SpreadSheet 
                sheet={sheet}
                maxItems="100"
                blankRows="100"
                additionalRows="50"
                preload={populateSS}
                saveFunct={saveData}
                error={error}
                data={data} />
```

-    In the above example, it will call the pre load function called populateSS.  The populateSS function will pre-load all of the date fields, with the current date.

### ***Example 5***

```js
    let sheet = [        
        { header: '',           name: '',           checked: true },
        { header: 'Last Name',  name: 'lastName',   validate: false, save: true,  hidden: true },
        { header: 'First Name', name: 'firstName',  validate: false, save: false, hidden: false,    type: 'text' },
        { header: 'City',       name: 'city',       validate: true,  save: false, hidden: false,    type: 'text' },
        { header: 'State',      name: 'state',      validate: false, save: true,  hidden: true,     type: 'text' },
        { header: 'Zip Code',   name: 'zip',        validate: false, save: false, hidden: false,    type: 'text' },
    ];

    const displayFunct = (data) => {
        for (let i = 0; i < data.length; i++) {
            if (data[i].checked === 'Y') {
                console.log ('Name', data[i].lastName + ' ' + data[i].firstName);
            }
        }
    }

    return (
        <div>
            <SpreadSheet 
                sheet={sheet}
                maxItems="50"
                specialProcessing={processValue}
                specialProcessingSave={processSave}
                saveFunct={saveData}
                buttonName="Display"
                buttonFunct={displayFunct}
                error={error}
                data={data} />
        </div>
    )
```

- In the above example, the Display button will appear next to the Save button.  When the user clicks on the Display button, it will execute the displayFunct (buttonFunct={displayFunct}), which will print out the names of all the people who are checked.

### ***Example 6***

```js
    let sheet = [        
        { header: '',           name: '',           checked: true },
        { header: 'Last Name',  name: 'lastName',   validate: false, save: true,  hidden: true },
        { header: 'First Name', name: 'firstName',  validate: false, save: false, hidden: false,    type: 'text' },
        { header: 'City',       name: 'city',       validate: true,  save: false, hidden: false,    type: 'text' },
        { header: 'State',      name: 'state',      validate: false, save: true,  hidden: true,     type: 'text' },
        { header: 'Zip Code',   name: 'zip',        validate: false, save: false, hidden: false,    type: 'text' },
    ];

    const saveData = (data) => {
        ...
    }

    const removeData = (data) => {
        ...
    }

    return (
        <div>
            <SpreadSheet 
                sheet={sheet}
                maxItems="50"
                saveFunct={saveData}
                removeFunct={removeData}
                error={error}
                data={data} />
        </div>
    )
```
Since the first line of the Sheet has checked set to true.  Therefore, checkboxes will appear at the beginning of each and the Remove button will appear. The rows that are checked will be removed when the Remove button is pressed.  When the Remove button is pressed the remove function will be executed.  The data will only contain the data that is to be removed.