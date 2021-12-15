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

## CSS File

The following CSS file will need to be imported into the file that uses this DoubleListBox component.  The import would be, if it is not be changed:

```javascript
import '../node_modules/simple-widgets/lib/theme.css';
import '../node_modules/simple-widgets/lib/doubleListBox.css';
```

For more information on CSS files, see [Using CSS](./UsingCSS.md).

### **doubleListBox.css**

A css file that contains the title, left list, and right list classes.  The names of the classes for the css file are:

1. ***dlb_buttonSt*** = the styles for the <, >, <<, and >> buttons

```css
.dlb_buttonSt {
    width: 50;
    margin: 0.25em 0.75em;   /* top/bot 0.25  left/right 0.75 */
    justify-content: center;
    background-color: var(--theme_buttonColor);
    color: var(--theme_buttonTextColor);
}
```

2. ***dlb_topSt*** = the styling for displaying the Double List Box.  This should not be changed.

```css
.dlb_topSt { 
    display: flex;
    flex-direction: row;
}
```

3. ***dlb_colSt*** = the styling for the button group.  This should not be changed.

```css
.dlb_colSt { 
    width: min-content;
    align-self: center;
}
```

4. ***dlb_listSt*** = the styling for the right and left lists.  If you notice when the size option is used, the empty list box is shorter than the one with values in it.  If there are values in both list boxes, the size of the boxes are the same.  If you want to make them the same size, the height property can be added to the class.  A height of 13em is approximately as the size of 10.  The height property will override the size prop.

```css
.dlb_listSt { 
    min-width: 8em;
}
```

5. ***dlb_rightClass*** = the styling for the right list title, if there is one

```css
.dlb_rightClass {
    font-size: 16;
    font-weight: bold;
    margin-bottom: 5px;
}
```

6. ***dlb_leftClass*** = the styling for the left list title, if there is one

```css
.dlb_leftClass {
    font-size: 16;
    font-weight: bold;
    margin-bottom: 5px;
}
```

7. ***dlb_titleClass*** = the styling for the title, if there is one

```css
.dlb_titleClass {
    font-size: 24;
    font-weight: bold;
}
```

8. ***dlb_overallStyle*** = the overall style of the list box, which will center the list box.

```css
.dlb_overallStyle {
    margin-left: auto;
    margin-right: auto;
}
```

9. ***dlb_display*** = used for displaying the title over the list box and the list box.  This should not be changed.

```css
.dlb_display {
   display: block;
}
```

### **Example 1:**

```javascript
import '../node_modules/simple-widgets/lib/theme.css';
import '../node_modules/simple-widgets/lib/doubleListBox.css';

const [leftList, setLeftList] = useState(['Jones', 'Smith', 'Wesson', 'Doe', 'Johnson]);
const [rightList, setRightList] = useState([]);

const setRightList = (value) => {
    console.log ('value', value);
}
...
<DoubleListBox choices={leftList} 
               value={rightList} 
               onChange={(event) => setRightList(event.target.value)} />
...
```

If the user selected Jones and Smith from the list and moved them to the right list with > button, rightList would contain Jones and Smith as an array.
The output will be value ['Jones', 'Smith'].

### **Example 2:**

```javascript
import '../node_modules/simple-widgets/lib/theme.css';
import '../node_modules/simple-widgets/lib/doubleListBox.css';

const [leftList, setLeftList] = useState(['Jones', 'Smith', 'Wesson', 'Doe', 'Johnson]);
const [rightList, setRightList] = useState(['Pierce']);

const getSelection = (value) => {
    console.log ('value', value);
    setRightList(value);
}
...
<DoubleListBox choices={leftList} 
               value={rightList} 
               size="15"
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
import '../node_modules/simple-widgets/lib/theme.css';
import '../node_modules/simple-widgets/lib/doubleListBox.css';

const [leftList, setLeftList] = useState(['Jones', 'Smith', 'Wesson', 'Doe', 'Johnson]);
const [rightList, setRightList] = useState([]);

const getSelection = (event) => {
    console.log ('value', value);
    setRightList(value);
}
...
    <DoubleListBox  title="DoubleListBox Example"
                    name="people"
                    choices={nameList}
                    size="15"
                    value=""
                    onChange={processSelection} />
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
