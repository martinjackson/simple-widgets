
# OpenTab

This will allow the transfer to URL when a menu item is selected.  The user can pass parameters through the URL also.  Any URL can be transfered to, even another application, such as reports (runs as a seperate SPA).

## Props

1.  ***url*** = the url and the parameters of where to transfer when the menu button is selected.
2.  ***target*** = specifies where to open the linked document.  The values can be one of the following:
      a. ***_blank*** = opens the linked document in a new window or tab  (this is default).
      b. ***_self*** = opens the linked document in the same frame as it was clicked
      c. ***_parent*** = opens the linked document in the parent frame
      d. ***_top*** = opens the linked document in the full body of the window.
      e. ***framename*** = opens the linked document in the named iframe

## Examples:

### Example 1

In your menuItems.js

```js
  import { OpenTab } from 'simple-widgets'

  { title: 'Google', path: '/google', component: () => <OpenTab url="https://www.google.com" /> },
```

The menu item will be displayed as Google and the path for the component will be /google.  The component for the menu item will be the OpenTab component with the url opening up to Google (since that is the url).  Google will open in a new window or tab.

### Example 2

In your menuItems.js

```js
  import { OpenTab } from 'simple-widgets'

  { title: 'Project Report', path: '/projectrep', component: () => <OpenTab url="https://box64.test.com:3232?projectnum=0214&fiscalyear=2001" target="_parent"/> },
```

In this example, the menu item will be displayed as Project Report and the path for the component will be /projectrep.  The component for the menu item will be the OpenTab component.  The url is calling the application on box64.  The parameters being sent are the project number and the fiscal year.  This opens in the parent frame.

### How add CSS

This component displays the message " If a new browser tab does not open, then click <ins>here</ins>. "

you can pass in the style as a prop

```js
      const openTabStyle = {
        maxWidth: 'fit-content',
        marginLeft: 'auto',
        marginRight: 'auto'
      }

      <OpenTab url="https://www.google.com" style={openTabStyle} />
```

OR you can style all uses of OpenTab

Add this CSS to your App.css

```css

      .OpenTab {
          max-width: fit-content;
          margin-left: auto;
          margin-right: auto;
      }
```
