# **Search Sort Table**

This will allow a user to display a limited number of items in a table.  The user can search for an item by typing in the starting value of an item in the table.  The user can also use the Top, Bottom, Previous, and Next buttons to display the next set of values in the table.

The user can also click on a column and the column will be sorted in either ascending or descending order.  The first type a column is clicked it will be sorted in ascending order.  After that it will alternate between descending and ascending order, respectively.

The user can also filter the data that is to be displayed.

### **Props**
In order for the user to use the Search Sort Table, they must pass the following props:

1.  **data** = the data to be displayed which is an array of objects that contains a header and name fields.
2.  **table** = an object that contains the headers for each column in the table, the field name for each item in the data array, whether the column can be searched or not, and whether the column could be sorted or not.
The header field is the name of the header for that column of the table.  The name is field name in the data object passed as the data prop.  The search field name indicates whether that column can be searched or not.  The sort field indicates whether the column can be sorted or not.  

Other possible fields for a row in the table are: dataDate, filterDate, sortDate, searchDate, dropDown, type, and pdfCol.  

The dataDate field indicates the format of a date field in the data.  The filterDate field indicates the format of the date on the filter field in the display table.  The sort date field is the format of the date field to be sorted.  The searchDate field indicates the format of the date on the search field in the display table.  The possible date formats are:
  - MM/DD/YYYY
  - MM-DD-YYYY
  - YYYY-MM-DD (default)
  - MM/DD/YYYY HH:MM:SS
  - MM-DD-YYYY HH:MM:SS
  - YYYY-MM-DD HH:MM:SS (default for date with time)
  - YYYY-MM-DDTHH:MM:SS.SSS
  
   An example row in the table for a date field might look like:
   ```javascript
        { header: 'Date', name: 'DATE', sort: true, search: true, dataDate: 'YYYY-MM-DD', filterDate: 'MM/DD/YYYY', sortDate: 'YYYY-MM-DD' }
   ```

  In the above example, the header in the display table will be Date.  The name of the field in the data will be DATE.  You can sort and search on the field.  The date in the   data will be in the form of YYYY-MM-DD.  The date in the filter field on the display table will be in the form of MM/DD/YYYY.  If you have the dateField you must also have the filterData field and vice a versa.  The sortDate field indicates how the data is in the data, which is YYYY-MM-DD.  Since this is the default, this field can be left off.

  Both the data date and filter date are both converted to either YYYY-MM-DD or YYYY-DD-MMTHH:MM:SS for comparision.  If the data or filter fields do not match one of the above formats, it retains its current format.

  The dropDown field indicates that a dropDown will appear on top of the column header.  The dropDown field will be true if the user wants the drop down over the header when the user clicks on the header; otherwise it is set to false for no drop down.  The dropDown will allow the user to hide a column, to do control breaks on columns, or to do an aggregation (summation, average, count, count distinct, minimum, maximum, or median) on a column with the result appearing in the footer.

  An example set of rows in the table for a dropDown field might look like:
   ```javascript
        { header: 'City',  name: 'CITY',  sort: true, search: true, dropDown: true },
        { header: 'State', name: 'STATE', sort: true, search: true, dropDown: false }
   ```

   In the above example, when the City header is clicked on a drop down will appear allowing the user to hide columns, control break a column, or aggregate a column.
   The State header will do nothing when it is clicked on since dropDown is false.

   The type field indicates the type of data that the field is holding.  The values can be string or number.  This so that type of aggregation that can be done on that
   field.  String fields can only do count, distinct count, minimum, and maximum aggregations.  Number fields can do all that the string fields can do along with summation, average, and median aggregations.  If the type field is left of, the system will try to determine the type.

   An example set of rows in the table for a type field might look like:
   ```javascript
        { header: 'Name',   name: 'NAME',   sort: true, search: true, dropDown: true, type: 'string' },
        { header: 'Salary', name: 'SALARY', sort: true, search: true, dropDown: true, type: 'number' }
   ```

   In the above example, the drop down for the Name header would have the following aggregations in the drop down: count, distinct count, minimum, maximum.  The drop down for the Salary header would have the following aggregations: summation, average, count, distinct count, minimum, maximum, and median.

  The drag field indicates that will allow columns to moved in the table.  If columns are to be moved around, the drag field should be true; otherwise it is set to false for no column dragging.  

  An example set of rows in the table for a dropDown field might look like:
   ```javascript
        { header: 'City',  name: 'CITY',  sort: true, search: true, drag: true },
        { header: 'State', name: 'STATE', sort: true, search: true, drag: false }
   ```

   In the above example, the City header can be dragged (drag is true) while the State header can not (drag is false).

   The headerAlign specifies how the header will be displayed in the column.  The headerAlign specifies whether the header will left justified, centered, or right justified.  The values are 'sw-sst_left', 'sw-sst_center', 'sw-sst_right', or any CSS class.

   The align specifies how the data will be displayed in the column.  The align specifies whether the data will left justified, centered, or right justified.  The values are 'sw-sst_left', 'sw-sst_center', 'sw-sst_right', or any CSS class.

   The pdfCol specifies the alignment of a PDF column if PDF's are allowed to be generated.  The values for the pdfCol are:
    - left        this will align the data to the left in the column
    - right       this will align the data to the right in the column
    - center      this will center the data in the column
    - date        this will convert the date to the MM/DD/YYYY format and center the date
    - dateLeft    this will convert the date to the MM/DD/YYYY format and align the date to the left
    - dateRight   this will convert the date to the MM/DD/YYYY format and align the date to the right
    - money       this will convert the number into a dollar amount with the format of $DD,DDD.DD

   If the date is already in the correct format, use left, right, or center.  If you do not supply a pdfCol, it will left justify the value for that column.

   An example set of row in the table for a pdfCol field might look like:

   ```javascript
        { header: 'Name',   name: 'NAME',   sort: true, search: true, dropDown: true, type: 'string' },
        { header: 'Salary', name: 'SALARY', sort: true, search: true, dropDown: true, type: 'number', pdfCol: 'money' }
   ```

   In the above example, the Name field in the PDF report will be left justified in the PDF column, since there is no pdfCol.  The Salary field in the PDF report will be right justified and will be placed in the dollar format ($D,DDD.DD).

   If a checkbox is needed in the header of a column, here is an example of how to do this:

   ```javascript
        { header: '',       name: '',       checked: true },
        { header: 'Name',   name: 'NAME',   sort: true, search: true, dropDown: true, type: 'string' },
        { header: 'Salary', name: 'SALARY', sort: true, search: true, dropDown: true, type: 'number', pdfCol: 'money' }
   ```
  In the above example, the first entry has header and name blank.  The checked: true option indicates that the header for that column should be a checkbox.  This could be used with the rest rows in that column, to delete the rows that are checked.  The checkbox in the header should be used to check some or all the checkboxes in that row.  The checkedFunct is used to determine the behavoir of the checkbox in the header.

3.  **eachRowInTable** = a function that indicates how each cell in a row will be displayed.  The function will build a row in the search sort table.  The function is passed a row in the table that needs to be put into the HTML table row format.  If hover props is used, the indexing table and onClick on the tr will need to be added.  The following example is with out the hover props being used:

