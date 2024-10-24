# Header

This will display the Logo, a title for the application, the user name that was set with User Information, and the database type (PROD, TEST, DEV) the application is using, and to logout from the application.  The database type can be hidden from the screen if the user wants.

Props:
1.  ***title*** = the title to display on the header.
2.  ***titleLogo*** = the logo to be displayed on the right hand side of the header.  This needs to be an image file.
3.  ***alertLogo*** = the logo to be displayed when an error message is displayed.  This needs to be an image file.
4.  ***dbDisplay*** = indicates where database for the application is set.  Common values are PROD, TEST, DEV.
5.  ***logout*** = the action to be done when the user presses the Logout link on the right of the screen.
6.  ***login*** = the action to be done when the user presses the Login link on the right of the screen.
7.  ***username*** = the name of the user who is using the application.
8.  ***setUsername*** = the name of the function that will set the user if header should change the name of the user.
9.  ***noModalOnError*** = indicates that when an error occurs, the modal displaying the error will ***not*** appear.  By default the modal is displayed.
10. ***hideUserSection*** = this will hide the user section of the header (Welcome: username).


## CSS Files

## sw-Header.css

### Classes

1. ***sw-header_div*** = sets up how the entire header is to be displayed.

```css
.sw-header_div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.sw-header_div * {
    margin-block-start: 0;
    margin-block-end: 0;
}
```

2. ***sw-header_logo*** = the styling for the logo on the screen

```css
.sw-header_logo {
    height: 4.5em;
    justify-content: center;
}
```

3. ***sw-header_title*** = the color for the title

```css
.sw-header_title {
    color: #1888ff;
}
```

4. ***sw-header_link*** = the styling for the Logout and Login links

```css
.sw-header_link {
    text-align: right;
    font-weight: bold;
    font-size: large;
    text-decoration: none;
}
```

### Example 1

```js
import { Header } from 'simple-widgets';

const App = () => {
    const [username, setUsername] = useState('JJONES');

    return (
        <div>
            <Header title="Your Title"
                    dbDisplay="PROD"
                    titleLogo="Logo.svg"
                    alertLogo="./logo192.png"
                    logoutURL="https://your-auth-server/logout"
                    username={username}
                    setUsername={setUserName} />
        </div>
    );
}
```

The title on the header will be 'Title of the Application'.  The user name on the header will be JJONES.  The database type will be PROD.  If you do not want to display the database type, the prop should be dbDisplay=" " (see below).  The logo on the left hand side of the header will be the image in titleLogo.  If the Logout Link on the right of the header is pressed, the link will go to the logout URL.  If there is an error, the image in the alertLogo will be displayed along with alert message.

### Example 2

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

### Example 3

```js
import { Header } from 'simple-widgets';

const App = () => {
    const [username, setUserName] = useState('JJONES');

    return (
        <div>
            <Header dbDisplay=" " />
        </div>
    );
}
```

