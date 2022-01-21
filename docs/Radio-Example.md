# **Radio**

Radio is a simple [React] component that acts like a radio button behavior, but allows a value to be placed in a state variable.

### **Browser Support**

We support all browsers and environments where React runs.

### **Props**
The Radio component uses the following props:

1. **name**: A unique name for this field with corresponding name in the parent component's state    
    _example name="subject"_
2. **value**: the value of the checkbox if checked  
    _example value="checked"
3. **onChange**: function in the parent component to catch/store state changes 
    _example onChange={handleChange}_
5. **match**: the state variable the holds the 'value' (see 2) that was selected
6. **text**: a label (String or component) that is displayed after the CheckBox

If there are several radio buttons and it is desired that they operate as a group (only one radio button can be selected), the name and match props for all radio buttons must have the same value.

## CSS Files

The following CSS file will need to be imported into the file that uses this Radio component.  The import would be, if it is not be changed:

```javascript
import '../node_modules/simple-widgets/lib/sw-checkboxRadio.css';
```

For more information on CSS files, see [Using CSS](./UsingCSS.md).


## sw-checkboxRadio.css

***sw-radio_defaultStyle*** = the styling for the radio button.

```css
.sw-radio_defaultStyle {
      border: none;
      background-color: white;
      border-radius: 25px;
}
```

### **Example**
```javascript
import { Radio } from 'simple-widgets';

const YourComponent = (props) => {
   const [year, setYear] = useState('');

   return (
      <div>
        <Radio  selectedValue="1" 
                name="year" 
                value={year} 
                onChange={(event) => setYear(event.target.value)}>Year 1</Radio>
        <Radio  selectedValue="2" 
                name="year" 
                value={year} 
                onChange={(event) => setYear(event.target.value)}>Year 2</Radio>
     </div>
   )
}
```

Since the two radio buttons use the same names in the name prop and the match prop, they will be treated as a group.  If the user clicks on the first radio button, a 1 will be placed in the state variable year.  If the user clicks on the second radio button, a 2 will be placed in the state variable year.

### **Versioning and Stability**

We want Radio to be a stable dependency that’s easy to keep current. We take the same approach to versioning as React.js itself: [React Versioning Scheme](https://facebook.github.io/react/blog/2016/02/19/new-versioning-scheme.html).

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