# Old Format (still works if not dragging)
```javascript
          const eachRowInTable = (row, i) => {
              let key = 'row_' + i + start;
              return (
                  <tr key={key}>
                      <td>{row.ORDER_NUM}</td>
                      <td>{row.ITEM}</td>
                      <td>{row.ON_HAND}</td>
                      <td>{row.COST}</td>
                  </tr>
              )
          }
```

In the above example, the row parameter is row in the table to be displayed.  The i is the row number being processed and is only used if the hover prop is used.  The key will make every row in the table unique; otherwise, you will get a warning.  The <tr> and <td> define the rows and columns respectively.  If the HTML is not returned, nothing will be displayed.  This will also need the startEnd prop on the <SearchSortTable> (see the startEnd prop in the props section).  There is a full example below.

The following example is with the hover props being used:
```javascript
    const eachRowInTable = (row, i) => {
        let key = 'row_' + i + start;

        pos = indexing[i];

        return (
            <tr key={key} onClick={(event) => functName(pos)}>
                <td>{row.ORDER_NUM}</td>
                <td>{row.ITEM}</td>
                <td>{row.ON_HAND}</td>
                <td>{row.COST}</td>
            </tr>
        )
    }
```

In the above example, it is the same as the previous example except for the indexing and the onClick on the <tr>.  The indexing will allow the correct data to be selected.  The data array is still in the original order that it came in and the indexes array indicate how the data is displayed.  Each value in the index array is a number that indicates the position in the data array.  So setting it to indexes[i] (current position in the indexes array being processed), places the position of the data in the data array into pos.  The onClick on the <tr> will retrieve the data being hovered over.  It will call the function called functName and pass down the position of the data in the data array.  The startEnd, indexing, and hover attributes must be in the <SearchSortTable> (see the props section below).  There is a full example below.

# New Format (must use if using dragging)
```javascript
    const eachRowInTable = (row, i) => {
        return (
          <tr key={`row_${i}_${start}`}> 
            { table.map((col, idx) => (
                <td key={`${col.header}_${idx}_${i}`} className={col.align} 
                        hidden={hideCol[idx]}>
                    row[col.name]
                </td>
            ))}
          </tr>
        )
    }
```

In the above example, the row parameter is row in the table to be displayed.  The i is the row number being processed and is only used if the hover prop is used.  The key will make every row in the table unique; otherwise, you will get a warning.  The <tr> and <td> define the rows and columns respectively.  The table.map section goes through each column in the table and prints out the value in that column with row[col.name].  The col.name is the name part in the object for a column in the table.  If the HTML is not returned, nothing will be displayed.  This will also need the startEnd prop on the <SearchSortTable> (see the startEnd prop in the props section).  There is a full example below.

The following example is with the hover props being used:
```javascript
    const eachRowInTable = (row, i) => {
        let pos = indexes[i];
        
        return (
          <tr key={`row_${i}_${start}`} onClick={() => display(data[pos])}> 
            { table.map((col, idx) => (
                <td key={`${col.header}_${idx}_${i}`} className={col.align} 
                        hidden={hideCol[idx]}>
                    row[col.name] }
                </td>
            ))}
          </tr>
        )
    }
```

In the above example, it is the same as the previous example except for the indexing and the onClick on the <tr>.  The indexing will allow the correct data to be selected.  The data array is still in the original order that it came in and the indexes array indicate how the data is displayed.  Each value in the index array is a number that indicates the position in the data array.  So setting it to indexes[i] (current position in the indexes array being processed), places the position of the data in the data array into pos.  The onClick on the <tr> will retrieve the data being hovered over.  It will call the function called functName and pass down the position of the data in the data array.  The startEnd, indexing, and hover attributes must be in the <SearchSortTable> (see the props section below).  There is a full example below.

The following is an example on how to customize the new eachRowInTable:

```javascript
    const eachRowInTable = (row, i) => {
        let pos = indexes[i];

        return (
          <tr key={`row_${i}_${start}`} onClick={() => display(dataTest[pos])}> 
            { table.map((col, idx) => (
                <td key={`${col.header}_${idx}_${i}`} className={"sw-sst_body_full " + col.align} 
                        hidden={hideCol[idx]}>
                    { (col.name === 'date') ? convertDate(row[col.name]) : 
                      (col.name === 'money') ? formatMoney(row[col.name]) :
                      (col.name === 'edit') ? <button name='edit' onClick={nothing}>Edit</button> :
                       row[col.name] }
                </td>
            ))}
          </tr>
        )
    }
```

In the above example, in between the <td> and </td> is where the customization occurs.  Each column can be customized using the following format:

```javascript
  { (col.name === 'name of column') ? <formating> :
    (col.name === 'name of column') ? <formating> : ...
     row[col.name] }
```

There can be either no customization or each column can be customized.

### **Examples (using the old format)**
The following is a simple code example:

```javascript
        import '../node_modules/simple-widgets/lib/theme.css';
        import '../node_modules/simple-widgets/lib/table.css';

        let data = [
            { Order_Number: 10, Item: 'Hammer',        On_Hand: 20, COST: 15.21 },
            { Order_Number: 11, Item: 'Screwdriver',   On_Hand: 13, COST: 16.43 },
            { Order_Number: 22, Item: 'Pliers',        On_Hand: 24, COST: 17.54 },
            { Order_Number: 23, Item: 'Wrench',        On_Hand: 05, COST: 18.56 },
            { Order_Number: 24, Item: 'Saw',           On_Hand: 11, COST: 14.78 },
        ];

        <SearchSortTable data={data}  scroll />
```

The following is a more involved code example:

```javascript
        import '../node_modules/simple-widgets/lib/theme.css';
        import '../node_modules/simple-widgets/lib/table.css';

        const MAX_ITEMS = 2;

        let data = [
            { ORDER_NUM: 10, ITEM: 'Hammer',        ON_HAND: 20, COST: 15.21 },
            { ORDER_NUM: 11, ITEM: 'Screwdriver',   ON_HAND: 13, COST: 16.43 },
            { ORDER_NUM: 22, ITEM: 'Pliers',        ON_HAND: 24, COST: 17.54 },
            { ORDER_NUM: 23, ITEM: 'Wrench',        ON_HAND: 05, COST: 18.56 },
            { ORDER_NUM: 24, ITEM: 'Saw',           ON_HAND: 11, COST: 14.78 },
        ];

        const sortExample = (props) => {
          const [start, setStart] = useState(0);
          const [indexing, setIndexing] = useState([]);

          const startEnd (start, end) {
              setStart(start);
          }
          const getIndexes (indexing) {
              setIndexing(indexing);
          }

          let table = [
              { header: 'Order Number',   name: 'ORDER_NUM',  search: true,   sort: true  },
              { header: 'Description',    name: 'ITEM',       search: true,   sort: true  },
              { header: 'On Hand Count',  name: 'ON_HAND',    search: true,   sort: true  },
              { header: 'Cost',           name: 'COST',       search: false,  sort: false },
          ];

          const eachRowInTable = (row, i) => {
              let key = 'row_' + i + start;

              pos = indexing[i];

              return (
                  <tr key={key} onClick={(event) => functName(pos)}>
                      <td>{row.ORDER_NUM}</td>
                      <td>{row.ITEM}</td>
                      <td>{row.ON_HAND}</td>
                      <td>{row.COST}</td>
                  </tr>
              )
          }

          <SearchSortTable data={data}
                          table={table}
                          MAX_ITEMS={MAX_ITEMS}
                          eachRowInTable={eachRowInTable}
                          startEnd={startEnd}
                          indexing={getIndexes} 
                          hover />
        }
```

