# **Alert Modal**

This will allow the user to pop up an alert modal giving the user of the application information.  It will have an OK button to close the Alert modal.

## **Props**
In order to use the alert modal the user must pass the following props:

1. **show** = a boolean variable indicating whether the alert modal should be displayed (true) or not (false).
2. **closeFunct** = a function that will set the show variable back to false to close the alert modal.
3. **message** = the message to display in the alert modal.

The show, closeFunct, and message props are required.  The extra style prop is not required.

## CSS File

The following CSS file will need to be imported into your code that uses this AlertModal component.  We did this so you can style the AlertModal, any way you desire.  The import would be, if it is not be changed:

```javascript
import '../node_modules/simple-widgets/lib/sw-theme.css';
import '../node_modules/simple-widgets/lib/sw-modal.css';
```

For more information on CSS files, see [Using CSS](./UsingCSS.md).


## sw-modal.css

The CSS class to style the button:

***sw-modal_abuttonStyle*** = the style used for the OK button.

```css
.sw-modal_abuttonStyle {
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

## **Example**
The following is a code example:

```javascript
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    ...
    return (
        <div>
            ...
            <button onClick={saveButton}>Save</button>
            ...
            <AlertModal show={showAlert} closeFunct={setShowAlert} message={alertMessage} />
        </div>
    );

    function saveButton() {
        ...
        setAlertMessage('Save is finished!');
        setShowAlert(true);
    }
```

## **Index.html**
In the index.html add the following line in the body:
```html
    <div id="sw-modal"></div>
```
