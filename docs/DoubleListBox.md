## Confirm Modal

This will allow the user to pop up a confirm modal asking the user of the application a yes or no question.  If the user answers by pressing the Yes button, the noFunct will be executed to close the confirm modal and the yesFunct will then be executed.  If the user answers by pressing the No button, the confirm modal will close.

In order to use the alert modal the user must pass the following props:

1.  show = a boolean variable indicating whether the confirm modal should be displayed (true) or not (false).
2.  yesFunct = a function that will be executed when the user presses the Yes button on the confirm modal.
3.  noFunct = a function that will set the show variable back to false to close the confirm modal, when the user presses the No button.  Also, called to close the confirm modal when the Yes button is pressed.  
4.  message = the message to display in the confirm modal.
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

The show, yesFunct, noFunct, and message props are required.  The button style prop is not required.

The following is a code example:

```javascript
let functYes = null;

const Test = props => {
    const [showConfirm, setShowConfirm] = useState(false);
    const [confirmMessage, setConfirmMessage] = useState('');
    ...
    return (
        <div>
            ...
            <button onClick={saveButton}>Save</button>
            ...
            <ConfirmModal show={showConfirm} yesFunct={functYes} noFunct={setShowConfirm} message={confirmMessage} />
        </div>
    );

    function saveButton() {
        setConfirmMessage('Are you sure you want to save?');
        functYes = saveButtonYes;
        setShowConfirm(true);
    }

    function saveButtonYes() {
        ...
    }
}
```

When the user clicks on the Save button, the saveButton function is executed, which will display the confirm modal.  If the user presses the Yes button, the confirm modal will close and saveButtonYes function will be executed.  If the user presses the No button, the confirm modal will close.

Another example:

```javascript
let functYes = null;

const Test = props => {
    const [showConfirm, setShowConfirm] = useState(false);
    const [confirmMessage, setConfirmMessage] = useState('');
    ...
    return (
        <div>
            ...
            <button onClick={() => saveButton(value)}>Save</button>
            ...
            <ConfirmModal show={showConfirm} yesFunct={functYes} noFunct={setShowConfirm} message={confirmMessage} />
        </div>
    );

    function saveButton(value) {
        setConfirmMessage('Are you sure you want to save?');
        functYes = () => saveButtonYes(value);
        setShowConfirm(true);
    }

    function saveButtonYes(value) {
        ...
    }
}
```

In the index.html add the following line in the body:
```html
    <div id="modal"></div>
```


The ConfirmModal requires the following:

1.  Modal.js
2.  modal.css
3.  Theme.js
4.  react