The following example shows how to use the drop down in the column headers:

```javascript
        import '../node_modules/simple-widgets/lib/theme.css';
        import '../node_modules/simple-widgets/lib/table.css';

        const MAX_ITEMS = 2;

        let data = [
            { ORDER_NUM: 10, ITEM: 'Hammer',        ON_HAND: 20, COST: 15.21 },
            { ORDER_NUM: 11, ITEM: 'Screwdriver',   ON_HAND: 13, COST: 16.43 },
            { ORDER_NUM: 22, ITEM: 'Pliers',        ON_HAND: 24, COST: 17.54 },
            { ORDER_NUM: 23, ITEM: 'Wrench',        ON_HAND: 05, COST: 18.56 },
            { ORDER_NUM: 24, ITEM: 'Saw',           ON_HAND: 11, COST: 14.78 },
        ];

        const sortExample = (props) => {
          const [start, setStart] = useState(0);
          const [indexing, setIndexing] = useState([]);
          const [hideCols, setHideCols] = useState([]);

          const startEnd = (start, end) => {
              setStart(start);
          }
          const getIndexes = (indexing) => {
              setIndexing(indexing);
          }

          const hiddenCols = (columns) => {
              setHideCols(columns);
          }

          let table = [
              { header: 'Order Number',   name: 'ORDER_NUM',  search: true,   sort: true,  dropDown: true },
              { header: 'Description',    name: 'ITEM',       search: true,   sort: true,  dropDown: true },
              { header: 'On Hand Count',  name: 'ON_HAND',    search: true,   sort: true,  dropDown: true },
              { header: 'Cost',           name: 'COST',       search: false,  sort: false, dropDown: true },
          ];

          const eachRowInTable = (row, i) => {
              return (
                  <tr key={key}>
                      <td>{row.ORDER_NUM}</td>
                      <td>{row.ITEM}</td>
                      <td>{row.ON_HAND}</td>
                      <td>{row.COST}</td>
                  </tr>
              )
         }

          <SearchSortTable data={data}
                          table={table}
                          MAX_ITEMS={MAX_ITEMS}
                          eachRowInTable={eachRowInTable}
                          startEnd={startEnd}
                          indexing={getIndexes}
                          hidden={hiddenCols}
                          setTheTable={setTheTable} 
                          hover />
        }
```

### **Examples (using the new format)**
The following example shows how to use the drag with the new eachRowInTable function (see the Drag and Drop section):

```javascript
        import '../node_modules/simple-widgets/lib/theme.css';
        import '../node_modules/simple-widgets/lib/table.css';

        const MAX_ITEMS = 2;

        let data = [
            { ORDER_NUM: 10, ITEM: 'Hammer',        ON_HAND: 20, COST: 15.21 },
            { ORDER_NUM: 11, ITEM: 'Screwdriver',   ON_HAND: 13, COST: 16.43 },
            { ORDER_NUM: 22, ITEM: 'Pliers',        ON_HAND: 24, COST: 17.54 },
            { ORDER_NUM: 23, ITEM: 'Wrench',        ON_HAND: 05, COST: 18.56 },
            { ORDER_NUM: 24, ITEM: 'Saw',           ON_HAND: 11, COST: 14.78 },
        ];

        const sortExample = (props) => {
          let tableTest = [
              { header: 'Order Number',   name: 'ORDER_NUM',  search: true,   sort: true, drag: true  },
              { header: 'Description',    name: 'ITEM',       search: true,   sort: true, drag: true  },
              { header: 'On Hand Count',  name: 'ON_HAND',    search: true,   sort: true, drag: true  },
              { header: 'Cost',           name: 'COST',       search: false,  sort: false, drag: true },
          ];

          const [start, setStart] = useState(0);
          const [indexing, setIndexing] = useState([]);
          const [table, setTable] = useState(tableTest);

          const startEnd (start, end) {
              setStart(start);
          }
          const getIndexes (indexing) {
              setIndexing(indexing);
          }

          const setTheTable (table, footer) {
            setTable(table);
          }

          const eachRowInTable = (row, i) => {
              let key = 'row_' + i + start;
              pos = indexing[i];

              return (
                <tr key={`row_${i}_${start}`} onClick={() => display(dataTest[pos])}> 
                  { table.map((col, idx) => (
                      <td key={`${col.header}_${idx}_${i}`} className={col.align} 
                              hidden={hideCol[idx]}>
                          row[col.name] }
                      </td>
                  ))}
                </tr>
              )
          }

          <SearchSortTable data={data}
                          table={table}
                          MAX_ITEMS={MAX_ITEMS}
                          eachRowInTable={eachRowInTable}
                          startEnd={startEnd}
                          indexing={getIndexes} 
                          setTheTable={setTable}
                          hover />
        }
```

### **Sorting**

If sorting is allowed for that column, there will either be an triangle (ascending order), or an upside down triangle (descending order), or triangle on its side (no order) next to the header.  Intially all the triangles will be on there sides to indicate no order.

To sort press on the triangle on its side, this will place the data in ascending order and it will appear as a regular triangle.
If pressed again, it will place it in descending order with an upside down triangle.
If pressed one more time, it will go back to its original order with the triangle being on its side.

The data is not sorted, but remains in its original state.  The order of the indexes into the data array are changed when sorted, filtered, searched, or control break.

### **Searching**
The search bar contains the following:
1.  A drop down listing all the headers in the table.  Select one to search that column in the table.
2.  A text box to enter the text to be searched for in that header column.
3.  A Search button to search for the text in the header column.
4.  A Top button places the first item in the data at the top of the table.  Disables the Top and Previous buttons.
5.  A Previous button displays the previous MAX_ITEMS of data in the table.  Disables the Top and Previous buttons if at the top of the data.
6.  A Next button displays the next MAX_ITEMS of data in the table.  Disables the Next and Bottom buttons if at the end of the data.
7.  A Bottom button places the last MAX_ITEMS of data in the table.  Disabled the Next and Bottom buttons.

How to search:

1.  Select a header option from the drop down.
2.  Type a value to search underneath the header selected from the drop down.  This will also take you back to the first data item, which will be at the top of the screen.
3.  Press the Search button.  The search will search that field until it finds the first item that anywhere within that value and places it as the first item in the table.  For example, suppose you enter 2 for Order Number, then 123 will be displayed as the first item in the table.  If the search button is pressed again, it will find the next data in that column that matches the search item.

### **Filtering**

The filter bar contains the following:

1.  The Filter On checkbox starts the filter process by displaying an input box under the headers of all the columns in the display table that can be filtered.
2.  The funnel does the filtering.  When filtering is off the funnel background is gray, when the Filter On is checked, the funnel background is white.  When filtering takes place the funnel background will be green.

How to filter:

1.  Check the Filter On.  An input box will appear below the header of each column in which filtering can take place.
2.  Enter values to filter on in each of the input boxes or select them from the Choice box (see the choice prop below).  For dates there are three possible ways to filter: MM/DD/YYYY, MM/YYYY, or YYYY if using the MM/DD/YYYY for the filter date on the table entry in number 2 above.  You can use MM-DD-YYYY, MM-YYYY, or YYYY if using MM-DD-YYYY, etc.
3.  Press the Funnel to do the filtering.
4.  The user can add other fields to refine the filtering and press the Funnel.
5.  If you want to change values to start a new filtering process, the user first should uncheck and recheck the Filter On.  This will rest the display table to the original values.  The old filter values will remain in the input boxes.  The user should change the ones desired and press the Funnel.

