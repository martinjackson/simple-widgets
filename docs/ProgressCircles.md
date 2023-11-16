# **Progress Circles**

This will allow the user to see the progress as he goes through several pages and see the progress they have made though the pages.  The Progress Circles widget consists of several circles on a line.  The blue circle indicates the current page that is being displayed.  The green circle with the check mark indicates that the page has been processed.  The small gray circle indicates that those pages have not been processed.

## **Props**
In order to use the progress circles the user must pass the following props:

1. **table** = an array of objects that define how many circles there are and how each circle should start off.

    The format for the table is as follows:

    ```javascript
    let table = [
        {label: 'Data Load Source', status: 'done', page: DataLoadSource, validation: validation1, setProps: setProps1},
        {label: '', status: 'line'},
        {label: 'Data / Table Mapping', status: 'current', page: DataTableMapping, validation: validation2},
        {label: '', status: 'line'},
        {label: 'Data Validation', status: 'none', page: DataValidation, validation: validation3},
        {label: '', status: 'line'},
        {label: 'Data Load Results', status: 'none', page: DataLoadResults, validation: validation4},
    ]
    ```

    In the above example, there will be four circles, with labels underneath each circle, all connected with a line.  The first circle will be green circle with a check mark indicating done.  There will be a line between the first and second circles.  The second circle will be a blue circle indicating this is the current item being processed.  There will be a line between the second and third circles.  The remaining circles will be a small gray circle indication nothing has happened with these items.  There will be lines from the third circle to the remaining circles.

    Under the first circle will be the label Data Load Source.  Under the second circle will be the label Data / Table Mapping.  Under the third circle will be the label Data Validation.  Under the last circle will be the label Data Load Results.

    **Table Object Fields**
    - ***label*** = is the label that will go under each circle.  This field is required.
    - ***status*** = indicates the type of circle that will be displayed.  This field is required.
        - ***current*** = indicates a blue circle to show that the current page being processed.
        - ***done*** = indicates a green circle with a check to show that the page has already been processed.
        - ***none*** = indicates a gray circle to show that the page has not been processed.
        - ***line*** = indicates that a line will be between circles.  If lines are not preferred, remove those objects from the array.
    - ***page*** = the page that goes with the circle.  The page that will be displayed below the progress circles.  This is a normal page like anyother page.  If the processing option, there will need to be some small changes.  This field is optional.
    - ***processing*** = will call this function to do any special processing need, when the next button is pressed.  See the section Processing Before Moving to the Next Page.  Each processing function have a unique name.  This field is optional.

### **Button Props**
2. **havebuttons** = this will display two buttons Previous and Next below the circles.  These buttons will automatically move forward and backward, the blue circle and will switch to that page.  It will automatically update the circles along the way.
3. **buttonright** = this will display the two buttons on the right side of the screen.
4. **previousbutton** = allows the name of the previous button to be changed.
5. **nextbuton** = allows the name of the next button to be changed.
6. **noprevious** = indicates that the previous button will not be displayed; therefore, can only move forward.

## Processing Before Moving to the Next Page

To process a page you must have the processing option for that object in the table array.  For example,

```javascript
    let table = [
        {label: 'Data / Table Mapping', status: 'current', page: DataTableMapping, processing: processing2},
    ]
```

With the above table entry, there will need to be an import for the page in the same file as the ProgressCircles and table.  The import for the above table entry will be:

```javascript
    import DataTableMapping, { processing2 } from '.DataTableMapping.js';
```

The table indicates that the processing2 function will be called before leaving the Data / Table Mapping page.  The processing 2 function must return a boolean value.  Each function must have its own unique name.  This function is called when the Next button is pressed and if it the correct object, it will advance to the next page; otherwise, it will remain on the current page.

**DataTableMapping.js**

After the imports the following export and code will be needed:

```javascript
    export processing2 = () => { return processing() };

    const DataTableMapping = (props) => {
        ...
        processing = () => {
            ...
            return {validationReturn: true or false, props fields};
        }
        ...
    }
```

    The export contains the name in the table for the validation field (can be any name as long as they match).
    The return processing() is the function that is inside the component.  The name after the return can be any name as long it is the same name as in the component.  Notice the name in the component does ***NOT*** have a const in front of it.  The validation function can contain all the normal information that is validated.  If everything has been entered correctly return true; otherwise, return false.

    The processing function can do any type of processing, like saving data to a database, validating the data, passing props to the next page and following pages, etc.

    The return in processing should be an object.  The fields in the object should be the following:
    1.  **validationReturn** = this field is required, if validating data.  If the validation is ok, this field should be true; otherwise, false.  If there is no validation required, this field should be left out.  This field must be named validationReturn.
    2.  **props fields*** = these are the fields that are sent to the next page via the props.

    **Example 1**

```javascript
    return ({validationReturn: true, fiscalYear: 2024, name: 'Smith, John'})
```

    In the above example, validation is taking place; therefore, the validationReturn field is present and is returning a value of true indicating everything is ok.  The true can be replaced with a variable.

    The rest of fields (fiscalYear and name) will be sent down to the next page as props.  This is how information is sent page to page.

    The validationReturn field will not be sent as a props to the next page.


## CSS File

The following CSS file will need to be imported into your code that uses this AlertModal component.  We did this so you can style the AlertModal, any way you desire.  The import would be, if it is not be changed:

```javascript
import '../node_modules/simple-widgets/lib/sw-theme.css';
import '../node_modules/simple-widgets/lib/sw-circle.css';
```

For more information on CSS files, see [Using CSS](./UsingCSS.md).


## sw-circle.css

The CSS classes should not be changed for this widget.

## **Example 1**

```javascript
    let table = [
        {label: 'Data Load Source', status: 'done'},
        {label: '', status: 'line'},
        {label: 'Data / Table Mapping', status: 'current'},
        {label: '', status: 'line'},
        {label: 'Data Validation', status: 'none'},
        {label: '', status: 'line'},
        {label: 'Data Load Results', status: 'none'},
    ]
    ...
    return (
        <div>
            <ProgressCircles table={table} />
           ...
        </div>
    );
```

This will display Progress Circles, with the way it is setup in the table.  The user will have to change the table each time they want to move the circles.  This all done manually.

## **Example 2**

```javascript
    let table = [
        {label: 'Data Load Source', status: 'done'},
        {label: '', status: 'line'},
        {label: 'Data / Table Mapping', status: 'current'},
        {label: '', status: 'line'},
        {label: 'Data Validation', status: 'none'},
        {label: '', status: 'line'},
        {label: 'Data Load Results', status: 'none'},
    ]
    ...
    return (
        <div>
            <ProgressCircles table={table} havebuttons />
           ...
        </div>
    );
```

This will display Progress Circles, with the way it is setup in the table.  The Previous and Next buttons will be displayed below the circles and to the left.  The Previous and Next buttons will update the circles automatically.  However nothing else will happen.

## **Example 3**

```javascript
    import DataLoadSource from './DataLoadSource.js';
    import DataTableMapping from './DataTableMapping.js';
    import DataValidation from './DataValidation.js';
    import DataLoadResults from './DataLoadResults.js';

    let table = [
        {label: 'Data Load Source', status: 'done', page: DataLoadSource},
        {label: '', status: 'line'},
        {label: 'Data / Table Mapping', status: 'current', page: DataTableMapping},
        {label: '', status: 'line'},
        {label: 'Data Validation', status: 'none', page: DataValidation},
        {label: '', status: 'line'},
        {label: 'Data Load Results', status: 'none', page: DataLoadResults},
    ]

    ...
    return (
        <div>
            <ProgressCircles table={table} havebuttons buttonright />
           ...
        </div>
    );
```

This will display Progress Circles, with the way it is setup in the table.  The Previous and Next buttons will be displayed below the circles and to the right.  The Previous and Next buttons will update the circles automatically.  The entry that is current will have its page displayed on the screen. 


## **Example 4**

```javascript
    import DataLoadSource, { processing1 } from './DataLoadSource.js';
    import DataTableMapping, { processing2 } from './DataTableMapping.js';
    import DataValidation, { processing3 } from './DataValidation.js';
    import DataLoadResults, { processing4 } from './DataLoadResults.js';

    let table = [
        {label: 'Data Load Source', status: 'done', page: DataLoadSource, processing: processing1},
        {label: '', status: 'line'},
        {label: 'Data / Table Mapping', status: 'current', page: DataTableMapping, processing: processing2},
        {label: '', status: 'line'},
        {label: 'Data Validation', status: 'none', page: DataValidation, processing: processing3},
        {label: '', status: 'line'},
        {label: 'Data Load Results', status: 'none', page: DataLoadResults, processing: processing4},
    ]

    ...
    return (
        <div>
            <ProgressCircles table={table} havebuttons previousbutton="Back" nextbutton="Forward" />
           ...
        </div>
    );
```

