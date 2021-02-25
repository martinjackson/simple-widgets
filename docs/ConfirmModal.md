# **Confirm Modal**

This will allow the user to pop up a confirm modal asking the user of the application a yes or no question.  If the user answers by pressing the Yes button, the noFunct will be executed to close the confirm modal and the yesFunct will then be executed.  If the user answers by pressing the No button, the confirm modal will close.

### **Props**
In order to use the alert modal the user must pass the following props:

1.  **show** = a boolean variable indicating whether the confirm modal should be displayed (true) or not (false).
2.  **yesFunct** = a function that will be executed when the user presses the Yes button on the confirm modal.
3.  **noFunct** = a function that will be executed when the user presses the No button on the confirm model.  Another use this for this function is to set the show variable back to false to close the confirm modal, when the user presses the No button.  Also, called to close the confirm modal when the Yes button is pressed.
4.  **closeFunct** = a function that is used to close the modal when the Yes or No button is pressed.  If there are both a yesFunct and noFunct, the closeFunct is required to set the show variable back to false to close the confirm modal.  This option should not be present if the noFunct is used to close the modal.
4.  **message** = the message to display in the confirm modal.
5.  **buttonStyle** = the style for the OK button.  The default style for the button is:
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

The show, yesFunct, and noFunct and / or closeFunct props are required.  The message and button style prop is not required.  If the message prop is not supplied, the default message will be 'No Confirm message given'.

### **Examples**
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
            <ConfirmModal   show={showConfirm} 
                            yesFunct={functYes} 
                            noFunct={setShowConfirm} 
                            message={confirmMessage} />
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

Second example:

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
            <ConfirmModal   show={showConfirm} 
                            yesFunct={functYes} 
                            noFunct={setShowConfirm} 
                            message={confirmMessage} />
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

Third example:

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
            <ConfirmModal   show={showConfirm} 
                            yesFunct={functYes} 
                            closeFunct={setShowConfirm} 
                            message={confirmMessage} />
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

The noFunct is replaced with the closeFunct.  The second and third examples do the same thing.

Fourth Example:

```javascript
let functYes = null;
let functNo = null;

const Test = props => {
    const [showConfirm, setShowConfirm] = useState(false);
    const [confirmMessage, setConfirmMessage] = useState('');
    ...
    return (
        <div>
            ...
            <button onClick={() => saveButton(value)}>Save</button>
            ...
            <ConfirmModal   show={showConfirm} 
                            yesFunct={functYes}
                            noFunct={functNo} 
                            closeFunct={setShowConfirm} 
                            message={confirmMessage} />
        </div>
    );

    function saveButton(value) {
        setConfirmMessage('Are you sure you want to save?');
        functYes = () => saveButtonYes(value);
        functNo = () => saveButtonNo(value);
        setShowConfirm(true);
    }

    function saveButtonYes(value) {
        ...
    }

    function saveButtonNo(value) {
        ...
    }
}
```

When the user presses the Save button, the confirm modal will appear, asking 'Are you sure you want to save?'.  If they respond with Yes, the value will be passed to saveButtonYes and that function will execute.  If the they respond with No, the value will be passed to saveButtonNo and that function will execute.

### **Index.html**
In the index.html add the following line in the body:
```html
    <div id="modal"></div>
```