# **Letters**

Use the letters that appear to select a column and then select the letter for all the items that start with that letter to appear.

1.  The letters prop must be used for the letters to appear in the Search Sort Table.
2.  The dropdown Search is used to indicate which column is to be used when a letter is selected.
3.  A set of letters appears after the filtering line.  The letters can be upper case letters, lower case letters, or digits.  See the letters prop for more information.

How to use Letters:

1.  Select a column from the dropdown Search.
2.  Select a letter from the list.  The selected letter will be highlighted and all the values that start with that letter in that column will be displayed.

# **Drop Down on a Column**

The drop down that is displayed when you click on a column with a light blue lettering contains the following:
  - either the hide column icon (a single page with a circle X) or the show column (a single page) will appear
    If a column is selected for hiding on the main table, the column will be hidden and will not be shown until the Reset button is pressed.
    If there is a control break, even the hidden column will be shown at the top of the table, the user can click on click on the show button to show the column.  If a column is being displayed, the hide button will appear in the drop down.  If a column is hidden, then the show column button will appear.
  - either the control break icon (several pages) or the undo control break (several pages with the circle X) will appear
    If a column is selected and the control break button is pressed, it will cause a control break for that column.  A control break will cause that column to be sorted and divides that column into control break tables.  If two or more columns are given control breaks, it will sort the data first by the column selected for a control break, followed by the second column selected, and so on.  Once a control break is selected for that column, then the Undo Control Break button will appear on the drop down.  If the Undo control button is selected, it will undo the control break for that column and it will set the button back to the control break button.
  - cancel icon (circle X) will remove the drop down over the column from the screen.
  - choice box will allow the user to select an aggregation for the column.  
    The following are the aggregation for string fields: count, count distinct, minimum, and maximum.  For numeric (float or integer) fields there are the following: summation, average, count, count distinct, minimum, maximum, and median.
  - Apply button will execute the aggregation selected by the choice box.
    The aggregation will appear at the end of the column for each table.  If there are multiple aggregations for the column, the results of each one will apper at the end of the column for each table.

  In order for the drop downs to appear the user must place the dropDown field to true in the table prop.

  The drop downs will only appear on the light blue menu headers for each column.  If it is a regular table (no control breaks), the light blue headers will be over each column.  If there is a control break, then the light blue headers will appear at the top of the main table.

  The Reset button will cause the data to go back to its original configuration.  All the control breaks will be removed and all the hidden columns will be displayed again.  Also, all aggregations will be removed from the bottom of each column.

### Dragging and Drop

This allows you to change the position of the columns in the table.  This allows the first column to move the last column in the table.

How to Drag and Drop:
1.  Only the blue column headers can be dragged.  To start the drag, place the cursor over the column header and press and hold the left mouse button.
2.  Move the dragged column header to the drop column.  If the drag happens from left to right then the dragged column is placed right (after) of the drop column.  If the drag happens from right to left then the dragged column is placed left (before) of the drop column.
3.  Release the left mouse button.

How to Enable the Drag in Search Sort Table:
1.  In the table prop in each row of the table array, set drag: true.  If drag is false, that column can not be dragged.  However the column that can be dragged can be dropped on by a dragged column.
2.  Use the new eachRowInTable format.  Look in the eachRowInTable prop for an explanation.
3.  Turn the table into a state variable.

```javascript
  let sortTable = [...];

  const [table, setTable] = useState(sortTable);
```

4.  Add the setTheTable prop in SearchSortTable configuration.  See the setTheTable prop.

```javascript
  <SearchSortTable 
      data={data}
      table={table}
      setTheTable={setTable}
      ...
  />
```

5.  If a footer is being used, turn it into a state Variable.  See the footer prop.

```javascript
  let theFooter = ['Totals', 123.45, 234.56, 334.66];

  const [footer, setFooter] = useState(theFooter);
```

5.  If a footer is being used, add the setTheFooter prop in SearchSortTable configuration.  See the setTheFooter prop.

```javascript
  <SearchSortTable 
      data={data}
      table={table}
      setTheTable={setTable}
      setTheFooter={footer}
      ...
  />
```

If using a control breaks, the individual table columns for each table can be dragged and dropped.  Only the blue headers can be dragged and dropped.

There is full example near the end of this document.

### **PDF Button**

The PDF button will display the table as a PDF report.  If there are control breaks and hidden columns they will be transferred to the PDF.

To generate the PDF:

1.  Select the page orientation.  The two options are Portrait or Landscape.
2.  Press the PDF button.  Another window will open up with the PDF report where it can be saved or printed.

### **Excel**

To generate an excel spread sheet containing the table with control breaks and hidden columns:

1.  Press the Excel Build button.  This will cause the Excel Display to open and for the report to build.
2.  Press the Excel Display button.  
3.  Click on the button being displayed in the lower left corner.  This will open up the Excel Spreadsheet application and place the data in the spreadsheet.


### **Other props:**

1. **allIndexes** = is a function that returns all the indexes for the entire data set, not just the ones being displayed as in indexing.   The format of the function is the same as indexing.

2.  ***checkedFunction*** = is a function that determines the behavior of the checkbox in the header.  The checkbox is placed in the header by using checked: true as an entry in the table for a column.  See the table section above.  The format of the function is as follows:
```javascript
const processAllChecks = (data) => {
  ...
}
```

3.  ***choice*** = this indicates whether there will be choice boxes or input boxes for the filter input.  If choice prop appears, then the box to place the filter information will contain a choice box with all the possible data for that column.  Select or type the value and press the filter button.  If there is no choice prop, the filter information will be entered into an input text box.

4.  ***controlBreak*** = is an array that allows to set up hidden columns and control breaks before the table is displayed.  The control break array should have the same number of elements as the table array.  Each element is an object that contains a hidden and a control break field.  For example,
```javascript
  let controlBreak = [
    { hidden: false, ctrlBreak: 0 },
    { hidden: false, ctrlBreak: 0 },
    { hidden: false, ctrlBreak: 0 },
    { hidden: false, ctrlBreak: 0 },
  ]
```

The above control break array indicates that all the columns are visible and the 0 indicates that there is not a control break on that field.  Suppose the table prop looked like the following:
```javascript
  const table = [
    { header: 'Name',     name: 'name',   search: true, sort: true, dropDown: true, pdfCol: 'left' },
    { header: 'City',     name: 'city',   search: true, sort: true, dropDown: true, pdfCol: 'right' },
    { header: 'State',    name: 'state',  search: true, sort: true, dropDown: true, pdfCol: 'center' },
    { header: 'Zip Code', name: 'zip',    search: true, sort: true, dropDown: true, pdfCol: 'center' },
  ];
```

The first element in the table corresponds to the first item in the control break array.  Suppose there needs to be a control break on State and then City and the Name column should be hidden, the control break array would look like the following:
```javascript
  let controlBreak = [
    { hidden: true, ctrlBreak: 0 },
    { hidden: false, ctrlBreak: 2 },
    { hidden: false, ctrlBreak: 1 },
    { hidden: false, ctrlBreak: 0 },
  ]
```

