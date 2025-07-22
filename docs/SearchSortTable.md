# **Search Sort Table**

This will allow a user to display a limited number of items in a table.  The user can search for an item by typing in the starting value of an item in the table.  The user can also use the Top, Bottom, Previous, and Next buttons to display the next set of values in the table.

The user can also click on a column and the column will be sorted in either ascending or descending order.  The first type a column is clicked it will be sorted in ascending order.  After that it will alternate between descending and ascending order, respectively.

The user can also filter the data that is to be displayed.  They can also select the values to filter on through a choice box.  The user can also list out a range of dates.

The user can hide columns, and do control breaks on columns.  The user can do automatic totaling of control breaks and final totals.

The user can drag and drop columns.

The user can select an item in the table.

The user can align whether the columns can be left justified, centered, or right justified.

The user can do automatic totaling a the control break level or the final totals.

The user can print out tables in a PDF format or in an Excel spreadsheet.

### **Props**
In order for the user to use the Search Sort Table, they must pass the following props:

1.  **data** = the data to be displayed which is an array of objects that contains a header and name fields.
2.  **table** = an object that contains the headers for each column in the table, the field name for each item in the data array, whether the column can be searched or not, and whether the column could be sorted or not.
The header field is the name of the header for that column of the table.  The name is field name in the data object passed as the data prop.  The search field name indicates whether that column can be searched or not.  The sort field indicates whether the column can be sorted or not.  

All the possible field values for the table are:

  - align             how to align the value in the cell.  See the Alignment in a Table Cell section.
  - decimal           indicates the number of digits right of the decimal point.  This should only be used when the field contains a floating point number.
  - drag              indicates that the column can be dragged to another area of the table.
  - dataDate          the format of date of the data comming in for the column. See below.
  - dropDown          indicates that the dropDown menu is available or not
  - header            the header for that column of the table
  - headerAlign       the alignment for the header.  See the Alignment in a Table Cell section.
  - filterDate        the format of date for dates that are to be filtered in this column. See below.
  - filterdaterange   indicates whether the date column for the filter should be a range of dates.  Some examples are: Last 2 years, Last Year, Last 6 months, etc.
  - name              the name of the column in the data object for the table
  - norepeat          indicates that is the previous value for the column is the same as the current column, the current column will be blank.  For control breaks, this value will be present for the first row of the control break.  An example, would be norepeat: true or false.
  - pdfCol            the alignment for the PDF column.  See the Alignment in a Table Cell section.
  - search            indicates whether this column can be searched or not
  - searchDate        the format of the date for dates that are to be searched in this column.  See below.
  - sort              indicates that the column can be sorted.
  - sortDate          the format of the date for dates that are to be sorted in this column.  See below.
  - type              the type of data (string or number) that the column is going to contain.  This is rarely used.

All the above values are described below.

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

   The type field indicates the type of data that the field is holding.  The values can be string or number.  This is the type of aggregation that can be done on that
   field.  String fields can only do count, distinct count, minimum, and maximum aggregations.  Number fields can do all that the string fields can do along with summation, average, and median aggregations.  If the type field is left off, the system will try to determine the type.  This field is rarely used.

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

   The headerAlign specifies how the header will be displayed in the column.  The headerAlign specifies whether the header will left justified, centered, or right justified.  The values are 'left', 'center', 'right', or any CSS class.  The default value is center.

   The align specifies how the data will be displayed in the column.  The align specifies whether the data will left justified, centered, or right justified.  The values are left, leftbold, center, centerbold, rightbold, number, date, datebold, dateleft, dateleftbold, dateright, daterightbold, money, moneybold, moneyleft, moneyleftbold, moneyright, moneyrightbold, or any CSS class.  See the Alignment in a Table Cell section.

   An example of the headerAlign and align:

  ```js
      { header: 'City',  name: 'CITY',  sort: true, search: true, align: 'left' },
      { header: 'State', name: 'STATE', sort: true, search: true, headerAlign: 'right' }
  ```

   In the above example, the City column values will be left aligned.  The State column will have its header aligned to the right.

   The filterdaterange specifies that there should be a date range listed in the ChoiceText box.  Therefore, the filter will check to see if the date in the column is within the selected range.  If this option is used the field should contain a date for that column and the choice props must be used.  If this option is not specified and choice is used, all the dates in that column will be listed in the Choice box.
   The default for this option will be false.  The list of ranges are:

    Last Year, Last 2 Years, Last 5 Years, Last 7 Years, Last 10 Years
    Last Month
    Last Week
    Last Day, Last 2 Days
    Last Hour, Last 2 Hours, Last 12 Hours

   An example of filterdaterange:

  ```js
      { header: 'Date',  name: 'DATE', sort: true, search: true, filterdatarange: true },
  ```

  In the above example, in the filter section under the Date column will be the list of ranges.  It will filter the dates within that range.

  The decimal field should only be used for floating point numbers.  It indicates the number of decimal places right of the decimal point.  The decimal is only valid when the eachRowInTable function uses the default or with the hasOwnPropert(props, decimal) entry found in the examples in the eachRowInTable, which is below (see the eachRowInTable prop).  An example of a table entry might be:

  ```javascript
  let table = [
    ...
    {header: 'Amount', name: 'AMOUNT', search: true, sort: false, decimal: 2 },
    ...
  ];
  ```

  In the above example it is assumed that amount is a floating point number.  The decimal: 2, indicates that only 2 digits will be display right of the decimal point.

   The pdfCol specifies the alignment of a PDF column if PDF's are allowed to be generated.  The values for the pdfCol are:
    - left              this will left justify the data in the column
    - leftbold          this will left justify and bold the data in the column
    - right             this will right justify the data in the column
    - rightbold         this will right justify and bold the data in the column
    - center            this will center the data in the column
    - centerbold        this will center and bold the data in the column
    - datetime          this will convert the date in time in the format of 2025-01-23T21:22:20.000Z to a format of 01/23/2025 21:22:20 in the center of the cell
    - datetimebold      this will convert the date in time in the format of 2025-01-23T21:22:20.000Z to a format of 01/23/2025 21:22:20 in the center of the cell and bolded
    - datetimeleft      this will convert the date in time in the format of 2025-01-23T21:22:20.000Z to a format of 01/23/2025 21:22:20 and left justified
    - datetimeleftbold  this will convert the date in time in the format of 2025-01-23T21:22:20.000Z to a format of 01/23/2025 21:22:20,left justified, and bolded
    - datetimeright     this will convert the date in time in the format of 2025-01-23T21:22:20.000Z to a format of 01/23/2025 21:22:20 and right justified
    - datetimerightbold this will convert the date in time in the format of 2025-01-23T21:22:20.000Z to a format of 01/23/2025 21:22:20, right justified, and bolded
    - date              this will convert the date to the MM/DD/YYYY format and center the date
    - datebold          this will convert the date to the MM/DD/YYYY format, center and bold the date
    - dateleft          this will convert the date to the MM/DD/YYYY format and left justify the date
    - dateleftbold      this will convert the date to the MM/DD/YYYY format, left justify, and bold the date
    - dateright         this will convert the date to the MM/DD/YYYY format and right justify the date
    - daterightbold     this will convert the date to the MM/DD/YYYY format, right justify, and bold the date
    - money             this will convert the number into a dollar amount with the format of  \$DD,DDD.DD 
    and will right justify the money data
    - moneybold         this will convert the number into a dollar amount with the format of \$DD,DDD.DD, will right justify, and bold the money data
    - moneyleft         this will convert the number into a dollar amount with the format of \$DD,DDD.DD and will left justify the money data
    - moneyleftbold     this will convert the number into a dollar amount with the format of \$DD,DDD.DD, will left justify, and bold the money data
    - moneycenter       this will convert the number into a dollar amount with the format of \$DD,DDD.DD and will center the money data
    - moneycenterbold   this will convert the number into a dollar amount with the format of \$DD,DDD.DD, will center, and bold the money data

   If the date or date and time is already in the correct format, use left, right, or center.  If you do not supply a pdfCol, it will left justify the value for that column.

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

3.  **eachRowInTable** = (read below for the Latest Format) a function that indicates how each cell in a row will be displayed.  The function will build a row in the search sort table.  The function is passed a row in the table that needs to be put into the HTML table row format.  If hover props is used, the indexing table and onClick on the tr will need to be added.  The following example is with out the hover props being used:

# Original Format (still works if not dragging)
```javascript
          const eachRowInTable = (row, i) => {
              let key = 'row_' + i + start;
              return (
                  <tr key={key} onClick={() => transfer(row)}>
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

# Second Format (must use if using dragging)
```javascript
    import { getAlignment } from 'simple-widgets';
    ...
    const eachRowInTable = (row, i) => {
        const align = getAlignment(col.align);
        return (
          <tr key={`row_${i}_${start}`}> 
            { table.map((col, idx) => (
                <td key={`${col.header}_${idx}_${i}`} className={getAlignment(col.align)} 
                        hidden={hideCol[idx]}>
                  {   (col.align.indexOf('money') !== -1) ? formatMoney(row[col.name]) : 
                      (col.align.indexOf('date')  !== -1) ? convertDate(row[col.name]) :
                      (hasOwnProperty(props, 'decimal') === true) ? row[col.name].toFixed(props.decimal) :
                          row[col.name] 
                  }
                </td>
            ))}
          </tr>
        )
    }
