# **Double List Box**

This will allow the user to move a list of items from the left list to the right list or vice a versa.  Therefore, the double list box has a left list that has items in it initially and a right list that is initially empty.  Between the lists is a set of buttons that will move the selected items from the left list to the right list or vice a versa.  The > button will move the selected items from the left list to the right list.  The >> button will move all the items from the left list to the right list .  The < button will move all the selected items in the right list to the left list.  The << button will move all the items in the right list to the left list.  To select items press the hold the shift key and drag the mouse over the items to be selected.

### **Props**

In order to use the double list box the user must pass the following props:

1. **choices** = the values for the left list in an array.
2. **value** = an array containing the values in the right list
3. **onChange** = function that returns the values in the right list

Other optional props:

1. **size** = the size of each list box, which is the number of elements that will be displayed in the list box before scroll bars appear.  If "all" is put in place of a number, and this will display all the elements in the list box (no scroll bars).  The default size is 10.  If a size less than 7 (without a left and right title) or 10 (with a left and right title) is selected, it will be changed to 7 or 10 (anything less than 7 or 10 will not make the screen look right).  For more information, about the size prop, see the dlb_listSt class in the doubleListBox.css section.
2. **name** = is the name given to the component.  If a name is not given, it will default DoubleListBox.  See Example 2, below.
3. **title** = provides a title for the double list box
4. **leftTitle** = provides a title over the left list (default is no title).  If there is a left title there must also be a right title, even if one of the title is blank('').
5. **rightTitle** = provides a title over the right list (default is no title).  If there is a right title there must also be a left title, even if one of the title is blank('').
6. **sortLeft** = indicates that the left list will be in sorted order (ascending) when items are moved into the left list from the right list.
7. **sortRight** = indicates that the right list will be in sorted order (ascending) when items are moved into the right list from the left list.  Should not be used if the updown option is used.
8. **leftChange** = indicates that new data can be loaded into the left list.
9. **rightChange** = indicates that new data can be loaded into the right list.
10. **updownbuttons** = this allows the user to move items up or down in the right list.  A set of buttons will appear to the right of the right list.  They are the up arrow with a line above it, an up arrow, a down arrow, and a down arrow with a line under it. The up arrow will move the selected items up one row on the right side.  More than one item can be selected, but they should be consecutive.  The down arrow will move the selected items down one row.  The up arrow with the line on top of it will move the selected rows to the top of the right column.  The down arrow with the line under it will move the selected items to the bottom of the right list.  This should not be used in conjunction with the sortRight prop.  The reason for this is the every time an item is moved to the right list, the right list will be sorted.

## CSS File

The following CSS file will need to be imported into the file that uses this DoubleListBox component.  The import would be, if it is not be changed:

```javascript
import '../node_modules/simple-widgets/lib/sw-theme.css';
import '../node_modules/simple-widgets/lib/sw-doubleListBox.css';
```

For more information on CSS files, see [Using CSS](./UsingCSS.md).

### **sw-doubleListBox.css**

A css file that contains the title, left list, and right list classes.  The names of the classes for the css file are:

1. ***sw-dlb_buttonSt*** = the styles for the <, >, <<, and >> buttons

```css
.sw-dlb_buttonSt {
    width: 50;
    margin: 0.25em 0.75em;   /* top/bot 0.25  left/right 0.75 */
    justify-content: center;
    background-color: var(--theme_buttonColor);
    color: var(--theme_buttonTextColor);
}
```

2. ***sw-dlb_topSt*** = the styling for displaying the Double List Box.  This should not be changed.

```css
.sw-dlb_topSt { 
    display: flex;
    flex-direction: row;
}
```

3. ***sw-dlb_colSt*** = the styling for the button group.  This should not be changed.

```css
.sw-dlb_colSt { 
    width: min-content;
    align-self: center;
}
```

4. ***sw-dlb_listSt*** = the styling for the right and left lists.  If you notice when the size option is used, the empty list box is shorter than the one with values in it.  If there are values in both list boxes, the size of the boxes are the same.  If you want to make them the same size, the height property can be added to the class.  A height of 13em is approximately as the size of 10.  The height property will override the size prop.

```css
.sw-dlb_listSt { 
    min-width: 8em;
}
```

