# **CheckBoxGroup**

CheckBoxGroup is a [React] component that places a group of checkboxes all under one name and will return the name of the group and all the values selected for that group of checkboxes.  The values of the checkboxes will be whatever is on the name of the 
checkbox.

### **Props**
The CheckBoxGroup component uses the following props:

1. **choices**: this a set (array) of names for each checkbox in the group.
2. **name**: the name of the checkbox group.
3. **values**: this is set (array) of initial values for each checkbox.  This is if you want to have some of the checkboxes initally set.  You should make the value the same as the text for the checkbox.  This is not a required prop.
4. **onChange**: a function that is called when one of the checkboxes changes.  The function will return an event.  The 
event.target.name will contain the name of the checkbox group.  The event.target.value will be an array the size of the choices array the will contain the value of each of each checkbox in the order they appear in the choices array.  If the checkbox is selected it will contain the name given to the checkbox.
5. **className**: the CSS to be applied to the checkbox group

### **Example 1**
```javascript
import { CheckBoxGroup } from 'simple-widgets';

    let groupChoices = ['Red', 'Green', 'Blue', 'Yellow', 'Brown', 'White', 'Black'];
    let groupValues = ['', '', '', 'Yellow', '', '', ''];

    const groupChange = (event) => {
        console.log ('name :', event.target.name);
        console.log ('values :', event.target.value);
    }

    return (
        <CheckBoxGroup choices={groupChoices} name="colors" values={groupValues} onChange={groupChange} />
    )
```

In the above example, the name of the CheckBoxGroup is colors.  Since both choices and values are given they should be the same size arrays.  When the CheckBoxGroup is rendered, the Yellow checkbox will be checked.  If user checks the color Blue, the onChange event groupChange function will be called and it will print

    name : colors
    values: ,,'Blue','Yellow',,,

The values in the above output is a string.

### **Example 2**
```javascript
import { CheckBoxGroup } from 'simple-widgets';

    let groupChoices = ['Red', 'Green', 'Blue', 'Yellow', 'Brown', 'White', 'Black'];

    const groupChange = (event) => {
        console.log ('name :', event.target.name);
        console.log ('values :', event.target.value);
    }

    return (
        <CheckBoxGroup choices={groupChoices} name="colors" onChange={groupChange} />
    )
```

In the above example, the name of the CheckBoxGroup is colors.  When the CheckBoxGroup is rendered, all checkboxes will be unchecked since there is no values array.  If user checks the color Blue, the onChange event groupChange function will be called and it will print

    name : colors
    values: ,,'Blue',,,,

The values in the above output is a string.
