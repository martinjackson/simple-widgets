# MenuBar

This will build a horizontal or vertical menu below the header on the screen.  Each of the menu items can have a sub-menu and each of the sub-menus can have a sub-menu (this is discouraged in vertical menus).  You can easily add a down arrow on the horizontal menu to indicate there is a drop down of submenus.  On each of the submenu entries that have a submenu a right arrow or ellipsis can be added to the name.

Props:

1.  ***menuTree*** = contains the tree structure of the menu as an array.  An example of the menuTree:
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

The title field is the title that will be displayed on the menu.  The path is the URL path.  The component is the component that will be displayed when the mouse selects that menu item.  The submenu array allows items underneath or to the right of that menu item.  If there is a submenu array, there should not be a path or component for that title.  The last entry in the array does not have a title; therefore, the path and component are added to the Route, but not to the menu.  For vertical menus, it is strongly discouraged from having nested submenus.

    In the above example, the following would be how the horizontal menu would be layed out:
        Save    Save As     Open            Exit
                                Internet
                                    http
                                    https
                                File

    In the above example, the following would be how the vertical menu would be layed out:

    Save
    Save As
    Open        Internet    http
                            https
                File
    Exit

2. ***type*** = indicates the type of menu, either horizontal or vertical.  The two possible values are:
    - horizontal = indicates a horizontal menu.  This is the default; therefore, if this prop is missing, it will default to horizontal.
    - vertical = indicates a vertical menu.  All submenus will appear to the right of the menu.

    If type is given an invalid value, it will default to horizontal.

3. ***open*** = indicates how the menu is to open.  The two possible values are:
    - always = indicates the menu will be displayed.  This is the default.
    - slide = indicates that a menu symbol will be displayed, and when the mouse is placed over the menu symbol, it will expand to the right.

    If open is given an invalid value, it will default to always.

4.  ***format*** = indicates whether the value is fixed, which means the menu will not move, or float which means that the menu will scroll.  The two possible values are float (default) or fixed.

5.  ***headerfixed*** = indicates that the Header component ([Header](docs/Header.md)) is also fixed and does not move when scrolling.

6.  ***noheader*** = indicates that there is no Header component.

7.  ***path*** = if a certain screen is specified in the url (the path in the menutree), it will automatically take you to that screen when the application is launched.  The path that is on the URL must match a path name in the menutree; otherwise it will default to the first screen.  The path should only contain the path name.

8. ***subsymbol*** = indicates whether a down arrow should be placed next to the title that has submenus.  The two possible values are:
    - arrow = place a down arrow next to the title.
    - a unicode symbol in the form of &#xUNICODE_HEXNUM;
    - none = no symbol will be placed next to the title.  This is the default.

9. ***symbol*** = indicates whether a right arrow or ellipsis should be placed next to the title to indicate that the submenu has a menu.  The three possible values are:
    - arrow = place a right arrow next to the title.
    - dots = place an ellipsis next to the title.
    - a unicode symbol in the form of &#xUNICODE_HEXNUM;
    - none = no symbol will be placed next to the title.  This is the default.

10. ***page*** = places a page symbol to the left of the menu item.

11. ***noSide*** = indicates that the selected menu item should be placed underneath the vertical menu instead of beside it.  This option only works with vertical menus.  If this option does not exist, it will place the menu item selected beside the vertical menu.


### Format Prop

The format prop will allow the menu and header to be fixed (the menu and header will not scroll) or to be float (the menu and header will scroll).  The only option that is guaranteed to work is the menu as float.

The following must be done in order to fix the header or the menu (in all the examples listed below it will work for both horizontal or vertical):

1.  ***header is float and menu is float***
        Both the header and menu will scroll of the screen.
        nothing needs to be done
        ***Example***
        ```javascript
            <div>
              <Header username={user} setUsername={setUser} 
                      title="This is a test" dbType="Test" 
                      titleLogo="Logo.svg" />
              <MenuBar menuTree={mtree} type="vertical" open="always"  />
            </div>
        ```


