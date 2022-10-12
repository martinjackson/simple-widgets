/* eslint react/prop-types: 0 */

import React, { useState, useEffect } from 'react';
import { css } from "@emotion/react";
import FadeLoader from "react-spinners/FadeLoader";

import CheckBox from './CheckBox.js';
import { Choice } from './List.js';
import { isInvalid, setInvalidScreen,
         processInvalidStyleScreen, wasClickedScreen} from './Invalid.js'
import AlertModal from './AlertModal.js';
import { generateCSSButton } from './Theme.js';


import funnel from './funnel-filter-svgrepo-com.svg';


const upper = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
const lower = [...'abcdefghijklmnopqrstuvwxyz'];
const digit = [...'0123456789'];

const hasProperty = (obj, propName) => {
    return !!Object.getOwnPropertyDescriptor(obj, propName);
}

function range(start, end) {
    if (end == -1 || end < start) {
      return []
    }
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
}


const genHdr = (name) => {
    const header = name.replace(/_/g, ' ')

    return {header, name, search:true, sort:true}
}

const defaultColHeaders = (rowZero) => {

    if (!rowZero)
       return null

    return Object.keys(rowZero).map( col => genHdr(col) )
}

const defaultEachRowInTable = (row, i) => {
    const cols = (!row) ? null : Object.keys(row).map( (idx, j) => ( <td key={i+'_'+j}>{row[idx]}</td> ) )
    const odd = (i%2) ? 'sw-sst_oddRow' : 'sw-sst_evenRow'

    return (<tr className={odd} key={i}>{cols}</tr>)
}

/****************************************************************************
 *
 * This will allow the user to add a filter / search bar to a table in case
 * not all the data is displayed at once.  It will also allow a column to be
 * sorted by clicking on it.
 *
 ****************************************************************************/