**DataLoadSource.js**
```javascript
    ...
    export processing1 = () => { return processing };

    const DataLoadSource = (props) => {
        ...
        processing = () => {
            if (filename !== '') {
                return { validationReturn: true };
            } else {
                return { validationReturn: false };
            }
        }
        ...
    }
```

This will display Progress Circles, with the way it is setup in the table.  The Previous and Next buttons will be to the left and will be named Back and Forward, respectively.  The Back and Forward buttons will update the circles automatically.  Before going forward, the processing function for the current circle will be called.  The function should return an object and since validation is being done; there is the validationReturn field.  If true is returned, progress will go to the next circle.  If false is returned, nothing will happend, it will remain on that page.  The entry that is current will have its page displayed on the screen. Notice that there is ***not*** const in front of processing.  Since no props were being passed down, only the validationReturn field is present.

## **Example 5**

```javascript
    import DataLoadSource, { processing1 } from './DataLoadSource.js';
    import DataTableMapping, { processing2 } from './DataTableMapping.js';
    import DataValidation, { processing3 } from './DataValidation.js';
    import DataLoadResults, { processing4 } from './DataLoadResults.js';

    let table = [
        {label: 'Data Load Source', status: 'done', page: DataLoadSource, processing: processing1},
        {label: '', status: 'line'},
        {label: 'Data / Table Mapping', status: 'current', page: DataTableMapping, processing: processing},
        {label: '', status: 'line'},
        {label: 'Data Validation', status: 'none', page: DataValidation, processing: processing3},
        {label: '', status: 'line'},
        {label: 'Data Load Results', status: 'none', page: DataLoadResults, processing: processing4},
    ]

    ...
    return (
        <div>
            <ProgressCircles table={table} havebuttons previousbutton="Back" nextbutton="Forward" />
           ...
        </div>
    );
```

**DataLoadSource.js**
```javascript
    ...
    export processing1 = () => { return processing() };

    const DataLoadSource = (props) => {
        ...
        processing = () => {
            return {...props, ...newProps};
        }
    }
```

This will display Progress Circles, with the way it is setup in the table.  The Previous and Next buttons will be to the left and will be named Back and Forward, respectively.  The Back and Forward buttons will update the circles automatically.  When the next button (forward button), the processing function for current circle will be called.  The function should return an object.  In the above example, the props and newProps objects are combined into one object and returned.  The object will be passed into the next page's props.  Notice that there is no validationReturn field, which indicates no validation was taking place.

## **Example 6**

This is a combination of Examples 4 and 5

```javascript
    import DataLoadSource, { processing1 } from './DataLoadSource.js';
    import DataTableMapping, { processing2 } from './DataTableMapping.js';
    import DataValidation, { processing3 } from './DataValidation.js';
    import DataLoadResults, { processing4 } from './DataLoadResults.js';

    let table = [
        {label: 'Data Load Source', status: 'done', page: DataLoadSource, processing: processing1},
        {label: '', status: 'line'},
        {label: 'Data / Table Mapping', status: 'current', page: DataTableMapping, processing: processing},   
        {label: '', status: 'line'},
        {label: 'Data Validation', status: 'none', page: DataValidation, processing: processing3},
        {label: '', status: 'line'},
        {label: 'Data Load Results', status: 'none', page: DataLoadResults, processing: processing4},
    ]

    ...
    return (
        <div>
            <ProgressCircles table={table} havebuttons previousbutton="Back" nextbutton="Forward" />
           ...
        </div>
    );
```

**DataLoadSource.js**
```javascript
    ...
    export processing1 = () => { return processing }

    const DataLoadSource = (props) => {
        ...
        validation = () => {
            if (filename !== '') {
                return true;
            } else {
                return false;
            }
           return {validationReturn: true, ...props, ...newProps};
        }
    }
```

This is a combination of examples 4 and 5.



