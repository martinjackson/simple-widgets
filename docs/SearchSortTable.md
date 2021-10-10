# **Search Sort Table**

This will allow a user to display a limited number of items in a table.  The user can search for an item by typing in the starting value of an item in the table.  The user can also use the Top, Bottom, Previous, and Next buttons to display the next set of values in the table.

The user can also click on a column and the column will be sorted in either ascending or descending order.  The first type a column is clicked it will be sorted in ascending order.  After that it will alternate between descending and ascending order, respectively.

The user can also filter the data that is to be displayed.

### **Props**
In order for the user to use the Search Sort Table, they must pass the following props:

1.  **data** = the data to be displayed which is an array of objects that contains a header and name fields.
2.  **table** = an object that contains the headers for each column in the table, the field name for each item in the data array, whether the column can be searched or not, and whether the column could be sorted or not.
The header field is the name of the header for that column of the table.  The name is field name in the data object passed as the data prop.  The search field name indicates whether that column can be searched or not.  The sort field indicates whether the column can be sorted or not.  
Other possible fields for a row in the table are: dataDate, filterDate, and sortDate.  The dataDate field indicates the format of a date field in the data.  The filterDate field indicates the format of the date on the filter field in the display table.  The sort date field is the format of the date field to be sorted.  The possible date formats are:
  a. MM/DD/YYYY
  b. MM-DD-YYYY
  c. YYYY-MM-DD (default)
  d. MM/DD/YYYY HH:MM:SS
  e. MM-DD-YYYY HH:MM:SS
  f. YYYY-MM-DD HH:MM:SS (default for date with time)
  g. YYYY-MM-DDTHH:MM:SS.SSS
  
   An example row in the table for a date field might look like:
   ```javascript
        { header: 'Date', name: 'DATE', sort: true, search: true, dataDate: 'YYYY-MM-DD', filterDate: 'MM/DD/YYYY', sortDate: 'YYYY-MM-DD' }
   ```
        
  In the above example, the header in the display table will be Date.  The name of the field in the data will be DATE.  You can sort and search on the field.  The date in the   data will be in the form of YYYY-MM-DD.  The date in the filter field on the display table will be in the form of MM/DD/YYYY.  If you have the dateField you must also have the filterData field and vice a versa.  The sortDate field indicates how the data is in the data, which is YYYY-MM-DD.  Since this is the default, this field can be left off.  

  Both the data date and filter date are both converted to either YYYY-MM-DD or YYYY-DD-MMTHH:MM:SS for comparision.  If the data or filter fields do not match one of the above formats, it retains its current format.
  
3.  **eachRowInTable** = a function that indicates how each cell in a row will be displayed.

### **Example**
The following is a code example:

```javascript
        const MAX_ITEMS = 2;

        const [start, setStart] = useState(0);
        const [indexing, setIndexing] = useState([]);

        const startEnd (start, end) {
            setStart(start);
        }
        const getIndexes (indexing) {
            setIndexing(indexing);
        }

        let data = [
            { ORDER_NUM: 10, ITEM: 'Hammer',        ON_HAND: 20, COST: 15.21 },
            { ORDER_NUM: 11, ITEM: 'Screwdriver',   ON_HAND: 13, COST: 16.43 },
            { ORDER_NUM: 22, ITEM: 'Pliers',        ON_HAND: 24, COST: 17.54 },
            { ORDER_NUM: 23, ITEM: 'Wrench',        ON_HAND: 05, COST: 18.56 },
            { ORDER_NUM: 24, ITEM: 'Saw',           ON_HAND: 11, COST: 14.78 },
        ];

        let table = [
            { header: 'Order Number',   name: 'ORDER_NUM',  search: true,   sort: true  },
            { header: 'Description',    name: 'ITEM',       search: true,   sort: true  },
            { header: 'On Hand Count',  name: 'ON_HAND',    search: true,   sort: true  },
            { header: 'Cost',           name: 'COST',       search: false,  sort: false },
        ];

        function eachRowInTable(row, i) {
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
                         indexing={getIndexes} />
```

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
2.  Enter values to filter on in each of the input boxes.  For dates there are three possible ways to filter: MM/DD/YYYY, MM/YYYY, or YYYY if using the MM/DD/YYYY for the filter date on the table entry in number 2 above.  You can use MM-DD-YYYY, MM-YYYY, or YYYY if using MM-DD-YYYY, etc.
3.  Press the Funnel to do the filtering.
4.  The user can add other fields to refine the filtering and press the Funnel.
5.  If you want to change values to start a new filtering process, the user first should uncheck and recheck the Filter On.  This will rest the display table to the original values.  The old filter values will remain in the input boxes.  The user should change the ones desired and press the Funnel.