The above control break array indicates the first column should be hidden, which is the Name column.  The ctrlBreak field in element 2 has a value of 1, which indicates that a control break will first occur on the State.  The ctrlBreak field in element 1 has a value 2, which indicates a control break will happen on City after the control break on State has happened.


5.  ***error*** = indicates that an error occurred.  This will disable all buttons in the Search Sort Table.

6. **footer** = the last row that is to be displayed in a table.  The footer is an array of items that are displayed as a footer in a table.  The footer could be used to contain the totals for the table.  There must be a footer for every column in the table.  Each array element represents one column in the table.  A sample footer might be:
```javascript
    let footer = [
        'Totals',
        totalStock,
        totalRental,
        totalCAN,
    ];
```
7. **height** = the height of the scroll box only.

8. **hidden** = is a function that indicates which columns should be hidden.  This will return an array the size of the number of columns.  Each index will contain a value of true if the column is to be hidden and false if is to be displayed.
An example would be:
```javascript
const [hideCol, setHideCol] = useState([]);

const hideTheCols = (value) => {
  setHideCol(value);
}

<SearchSortTable hidden={hideTheCols}/>
```

9. **hover** = indicates when a row in the table is hovered over it will change to the hoverColor or cyan if no hover color is given.  Cyan is the default hover color.  If you want to detect that the hover over row was clicked, the user should have an onClick event in the tr in the eachRowInTable function.

10. **hoverColor** = is the color that is displayed when a row in the table is hovered over.  If a value is not given, it will default to cyan.  An example would be:
```javascript
hoverColor="yellow"
```

11. **ignorecase** = indicates that the case will be ignored in the search item.  So it will match both upper case or lower case in the search.

12. **indexing** = is a function that returns the indexes into the current data being displayed.  This is used in eachRowInTable function where the user needs to actually access the actual data.  The user will need to add the indexing as a state variable.  See other examples.
An example would be:
```javascript
const [indexes, setIndexes] = useState([]);

const indexing = (value) => {
  setIndexes(value);
}

<SearchSortTable indexing={indexing} />
```

13. **letters** = will display upper case letters, lower case letters, and digits below the search bar.  
  - To use the letters option:
    1. Select a column header from the drop down menu.
    2. Select a letter or digit.
    3. The data will be sorted on that column header.  It will then search the data for first letter or digit that matches the one selected.  For letters, this option is the best.  For example, if A is selected, then all items in the column header that begin with A are listed in the table.  However, if digits are used, for example suppose 5 is selected, it sort the table on that column header.  If the data contains 5, 11, 51, 123,and 532.  It will only list the 5.
  - Other options with letters:
    1. **noupper** = does not display the upper case letters
    2. **nolower** = does not display the lower case letters
    3. **nodigit** = does not display the digits

14. **mathdecimal** = the number of digits right of the decimal for an average or median aggregation

15. **mathignorecase** = ignore the case of the data for all the string aggregations.

16. **MAX_ITEMS** = the maximum number of rows that will be displayed in the table.  Default is 100.

17. **noaggregation** = indicates that the aggregation will not show up on the drop down on the column.

18. **nobottom** = does not display the bottom button.

19. **nocontrolbreak** = indicates that the control break symbols will not show up on the drop down on the column.

20. **nocontsearch** = indicates that if the search button is pressed again, it will not find the next item that matches the search item.

21. **nodisplay** = this will not display what rows are being displayed or the total number of rows.

22. **noexcel** = does not display the Excel Build or Excel Display buttons.  This value can be supplied with a true or false value.

23. **nofilter** = this will not display the Filter On check box and the filter button.  Can also set the value to true of false.

24. **nofooter** = this will not display the top, previous, next, bottom, what rows are being displayed,

25. **nofooterborder** = do not put a border around each individual footer item.

26. **noheaderborder** = do not put a border around each individual header item.

27. **nohidden** = indicates that the hidden symbols will not show up on the drop down on the column.

28. **nonext** = does not display the next button.

29. **nopdf** = does not display the PDF button or the Orientation choice box.  This value can be supplied with a true or false value.


30. **noprevious** = does not display the previous button.

31. **norows** = does not display how maximum number of rows or the choice box for changing it.

32. **nosearch** = does not display the header drop down, text box, and Search button.

33. **nosort** = does not allow the headers to be sorted.

34. **notop** = does not display the top button or the total number of rows.

35. **number** = the number to be assigned to each SearchSortTable.  The default is 0.

36. **report** = the titles for the PDF and Excel reports, if a title is. not given.  If a title is given, it use the title over the report title.
An example would be:
```javascript
report="The PDF Report"
```

37. **resetIndexes** = reset the indexes back to their original value if true or if false it does not reset the indexes.

38. **scroll** = this will place the table in a scroll box that allows the table to be scrolled through.  With this prop a width and height option for the scroll box must be supplied.

39. **searchall** = the search choice will automatically default to All and it will search all columns not one particular column.

40. **searchstart** = indicates that the search item will only match those data items that start with the search item

41. **setTheFooter** = indicates that a new footer is being passed to the parent of SearchSortTable.  The function that is to be passed to is the setFooter function for the state variables.  Since the footer has changed due to a changing of columns, the footer in the parent must be changed to the new footer also.  The footer needs to have a many entries as the table array; otherwise, the drag and drop will not work.  See the section on Dragging and Drop.  This prop is only need if a footer prop is being used.  An example

```javascript
  let sortTable = [...];
  let theFooter = ['Totals', 123.45, 234.56, 345.67];

  const [table, setTable] = useState(sortTable);
  const [footer, setFooter] = useState(theFooter);
  ...
  <SearchSortTable 
    table={table}
    data={data}
    setTheTable={setTable}
    footer={footer}
    setTheFooter={setFooter}
    ...
  />
```

42. **setTheTable** = indicates that a new table is being passed to the parent of SearchSortTable.
The function that is to be passed to it is the setTable function for the state variables.  Since the table has changed due to a changing of columns, the table in the parent must be changed to the new table also.  See the section on Dragging and Drop.  An example:

```javascript
  let sortTable = [...];

  const [table, setTable] = useState(sortTable);
  ...
  <SearchSortTable 
    table={table}
    data={data}
    setTheTable={setTable}
    ...
  />
```

43. **sfbottom** = this will display the search and filter information at the bottom of the table instead of the top.

44. **showall** = shows all the items that are in the table either in a scroll box (must use the scroll prop) or not.  This will not limit the number of items in the table; therefore,
the search bar at the top of the screen will contain the search column, search item, and the All button.  If a search is done, it will place the item found at the top of the screen.  The All button will display all the items on the screen again.

45. **showtable** = this will show the table and headers even if there is no data to display.

46. **spinner** = causes a spinner to appear on the page until the data is finished loading into the search sort table.

47. **startEnd** = is a function that returns the current starting and ending positions in the data being displayed.  This is used in eachRowInTable function i is being used to generate a key.  The user will need to add start to it as in the key prop in the example above.  See examples.
An example would be:
```javascript
const [start, setStart] = useState(0);

const startEnd = (start, end) => {
  setStart(start);
}

<SearchSortTable startEnd={startEnd} />
```

48. **startingPos** = is a function that will return an array that contains the start of each control break table in the indexes.
An exmple would be:
```javascript
const [startPos, setStartPos] = useState([]);

const startingPosition = (value) => {
  setStartingPos(value);
}

<SearchSortTable startingPos={startingPosition} />
```