```

In the above example, the row parameter is row in the table to be displayed.  The i is the row number being processed and is only used if the hover prop is used.  The key will make every row in the table unique; otherwise, you will get a warning.  The <tr> and <td> define the rows and columns respectively.  The table.map section goes through each column in the table and prints out the value in that column with row[col.name].  The col.name is the name part in the object for a column in the table.  If the HTML is not returned, nothing will be displayed.  If the align is used for that entry in the table and the word money appears in the align, the value will be formated as money.  If the align is used for that entry in the table and the word date appears in the align, the value will be formated as date. This will also need the indexing prop on the <SearchSortTable> (see the startEnd prop in the props section).  There is a full example below.

# Latest Format

If your eachRowInTable function is exactly like the one above and you don't want to type it.  With this format you will not need the indexes, startEnd, and hidden props.  Use the following in the SearchSortTable:

```javascript
  <SearchSortTable>
    data=...
    table=...
    eachRowInTable="default"
  </SearchSortTable>
```

In the above example, it will automatically generate the rows and columns in the table based on the table prop.  The user will not be able to use the transfer prop with the default; therefore, the hover prop is unecessary.

```javascript
  const transfer = (data) => {
    setName(data.NAME);
  }

  <SearchSortTable>
    data=...
    table=...
    eachRowInTable="defaultTransfer"
    transfer={transfer}
    hover
  </SearchSortTable>
