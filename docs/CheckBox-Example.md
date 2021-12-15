# **CheckBox**

CheckBox is a simple [React] component that acts like a check box button behavior, but allows a value to be placed in a state variable.


### **Browser Support**

We support all browsers and environments where React runs.

### **Props**
The CheckBox component uses the following props:

1. **name**: A unique name for this field with corresponding name in the parent component's state    
    _example name="subject"_
2. **value**: the value of the checkbox if checked  
    _example value="checked"
3. **onChange**: function in the parent component to catch/store state changes 
    _example onChange={handleChange}_
5. **match**: the state variable the holds the 'value' (see 2) that was selected
6. **text**: a label (String or component) that is displayed after the CheckBox

## CSS File

The following CSS file will need to be imported into the file that uses this CheckBox component.  The import would be, if it is not be changed:

```javascript
import '../node_modules/simple-widgets/lib/checkboxRadio.css';
```

For more information on CSS files, see [Using CSS](./UsingCSS.md).


## checkboxRadio.css

***sw-checkbox_defaultStyle*** = the styling for the checkbox.

```css
.sw-checkbox_defaultStyle {
    background-color: Transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    color: inherit;            /* dont default to color: buttontext, wont match the current theme */
}
```

### **Example**
```javascript
import { CheckBox } from 'simple-widgets';

import '../node_modules/simple-widgets/lib/checkboxRadio.css';


const YourComponent = (props) => {

  const [preview, setPreview] = useState('');

  return  (
    <div>
              <CheckBox value="Preview" 
                        name="preview" 
                        text="Preview" 
                        match={preview} 
                        onChange={(event) => setPreview(event.target.value)} />
    </div>
  )
}

export default YourComponent;
```

The value Preview will be placed in the state variable when the check box with the label Preview is checked and blank when unchecked.


### **Versioning and Stability**

We want CheckBox to be a stable dependency that’s easy to keep current. We take the same approach to versioning as React.js itself: [React Versioning Scheme](https://facebook.github.io/react/blog/2016/02/19/new-versioning-scheme.html).

### **Thanks**

To CPC project team where this was developed.

[React]: https://facebook.github.io/react
[build-badge]: https://img.shields.io/travis/ReactTraining/react-router/master.svg?style=flat-square
[build]: https://travis-ci.org/ReactTraining/react-router

[npm-badge]: https://img.shields.io/npm/v/react-router.svg?style=flat-square
[npm]: https://www.npmjs.org/package/react-router

[codecov-badge]: https://img.shields.io/codecov/c/github/ReactTraining/react-router/master.svg?style=flat-square
[codecov]: https://codecov.io/gh/ReactTraining/react-router

[discord-badge]: https://img.shields.io/badge/Discord-join%20chat%20%E2%86%92-738bd7.svg?style=flat-square
[discord]: https://discord.gg/0ZcbPKXt5bYaNQ46
