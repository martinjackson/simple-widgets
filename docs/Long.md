# appclient

[Back to the README file](./README.md)

The following are in appClient:
1.  User Information
2.  Header
3.  Browser Detect
4.  Forms
5.  PDF
6.  Menu
7.  Status Box (area on main page for errors)
8.  Date Utilities

# Header

This will display the Application's Logo, a title for the application, the user name that was set with User Information, and the database type (PROD, TEST, DEV) the application is using, and to logout from the application.  The database type can be hidden from the screen if the user wants.

Props:
1.  title = the title to display on the header.
2.  titleLogo = the logo to be displayed on the right hand side of the header.  This needs to be an image file.
3.  alertLogo = the logo to be displayed when an error message is displayed.  This needs to be an image file.
4.  dbType = indicates where database for the application is set.  Common values are PROD, TEST, DEV.
5.  logout = the action to be done when the user presses the Logout link on the right of the screen.

All of the above values are optional.  If they are left off, it will use the values in the environment file.  An example .env file will be:

```
defaultUser=JSMITH
title=Title of Application
titleLogo=logo.png
alertLogo=./logo192.png
DB_TYPE=DEV
logoutURL=`https://nlaunch.fda.gov/logout`
```

The above environment file only has the values for the headers and might contain other values.

### Example

```js
import { Header } from 'simple-widgets';

const App = () => {

    return (
        <div>
            <Header title={process.env.title}
                    dbType={process.env.DB_TYPE}
                    titleLogo={process.env.titleLogo}
                    alertLogo={process.env.alertLogo}
                    logoutURL={process.env.logoutURL} />
        </div>
    );
}
```

The title on the header will be 'Title of the Application'.  The user name on the header will be JJONES.  The database type will be PROD.  If you do not want to display the database type, the prop should be dbType=" " (see below).  The logo on the left hand side of the header will be the image in titleLogo.  If the Logout Link on the right of the header is pressed, the link will go to the logout URL.  If there is an error, the image in the alertLogo will be displayed along with alert message.

### Second Example

```js
import { Header } from 'simple-widgets';

const App = () => {

    return (
        <div>
            <Header />
        </div>
    );
}
```

The above example has not props, so it will use the values in the .env file.  If a prop is supplied like in the first example, it will use that prop instead of the environment variable value.

### Third Example

```js
import { Header } from 'simple-widgets';

const App = () => {

    return (
        <div>
            <Header dbType=" " />
        </div>
    );
}
```

In the above example, the header will be displayed without the dbType.  Since the only prop being used is the dbType, all the other values will use the values in the .env file.


# Browser Detect

Use one of the following boolean variables to detect the browser used:
1.  isOpera
2.  isFirefox
3.  isSafari
4.  isIE Internet Explorer 6-11
5.  isEdge
6.  isChrome
7.  isEdgeChromium
8.  isBlink

Only one variable will be true, all others will be false.

### Example

```js
import { isChrome, isEdgeChromium, isIE } from '@nctr/appclient';
...
if (isIE) {
    alert ('DO NOT USE THIS BROWSER ANY MORE.')
} else if (isChrome) {
    console.log ('Browser is Chrome');
} else if (isEdgeChromium) {
    console.log ('Browser is Edge Chromium');
} else {
    console.log ('Browser is not Chrome or Edge Chromium');
}
```

# Forms


# PDF


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

### Setup

1. The css file need to be copied to the public directory.  If you used the template to build your project, the files will already be copied; therefore, you can skip this step.
```js
cd project-directory
cp node_modules/@nctr/appclient/src/NavBar.css public/
cp node_modules/@nctr/appclient/src/DropDown.css public/
```
The css files can be modified to change colors or styling.

2. In your index.html file in the public directory, place the following:
```html
    <link rel="stylesheet" href="NavBar.css" />
    <link rel="stylesheet" href="DropDown.css" />
```
These can be placed after the last link in the file.

### Example

```js
import { Header, getUserInfo, MenuBar } from '@nctr/appclient';

const App = () => {
    let username;
    let menuTree = menuTree from above;

    useEffect(() => {
        username = getUserInfo();
    }, []);

    return (
        <div>
            <Header username={username} title={process.env.title}
                    dbType={process.env.DB_TYPE} />
            <MenuBar menuTree={menuTree}>
        </div>
    );
}

```

# Flat Menu

The Flat Menu is a vertical display of menu items.  The Flat Menu that does ***not*** allow any submenus.  When you click on one of the menu options, it will take you to that link component.

Props:

1.  menuTree = contains the tree structure of the menu as an array.  See the example of the menuTree below.

### Example

```js
    const menuItems = [
        {title: 'Home',       path: '/home',     component: () => <Home />},
        {title: 'Employee',   path: '/employee', component: () => <Employee />},
        {title: 'Vacancy',    path: '/vacancy',  component: () => <TODO msg="Vacancy" />},
        {title: 'Memo',       path: '/memo',     component: () => <TODO msg="Memo" />},
        {title: 'Reports',    path: '/reports',  component: () => <Reports />},
        {title: 'About',      path: '/about',    component: () => <About />},
        {path: '/OrgReport',  component: () => <TODO msg="OrgReport" />},
        {path: '/LabReport',  component: () => <TODO msg="LabReport" />}
    ]

    <FlatMenu menuItems={menuTreeItems} />
