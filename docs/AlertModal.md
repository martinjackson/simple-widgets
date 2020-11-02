## Alert Modal

This will allow the user to pop up an alert modal giving the user of the application information.  It will have an OK button to close the Alert modal.

In order to use the alert modal the user must pass the following props:

1.  show = a boolean variable indicating whether the alert modal should be displayed (true) or not (false).
2.  closeFunct = a function that will set the show variable back to false to close the alert modal.
3.  message = the message to display in the alert modal.
4.  extra = a function with no parameters that will execute when the OK button is pressed and before the modal is closed.
5.  buttonStyle = the style for the OK button.  The default style for the button is:
```javascript
        margin: "10px",
        borderRadius: "10px",
        color: "white",
        backgroundColor: "blue",
        width: "100px",
        height: "30px",
        font: "Times New Roman",
        fontWeight: "bold",
```

The show, closeFunct, and message props are required.  The extra and button style props are not required.

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

In the index.html add the following line in the body:
```html
    <div id="modal"></div>
```
