# **Error Modal**

This will allow the user to pop up an error modal for displaying an error message.  It will have an OK button to close the Error modal.

### **Props**
In order to use the alert modal the user must pass the following props:

1.  **show** = a boolean variable indicating whether the alert modal should be displayed (true) or not (false).
2.  **closeFunct** = a function that will set the show variable back to false to close the alert modal.
3.  **message** = the message to display in the alert modal.

The show, closeFunct, and message props are required.  

## CSS File

The following CSS file will need to be imported into the file that uses this ErrorModal component.  The import would be, if it is not be changed:

```javascript
import '../node_modules/simple-widgets/lib/theme.css';
import '../node_modules/simple-widgets/lib/modal.css';
```

For more information on CSS files, see [Using CSS](./UsingCSS.md).

## modal.css

The CSS class to style the button:

***modal_ebuttonStyle*** = the style used for the OK button.

```css
.modal_ebuttonStyle {
    margin: var(--theme_buttonMargin);
    border-radius: var(--theme_buttonRadius);
    color: var(--theme_buttonTextColor);
    width: var(--theme_buttonWidth);
    height: var(--theme_buttonHeight);
    font: var(--theme_buttonFont);
    font-weight: var(--theme_buttonFontWeight);
    font-size: var(--theme_buttonFontSize);
    background-color: var(--theme_buttonColor);
}
```
### **Example**
The following is a code example:

```javascript
    import '../node_modules/simple-widgets/lib/theme.css';
    import '../node_modules/simple-widgets/lib/modal.css';

    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    ...
    return (
        <div>
            ...
            <button onClick={saveButton}>Save</button>
            ...
            <ErrorModal show={showError} closeFunct={setShowError} message={errorMessage} />
        </div>
    );

    function saveButton() {
        try {
            ...
        } catch (err) {
            setErrorMessage(err.message);
            setShowError(true);
        }
    }
```

In the index.html add the following line in the body:
```html
    <div id="modal"></div>
```

