# List

List is simple [React] component that allows the user to select a value from a list of values in a box.  

### Props
The List component uses the following props:

1.  **name**: A unique name for this field with corresponding name in the parent component's state    
    _example name="subject"_
2.  **value**: the state variable that holds the selected value 
    _example value={subject}_
3.  **onChange**: function in the parent component to catch/store state changes 
    _example onChange={handleChange}_
4.  **list**: an array of Strings displayed in the list box
5.  **multiple**: allows multiple items in the list box to be selected.
6.  **size**: the size of the list box (number of items to display, after that the user must scroll to see the rest of the items).  Default size is 10.

### Example
```javascript
import { List } from 'simple-widgets';

const YourComponent = (props) => {

    const [exMode, setExMode] = useState([]);
    
    const modes = ["java", "javascript", "jsx", "markdown", "sh"];  

    return (
      <div>
        <List 
          list={modes} 
          name="exMode" 
          value={exMode} 
          onChange={(event) => setExMode(event.target.value)}
          multiple
          size="4"  />
      </div>
    )
}

export default YourComponent;
```

The list size will be a box of 4; therefore, only 4 items will be displayed in the box.  To see the fifth item, the user must scroll down.

The choice(s) that was selected by the user will be in the state variable exMode as an array in case there are multiple selections.


