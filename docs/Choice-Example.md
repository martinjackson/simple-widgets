# **Choice**

ChoiceText is simple [React] component that allows the user to select a value from a list of choice via a pulldown behavior.  

### **Props**
The Choice component uses the following props:

1. **name**: A unique name for this field with corresponding name in the parent component's state    
    _example name="subject"_
2. **value**: the state variable that holds the selected value 
    _example value={subject}_
3. **onChange**: function in the parent component to catch/store state changes 
    _example onChange={handleChange}_
4. **choices**: an array of Strings as pull down choices

### **Example**
```javascript
import { Choice } from 'simple-widgets';

const YourComponent = (props) => {

    const [exMode, setExMode] = useState('');
    
    const modes = ["java", "javascript", "jsx", "markdown", "sh"];  

    return (
      <div>
        <Choice 
          choices={modes} 
          name="exMode" 
          value={exMode} 
          onChange={(event) => setExMode(event.target.value)}  />
      </div>
    )
}

export default YourComponent;
```

The choice that was selected by the user will be in the state variable exMode.


### **Versioning and Stability**

We want Choice to be a stable dependency that’s easy to keep current. We take the same approach to versioning as React.js itself: [React Versioning Scheme](https://facebook.github.io/react/blog/2016/02/19/new-versioning-scheme.html).

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
