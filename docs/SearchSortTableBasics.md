# **Search Sort Table Basics**

This will allow a user to display a limited number of items in a table.  The user can search for an item by typing in the starting value of an item in the table.  The user can also use the Top, Bottom, Previous, and Next buttons to display the next set of values in the table.

The user can also click on a column and the column will be sorted in either ascending or descending order.  The first type a column is clicked it will be sorted in ascending order.  After that it will alternate between descending and ascending order, respectively.

The user can also filter the data that is to be displayed.  They can also select the values to filter on through a choice box.  The user can also list out a range of dates.

For more detailed information see the [SearchSortTable](docs/SearchSortTable.md).

The following describes how to do a
1.  Basic Search Sort Table
2.  Search Sort Table to Transfer Data
3.  Search Sort Table to do Control Breaks
4.  Search Sort Table to do Final Totals
5.  Search Sort Table for Header Drop Downs
6.  Search Sort Table for Dragging Columns
7.  Search Sort Table for placing buttons, anchor tags, etc

The following data will be used in every example:

```js
const data = [
    { name: 'Jones',  city: 'Cleveland',    state: 'OH', zip: 44121, date: '2020-06-02', number: 1, amount: 1234.56 },
    { name: 'Smith',  city: 'Chicago',      state: 'IL', zip: 54321, date: '2020-06-03', number: 2, amount: 1234.56 },
    { name: 'Potter', city: 'Sacrmento',    state: 'CA', zip: 65432, date: '2020-06-04', number: 3, amount: 1234.56 },
    { name: 'Wesson', city: 'Denver',       state: 'CO', zip: 76543, date: '2018-06-02', number: 4, amount: 1234.56 },
    { name: 'Pierce', city: 'Santa Fe',     state: 'NM', zip: 87654, date: '2018-06-04', number: 5, amount: 1234.56 },
    { name: 'Potter', city: 'Sacrmento',    state: 'CA', zip: 65432, date: '2018-06-05', number: 6, amount: 1234.56 },
    { name: 'WESSON', city: 'Denver',       state: 'CO', zip: 76543, date: '2024-04-02', number: 7, amount: 1234.56 },
    { name: 'Jones',  city: 'Cleveland',    state: 'OH', zip: 44121, date: '2027-06-05', number: 8, v: 1234.56 },
    { name: 'Potter', city: 'Sacrmento',    state: 'CA', zip: 65432, date: '2027-06-06', number: 9, amount: 1234.56 },
    { name: 'Wesson', city: 'Denver',       state: 'CO', zip: 76543, date: '2020-06-07', number: 10, money: 1234.56 },
];

```

# Basic Search Sort Table

The following props are needed:

1.  data = this is an array of objects, where each object represents a row in the table
2.  table = describes the columns and the characteristics in the table
3.  eachRowInTable = default
4.  searchall = indicates that all rows in the table can be searched.

**Table**

The table is an array of objects in which each object represents a column in the table.

The object (column) has the following fields for the basic table:

1.  header = the name for the column header in the table
2.  name = the name of the field in the object for the data
3.  search = indicates whether the column can be searched (true) or not (false)
4.  sort = indicates whether the column can be sorted (true) or not (false)
5.  align = indicates how the data is to be aligned and formatted within the cell
    Some of the values for align:
    - left = left justifies the value in the cell
    - center = centers the value in the cell (default)
    - right = right justifies the value in the cell
    - date = places the date in the MM/DD/YYYY format and centers the date
    - money = places a $ at the front of the number and the commas (,), and period (.) in the appropriate places.  It will also right justify the number.
6.  For more align values see the [SearchSortTable](docs/SearchSortTable.md)

Example using the above date:

```js
let table = [
    { header: 'Name',   name: 'name',   search: true, sort: true, align: 'left' },
    { header: 'City',   name: 'city',   search: true, sort: true, align: 'left' },
    { header: 'State',  name: 'state',  search: true, sort: true, align: 'left' },
    { header: 'Zip',    name: 'zip',    search: true, sort: true },
    { header: 'Date',   name: 'date',   search: true, sort: true, align: 'date' },
    { header: 'Value',  name: 'number', search: true, sort: true, align: 'right' },
    { header: 'Amount', name: 'amount', search: true, sort: true, align: 'money' },
];
```

