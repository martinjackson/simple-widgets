
# OpenTab React Component

## How To Use:

in your menuItems.js

```js
  import { Home, OpenTab } from 'simple-widgets'

  { title: 'OpenTab', path: '/OpenTab', component: () => <OpenTab url="https://www.google.com" /> },
```

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

```js
      add this CSS to your App.css

      .OpenTab {
          max-width: fit-content;
          margin-left: auto;
          margin-right: auto;
      }
```