```

The title field is the title that will be displayed on the menu.  The path is the URL path.  The component is the component that will be displayed when the mouse selects that menu item.    The last tow entries in the array do not have a titles; therefore, the paths and components are added to the route, but not to the menu.

# Link

This will allow you transfer to another page component and pass parmeters to another page.  ***The Link component will only transfer control if either the Flat Menu or MenuBar is used.***

Props:

1.  to = is the path of the page component to go to.  The path is one that is listed in the menu array in the Flat Menu or MenuBar.

2.  parms = is an object that contains the items to pass to the page component.

### Example
```js
    import { Link } from '@nctr/appclient';

    const menuItems = [
        {title: 'Home',       path: '/home',     component: () => <Home />},
        {title: 'Employee',   path: '/employee', component: () => <Employee />},
        {title: 'Vacancy',    path: '/vacancy',  component: () => <TODO msg="Vacancy" />},
    ];

    return (
        <Link to={menuItems[1].path}>{menuItems[1].title}</Link>
    )
```

This will transfer control to the Employee component.

### Example with parms

```js
    import { Link } from '@nctr/appclient';

    const menuItems = [
        {title: 'Home',       path: '/home',     component: () => <Home />},
        {title: 'Employee',   path: '/employee', component: () => <Employee />},
        {title: 'Vacancy',    path: '/vacancy',  component: () => <TODO msg="Vacancy" />},
    ];

    return (
        <Link to="/employee" parms={{ ssn: 123456789, name: 'Jones' }}>Employee</Link>
    )
```

This will transfer control to the Employee component and pass the ssn and name values to the Employee component.

### Reading Parameters

To read the parameters in the Employee component:

```js
    import { useMenuParms } from '@nctr/appclient';

    const Employee = () => {
        const parms = useMenuParms();   // This must be before the state variables
        ...
    }

    export default Employee;
```

The values will now be in the object parms.  So parms.ssn will contain 1234567689 and parms.name will contain Jones.

# Redirect

This will redirect the page from one page component to another without a link name or link on the page.  Parameters can be passed down to the other page component.  ***The Redirect component will only transfer control if either the Flat Menu or MenuBar is used.***

Props:

1.  to = is the path of the page component to go to.  The path is one that is listed in the menu array in the Flat Menu or MenuBar.

2.  parms = is an object that contains the items to pass to the page component.

### Example
```js
    import { Redirect } from '@nctr/appclient';

    const menuItems = [
        {title: 'Home',       path: '/home',     component: () => <Home />},
        {title: 'Employee',   path: '/employee', component: () => <Employee />},
        {title: 'Vacancy',    path: '/vacancy',  component: () => <TODO msg="Vacancy" />},
        {path: '/company',  component: () => <Company />},
    ];

    return (
        <Redirect to="/company" />
    )
```

This will redirect to the Company component.

### Example with parms

```js
    import { Link } from '@nctr/appclient';

    const menuItems = [
        {title: 'Home',       path: '/home',     component: () => <Home />},
        {title: 'Employee',   path: '/employee', component: () => <Employee />},
        {title: 'Vacancy',    path: '/vacancy',  component: () => <TODO msg="Vacancy" />},
        {path: '/company',  component: () => <Company />},
    ];

    return (
        <Redirect to="/company" parms={{ name: 'ABC Widget', street: "123 Main St" }} />
    )
```

This will transfer control to the Company component and pass the name and street values to the Company component.

### Reading Parameters

To read the parameters in the Company component:

```js
    import { useMenuParms } from '@nctr/appclient';

    const Company = () => {
        const parms = useMenuParms();   // This must be before the state variables
        ...
    }

    export default Company;
```

The values will now be in the object parms.  So parms.name will contain ABC Widget and parms.street will contain 123 Main St..


# Status Box

This is used to display an error on the browser page.

Props:

1.  status = the error object that might be returned from a promise

### Example

```js
import { StatusBox } from '@nctr/appclient';

try {
    ...
} catch (err) {
    <StatusBox status={err} />
}
```

# Date Utilities

1.  localStrToDate = takes a date as a string and converts to a date object.
        target = the date in any format
        returns = the date in target as a date object

    ### Example
```js
    import { localStrToDate } from '@nctr/appclient';
    let recDate = localStrToDate('December 17, 2021 03:24:00');
```

2.  date2Str = converts a date object into a string.
        date = the date as a date object
        pattern = the pattern to convert the date into.
            M = month
            d = day of the month
            yyyy = year
            h = hour
            m = minute
            s = second
        returns the date in the date object as a string

    ### Example
```js
    import { date2str } from '@nctr/appclient';
    let recDate = date2str(new Date(), 'MM/dd/yyyy');
```
    If the date is December 25, 2021, recDate will contain 12/25/2021.

3.  lastOfMonth = returns the last day of the current month in the following array format: [year, month, day]

    ### Example
```js
    import { lastOfMonth } from from '@nctr/appclient';
    let last = lastOfMonth();
```

    If the current date is 12/10/2021, the array that gets returned is [2021, 12, 31]

4.  todayString = return the current date in the mm/dd/yyyy format.

    ### Example
```js
    import { todayString } from from '@nctr/appclient';
    let currentDate = todayString();
```

    The variable currentDate will contain the current date.

[Back to the README file](./README.md)
