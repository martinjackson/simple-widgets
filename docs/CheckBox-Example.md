# **CheckBox**

CheckBox is a simple [React] component that acts like a check box button behavior, but allows a value to be placed in a state variable.


### **Browser Support**

We support all browsers and environments where React runs.

### **Props**
The CheckBox component uses the following props:

1. **name**: A unique name for this field with corresponding name in the parent component's state
    _example name="subject"_
2. **value**: the value of the checkbox (the state variable that holds the value)
    _example value={subject}
3. **onChange**: function in the parent component to catch/store state changes
    _example onChange={handleChange}_
5. **selectedValue**: the value of state variable when the CheckBox is checked
6. **text**: a label (String or component) that is displayed after the CheckBox
7. **checkedsymbol**: the symbol you want when the checkbox is checked.  Possible values are:
    - **normal** = a normal check mark shows up inside tghe box.  This is the default.  Unicode: 9745.
    - **blue** = a white check mark with a blue background.  Unicode: 9745 and 65039.
    - **green** = a white check mark with a green background.  Unicode: 9989.
    - **cross** = a X will appear in the box.  Unicode: 9746.
    - **greenx** = a white X with a green background.  Unicode: 10062.
    - **redx** = a red X with no box around it.  Unicode: 10060.
8. **unichar**: the user can provide there own unicode character in decimal.  For example unichar="8855" is a X inside of a circle.  The unichar will supercede the checkedsymbol.  Therefore, if you have a unichar prop and a checkedsymbol prop, the unichar will be used and not the checkedsymbol.  Not all the unicode characters will work.

## CSS File

The following CSS file will need to be imported into the file that uses this CheckBox component.  The import would be, if it is not be changed:

```javascript
import '../node_modules/simple-widgets/lib/sw-checkboxRadio.css';
```

For more information on CSS files, see [Using CSS](./UsingCSS.md).


## sw-checkboxRadio.css

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

### **Example 1**
```javascript
import { CheckBox } from 'simple-widgets';


const YourComponent = (props) => {

  const [preview, setPreview] = useState('');

  return  (
    <div>
              <CheckBox value={preview}
                        name="preview"
                        text="Preview"
                        selectedValue="Preview"
                        onChange={(event) => setPreview(event.target.value)} />
    </div>
  )
}

export default YourComponent;
```

The value Preview will be placed in the state variable when the check box with the label Preview is checked and blank when unchecked.


### **Example 2**
```javascript
import { CheckBox } from 'simple-widgets';


const YourComponent = (props) => {

  const [preview, setPreview] = useState('');

  return  (
    <div>
              <CheckBox value={preview}
                        name="preview"
                        text="Preview"
                        selectedValue="Preview"
                        checkedsymbol="blue"
                        onChange={(event) => setPreview(event.target.value)} />
    </div>
  )
}

export default YourComponent;
```

The value Preview will be placed in the state variable when the check box with the label Preview is checked and blank when unchecked.  The checked box will be a white checkbox with a blue background.


### **Example 3**
```javascript
import { CheckBox } from 'simple-widgets';


const YourComponent = (props) => {

  const [preview, setPreview] = useState('');

  return  (
    <div>
              <CheckBox value={preview}
                        name="preview"
                        text="Preview"
                        selectedValue="Preview"
                        unichar="8855"
                        onChange={(event) => setPreview(event.target.value)} />
    </div>
  )
}

export default YourComponent;
```

The value Preview will be placed in the state variable when the check box with the label Preview is checked and blank when unchecked.  The checked box will be what is defined in the unichar.  The character that will be displayed is an X with a circle around it.

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
