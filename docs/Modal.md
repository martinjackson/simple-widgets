# **Modal**

Modal allows a user to create their own modal (popup).  The modal will appear in the middle of the screen, with the background lightly grayed out.

### **Props**
This modal takes three props:

1.  **show**: boolean value indicating whether to show the modal (true) or not (false)
2.  **message**: the message to display in the modal
3.  **closeFunct**: used to close the modal when the user presses the OK button


### **Example**
An example of a Modal:

```javascript
import React from 'react';

import { Modal, buttonStyle }  from 'simple-widgets';
import './modal.css';

const YourModal = props => {
    return (
        <div>
            {
                props.show === true ?  (
                    <Modal>
                        <div>
                            <h1>{props.message}</h1>
                            <button name="ok" onClick={() => props.closeFunct(false)} style={buttonStyle} >OK</button>
                        </div>
                    </Modal>
                ) : null
            }
        </div>
    );
}

export default YourModal;
```

### **modal.css**

```css
#modal {
    background-color: rgba(129, 127, 127, 0.5);
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  #modal:empty {
    display: none;
  }
  
  #modal > div {
    background-color: white;
    max-width: 500px;
    padding: 15px;
    border-radius: 5px;
    text-align: center;
  }
```