const SearchSortTable = (propsPassed) => {
  // let iter = Object.keys(row)       // also works when row === ["hello", "there"]

    // console.log('SearchSortTable Render');

    const defaultProps = {
        error: false,          // Indicates that an error has occrred
        MAX_ITEMS: 100,
        eachRowInTable: defaultEachRowInTable
    }

    const props = Object.assign(defaultProps, propsPassed);

    if (!props.data || !Array.isArray(props.data)) {
       console.log('SearchSortTable: props.data is missing/null or not an Array:', props.data);
       return <><hr /></>
    }

    const invalidArray = [  // Used to tell whether the user entered and invalid value or not
        { validity: false, display: false, message: '' },
        { validity: false, display: false, message: '' },
        { validity: false, display: false, message: '' },
    ];

    const FILTER = 0;
    const SRCHITEM = 1;
    const SRCHHDR = 2;

    const numCols = (props.table) ? props.table.length : 10    // number of columns displayed
    const initialFilters = Array(numCols).fill('');            // React doesn't like <input value={null}
    const initialSortOrder = Array(numCols).fill('N');

    const initialBackground = Array(63).fill({backgroundColor: getComputedStyle(document.documentElement)
                    .getPropertyValue('--sw-theme_backgroundColor')});

    let startIndexes = (props.data.length > 0) ? range(0, props.data.length-1) : []


    // Set the state variables
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState((hasProperty(props,'showAll') === true) ? props.data.length : parseInt(props.MAX_ITEMS));
    const [searchItem, setSearchItem] = useState('');                   // The item to search for
    const [searchHeader, setSearchHeader] = useState('');               // The column to search
    const [searchHeaderValues, setSearchHeaderValues] = useState([searchHeader]); // The value of each header in the table -- intialize array to include default value
    const [sortOrder, setSortOrder] = useState(initialSortOrder);       // Indicates the sort: (N) none, (A) ascending,  or (D) descending (D)
    const [topDisabled, setTopDisabled] = useState(true);               // Indicates whether the top button is disabled or not
    const [previousDisabled, setPreviousDisabled] = useState(true);     // Indicates whether the previous button is disabled or not
    const [nextDisabled, setNextDisabled] = useState(false);            // Indicates whether the next button is disabled or not
    const [bottomDisabled, setBottomDisabled] = useState(false);        // Indicates whether the bottom button is disabled or not
    const [rowValues, setRowValues] = useState([]);                     // Indicates how many rows in the table should be displayed
    const [maxItems, setMaxItems] = useState((hasProperty(props,'showAll') === true) ? props.data.length : parseInt(props.MAX_ITEMS));   // Maximum number of rows to display in the table
    const [maximum, setMaximum] = useState((hasProperty(props,'showAll') === true) ? props.data.length : parseInt(props.MAX_ITEMS));     // Maximum number of rows selected by the user to display in the table
    const [filter, setFilter] = useState(initialFilters);               // The values for each column to be filtered
    const [filterOn, setFilterOn] = useState('');                       // Indicates whether the user has checked the Filter On check box or not
    const [filterPressed, setFilterPressed] = useState(false);         // Indicates whether the filtering is enabled or disabled (Filter button)
    const [invalid, setInvalid] = useState(invalidArray);
    const [alertMessage, setAlertMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [indexes, setIndexes] = useState([...startIndexes]);
    const [copyIndex, setCopyIndex] = useState([...startIndexes]);
    const [length, setLength] = useState(props.data.length);                            // The length of the data
    const [background, setBackground] = useState(initialBackground);
    const [table, setTable] = useState(props.table);

    // const [indexSet, setIndexSet] = useState([[...startIndexes]]);
    // const [origIndexes, setOrigIndexes] = useState([...startIndexes]);
    const origIndexes = [...startIndexes];

    /******************************************************************************
     *
     * Called to populate the header drop down
     *
     ******************************************************************************/

    // ---------
    useEffect (() => {
      // console.log('SearchSortTable useEffect [] ');

      populateSearch(props.table)
    }, []);

    // ---------
    useEffect (() => {
      // console.log('SearchSortTable useEffect [] props.table:', props.table);

      setTable(props.table)
      populateSearch(props.table)
    }, [props.table]);

    // ---------
    useEffect (() => {
      // console.log('SearchSortTable useEffect [props.data] props.table:', props.table, 'table:', table);

      if (!props.table && !table) {        // no table def passed in as a prop, setup a default
        const tableDef = defaultColHeaders(props.data[0])
        setTable(tableDef)
        populateSearch(tableDef)
      }
      if (indexes.length === 0) {
            sendIndexes(0, origIndexes.length, origIndexes.length, origIndexes);
            setFilterOn(false);
            setStartEnd(0, origIndexes.length, origIndexes);
            setIndexes(origIndexes);
            setCopyIndex(origIndexes);
            setLength(origIndexes.length);
            setDisable(0, origIndexes.length);
        } else {
            setDisable(start, length);
            sendIndexes(start, end, length, indexes);
        }
    }, [props.data]);

    // ---------
    useEffect (() => {
        // console.log('SearchSortTable useEffect [props.data.length] ');

        setFilterOn(false);
        setStartEnd(0, origIndexes.length, origIndexes);
        setIndexes(origIndexes);
        setCopyIndex(origIndexes);
        setLength(origIndexes.length);
        sendIndexes(0, origIndexes.length, origIndexes.length, origIndexes);
        setDisable(0, origIndexes.length);
    }, [props.data.length])


/*
    console.log('props.data.length :', props.data.length);
    console.log ('start', start);
    console.log ('end', end);
    console.log ('length', length);
    console.log ('indexes', indexes);
    console.log ('maxItems', maxItems);
    console.log ('maximum', maximum);
    console.log ('origIndexes', origIndexes);
    console.log ('startIndexes :', startIndexes);
*/

    if (hasProperty(props,'data') === false) {
      console.error ('Search Sort Table component: A data prop must be passed');
      return (<span></span>);
    }

    // if (hasProperty(props,'table') === false) {
    //   console.error ('Search Sort Table component: A table object prop must be passed');
    //   return (<span></span>);
    // }

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
    function populateSearch(table) {
        let localFilter = [...filter];   // The values in the filter input boxes
        let search = [''];      // The values for the drop down

        if (!table) {
           return
        }

        // Build the items for the drop down, the sort order, and the filter
        for (let i = 0; i < table.length; i++) {
            if (table[i].search === true) {
                search.push (table[i].header);
            }
            if (hasProperty(props,'nofilter') === true) {
                localFilter[i] = '';
            }
        }

        setSearchHeaderValues(search);

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
    let tableDivStyle = '';
    if (hasProperty(props,'scroll') === true) {
        tableDivStyle = 'sw-sst_scrollStyle';
    }

    let heightWidthStyle = {};
    if (hasProperty(props, 'height') === true && hasProperty(props, 'width') === false) {
        heightWidthStyle = { height: props.height };
    } else if (hasProperty(props, 'height') === false && hasProperty(props, 'width') === true) {
        heightWidthStyle = { width: props.width };
    } else if (hasProperty(props, 'height') === true && hasProperty(props, 'width') === true) {
        heightWidthStyle = { height: props.height, width: props.width };
    }

    let filterBackground = null;
    if (filterOn !== 'Y') {
        filterBackground = 'sw-sst_imageStyleDisable';
    } else if (filterPressed === true) {
        filterBackground = 'sw-sst_imageStyleFilter';
    } else {
        filterBackground = 'sw-sst_imageStyleNormal';
    }

    let headerStyle = 'sw-sst_headerStyle';
    if (hasProperty(props, 'noheaderborder') === true) {
        headerStyle = 'sw-sst_headerStyle2';
    }

    let footerStyle = 'sw-sst_footerStyle';
    if (hasProperty(props, 'nofooterborder') === true) {
        footerStyle = 'sw-sst_footerStyle2';
    }

    const genButtonStyle         = generateCSSButton('sw-sst_buttonStyle', props.error, false, false, 'sw-sst_normalButtonBackground', 'sw-sst_grayButtonBackground');
    const genTopButtonStyle      = generateCSSButton('sw-sst_noButtonStyle', props.error, topDisabled, true, 'sw-sst_normalButtonBackground', 'sw-sst_grayButtonBackground');
    const genPreviousButtonStyle = generateCSSButton('sw-sst_noButtonStyle', props.error, previousDisabled, true, 'sw-sst_normalButtonBackground', 'sw-sst_grayButtonBackground');
    const genNextButtonStyle     = generateCSSButton('sw-sst_noButtonStyle', props.error, nextDisabled, true, 'sw-sst_normalButtonBackground', 'sw-sst_grayButtonBackground');
    const genBottomButtonStyle   = generateCSSButton('sw-sst_noButtonStyle', props.error, bottomDisabled, true, 'sw-sst_normalButtonBackground', 'sw-sst_grayButtonBackground');
    const genFilterStyle         = generateCSSButton(filterBackground,  props.error, filterOn !== 'Y', true, 'sw-sst_normalButtonBackground', 'sw-sst_grayButtonBackground');

    const topSymbol = '|\u2BC7';        // Bar and left triangle
    const previousSymbol = '\u2BC7';    // Left triangle
    const nextSymbol = '\u2BC8';        // Right triangle
    const bottomSymbol = '\u2BC8|';     // Right triangle and bar

    // Populate the table with the next set of data to populate

    let showData = [];
    if (props.data !== undefined && props.data !== null && indexes.length !== 0) {
        for (let i = start; i < end && i < props.data.length; i++) {
            showData.push (props.data[indexes[i]]);
        }
    }

//    console.log('showData :', showData);

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

        letterDigit.push('^');
        letters = <span key="letters"><br />{letterDigit.map(alphabet)}<br /><br /></span>
    }

    let topButtonHTML = <span></span>;
    if (hasProperty(props,'notop') === false && hasProperty(props,'showAll') === false) {
        topButtonHTML = <button name="top" className={genTopButtonStyle} onClick={() => topButton()} disabled={props.error || topDisabled}>{topSymbol}</button>;
    }

    let previousButtonHTML = <span></span>;
    if (hasProperty(props,'noprevious') === false && hasProperty(props,'showAll') === false) {
        previousButtonHTML = <button name="previous" className={genPreviousButtonStyle} onClick={() => previousButton()} disabled={props.error || previousDisabled}>{previousSymbol}</button>;
    }

    let nextButtonHTML = <span></span>;
    if (hasProperty(props,'nonext') === false && hasProperty(props,'showAll') === false) {
        nextButtonHTML = <button name="next" className={genNextButtonStyle} onClick={() => nextButton()} disabled={props.error || nextDisabled}>{nextSymbol}</button>;
    }

    let bottomButtonHTML = <span></span>;
    if (hasProperty(props,'nobottom') === false && hasProperty(props,'showAll') === false) {
        bottomButtonHTML = <button name="bottom" className={genBottomButtonStyle} onClick={() => bottomButton()} disabled={props.error || bottomDisabled}>{bottomSymbol}</button>;
    }

    let allButtonHTML = <span></span>;
    if (hasProperty(props,'showAll') === true) {
        allButtonHTML = <button name="all" className={genBottomButtonStyle} onClick={() => allButton()} disabled={props.error}>All</button>;
    }

    let title = null;
    if (hasProperty(props,'title') === true) {
        if (hasProperty(props,'titleSize') === true) {
            if (props.titleSize === '1') {
                title = <h1 className="sw-sst_titleStyle">{props.title}</h1>
            } else if (props.titleSize === '2') {
                title = <h2 className="sw-sst_titleStyle">{props.title}</h2>
            } else {
                title = <h3 className="sw-sst_titleStyle">{props.title}</h3>
            }
        } else {
            title = <h3 className="sw-sst_titleStyle">{props.title}</h3>
        }
    }

    const filterSection = (hasProperty(props,'nofilter') === true) ? null :
        (<>
            <CheckBox selectedValue="Y" name="filterOn" text="&nbsp;&nbsp;&nbsp;Filter On" value={filterOn} onChange={(event) => processFilterOn(event.target.value)} />
            <button onClick={filterButton} className="sw-sst_buttonStyle2" disabled={props.error || filterOn !== 'Y'}>
                <img src={funnel} width="30px" height="30px" className={genFilterStyle} />
            </button>
        </>)

    const searchStyle = processInvalidStyleScreen(invalid, SRCHHDR, 'sw-sst_searchStyle');

    const itemStyle = processInvalidStyleScreen(invalid, SRCHITEM);

    const searchSection = (hasProperty(props,'nosearch') === true) ? null :
        (<>
            <span className="sw-invalid_checkForError">
                <Choice choices={searchHeaderValues}  name="searchHeader" value={searchHeader} onChange={(event) => setSearchHeader(event.target.value)} onClick={() => wasClickedScreen(invalid, SRCHHDR, setInvalid)} className={searchStyle} disabled={props.error} />
                {(isInvalid(invalid[SRCHHDR], -1) === true) ? <span className="sw-invalid_errMessage">{invalid[SRCHHDR].message}</span> : null }
            </span>
            <span className="sw-invalid_checkForError">
                <input type="text" name="searchItem" value={searchItem} onChange={(event) => setupSearch(event.target.value)} onClick={() => wasClickedScreen(invalid, SRCHITEM, setInvalid)} className={itemStyle} disabled={props.error} />
                {(isInvalid(invalid[SRCHITEM], -1) === true) ? <span className="sw-invalid_errMessage">{invalid[SRCHITEM].message}</span> : null }
            </span>
            <button name="searchButtonName" className={genButtonStyle} onClick={() => searchItemButton()} disabled={props.error}>Search</button>
        </>)

    const footer = (hasProperty(props,'nofooter') === true) ? null :
        <div className="sw-sst_footStyle">
            { (hasProperty(props,'norows') === true) ? null :
                <span className="sw-sst_marginStyle">
                    <Choice choices={rowValues} name="rows" value={maximum} onChange={(event) => processMaxItems(event.target.value)} className="sw-sst_noBorderStyle" disabled={props.error} />
                    rows
                </span>
            }
            {topButtonHTML}
            {previousButtonHTML}
            { (hasProperty(props,'nodisplay') === true) ? null :
                <span>{start + ' - ' + end + ' of ' + length}</span>
            }
            {nextButtonHTML}
            {bottomButtonHTML}
        </div>

    let hoverClassName = `sw-sst_tableStyle `;
    if (hasProperty(props,'hover') === true) {
        let root = document.documentElement;
        let hoverBackColor = 'cyan';
        let found = false;

        if (hasProperty(props,'hoverColor') === true) {
            hoverBackColor = props.hoverColor;
        }

        for (let i = 1; i <= 10 && found === false; i++) {
            let colorValue = getComputedStyle(root).getPropertyValue(`--sw-sst_hover_back_color${i}`);
            if (colorValue === ' none') {
                root.style.setProperty(`--sw-sst_hover_back_color${i}`, hoverBackColor);
                hoverClassName += `sw-sst_search_sort_table${i}`;
                found = true;
            } else if (colorValue === hoverBackColor) {
                hoverClassName += `sw-sst_search_sort_table${i}`;
                found = true;
            }
        }

        if (found === false) {
            console.error ('You can have at most 10 different hover colors for tables.')
        }
    }

    if (!table) {    // Loading (no Table Col Defs yet, no data yet)
      const override = css`
        margin: 0 auto;
        `;
      const msg = (props.spinner) ?
          <div style={{height: '6em'}}>
            <h3>Loading</h3>
            <FadeLoader css={override} size="30px" color="teal" loading={true} />
          </div>
       : <span></span>

      return msg
    }

    return (    // Render the screen
        <div className="sw-sst_divStyle">
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
                <div className={tableDivStyle} style={heightWidthStyle}>
                    <table className={hoverClassName}>
                        <tbody>
                            <tr key="header" className="sw-sst_centerBoldStyle">
                                {table.map(buildHeaders)}
                            </tr>
                           { showData.map(props.eachRowInTable) }
                           { (hasProperty(props,'footer') === true) ?
                                <tr className="footerStyle">{ props.footer.map(buildFooter) }</tr> : null }
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
        setStartEnd(0, length, indexes);
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
    function buildHeaders(row, i) {
        let key = 'cell_' + i;
        let btnImg = '\u2BC8';
        // let filterKey = 'filter_' + i;
        let filterName = row.header + '_filter'

        // console.log(`buildHeaders() filter[${filter.length}]:`, JSON.stringify(filter));


        if (table[i].sort === true && sortOrder[i] !== 'N') {
            // After the sort was done, it flips the sort order; therefore, if it is
            // now a D, that means it was sorted in ascending order previously.  If
            // it is now an A, that means it was sorted in descending order previously.
            if (sortOrder[i] === 'A') {
                btnImg = '\u2BC5';    // Up arrow
            } else if (sortOrder[i] === 'D') {
                btnImg = '\u2BC6';    // Down arrow
            } else if (sortOrder[i] === 'N') {
                btnImg = '\u2BC8';    // Right arrow
            }
        }

        // Filter is turned on
        if (filterOn === 'Y' && hasProperty(props,'nofilter') === false) {
            let filterStyle = processInvalidStyleScreen(invalid, FILTER, 'sw-sst_widthStyle');

            if (row.sort === false || hasProperty(props,'nosort') === true) { // No sorting, so no onClick handler
                if (row.search === false) { // No searching on this field, so no filtering on it also
                    return (<th key={key} className={headerStyle}>{row.header}</th>)  // Display the header only
                } else {    // Can filter; therefore, display the input field
                    return (
                        <th key={key} className={headerStyle}>
                            <div>{row.header}</div>
                            <span className="sw-invalid_checkForError">
                                <input type="text" name={filterName} className={filterStyle} value={filter[i]} onChange={(event) => processFilter(event.target.value, i)} disabled={props.error} />
                            </span>
                        </th>
                    );
                }
            } else {    // Sorting on the column is allowed
                if (row.search === false) { // No searching or filtering on the column, so display header only
                    return (
                        <th key={key} className={headerStyle}>
                            {row.header}
                            <button name="sort" onClick={() => sortClicked(row.name, 'X', indexes)} className="sw-sst_buttonStyle2">{btnImg}</button>
                        </th>
                    );
                } else {    // Searching and filtering is allowed
                    return (    // Display header and input field for filtering
                        <th key={key} className={headerStyle}>
                            <div>
                                {row.header}
                                <button name="sort" onClick={() => sortClicked(row.name, 'X', indexes)} className="sw-sst_buttonStyle2">{btnImg}</button>
                            </div>
                            <span className="sw-invalid_checkForError">
                                <input type="text" name={filterName} className={filterStyle} value={filter[i]} onChange={(event) => processFilter(event.target.value, i)} disabled={props.error} />
                            </span>
                        </th>
                    );
                }
            }
        // Filtering is off or not allowed
        } else if (row.sort === false || hasProperty(props,'nosort') === true) { // No sorting, so no onClick handler
            return ( <th key={key} className={headerStyle}>{row.header}</th> ); // Display the header only
        } else {    // Soring on the column is allowed
            return (
                <th key={key} className={headerStyle}>
                    {row.header}
                    <button name="sort" onClick={() => sortClicked(row.name, 'X', indexes)} className="sw-sst_buttonStyle2">{btnImg}</button>
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
            <td key={key} className={footerStyle}>{row}</td>
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
            clearSetBackground(0, false);
        } else {
            setFilterPressed(false);        // Disable the filter button
        }

        setIndex(origIndexes, true);
        resetSortOrder();
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

        // console.log(`processFilter() local[${local.length}]`, JSON.stringify(local));

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
        let indexing = [];      // List of indexes that indicate which filter input boxes have data
        let found = [];         // Indicates whether that filter input box found data to filter
        let count = 0;          // counts the number of filtered data
        let done = false;       // Indicates that we are done filtering that data element

        // Build the indexes in which the user entered data in the filter input box
        for (let i = 0; i < table.length; i++) {
            if (filter[i] !== '') {
                indexing.push(i);
            }
        }

        let foundDate = false;

        // Spin through the data and see if it meets the filter criteria
        for (let i = 0; i < indexes.length; i++) {
            found = [];     // Empty the found array for the next data element
            done = false;
            // Spin through the filter input boxes to see if the data element matches
            for (let j = 0; j < indexing.length && done === false; j++) {
                foundDate = false;
                // Find if the index is in the date table
                if (hasProperty(table[indexing[j]], 'dataDate') && hasProperty(table[indexing[j]], 'filterDate')) {
                    foundDate = true;
                }

                // The data field is blank or has no value
                if (data[indexes[i]][table[indexing[j]].name] === null ||
                    data[indexes[i]][table[indexing[j]].name] === undefined) {
                    found.push(false);
                    done = true;
                } else if (foundDate === true) {    // The field contains a date
                    let dataPart = null;
                    let filterPart = null;

                    // Convert the format for the data part
                    if (table[indexing[j]].dataDate === 'MM/DD/YYYY') {
                        dataPart = convertDate(data[indexes[i]][table[indexing[j]].name], '/', 1);
                    } else if (table[indexing[j]].dataDate === 'MM-DD-YYYY') {
                        dataPart = convertDate(data[indexes[i]][table[indexing[j]].name], '-', 1);
                    } else if (table[indexing[j]].dataDate === 'MM/DD/YYYY HH:MM:SS') {
                        dataPart = convertDateTime(data[indexes[i]][table[indexing[j]].name], '/', 1);
                    } else if (table[indexing[j]].dataDate === 'MM-DD-YYYY HH:MM:SS') {
                        dataPart = convertDateTime (data[indexes[i]][table[indexing[j]].name], '-', 1);
                    } else if (table[indexing[j]].dataDate === 'YYYY-MM-DDTHH:MM:SS.SSS') {
                        dataPart = convertDateTimeReg (data[indexes[i]][table[indexing[j]].name]);
                    } else {
                        dataPart = data[indexes[i]][table[indexing[j]].name];
                    }

                    // Convert the format for the filter part
                    if (table[indexing[j]].filterDate === 'MM/DD/YYYY') {
                        if (filter[indexing[j]].length === 'MM/DD/YYYY'.length) {
                            filterPart = convertDate(filter[indexing[j]], '/', 1);
                        } else if (filter[indexing[j]].length === 'MM/YYYY'.length && filter[indexing[j]].indexOf('/') !== -1) {
                            filterPart = convertDate(filter[indexing[j]], '/', 2);
                        } else {
                            filterPart = filter[indexing[j]];
                        }
                    } else if (table[indexing[j]].filterDate === 'MM-DD-YYYY') {
                        if (filter[indexing[j]].length === 'MM-DD-YYYY'.length) {
                            filterPart = convertDate(filter[indexing[j]], '-', 1);
                        } else if (filter[indexing[j]].length === 'MM-YYYY'.length && filter[indexing[j]].indexOf('-') !== -1) {
                            filterPart = convertDate(filter[indexing[j]], '-', 2);
                        } else {
                            filterPart = filter[indexing[j]];
                        }
                    } else if (table[indexing[j]].filterDate === 'MM/DD/YYYY HH:MM:SS') {
                        if (filter[indexing[j]].length === 'MM/DD/YYYY HH:MM:SS'.length) {
                            filterPart = convertDateTime(filter[indexing[j]], '/', 1);
                        } else if (filter[indexing[j]].length === 'MM/YYYY'.length && filter[indexing[j]].indexOf('/') !== -1) {
                            filterPart = convertDate(filter[indexing[j]], '/', 2);
                        } else {
                            filterPart = filter[indexing[j]];
                        }
                    } else if (table[indexing[j]].filterDate === 'MM-DD-YYYY HH:MM:SS') {
                        if (filter[indexing[j]].length === 'MM-DD-YYYY HH:MM:SS'.length) {
                            filterPart = convertDateTime (filter[indexing[j]], '-', 1);
                        } else if (filter[indexing[j]].length === 'MM/YYYY'.length && filter[indexing[j]].indexOf('-') !== -1) {
                            filterPart = convertDate(filter[indexing[j]], '-', 2);
                        } else {
                            filterPart = filter[indexing[j]];
                        }
                    } else if (table[indexing].filterDate === 'YYYY-MM-DDTHH:MM:SS.SSS') {
                        if (filter[indexing[j]].length === 'YYYY-MM-DDTHH:MM:SS.SSS'.length) {
                            filterPart = convertDateTimeReg (filter[indexing[j]]);
                        } else {
                            filterPart = filter[indexing[j]];
                        }
                    } else {
                        filterPart = filter[indexing[j]];
                    }

                    if (dataPart.toString().indexOf(filterPart.toString()) !== -1) {  // Compare the dates
                        found.push(true);
                    } else {    // Dates are not equal
                        found.push(false);
                        done = true;
                    }
                // The data element matches one of the filter input boxes
                } else if (data[indexes[i]][table[indexing[j]].name].toString().indexOf(filter[indexing[j]].toString()) !== -1) {
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
                newData.push(indexes[i]);
                count++;
            }
        }

        if (count > 0) {    // There are filtered data elements
            setIndex(newData, true);
            setFilterPressed(true);
        }
    }

    function setIndex(indexing, doCopy) {
        setIndexes(indexing);
        if (doCopy === true) {
            setCopyIndex(indexing);
        }
        setLength (indexing.length);
        setStartEnd (0, indexing.length, indexing);
    }


    /**********************************************************************************************
     *
     * This will convert the date from the MM/DD/YYYY or MM-DD-YYYY format to the YYYY-MM-DD
     * format.
     *
     * @param {*} date the date to be converted to the YYYY-MM-DD format
     * @param {*} char the slash (/) or dash (-)
     *
     **********************************************************************************************/
    function convertDate(date, char, type) {
        let split = date.split(char);

        if (type === 1) {
            return `${split[2]}-${split[0]}-${split[1]}`;
        } else {
            return `${split[1]}-${split[0]}`;
        }
    }

    /**********************************************************************************************
     *
     * This will convert the date and time from the MM/DD/YYYY HH:MM:SS or MM-DD-YYYY HH:MM:SS
     * format to the YYYY-MM-DD HH:MM:SS format.
     *
     * @param {*} date the date to be converted to the YYYY-MM-DD format
     * @param {*} char the slash (/) or dash (-)
     *
     **********************************************************************************************/
    function convertDateTime(date, char, type) {
        let dateTime = date.split(' ');
        let localDate = dateTime[0].split(char);

        if (type === 1) {
            return `${localDate[2]}-${localDate[0]}-${localDate[1]}T${dateTime[1]}`;
        } else {
            return `${localDate[1]}-${localDate[0]}`;
        }
    }

    /**********************************************************************************************
     *
     * This will strip of the milliseconds from the YYYY-MM-DDTHH:MM:SS.SSS format (strips the
     * .SSS).
     *
     * @param {*} date the date to strip the milliseconds from
     *
     ***********************************************************************************************/
    function convertDateTimeReg(date) {
        let split = date.split('.');

        if (split.length === 0) {
            return date;
        } else {
            return split[0];
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
        if (table && validate('B') === true) {  // Make sure a value has been selected in the drop down and text box
            let search = null;
            search = (hasProperty(props,'ignorecase') === true) ?
                searchItem.toUpperCase() :  // Convert to upper case to ignore case
                searchItem;
            // Find a match in the correct column of the data
            let tableIndex = table.map(function(e) { return e.header; }).indexOf(searchHeader);   // Column match
            if (hasProperty(table[tableIndex], 'dataDate') && hasProperty(table[tableIndex], 'searchDate')) {
                searchDate(search, tableIndex);
            } else if (hasProperty(props,'searchstart') === true) {
                searchStart(search, table[tableIndex].name);
            } else {
                searchAny(search, table[tableIndex].name);
            }
//            let index = props.data.findIndex(val => val[table[tableIndex].name].toString().startsWith(search));   // Text match
//            setStartEnd(index); // Set the start and end to show the found text
        }
    }

    /*********************************************************************************************
     *
     * This is search through the date and compare dates in the correct format to see if they
     * are equal.  If they are equal, it will move that row in the table to the top.
     *
     * Parameters:
     * 1.   searchItem - the date to search for
     * 2.   name - the name in the props.table that indicates the date column
     * 3.   tableIndex - the index into the props.table
     *
     **********************************************************************************************/
    function searchDate(searchItem, tableIndex) {

        let data = props.data;  // The data to filter
        let done = false;

        // Find if the index is in the date table

        for (let i = 0; i < indexes.length && done === false; i++) {
            // The data field is blank or has no value
            if (data[indexes[i]][table[tableIndex].name] === null) {
                done = true;
            } else {    // The field contains a date
                let dataPart = null;
                let searchPart = null;

                // Convert the format for the data part
                if (table[tableIndex].dataDate === 'MM/DD/YYYY') {
                    dataPart = convertDate(data[indexes[i]][table[tableIndex].name], '/', 1);
                } else if (table[tableIndex].dataDate === 'MM-DD-YYYY') {
                    dataPart = convertDate(data[indexes[i]][table[tableIndex].name], '-', 1);
                } else if (table[tableIndex].dataDate === 'MM/DD/YYYY HH:MM:SS') {
                    dataPart = convertDateTime(data[indexes[i]][table[tableIndex].name], '/', 1);
                } else if (table[tableIndex].dataDate === 'MM-DD-YYYY HH:MM:SS') {
                    dataPart = convertDateTime (data[indexes[i]][table[tableIndex].name], '-', 1);
                } else if (table[tableIndex].dataDate === 'YYYY-MM-DDTHH:MM:SS.SSS') {
                    dataPart = convertDateTimeReg (data[indexes[i]][table[tableIndex].name]);
                } else {
                    dataPart = data[indexes[i]][table[tableIndex].name];
                }

                // Convert the format for the filter part
                if (table[tableIndex].searchDate === 'MM/DD/YYYY') {
                    if (searchItem.length === 'MM/DD/YYYY'.length) {
                        searchPart = convertDate(searchItem, '/', 1);
                    } else if (searchItem.length === 'MM/YYYY'.length && searchItem.indexOf('/') !== -1) {
                        searchPart = convertDate(searchItem, '/', 2);
                    } else {
                        searchPart = searchItem;
                    }
                } else if (table[indexing[j]].searchDate === 'MM-DD-YYYY') {
                    if (searchItem.length === 'MM-DD-YYYY'.length) {
                        searchPart = convertDate(searchItem, '-', 1);
                    } else if (searchItem.length === 'MM-YYYY'.length && searchItem.indexOf('-') !== -1) {
                        searchPart = convertDate(searchItem, '-', 2);
                    } else {
                        searchPart = searchItem;
                    }
                } else if (table[indexing[j]].searchDate === 'MM/DD/YYYY HH:MM:SS') {
                    if (searchItem.length === 'MM/DD/YYYY HH:MM:SS'.length) {
                        searchPart = convertDateTime(searchItem, '/', 1);
                    } else if (searchItem.length === 'MM/YYYY'.length && searchItem.indexOf('/') !== -1) {
                        searchPart = convertDate(searchItem, '/', 2);
                    } else {
                        searchPart = searchItem;
                    }
                } else if (table[indexing[j]].searchDate === 'MM-DD-YYYY HH:MM:SS') {
                    if (searchItem.length === 'MM-DD-YYYY HH:MM:SS'.length) {
                        searchPart = convertDateTime (searchItem, '-', 1);
                    } else if (searchItem.length === 'MM/YYYY'.length && searchItem.indexOf('-') !== -1) {
                        searchPart = convertDate(searchItem, '-', 2);
                    } else {
                        searchPart = searchItem;
                    }
                } else if (table[indexing].searchDate === 'YYYY-MM-DDTHH:MM:SS.SSS') {
                    if (searchItem.length === 'YYYY-MM-DDTHH:MM:SS.SSS'.length) {
                        searchPart = convertDateTimeReg (searchItem);
                    } else {
                        searchPart = searchItem;
                    }
                } else {
                    searchPart = searchItem;
                }

                if (dataPart.toString().indexOf(searchPart.toString()) !== -1) {  // Compare the dates
                    setStartEnd(i, length, indexes); // Set the start and end positions of the data on the screen.

                    done = true;
                }
            }
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
    function searchStart(search, name) {
        let begin = (hasProperty(props,'nocontsearch') === true || start === 0) ? 0: start + 1;  // Where to start the search
        let found = false;  // Indicates that the item was found

        for (let i = begin; i < length && found === false; i++) {
            if (props.data[indexes[i]][name].toString().startsWith(search)) {    // Item was found
                found = true;
                setStartEnd(i, length, indexes); // Set the start and end positions of the data on the screen.
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
    function searchAny(search, name) {
        let begin = (hasProperty(props,'nocontsearch') === true || start === 0) ? 0: start + 1;  // Where to start the search
        let found = false;  // Indicates that the item was found

        for (let i = begin; i < props.data.length && found === false; i++) {
            const str = (props.data[indexes[i]][name]) ? props.data[indexes[i]][name].toString() : ''

            if (str.indexOf(search) !== -1) {    // Item was found
                found = true;
                setStartEnd(i, length, indexes);  // Set the start and end positions of the data on the screen.
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
    function sortClicked(name, orderType, indexes) {

        // console.log('sortClicked(',name, orderType);

        if (!table) {
           return []
        }

        let index = table.map(function(e) { return e.name; }).indexOf(name);   // Column match

        // console.log('sortClicked index:', index, 'name:', name);

        let order = [...sortOrder];
        let ordering = 'A';

        if (orderType === 'A') {
            ordering = 'A';
        } else {
            if (order[index] === 'N') { // If sort is not specified (first time), change it to ascending
                ordering = 'A';
                order[index] = 'A';
            } else if (order[index] === 'A') {
                ordering = 'D';
                order[index] = 'D';
            } else if (order[index] === 'D') {
                ordering = 'N'
                order[index] = 'N'
            }

            setSortOrder(order);
        }

        // console.log('sortOrder was:', sortOrder, 'changing to:', order, 'ordering:', ordering, 'orderType:', orderType);

        if (ordering === 'N') {
            setIndex(copyIndex, false);

            return;
        }

        let dateFormat = null;
        if (hasProperty(table[index], 'sortDate')) {
            dateFormat = table[index].sortDate;
        }

        let sortAry = [];
        indexes.map ((row) => {
            if (dateFormat !== null) {
                if (dateFormat === 'MM/DD/YYYY') {
                    sortAry.push({index: row, data: convertDate(props.data[row][name], '/', 1)});
                } else if (dateFormat === 'MM-DD-YYYY') {
                    sortAry.push({index: row, data: convertDate(props.data[row][name], '-', 1)});
                } else if (dateFormat === 'MM/DD/YYYY HH:MM:SS') {
                    sortAry.push({index: row, data: convertDateTime(props.data[row][name], '/', 1)});
                } else if (dateFormat === 'MM-DD-YYYY HH:MM:SS') {
                    sortAry.push({index: row, data: convertDateTime(props.data[row][name], '-', 1)});
                } else if (dateFormat === 'YYYY-MM-DDTHH:MM:SS.SSS') {
                    sortAry.push({index: row, data: convertDateTimeReg (data[row][name])});
                } else {
                    sortAry.push({index: row, data: props.data[row][name]})
                }
            } else {
                sortAry.push({index: row, data: props.data[row][name]})
            }
        });

        sortAry.sort(function (item1, item2) {
            // Convert to upper case if ignoring case
            if (typeof item1.data === 'string' &&
                hasProperty(props,'ignorecase') === true) {
                // item1.data = (item1.data !== null) ? item1.data.toUpperCase() : null;
                item1.data = item1.data.toUpperCase()
                item2.data = (item2.data !== null) ? item2.data.toUpperCase() : null;
            }

            // Make the comparison
            if (item1.data < item2.data) {
                return (ordering === 'A') ? -1 : 1;
            } else if (item1.data > item2.data) {
                return (ordering === 'A') ? 1 : -1;
            } else {
                return 0;   // Equal
            }
        });

        let newIndexes = [];
        sortAry.map((row) => newIndexes.push(row.index));

        setIndex(newIndexes, false);

        return newIndexes;
    }

    /***********************************************************************************
     *
     * This will place the letters and digits on the screen below the search bar.
     *
     * @param {*} row   the letter or digit to display
     * @param {*} i     the index into the letterDigit array
     *
     ***********************************************************************************/
    function alphabet(row, i) {
        let key = 'anchor_' + i;

        return (
            <span key={key}><a onClick={() => letterLink(`${row}`, i)} className={background[i]}>{row}</a>&nbsp;&nbsp;</span>
        )
    }

    function resetSortOrder() {
        let order = new Array(table.length).fill('N');
        console.log('sortOrder was:', sortOrder, 'changing to:', order);
        setSortOrder(order);
    }

    function clearSetBackground(index, set) {
        let backgrd = [...background];
        for (let i = 0; i < backgrd.length; i++) {
            backgrd[i] = 'sw-sst_regBackground';
        }
        if (set === true) {
            backgrd[index] = 'sw-sst_letterBackground';
        }

        setBackground(backgrd);
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
    function letterLink(letter, bIndex) {

        if (!table) {
          return
        }

        let indexing = [...origIndexes];

        if (validate('H') === true) {   // Validate that a search header was entered
            // Used to get the field name of the data item
            let index = table.map(function(e) { return e.header; }).indexOf(searchHeader);   // Column match

            clearSetBackground(bIndex, true);

            resetSortOrder();
            setIndex(origIndexes, true);
            if (letter === '^') {
//                setIndex(origIndexes, true);
//                setDisableLetter(false);
                return;
            }

            const sortIndexes = sortClicked (table[index].name, 'A', indexing); // ascending order

            let newIndexes = [];

            // Find the beginning of the letter
            let begin = 0;      // Where the beginning of the letter is
            let found = false;  // Indicates that the letter was found
            for (begin = 0; begin < sortIndexes.length; begin++) {
                // Letter or digit is found
                if (props.data[sortIndexes[begin]][table[index].name] !== null &&
                    props.data[sortIndexes[begin]][table[index].name].toString().startsWith(letter) === true) {
                    found = true;
                    break;
                }
            }

            // Find the end of the letter
            let stop = 0;       // Where the end of the letter is
            for (stop = begin; stop < sortIndexes.length; stop++) {
                // End of the letter or digit is found
                if (props.data[sortIndexes[stop]][table[index].name] !== null &&
                    props.data[sortIndexes[stop]][table[index].name].toString().startsWith(letter) === false) {
                    break;
                }
                newIndexes.push(sortIndexes[stop]);
            }

            if (found === true) {
                setIndex(newIndexes, true);
                setDisable (0, newIndexes.length);
                setFilterOn(false);
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
        setEnd(length);
    }

    /*********************************************************************************
     *
     * This will determine if the top, previous, next, or bottom buttons are disabled
     * on the search bar.
     *
     * @param {*} index the current starting index in the data
     *
     *********************************************************************************/
    function setDisable(index, endLen) {
        if (index > 0) {    // Index is past the start of the data, so enable top and previous
            setPreviousDisabled(false);
            setTopDisabled(false);
        } else {
                  // Can not go any further up so disable top and previous
                  // Index is before the start of the data, so disable top and previous
            setPreviousDisabled(true);
            setTopDisabled(true);
        }

        // Cannot go any further down so disable, next and bottom
        if (index + maxItems >= endLen) {
            setNextDisabled(true);
            setBottomDisabled(true);
        } else {    // Not at the bottom so enable next and bottom
            setNextDisabled(false);
            setBottomDisabled(false);
        }
    }

    function sendIndexes(start, end, length, indexes) {
        let sentIndexes = [];
        for (let i = start; i < end && i < length; i++) {
            sentIndexes.push(indexes[i]);
        }

        if (hasProperty(props, 'indexing')) {
            props.indexing(sentIndexes);
        }

        if (hasProperty(props, 'allIndexes') === true) {
            props.allIndexes(indexes);
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
    function setStartEnd(index, dataLen, indexes) {
        if (index !== -1) {
            if (index + maxItems >= dataLen) { // End is past the data
                setStart (index);
                setEnd (dataLen);
                (hasProperty(props,'startEnd') === true) ? props.startEnd (index, dataLen) : null;
                sendIndexes(index, dataLen, dataLen, indexes);
                setDisable(index, dataLen);
            } else {    // End is not past the data
                setStart (index);
                setEnd (index + maxItems);
                setDisable(index, dataLen);
                (hasProperty(props,'startEnd') === true) ? props.startEnd (index, index + maxItems) : null;
                sendIndexes(index, index + maxItems, dataLen, indexes);
            }
        }
    }

    /***********************************************************************************
     *
     * This is called when the top button is clicked.  It will set the start and end
     * places in the data, so that it can be determined what to show in the table.
     *
     ***********************************************************************************/
    function topButton() {
        if (maxItems < length) {  // Not at the end of the data
            setStart (0);
            setEnd (maxItems);
            (hasProperty(props,'startEnd') === true) ? props.startEnd (0, maxItems) : null;
            sendIndexes(0, maxItems, length, indexes);
        } else {    // At the end of the data
            setStart (0);
            setEnd (length);
            (hasProperty(props,'startEnd') === true) ? props.startEnd (0, length) : null;
            sendIndexes(0, length, length, indexes);
        }

        setDisable(0, length);  // Determine which buttons to disable
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
            sendIndexes(0, maxItems, length, indexes);
        } else {    // Not past the beginning of the data
            setStart (index);
            setEnd (index + maxItems);
            (hasProperty(props,'startEnd') === true) ? props.startEnd (index, index + maxItems) : null;    // Add max items to get the new current end
            sendIndexes(index, index + maxItems, length, indexes);
        }

        setDisable(index, length);  // Determine which buttons to disable
    }

    /***********************************************************************************
     *
     * This is called when the next button is clicked.  It will set the start and end
     * places in the data, so that it can be determined what to show in the table.
     *
     ***********************************************************************************/
    function nextButton() {
        let index = parseInt(end);    // Set the start at the current end of data for the table
        let begin = 0;      // Current beginning of the start of the data

        if (index < length) {    // Not at the end of the data
            begin = index;
        } else {    // At the end of the data, so place the beginning at the current start
            begin = start;
        }

        if (index + maxItems >= length) { // At the end of the data
            setStart (begin);
            setEnd (length);
            (hasProperty(props,'startEnd') === true) ? props.startEnd (begin, length) : null;
            sendIndexes(begin, length, length, indexes);
        } else {    // Not at the end of the data
            setStart (begin);
            setEnd (index + maxItems);
            (hasProperty(props,'startEnd') === true) ? props.startEnd (begin, index + maxItems) : null;    // Increment to the next max items
            sendIndexes(begin, index + maxItems, length, indexes);
        }

        setDisable(index, length);  // Determine which buttons to disable
    }

    /***********************************************************************************
     *
     * This is called when the bottom button is clicked.  It will set the start and end
     * places in the data, so that it can be determined what to show in the table.
     *
     ***********************************************************************************/
    function bottomButton() {
        if (length - maxItems < 0) {  // At the end of the data
            setStart (0);
            setEnd (length);
            (hasProperty(props,'startEnd') === true) ? props.startEnd (0, length) : null;
            sendIndexes(0, length, length, indexes);
        } else {    // Not at the end of the data
            setStart (length - maxItems);
            setEnd (length);
            (hasProperty(props,'startEnd') === true) ? props.startEnd(length - maxItems, length) : null;
            sendIndexes(length - maxItems, length, length, indexes);
        }

        setDisable(length, length);
    }
}

export default SearchSortTable;
