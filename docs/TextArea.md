# **TextArea**

This will display text area and will also display the number of characters entered and the maximum number of characters below the text area.  Just below the text area will be the following: 
    current-number-characters-in-textarea ***of** maximum-number-characters-in-textarea

The user can not exceed the maximum number of characters in the text area.  If the number of characters is exceeded, the display showing the number of characters will be red.

There is no error checking with this version of the TextArea.  The TextAreaError will do error checking for the text area.

## **Props**
In order to use the textarea the user must pass the following props:

1. **maxChars** = the maximum number of characters that are allowed in the text area.  
2. **name** = the name of the field as a literal.  This is the name field for the textarea.
3. **nameVar** = the state variable that is used to hold the data for the textarea.
4. **setFunct** = the set function that will set the state variable (nameVar).

All of the above props are required.

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
    const [description, setDescription] = useState('');
    ...
    return (
        <div>
            <TextArea
                id="id_description"
                name="description"
                nameVar={description}
                setFunct={setDescription}
                maxChars={50}
                rows="4" />
        </div>
    )
```

The name of the state variable is description (assigned to name and nameVar).  The function to set the data entered into the text area is setDescription.

The maximum number of characters that can be entered is 50 characters.

The id and rows are standard attributes for the textarea.

