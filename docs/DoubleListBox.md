## Double List Box

This will allow the user to move a list of items from the left list to the right list or vice a versa.  Therefore, the double list box has a left list that has items in it initially and a right list that is initially empty.  Between the lists is a set of buttons that will move the selected items from the left list to the right list or vice a versa.  The > button will move the selected items from the left list to the right list.  The >> button will move all the items from the left list to the right list .  The < button will move all the selected items in the right list to the left list.  The << button will move all the items in the right list to the left list.  To select items press the hold the shift key and drag the mouse over the items to be selected.

### Props
In order to use the double list box the user must pass the following props:

1.  **choices** = the values for the left list in an array.
2.  **value** = an array containing the values in the right list

Other optional props:

1.  **name**
2.  **onChange**
3.  **onClick**

### Example:

```javascript
const [leftList, setLeftList] = useState(['Jones', 'Smith', 'Wesson', 'Doe', 'Johnson]);
const [rightList, setRightList] = useState([]);
...
<DoubleListBox choices={leftList} 
               name="rightList" 
               value={rightList} 
               onChange={(event) => setRightList(event.target.value)} />
...
```

If the user selected Jones and Smith from the list and moved them to the right list with > button, rightList would contain Jones and Smith as an array.