49. **title** = supplies a title to be displayed centered at the top of the table.

50. **titleSize** = 1 uses a h1 header, 2 uses a h2 header, 3 uses a h3 header, 4 uses a h4 header, 5 uses a h5 header, and 6 uses a h6 header, all other values use an h3 header.  If the titleSize prop is missing h3 will be used as the default.

51. **width** = the width of the scroll box only.

## CSS Files

The following CSS file will need to be imported into the file that uses this SearchSortTable component.  The import would be, if it is not be changed:

```javascript
import '../node_modules/simple-widgets/lib/sw-theme.css';
import '../node_modules/simple-widgets/lib/sw-table.css';
```

For more information on CSS files, see [Using CSS](./UsingCSS.md).

## sw-table.css

This is the CSS file that styles the SearchSortTable component.

The root and table.search_sort_table items are used by the SearchSortTable component to keep track of the hover colors that have been used and should not changed at all.

### Classes

1.  ***sw-sst_divStyle*** = the overall style of the Search Sort Table.  It defines the border, background, margins, and padding for the entire table.

```css
.sw-sst_divStyle {
  border: 2px solid black;
  border-radius: 10px;
  text-align: center;
  margin: 5px;
  padding: 10px;
  background-color: var(--theme_backgroundColor);  /* "#CCCC66" */
};
```

2.  ***sw-sst_noButtonStyle*** = the style for the top, page up, page down, and bottom buttons on the bottom right of the Search Sort Table.

```css
.sw-sst_noButtonStyle {
  margin: 10px;
  padding: 0px;
  border: none;
  background: none;
  font-weight: bold;
  color: black;
}
```

3.  ***sw-sst_marginStyle*** = the margin style for the dropdown followed by rows on the bottm of the Search Sort Table.

```css
.sw-sst_marginStyle {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 30px;
}
```

4.  ***sw-sst_noBorderStyle*** = the styling for the dropdown followed by rows on the bottm of the Search Sort Table.

```css
.sw-sst_noBorderStyle {
  margin: 10px;
  padding: 0px;
  border: none;
  background: none;
}
```

5.  ***sw-sst_tableStyle*** = the style for the table containing the data.

```css
.sw-sst_tableStyle {  /* The style for the table */
  margin: auto;
  border: 1px solid black;
}
```

6.  ***sw-sst_centerBoldStyle*** = the row style for the headers in the table.

```css
.sw-sst_centerBoldStyle {
  text-align: center;
  font-weight: bold;
  font-size: 20px;
}
```

7.  ***sw-sst_footerStyle*** = the style of the one line table footer containing possible totals for each column.

```css
.sw-sst_footerStyle {
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  border: 1px solid black;
}
```

8.  ***sw-sst_scrollStyle*** = the CSS styling for the scroll box.  This is only applied if scroll is a prop on the component.  This will also determine the height of the Search Sort Table.  This height can also be passed in as a prop and will override the value in the CSS.

```css
.sw-sst_scrollStyle {
  display: block;
  overflow: scroll;
  height: 500px;
  width: auto;
  border: 1px solid black;
  margin-left: auto;
  margin-right: auto;
}
```

9. ***sw-sst_searchStyle*** = the styling of the dropdown column search that is after the funnel.

```css
.sw-sst_searchStyle {
  margin: 5px;
}
```

10. ***sw-sst_footStyle*** = the style of the footer that contains the number of rows, top, bottom, previous, and next values.

```css
.sw-sst_footStyle {
  margin: 10px;
  text-align: right;
/*        position: sticky; */
  bottom: 0;
  z-index: 2;
  background-color: var(--theme_backgroundColor);
}
```

11. ***sw-sst_imageStyleFilter*** = the style of the filter funnel after it has been pressed.

```css
.sw-sst_imageStyleFilter {
  background-color: lightgreen;
}
```

12. ***sw-sst_imageStyleNormal*** = the style of the filter funnel when filtering has been turned on after checking the Filter On checkbox.

```css
.sw-sst_imageStyleNormal {
  background-color: aliceblue;
}
```

13. ***sw-sst_imageStyleDisable*** = the style of the filter funnel with filtering off (Filter On checkbox is not checked).

```css
.sw-sst_imageStyleDisable {
  background-color: var(--theme_disableButtonColor);
}
```

14. ***sw-sst_buttonStyle2*** = the styling of the sort buttons (up arrow, right arrow, and down arrow).

```css
.sw-sst_buttonStyle2 {
  border: none;
  background-color: var(--theme_backgroundColor);
}
```

15. ***sw-sst_headerStyle*** = the specific style of the table column headers.

```css
.sw-sst_headerStyle {
  position: sticky;
  flex-direction: column;
  top: 0;
  z-index: 2;
  border: 1px solid black;
  background-color: var(--theme_backgroundColor);
}
```

16. ***sw-sst_widthStyle*** = the styling for each of the filter boxes beneath the headers when filtering is on (Filter On checkbox is checked).

```css
.sw-sst_widthStyle {
  margin-bottom: 0px;
  padding-bottom: 0px;
  width: 99%;
  text-align: center;
}
```

17. ***sw-sst_titleStyle*** = the styling for the title if there is one.Format must be an object, similiar to the title size above.

```css
.sw-sst_titleStyle {
  color: black;
  background-color: var(--theme_backgroundColor);
}
```

18. ***sw-sst_buttonStyle*** = the button style of the Search button.

```css
.sw-sst_buttonStyle {
  margin: var(--theme_buttonMargin);
  border-radius: var(--theme_buttonRadius);
  color: var(--theme_buttonTextColor);
  width: var(--theme_buttonWidth);
  height: var(--theme_buttonHeight);
  font: var(--theme_buttonFont);
  font-weight: var(--theme_buttonFontWeight);
  font-size: var(--theme_buttonFontSize);
}
```

20. ***sw-sst_grayButtonBackground*** = the disable background color for the Search button.

```css
.sw-sst_grayButtonBackground {
  background-color: var(--theme_disableButtonColor);
}
```

21. ***sw-sst_normalButtonBackground*** = the normal background color for the Search button.

```css
.sw-sst_normalButtonBackground {
  background-color: var(--theme_buttonColor);
}
```

20. ***sw-sst_letterBackground*** = this is the background color for a selected letter in the Search Sort Table.  The letters are only used when the letters prop is used in the SearchSortTable component.

```css
.sw-sst_letterBackground {
  background-color: lightblue;
}
```

21. ***sw-sst_regBackground*** = this is the background color for an unselected letter in the Search Sort Table.  The letters are only used when the letters prop is used in the SearchSortTable component.

```css
.sw-sst_regBackground {
  background-color: var(--theme_backgroundColor);
}
```

22. ***sw-sst_oddRow*** = this is the background color for the odd numbered rows. To turn off row striping, redefine this class background-color: inherit;

```css
.sw-sst_oddRow {
  background-color: lightgray;
}
```

23. ***sw-sst_evenRow*** = this is the background color for the even numbered rows

```css
.sw-sst_evenRow {
  background-color: inherit;
}
```

24. ***sw-sst_dropDownDiv*** = this is the color and background color of the drop down for a column.

```css
.sw-sst_dropDownDiv {
   background-color: navy;
   color: white;
}
```

