# MenuBar

This will build a horizontal menu below the header on the screen.  Each of the menu items can have a sub-menu and each of the sub-menus can have a menu.  You can easily add a down arrow on the horizontal menu to indicate there is a drop down of submenus.  On each of the submenu entries that has a submenu a right arrow or ellipsis can be added to the name.

Props:

1.  menuTree = contains the tree structure of the menu as an array.  An example of the menuTree:
```js
    const menuTree = [
        { title: 'Save', path: '/save', component: () => <Save></Save> },
        { title: 'Save As', path: '/saveas', component: () => <SaveAs></SaveAs> },
        { title: 'Open',
            submenu: [
                { title: 'Internet',
                    submenu: [
                        { title: 'http', path: '/insecure', component: () => <Http></Http> },
                        { title: 'https', path: '/secure', component: () => <Https></Https> },
                    ]
                },
                { title: 'File', path: '/file', component: () => <File></File> }
            ]
        }
        { title: 'Exit', path: '/exit', component: () => <Exit></Exit> },
        { path: '/test', component: () => <Test></Test>}
    ]
```

The title field is the title that will be displayed on the menu.  The path is the URL path.  The component is the component that will be displayed when the mouse selects that menu item.  The submenu array allows items underneath that menu item.  If there is a submenu array, there should not be a path or component for that title.  The last entry in the array does not have a title; therefore, the path and component are added to the Route, but not to the menu.

    In the above example, the following would be how the menu would be layed out:
        Save    Save As     Open            Exit
                                Internet
                                    http
                                    https
                                File


2. subsymbol = indicates whether a down arrow should be placed next to the title.  The two possible values are:
    a. arrow = place a down arrow next to the title.
    b. a unicode symbol in the form of &#xUNICODE_HEXNUM;
    c. none = no symbol will be placed next to the title.  This is the default.

3. symbol = indicates whether a right arrow or ellipsis should be placed next to the title to indicate that the submenu has a menu.  The three possible values are:
    a. arrow = place a right arrow next to the title.
    b. dots = place an ellipsis next to the title.
    c. a unicode symbol in the form of &#xUNICODE_HEXNUM;
    d. none = no symbol will be placed next to the title.  This is the default.


The title field is the title that will be displayed on the menu.  The path is the URL path.  The component is the component that will be displayed when the mouse selects that menu item.  The submenu array allows items underneath that menu item.  If there is a submenu array, there should not be a path or component for that title.  The last entry in the array does not have a title; therefore, the path and component are added to the Route, but not to the menu.

    In the above example, the following would be how the menu would be layed out:
        Save    Save As     Open            Exit
                                Internet
                                    http
                                    https
                                File

## CSS Files

The following CSS files will need to be imported into the file that uses the MenuBar component.  The import would be, if it is not be changed:

```javascript
import '../node_modules/simple-widgets/lib/sw-NavBar.css';
import '../node_modules/simple-widgets/lib/sw-DropDown.css';
```

For more information on CSS files, see [Using CSS](./UsingCSS.md).


### NavBar.css

The NavBar.css and DropDown.css files are used by the MenuBar component in the library.  The modal.css is use by the Header component in the library.

The NavBar.css controls the main vertical bar across the top of the screen.  The only items that should be changed are the colors and the box shadow.

Other styling features may also be added.

### DropDown.css

The DropDown.css controls the drop down (horizontal) on the MenuBar component.  The only items that should be changed are the following:

1.  In the dropdown-menu class, the z-index may need to be changed if it is blocked by other css classes.
2.  The widths in the dropdown-menu classes.
3.  The colors, the box-shadow, and pointer types.  

The css files can be modified to change colors or styling.  Other styling features may also be added.

### Example

```js
import { MenuBar } from 'simple-widgets';

const App = () => {
    let menuTree = menuTree from above;

    return (
        <div>
            <MenuBar menuTree={menuTree}>
        </div>
    );
}

```