In the above table, in the first object (first column of the table), the column header will be Name.  The field in the data for that column is called name.  This column can be searched and sorted, because of true.  The column will be left aligned.

The Zip object does not have an align; therefore, it will default to center.

The Date object has an align of date; therefore, the date will be placed in the MM/DD/YYYY format and centered in the cell.

The Value field (the fifth column in the table) will display Value in the header field, even though the field in the data is number.  The field will be right aligned in the cell.

The Amount field has the align field of money; therefore, the field will be placed in the money format and right justified in the cell.

**Example**

```js
    <SearchSortTable data={data}
                     table={table}
                     eachRowInTable="default"
                     searchall
    />
```

# Search Sort Table to Transfer Data

The following props are needed:

1.  data = this is an array of objects, where each object represents a row in the table
2.  table = describes the items and the characteristics in the table
3.  eachRowInTable = defaultTransfer
4.  transfer = the name of the function to transfer the selected row data when the left mouse button is clicked
5.  hover = highlights the current row the mouse is on to indicate the row that might be transferred
6.  searchall = indicates that all rows in the table can be searched

The table will be the same as in the Basic Search Sort Table.

**Example**

```js
    const dataTransfer = (data) => {
        console.log ('data : ', data);
    }

    <SearchSortTable data={data}
                     table={table}
                     eachRowInTable="defaultTransfer"
                     transfer={dataTransfer}
                     hover
                     searchall
    />
```

When the user clicks the button the data is hovering over, the dataTransfer function will execute (because of the transfer={dataTransfer}) and pass the selected data to it in the data parameter.

# Search Sort Table to do Control Breaks

This allows the grouping of data by certain columns.  For example, suppose items are first to be grouped by state and then within state they are to be grouped by city using the data above.  Also, suppose the number column is supposed to be summed.  

This can be combined with any of the other examples.

1.  data = this is an array of objects, where each object represents a row in the table
2.  table = describes the items and the characteristics in the table
3.  eachRowInTable = default (example will use) or defaultTransfer
4.  controlBreak = an array of objects indicating which columns will be hidden, which columns will be control breaked, which columns will be summed.
4.  searchall = indicates that all rows in the table can be searched.

**Control Break**

The controlBreak array of objects indicates which columns are to be hidden, control breaked, and summed.

There must be the same number of objects as in the table entry.

The sum will be placed on the last line of the control break.

The following fields are in the controlBreak object in the array:
1.  hidden = indicates whether the column should be hidden (true) or not (false)
2.  ctrlBreak = is a number indicating the level of control break
3.  sumtitle = the title if summing is to be displayed at the end of the control break
4.  sum = indicates whether the column should be summed (true) or not (false - the default)
5.  align = same as the align in table

```js
let controlBreak = [
    { hidden: false, ctrlBreak: 0, sumtitle: 'Totals:', align: 'leftbold' },
    { hidden: true,  ctrlBreak: 2  },
    { hidden: true,  ctrlBreak: 1  },
    { hidden: false, ctrlBreak: 0  },
    { hidden: false, ctrlBreak: 0  },
    { hidden: false, ctrlBreak: 0, sum: true },
    { hidden: false, ctrlBreak: 0  },
];
```

The first column (first object in the controlBreak array) indicates that the column is displayed (hidden: false), there is no control break on this column (ctrlBreak is 0), and at the bottom of the control break will be the title "Totals:" in bold and left justified.

The second and third columns (city and state) will not be displayed (hidden: true) and will both have control breaks.  The control break first will be on state and then within state will be city, since the state ctrlBreak is 1 and the city ctrlBreak is 2.

The next to last column will be summed (sum: true) and displayed at end of the control break.

**Example**

```js
    <SearchSortTable data={data}
                     table={table}
                     eachRowInTable="default"
                     controlBreak={controlBreak}
                     searchall
```

# Search Sort Table to do Final Totals

