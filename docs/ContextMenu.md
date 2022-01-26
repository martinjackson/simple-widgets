# **ContextMenu**

ContextMenu is a [React] component that allows the user to right click on an item and a context menu will appears near the item that was clicked on.  When one of the items in the context menu is selected a function named in the menu array (see below) is executed.  A Cancel menu item will automatically be added at the end of the context menu.  If the user leaves the context menu area, the menu will disappear.

### **Props**
The ContextMenu component uses the following props:

1. **name**: A unique name for this field with corresponding name in the parent component's state
    _example name="subject"_
2. **menu**: this is an array that will describe the items in the context menu and the functions to execute when the item is selected.  The array will contain a list of objects that contain a name and funct field.  The name field will be the name of the menu item and funct will be the function that is called when the name is selected.  An example menu might look like:
    let menuList = [
        { name: 'Edit', funct: () => editMenu(value) },
        { name: 'Save', funct: saveItem }
    ];
    _example menu={menuList}_

3. **show**: a boolean value that indicates whether the context menu should be displayed or not.  If the value is true the context menu is displayed; otherwise, it is not.  This is generally a state variable in the parent.
4. **closeFunct**: is a function that sets a boolean variable false to indicate that the context menu should be closed.  This is generally a state function in the parent.
5. **positionX**: the X coordinate from the top left corner of where the context menu will appear.  The value of can be retrieved from the event.clientX.  The default is 10.
    _example positionX={event.clientX}_
6. **positionY**: the Y coordinate from the top left corner of where the context menu will appear.  The value of can be retrieved from the event.clientY.  The default is 10.
    _example positionY={event.clientY}_
7. **backColor**: the background color of the context menu.  The default is aliceblue.
    _example backColor="cyan"
    _example radius="none"
8. **noCancel**: indicates that the Cancel menu item should not be placed in the context menu.  By default the Cancel menu item is automatically added as the last item in the context menu and will close the context menu without any action.
9. **noLeave**: indicates that when the user leaves the context menu, it will not automatically disappear.  By default when the user leave the context menu area, the context menu will disappear.

## CSS File

The following CSS file will need to be imported into the file that uses this ContextMenu component.  The import would be, if it is not be changed:

```javascript
import '../node_modules/simple-widgets/lib/sw-theme.css';
import '../node_modules/simple-widgets/lib/sw-contextMenuHover.css';
```

For more information on CSS files, see [Using CSS](./UsingCSS.md).

## sw-contextMenuHover.css

The classes in the CSS file are:

1. ***div.sw-cm_contextMenuHov*** = the positioning of the context menu.  The position is relative to the current div.  If another html tag is desired, it should be substituted for this one.  The propeties in the class should not be changed, except for the z-index to make the context menu on top.

```css
div.sw-cm_contextMenuHov {
    position: absolute;
    display: block;
    padding: 10px;
    z-index: 1;
}
```

2. ***span.sw-cm_contextMenuHov:hover*** = the styling of the menu item when the mouse hovers over it.

```css
span.sw-cm_contextMenuHov:hover {
    visibility: visible;
    background-color: lightgray;
}
```

3. ***sw-cm_menuStyle*** = the styling of the overall context menu (width, border, and background color)

```css
.sw-cm_menuStyle {
    width: 15em;
    border: 2px solid black;
    border-radius: 10px;
    background-color: var(--theme_backgroundColor);  /* "#CCCC66", */
}
```

### **Example**
```javascript
import { ContextMenu } from 'simple-widgets';

const YourComponent = (props) => {

    const [menu, setMenu] = useState([]);
    const [showMenu, setShowMenu] = useState(false);
    const [position, setPosition] = useState({ X: 0, Y: 0 });

    function rightClick(event) {
        event.preventDefault();
        let menu = [
        { name: 'Show Message',  funct: messageFunct },
        { name: 'Hello', funct: () => helloFunct('hello there')}
        ]
        console.log('event', event);
        setPosition({ X: event.clientX, Y: event.clientY });
        setMenu(menu);
        setShowMenu(true);
    }

    function messageFunct() {
        console.log ('This is a paragraph');
    }

    function helloFunct(hello) {
        console.log (hello);
    }


    return (
        <div>
            <ContextMenu menu={menu}
                         show={showMenu}
                         closeFunct={setShowMenu}
                         positionX={position.X}
                         positionY={position.Y} />
        </div>
    )
}

export default YourComponent;
```

The context menu will contain Show Message, Hello, and Cancel.  If the user selects Show Message, the 'This is a paragraph' message will be displayed on the console.  If the user selects Hello, the 'hello there' message will be displayed on the console.  If the user selects Cancel, the context menu will disappear.



