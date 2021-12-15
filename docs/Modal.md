# **Modal**

Modal allows a user to create their own modal (popup).  The modal will appear in the middle of the screen, with the background lightly grayed out.

### **Props**
This modal takes three props:

1.  **show**: boolean value indicating whether to show the modal (true) or not (false)
2.  **message**: the message to display in the modal
3.  **closeFunct**: used to close the modal when the user presses the OK button

## CSS File

The following CSS file will need to be imported into the file that uses this modal component.  The import would be, if it is not be changed:

```javascript
import '../node_modules/simple-widgets/lib/modal.css';
```

For more information on CSS files, see [Using CSS](./UsingCSS.md).


## modal.css

The CSS class to style the button:

***sw-modal_buttonStyle*** = the style used for the OK button.

.sw-modal_buttonStyle {
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

### **Example**
An example of a Modal:

```javascript
import React from 'react';

import { Modal }  from 'simple-widgets';
import '../node_modules/simple-widgets/lib/modal.css';

const YourModal = props => {
    return (
        <div>
            {
                props.show === true ?  (
                    <Modal>
                        <div>
                            <h1>{props.message}</h1>
                            <button name="ok" onClick={() => props.closeFunct(false)} className="modal_buttonStyle"} >OK</button>
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
#sw-modal {
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
  
#sw-modal:empty {
    display: none;
}
  
#sw-modal > div {
    background-color: white;
    max-width: 500px;
    padding: 15px;
    border-radius: 5px;
    text-align: center;
}

.sw-modal_marginStyle {
    margin-bottom: 10px;
}

.sw-modal_abuttonStyle, .sw-modal_ebuttonStyle, .sw-modal_cbuttonStyle, .sw-modal_buttonStyle {
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

## **Index.html**
In the index.html add the following line in the body:
```html
    <div id="sw-modal"></div>
```