This allows the grouping of data by certain columns.  For example, suppose items are first to be grouped by state and then within state they are to be grouped by city using the data above.  Also, suppose the number column is supposed to be summed.  

This can be combined with any of the other examples.

1.  data = this is an array of objects, where each object represents a row in the table
2.  table = describes the items and the characteristics in the table
3.  eachRowInTable = default (example will use) or defaultTransfer
4.  finaltotals = an array of objects indicatiing, which columns will be summed.
4.  searchall = indicates that all rows in the table can be searched.

**Final Totals**

The finaltotals array of objects indicates which columns are to be summed.

There must be the same number of objects as in the table entry.

The sum will be placed on the last line of the entire table.

The following fields are in the controlBreak object in the array:
3.  finaltitle = the title if summing is to be displayed at the end of the entire table
4.  finaltotal = indicates whether the column should be summed (true) or not (false)
5.  align = same as the align in table

```js
let finalTotals = [
    { finaltitle: 'Totals:', align: 'leftbold' },
    { finaltotal: false  },
    { finaltotal: false  },
    { finaltotal: false  },
    { finaltotal: false  },
    { finaltotal: true   },
    { finaltotal: false  },
];
```

The first column (first object in the finaltotals array) indicates at the end of the table will be the title "Totals:" in bold and left justified.

The next to last column will be summed (finaltotal: true) and displayed at end of the table.


**Example**

```js
    <SearchSortTable data={data}
                     table={table}
                     eachRowInTable="default"
                     finaltotals={finalTotals}
                     searchall
```

# Search Sort Table for Header Drop Downs

This will allow a column to either be hidden or control breaked on the fly by the user of the Search Sort Table.  This will also allow aggregates to be done on columns in the table.  The aggregates include summing of a column, maximum value in a column, minimum value in a column, average value in a column, medain of a column, number of values in a column, number of distinct values in a column, etc.

The following props are needed:

1.  data = this is an array of objects, where each object represents a row in the table
2.  table = describes the items and the characteristics in the table
3.  eachRowInTable = default
4.  searchall = indicates that all rows in the table can be searched.

**Table**

The table is the same as in the Basic Search Sort Table, with the addition of the dropDown field.  The dropDown field can have a value of true (indicates the column can have a drop down header by clicking on it) or false (header drop down is not allowed for the column).

The object has the following fields for the basic table:

1.  header = the name for the column header in the table
2.  name = the name of the field in the object for the data
3.  search = indicates whether the column can be searched (true) or not (false)
4.  sort = indicates whether the column can be sorted (true) or not (false)
5.  dropDown = indicates that the header can have a drop down (true) or not (false)
6.  align = indicates how the data is to be aligned and formatted within the cell
    Some of the values for align:
    - left = left justifies the value in the cell
    - center = centers the value in the cell (default)
    -  right = right justifies the value in the cell
    -  date = places the date in the MM/DD/YYYY format and centers the date
    -  money = places a $ at the front of the number and the commas (,), and period (.) in the appropriate places.  It will also right justify the number.
7.  For more align values see the [SearchSortTable](docs/SearchSortTable.md)

Example using the above date:

```js
let table = [
    { header: 'Name',   name: 'name',   search: true, sort: true, align: 'left', dropDown: true },
    { header: 'City',   name: 'city',   search: true, sort: true, align: 'left', dropDown: true },
    { header: 'State',  name: 'state',  search: true, sort: true, align: 'left', dropDown: true },
    { header: 'Zip',    name: 'zip',    search: true, sort: true, dropDown: true },
    { header: 'Date',   name: 'date',   search: true, sort: true, align: 'date', dropDown: true },
    { header: 'Value',  name: 'number', search: true, sort: true, align: 'right', dropDown: true },
    { header: 'Amount', name: 'amount', search: true, sort: true, align: 'money', dropDown: true },
];
```

All the columns have dropDown set to true, indicating all columns can be hidden, control breaked, or get an aggregate value.

**Example**

```js
    <SearchSortTable data={data}
                     table={table}
                     eachRowInTable="default"
                     searchall
    />
```

