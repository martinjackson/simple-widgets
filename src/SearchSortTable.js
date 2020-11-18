/* eslint react/prop-types: 0 */

import React, { useState, useEffect } from 'react';

import CheckBox from './CheckBox';
import { Choice } from './List';
import { isInvalid, setInvalidScreen, copyStyle,
         validStyling, processStyleScreen, wasClickedScreen} from './Invalid'
import AlertModal from './AlertModal';
import { defaultThemeSettings, buttonStyle, generateButton } from './Theme';
import './table.css';
import './mousehover.css';

const upper = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
const lower = [...'abcdefghijklmnopqrstuvwxyz'];
const digit = [...'0123456789'];

const hasProperty = (obj, propName) => { return !!Object.getOwnPropertyDescriptor(obj, propName);}

/****************************************************************************
 *
 * This will allow the user to add a filter / search bar to a table in case
 * not all the data is displayed at once.  It will also allow a column to be
 * sorted by clicking on it.
 *
 ****************************************************************************/
const SearchSortTable = (propsPassed) => {
const Theme = {...defaultThemeSettings};

  const defaultEachRowInTable = (row, i) => {
        const cols = row.map( (cell, j) => {
            const k = i+'_'+j
          return (<td key={k}>{cell}</td>)
        })
        // console.log('cols:', cols);
    return (<tr key={i}>{cols}</tr>)
  }

  const defaultProps = {
    error: false,          // Indicates that an error has occrred
    MAX_ITEMS: 10,
    eachRowInTable: defaultEachRowInTable,
    }

    const props = Object.assign(defaultProps, propsPassed);


    const invalidArray = [  // Used to tell whether the user entered and invalid value or not
        { validity: false, display: false, message: '' },
        { validity: false, display: false, message: '' },
        { validity: false, display: false, message: '' },
    ];

    const FILTER = 0;
    const SRCHITEM = 1;
    const SRCHHDR = 2;

    // Set the state variables
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState((hasProperty(props,'showAll') === true) ? props.data.length : props.MAX_ITEMS);
    const [searchItem, setSearchItem] = useState('');                   // The item to search for
    const [searchHeader, setSearchHeader] = useState('');               // The column to search
    const [searchHeaderValues, setSearchHeaderValues] = useState([searchHeader]); // The value of each header in the table -- intialize array to include default value
    const [sortOrder, setSortOrder] = useState([]);                     // Indicates whether the sort is ascending (A) or descending (D) (starts of a ascending and then alternates)
    const [topDisabled, setTopDisabled] = useState(true);               // Indicates whether the top button is disabled or not
    const [previousDisabled, setPreviousDisabled] = useState(true);     // Indicates whether the previous button is disabled or not
    const [nextDisabled, setNextDisabled] = useState(false);            // Indicates whether the next button is disabled or not
    const [bottomDisabled, setBottomDisabled] = useState(false);        // Indicates whether the bottom button is disabled or not
    const [rowValues, setRowValues] = useState([]);                     // Indicates how many rows in the table should be displayed
    const [maxItems, setMaxItems] = useState((hasProperty(props,'showAll') === true) ? props.data.length : props.MAX_ITEMS);   // Maximum number of rows to display in the table
    const [maximum, setMaximum] = useState((hasProperty(props,'showAll') === true) ? props.data.length : props.MAX_ITEMS);     // Maximum number of rows selected by the user to display in the table
    const [filter, setFilter] = useState([]);                           // The values for each column to be filtered
    const [filterOn, setFilterOn] = useState('');                       // Indicates whether the user has checked the Filter On check box or not
    const [copyData, setCopyData] = useState([...props.data]);          // Copies the main data to another storage area
    const [filterDisabled, setFilterDisabled] = useState(true);         // Indicates whether the filtering is enabled or disabled (Filter button)
    const [invalid, setInvalid] = useState(invalidArray);
    const [alertMessage, setAlertMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    // TODO: setLength is called but length is never used ???

    /* eslint-disable no-unused-vars */
    const [length, setLength] = useState(0);                            // The length of the data
    /* eslint-enable no-unused-vars */

    /******************************************************************************
     *
     * Called to populate the header drop down
     *
     ******************************************************************************/

/*
   Style 1
*/
      // eslint-disable-next-line react-hooks/exhaustive-deps
      useEffect (populateSearch, []);    // only do this when component mounts

/*
   Style 2

    useEffect (() => {
      populateSearch();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);    // only do this when component mounts
*/

    useEffect (() => {
      setCopyData([...props.data]);
      setLength(props.data.length);
    }, [props.data]);


    if (hasProperty(props,'data') === false) {
      console.error ('Search Sort Table component: A data prop must be passed');
      return (<span></span>);
    }

    if (hasProperty(props,'table') === false) {
      console.error ('Search Sort Table component: A table object prop must be passed');
      return (<span></span>);
    }


    if (hasProperty(props,'letters') === true) {
      if (hasProperty(props,'noupper') === true &&
          hasProperty(props,'nolower') === true &&
          hasProperty(props,'nodigit') === true) {
            console.error ('Search Sort Table component: If using letters prop, can not have all three: noupper, nolower, and nodigit');
            return (<span></span>);
        }
    } else {
    if (hasProperty(props,'noupper') === true ||
        hasProperty(props,'nolower') === true ||
        hasProperty(props,'nodigit') === true) {
          console.error ('Search Sort Table component: Can not have noupper, nolower, or nodigit props without the letters prop');
          return (<span></span>);
        }
    }

    /****************************************************************************
     *
     * This will populate the header drop down and place a blank at the
     * beginning.
     *
     ****************************************************************************/
    function populateSearch() {
        let order = [];         // The next sort order
        let localFilter = [];   // The values in the filter input boxes
        let search = [''];      // The values for the drop down

        // Build the items for the drop down, the sort order, and the filter
        for (let i = 0; i < props.table.length; i++) {
            if (props.table[i].search === true) {
                search.push (props.table[i].header);
            }
            order.push ('N');
            if (hasProperty(props,'nofilter') === false) {
                localFilter.push('');
            }
        }

        setSearchHeaderValues(search);
        setSortOrder(order);
        setFilter(localFilter);

        // Build the values for the row drop down on the bottom right of the screen.
        let values = [];
        for (let count = props.MAX_ITEMS; count <= 100; count += 5) {
            values.push(count);
        }

        values.push ('All');
        setRowValues (values);
    }



    /**************************************************************************************************
     *
     * Render the screen.
     *
     **************************************************************************************************/
    // The style used to render the search bar and table
    let divStyle = {
        border: "2px solid black",
        borderRadius: "10px",
        textAlign: "center",
        margin: "5px",
        padding: "10px",
        backgroundColor: Theme.backgroundColor,  // "#CCCC66",
    };

    if (hasProperty(props,'divStyle') === true) {
        divStyle = props.divStyle;
    }

    let buttonStyle = {
        margin: "10px",
        borderRadius: "10px",
        color: Theme.defaultThemeSetting.buttonTextColor,
        backgroundColor: Theme.defaultThemeSetting.buttonColor,
        width: "100px",
        height: "30px",
        font: Theme.defaultThemeSetting.buttonFont,
        fontWeight: "bold",
    }

    if (hasProperty(props,'buttonStyle') === true) {
        buttonStyle = props.buttonStyle;
    }

    const noButtonStyle = {
        margin: "10px",
        padding: "0px",
        border: "none",
        background: "none",
        fontWeight: "bold",
        color: "black"
    }

    const marginStyle = {
        marginTop: "10px",
        marginBottom: "10px",
        marginLeft: "10px",
        marginRight: "30px",
    }

    const noBorderStyle = {
        margin: "10px",
        padding: "0px",
        border: "none",
        background: "none",
    }

    let tableStyle = {  // The style for the table
        margin: "auto",
        border: "1px solid black",
        position: "relative",
    }

    if (hasProperty(props,'tableStyle') === true) {
        tableStyle = props.tableStyle;
    }

    let centerBoldStyle = {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "20px"
    }

    if (hasProperty(props,'headerStyle') === true) {
        centerBoldStyle = props.headerStyle;
    }

    let footerStyle = {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "20px",
        border: "1px solid black",
    }

    if (hasProperty(props,'footerStyle') === true) {
        footerStyle = props.footerStyle;
    }

    let scrollStyle = {
        display: "block",
        overflow: "scroll",
        height: (hasProperty(props,'height') == true) ? props.height : "auto",
        width: (hasProperty(props,'width') == true) ? props.width : "auto",
        border: "1px solid black",
        marginLeft: "auto",
        marginRight: "auto"
    }

    let tableDivStyle = {};
    if (hasProperty(props,'scroll') === true) {
        if (hasProperty(props,'scrollStyle') === true) {
            tableDivStyle = props.scrollStyle;
        } else {
            tableDivStyle = scrollStyle;
        }
    }

    let searchStyle = {
        margin: "5px",
        backgroundColor: Theme.normalColor,
    }

    let footStyle = {
        margin: "10px",
        textAlign: "right",
        position: "sticky",
        bottom: 0,
        zIndex: 2,
        backgroundColor: Theme.backgroundColor,
    }

    if (hasProperty(props,'footStyle') === true) {
        footStyle = props.footStyle;
    }

    const genButtonStyle = generateButton(buttonStyle, error, false, 'gray');
    const genTopButtonStyle = generateButton(noButtonStyle, error, topDisabled, 'gray');
    const genPreviousButtonStyle = generateButton(noButtonStyle, error, previousDisabled, 'gray');
    const genNextButtonStyle = generateButton(noButtonStyle, error, nextDisabled, 'gray');
    const genBottomButtonStyle = generateButton(noButtonStyle, error, bottomDisabled, 'gray');
    const genFilterButtonStyle = generateButton(buttonStyle, error, filterDisabled, 'gray');

    const topSymbol = '|\u2BC7';        // Bar and left triangle
    const previousSymbol = '\u2BC7';    // Left triangle
    const nextSymbol = '\u2BC8';        // Right triangle
    const bottomSymbol = '\u2BC8|';     // Right triangle and bar

   // Populate the table with the next set of data to populate
    let showData = [];
    if (props.data !== undefined && props.data !== null) {
        for (let i = start; i < end && i < props.data.length; i++) {
            showData.push (props.data[i]);
        }
    }

    let letterDigit = [];
    let letters = null;
    if (hasProperty(props,'letters') === true) {
        if (hasProperty(props,'noupper') === true) {
            if (hasProperty(props,'nolower') === true) {
                letterDigit = [...digit];
            } else {    // Lower
                if (hasProperty(props,'nodigit') === true) {
                    letterDigit = [...lower];
                } else {    // Digit
                    letterDigit = [...lower, ...digit];
                }
            }
        } else {    // Upper
            if (hasProperty(props,'nolower') === true) {
                if (hasProperty(props,'nodigit') === true) {
                    letterDigit = [...upper];
                } else {    // Digit
                    letterDigit = [...upper, ...digit];
                }
            } else {    // Lower
                if (hasProperty(props,'nodigit') === true) {
                    letterDigit = [...upper, ...lower];
                } else {    // Digit
                    letterDigit = [...upper, ...lower, ...digit];
                }
            }
        }

       letters = <span key="letters"><br />{letterDigit.map(alphabet)}<br /><br /></span>
    }

    let topButtonHTML = <span></span>;
    if (hasProperty(props,'notop') === false && hasProperty(props,'showAll') === false) {
        topButtonHTML = <button name="top" style={genTopButtonStyle} onClick={() => topButton()} disabled={props.error || topDisabled}>{topSymbol}</button>;
    }

    let previousButtonHTML = <span></span>;
    if (hasProperty(props,'noprevious') === false && hasProperty(props,'showAll') === false) {
        previousButtonHTML = <button name="previous" style={genPreviousButtonStyle} onClick={() => previousButton()} disabled={props.error || previousDisabled}>{previousSymbol}</button>;
    }

    let nextButtonHTML = <span></span>;
    if (hasProperty(props,'nonext') === false && hasProperty(props,'showAll') === false) {
        nextButtonHTML = <button name="next" style={genNextButtonStyle} onClick={() => nextButton()} disabled={props.error || nextDisabled}>{nextSymbol}</button>;
    }

    let bottomButtonHTML = <span></span>;
    if (hasProperty(props,'nobottom') === false && hasProperty(props,'showAll') === false) {
        bottomButtonHTML = <button name="bottom" style={genBottomButtonStyle} onClick={() => bottomButton()} disabled={props.error || bottomDisabled}>{bottomSymbol}</button>;
    }

    let allButtonHTML = <span></span>;
    if (hasProperty(props,'showAll') === true) {
        allButtonHTML = <button name="all" style={genBottomButtonStyle} onClick={() => allButton()} disabled={props.error}>All</button>;
    }

    let title = null;
    if (hasProperty(props,'title') === true) {
        if (hasProperty(props,'titleSize') === true) {
            if (props.titleSize === '1') {
                title = <h1 style={props.titleStyle}>{props.title}</h1>
            } else if (props.titleSize === '2') {
                title = <h2 style={props.titleStyle}>{props.title}</h2>
            } else {
                title = <h3 style={props.titleStyle}>{props.title}</h3>
            }
        } else {
            title = <h3 style={props.titleStyle}>{props.title}</h3>
        }
    }

    const filterSection = (hasProperty(props,'nofilter') === true) ? null :
        (<>
            <CheckBox selectedValue="Y" name="filterOn" text="&nbsp;&nbsp;&nbsp;Filter On" value={filterOn} onChange={(event) => processFilterOn(event.target.value)} />
            <button name="filter" style={genFilterButtonStyle} onClick={() => filterButton()} disabled={props.error || filterDisabled}>Filter</button>
        </>)

    searchStyle = processStyleScreen(invalid, SRCHHDR, searchStyle);

    let itemStyle = validStyling();
    itemStyle = processStyleScreen(invalid, SRCHITEM, itemStyle)

    const searchSection = (hasProperty(props,'nosearch') === true) ? null :
        (<>
            <span className="checkForError">
                <Choice choices={searchHeaderValues}  name="searchHeader" value={searchHeader} onChange={(event) => setSearchHeader(event.target.value)} onClick={() => wasClickedScreen(invalid, SRCHHDR, setInvalid)} style={searchStyle} disabled={props.error} />
                {(isInvalid(invalid[SRCHHDR], -1) === true) ? <span className="errMessage">{invalid[SRCHHDR].message}</span> : null }
            </span>
            <span className="checkForError">
                <input type="text" name="searchItem" value={searchItem} onChange={(event) => setupSearch(event.target.value)} onClick={() => wasClickedScreen(invalid, SRCHITEM, setInvalid)} style={itemStyle} disabled={props.error} />
                {(isInvalid(invalid[SRCHITEM], -1) === true) ? <span className="errMessage">{invalid[SRCHITEM].message}</span> : null }
            </span>
            <button name="searchButtonName" style={genButtonStyle} onClick={() => searchItemButton()} disabled={props.error}>Search</button>
        </>)

    const footer = (hasProperty(props,'nofooter') === true) ? null :
        <div style={footStyle}>
            { (hasProperty(props,'norows') === true) ? null :
                <span style={marginStyle}>
                    <Choice choices={rowValues} name="rows" value={maximum} onChange={(event) => processMaxItems(event.target.value)} style={noBorderStyle} disabled={props.error} />
                    rows
                </span>
            }
            {topButtonHTML}
            {previousButtonHTML}
            { (hasProperty(props,'nodisplay') === true) ? null :
                <span>{start + ' - ' + end + ' of ' + props.data.length}</span>
            }
            {nextButtonHTML}
            {bottomButtonHTML}
        </div>

    let hoverClassName = null;
    if (hasProperty(props,'hover') === true) {
        let root = document.documentElement;
        let hoverBackColor = 'cyan';
        let found = false;

        if (hasProperty(props,'hoverColor') === true) {
            hoverBackColor = props.hoverColor;
        }

        for (let i = 1; i <= 10 && found === false; i++) {
            let colorValue = getComputedStyle(root).getPropertyValue(`--hover_back_color${i}`);
            if (colorValue === ' none') {
                root.style.setProperty(`--hover_back_color${i}`, hoverBackColor);
                hoverClassName = `search_sort_table${i}`;
                found = true;
            } else if (colorValue === hoverBackColor) {
                hoverClassName = `search_sort_table${i}`;
                found = true;
            }
        }

        if (found === false) {
            console.error ('You can have at most 10 different hover colors for tables.')
        }
    }

    return (    // Render the screen
        <div style={divStyle}>
            {title}
            <div>
                { (hasProperty(props,'sfbottom') === false) ?
                    (<>
                        {filterSection}
                        {searchSection}
                        {allButtonHTML}
                        {letters}
                    </>) : null
                }
            </div>
            { (props.data.length === 0 && hasProperty(props,'showtable') === false) ?
            <div>No Data to Display</div> :
            <div>
                <div style={tableDivStyle}>
                    <table style={tableStyle} className={hoverClassName}>
                        <tbody>
                            <tr key="header" style={centerBoldStyle}>
                                {props.table.map(buildHeaders)}
                            </tr>
                           { showData.map(props.eachRowInTable) }
                           { (hasProperty(props,'footer') === true) ?
                                <tr style={footerStyle}>{ props.footer.map(buildFooter) }</tr> : null }
                        </tbody>
                    </table>
                </div>
                {footer}
                <div>
                    { (hasProperty(props,'sfbottom') === true) ?
                        (<>
                            {filterSection}
                            {searchSection}
                            {allButtonHTML}
                            {letters}
                        </>) : null
                    }
                </div>
            </div>
            }
            <AlertModal show={showAlert} closeFunct={setShowAlert} message={alertMessage} />
        </div>
    );

    /*************************************************************************************
     *
     * This will set the number of data items that are to be displayed on the screen.
     *
     * @param {*} value the value selected from the drop down
     *
     **************************************************************************************/
    function processMaxItems(value) {
        if (value === 'All') {  // All data should be shown
            setMaxItems(props.data.length);
        } else {
            setMaxItems(parseInt(value));
        }
        setMaximum(value);  // Used so the value will show on the drop down
    }

    /*********************************************************************************
     *
     * This is called whenever the user changes the search item.  It will take the
     * user to the beginning of the data and set the value typed.
     *
     * @param {*} value value to set the search item to
     *
     **********************************************************************************/
    function setupSearch(value) {
        setStartEnd(0);
        setSearchItem(value);
    }

    /********************************************************************************
     *
     * The is will place the headers in the table object into the table.
     *
     * @param {*} row   the name of the header
     * @param {*} i     the index of the column in the table
     *
     *********************************************************************************/
    function buildHeaders (row, i) {
        let key = 'cell_' + i;
        let header = row.header;
        // let filterKey = 'filter_' + i;
        let filterName = row.header + '_filter'


        let headerStyle = {
            position: "sticky",
            flexDirection: "column",
            top: 0,
            zIndex: 2,
            border: "1px solid black",
            backgroundColor: Theme.backgroundColor,
        }

        if (hasProperty(props,'headerStyle') === true) {
            headerStyle = props.headerStyle;
        }

        let widthStyle = {
            marginBottom: "0px",
            paddingBottom: "0px",
            width: "99%",
            textAlign: "center",
        }

        if (props.table[i].sort === true && sortOrder[i] !== 'N') {
            // After the sort was done, it flips the sort order; therefore, if it is
            // now a D, that means it was sorted in ascending order previously.  If
            // it is now an A, that means it was sorted in descending order previously.
            if (sortOrder[i] === 'D') {
                header = row.header + ' \u2BC5';    // Up arrow
            } else {
                header = row.header + ' \u2BC6';    // Down arrow
            }
        }

        // Filter is turned on
        if (filterOn === 'Y' && hasProperty(props,'nofilter') === false) {
            let filterStyle = copyStyle(widthStyle);
            filterStyle.backgroundColor = Theme.normalColor;
            filterStyle = processStyleScreen(invalid, FILTER, filterStyle);

            if (row.sort === false || hasProperty(props,'nosort') === true) { // No sorting, so no onClick handler
                if (row.search === false) { // No searching on this field, so no filtering on it also
                    return (<th key={key} style={headerStyle}>{row.header}</th>)  // Display the header only
                } else {    // Can filter; therefore, display the input field
                    return (
                        <th key={key} style={headerStyle}>
                            <div>{row.header}</div>
                            <span className="checkForError">
                                <input type="text" style={filterStyle} name={filterName} value={filter[i]} onChange={(event) => processFilter(event.target.value, i)} disabled={props.error} />
                            </span>
                        </th>
                    );
                }
            } else {    // Sorting on the column is allowed
                if (row.search === false) { // No searching or filtering on the column, so display header only
                    return (
                        <th key={key} onClick={() => sortClicked(row.name, 'X')} style={headerStyle}>
                            {header}
                        </th>
                    );
                } else {    // Searching and filtering is allowed
                    return (    // Display header and input field for filtering
                        <th key={key} onClick={() => sortClicked(row.name, 'X')} style={headerStyle}>
                            <div>{header}</div>
                            <span className="checkForError">
                                <input type="text" style={filterStyle} name={filterName} value={filter[i]} onChange={(event) => processFilter(event.target.value, i)} disabled={props.error} />
                            </span>
                        </th>
                    );
                }
            }
        // Filtering is off or not allowed
        } else if (row.sort === false || hasProperty(props,'nosort') === true) { // No sorting, so no onClick handler
            return ( <th key={key} style={headerStyle}>{row.header}</th> ); // Display the header only
        } else {    // Soring on the column is allowed
            return (
                <th key={key} onClick={() => sortClicked(row.name, 'X')} style={headerStyle}>
                    {header}
                </th>
            );
        }
    }

    /****************************************************************************************************
     *
     * This will place a line in the last row of the table, which can be used for totals of each column.
     *
     * @param {*} row   represnts the value to place in each column of the table
     * @param {*} i     index into the mapped array
     *
     *****************************************************************************************************/
    function buildFooter(row, i) {
        let key = 'footer_' + i;

        return (    // Place a value in the column
            <td key={key} style={footerStyle}>{row}</td>
        )
    }

    /***************************************************************************************
     *
     * This will turn filtering on or off.  If filtering is on, the following will occur:
     *  1.  It will display the filter input fields below each header (done in buildHeaders)
     *  2.  Place an index on the data under the filterIndex field.  Used to copy the data
     *      from the filtering data to the main data.
     *  3.  Store a copy of the main data.
     *  4.  Enable the Filter button
     *
     * If filtering is off, the following will occur:
     *  1.  Copy the filtered data back to the main data using the filter index.
     *  2.  Remove the filtered data
     *  3.  Copy the main data back
     *
     * @param {*} value inidicates whether filtering is on or off
     *
     *****************************************************************************************/
    function processFilterOn(value) {
        setFilterOn(value);

        if (value === 'Y') {    // Filter is on
            let data = props.data;

            // Build the index to make it easier to copy the filtered data back
            for (let i = 0; i < props.data.length; i++) {
                data[i]['filterIndex'] = i;
            }

            setCopyData([...data]);     // Store a copy of the main data
            setFilterDisabled(false);   // Enable the filter button
        } else {
            let data = props.data;              // The filtered data
            let len = props.data.length;        // Length of the filtered data
            let localCopyData = [...copyData];  // Copy of the main data

            // Copy the filtered data back to the main copied data using the filter index
            for (let i = 0; i < len; i++) {
                localCopyData[data[i].filterIndex] = data[i];
            }

            data.splice (0, len);   // Remove the filtered data

            // Replace the filtered data with the main data
            for (let i = 0; i < localCopyData.length; i++) {
                data.push(localCopyData[i]);
            }

            setLength(props.data.length);   // Used to re-render the screen
            setFilterDisabled(true);        // Disable the filter button
            setStart(0);
            setEnd((hasProperty(props,'showAll') === true || props.data.length < maxItems) ? props.data.length : maxItems);
        }
    }

    /****************************************************************************************
     *
     * This will gather the data entered in the filter input boxes into an array.
     *
     * @param {*} value the value entered in a filter input box
     * @param {*} i     the index into the array to store the value in the array
     *
     *****************************************************************************************/
    function processFilter(value, i) {
        let local = [...filter];    // The filter array for the filter input boxes


        local[i] = value;
        setFilter(local);
    }

    /******************************************************************************************
     *
     * This will make sure that the user entered at least one value in one of the filter
     * input boxes.  This is called when the user presses the Filter button.
     *
     ******************************************************************************************/
    function filterValidate() {
        let localInvalid = [...invalid];

        localInvalid[FILTER].validity = false;
        localInvalid[FILTER].display = false;

        // Search though the filter array to find a value
        for (let i = 0; i < filter.length; i++) {
            if (filter[i] !== '') { // There is a value
                return true;
            }
        }

        // No values for filtering were entered
        localInvalid = setInvalidScreen (localInvalid, FILTER, '');
        localInvalid[FILTER].display = false;

        setInvalid(localInvalid);

        setAlertMessage('A filter value must be entered in at least one filter box');
        setShowAlert(true);

        return false;
    }

    /***************************************************************************************
     *
     * This will filter the data and display it on the screen.
     *
     ***************************************************************************************/
    function filterButton() {
        // Make sure filter values were entered
        if (filterValidate() === false) {
            return;
        }

        let data = props.data;  // The data to filter
        let newData = [];       // The filtered data
        let indexes = [];       // List of indexes that indicate which filter input boxes have data
        let found = [];         // Indicates whether that filter input box found data to filter
        let count = 0;          // counts the number of filtered data
        let done = false;       // Indicates that we are done filtering that data element

        // Build the indexes in which the user entered data in the filter input box
        for (let i = 0; i < props.table.length; i++) {
            if (filter[i] !== '') {
                indexes.push(i);
            }
        }

        // Spin through the data and see if it meets the filter criteria
        for (let i = 0; i < data.length; i++) {
            found = [];     // Empty the found array for the next data element
            done = false;
            // Spin through the filter input boxes to see if the data element matches
            for (let j = 0; j < indexes.length && done === false; j++) {
                // The data element matches one of the filter input boxes
                if (data[i][props.table[indexes[j]].name].toString().indexOf(filter[indexes[j]]) !== -1) {
                    found.push(true);   // Place a true in the found array indicating the filter input box matched
                } else {    // The data element did not match the filter input box
                    found.push(false);
                    done = true;    // Since a match was not found the data element will not meet the filter criteria
                }
            }

            // Check to see if the data element met all the filter criteria
            let move = true;
            // Spin through found array making sure all values are true.  If they are, the data element
            // matches the filter criteria
            for (let k = 0; k < found.length && move === true; k++) {
                if (found[k] === false) {   // False was found, so the data element does not match filter criteria
                    move = false;
                }
            }

            // Data element matches the filter criteria, so place the data in the filtered data area
            if (move === true) {
                newData.push(data[i]);
                count++;
            }
        }

        if (count > 0) {    // There are filtered data elements
            let length = props.data.length;
            // Copy the filtered data elements to the end of main data area
            for (let i = 0; i < newData.length; i++) {
                data.push (newData[i]);
            }
            data.splice(0, length);     // Remove the data at the beginning of the data area
            setLength (newData.length); // Used to re-render the screen
            setStartEnd(0);             // Set the start and end values
        }
    }

    /******************************************************************************
     *
     * This will validate that data was entered in the header drop down and text
     * box for searching.  This is called when the Search button is pressed.
     *
     * @param {*} which indicates whether both (B) the search header and item
     *                  should be validated or only the header (H)
     *
     *******************************************************************************/
    function validate(which) {
        let localInvalid = [...invalid];

        localInvalid[SRCHHDR].validity = false;
        localInvalid[SRCHHDR].display = false;
        localInvalid[SRCHITEM].validity = false;
        localInvalid[SRCHITEM].display = false;

        if (searchHeader === '') {
            localInvalid = setInvalidScreen(localInvalid, SRCHHDR, 'A column header to be searched must be selected');
        }

        if (which === 'B' && searchItem === '') {
            localInvalid = setInvalidScreen(localInvalid, SRCHITEM, 'An item to search must be entered');
        }

        setInvalid(localInvalid);

        return  localInvalid[SRCHHDR].validity === false &&
                localInvalid[SRCHITEM].validity === false;    // No problems occurred
    }

    /********************************************************************************
     *
     * This will search a column in a table until it matches the starting characters
     * in the column with that which is in the text box.  In other words, if the
     * column contains SMITH and SM is entered in the text box, it will match.  It
     * will match until it finds the first occurrence.
     *
     **********************************************************************************/
    function searchItemButton() {
        if (validate('B') === true) {  // Make sure a value has been selected in the drop down and text box
            let search = null;
            search = (hasProperty(props,'ignorecase') === true) ?
                searchItem.toUpperCase() :  // Convert to upper case to ignore case
                searchItem;
            // Find a match in the correct column of the data
            let tableIndex = props.table.map(function(e) { return e.header; }).indexOf(searchHeader);   // Column match
            if (hasProperty(props,'searchstart') === true) {
                searchStart (search, props.table[tableIndex].name);
            } else {
                searchAny (search, props.table[tableIndex].name);
            }
//            let index = props.data.findIndex(val => val[props.table[tableIndex].name].toString().startsWith(search));   // Text match
//            setStartEnd(index); // Set the start and end to show the found text
        }
    }

    /********************************************************************************************
     *
     * This will search through the data until it finds the item in the specified column that
     * starts with the search item.  This is only called if the props search start is set.
     *
     * @param {*} search    the item to search for
     * @param {*} name      the field name in the data to search for the search item
     *
     *********************************************************************************************/
    function searchStart (search, name) {
        let begin = (hasProperty(props,'nocontsearch') === true || start === 0) ? 0: start + 1;  // Where to start the search
        let found = false;  // Indicates that the item was found

        for (let i = begin; i < props.data.length && found === false; i++) {
            if (props.data[i][name].toString().startsWith(search)) {    // Item was found
                found = true;
                setStartEnd(i); // Set the start and end positions of the data on the screen.
            }
        }
    }

    /********************************************************************************************
     *
     * This will search through the data until it finds the search item in the specified column
     * anywhere within the data item.
     *
     * @param {*} search    the item to search for
     * @param {*} name      the field name in the data to search for the search item
     *
     *********************************************************************************************/
    function searchAny (search, name) {
        let begin = (hasProperty(props,'nocontsearch') === true || start === 0) ? 0: start + 1;  // Where to start the search
        let found = false;  // Indicates that the item was found

        for (let i = begin; i < props.data.length && found === false; i++) {
            if (props.data[i][name].toString().indexOf(search) !== -1) {    // Item was found
                found = true;
                setStartEnd(i);  // Set the start and end positions of the data on the screen.
            }
        }
    }

    /*************************************************************************************
     *
     * This function will sort a column header in the table (all the data is sorted by
     * the field that matches the column header) in either ascending (A) or descending (D)
     * order.
     *
     * @param {*} name the name of the column header to sort
     *
     *************************************************************************************/
    function sortClicked(name, orderType) {
        let index = props.table.map(function(e) { return e.name; }).indexOf(name);   // Column match
        let order = [...sortOrder];
        let ordering = 'A';

        if (orderType === 'A') {
            ordering = 'A';
        } else {
            if (order[index] === 'N') { // If sort is not specified (first time), change it to ascending
                ordering = 'A';
                order[index] = 'A';
            } else {
                ordering = order[index];
            }
        }

        props.data.sort(function (item1, item2) {
            // Convert to upper case if ignoring case
            if (typeof item1[name] === 'string' &&
                hasProperty(props,'ignorecase') === true) {
                item1[name] = (item1[name] !== null) ? item1[name].toUpperCase() : null;
                item2[name] = (item2[name] !== null) ? item2[name].toUpperCase() : null;
            }

            // Make the comparison
            if (item1[name] < item2[name]) {
                return (ordering === 'A') ? -1 : 1;
            } else if (item1[name] > item2[name]) {
                return (ordering === 'A') ? 1 : -1;
            } else {
                return 0;   // Equal
            }
        });

        if (orderType !== 'A') {
            // Reverse the sort order
            if (order[index] === 'A') {
                order[index] = 'D';
            } else {
                order[index] = 'A';
            }
        }

        setSortOrder(order);
        setStartEnd(0);
    }

    /***********************************************************************************
     *
     * This will place the letters and digits on the screen below the search bar.
     *
     * @param {*} row   the letter or digit to display
     * @param {*} i     the index into the letterDigit array
     *
     ***********************************************************************************/
    function alphabet (row, i) {
        let key = 'anchor_' + i;

        return (
            <span key={key}><a onClick={() => letterLink(`${row}`)}>{row}</a>&nbsp;&nbsp;</span>
        )
    }

    /***********************************************************************************
     *
     * This will process the letter selected by the user.  It will first sort the
     * column header selected by the user in ascending order.  Next, it will find that
     * letter or digit in the data.  When found it will set the start at the beginning
     * of that letter.  Next it will continue searching until if finds the end of that
     * letter, which becomes the end of that letter.  It will note the start and end
     * positions of that letter and display the items that begin with that letter on the
     * screen.
     *
     * @param {*} letter the selected by the user
     *
     *************************************************************************************/
    function letterLink(letter) {
        if (validate('H') === true) {   // Validate that a search header was entered
            // Used to get the field name of the data item
            let index = props.table.map(function(e) { return e.header; }).indexOf(searchHeader);   // Column match

            sortClicked (props.table[index].name, 'A'); // ascending order

            // Find the beginning of the letter
            let begin = 0;      // Where the beginning of the letter is
            let found = false;  // Indicates that the letter was found
            for (begin = 0; begin < props.data.length; begin++) {
                // Letter or digit is found
                if (props.data[begin][props.table[index].name] !== null &&
                    props.data[begin][props.table[index].name].toString().startsWith(letter) === true) {
                    found = true;
                    break;
                }
            }

            // Find the end of the letter
            let stop = 0;       // Where the end of the letter is
            for (stop = begin; stop < props.data.length; stop++) {
                // End of the letter or digit is found
                if (props.data[stop][props.table[index].name] !== null &&
                    props.data[stop][props.table[index].name].toString().startsWith(letter) === false) {
                    break;
                }
            }

            if (found === true) {
                setStart (begin);
                setEnd (stop);
                (hasProperty(props,'startEnd') === true) ? props.startEnd (begin, stop) : null;
                setDisable (begin);
            } else {
                setAlertMessage ('No ' + searchHeader + ' starts with a ' + letter);
                setShowAlert(true);
            }
        }
    }

    /**********************************************************************************
     *
     * The All button will display all the data and goes along with the showTable
     * props.  It will set the start at the beginning of the data and the end at the
     * end of the data.
     *
     **********************************************************************************/
    function allButton() {
        setStart(0);
        setEnd(props.data.length);
    }

    /*********************************************************************************
     *
     * This will determine if the top, previous, next, or bottom buttons are disabled
     * on the search bar.
     *
     * @param {*} index the current starting index in the data
     *
     *********************************************************************************/
    function setDisable(index) {
        if (index > 0) {    // Index is past the start of the data, so enable top and previous
            setPreviousDisabled(false);
            setTopDisabled(false);
        } else if (props.data.length - maxItems < 0) {   // Can not go any further up so disable top and previous
            setPreviousDisabled(true);
            setTopDisabled(true);
        } else {    // Index is before the start of the data, so disable top and previous
            setPreviousDisabled(true);
            setTopDisabled(true);
        }

        // Cannot go any further down so disable, next and bottom
        if (index + maxItems >= props.data.length) {
            setNextDisabled(true);
            setBottomDisabled(true);
        } else {    // Not at the bottom so enable next and bottom
            setNextDisabled(false);
            setBottomDisabled(false);
        }
    }

    /***********************************************************************************
     *
     * This will determine where the current start and end are in the data so they
     * can be displayed in the table.
     *
     * @param {*} index the current starting position
     *
     ***********************************************************************************/
    function setStartEnd (index) {
        if (index !== -1) {
            if (index + maxItems >= props.data.length) { // End is past the data
                setStart (index);
                setEnd (props.data.length);
                (hasProperty(props,'startEnd') === true) ? props.startEnd (index, props.data.length) : null;
            } else {    // End is not past the data
                setStart (index);
                setEnd (index + maxItems);
                (hasProperty(props,'startEnd') === true) ? props.startEnd (index, index + maxItems) : null;
            }

            setDisable(index);
        }
    }

    /***********************************************************************************
     *
     * This is called when the top button is clicked.  It will set the start and end
     * places in the data, so that it can be determined what to show in the table.
     *
     ***********************************************************************************/
    function topButton() {
        if (maxItems < props.data.length) {  // Not at the end of the data
            setStart (0);
            setEnd (maxItems);
            (hasProperty(props,'startEnd') === true) ? props.startEnd (0, maxItems) : null;
        } else {    // At the end of the data
            setStart (0);
            setEnd (props.data.length);
            (hasProperty(props,'startEnd') === true) ? props.startEnd (0, props.data.length) : null;
        }

        setDisable(0);  // Determine which buttons to disable
    }

    /***********************************************************************************
     *
     * This is called when the previous button is clicked.  It will set the start and end
     * places in the data, so that it can be determined what to show in the table.
     *
     ***********************************************************************************/
    function previousButton() {
        let index = start - maxItems;    // Go back the appropriate number of records in the data
        if (index <= 0) {   // Past the beginning of the data
            setStart (0);
            setEnd (maxItems);
            (hasProperty(props,'startEnd') === true) ? props.startEnd (0, maxItems) : null;
        } else {    // Not past the beginning of the data
            setStart (index);
            setEnd (index + maxItems);
            (hasProperty(props,'startEnd') === true) ? props.startEnd (index, index + maxItems) : null;    // Add max items to get the new current end
        }

        setDisable(index);  // Determine which buttons to disable
    }

    /***********************************************************************************
     *
     * This is called when the next button is clicked.  It will set the start and end
     * places in the data, so that it can be determined what to show in the table.
     *
     ***********************************************************************************/
    function nextButton() {
        let index = end;    // Set the start at the current end of data for the table
        let begin = 0;      // Current beginning of the start of the data

        if (index < props.data.length) {    // Not at the end of the data
            begin = index;
        } else {    // At the end of the data, so place the beginning at the current start
            begin = props.start;
        }

        if (index + maxItems >= props.data.length) { // At the end of the data
            setStart (begin);
            setEnd (props.data.length);
            (hasProperty(props,'startEnd') === true) ? props.startEnd (begin, props.data.length) : null;
        } else {    // Not at the end of the data
            setStart (begin);
            setEnd (index + maxItems);
            (hasProperty(props,'startEnd') === true) ? props.startEnd (begin, index + maxItems) : null;    // Increment to the next max items
        }

        setDisable(index);  // Determine which buttons to disable
    }

    /***********************************************************************************
     *
     * This is called when the bottom button is clicked.  It will set the start and end
     * places in the data, so that it can be determined what to show in the table.
     *
     ***********************************************************************************/
    function bottomButton() {
        if (props.data.length - maxItems < 0) {  // At the end of the data
            setStart (0);
            setEnd (props.data.length);
            (hasProperty(props,'startEnd') === true) ? props.startEnd (0, props.data.length) : null;
        } else {    // Not at the end of the data
            setStart (props.data.length - maxItems);
            setEnd (props.data.length);
            (hasProperty(props,'startEnd') === true) ? props.startEnd(props.data.length - maxItems, props.data.length) : null;
        }

        setDisable(props.data.length);
    }
}

export default SearchSortTable;
