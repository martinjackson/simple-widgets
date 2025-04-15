# **TextAreaError**

This will display text area and will also display the number of characters entered and the maximum number of characters below the text area.  Just below the text area will be the following: 
    current-number-characters-in-textarea ***of** maximum-number-characters-in-textarea

The user can not exceed the maximum number of characters in the text area.  If the number of characters is exceeded, the display showing the number of characters will be red.

There is error checking with this version of the TextAreaError.  The TextArea will not do error checking for the text area.

## **Props**
In order to use the textarea the user must pass the following props:

1. **maxChars** = the maximum number of characters that are allowed in the text area.  
2. **name** = the name of the field as a literal.  This is the name field for the textarea.
3. **nameVar** = the state variable that is used to hold the data for the textarea.
4. **setFunct** = the set function that will set the state variable (nameVar).
5. **invalid** = the invalid array that indicates which components have errors in them.  See the Invalid section in simple-widgets.
6. **setInvalid** = the function that set the invalid array (5. invalid) with the latest values.  See the Invalid section in simple-widgets.
7. **errorID** = the index into the invalid array.  See the Invalid section in simple-widgets.
8. **cssClass** = the CSS class for the text area.  Therefore, the className can not be used.

All the above props are required, except for the cssClass.

The rest of the props that is used by the textarea.

## CSS File

The following CSS file will need to be imported into your code that uses this TextArea component.  We did this so you can style the TextArea, any way you desire.  The import would be, if it is not be changed:

```javascript
import '../node_modules/simple-widgets/lib/sw-textarea.css';
```

For more information on CSS files, see [Using CSS](./UsingCSS.md).


## sw-textarea.css

The CSS class to style the display of the number of characters:

***sw-text_area_count*** = the style for the number of characters when there is no error.

```css
.sw-textarea_word_count {
    font-size: 10pt;
    line-height: 0;
}
```

***sw-textarea_word_count*** = the style for the number of characters when there is an error.

```css
.sw-textarea_word_count_red {
    font-size: 10pt;
    line-height: 0;
    color: red;
}
```


## **Example 1**
The following is a code example:

```javascript
    let invalidArray = generateInvalid(1, 0);
    const [description, setDescription] = useState('');
    const [invalid, setInvalid] = useState(invalidArray);

    const DESC = 1;
    ...
    const errorButton = () => {
      let localInvalid = [...invalid];
      setInvalid(clearInvalidScreen(localInvalid));
      localInvalid = setInvalidScreen(localInvalid, DESC, 'This is an error');
      setInvalid(localInvalid);
    }

    return (
        <div>
            <TextArea
                id="id_description"
                name="description"
                nameVar={description}
                setFunct={setDescription}
                maxChars={50}
                invalid={invalid}
                setInvalid={setInvalid}
                errorID={DESC}
                rows="4" />
            <button name="error" className={genButtonStyle1} onClick={errorButton}>
                Error
            </button>
        </div>
    )
```

The name of the state variable is description (assigned to name and nameVar).  The function to set the data entered into the text area is setDescription.

The maximum number of characters that can be entered is 50 characters.

The invalid and setInvalid will handle the error if there is one.  Invalid will contain the array that keeps track of which components contain invalid data or not.  The setInvalid will set the invalid array with new values. 

The errorID is the index into the invalid array for that component.

The id and rows are standard attributes for the textarea.

If the user presses the Error button, an error is generated for the TextAreaError.  The textarea will become pink and an error tool tip will be displayed next to the textarea.