### **Other props:**

1.  **borderStyle** = the style for each cell in the table.  The default object is:
```javascript
    let borderStyle = {
        border: "1px solid black",
    };
```

2.  **buttonStyle** = the style of the buttons.  The default object is:
```javascript
    let buttonStyle = {
        margin: "10px",
        borderRadius: "10px",
        color: "white",
        backgroundColor: "blue",
        width: "100px",
        height: "30px",
        font: "Times New Roman",
        fontWeight: "bold",
    }
```

3. **dateTable** = indicates how a data date and filter date are formatted, so that they can be converted to
the YYYY-MM-DD format.  The possible formats that are allowed are:
    MM/DD/YYYY
    MM-DD-YYYY
    MM/DD/YYYY MM:HH:SS
    MM-DD-YYYY MM:HH:SS
    YYYY-MM-DDTHH:MM:SS.SSS

Both the data date and filter date are both converted to either YYYY-MM-DD or YYYY-DD-MMTHH:MM:SS for comparision.  The dateTable is an array containing objects with the index, data, and filter fields.  The index is the index in the table array above.  The data is the format of the data date.  The filter is the format of the filter date.  If the data or filter fields do not match one of the above formats, it retains its current format.  The following is an example:
```javascript
dateTable=[
    { index: 2, date: 'YYYY-MM-DD', filter: 'MM/DD/YYYY' }
]
```

The index is 2, which indicates the third field in the table contains a date field.  The data field contains the YYYY-MM-DD format which is not one of the above formats; therefore, the data part is not
changed.  The filter field contains the MM/DD/YYYY format.  Therefore, the date value of the filter will be converted to YYYY-MM-DD from MM/DD/YYYY.

If there are no dates in the table, the dateTable can be left out; therefore, it is optional.

4.  **divStyle** = the style that goes around the search bar and table.  The default object is:
```javascript
    let divStyle = {
        border: "2px solid black",
        borderRadius: "10px",
        textAlign: "center",
        margin: "5px",
        padding: "10px",
        backgroundColor: "aliceblue",
    };
```

5. **footer** = the last row that is to be displayed in a table.  The footer is an array of items that are displayed as a footer in a table.  The footer could be used to contain the totals for the table.  A sample footer might be:
```javascript
    let footer = [
        'Totals', 
        totalStock, 
        totalRental, 
        totalCAN,
    ];
```

6. **footerStyle** = the style of the table footer for the totals.  The default object is:
```javascript
    let footerStyle = {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "20px",
        border: "1px solid black",
    }
```

7. **footStyle** = the style of the footer that contains the number of rows, top, bottom, previous, and next values..  The default object is
```javascript
    let footStyle = {
        margin: "10px",
        textAlign: "right",
        position: "sticky",
        bottom: 0,
        zIndex: 2,
        backgroundColor: aliceblue,
    }
```

8. **headerStyle** = the style of the table headers.  The default object is
```javascript
        let headerStyle = {
            position: "sticky",
            top: 0,
            zIndex: 2,
            border: "1px solid black",
            backgroundColor: aliceblue,
        }
```

9.  **headerTableStyle** = the style for the headers in the table.  The default object is:
```javascript
    let headerBoldStyle = {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "20px"
    }
```

10.  **height** = the height of the scroll box only.

11. **hover** = indicates when a row in the table is hovered over it will change to the hoverColor or cyan if no hover color is given.  Cyan is the default hover color.  If you want to detect that the hover over row was clicked, the user should have an onClick event in the tr in the eachRowInTable function.

12. **hoverColor** = is the color that is displayed when a row in the table is hovered over.  If a value is not given, it will default to cyan.  An example would be:
```javascript
hoverColor="yellow"
```

13. **letters** = will display upper case letters, lower case letters, and digits below the search bar.  
  a.   To use the letters option:
    1.  Select a column header from the drop down menu.
    2.  Select a letter or digit.
    3.  The data will be sorted on that column header.  It will then search the data for first letter or digit that matches the one selected.  For letters, this option is the best.  For example, if A is selected, then all items in the column header that begin with A are listed in the table.  However, if digits are used, for example suppose 5 is selected, it sort the table on that column header.  If the data contains 5, 11, 51, 123,and 532.  It will only list the 5.
  b.    Other options with letters:
    1.  **noupper** = does not display the upper case letters
    2.  **nolower** = does not display the lower case letters
    3.  **nodigit** = does not display the digits

14.  **MAX_ITEMS** = the maximum number of rows that will be displayed in the table.