25. ***sw-sst_dropDownButton*** = the button style for the drop down for a column.

```css
.sw-sst_dropDownButton {
  background-color: navy;
  color: white;
  border: none;
  margin: 10px;
  font-size: 1.5em;
}
```

26. ***sw-sst_tableBold*** = the style for each control break header.

```css
.sw-sst_tableBold {
  font-weight: bold;
  margin-top: 15px;
  font-size: 1.5em;
}
```

27. ***sw-sst_headerColor*** = the color of the headers on the regular table or headers for the drop down column for all the control breaks.

```css
.sw-sst_headerColor {
  color: #0096FF;
}
```

28. ***sw-sst_dropDown_choice*** = the styling for the choice box in the drop down for a column.

```css
.sw-sst-dropDown_choice {
  margin-bottom: 10px;
}
```

29. ***sw-sst_dropButton*** = the styling for the Apply button on the drop down for a column.

```css
.sw-sst_dropButton {
  border-radius: 5px;
  color: black;
  background-color: gainsboro;
  margin-bottom: 10px;
}
```

30. ***sw-sst_tooTip*** = the styling for the tool tip that appears in the upper left corner of the drop down for a column.

```css
.sw-sst_toolTip {
  visibility: hidden;
  background-color: transparent;
  color: gainsboro;
  font-size: 0.75em;

  /* Position the tooltip */
  position: absolute; 
  z-index: 1; 
}
```

31. ***sw-sst_showToolTip*** = makes the tool tip visible when hovered over the button after a 1 second delay.

```css
.sw-sst_showToolTip:hover .sw-sst_toolTip {
  visibility: visible;
  animation: tooltipAnim 1s 1;
  opacity: 1;
}
```

32. ***sw-sst_top*** = forces the tool tip to the upper left corner of the drop down for a column.

```css
.sw-sst_top {
  top: 0;
  left: 0;
}
```

33. ***sw-sst_right_top_bot*** = postioning on the screen for the Reset button

```css
.sw-sst_right {
  text-align: right;
  float: right;
}
```

34. ***sw-sst_table*** = insures that there is a single border around table cells instead of a double border.

```css
.sw-sst_table {
  border-collapse: collapse;
  width: 100%;
}
```

35. ***sw-sst_bottom*** = insures that either the input text boxes or the choice boxes for the filtering are on the bottom of the header cell for that particular header.

```css
.sw-sst_bottom {
  vertical-align: bottom;
}

```

36. ***sw-sst_excelButtonStyle*** = the styling for the Excel Display button.

```css
.sw-sst_excelButtonStyle {
  margin: 20px;
  border-radius: 10px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 4px;
  padding-bottom: 4px;
  color: var(--sw-theme_buttonTextColor);
  background-color: var(--sw-theme_buttonColor);
  width: 270px;
  height: var(--sw-theme_buttonHeight);
  font: var(--sw-theme_buttonFont);
  font-weight: bold;
  text-decoration: none;
}
```

***These are some useful CSS classes that can be used in the eachRowInTable functions:***

37. ***sw-sst_full*** = puts a single border around a cell in the table.

```css
.sw-sst_body_full {
  border: 1px solid black;
}

```

38. ***sw-sst_body_col*** = puts a border between each column, with no border on the rows.

```css
.sw-sst_body_col {
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-top: none;
  border-bottom: none;
}
```

39. ***sw-sst_body_row*** = puts a border between each row, with no border on the columns.

```css
.sw_sst_body_row {
  border-left: none;
  border-right: none;
  border-top: 1px solid black;
  border-bottom: 1px solid black: none;
}
```

40. ***sw-sst_stripe*** = this will stripe the table (alternating between the background color and gainsboro).

```css
.sw-sst_stripe_even:nth-child(even) {
  background-color: gainsboro;
}
```

41. **sw-sst_left** = this will left justify the data in a cell in a table

```css
.sw-sst_left {
  text-align: left;
}
```

42. **sw-sst_center** = this will center the data in a cell in a table

```css
.sw-sst_center {
  text-align: center;
}
```

43. **sw-sst_right** = this will right justify the data in a cell in a table

```css
.sw-sst_right {
  text-align: right;
}

```




### **Example 1:**

Contains a footer for the totals in the table.  The filter and the search are at the bottom of the table:
```javascript
const RANGE = 50;

let data = [
  ...
];

const sortExample = (props) => {
  const [error, setError] = useState(false);
  const [start, setStart] = useState(0);
  const [indexing, setIndexing] = useState([]);

  const startEnd = (start, end) => {
      setStart(start);
  }

  const getIndexes = (indexing) => {
      setIndexing(indexing);
  }

  const table = [
      { header: 'CAN',            name: 'CAN',           search: true,  sort: true },
      { header: 'Stock Total',    name: 'STOCK_TOTAL',   search: true,  sort: true },
      { header: 'Gas Cylinder',   name: 'GAS_CYLINDER',  search: true,  sort: true },
      { header: 'Total for CAN',  name: 'TOTAL',         search: true,  sort: true },
  ];

  let footer = [
      'Totals',
      totalStock,
      totalRental,
      totalCAN,
  ];

  <SearchSortTable data={data}
                      table={table}
                      MAX_ITEMS={RANGE}
                      eachRowInTable={eachRowInTable}
                      startEnd={startEnd}
                      indexing={getIndexes}
                      error={error}
                      title="Finance CSV"
                      footer={footer}
                      sfbottom
                      scroll
                      height="675px"
                      hover />

  const eachRowInTable = (row, i) => {
      const key = 'row_' + i + start; // The key for the row
      let pos = indexing[i]

      return (
        <tr key={`row_${i}_${start}`} onClick={() => display(dataTest[pos])}> 
          { table.map((col, idx) => (
              <td key={`${col.header}_${idx}_${i}`} className={col.align} 
                      hidden={hideCol[idx]}>
                  row[col.name] }
              </td>
          ))}
        </tr>
      )
  }

  const editRow = (index) => {
      ...
  }
}
```

### **Example 2 (SearchSortTable only)**
```javascript
<SearchSortTable data={data}
                    table={table}
                    MAX_ITEMS={MAX_ITEMS}
                    eachRowInTable={eachRowInTable}
                    startEnd={startEnd}
                    indexing={getIndexes}
                    error={error}
                    letters
                    nolower
                    scroll
                    height="675px"
                    hover />
```

In this example, uppercase letters and numbers will appear in the search area of the table.  There will be no lower case letters, because of nolower.  The letters will allow you to quickly go to all items that start with that letter in the search column.

The user can also hover over a row and it will be highlighted in cyan.  To detect that the row being hovered on has been clicked, the user should have an onClick event handler on the tr in eachRowInTable.  If another color besides cyan is desired, the hoverColor prop should be used.  An example would be hoverColor="yellow"

### **Example 3 (SearchSortTable only)**
```javascript
<SearchSortTable data={pickData}
                table={pickTable}
                MAX_ITEMS="10"
                eachRowInTable={eachRowInPickTable}
                startEnd={startEndPick}
                indexing={getIndexes}
                error={error}
                title="Picks"
                scroll
                sfbottom
                hover />
```

In this example, the search and filter information will be placed at the bottom of the table instead of the top.