```

In the above example, it will automatically generate the rows and columns in the table based on the table prop.  The defaultTransfer indicates that when a row is clicked on (highlighter row do to the hover prop), the function in the transfer prop will be executed.  You will also want the hover prop.

### **Examples with all three formats**

### **Examples (using the original format)**
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
              { header: 'Cost',           name: 'COST',       search: false,  sort: false, dropDown: true, align: 'money' },
          ];

          const eachRowInTable = (row, i) => {
              return (
                  <tr key={key}>
                      <td>{row.ORDER_NUM}</td>
                      <td>{row.ITEM}</td>
                      <td>{row.ON_HAND}</td>
                      <td>{formatMoney(row.COST)}</td>
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

### **Examples (using the second format)**
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
                      <td key={`${col.header}_${idx}_${i}`} className={getAlignment(col.align)} 
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

### ***Creating Specialized Table Fields for the second eachRowInTable format

The user can create their own field entries in the table prop to be used in the eachRowInTable.  For example:

```javascript
        const sortExample = (props) => {
          let tableTest = [
              { header: 'Order Number',   name: 'ORDER_NUM',  search: true,   sort: true, drag: true  },
              { header: 'Description',    name: 'ITEM',       search: true,   sort: true, drag: true, align: 'sw-sst_left'  },
              { header: 'On Hand Count',  name: 'ON_HAND',    search: true,   sort: true, drag: true  },
              { header: 'Cost',           name: 'COST',       search: false,  sort: false, drag: true, align: 'money' },
          ];

          const [start, setStart] = useState(0);
          const [indexing, setIndexing] = useState([]);
          const [table, setTable] = useState(tableTest);

          const setTheTable (ssTable, ssControl, ssFinal) {
            setTable(ssTable);
          }

          const eachRowInTable = (row, i) => {
              let key = 'row_' + i + start;
              pos = indexing[i];

              return (
                <tr key={`row_${i}_${start}`} onClick={() => display(dataTest[pos])}> 
                  { table.map((col, idx) => (
                      <td key={`${col.header}_${idx}_${i}`} className={getAlignment(col.align)} 
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
                          setTheTable={setTheTable}
                          hover />
        }
```

In tableTest, there is the align field in both Description and Cost.  This is not part of the SearchSortTable.  In eachRowInTable, there is a col.align in the class name.  This is using the align in tableTest.  The col.align will be given the value of sw-sst_left or sw_sst_right.  Another valid option is sw-sst_center, which is the default.  You can even have your own CSS classes there if you want.

Another example:

```javascript
      let tableTest = [
          { header: 'Edit',           name: '',           search: true,   sort: true, drag: true, edit: true  },
          { header: 'Order Number',   name: 'ORDER_NUM',  search: true,   sort: true, drag: true  },
          { header: 'Date',           name: 'DATE',       search: true,   sort: true, drag: true, date: true  },
          { header: 'On Hand Count',  name: 'ON_HAND',    search: true,   sort: true, drag: true  },
          { header: 'Cost',           name: 'COST',       search: false,  sort: false, drag: true, align: 'money' },
      ];

      const eachRowInTable = (row, i) => {
        let pos = indexes[i];

        return (
          <tr key={`row_${i}_${start}`} onClick={() => display(dataTest[pos])}> 
            { table.map((col, idx) => (
                <td key={`${col.header}_${idx}_${i}`}                           
                        className={"sw-sst_body_full " + getAlignment(col.align)} 
                        hidden={hideCol[idx]}>
                    { (col.align.indexOf('money') !== -1) ? formatMoney(row[col.name]) : 
                      (col.align.indexOf('date')  !== -1) ? convertDate(row[col.name]) :
                      (col.edit === true) ? <button name='edit' onClick={nothing}>
                                              Edit
                                            </button> :
                      row[col.name] }
                </td>
            ))}
          </tr>
        )
```

In the above example, tableTest contains edit: true, date: true, and money: true correspond to the col.date, col.money, and col.edit in eachRowInTable.  Therefore, the Date in tableTest will be converted to the MM/DD/YYYY format.  The Edit in tableTest will be a button.  The Cost column in tableTest will be converted to the money format.

### **Latest EachRowInTable Function**

The latest version of SearchSortTable will allow the user to have no eachRowInTable function, on indexing function, no startEnd function and hidden function.  Their will still be an eachRowInTable prop, but the function will be replaced with either default or defaultTransfer.  The default one is used if you do not want to select any data to transfer to somewhere else.  The defaultTransfer is used it you want to select data to transfer somewhere else.  This will replace the 

```js
let pos = indexes[i];
...
<tr onClick={() => data[pos]}> in the eachRowInTable function
```

The other prop used with the defaultTransfer is transfer.  Transfer passes a function to SearchSortTable that is called when the user clicks on that row of in the table.  The row will be passed to the function as an object.  An example would be:

```js
const transfer = (data) => {
  console.log ('data: ', data);
}

<SearchSortTable data={data}
                 table={table}
                 eachRowInTable="defaultTransfer"
                 transfer={transfer}>
```

The other props that can be used are: tableTD and firstTD.  The tableTD is a function that is called when there is special formatting for a cell, like a button or link.  The row data and the column information in the table prop are passed in for that cell.  An example of the function would be:

### Latest Format with specialized columns using the tableTD prop

```js
let table = [
  ...
  header: 'Edit', name: '', search: false, sort: false, align: 'center'
  ...
]

const editButton = () {
  console.log ('This is the edit button');
}

const setColumn = (rowcol, rowIndex, colIndex) => {
  let row = rowcol.row; // The data for the row
  let col = rowcol.col; // The data for each object in the table

  if (col.header === 'Edit') {
    return (
      <button onClick={editButton}>
        Edit
      </button>
    )
  } else {
    return row[col.name];
  }
}

<SearchSortTable data={data}
                 table={table}
                 eachRowInTable="default"
                 tableTD={setColumn}>
```

This will place an Edit button underneath the header Edit for each row in the table.  When the button is pressed it will execute the editButton function.

 There are two other items that are executed, normally before the tableTD function.  If the align has date somewhere in the align, the date is automatically converted to the MM/DD/YYYY format.  If the align has money somewhere in the align, the number is converted into a money format ($N,NNN.NN) and right aligned.  After that the tableTD function is normally executed.  

The parameters are:

1.  rowcol = contains the current row and col being processed.
2.  rowIndex = current index of row in the data
3.  colIndex = current index of the column in the table (row for the column)

The else part of the if must be there and must contain return row[col.name]; otherwise, the normal items will not be returned.

### **Sorting**

If sorting is allowed for that column, there will either be a triangle (ascending order), or an upside down triangle (descending order), or triangle on its side (no order) next to the header.  Intially all the triangles will be on there sides to indicate no order.

To sort press on the triangle on its side, this will place the data in ascending order and it will appear as a regular triangle.
If pressed again, it will place it in descending order with an upside down triangle.
If pressed one more time, it will go back to its original order with the triangle being on its side.

The data is not sorted, but remains in its original state.  The order of the indexes into the data array are changed when sorted, filtered, searched, or control break.

### **Searching**
The search bar contains the following:
1.  A drop down listing all the headers in the table.  Select one to search that column in the table.  If All is in the drop down, then all columns will be searched.  If All is selected, all columns in the table will be searched for the selected item.
2.  A text box to enter the text to be searched.
3.  A Display All checkbox that indicates to display all the items that match the searched item.  If the this box is not checked, it will only display the first item found.
4.  A Search button to search for the text.  If the Display All checkbox is not checked and the Search button is pressed, it will find the first searched item and place it at the top of the table.  If pressed again, it will find the next item that matches the search and place it at the top of the table.  If the Search button is pressed again the next one is found and so on.

How to search:

1.  Select a header option from the drop down.
2.  Type a value to search underneath the header selected from the drop down.  This will also take you back to the first data item, which will be at the top of the screen.
3.  Check the Display All if all the matches are to be viewed at once or leave unchecked and you can go through one at a time by pressing the Search button to see each one.
4.  Press the Search button.  The search will search that field until it finds the first item that anywhere within that value and places it as the first item in the table.  For example, suppose you enter 2 for Order Number, then 123 will be displayed as the first item in the table.  If the search button is pressed again, it will find the next data in that column that matches the search item.

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
2.  Use the second or latest eachRowInTable format.  Look in the eachRowInTable prop for an explanation.
3.  Turn the table into a state variable.

```javascript
  let sortTable = [...];

  const [table, setTable] = useState(sortTable);

  const setTheTable = (ssTable, ssControl, ssFinal) => {
    setTable(ssTable);
  }
```

4.  Add the setTheTable prop in SearchSortTable configuration.  See the setTheTable prop.

```javascript
  <SearchSortTable 
      data={data}
      table={table}
      setTheTable={setTheTable}
      ...
  />
```

5.  If a footer is being used, turn it into a state Variable.  See the footer prop.

```javascript
  let theFooter = ['Totals', 123.45, 234.56, 334.66];

  const [footer, setFooter] = useState(theFooter);
```

6.  If a footer is being used, add the setTheFooter prop in SearchSortTable configuration.  See the setTheFooter prop.

```javascript
  <SearchSortTable 
      data={data}
      table={table}
      setTheTable={setTheTable}
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

### **Borders and Row Styling**

Normally in a SearchSortTable there are normally borders around various parts of the SearchSortTable.  There are borders around the following:

  1.  outer border = a rounded border around the entire outside of the table.
  2.  table border = a border around just the table.
  3.  header border = a border around the headers of the table.
  4.  footer border = a border around the footers of the table.
  5.  cell border = a border around the entire cell.

These are the normal borders in a SearchSortTable.  By default each SearchSortTable will have these borders.

The following props will allow the borders to be removed:

1. noborders = removes all the above mentioned borders.
2. noOuterBorder = removes the border around the entire SearchSortTable.
3. noTableBorder = removes the border around just the table.
4. noHeaderBorder = removes the borders around all the headers.
5. noFooterBorder = removes the borders around all the footers.
6. cellBorder = specifies the borders of a cell within the table.  The possible values are:
  - none = no borders around a cell in the table.
  - full = borders all around the cell.  This is the default.
  - row = borders between each row in the table.
  - col = borders between each column in the table

Each row in the table can also be styled using the rowStyle prop.  The values of rowStyle can be:
1. none = no styling for the row.
2. stripe = every other row in the table will be light gray.  This is the default.


### **Automatic Totaling**

This feature allows columns to be automatically totalled.  When using a control break, each individual control break can have columns summed.  For a control break total on the controlBreak array prop add the sumtitle, sum, money, and align fields.  For more information see the controlBreak prop.

For doing final totals automatically use the final totals array prop.  That array can have the finaltitle, finaltotal, money, and align fields.  For more information see the finaltotals prop.

### **Alignment in a Table Cell**

This only applies if you are using the new format of eachRowInTable.

This section will show how align the value in a table cell (<td>) or PDF cell.  You can place the alignment in the
table prop, controlBreak prop, and finaltotals prop.  In the table, there can be 3 different alignments and they are

- align: aligns the normal cells in the table
- headerAlign: aligns the headers in the table
- pdfCol: aligns the columns in the PDF

The values for headerAlign are:
- sw-sst_left
- sw-sst_left_bold
- sw-sst_center
- sw-sst_center_bold
- sw-sst_right
- sw-sst_right_bold
- 
- another CSS class

The values for control break array, final totals array, and pdfCol are:
- left              left justifies the data in the column
- leftbold          left justifies and bolds the data in the column
- center            centers the data in the column
- centerbold        centers and bolds the data in the column
- right             right justifies the data in the column
- rightbold         right justifies and bolds the data in the column
- datetime          this will convert the date in time in the format of 2025-01-23T21:22:20.000Z to a format of 01/23/2025 21:22:20 in the center of the cell
- datetimebold      this will convert the date in time in the format of 2025-01-23T21:22:20.000Z to a format of 01/23/2025 21:22:20 in the center of the cell and bolded
- datetimeleft      this will convert the date in time in the format of 2025-01-23T21:22:20.000Z to a format of 01/23/2025 21:22:20 and left justified
- datetimeleftbold  this will convert the date in time in the format of 2025-01-23T21:22:20.000Z to a format of 01/23/2025 21:22:20,left justified, and bolded
- datetimeright     this will convert the date in time in the format of 2025-01-23T21:22:20.000Z to a format of 01/23/2025 21:22:20 and right justified
- datetimerightbold this will convert the date in time in the format of 2025-01-23T21:22:20.000Z to a format of 01/23/2025 21:22:20, right justified, and bolded
- dateleft          formats the date to the MM/DD/YYYY and left justifies the data in the column
- dateleftbold      formats the date to the MM/DD/YYYY, left justifies, and bolds the data in the column
- datecenter        formats the date to the MM/DD/YYYY and centers the data in the column
- datecenterbold    formats the date to the MM/DD/YYYY, centers, and bolds the data in the column
- dateright         formats the date to the MM/DD/YYYY and right justifies the data in the column
- daterightbold     formats the date to the MM/DD/YYYY, right justifies, and bolds the data in the column
- money             formats to the $DD,DDD.DD and right justifies the money value
- moneybold         formats to the $DD,DDD.DD, right justifies, and bolds the money value
- moneyleft         formats to the $DD,DDD.DD and left justifies the money value
- moneyleftbold     formats to the $DD,DDD.DD, left justifies, and bolds the money value
- moneycenter       formats to the $DD,DDD.DD and centers the money value
- moneycenterbold   formats to the $DD,DDD.DD, centers, and bolds the money value

If the element in the table does not have some type of alignment, it will default to center.

The way in which the alignments are applied:
1.  It applies the align and headerAlign in table
2.  It applies the align in control break (if none for that column, it keeps the table alignments)
3.  It applies the align in final totals (if none for that column, it keeps what is in control break)
4.  It applies the pdfCol in table (if none for that column, it keeps what is in final totals)

Therefore, the alignment has a cascading effect.

Consider the following:

```js
let table = [
    { header: 'Name',       heading: 'NAME', ...,       align: 'left' },
    { header: 'City',       heading: 'CITY', ...,       align: 'left' },
    { header: 'State',      heading: 'STATE', ...,      pdfCol: 'left' },
    { header: 'Zip',        heading: 'ZIP', ..., },
    { header: 'Stock Num',  heading: 'STOCK_NUM', ..., },
    { header: 'Cost',       heading: 'Cost', ...,     align: 'money' },
    { header: 'Num Order',  heading: 'NUM_ORDER', ..., align: 'center'},
    { header: 'Amount Due', heading: 'AMOUNT_DUE', ..., align: 'money'},
];

let controlBreak = [
    { hidden: false, ctrlBreak: 1, sumtitle: 'Name Totals', align: 'left' },
    { hidden: false, ctrlBreak: 0 },
    { hidden: false, ctrlBreak: 0 },
    { hidden: false, ctrlBreak: 0 },
    { hidden: false, ctrlBreak: 0 },
    { hidden: false, ctrlBreak: 0, sum: true, align: 'moneybold' },
    { hidden: false, ctrlBreak: 0, sum: true },
    { hidden: false, ctrlBreak: 0, sum: true, align: 'moneybold' },
];

let finaltotals = [
    { finaltitle: 'Final Totals' },
    { finaltotal: false },
    { finaltotal: false },
    { finaltotal: false },
    { finaltotal: false },
    { finaltotal: false },
    { finaltotal: false },
    { finaltotal: true },
];
```

The table will be built with a control break on name.

All table headers will be centered, since there is no headerAlign.  The default is center.

For normal columns in the table:
- Name and City has an align of sw-sst_left; therefore, it will be left justified.
- State, Zip, and Stock Num do not have an align; therefore, the default of sw-sst_center will be used to center the value.
- Cost has an align of right; therefore, the cost will be right justified.
- Num Order does not have an align; the default of sw-sst_center will be used to center the value.
- Amount has an align of right; therefore, the cost will be right justified.

***For the Control Break:***

The control break occurs on the name.  The control break total columns alignment:
- Name column will contain Totals.  The alignment will be to the left.  Since there is no align in the control break array, it will use the one in table, which is sw-sst_left; therefore, it will be left justified.
- State, Zip, Stock Num do not have aligns in the control break array and they did not have aligns in table; therefore, it will default to sw-sst_center.
- Cost does not have an align in the control break array, but it does have an align in table; therefore, it will use the one in table, which is sw-sst_center.
- Num Order does not have an align in the control break array, but table does have align; therefore, it will use that one which is sw-sst_center.
- Amount does have an align in the control break array; therefore, it will use that one (align: 'right').

***For the Final Totals:***
- Name column will contain Final Totals.  Since, there is no align in the final totals array and there is no align in the control break array, it will use the one in table, which is sw-sst_left. Therefore, the column will be left justified.
- State, Zip, Stock Num do not have aligns in the final totals array, and do not have aligns in the control break array, and they did not have aligns in table; therefore, it will default to sw-sst_center.
- Cost does not have an align in the final totals array and does not have an align in the control break array, but it does have an align in table; therefore, it will use the one in table, which is sw-sst_right.
- Num Order does not have an align in the final totals array and does not have an align in the control break array, but table does have align; therefore, it will use that one which is sw-sst_center.
- Amount does not have an align in the final totals array, but does have an align in the control break array; therefore, it will use that one (right justified).

***If a PDF is generated:***
- Name has pdfCol in table, no align in the final totals array, and there is no align in the control break array, it will use the one in table, which is sw-sst_left. Therefore, the column will be left justified.
- State does have a pdfCol in table; therefore, it will use that one, which is sw-ss
- Zip, Stock Num do not have a pdfCol in the table, do not have aligns in the final totals array, and do not have aligns in the control break array, and they do not have aligns in table; therefore, it will default to sw-sst_center.
- Cost does not have a pdfCol in the table, does not have an align in the final totals array and does not have an align in the control break array, but it does have an align in table; therefore, it will use the one in table, which is sw-sst_right.
- Num Order does not have a pdfCol in the table, does not have an align in the final totals array and does not have an align in the control break array, but table does have align; therefore, it will use that one which is sw-sst_center.
- Amount does not have a pdfCol in the table, does not have an align in the final totals array, but does have an align in the control break array; therefore, it will use that one (right justified).

If there is not a control break array, it ignores all information about the control break array.
If there is not a final totals array, it ignores all information about the final totals array.

To sum up how the alignment works:

***For a PDF column:***
1.  If table has a pdfCol, use it and go to 6.
2.  If there is a final totals array and it has an align, use it and go to 6.
3.  If there is a control break array and it has an align, use it and go to 6.
4.  If table has an align, use it and go to 6.
5.  Use the default, which is sw-sst_center.
6.  done

***For a final totals array column***
1.  If there is a final totals array and it has an align, use it and go to 5.
2.  If there is a control break array and it has an align, use it and go to 5.
3.  If table has an align, use it and go to 5.
4.  Use the default, which is sw-sst_center.
5.  done

***For a control break array column:***
1.  If there is a control break array and it has an align, use it and go to 4.
2.  If table has an align, use it and go to 4.
3.  Use the default, which is sw-sst_center.
4.  done

***For a normal column:***
1.  If table has an align, use it and go to 3.
2.  Use the default, which is sw-sst_center.
3.  done

##### **Column Align Cascading**
1.  Defaults to a normal center
2.  Applies the table align array
3.  Applies the control break align array, if available
4.  Applies thee final totals align array, if available
5.  Applies the pdfCol align in the table array.


### **Other props:**

1. **allIndexes** = is a function that returns all the indexes for the entire data set, not just the ones being displayed as in indexing.   The format of the function is the same as indexing.

2. ***cbtitlealignsize*** = the alignment and size of the control break title. The alignment can be one of the following:

  - left      - leftbold        - right         - rightbold
  - center    - centerbold

The font size is followed by a colon (:) and then a number indicating the font size.  The
size can be any valid font size for the font.  If the size is left off it will default to a font size of 20.

If this prop does not appear, the default alignment will be center with a font size of 20.

An example:

```javascript
  <SearchSortTable
    data={data}
    table={table}
    eachRowInTable="default"
    cbtitlealignsize="leftbold:25"
    ...
  />
```

In the above example, the title alignment for the control break will be left justified and bolded.  The font size will be 25.

Another example:

```javascript
  <SearchSortTable
    data={data}
    table={table}
    eachRowInTable="default"
    cbtitlealignsize="leftbold"
    ...
  />
```

In the above example, the title alignment for the control break will be left justified and bolded.  The font size will be 20, since no font size was specified.

3. ***cbtitleformat*** = determines the characters in the control break title. A character can seperate the header and the value and between control breaks.  The seperators can be one of the following:

  - none      - colon (:)        - scolon (;)     - slash (/)     - dash (-) 
  - any other character, except ~

The none means that there is no seperator.  The default is none~colon.  The ~ is used to seperate the two seperators.

The first seperator divides the header and value.  By default there is no seperator.  The value after the ~ indicates the second seperator, which seperates the titles.  If there is not a second seperator the default is used, which is the semi-colon (;).


An example:

```javascript
  <SearchSortTable
    data={data}
    table={table}
    eachRowInTable="default"
    cbtitleformat="colon~comma"
    ...
  />
```

Suppose the control break was by state and then city.  The title for a control break would look like the following:

  State: AR, City: Pine Bluff

The seperator between the header and value is a colon (:).  The seperator between the control breaks is a comma (,).

Another example:

```javascript
  <SearchSortTable
    data={data}
    table={table}
    eachRowInTable="default"
    cbtitleformat="none~scolon"
    ...
  />
```

The control break title would look like the following

  State AR; City: Pine Bluff

There is not seperator between the header and value and a semi-colon between the control breaks.

Third Example:

```javascript
  <SearchSortTable
    data={data}
    table={table}
    eachRowInTable="default"
    cbtitleformat="#~none"
    ...
  />
```

The result would be:

  State# AR City# Pine Bluff

There is # between the header and value and nothing between the control breaks.

4.  ***cellBorder*** = this will set the border around the table cell.  The possible values are:
  - none = no cell border at all
  - full = both a row and column border.  The cell is enclosed in a border.  This is the default.
  - row = there is a border between rows only.
  - col = there is a border between columns only.

5.  ***checkedFunction*** = is a function that determines the behavior of the checkbox in the header.  The checkbox is placed in the header by using checked: true as an entry in the table for a column.  See the table section above.  The format of the function is as follows:
```javascript
const processAllChecks = (data) => {
  ...
}
```

6.  ***choice*** = this indicates whether there will be choice boxes or input boxes for the filter input.  If choice prop appears, then the box to place the filter information will contain a choice box with all the possible data for that column.  Select or type the value and press the filter button.  If there is no choice prop, the filter information will be entered into an input text box.  With this prop you can use the filterdaterange option with the table prop to get a list of ranges in the ChoiceText box for the filter.  For more information see table prop.

7.  ***controlBreak*** = is an array that allows to set up hidden columns and control breaks before the table is displayed.  The control break array should have the same number of elements as the table array.  Each element is an object that contains a hidden, control break, and sort order fields, along with totaling fields.  For example,
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
    { hidden: true,  ctrlBreak: 0 },        element 0
    { hidden: false, ctrlBreak: 2 },        element 1
    { hidden: false, ctrlBreak: 1 },        element 2
    { hidden: false, ctrlBreak: 0 },        element 3
  ]
```

The above control break array indicates the first column should be hidden, which is the Name column.  The ctrlBreak field for State (element 2) has a value of 1, which indicates that a control break will first occur on the State.  The ctrlBreak field for City (element 1) has a value 2, which indicates a control break will happen on City after the control break on State has happened.

The control break can also have a sort order field.  The sort order determines the way in which that column should be sorted.  The order can be in either ascending (default) or descending order.  The values can be ASC or asc (ascending) and / or DESC or desc (descending).  The following is an example with sort order in a control break:

```javascript
  let controlBreak = [
    { hidden: true,  ctrlBreak: 0 },                          element 0
    { hidden: false, ctrlBreak: 2, sortOrder: 'DESC' },       element 1
    { hidden: false, ctrlBreak: 1 },                          element 2
    { hidden: false, ctrlBreak: 0 },                          element 3
  ]
```
This indicates that the second columm (City) will be sorted in descending order.  The third column (State) will be sorted in ascending order, since there is no sort order (ascending is the default).

The control break can also be used to total up certain columns in the control break.  The totalling will happen automatically.  Three fields are used to the totaling and they are sumtitle, sum, and money.  The sumtitle allows a title to be placed in one or more of the columns.  The sum indicates that the column should be summed.  The money field indicates that columns contains a dollar amount and that the column should be formatted for money.  Consider the following example:

```javascript
  const table = [
    { header: 'Name',     name: 'name',     search: true, sort: true, dropDown: true, pdfCol: 'left' },
    { header: 'City',     name: 'city',     search: true, sort: true, dropDown: true, pdfCol: 'right' },
    { header: 'State',    name: 'state',    search: true, sort: true, dropDown: true, pdfCol: 'center' },
    { header: 'Zip Code', name: 'zip',      search: true, sort: true, dropDown: true, pdfCol: 'center' },
    { header: 'Invoices', name: 'invoices', search: true, sort: true, dropDown: true, pdfCol: 'center' },
    { header: 'Amount',   name: 'amount',   search: true, sort: true, dropDown: true, pdfCol: 'right' },
  ];
```

```javascript
  let controlBreak = [
    { hidden: true, ctrlBreak: 0 },                             element 0
    { hidden: false, ctrlBreak: 2, sumtitle: 'Totals:' },       element 1
    { hidden: false, ctrlBreak: 1 },                            element 2
    { hidden: false, ctrlBreak: 0 },                            element 3
    { hidden: false, ctrlBreak: 0, sum: true },                 element 4
    { hidden: false, ctrlBreak: 0, sum: true, align: 'money' }, element 5
  ]
```

The above control break array indicates the first column should be hidden, which is the Name column.  The ctrlBreak field for State (element 2) has a value of 1, which indicates that a control break will first occur on the State.  The ctrlBreak field for City (element 1) has a value 2, which indicates a control break will happen on City after the control break on State has happened.  Also, the City (element 1) has a sumtitle: 'Totals:', which indicates that after the last data row, that Totals will appear. In the Invoices (element 4), the sum: true indicates that the column will be summed and will be placed after the last invoice for the control break.  If sum is false or not present, the column will not be summed.  In the Amount field (element 5), the sum: true indicate the column will be summed, and the align: 'money' indicates that the sum for the control break will be in a money format ($DD,DDD.DD).
For more information on the align see the Alignment in a Table Cell.

If an alignment is **not** specified, the default for the font will be bold and size of 20. 

Therefore, the output might look like:

  City      State   Zip     Invoices      Amount
  ...
  Cleveland   OH    44122       5        $300.00
  Cleveland   OH    44121      10      $1,234.56
  Totals                       15      $1,534.56

The alignment of the totals is the same alignment as the data, unless the align field is used.  The money field always right justifies the number.  The align format can have the following values: left, right, center, and more.  For more information on alignment, see the Alignment in a Table Cell section.  An example, would be:

```javascript
  let controlBreak = [
    { hidden: true,  ctrlBreak: 0 },                                      element 0
    { hidden: false, ctrlBreak: 2, sumtitle: 'Totals:', align: 'left' },  element 1
    { hidden: false, ctrlBreak: 1 },                                      element 2
    { hidden: false, ctrlBreak: 0 },                                      element 3
    { hidden: false, ctrlBreak: 0, sum: true, align: 'center' },          element 4
    { hidden: false, ctrlBreak: 0, sum: true, align: 'money' },           element 5
  ]
```

In the above example, Totals: would be left justified in its cell because of the align: 'left'.  The Invoice total would be centered in its cell, because of the align: 'center'.  The Amount total would be right justified and in the money format ($DD,DDD.DD) in its cell, because of align: 'money'.

An example in the search sort table component

```jsx
  <SearchSortTable
    table={table}
    data={data}
    controlBreak={controlBreak}
    ...
  />
```

8.  ***error*** = indicates that an error occurred.  This will disable all buttons in the Search Sort Table.

9. **finaltotals*** = is an array that allows final totals in a table to be displayed.  The final totals array should have the same number of elements as the table array and control break array.  The final totals will automatically calculate the final totals.  Each element is an object that finaltitle, finaltotal, money, and align fields.  The final totals can be calculated for tables with or without control breaks.  For example,

```javascript
  const table = [
    { header: 'Name',     name: 'name',     search: true, sort: true, dropDown: true, pdfCol: 'left' },
    { header: 'City',     name: 'city',     search: true, sort: true, dropDown: true, pdfCol: 'right' },
    { header: 'State',    name: 'state',    search: true, sort: true, dropDown: true, pdfCol: 'center' },
    { header: 'Zip Code', name: 'zip',      search: true, sort: true, dropDown: true, pdfCol: 'center' },
    { header: 'Invoices', name: 'invoices', search: true, sort: true, dropDown: true, pdfCol: 'center' },
    { header: 'Amount',   name: 'amount',   search: true, sort: true, dropDown: true, pdfCol: 'right' },
  ];
```

```javascript
  let finaltotals = [
    { finaltitle: 'Final Totals: ' },           element 0
    { finaltotal: false },                      element 1
    { finaltotal: false },                      element 2
    { finaltotal: false },                      element 3
    { finaltotal: true, align: 'centerbold' },  element 4
    { finaltotal: true, align: 'moneybold'      element 5
  ]
```

The above final totals array indicates that the first column (Name column, element 0) should contain the Final Totals: title, since it has the finaltitle field.  The Invoices field (element 4) will be automatically totalled, since the finaltotal is set to true.  If it was set to false, it would not total.  The Invoice final total will be centered and bolded.  The Amount column (element 5) will be automatically totalled, since the finaltotal is set to true.  The Amount alignment is set to moneybold, so the final total for the column will be placed in money format ($DD,DDD.DD), right justified, and bolded.  For more information on the align see the Alignment in a Table Cell.

If an alignment is **not** specified, the default for the font will be bold and size of 20.

Therefore, the output might look like:

  City          State   Zip     Invoices      Amount
  ...
  Cleveland       OH    44122       5        $300.00
  Cleveland       OH    44121      10      $1,234.56
  Final Totals:                    15      $1,534.56

The alignment of the totals is the same alignment as the data, unless the align field is used.  The align: 'money' field always right justifies and places number in the money format.  For more information on the align see the Alignment in a Table Cell section.  An example, would be:

```javascript
  let finaltotals = [
    { finaltitle: 'Final Totals: ', align: 'left' },    element 0
    { finaltotal: false },                              element 1
    { finaltotal: false },                              element 2
    { finaltotal: false },                              element 3
    { finaltotal: true, align: 'center' },              element 4
    { finaltotal: true, align: 'moneybold'  },          element 5
  ]
```

In the above example, Final Totals: would be left justified in its cell because of the align: 'left'.  The Invoice total would be centered in its cell, because of the align: 'center'.  The Amount total would be in the money format, right justified, and bolded in its cell, because of align: 'money'.

An example in the search sort table component for control breaks and final totals.

```jsx
  <SearchSortTable
    table={table}
    data={data}
    controlBreak={controlBreak}     example from above
    finaltotals={finalTotals}
    ...
  />
```

An example in the search sort table component for final totals.

```jsx
  <SearchSortTable
    table={table}
    data={data}
    finaltotals={finalTotals}
    ...
  />
```

10. **firstTD** = this is used in conjunction with the tableCD and indicates it should not do the standard transition for align: money, data, and decimal.  If any one of these has the word in the align, the transition will take place.  Therefore, moneybold will do the translation.  For money, the translation that occurs is that $, commas, and decimal points are placed in the number and the number is right justified.  For date, the date is will transform any date into the MM/DD/YYYY format.  For decimal, a number is also specified to determine the number of digits right of the decimal point there.  

Therefore, if firstTD is used as a prop, it will ignore the special formatting for money, date, and decimal.  This parameter should be used very sparingly and probably will be.

11. **footer** = the last row that is to be displayed in a table.  The footer is an array of items that are displayed as a footer in a table.  The footer could be used to contain the totals for the table.  There must be a footer for every column in the table.  Each array element represents one column in the table.  A sample footer might be:

```javascript
    let footer = [
        'Totals',
        totalStock,
        totalRental,
        totalCAN,
    ];
```

The footer is deprecated and should be replaced with controlBreak and finaltotals.

If a footer is used that contains totals, it should not be used with dragging.

12. **headersize** = the font size of each column header in the table.  The header size can be any valid value for a font-size.  An example:

```javascript
  <SearchSortTable
    table={table}
    data={data}
    ...
    headersize='x-large'
    ...
  />
```

The above example indicates that the header size should be x-large.

13. **height** = the height of the scroll box only.  If the height is used it will automatically disable the ability to resize the table.

This is being deprecated.

14. **hidden** = is a function that indicates which columns should be hidden.  This will return an array the size of the number of columns.  Each index will contain a value of true if the column is to be hidden and false if is to be displayed.  This is not needed if default or defaultTransfer for eachRowInTable is used.
An example would be:
```javascript
const [hideCol, setHideCol] = useState([]);

const hideTheCols = (value) => {
  setHideCol(value);
}

<SearchSortTable hidden={hideTheCols}/>
```

This should not be used with the latest format of eachRowInTable.

15. **hover** = indicates when a row in the table is hovered over it will change to the hoverColor or cyan if no hover color is given.  Cyan is the default hover color.  If you want to detect that the hover over row was clicked, the user should have an onClick event in the tr in the eachRowInTable function.

16. **hoverColor** = is the color that is displayed when a row in the table is hovered over.  If a value is not given, it will default to cyan.  An example would be:
```javascript
hoverColor="yellow"
```

17. **ignorecase** = indicates that the case will be ignored in the search item.  So it will match both upper case or lower case in the search.

18. **indexing** = is a function that returns the indexes into the current data being displayed.  This is used in eachRowInTable function where the user needs to actually access the actual data.  The user will need to add the indexing as a state variable.  This is not needed if default or defaultTransfer are used for eachRowInTable.  See other examples.

An example would be:
```javascript
const [indexes, setIndexes] = useState([]);

const indexing = (value) => {
  setIndexes(value);
}

<SearchSortTable indexing={indexing} />
```

This should not be used with the latest format of eachRowInTable.

19. **letters** = will display upper case letters, lower case letters, and digits below the search bar.  
  - To use the letters option:
    1. Select a column header from the drop down menu.
    2. Select a letter or digit.
    3. The data will be sorted on that column header.  It will then search the data for first letter or digit that matches the one selected.  For letters, this option is the best.  For example, if A is selected, then all items in the column header that begin with A are listed in the table.  However, if digits are used, for example suppose 5 is selected, it sort the table on that column header.  If the data contains 5, 11, 51, 123,and 532.  It will only list the 5.
  - Other options with letters:
    1. **noupper** = does not display the upper case letters
    2. **nolower** = does not display the lower case letters
    3. **nodigit** = does not display the digits

20. **mathdecimal** = the number of digits right of the decimal for an average or median aggregation

21. **mathignorecase** = ignore the case of the data for all the string aggregations.

22. **MAX_ITEMS** = the maximum number of rows that will be displayed in the table.  Default is 100.

23. **noaggregation** = indicates that the aggregation will not show up on the drop down on the column.

24. **noborders** = there are no borders around any part of the table.  There is no outer border aound the entire SearchSortTable, no border around the table, no border around the header, no border around the footer, and no border around the cell.

25. **nobottom** = does not display the bottom button.

26. **nocontrolbreak** = indicates that the control break symbols will not show up on the drop down on the column.

27. **nocontsearch** = indicates that if the search button is pressed again, it will not find the next item that matches the search item.

28. **nodisplay** = this will not display what rows are being displayed or the total number of rows.

29. **noexcel** = does not display the Excel Build or Excel Display buttons.  This value can be supplied with a true or false value.

30. **nofilter** = this will not display the Filter On check box and the filter button.  Can also set the value to true of false.

31. **nofooter** = this will not display the top, previous, next, bottom, what rows are being displayed,

32. **noFooterBorder** = do not put a border around each individual footer item.

33. **noHeaderBorder** = do not put a border around each individual header item.

34. **nohidden** = indicates that the hidden symbols will not show up on the drop down on the column.

35. **nonext** = does not display the next button.

36. **noOuterBorder** = there is no border around the entire SearchSortTable.

37. **nopdf** = does not display the PDF button or the Orientation choice box.  This value can be supplied with a true or false value.


38. **noprevious** = does not display the previous button.

39. **norows** = does not display how maximum number of rows or the choice box for changing it.

40. **nosearch** = does not display the header drop down, text box, and Search button.

41. **nosort** = does not allow the headers to be sorted.

42. **noTableBorder** = there is no border around the table itself.

43. **notop** = does not display the top button or the total number of rows.

44. **number** = the number to be assigned to each SearchSortTable.  If using default or defaultTransfer in eachRowInTable, then this should be used.  The default is 0.

45. **pdfcard** = are two additional entries on the PDF Orientation drop down for PDF reports.  The two additional entries are with this prop are:
  - Card = indicates that each row or entry in the table is displayed as a card format rather than a traditional table.  For example, consider the following table entries:

        Name            City          State
        John Doe        Los Angeles   CA
        Jim Smith       New York      NY

    The card format is:

        Name        John Doe
        City        Los Angeles
        State       CA

        Name        Jim Smith
        City        New York
        State       NY

  - Card per page = this is the same as Card, except that there is only one card per page.

46. **pdffunction** = executes a function that builds and displays a PDF.  The following information is passed down to the function:

  -  data = the data to be displayed
  -  table = the table array the describes how the table is to be formatted
  -  indexes = the indexes into the data, used when the data is sorted
  -  controlBreakInfo = identical to the control information that can be passed down using the controlBreak prop.
  -  controlBreakData = an array in which each element of the array contains the data for a control break.  It will also contain the footer data.
  -  finalTotals = identical to the final totals that can be passed down using the finaltotals prop.
  -  pdfOrientation = the orientation (portrait or landscape) that is selected by the user in the searchSortTable.

An example would be:

```javascript
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

  ...
  const printPDF = async(data, 
                        table, 
                        indexes, 
                        controlBreakInfo, 
                        controlBreakData, 
                        finalTotals,
                        pdfOrientation) => {
      let docDefinition = {
          // Build the PDF
      }

      pdfMake.createPdf(docDefinition).open();    // Display the PDF
  }
  ...
  <SearchSortTable data={data)}
                   table={table}
                   eachRowInTable="default"
                   pdfFunction={printPDF}
                   number={11}
                   MAX_ITEMS={50}
                   controlBreak={controlBreak}
                   setOrientation="Portrait" />
```

47. **report** = the titles for the PDF and Excel reports, if a title is. not given.  If a title is given, it use the title over the report title.
An example would be:
```javascript
report="The PDF Report"
```

48. **reportSub1** = a subtitle that will go under the main title for a PDF or Excel.  An example would be:

```javascript
reportSub1="This is subtitle 1"
```

49. **reportSub2** = a subtitle that will go under the main title and subtitle 1 for a PDF or Excel.  An example would be:

```javascript
reportSub2="This is subtitle 2"
```

50. **resetIndexes** = reset the indexes back to their original value if true or if false it does not reset the indexes.

51. **rowStyle** = indicates the style of each row in the table.  The possible values are:
  - none = there is no styling to the row.
  - stripe = indicates that every other row will have a light gray color.  This is the default.

52. **scroll** = this will place the table in a scroll box that allows the table to be scrolled through.  

53. **searchall** = the search choice will automatically default to All and it will search all columns not one particular column.

54. **searchstart** = indicates that the search item will only match those data items that start with the search item.

55. **setOrientation** = sets the orientation on the searchSortTable screen to either Portrait or Landscape and disables the dropdown so that it can not be changed.

An example would be: 
```javascript
<SearchSortTable data={data}
                  table={table}
                  eachRowInTable="default"
                  pdfFunction={printPDF}
                  setOrientation="Portrait" />
```

56. **setTheFooter** = indicates that a new footer is being passed to the parent of SearchSortTable.  The function that is to be passed to is the setFooter function for the state variables.  Since the footer has changed due to a changing of columns, the footer in the parent must be changed to the new footer also.  The footer needs to have a many entries as the table array; otherwise, the drag and drop will not work.  See the section on Dragging and Drop.  This prop is only need if a footer prop is being used.  An example

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

57. **setTheTable** = indicates that a new table, control break, or final totals is being passed to the parent of SearchSortTable.
This prop is needed if dragging is turned on in the table.  Dragging will change the positions in the table prop array, the control break array, and the final totals array.  If there are no control breaks or final totals, the parameters in the setTheTable function will be null.

The function that is to be passed to wil change the table, control break, and final totals array; therefore, there, state variables will need to be reset.  Since the table has changed due to a changing of columns, the table in the parent must be changed to the new table, control break, and final total.

The format for the function is:
```js
const setTheTable (ssTable, ssControl, ssFinal) => {
  // set the appropriate state variable
}
```

The argurments: 
- ssTable = contains the new main table information if the a column has been dragged.
- ssControl = contains the new control break information if a column has been dragged.  If there is not control break, ssControl will be null and no there will be not state variable for the control break.
- ssFinal = contains the new final totals information if a column has been dragged.  If there is not final totals, ssFinal will be null and no there will be not state variable for the final totals.

See the section on Dragging and Drop.  An example:

```javascript
  let sortTable = [...];

  const [table, setTable] = useState(sortTable);
  ...
  const setTheTable = (ssTable, ssControl, ssFinal) => {
    setTable(ssTable);
  }
  ...
  <SearchSortTable 
    table={table}
    data={data}
    eachRowInTable="default"
    setTheTable={setTheTable}
    ...
  />
```
The changed table is in ssTable and; therefore, the table state variable needs to be updated, since it is passed to SearchSortTable.

Since there were no control break or final total state variables, they did not need to be set.  Also, ssControl and ssFinal have the value of null.

```javascript
  let sortTable = [...];
  let tempControlBreak = [...];
  let tempFinalTotals = [...];

  const [table, setTable] = useState(sortTable);
  const [controlBreak, setControlBreak] = useState(tempControlBreak);
  const [finalTotal, setFinalTotal] = useState(tempFinalTotals);
  ...
  const setTheTable = (ssTable, ssControl, ssFinal) => {
    setTable(ssTable);
    setControlBreak(ssControl);
    setFinalTotal(ssFinal);
  }
  ...
  <SearchSortTable 
    table={table}
    data={data}
    eachRowInTable="default"
    controlBreak={controlBreak}
    finaltotals={finalTotal}
    setTheTable={setTheTable}
    ...
  />
```

In the above example if dragging is on for that row, then there needs to be state variables for table, control breaks, and final totals.  They can all change positions.  Therefore, the arguments ssControl and ssFinal will have values and will need to be set to their appropriate state variables.

This prop is only used if dragging is allowed.

58. **sfbottom** = this will display the search and filter information at the bottom of the table instead of the top.

59. **showall** = shows all the items that are in the table either in a scroll box (must use the scroll prop) or not.  This will not limit the number of items in the table; therefore,
the search bar at the top of the screen will contain the search column, search item, and the All button.  If a search is done, it will place the item found at the top of the screen.  The All button will display all the items on the screen again.

60. **showtable** = this will show the table and headers even if there is no data to display.

61. **spinner** = causes a spinner to appear on the page until the data is finished loading into the search sort table.

62. **startEnd** = is a function that returns the current starting and ending positions in the data being displayed.  This is used in eachRowInTable function i is being used to generate a key.  The user will need to add start to it as in the key prop in the example above.  This is not needed if default or defaultTransfer are used for eachRowInTable.  See examples.
An example would be:
```javascript
const [start, setStart] = useState(0);

const startEnd = (start, end) => {
  setStart(start);
}

<SearchSortTable startEnd={startEnd} />
```

This has been deprecated if using the latest eachRowInTable format.

63. **startingPos** = is a function that will return an array that contains the start of each control break table in the indexes.
An exmple would be:
```javascript
const [startPos, setStartPos] = useState([]);

const startingPosition = (value) => {
  setStartingPos(value);
}

<SearchSortTable startingPos={startingPosition} />
```
64. **tableTD** = this allows a column in the table to be specified the way the user wants.  For
example, a button, link, etc.  The tableTD is a function that is called to specify how a column is to be formatted.  The format for the functions is as follows:

```js
const editButton = (row) => {
  console.log ('row : ', row);
}

const setColumn (rowcol, rowIndex, colIndex) => {
  let row = rowcol.row;
  let col = rowcol.col;

  if (col.header === 'Edit') {
    return <button onClick={() => editButton(row)}>
              Edit
           </button>
  } else {
    return row[col.name];
  }
}
```

Explanation of the above example:
This function must return a value in order to generate a row.  The row contains the data for the selected row in the SearchSortTable.  The column contains a column in the table prop.

The parameters for the setColumn function are:

1.  rowcol = contains the current row and col being processed.
2.  rowIndex = current index of row in the data
3.  colIndex = current index of the column in the table (row for the column)

The col.header is looking at the column header in the table prop and if it is an Edit, a button will be placed in that column of the table.  When the button is pressed it will call the edit button and print out the value of the object in row, which is the data from a row in the SearchSortTable.

There needs to be an else clause, since this function returns a value.  The standard return would to display the item in the table, which is what row[col.name] will do.

If in the table prop, there is an align of date, money, or decimal it will over ride what is in the setColumn function.  If this is not desired, place the firstTD prop in as a prop.

65. **title** = supplies a title to be displayed centered at the top of the table.

66. **titleSize** = 1 uses a h1 header, 2 uses a h2 header, 3 uses a h3 header, 4 uses a h4 header, 5 uses a h5 header, and 6 uses a h6 header, all other values use an h3 header.  If the titleSize prop is missing h3 will be used as the default.

67. **transfer** = this is function that transfers the data when the user presses a row in the table.  When a row is pressed, this function is called and transfers the data in the row to the transfer function.  The transfer function accepts the parameter data that contains the data for the row as an object based on the name in the table prop. 

This prop is only used when using the latest eachRowInTable format.

The format for the transfer function is:

```js
  const transferData = (data) => {

  }

  <SearchSortTable  ...
                    eachRowInTable="defaultTransfer"
                    transfer={transferData}>
```

transferData is the name of the function
data is an object that contains all the data in a row of the SearchSortTable

This is used in conjunction with eachRowInTable="defaultTransfer" prop and the hover prop. 

68. **width** = the width of the scroll box only.  If the width is used it will automatically disable the ability to resize the table.

This is being deprecated.


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

8.  ***sw-sst_scrollStyle*** = the CSS styling for the scroll box.  This is only applied if scroll is a prop on the component.  

```css
.sw-sst_scrollStyle {
  display: block;
  overflow: scroll; 
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

37. ***sw-sst_body_full*** = puts a single border around a cell in the table.

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
  font-weight: normal;
  font-size: unset;
}
```

42. **sw-sst_left_bold** = this will left justify and bold the data in a cell in a table

```css
.sw-sst_left {
  text-align: left;
  font-weight: bold;
  font-size: unset;
}
```

43. **sw-sst_center** = this will center the data in a cell in a table

```css
.sw-sst_center {
  text-align: center;
  font-weight: normal;
  font-size: unset;
}
```

44. **sw-sst_center_bold** = this will center and bold the data in a cell in a table

```css
.sw-sst_center {
  text-align: center;
  font-weight: bold;
  font-size: unset;
}
```

45. **sw-sst_right** = this will right justify the data in a cell in a table

```css
.sw-sst_right {
  text-align: right;
  font-weight: normal;
  font-size: unset;
}

```

46. **sw-sst_right_bold** = this will right justify and bold the data in a cell in a table

```css
.sw-sst_right {
  text-align: right;
  font-weight: bold;
  font-size: unset;
}

```



### **Example 1:**

Contains a footer for the totals in the table.  The filter and the search are at the bottom of the table:
```javascript
import { getAlignment } from 'simple-widgets';

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
                      hover />

  const eachRowInTable = (row, i) => {
      const key = 'row_' + i + start; // The key for the row
      let pos = indexing[i]

      return (
        <tr key={`row_${i}_${start}`} onClick={() => display(dataTest[pos])}> 
          { table.map((col, idx) => (
              <td key={`${col.header}_${idx}_${i}`} className={getAlignment(col.align)} 
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
import { getAlignment } from 'simple-widgets';

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
                      choice
                      hover />

  const eachRowInTable = (row, i) => {
      const key = 'row_' + i + start; // The key for the row
      let pos = indexing[i];

        return (
          <tr key={`row_${i}_${start}`} onClick={() => editRow(data[pos])}> 
            { table.map((col, idx) => (
                <td key={`${col.header}_${idx}_${i}`} className={getAlignment(col.align)} 
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
import { getAlignment } from 'simple-widgets';

const RANGE = 50;

let data = [
  ...
];

const sortExample = (props) => {
  const sstable = [
      { header: 'CAN',            name: 'CAN',           search: true,  sort: true, dropDown: true, drag: true },
      { header: 'Stock Total',    name: 'STOCK_TOTAL',   search: true,  sort: true, dropDown: true, drag: true },
      { header: 'Gas Cylinder',   name: 'GAS_CYLINDER',  search: true,  sort: true, dropDown: true, drag: true },
      { header: 'Total for CAN',  name: 'TOTAL',         search: true,  sort: true, dropDown: true, drag: true },
      { header: 'Date',  name: 'Date',                   search: true,  sort: true, dropDown: true, drag: true, filterdaterange: true },
  ];

  const thefooter = [
    'Totals', '', '', 1234.56, ''];
  ]

  const [error, setError] = useState(false);
  const [start, setStart] = useState(0);
  const [indexing, setIndexing] = useState([]);
  const [hideCols, setHideCols] = useState([]);
  const [table, setTable] = useState(sstable);
  const [footer, setFooter] = useState(theFooter);

  const setTheTable = (ssTable, ssControl, ssFinal) => {
    setTable(ssTable);
  }

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
                    setTheTable={setTheTable}
                    setTheFooter={setFooter}
                    error={error}
                    title="Finance CSV"
                    scroll
                    choice
                    hover />

  const eachRowInTable = (row, i) => {
      const key = 'row_' + i + start; // The key for the row
      let pos = indexing[i];

      return (
        <tr key={`row_${i}_${start}`} className="sw-sst_stripe" onClick={() => editRow(data[pos])}> 
          { table.map((col, idx) => (
              <td key={`${col.header}_${idx}_${i}`} 
                      className={"sw-sst_body_full " + getAlignment(col.align)} 
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

In this example, columns can be dragged to change their position in the table.  The drag: true in the table allows that column to be dragged.  If the drag is false the column can not be dragged; however, it can be dragged onto.  The setTable and setFooter will return the changed table and footer.  The footer has to have the same number of elements as the table.  The table has 5 elements and so does the footer.  Since you can drag columns it is using the new eachRowInTable (for more information see the eachRowInTable prop).  The table will be striped because of the sw-sst_stripe className.  The cells of the table will have black border because of the sw-sst_body_full className.  The hidden prop must be added to the SearchSortTable component to pass back the hidden array.  The choice prop on the SearchSortTable component indicates that there will be choice boxes on the filter input and since filterdaterange is true on the Date header in the sstable.

### **Example 7**
This example shows how to do automatic totaling with control breaks and final totals using the second format in the eachRowInTable function. 

```javascript
import { getAlignment } from 'simple-widgets';

const RANGE = 50;

let data = [
  ...
];

const sortExample = (props) => {
  const sstable = [
      { header: 'Name',       name: 'NAME',       search: true,  sort: true, dropDown: true, drag: true },
      { header: 'City',       name: 'CITY',       search: true,  sort: true, dropDown: true, drag: true },
      { header: 'State',      name: 'STATE',      search: true,  sort: true, dropDown: true, drag: true },
      { header: 'Zip',        name: 'ZIP_CODE',   search: true,  sort: true, dropDown: true, drag: true },
      { header: 'Num Items',  name: 'NUM_ITEMS',  search: true,  sort: true, dropDown: true, drag: true },
      { header: 'Amount',     name: 'AMOUNT',     search: true,  sort: true, dropDown: true, drag: true, filterdaterange: true },
  ];

  tempControlBreak = [
    { hidden: true, ctrlBreak: 0 },
    { hidden: false, ctrlBreak: 1, sumtitle: 'Totals:' },
    { hidden: false, ctrlBreak: 2 },
    { hidden: false, ctrlBreak: 0 },
    { hidden: false, ctrlBreak: 0, sum: true },
    { hidden: false, ctrlBreak: 0, sum: true, money: true }
  ]

  tempFinalTotals = [
    { finaltotal: false },
    { finaltotal: false, finaltitle: 'Final Totals: ', align: 'left' },
    { finaltotal: false },
    { finaltotal: false },
    { finaltotal: true },
    { finaltotal: true, money: true}
  ]

  const [error, setError] = useState(false);
  const [start, setStart] = useState(0);
  const [indexing, setIndexing] = useState([]);
  const [hideCols, setHideCols] = useState([]);
  const [table, setTable] = useState(sstable);
  const [controlBreak, setControlBreak] = useState(tempControlBreak);
  const [finalTotals, setFinalTotals] = useState(tempFinalTotals);

  const setTheTable = (ssTable, ssControl, ssFinal) => {
    setTable(ssTable);
    setControlBreak(ssControl);
    setFinalTotals(ssFinal);
  }

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
                    controlBreak={controlBreak}
                    finaltotals={finalTotals}
                    setTheTable={setTheTable}
                    error={error}
                    title="Finance CSV"
                    scroll
                    choice
                    hover />

  const eachRowInTable = (row, i) => {
      const key = 'row_' + i + start; // The key for the row
      let pos = indexing[i];

      return (
        <tr key={`row_${i}_${start}`} className="sw-sst_stripe"> 
          { table.map((col, idx) => (
              <td key={`${col.header}_${idx}_${i}`} 
                      className={"sw-sst_body_full " + getAlignment(col.align)} 
                      hidden={hideCol[idx]}>
                  row[col.name] }
              </td>
          ))}
        </tr>
      )
  }
}
```

In this example, each control break will have a total and a final total will be displayed.  On the control break array, the name will be hidden.  A control break will occur on State first and within State there will be a control break on City.  The sumtitle on the City will list the Totals: title on it (controlBreak in element 2).  The Num Items (controlBreak in element 4) has sum: true, indicating that the column should be totalled.  If sum was false, the column would not be totalled.  The Amount (controlBreak in element 5) has sum: true and money: true, indicates that the Amount column will be totalled and will be in the money format.

In this example, the final totals will be displayed because of the finaltotals array.  The name is hidden; therefore, it does not come into play.  The City (finaltotals in element 1) contains the finaltotal: false, finaltitle: 'Final Totals: ', and align: 'left', indicating that the column will not be totaled and will have the title Final Totals:, and will be left justified.  The State and Zip (finaltotals in element 2 and 3) contains finaltotal: false, indicating the columns should not be totaled. The Num Items (finaltotals in element 4) contains finaltotal: true, indicating the column should be totalled.  The Amount (finaltotals in element 5) contains finaltotal: true and money: true, indicating that the amount column should be totalled and placed in the money format.

### **Example 8***
This example shows how to do automatic totaling with control breaks and **NO** final totals using the new format in the eachRowInTable function.  The only change would be in the SearchSortTable by leaving off the finaltotals prop.  The columns can not be dragged.

This example uses some of the items in Example 7.

```javascript
  <SearchSortTable  data={data}
                    table={table}
                    MAX_ITEMS={RANGE}
                    eachRowInTable={eachRowInTable}
                    startEnd={startEnd}
                    indexing={getIndexes}
                    hidden={hideTheColumn}
                    setTheFooter={setFooter}
                    controlBreak={controlBreak}
                    error={error}
                    title="Finance CSV"
                    scroll
                    choice
                    hover />
```

### **Example 9**
This example shows how to do automatic totaling with **NO** control breaks and final totals using the new format in the eachRowInTable function.  The only change would be in the SearchSortTable by leaving off the controlBreak prop.  The columns can not be dragged.

This example uses some of the items in Example 7.

```javascript
  <SearchSortTable  data={data}
                    table={table}
                    MAX_ITEMS={RANGE}
                    eachRowInTable={eachRowInTable}
                    startEnd={startEnd}
                    indexing={getIndexes}
                    hidden={hideTheColumn}
                    finaltotals={finalTotals}
                    error={error}
                    title="Finance CSV"
                    scroll
                    choice
                    hover />

```

### **Example 10**
This example shows how to do automatic totaling with control breaks with **NO** control break totals, but with final totals using the new format in the eachRowInTable function:

```javascript
import { getAlignment } from 'simple-widgets';

const RANGE = 50;

let data = [
  ...
];

const sortExample = (props) => {
  const sstable = [
      { header: 'Name',       name: 'NAME',       search: true,  sort: true, dropDown: true, drag: true },
      { header: 'City',       name: 'CITY',       search: true,  sort: true, dropDown: true, drag: true },
      { header: 'State',      name: 'STATE',      search: true,  sort: true, dropDown: true, drag: true },
      { header: 'Zip',        name: 'ZIP_CODE',   search: true,  sort: true, dropDown: true, drag: true },
      { header: 'Num Items',  name: 'NUM_ITEMS',  search: true,  sort: true, dropDown: true, drag: true },
      { header: 'Date',       name: 'DATE',       search: true,  sort: true, dropDown: true, drag: true, filterdaterange: true },
      { header: 'Amount',     name: 'AMOUNT',     search: true,  sort: true, dropDown: true, drag: true },
  ];

  tempControlBreak = [
    { hidden: true, ctrlBreak: 0  },
    { hidden: false, ctrlBreak: 1 },
    { hidden: false, ctrlBreak: 2 },
    { hidden: false, ctrlBreak: 0 },
    { hidden: false, ctrlBreak: 0 },
    { hidden: false, ctrlBreak: 0 }
  ]

  tempFinalTotals = [
    { finaltotal: false },
    { finaltotal: false, finaltitle: 'Final Totals: ', align: 'left' },
    { finaltotal: false },
    { finaltotal: false },
    { finaltotal: true },
    { finaltotal: true, money: true}
  ]

  const [error, setError] = useState(false);
  const [start, setStart] = useState(0);
  const [indexing, setIndexing] = useState([]);
  const [hideCols, setHideCols] = useState([]);
  const [table, setTable] = useState(sstable);
  const [controlBreak, setControlBreak] = useState(tempControlBreak);
  const [finalTotals, setFinalTotals] = useState(tempFinalTotals);
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

  const setTheTable = (sstable, ssControl, ssFinal) => {
      setTable(ssTable);
      setControlBreak(ssControl);
      ssFinalTotal(ssFinal);
  }

  <SearchSortTable  data={data}
                    table={table}
                    MAX_ITEMS={RANGE}
                    eachRowInTable={eachRowInTable}
                    startEnd={startEnd}
                    indexing={getIndexes}
                    hidden={hideTheColumn}
                    setTheTable={setTheTable}
                    setTheFooter={setFooter}
                    controlBreak={controlBreak}
                    finaltotals={finalTotals}
                    error={error}
                    title="Finance CSV"
                    scroll
                    choice
                    hover />

  const eachRowInTable = (row, i) => {
      const key = 'row_' + i + start; // The key for the row
      let pos = indexing[i];

      return (
        <tr key={`row_${i}_${start}`} className="sw-sst_stripe"> 
          { table.map((col, idx) => (
              <td key={`${col.header}_${idx}_${i}`} 
                      className={"sw-sst_body_full " + getAlignment(col.align)} 
                      hidden={hideCol[idx]}>
                  row[col.name] }
              </td>
          ))}
        </tr>
      )
  }
}
```

### **Example 11**
This example shows how to do automatic totaling with control breaks with **NO** control break totals, but with final totals using default value for eachRowInTable function:

```javascript
const RANGE = 50;

let data = [
  ...
];

const sortExample = (props) => {
  const sstable = [
      { header: 'Name',       name: 'NAME',       search: true,  sort: true, dropDown: true, drag: true },
      { header: 'City',       name: 'CITY',       search: true,  sort: true, dropDown: true, drag: true },
      { header: 'State',      name: 'STATE',      search: true,  sort: true, dropDown: true, drag: true },
      { header: 'Zip',        name: 'ZIP_CODE',   search: true,  sort: true, dropDown: true, drag: true },
      { header: 'Num Items',  name: 'NUM_ITEMS',  search: true,  sort: true, dropDown: true, drag: true },
      { header: 'Date',       name: 'Date',       search: true,  sort: true, dropDown: true, drag: true, filterdaterange: true },
      { header: 'Amount',     name: 'AMOUNT',     search: true,  sort: true, dropDown: true, drag: true },
  ];

  let tempControlBreak = [
    { hidden: true,  ctrlBreak: 0 },
    { hidden: false, ctrlBreak: 1 },
    { hidden: false, ctrlBreak: 2 },
    { hidden: false, ctrlBreak: 0 },
    { hidden: false, ctrlBreak: 0 },
    { hidden: false, ctrlBreak: 0 }
  ]

  let tempFinalTotals = [
    { finaltotal: false },
    { finaltotal: false, finaltitle: 'Final Totals: ', align: 'left' },
    { finaltotal: false },
    { finaltotal: false },
    { finaltotal: true },
    { finaltotal: true, money: true}
  ]

  const [error, setError] = useState(false);
  const [table, setTable] = useState(sstable);
  const [controlBreak, setControlBreak] = useState(tempControlBreak);
  const [finalTotals, setFinalTotals] = useState(tempFinalTotals);
  const [footer, setFooter] = useState(theFooter);
  ...
  const setTheTable = (ssTable, ssControl, ssFinal) => {
    setTable(ssTable);
    setControlBreak(ssControl);
    setFinalTotals(ssFinal);
  }

  <SearchSortTable  data={data}
                    table={table}
                    MAX_ITEMS={RANGE}
                    eachRowInTable="default"
                    setTheTable={setTheTable}
                    setTheFooter={setFooter}
                    controlBreak={controlBreak}
                    finaltotals={finalTotals}
                    error={error}
                    title="Finance CSV"
                    scroll
                    choice
                    hover />
}
```

In the SearchSortTable section, notice that eachRowInTable has the value of default.  This is using the eachRowInTable built into SearchSortTable.  Also, if the default is used, there is no need for the hidden function, indexing function, or startEnd function.

### **Example 12**
This uses the defaultTransfer value for eachRowInTable function:

```javascript
const RANGE = 50;

let data = [
  ...
];

const sortExample = (props) => {
  const sstable = [
      { header: 'Name',       name: 'NAME',       search: true,  sort: true, dropDown: true, drag: true },
      { header: 'City',       name: 'CITY',       search: true,  sort: true, dropDown: true, drag: true },
      { header: 'State',      name: 'STATE',      search: true,  sort: true, dropDown: true, drag: true },
      { header: 'Zip',        name: 'ZIP_CODE',   search: true,  sort: true, dropDown: true, drag: true },
      { header: 'Num Items',  name: 'NUM_ITEMS',  search: true,  sort: true, dropDown: true, drag: true },
      { header: 'Date',       name: 'Date',       search: true,  sort: true, dropDown: true, drag: true, filterdaterange: true },
      { header: 'Amount',     name: 'AMOUNT',     search: true,  sort: true, dropDown: true, drag: true },
  ];

  const [error, setError] = useState(false);
  const [table, setTable] = useState(sstable);
  const [footer, setFooter] = useState(theFooter);

  const setTheTable = (ssTable, ssControl, ssFinal) => {
    setTable(ssTable);
  }

  const transferFunct = (data) => {
      console.log ('data: ', data);
  }

  <SearchSortTable  data={data}
                    table={table}
                    MAX_ITEMS={RANGE}
                    eachRowInTable="defaultTransfer"
                    transfer={transferFunc}
                    setTheTable={setTheTable}
                    setTheFooter={setFooter}
                    error={error}
                    scroll
                    hover
                    choice
                    hover />
}
```

In the SearchSortTable section, notice that eachRowInTable has the value of defaultTransfer.   This is using the eachRowInTable with transfer capablities built into SearchSortTable.  Also, if the defaultTransfer is used, there is no need for the hidden function, indexing function, or startEnd function.  Also, note the transfer prop contains a function.  This function is called when the user presses a row on the table.  The data will be the data for that row in the table.

### **Example 13**
This will demonstrate the default eachRowInTable and how to add a link in the table.

```javascript
const RANGE = 50;

let data = [
  ...
];

const sortExample = (props) => {
  const sstable = [
      { header: 'Name',       name: 'NAME',       search: true,  sort: true, dropDown: true, drag: true },
      { header: 'City',       name: 'CITY',       search: true,  sort: true, dropDown: true, drag: true },
      { header: 'State',      name: 'STATE',      search: true,  sort: true, dropDown: true, drag: true },
      { header: 'Zip',        name: 'ZIP_CODE',   search: true,  sort: true, dropDown: true, drag: true },
      { header: 'Download',   name: 'URL',  search: true,  sort: true, dropDown: true, drag: true },

  const setColumn = (rowcol, i) => {
    let row = rowcol.row; // The data for the row
    let col = rowcol.col; // The data for each object in the table

    if (col.header === 'Download') {
      return (
        <a src={col.name}>
          Download
        </a>
      )
    } else {
      return row[col.name];
    }
  }

  const [error, setError] = useState(false);
  const [table, setTable] = useState(sstable);
  ...
  const setTheTable = (ssTable, ssControl, ssFinal) => {
    setTable(ssTable);
  }
  ...
  <SearchSortTable  data={data}
                    table={table}
                    MAX_ITEMS={RANGE}
                    eachRowInTable="default"
                    tableTD={setColumn}
                    setTheTable={setTheTable}
                    error={error}
                    title="Finance CSV"
                    scroll
                    choice
                    hover />
}
```

In the SearchSortTable section, notice that eachRowInTable has the value of default.   This is using the eachRowInTable built into SearchSortTable.  Also, if the default is used, there is no need for the hidden function, indexing function, or startEnd function.  The setColumn function is used to create a link.

The setColumn passes down three parameters: rowcol, rowIndex, and colIndex.  The rowcol is an object that contains both the row and column for the table prop.  The rowIndex is the index into the data array.  The colIndex is index into the table array.  The row accesses the entire row of data in the table prop and the column accesses on of the fields in that table.

The first code in the setColumn is to seperate the row and column.  Next, the column header is checked to see if it is the column that is going to get the link.  If it is the download column, link is returned for that cell.  If is not the download column the standard row[col.name] is returned.  One or the other must be returned.
