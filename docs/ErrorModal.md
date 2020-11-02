## Error Modal

This will allow the user to pop up an error modal for displaying an error message.  It will have an OK button to close the Error modal.

In order to use the alert modal the user must pass the following props:

1.  show = a boolean variable indicating whether the alert modal should be displayed (true) or not (false).
2.  closeFunct = a function that will set the show variable back to false to close the alert modal.
3.  message = the message to display in the alert modal.
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

The show, closeFunct, and message props are required.  The button style props is not required.

The following is a code example:

```javascript
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