# Search Sort Table for Dragging Columns

The following props are needed:

1.  data = this is an array of objects, where each object represents a row in the table
2.  table = describes the items and the characteristics in the table
3.  eachRowInTable = default
4.  setTheTable = since the columns are changing the table array, control break array, and final totals array will change; therefore they must be passed back to the invoking SearchSortTable component.
4.  searchall = indicates that all rows in the table can be searched.

**Table**

The table is the same as in the Basic Search Sort Table, with the addition of the drag field.  The drag field can have a value of true (indicates the column can dragged) or false (column can not be dragged).

The object has the following fields for the basic table:

1.  header = the name for the column header in the table
2.  name = the name of the field in the object for the data
3.  search = indicates whether the column can be searched (true) or not (false)
4.  sort = indicates whether the column can be sorted (true) or not (false)
5.  drag = indicates whether the column can be dragged (true) or not (false)
6.  align = indicates how the data is to be aligned and formatted within the cell
    Some of the values for align:
    - left = left justifies the value in the cell
    - center = centers the value in the cell (default)
    - right = right justifies the value in the cell
    - date = places the date in the MM/DD/YYYY format and centers the date
    - money = places a $ at the front of the number and the commas (,), and period (.) in the appropriate places.  It will also right justify the number.
7.  For more align values see the [SearchSortTable](docs/SearchSortTable.md)

Example using the above data:

```js
let table = [
    { header: 'Name',   name: 'name',   search: true, sort: true, drag: true, align: 'left' },
    { header: 'City',   name: 'city',   search: true, sort: true, drag: true, align: 'left' },
    { header: 'State',  name: 'state',  search: true, sort: true, drag: true, align: 'left' },
    { header: 'Zip',    name: 'zip',    search: true, sort: true, drag: true },
    { header: 'Date',   name: 'date',   search: true, sort: true, drag: true, align: 'date' },
    { header: 'Value',  name: 'number', search: true, sort: true, drag: true, align: 'right' },
    { header: 'Amount', name: 'amount', search: true, sort: true, drag: true, align: 'money' },
];
```

All the columns have drag set to true, indicating all columns can be dragged.

**Example**

```js
    let tempTable = [
        ... table from above
    ];

    let tempControlBreak = [
        ... control break from above
    ];

    let tempFinalTotals = [
        ... final totals from above
    ];

    const [table, setTable] = useState(tempTable);
    const [controlBreak, setControlBreak] = useState(tempControlBreak);
    const [finalTotals, setFinalTotals] = useState(tempFinalTotals);
    ...
    const setTheTable = (ssTable, ssControl, ssFinal) => {
        setTable(ssTable);
        setControlBreak(ssControl);
        setFinalTotals(ssFinal);
    }
    ...
    <SearchSortTable data={data}
                     table={table}
                     eachRowInTable="default"
                     controlBreak={controlBreak}
                     finaltotals={finalTotals}
                     setTheTable={setTheTable} 
                     searchall
    />
```

If dragging is to take place and there are controlBreaks and finalTotals, then each time a column is dragged, there positions will change in the three arrays.  In order to handle this correctly 

1.  The three arrays must be placed in state variables as shown above.
2.  There must be a setTheTable function to note the changes in columns.

Example, if there is no control break or final totals:

```js
    let tempTable = [
        ... table from above
    ];

    const [table, setTable] = useState(tempTable);
    ...
    const setTheTable = (ssTable, ssControl, ssFinal) => {
        setTable(ssTable);
    }
    ...
    <SearchSortTable data={data}
                     table={table}
                     eachRowInTable="default"
                     setTheTable={setTheTable} 
                     searchall
    />
```

Since there is not a control break or final totals, there are not state variables and in setTheTable function the ssControl and ssFinal are not set.  The ssControl and ssFinal, still need to be there and there values will be null.

Example if there is a control break, but no final totals:

