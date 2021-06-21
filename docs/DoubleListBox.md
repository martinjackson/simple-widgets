# **Double List Box**

This will allow the user to move a list of items from the left list to the right list or vice a versa.  Therefore, the double list box has a left list that has items in it initially and a right list that is initially empty.  Between the lists is a set of buttons that will move the selected items from the left list to the right list or vice a versa.  The > button will move the selected items from the left list to the right list.  The >> button will move all the items from the left list to the right list .  The < button will move all the selected items in the right list to the left list.  The << button will move all the items in the right list to the left list.  To select items press the hold the shift key and drag the mouse over the items to be selected.

### **Props**
In order to use the double list box the user must pass the following props:

1.  **choices** = the values for the left list in an array.
2.  **value** = an array containing the values in the right list
3.  **onChange** = returns the values in the right list

Other optional props:

1.  **title** = provides a title for the double list box
2.  **titleStyle** = an object that allows the user to style the title
3.  **leftTitle** = provides a title over the left list (default is no title)
4.  **leftStyle** = an object that allows the user to style the title over the left list
5.  **rightTitle** = provides a title over the right list (default is no title)
6.  **rightStyle** = an object that allows the user to style the title over the right list

### **CSS File**

A css file can also be created to style the title, left list, and right list.  The names of the classes for the css file are:

1.  titleClass: class name for the title styling
2.  leftClass: class name for the left list styling
3.  rightClass: class name for the right list styling

### **Example:**

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

### **Another Example:**

```javascript
const [leftList, setLeftList] = useState(['Jones', 'Smith', 'Wesson', 'Doe', 'Johnson]);
const [rightList, setRightList] = useState([]);
...
<DoubleListBox choices={leftList} 
               name="rightList" 
               value={rightList} 
               onChange={(event) => setRightList(event.target.value)}
               title="Names to be Selected"
               leftTitle="Names"
               rightTitle="Selected Names" />
...
```
