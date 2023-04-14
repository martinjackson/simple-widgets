# **SimpleTable**

SimpleTable is simple [React] component that will display a simpler SearchSortTable.  There will only be a search and a hover option.  The simple table uses the following SearchSortTable props: scroll, spinner, hover, nofooter, nofilter, showall, searchstart, and height.  The titles for the table will be the fields for each data item.

### **Props**
The ChoiceText component uses the following props:

1. **data**: the data to display in the table.  If no date is supplied, it will be an empty table.
2. **dataSelected**: the function that is called whenever a user hovers over the data and clicks the mouse button.  The data that is hovered over will be transferred to that function.  This a required prop.
3. **height**: the height of the table.  The default is 17em and is not a required prop.

### **Example**
```javascript
export const YourComponent = (props) => {

    const data = [
    { name: 'Jones',  city: 'Cleveland',    state: 'OH', zip: 44121, date: '2020-06-02', number: 1, money: 1234.56 },
    { name: 'Smith',  city: 'Chicago',      state: 'IL', zip: 54321, date: '2020-06-03', number: 2, money: 1234.56 },
    { name: 'Potter', city: 'Sacrmento',    state: 'CA', zip: 65432, date: '2020-06-04', number: 3, money: 1234.56},
    { name: 'Wesson', city: 'Denver',       state: 'CO', zip: 76543, date: '2020-06-02', number: 4, money: 1234.56 },
    { name: 'Pierce', city: 'Santa Fe',     state: 'NM', zip: 87654, date: '2020-06-04', number: 5, money: 1234.56 },
    { name: 'Potter', city: 'Sacrmento',    state: 'CA', zip: 65432, date: '2020-06-05', number: 6, money: 1234.56 },
    { name: 'WESSON', city: 'Denver',       state: 'CO', zip: 76543, date: '2020-06-06', number: 7, money: 1234.56 },
    ];

    const transfer = (value) => {
        console.log ('data selected : ', value);
    }

    return (
      <div>
        <SimpleTable
          data={data}
          dataSelected={transfer} />
      </div>
    )
}

```

The above example, will display the data in a simple table.  The headers for the table will be name, city, state, zip, date, number, money.  If the user hovered on the row with a name of Pierce and clicked on it, the transfer function would be called and it display:

value : {name: 'Pierce', city: 'Santa Fe', state: 'NM', zip: 87654, date: '2020-06-04', number: 5, money: 1234.56}