```js
    let tempTable = [
        ... table from above
    ];

    let tempControlBreak = [
        ... control break from above
    ];

    const [table, setTable] = useState(tempTable);
    const [controlBreak, setControlBreak] = useState(tempControlBreak);
    ...
    const setTheTable = (ssTable, ssControl, ssFinal) => {
        setTable(ssTable);
        setControlBreak(ssControl);
    }
    ...
    <SearchSortTable data={data}
                     table={table}
                     eachRowInTable="default"
                     controlBreak={controlBreak}
                     setTheTable={setTheTable} 
                     searchall
    />
```

Example if there no control break, but final totals:

```js
    let tempTable = [
        ... table from above
    ];

    let tempFinalTotals = [
        ... final totals from above
    ];

    const [table, setTable] = useState(tempTable);
    const [finalTotals, setFinalTotals] = useState(tempFinalTotals);
    ...
    const setTheTable = (ssTable, ssControl, ssFinal) => {
        setTable(ssTable);
        setFinalTotals(ssFinal);
    }
    ...
    <SearchSortTable data={data}
                     table={table}
                     eachRowInTable="default"
                     finaltotals={finalTotals}
                     setTheTable={setTheTable} 
                     searchall
    />
```

# Search Sort Table for placing buttons, anchor tags, etc

This will allow you to add buttons, anchor tags, Choice, ChoiceText, input text fields, textareas, etc.

The following props are needed:

1.  data = this is an array of objects, where each object represents a row in the table
2.  table = describes the items and the characteristics in the table
3.  eachRowInTable = default
4.  tableTD = specifies the function that allows the buttons, anchor tags, etc to be defined
5.  searchall = indicates that all rows in the table can be searched.

**Table**

The table must have place holders for the different components (button, anchor tags, input, etc.).  For example:

```js
let table = [
    { header: 'Name',   name: '',       search: false, sort: false },
    { header: 'City',   name: 'city',   search: true, sort: true, align: 'left' },
    { header: 'State',  name: 'state',  search: true, sort: true, align: 'left' },
    { header: 'Edit',   name: '',       search: false, sort: false },
    { header: 'Info',   name: '',       search: false, sort: false, align: 'date' },
    { header: 'Value',  name: 'number', search: true, sort: true, align: 'right' },
    { header: 'Amount', name: 'amount', search: true, sort: true, align: 'money' },
];
```

The Name, Edit, and Info fields do not have any value in the name field.  Generally if there is no value that generally means that this is for a component.  Also, if it is a component the search, sort, and other fields should be set to false.  It makes no sense to search or sort a component.


**Function to Add Components**

The function to add components to add to cells in the table consists of the following:

```js
    const setColumn = (rowcol, i) => {
        let row = rowcol.row;   // The data for a row in the SearchSorTable
        let col = rowcol.col;   // The data for each column in table array of objects

        if (col.header === 'Name') {
            return (<input type="text" name="technician" value={technician[i]} />)
        } else if (col.header === 'Edit') {
            return (<button name="edit" onClick={editButton}>Edit</button>)
        } else if (col.header === 'Info') {
            return (<a href="https://weather.com/">Weather</a>)
        } else {
            return (row[col.name]);
        }
    }

    const editButton = () => {
        ...
    }
```

The setColumn function contains the two variables called row and col.  The row variable contains a single row of actual data that will appear in the SearchSortTable.  For example (based on the table above):

{ city: 'Cleveland', state: 'OH', number: 1, amount: 1234.56 },

The col variable contains a single column in the table array.  An example:

{ header: 'City',   name: 'city',   search: true, sort: true, align: 'left' },

Each field for the column in the table can be accessed.  So in the above example,
header, name, search, sort, and align can be accessed.

The function is called for each row and for each column within the row.

The main fields that are accessed are the header and name.

In the above example, if the column header is name, the an input text field will be placed there.

If the column header is Edit, a button will be placed in that column.

If the column header is Info, an anchor tag will be placed in that column.

**IMPORTANT**
In the if structure in the function, at the end there must be an else with the
```js
else {
    return (row[col.name]);
}
```

If this is missing no data will show up in the table.

**IMPORTANT END**


**Example**

```js
    <SearchSortTable data={data}
                     table={table}
                     eachRowInTable="default"
                     tableTD={setColumn}
                     searchall
    />
```