A title of Pick will be displayed centered at the top of the table.  If a different size other than an h3 header is desired, use the titleSize prop.  A title size of 1 uses the h1 header and a size of 2 uses the h2 header.  If you want to style the title, in an object place the styling information and assign it to the prop titleStyle.

### **Example 4**
```javascript
<SearchSortTable data={data}
                    table={table}
                    MAX_ITEMS={MAX_ITEMS}
                    eachRowInTable={eachRowInTable}
                    startEnd={startEnd}
                    indexing={getIndexes}
                    dateTable={dateTable}
                    error = {error}
                    scroll
                    height="500px"
                    hover />
...
    let table = [   // Used to build the SearchSortTable
        { header: 'Stock Number',       name: 'STOCK_NUM',          search: true,   sort: true  },
        { header: 'Description',        name: 'DESCRIPTION',        search: true,   sort: true  },
        { header: 'How Many',           name: 'QUANTITY',           search: true,   sort: true  },
        { header: 'Cost',               name: 'UNIT_COST',          search: true,   sort: true  },
        { header: 'Due Date',           name: 'DATE_DUE',           search: true,   sort: true, 
              dataDate: 'YYYY-MM-DD', filterDate: 'MM/DD/YYYY', sortDate: 'YYYY-MM-DD'          },
        { header: 'Rcvd Date',          name: 'RCVD_DATE',          search: true,   sort: true,  },
              dataDate: 'YYYY-MM-DD', filterDate: 'MM/DD/YYYY', sortDate: 'YYYY-MM-DD'          },
    ];
```

In the above example is the dateTable prop.  This is used when the actual date in the data is in one format and the date to be entered on the filter is to be entered in another format.  The index indicates the position from zero in the table.  The data indicates the format of the actual date in the table (even though it more be displayed differently).  The filter indicates how the user is to enter the date in a filter.  The actual data date and filter date will be converted to a common date and then compared.

### **Example 5***
This example contains the drop down for a column and how to handle the hidden columns in the eachRowInTable function:

```javascript
const RANGE = 50;

let data = [
  ...
];

const sortExample = (props) => {
  const [error, setError] = useState(false);
  const [start, setStart] = useState(0);
  const [indexing, setIndexing] = useState([]);
  const [hideCols, setHideCols] = useState([]);

  const startEnd = (start, end) => => {
      setStart(start);
  }

  const getIndexes = (indexing) => {
      setIndexing(indexing);
  }

  const hideTheColumn = (columns) => {
      setHideCols(columns)
  }

  const table = [
      { header: 'CAN',            name: 'CAN',           search: true,  sort: true, dropDown: true },
      { header: 'Stock Total',    name: 'STOCK_TOTAL',   search: true,  sort: true, dropDown: true },
      { header: 'Gas Cylinder',   name: 'GAS_CYLINDER',  search: true,  sort: true, dropDown: true },
      { header: 'Total for CAN',  name: 'TOTAL',         search: true,  sort: true, dropDown: true },
  ];

  <SearchSortTable data={data}
                      table={table}
                      MAX_ITEMS={RANGE}
                      eachRowInTable={eachRowInTable}
                      startEnd={startEnd}
                      indexing={getIndexes}
                      hidden={hideTheColumn}
                      error={error}
                      title="Finance CSV"
                      scroll
                      height="675px"
                      choice
                      hover />

  const eachRowInTable = (row, i) => {
      const key = 'row_' + i + start; // The key for the row
      let pos = indexing[i];

        return (
          <tr key={`row_${i}_${start}`} onClick={() => editRow(data[pos])}> 
            { table.map((col, idx) => (
                <td key={`${col.header}_${idx}_${i}`} className={col.align} 
                        hidden={hideCol[idx]}>
                    row[col.name] }
                </td>
            ))}
          </tr>
        )
  }

  const editRow = (data) => {
      ...
  }
}
```

In this example, there will be a drop down when the user left clicks on the column header, because of the dropDown true being in every header.  If the dropDown is false in any definition in the table, there will not be a drop down for that column.  The hideTheColumn function gets called by SearchSortTable and returns the columns that are supposed to be hidden or shown.  Each element in the columns array corresponds to a column in the table.  If the element is true, the column is hidden and if it false the column is displayed.  To actually hide the columns, the hidden attribute (props) must be placed in the td.  Every cell should have one even if the dropDown is false. The hidden prop must be added to the SearchSortTable component to pass back the hidden array.  The choice prop on the SearchSortTable component indicates that
there will be choice boxes on the filter input.


### **Example 6***
This example contains the drag and drop for a column and the new format in the eachRowInTable function:

```javascript
const RANGE = 50;

let data = [
  ...
];

const sortExample = (props) => {
  const sstable = [
      { header: 'CAN',            name: 'CAN',           search: true,  sort: true, dropDown: true, drag: true },
      { header: 'Stock Total',    name: 'STOCK_TOTAL',   search: true,  sort: true, dropDown: true, drag: true },
      { header: 'Gas Cylinder',   name: 'GAS_CYLINDER',  search: true,  sort: true, dropDown: true,
      drag: true },
      { header: 'Total for CAN',  name: 'TOTAL',         search: true,  sort: true, dropDown: true, drag: true },
  ];

  const thefooter = [
    'Totals', '', '', 1234.56];
  ]

  const [error, setError] = useState(false);
  const [start, setStart] = useState(0);
  const [indexing, setIndexing] = useState([]);
  const [hideCols, setHideCols] = useState([]);
  const [table, setTable] = useState(sstable);
  const [footer, setFooter] = useState(theFooter);

  const startEnd = (start, end) => {
      setStart(start);
  }

  const getIndexes = (indexing) => {
      setIndexing(indexing);
  }

  const hideTheColumn = (columns) => {
      setHideCols(columns)
  }

  <SearchSortTable  data={data}
                    table={table}
                    MAX_ITEMS={RANGE}
                    eachRowInTable={eachRowInTable}
                    startEnd={startEnd}
                    indexing={getIndexes}
                    hidden={hideTheColumn}
                    setTheTable={setTable}
                    setTheFooter={setFooter}
                    error={error}
                    title="Finance CSV"
                    scroll
                    height="675px"
                    choice
                    hover />

  const eachRowInTable = (row, i) => {
      const key = 'row_' + i + start; // The key for the row
      let pos = indexing[i];

      return (
        <tr key={`row_${i}_${start}`} className="sw-sst_stripe" onClick={() => editRow(data[pos])}> 
          { table.map((col, idx) => (
              <td key={`${col.header}_${idx}_${i}`} className={"sw-sst_body_full " + col.align} 
                      hidden={hideCol[idx]}>
                  row[col.name] }
              </td>
          ))}
        </tr>
      )
  }

  const editRow = (data) => {
      ...
  }
}
```

In this example, columns can be dragged to change their position in the table.  The drag: true in the table allows that column to be dragged.  If the drag is false the column can not be dragged; however, it can be dragged onto.  The setTable and setFooter will return the changed table and footer.  The footer has to have the same number of elements as the table.  The table has 5 elemenst and so does the footer.  Since you can drag columns it is using the new eachRowInTable (for more information see the eachRowInTable prop).  The table will be striped because of the sw-sst_stripe className.  The cells of the table will have black border because of the sw-sst_body_full className.  The hidden prop must be added to the SearchSortTable component to pass back the hidden array.  The choice prop on the SearchSortTable component indicates that
there will be choice boxes on the filter input.
