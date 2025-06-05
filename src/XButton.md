# **X Button**

This will place an X button in the upper right hand corner that when clicked will close the modal.  A line will also be placed under the X button, unless it is not desired.  This can only be used on a modal.  The modal can also provide another way to close the modal.

## **Props**

1. **closeFunct** = a function that will set the show variable back to false to close the modal.  This is a required prop.
3. **nounder** = this will not display the underline underneath the X button.  The default is to display the line.


## CSS File

The following CSS file will need to be imported into your code that uses this X button.  This so you can style the X button, any way you desire.  The import would be, if it is not be changed:

```javascript
import '../node_modules/simple-widgets/lib/sw-theme.css';
import '../node_modules/simple-widgets/lib/sw-modal.css';
```

For more information on CSS files, see [Using CSS](./UsingCSS.md).


## sw-modal.css

The CSS class to style the button:

***sw-modal_xbuttonStyle*** = the style used for the X button.

```css
.sw-modal_xbuttonStyle {
    color: darkgray;
    font: "san-serif";
    font-weight: var(--sw-theme_buttonFontWeight);
    font-size: 16pt;
    background-color: inherit;
    border: 1px solid lightgray;
}
```

***sw-modal_divButton*** = places the X button on the right.

```css
.sw-modal_divButton {
    text-align: right
}
```

## **Example**
The following is a code example:

```javascript
    import { Modal, XButton } from 'simple-widgets';
    ...
        <div>
            {(props.show === true) ?
                <Modal>
                    <div style={divStyle}>
                        <XButton closeFunct={closeButton} />
                        ... body of the modal ...
                        <button name="close" onClick={closeButton} className={genButtonStyle}>Close</button>
                    </div>
                </Modal> : null
            }
        </div>
    )
```

This will place the X button in the upper right corner of the modal, with a line underneath the X button.

If the line underneath the X button is not wanted, the X button will be:

```javascript
    <XButton closeFunct={closeButton} nounder />
```

## **Index.html**
In the index.html add the following line in the body:
```html
    <div id="sw-modal"></div>
```
