# ChoiceText

ChoiceText is simple [React] component that allows the user to select a value from a list of choice via a pulldown behavior.  If the list is a long list, the user can start typing the value they want and the pull down list will start to match what the user is typing.  Also, this will allow the user to add new text to the pull down.

### Props
The ChoiceText component uses the following props:

1.  **name**: A unique name for this field with corresponding name in the parent component's state    
    _example name="subject"_
2.  **value**: the state variable that holds the selected value 
    _example value={subject}_
3.  **onChange**: function in the parent component to catch/store state changes 
    _example onChange={handleChange}_
4.  **choices**: an array of Strings as pull down choices
5.  **list**: any name the user wants.  This is used to associate the list of values to the ChoiceText box.
    _example: list="listItems"_

### Example
```javascript
import { ChoiceText } from 'simple-widgets';

const YourComponent = (props) => {

    const [exMode, setExMode] = useState('');
    
    const modes = ["java", "javascript", "jsx", "markdown", "sh"];  

    return (
      <div>
        <ChoiceText 
          choices={modes} 
          name="exMode" 
          value={exMode} 
          onChange={(event) => setExMode(event.target.value)}
          list="listModes"  />
      </div>
    )
}

export default YourComponent;
```

The choice that was selected by the user will be in the state variable exMode.  If the user should start typing a j, then only java, javascript, and jsx would show up for selection.  If the user wants to add a new item, just type the new item in the box and that will become the value of the state variable.