15. **nobottom** = does not display the bottom button.

16. **nocontsearch** = indicates that if the search button is pressed again, it will not find the next item that matches the search item.

17. **nodisplay** = this will not display what rows are being displayed or the total number of rows.

18. **nofilter** = this will not display the Filter On check box and the filter button

19. **nofooter** = this will not display the top, previous, next, bottom, what rows are being displayed, 
20. **nonext** = does not display the next button.

21. **noprevious** = does not display the previous button.

22. **nosearch** = does not display the header drop down, text box, and Search button.

23. **nosort** = does not allow the headers to be sorted.

24. **notop** = does not display the top button or the total number of rows.

25.  **scroll** = this will place the table in a scroll box that allows the table to be scrolled through.  With this prop a width and height option for the scroll box must be supplied.

26.  **scrollStyle** = the CSS styling for the scroll box.  The default object is:
```javascript
    let scrollStyle = {
        display: "block",
        overflow: "scroll",
        height: "auto",
        width: "auto",
        border: "1px solid black",
        marginLeft: "auto",
        marginRight: "auto"
    }
```

27. **searchstart** = indicates that the search item will only match those data items that start with the search item

28. **sfbottom** = this will display the search and filter information at the bottom of the table instead of the top.

29.  **ShowAll** = shows all the items that are in the table either in a scroll box (must use the scroll prop) or not.  This will not limit the number of items in the table; therefore,
the search bar at the top of the screen will contain the search column, search item, and the All button.  If a search is done, it will place the item found at the top of the screen.  The All button will display all the items on the screen again.

30. **showTable** = this will show the table and headers even if there is no data to display.

31.  **startEnd** = is a function that returns the current starting and ending positions in the data being displayed.  This is used in eachRowInTable function i is being used to generate a key.  The user will need to add start to it as in the key prop in the example above.  See examples.

32. **indexing** = is a function that returns the indexes into the current data being displayed.  This is used in eachRowInTable function where the user needs to actually access the actual data.  The user will need to add the indexing as a state variable.  See examples.

33. **allIndexes** = is a function that returns all the indexes for the entire data set, not just the ones being displayed as in indexing (32).  The format of the function is the same as indexing.

34.  **tableStyle** = the style for the overall table itself.  The default object is:
```javascript
    let tableStyle = {
        margin: "auto",
        border: "1px solid black",
    }
```

35. **title** = supplies a title to be displayed centered at the top of the table.

36. **titleSize** = 1 uses a h1 header, 2 uses a h2 header, all other values use an h3 header.

37. **titleStyle** = the styling for the title.  There is no default style.  Format must be an object, similiar to the styles above.

38.  **width** = the width of the scroll box only.

### **Example 1:**

Contains a footer for the totals in the table.  The filter and the search are at the bottom of the table:
```javascript
const RANGE = 50;

const [error, setError] = useState(false);
const [start, setStart] = useState(0);
const [indexing, setIndexing] = useState([]);

function startEnd (start, end) {
    setStart(start);
}

function getIndexes(indexing) {
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

function eachRowInTable (row, i) {
    const key = 'row_' + i + start; // The key for the row

    const tableCellStyle2 = {  // The style for each cell in the table
        padding: "5px",
        textAlign: "left",
        border: "1px solid black",
    };

    let pos = indexing[i]
    
    return (    // Render the row (action)
        <tr key={key} onClick={() => editRow (pos)}>
            <td style={tableCellStyle}>{row.CAN}</td>
            <td style={tableCellStyle}>{row.STOCK_TOTAL}</td>
            <td style={tableCellStyle}>{row.GAS_CYLINDER_RENTAL_TOTAL}</td>
            <td style={tableCellStyle}>{row.TOTAL}</td>
        </tr>
    )
}

function editRow(index) {
    ...
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
        { header: 'Due Date',           name: 'DATE_DUE',           search: true,   sort: true  },
        { header: 'Rcvd Date',          name: 'RCVD_DATE',          search: true,   sort: true  },
    ];

    let dateTable = [
        { index: 4, data: 'YYYY-MM-DD', filter: 'MM/DD/YYYY' },
        { index: 5, data: 'YYYY-MM-DD', filter: 'MM/DD/YYYY'}
    ];
```

In the above example is the dateTable prop.  This is used when the actual date in the data is in one format and the date to be entered on the filter is to be entered in another format.  The index indicates the position from zero in the table.  The data indicates the format of the actual date in the table (even though it more be displayed differently).  The filter indicates how the user is to enter the date in a filter.  The actual data date and filter date will be converted to a common date and then compared.