5. ***sw-dlb_rightClass*** = the styling for the right list title, if there is one

```css
.sw-dlb_rightClass {
    font-size: 16;
    font-weight: bold;
    margin-bottom: 5px;
}
```

6. ***sw-dlb_leftClass*** = the styling for the left list title, if there is one

```css
.sw-dlb_leftClass {
    font-size: 16;
    font-weight: bold;
    margin-bottom: 5px;
}
```

7. ***sw-dlb_titleClass*** = the styling for the title, if there is one

```css
.sw-dlb_titleClass {
    font-size: 24;
    font-weight: bold;
}
```

8. ***sw-dlb_overallStyle*** = the overall style of the list box, which will center the list box.

```css
.sw-dlb_overallStyle {
    margin-left: auto;
    margin-right: auto;
}
```

9. ***sw-dlb_display*** = used for displaying the title over the list box and the list box.  This should not be changed.

```css
.sw-dlb_display {
   display: block;
}
```

### **Example 1:**

```javascript
const [leftList, setLeftList] = useState(['Jones', 'Smith', 'Wesson', 'Doe', 'Johnson]);
const [rightList, setRightList] = useState([]);

const getSelection = (value) => {
    console.log ('value', value);
}
...
<DoubleListBox choices={leftList} 
               value={rightList} 
               onChange={(event) => getSelection(event.target.value)} />
...
```

If the user selected Jones and Smith from the list and moved them to the right list with > button, rightList would contain Jones and Smith as an array.
The output will be value ['Jones', 'Smith'].

### **Example 2:**

```javascript
const [leftList, setLeftList] = useState(['Jones', 'Smith', 'Wesson', 'Doe', 'Johnson]);
const [rightList, setRightList] = useState(['Pierce']);

const getSelection = (value) => {
    console.log ('value', value);
}
...
<DoubleListBox choices={leftList} 
               value={rightList} 
               size="5"
               onChange={(event) => getSelection(event.target.value)}
               title="Names to be Selected"
               leftTitle="Names"
               rightTitle="Selected Names" />
...
```

The right list will have Pierce placed in it at the start.
Since size is 5, it will automatically default to 10, since there are left and right titles.

### **Example 3:**

```javascript
const [leftList, setLeftList] = useState(['Jones', 'Smith', 'Wesson', 'Doe', 'Johnson]);
const [rightList, setRightList] = useState([]);

const processSelection = (event) => {
    console.log ('value', event.target.value);
}
...
    <DoubleListBox  title="DoubleListBox Example"
                    name="people"
                    choices={nameList}
                    size="15"
                    value=""
                    onChange={() => processSelection} />
...
```

If the user selected Jones and Smith from the list and moved them to the right list with > button, rightList would contain Jones and Smith as an array.
The output will be: 
```javascript
value { target: {
        name: 'people',
        value: ['Jones', 'Smith']
      }
}

```

### **Example 4:**

```javascript
const [leftList, setLeftList] = useState(['Jones', 'Smith', 'Wesson', 'Doe', 'Johnson]);
const [rightList, setRightList] = useState([]);

const getSelection = (value) => {
    console.log ('value', value);
}
...
    <DoubleListBox  title="DoubleListBox Example"
                    name="people"
                    choices={nameList}
                    size="15"
                    value=""
                    sortLeft
                    sortRight
                    onChange={(event) => getSelection(event.target.value)} />
...
```

If the user moves values to the right list, they will be in sorted on the right list.  This is because of the sortRight prop.  If the user moves value back to the left list, the will be in sorted order in the left list.  This is because of the sortLeft prop. 

### **Example 5:**

```javascript
const [leftList, setLeftList] = useState(['Jones', 'Smith', 'Wesson', 'Doe', 'Johnson]);
const [rightList, setRightList] = useState([]);

const getSelection = (value) => {
    console.log ('value', value);
}
...
    <DoubleListBox  title="DoubleListBox Example"
                    name="people"
                    choices={nameList}
                    size="15"
                    value=""
                    leftChange
                    rightChange
                    onChange={(event) => getSelection(event.target.value)} />
...
```

This will allow the user to change the left list or the right list outside of the DoubleListBox.  This is allowed due to the leftChange and rightChange props.  If these props were not there, the user can only change the values with the buttons. 