2.  ***header is fixed and menu is fixed***
        The header and the menu will not scroll off the screen.
        MenuBar must have format="fixed".
        ***Example***
        ```javascript
        <div>
            <Header username={user} setUsername={setUser} 
                    title="This is a test" dbType="Test" 
                    titleLogo="Logo.svg" />
            <MenuBar menuTree={mtree} type="horizontal" open="always" format="fixed" />
        </div>
        ```

3.  ***no header and the menu is float***
        There is no header at all and the menu will scroll off the screen.
        MenuBar must have format="float"
        ***Example***
        ```javascript
        <div>
            <MenuBar menuTree={mtree} type="horizontal" open="always" format="float" />
        </div>
        ```
4.  ***no header and the menu is fixed***
        There is no header and the menu will not scroll off the screen.
        MenuBar must have format="float"
        ***Example***
        ```javascript
        <div>
            <MenuBar menuTree={mtree} type="horizontal" open="always" format="fixed" />
        </div>
        ```


## CSS Files

### NavBar.css

The sw-NavBar.css and sw-DropDown.css files are used by the MenuBar component in the library.  The modal.css is use by the Header component in the library.

The sw-NavBar.css controls the main horizontal or vertical bar across the top of the screen.  The only items that should be changed are the colors and the box shadow, along with the following CSS variables for vertical menus:

1. --sw-menu_width: the width of the menu and submenus.
2. --sw-menu_height: the height of the main menu.
3. --sw-menu_vertical_margin_left: the left margin spacing where the next vertical submenu begins.  This needs to be less than the menu_width.
4. --sw-menu_horizontal_margin_left: the left margin spacing where the next submenu is next to the current menu.  This should be the same as the menu_width.
5. --sw-margin_top: the margin at the top of the main menu.
6. --sw-menu_vertical_pad_top: the amount of padding at the top of the vertical main menu, so that it is below the three menu bars.
7. --sw-menu_vertical_pad_top_always: the amount of padding at the top of the main menu.  This is used if the open type is always.
8. --sw-menu_vertical_pad_left: the padding for the text on the left of vertical menu.
9. --sw-menu_horizontal_pad_left: the amount of padding at the left of the horizontal main menu, so that it is right of the three menu bars.
10. --sw-horiz_menu_width: the width of the horizontal menu.
11. --sw-horizontal_width: the initial horizontal width for the open slide option.
12. --sw-slide_time: the time it takes to do the animation for sliding of the menu.
13. --sw-menu_additional: used to add extra spacing so that the page will clear the vertical menu.

**CSS Classes needed to make the format to work:**

1.  ***nav-menu_horiz_22*** = this is for horizontal menus.  This indicates that the position is absolute and top is 22% (combination of the header (12%) and the menu (10%)).  This is need in the horizontal menus, ***except*** for:
        - header is float and menu is float
        - no header and menu is float

2.  **nav-menu_horiz_10** = this is for horizontal menus without a header.  This indicates that the position is absolute and top is 10% (menu is 10%)).  This is need in the horizontal menus, for no header with a menu of fixed.

3.  **nav-menu_vert_250_12** = this is for vertical menus.  This indicates that the position is absolute, left is 16em (250px) (for the vertical menu), and top is 12% (for the header (12%)).  This is need in the verical menus, ***except*** for:
        - header is float and menu is float
        - no header and menu is float

4.  **nav-menu_vert_250_0** = this is for vertical menus without a header.  This indicates that the position is absolute, left is left is 16em (250px) (for the vertical menu) and top is 0% (since there is no header)).  This is need in the horizontal menus, for no header with a menu of fixed. 

Other styling features may also be added.

### DropDown.css

The DropDown.css controls the drop down (horizontal) on the MenuBar component.  The only items that should be changed are the following:

1.  In the dropdown-menu class, the z-index may need to be changed if it is blocked by other css classes.
2.  The widths in the dropdown-menu classes.
3.  The colors, the box-shadow, and pointer types.  

The css files can be modified to change colors or styling.  Other styling features may also be added.

### Example 1

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

Since there is no type or open the menu will be a horizontal menu that is always open.

### Example 2

```js
import { MenuBar } from 'simple-widgets';

const App = () => {
    let menuTree = menuTree from above;

    return (
        <div>
            <MenuBar menuTree={menuTree} open="slide">
        </div>
    );
}

```

There is no type, but there is an open; therefore, the menu symbol will appear and when the mouse is placed on it, it open the horizontal menu from left to right.


### Example 3

```js
import { MenuBar } from 'simple-widgets';

const App = () => {
    let menuTree = menuTree from above;

    return (
        <div>
            <MenuBar menuTree={menuTree} type="vertical" >
        </div>
    );
}

```

This is a vertical menu, that will automatically be opened, since there is no open.

### Example 4

```js
import { MenuBar } from 'simple-widgets';

const App = () => {
    let menuTree = menuTree from above;

    return (
        <div>
            <MenuBar menuTree={menuTree} type="vertical" open="slide" >
        </div>
    );
}

```

This is a vertical menu, that will display a vertical bar with the menu symbol in it.  When the mouse is placed on the menu symbol, it will open the vertical menu to the right.  Any submenus will appear to the right of the menu.


If open="always", the vertical menu will appear with no menu symbol.

### Example 5

```js
import { MenuBar } from 'simple-widgets';

const App = () => {
    let menuTree = menuTree from above;
    const url = new URL(window.location.href);
    
    return (
        <div>
            <MenuBar menuTree={menuTree} path={url.pathname} >
        </div>
    );
}

```


### All the possible type and open options

```js
    <MenuBar menuTree={menuTree} type="vertical" open="slide" >         Vertical menu that slides
    <MenuBar menuTree={menuTree} type="vertical" open="always" >        Vertical menu always open
    <MenuBar menuTree={menuTree} type="horizontal" open="slide" >       Horizontal menu that slides
    <MenuBar menuTree={menuTree} type="horizontal" open="always" >      Horizontal menu always open
    <MenuBar menuTree={menuTree} open="slide" >                         Horizontal menu that slides
    <MenuBar menuTree={menuTree} open="always" >                        Horizontal menu always open
    <MenuBar menuTree={menuTree} >                                      Horizontal menu always open

```

6.  ### Example 6
```js
import { MenuBar, Header } from 'simple-widgets';

const App = () => {
    return (
        <div>
            <Header username={user} setUsername={setUser} 
                    title="This is a test" dbType="Test" 
                    titleLogo="Logo.svg" />
            <MenuBar menuTree={menuTree} type="horizontal" format="fixed" >
        </div>
    );
}
```

There is a header that is fixed and a vertical menu that is fixed.  


7.  ### Example 7
```js
import { MenuBar, Header } from 'simple-widgets';

const App = () => {
    return (
        <div>
            <Header username={user} setUsername={setUser} 
                    title="This is a test" dbType="Test" 
                    titleLogo="Logo.svg" />
            <MenuBar menuTree={menuTree} type="vertical" format="fixed" >
        </div>
    );
}
```

There is a header that is fixed and a vertical menu that is fixed.  

8.  ### Example 8
```js
import { MenuBar } from 'simple-widgets';

const App = () => {
   
    return (
        <div>
            <MenuBar menuTree={menuTree} type="horizontal" format="fixed" >
        </div>
    );
}
```

There is no header and a horizontal menu that is fixed.

9.  ### Example 9
```js
import { MenuBar } from 'simple-widgets';

const App = () => {
    return (
        <div>
            <MenuBar menuTree={menuTree} type="vertical" format="fixed" noheader >
        </div>
    );
}
```

There is no header and a vertical menu that is fixed.

