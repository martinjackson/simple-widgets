/* eslint-disable react-hooks/exhaustive-deps */
/* eslint react/prop-types: 0 */

import React, { useState, useEffect } from 'react';
import { css } from "@emotion/react";
import FadeLoader from "react-spinners/FadeLoader";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { CSVLink } from 'react-csv';

import { CheckBox } from './CheckBox.js';
import { Choice } from './Choice.js';
import { ChoiceText } from './ChoiceText.js';
import { isInvalid, setInvalidScreen, generateInvalid,
         processInvalidStyleScreen, wasClickedScreen} from './Invalid.js'
import { AlertModal } from './AlertModal.js';
import { generateCSSButton } from './Theme.js';
import { currentDate, convertDate } from './DateFunct.js';
import { formatMoney } from './Common.js';
import { hasOwnProperty } from './hasOwnProperty.js';


import funnel from './funnel-filter-svgrepo-com.svg';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const upper = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
const lower = [...'abcdefghijklmnopqrstuvwxyz'];
const digit = [...'0123456789'];


// ----------------------------------------------------------------------------
function range(start, end) {
    if (end == -1 || end < start) {
      return []
    }
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
}


// ----------------------------------------------------------------------------
const genHdr = (name) => {
    const header = name.replace(/_/g, ' ')

    return {header, name, search: true, sort: true, dropDown: false, pdfCol: 'left' }
}

// ----------------------------------------------------------------------------
const genDefaultColHeaders = (rowZero, hiddenLookupColumns) => {

    if (!rowZero)
       return null

    let hdrs = Object.keys(rowZero).map( col => genHdr(col) )

    hiddenLookupColumns.forEach(index => hdrs.splice(index, 1))    // mutates hdrs

    return hdrs
}

/****************************************************************************
 *
 * This will allow the user to add a filter / search bar to a table in case
 * not all the data is displayed at once.  It will also allow a column to be
 * sorted by clicking on it.
 *
 * @param   propsPassed the props passed in form the calling component
 *
 ****************************************************************************/
export const SearchSortTable = (propsPassed) => {

    const hiddenLookupColumns = (propsPassed.hiddenLookupColumns) ? propsPassed.hiddenLookupColumns : []

    const defaultEachRowInTable = (row, i) => {

        let cols = null      // if no data yet
        if (row) {
          const keys = Object.keys(row)
          const hideCols = new Array(keys.length).fill(null);
          hiddenLookupColumns.forEach(i => hideCols[i] = true)

          cols = keys.map( (idx, j) => ( <td hidden={hideCols[idx]} key={i + '_' + j}>{row[idx]}</td> ) )
        }

        const odd = (i % 2) ? 'sw-sst_oddRow' : 'sw-sst_evenRow'

        return (<tr className={odd} key={i}>{cols}</tr>)
    }

    const defaultColHeaders = () => { return genDefaultColHeaders(propsPassed.data[0], hiddenLookupColumns) }

    const defaultProps = {                           // Default props if non are given
      error: false,                                  // Indicates that an error has occrred
      MAX_ITEMS: 100,                                // Maximum items on a page
      eachRowInTable: defaultEachRowInTable,         // The default each row in table function
      table: defaultColHeaders()                     // if no table def passed in as a prop, setup a default
    }

    const props = Object.assign(defaultProps, propsPassed);

    if (!props.data || !Array.isArray(props.data)) {
      console.error('Search Sort Table component: props.data is missing/null or not an Array:', props.data);
      return <><hr /></>
    }

    if (hasOwnProperty(props,'data') === false) {
      console.error('Search Sort Table component: A data prop must be passed');
      return (<span></span>);
    }

    if (hasOwnProperty(props,'table') === false) {                         // CAN NOT HAPPEN, see defaultProps
        console.error('Search Sort Table component: A table object prop must be passed');
        return (<span></span>);
    }

    if (hasOwnProperty(props,'letters') === true) {
      if (hasOwnProperty(props,'noupper') === true &&
          hasOwnProperty(props,'nolower') === true &&
          hasOwnProperty(props,'nodigit') === true) {
            console.error('Search Sort Table component: If using letters prop, can not have all three: noupper, nolower, and nodigit');
            return (<span></span>);
        }
    } else {
      if (hasOwnProperty(props,'noupper') === true ||
          hasOwnProperty (props,'nolower') === true ||
          hasOwnProperty(props,'nodigit') === true) {
            console.error('Search Sort Table component: Can not have noupper, nolower, or nodigit props without the letters prop');
            return (<span></span>);
        }
    }

    return <_InnerSearchSortTable {...props} defaultColHeaders={defaultColHeaders} />
}

// ----------------------------------------------------------------------------
const _InnerSearchSortTable = (props) => {
    const invalidArray = generateInvalid(5, 0);  // Used to tell whether the user entered and invalid value or not

    const FILTER = 0;
    const SRCHITEM = 1;
    const SRCHHDR = 2;
    const PDFORIENT = 3;
    const AGGREGATE = 4;

    const numCols = (props.table) ? props.table.length : 10     // Number of columns displayed
    let colAry = Array(numCols);
    const initialFilters = Array(numCols).fill('');             // React doesn't like <input value={null}
    const initialSortOrder = Array(numCols).fill('N');          // Initial sort order, which is neither

    const initialBackground = Array(63).fill({backgroundColor: getComputedStyle(document.documentElement)
                    .getPropertyValue('--sw-theme_backgroundColor')});

    let startIndexes = (props.data.length > 0) ? range(0, props.data.length-1) : [];    // Initial set of indexes

    let initFooters = new Array(numCols);    // Allocate the footer array

    for (let i = 0; i < initFooters.length; i++) {  // Blank out the footers
        initFooters[i] = [];
    }

    const pdfOrientValues = ['', 'Portrait', 'Landscape'];  // How the page is oriented for the PDF

    let searchValue = (hasOwnProperty(props, 'searchall') === true) ? 'All' : '';

    // Set the state variables
    const [start, setStart] = useState(0);                              // The start of the pagination
    const [end, setEnd] = useState((hasOwnProperty(props,'showall') === true) ? props.data.length : parseInt(props.MAX_ITEMS));    // The end of the pagination
    const [searchItem, setSearchItem] = useState('');                   // The item to search for
    const [searchHeader, setSearchHeader] = useState(searchValue);    // The column to search
    const [searchHeaderValues, setSearchHeaderValues] = useState([searchHeader]); // The value of each header in the table -- intialize array to include default value
    const [sortOrder, setSortOrder] = useState(initialSortOrder);       // Indicates the sort: (N) none, (A) ascending,  or (D) descending (D)
    const [topDisabled, setTopDisabled] = useState(true);               // Indicates whether the top button is disabled or not
    const [previousDisabled, setPreviousDisabled] = useState(true);     // Indicates whether the previous button is disabled or not
    const [nextDisabled, setNextDisabled] = useState(false);            // Indicates whether the next button is disabled or not
    const [bottomDisabled, setBottomDisabled] = useState(false);        // Indicates whether the bottom button is disabled or not
    const [rowValues, setRowValues] = useState([]);                     // Indicates how many rows in the table should be displayed
    const [maxItems, setMaxItems] = useState((hasOwnProperty(props,'showall') === true) ? props.data.length : parseInt(props.MAX_ITEMS));   // Maximum number of rows to display in the table
    const [maximum, setMaximum] = useState((hasOwnProperty(props,'showall') === true) ? props.data.length : parseInt(props.MAX_ITEMS));     // Maximum number of rows selected by the user to display in the table
    const [filter, setFilter] = useState(initialFilters);               // The values for each column to be filtered
    const [filterOn, setFilterOn] = useState('');                       // Indicates whether the user has checked the Filter On check box or not
    const [filterPressed, setFilterPressed] = useState(false);          // Indicates whether the filtering is enabled or disabled (Filter button)
    const [invalid, setInvalid] = useState(invalidArray);               // Indicates which fields are invalid and which ones are not
    const [alertMessage, setAlertMessage] = useState('');               // The message for the alert modal
    const [showAlert, setShowAlert] = useState(false);                  // Indicates whether the alert modal should be displayed or not
    const [indexes, setIndexes] = useState([...startIndexes]);          // Indicates the order in which the data should be displayed (the data remains in the original order)
    const [copyIndex, setCopyIndex] = useState([...startIndexes]);      // This is a copy of the index in order to put it back into its original order
    const [length, setLength] = useState(props.data.length);            // The length of the data
    const [background, setBackground] = useState(initialBackground);    // Background color for the letters prop
    const [table, setTable] = useState(props.table);                    // Contains information about how to display the table
    const [columns, setColumns] = useState(colAry);                     // Column values for the drop down in each filter item
    const [htmlDropDown, setHtmlDropDown] = useState(false);            // Contains the dropdown for each column in the table
    const [dropDownIndex, setDropDownIndex] = useState(-1);             // Indicates in which column the dropdown will appear
    const [controlBreakInfo, setControlBreakInfo] = useState([]);       // Contains which columns in the table are hidden and have control breaks
    const [controlBreakData, setControlBreakData] = useState([]);       // The title, data, and footer for each control break
    const [startPos, setStartPos] = useState([]);                       // Where each control break starts in the indexes
    const [functSelect, setFunctSelect] = useState('');                 // Indicates which aggregate function has been selected
    const [footers, setFooters] = useState(initFooters);                // The aggregate footers placed at the end of each column in the table
    const [pdfOrientation, setPdfOrientation] = useState('');           // Indicates whether Portrait or Landscape is to selected for the page orientation of the PDF
    const [excelData, setExcelData] = useState([]);                     // Contains the data to be placed in the excel spreadsheet
    const [showExcel, setShowExcel] = useState(false);                  // Indicates whether the Excel Display button can be displayed or not
    const [checked, setChecked] = useState('N');                        // Indicates whether the checkbox in the header is checked (Y) or not

    // TODO: Ask Jim  hideCols is never used

    // const [indexSet, setIndexSet] = useState([[...startIndexes]]);
    // const [origIndexes, setOrigIndexes] = useState([...startIndexes]);
    const origIndexes = [...startIndexes];  // The original set of indexes that is used when the sort order is neither or control breaks are removed

    /*************************************************************************************************************
     *
     * This will set up controlBreakInfo array, which contains whether the column in the table is hidden or is a
     * control break
     *
     **************************************************************************************************************/
    function populateDropDown (table, indexes) {
        let isUserCtrlBreak = false;
        if (hasOwnProperty(props, 'controlBreak') === true) {
            isUserCtrlBreak = true;
            if (props.controlBreak.length !== table.length) {
                console.log ('SearchSortTable: controlBreak array must be the same size as the table array');
                console.log ('SearchSortTable: User controlBreak array will not be used');
                isUserCtrlBreak = false;
            }

            for (let i = 0; i < props.controlBreak.length; i++) {
                if (hasOwnProperty(props.controlBreak[i], 'hidden') === false) {
                    console.log ('SearchSortTable: The hidden field is missing')
                    console.log ('SearchSortTable: User controlBreak array will not be used');
                    isUserCtrlBreak = false;
                }

                if (hasOwnProperty(props.controlBreak[i], 'ctrlBreak') === false) {
                    console.log ('SearchSortTable: The ctrlBreak field is missing')
                    console.log ('SearchSortTable: User controlBreak array will not be used');
                    isUserCtrlBreak = false;
                }
            }
        }

        if (isUserCtrlBreak === true) {
            setControlBreakInfo (props.controlBreak);
            findCtrlBreak(props.controlBreak, indexes);
            hideTheColumns(props.controlBreak);
        } else {
            let ctrlBreakAry = [];  // The control break info array
            for (let i = 0; i < table.length; i++) {
                ctrlBreakAry.push ({hidden: false, ctrlBreak: 0 });
            }

            setControlBreakInfo(ctrlBreakAry);
        }
    }

    let localCols = new Array(numCols);  // The value of each column in the table for the filter process

    /*****************************************************************************************************************
     *
     * This will do a sequential search on an array.
     *
     * @param table the table to be searched
     * @param key   the key to search for in the table
     *
     ******************************************************************************************************************/
    function search(table, key) {
        for (let i = 0; i < table.length; i++) {
            if (table[i] === key) { // Key has been found in the table
                return true;
            }
        }

        return false;   // Key was not found
    }

    /******************************************************************************************************************
     *
     * This builds the values for the choice boxes for each column in the filtering process.  It will place each value
     * for that column in the choice box, with duplicates being removed.  The values will then be sorted.
     *
     * @param row   a row in the table or default table
     * @param i     current index into the table or default table
     *
     ********************************************************************************************************************/
    function buildChoices (row, i) {
        let data = props.data;  // The data to be searched
        let values = [];        // The values to place in the choice boxes

        // Spin through the data and place the data for that column in the values array, removing duplicates
        for (let j = 0; j < data.length; j++) {
            if (search (values, data[j][row.name]) === false) {
                values.push(data[j][row.name]);
            }
        }

        // Sort the values array to place all the values in the choice box in ascending order
        values.sort(function (item1, item2) {
            // Convert to upper case if ignoring case
            if (typeof item1 === 'string' &&
                hasOwnProperty(props,'ignorecase') === true) {
                // item1.data = (item1.data !== null) ? item1.data.toUpperCase() : null;
                item1 = item1.toUpperCase()
                item2 = (item2 !== null) ? item2.toUpperCase() : null;
            }

            // Make the comparison
            if (item1 < item2) {
                return -1;
            } else if (item1 > item2) {
                return 1;
            } else {
                return 0;   // Equal
            }
        });

        localCols[i] = values;  // Place each choice box value in the localCols array
    }

    const resetTheIndexes = () => {
        setFilterOn(false);
        setStartEnd(0, origIndexes.length, origIndexes);
        setIndexes(origIndexes);
        setCopyIndex(origIndexes);
        setLength(origIndexes.length);
        sendIndexes(0, origIndexes.length, origIndexes.length, origIndexes);
        setDisable(0, origIndexes.length);
    }

    /******************************************************************************
     *
     * Called to populate the header drop down
     *
     ******************************************************************************/

    // ---------
    useEffect (() => {
//      console.log('SearchSortTable useEffect [] ');
      populateSearch(props.table)
      props.table.map(buildChoices);
      setColumns(localCols);
    }, []);

    // ---------
    useEffect (() => {
//      console.log('SearchSortTable useEffect [] props.table:', props.table);

      setTable(props.table);
      populateSearch(props.table);
      props.table.map(buildChoices);
      setColumns(localCols);
    }, [props.table]);

    // ---------
    useEffect (() => {
//      console.log('SearchSortTable useEffect [props.data]', props.data, ' props.table:', props.table, 'table:', table);

        if (!props.table && !table) {        // No table def passed in as a prop, setup a default
            let tableDef = props.defaultColHeaders()
            setTable(tableDef)
            populateSearch(tableDef)
            tableDef.forEach(buildChoices);
            setColumns(localCols);
        }

        if (indexes.length === 0 || props.data.length !== length) {   // There are no indexes
            resetTheIndexes();
            populateDropDown(props.table, origIndexes);
        } else {    // There are indexes
            setDisable(start, length);
            sendIndexes(start, end, length, indexes);
            populateDropDown(props.table, indexes);
        }

    }, [props.data]);

    // ---------
    useEffect (() => {
//        console.log('SearchSortTable useEffect [props.data.length] ');
        resetTheIndexes();
    }, [props.data.length, props.resetIndexes])


/*    console.log('props.data.length :', props.data.length);
    console.log ('start', start);
    console.log ('end', end);
    console.log ('length', length);
    console.log ('indexes', indexes);
    console.log ('maxItems', maxItems);
    console.log ('maximum', maximum);
    console.log ('origIndexes', origIndexes);
    console.log ('startIndexes :', startIndexes);
*/


    let number = 0;
    if (hasOwnProperty(props, 'number') === true) {
        number = props.number;
    }

    let mathDecimal = 2;
    if (hasOwnProperty(props, 'mathDecimal') === true) {
        mathDecimal = parseInt(props.mathDecimal);
    }

    let mathIgnoreCase = false;
    if (hasOwnProperty(props, 'mathIgnoreCase') === true) {
        mathIgnoreCase = props.mathIgnoreCase;
    }

    /****************************************************************************
     *
     * This will populate the header drop down and place a blank at the
     * beginning.
     *
     * @param table the table props to populate the search drop down
     *
     ****************************************************************************/
    function populateSearch(table) {
        let localFilter = [...filter];   // The values in the filter input boxes
        let search = [''];      // The values for the drop down

        if (hasOwnProperty(props, 'searchall') === true) {
            search[0] = 'All';
        }

        if (!table) {
           return
        }

        // Build the items for the drop down, the sort order, and the filter
        for (let i = 0; i < table.length; i++) {
            if (table[i].search === true) {
                search.push (table[i].header);
            }
            if (hasOwnProperty(props,'nofilter') === true || props.nofilter === true) {
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
    if (hasOwnProperty(props,'scroll') === true) {
        tableDivStyle = 'sw-sst_scrollStyle';
    }

    let heightWidthStyle = {};
    if (hasOwnProperty(props, 'height') === true && hasOwnProperty(props, 'width') === false) {
        heightWidthStyle = { height: props.height };
    } else if (hasOwnProperty(props, 'height') === false && hasOwnProperty(props, 'width') === true) {
        heightWidthStyle = { width: props.width };
    } else if (hasOwnProperty(props, 'height') === true && hasOwnProperty(props, 'width') === true) {
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
    if (hasOwnProperty(props, 'noheaderborder') === true) {
        headerStyle = 'sw-sst_headerStyle2';
    }

    let footerStyle = 'sw-sst_footerStyle';
    if (hasOwnProperty(props, 'nofooterborder') === true) {
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

    let letterDigit = [];   // The letters and digits to be displayed at the top of the table
    let letters = null;     // The HTML to display the letters on the screen
    if (hasOwnProperty(props,'letters') === true) {
        if (hasOwnProperty(props,'noupper') === true) {
            if (hasOwnProperty(props,'nolower') === true) {
                letterDigit = [...digit];
            } else {    // Lower
                if (hasOwnProperty(props,'nodigit') === true) {
                    letterDigit = [...lower];
                } else {    // Digit
                    letterDigit = [...lower, ...digit];
                }
            }
        } else {    // Upper
            if (hasOwnProperty(props,'nolower') === true) {
                if (hasOwnProperty(props,'nodigit') === true) {
                    letterDigit = [...upper];
                } else {    // Digit
                    letterDigit = [...upper, ...digit];
                }
            } else {    // Lower
                if (hasOwnProperty(props,'nodigit') === true) {
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
    if (hasOwnProperty(props,'notop') === false && hasOwnProperty(props,'showall') === false) {
        topButtonHTML = <button name="top" className={genTopButtonStyle} onClick={() => topButton()} disabled={props.error || topDisabled}>{topSymbol}</button>;
    }

    let previousButtonHTML = <span></span>;
    if (hasOwnProperty(props,'noprevious') === false && hasOwnProperty(props,'showall') === false) {
        previousButtonHTML = <button name="previous" className={genPreviousButtonStyle} onClick={() => previousButton()} disabled={props.error || previousDisabled}>{previousSymbol}</button>;
    }

    let nextButtonHTML = <span></span>;
    if (hasOwnProperty(props,'nonext') === false && hasOwnProperty(props,'showall') === false) {
        nextButtonHTML = <button name="next" className={genNextButtonStyle} onClick={() => nextButton()} disabled={props.error || nextDisabled}>{nextSymbol}</button>;
    }

    let bottomButtonHTML = <span></span>;
    if (hasOwnProperty(props,'nobottom') === false && hasOwnProperty(props,'showall') === false) {
        bottomButtonHTML = <button name="bottom" className={genBottomButtonStyle} onClick={() => bottomButton()} disabled={props.error || bottomDisabled}>{bottomSymbol}</button>;
    }

    let allButtonHTML = <span></span>;
    if (hasOwnProperty(props,'showall') === true) {
        allButtonHTML = <button name="all" className={genBottomButtonStyle} onClick={() => allButton()} disabled={props.error}>All</button>;
    }

    let title = null;
    if (hasOwnProperty(props,'title') === true) {
        if (hasOwnProperty(props,'titleSize') === true) {
            if (props.titleSize === '1') {
                title = <h1 className="sw-sst_titleStyle">{props.title}</h1>
            } else if (props.titleSize === '2') {
                title = <h2 className="sw-sst_titleStyle">{props.title}</h2>
            } else if (props.titleSize === '3'){
                title = <h3 className="sw-sst_titleStyle">{props.title}</h3>
            } else if (props.titleSize === '4') {
                title = <h4 className="sw-sst_titleStyle">{props.title}</h4>
            } else if (props.titleSize === '5') {
                title = <h5 className="sw-sst_titleStyle">{props.title}</h5>
            } else if (props.titleSize === '6') {
                title = <h6 className="sw-sst_titleStyle">{props.title}</h6>
            }
        } else {
            title = <h3 className="sw-sst_titleStyle">{props.title}</h3>
        }
    }

    const filterSection = (hasOwnProperty(props,'nofilter') === true || props.nofilter === true) ? null :
        (<>
            <CheckBox selectedValue="Y" name="filterOn" text="&nbsp;&nbsp;&nbsp;Filter On" value={filterOn} onChange={(event) => processFilterOn(event.target.value)} />
            <button onClick={filterButton} className="sw-sst_buttonStyle2" disabled={props.error || filterOn !== 'Y'}>
                <img src={funnel} width="30px" height="30px" className={genFilterStyle} />
            </button>
        </>)

    const searchStyle = processInvalidStyleScreen(invalid, SRCHHDR, 'sw-sst_searchStyle');

    const itemStyle = processInvalidStyleScreen(invalid, SRCHITEM);

    const searchSection = (hasOwnProperty(props,'nosearch') === true) ? null :
        (<>
            <span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
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

    /*****************************************************************************************************************
     *
     * This will display the PDF with the regular data that is in the search sort table.
     *
     ******************************************************************************************************************/
    function pdfRegButton() {
        let title = 'PDF Report';
        if (hasOwnProperty(props, 'title') === true) {
            title = props.title;
        } else if (hasOwnProperty(props, 'report') === true) {
            title = props.report;
        }

        let docDefinition = {   // This contains the PDF report information
            info: {
                 title: title,
            },
            pageOrientation: pdfOrientation,
            pageMargins: [20, 100, 20, 80],

            content: [  // The main body of the PDF
            ],
            styles: {   // Styles for the header and cell headers
                header1: {
                    fontSize: 14,
                    bold: true,
                    alignment: 'center',
                    margin: [0, 3, 0, 0]
                },
                cellLeftBold: {
                    alignment: 'left',
                    fontSize: 12,
                    bold: true,
                },
                cellRight: {
                    alignment: 'right',
                },
                cellCenter: {
                    alignment: 'center'
                }
            }
        };

        docDefinition.header = {    // Build the header and footer
            stack: [
                {columns: [
                    { text: 'Report Date: ' +  currentDate(), alignment: 'right', margin: [0, 5, 5, 0]},
                ]},
                { text: title, style: 'header1' },
            ]
        };
        docDefinition.footer = { text: 'For Official Use Only', alignment: 'center' };

        // Place the page number at the bottom of each page

        docDefinition.footer = function(currentPage, pageCount) { return {text: 'Page: ' + currentPage.toString() + ' of ' + pageCount + '   For Official Use Only', alignment: 'center'} };

        if (props.data.length > 0) {
            let widths = [];    // The width of each of the field, will be auto
            let headers = [];   // The header for each row of the table
            for (let i = 0; i < table.length; i++) {    // See if the column in the table is to be hidden or not
                if (controlBreakInfo[i].hidden === false) { // Not hidden
                    headers.push({text: table[i].header, style: 'cellCenter' });
                }
            }

            for (let i = 0; i < headers.length; i++) {
                widths.push('auto');
            }

            let tableSST =
                { table: {  // Build the table
                    headerRows: 1,  // 1 row of headers
                    widths: widths,

                    body: [ // Build the table header
                        headers,
                    ],
                    alignment: 'center'
            }};

            docDefinition.content.push(tableSST);

            // Print out a row in the table
            for (let i = 0; i < indexes.length; i++) {
                let text = [];
                for (let j = 0; j < table.length; j++) {    // Process a column in the table
                    if (controlBreakInfo[j].hidden === false) {
                        // Determine the format of the cell
                        if (hasOwnProperty(table[j], 'pdfCol') === true) {
                            if (table[j].pdfCol === 'left') {
                                text.push({ text: props.data[indexes[i]][table[j].name] });
                            } else if (table[j].pdfCol === 'right') {
                                text.push({ text: props.data[indexes[i]][table[j].name], style: 'cellRight' });
                            } else if (table[j].pdfCol === 'center') {
                                text.push({ text: props.data[indexes[i]][table[j].name], style: 'cellCenter' });
                            } else if (table[j].pdfCol === 'date') {
                                text.push({ text: convertDate(props.data[indexes[i]][table[j].name]), style: 'cellCenter' });
                            } else if (table[j].pdfCol === 'dateLeft') {
                                text.push({ text: convertDate(props.data[indexes[i]][table[j].name]) });
                            } else if (table[j].pdfCol === 'dateRight') {
                                text.push({ text: convertDate(props.data[indexes[i]][table[j].name]), style: 'cellRight' });
                            } else if (table[j].pdfCol === 'money') {
                                text.push({ text: formatMoney(props.data[indexes[i]][table[j].name]), style: 'cellRight' });
                            } else {
                                text.push({ text: props.data[indexes[i]][table[j].name] });
                            }
                        } else if (typeof props.data[indexes[i]][table[j].name] === 'number') {
                            text.push({ text: props.data[indexes[i]][table[j].name], style: 'cellRight' });
                        } else if (hasOwnProperty(table[j], 'dataDate') === true ||
                                   hasOwnProperty(table[j], 'filterDate') === true ||
                                   hasOwnProperty(table[j], 'searchDate') === true ||
                                   hasOwnProperty(table[j], 'sortDate') === true) {
                            text.push({ text: convertDate(props.data[indexes[i]][table[j].name]), style: 'cellCenter' });
                        } else {
                            text.push({ text: props.data[indexes[i]][table[j].name] });
                        }
                    }
                }

                docDefinition.content[0].table.body.push(text);
            }

            // Process the aggregate footers
            let foundFooter = false;    // Indicates that a footer for that column was found
            let text = [];              // The text for the footers
            for (let i = 0; i < footers.length; i++) {
                if (footers[i].length > 0) {
                    let value = ''; // Build the footer
                    for (let j = 0; j < footers[i].length; j++) {
                        value += footers[i][j] + '\n';
                    }
                    text.push({ text: value, style: 'cellLeftBold' });
                    foundFooter = true;
                } else {
                    text.push ({ text: ' ', style: 'cellLeftBold' });
                }
            }

            if (foundFooter === true) { // A footer was found, so display it
                docDefinition.content[0].table.body.push(text);
            }

            pdfMake.createPdf(docDefinition).open();    // Build the PDF
        }
    }

    /*****************************************************************************************************************
     *
     * This will display the PDF with the control break data that is in the search sort table.
     *
     ******************************************************************************************************************/
    function pdfCBButton() {
        let title = 'PDF Report';
        if (hasOwnProperty(props, 'title') === true) {
            title = props.title;
        } else if (hasOwnProperty(props, 'report') === true) {
            title = props.report;
        }

        let docDefinition = {   // This contains the PDF report information
            info: {
                 title: title,
            },
            pageOrientation: pdfOrientation,
            pageMargins: [20, 100, 20, 80],

            content: [  // The main body of the PDF
            ],
            styles: {   // Styles for the header and cell headers
                header1: {
                    fontSize: 14,
                    bold: true,
                    alignment: 'center',
                    margin: [0, 3, 0, 0]
                },
                cellLeftBold: {
                    alignment: 'left',
                    fontSize: 12,
                    bold: true,
                },
                cellCenterBoldBig: {
                    alignment: 'center',
                    fontSize: 14,
                    bold: true,
                },
                cellRight: {
                    alignment: 'right',
                },
                cellCenter: {
                    alignment: 'center'
                }
            }
        };

        docDefinition.header = {    // Build the header and footer
            stack: [
                {columns: [
                    { text: 'Report Date: ' +  currentDate(), alignment: 'right', margin: [0, 5, 5, 0]},
                ]},
                { text: title, style: 'header1' },
            ]
        };
        docDefinition.footer = { text: 'For Official Use Only', alignment: 'center' };

        // Place the page number at the bottom of each page

        docDefinition.footer = function(currentPage, pageCount) { return {text: 'Page: ' + currentPage.toString() + ' of ' + pageCount + '   For Official Use Only', alignment: 'center'} };

        if (props.data.length > 0) {
            let index = 0;  // Indicates the next position in the content array

            for (let k = 0; k < controlBreakData.length; k++) { // Spin through the control break data
                if (k !== 0) {  // If not the first control break, print out a blank line
                    docDefinition.content.push ({ text: ' ', style: 'cellCenterBoldBig' });
                    index++;
                    }
                docDefinition.content.push ({ text: controlBreakData[k].title, style: 'cellCenterBoldBig' });
                index++;

                let widths = [];    // The width of each of the field, will be auto
                let headers = [];   // The header for each row of the table
                for (let i = 0; i < table.length; i++) {
                    if (controlBreakInfo[i].hidden === false) {
                        headers.push({text: table[i].header, style: 'cellCenter' });
                    }
                }

                for (let i = 0; i < headers.length; i++) {
                    if (controlBreakInfo[i].hidden === false) {
                        widths.push('auto');
                    }
                }

                let tableSST =
                    { table: {  // Build the table
                        headerRows: 1,  // 1 row of headers
                        widths: widths,

                        body: [ // Build the table header
                            headers,
                        ]
                }};

                docDefinition.content.push(tableSST);

                for (let i = 0; i < controlBreakData[k].data.length; i++) { // Spin throught the data for each control break
                    let text = [];  // The text for each cell
                    for (let j = 0; j < table.length; j++) {
                        if (controlBreakInfo[j].hidden === false) { // Column is not hidden
                            // Determine the format for the column
                            if (hasOwnProperty(table[j], 'pdfCol') === true) {
                                if (table[j].pdfCol === 'left') {
                                    text.push({ text: controlBreakData[k].data[i][table[j].name] });
                                } else if (table[j].pdfCol === 'right') {
                                    text.push({ text: controlBreakData[k].data[i][table[j].name], style: 'cellRight' });
                                } else if (table[j].pdfCol === 'center') {
                                    text.push({ text: controlBreakData[k].data[i][table[j].name], style: 'cellCenter' });
                                } else if (table[j].pdfCol === 'date') {
                                    text.push({ text: convertDate(controlBreakData[k].data[i][table[j].name]), style: 'cellCenter' });
                                } else if (table[j].pdfCol === 'dateLeft') {
                                    text.push({ text: convertDate(controlBreakData[k].data[i][table[j].name]) });
                                } else if (table[j].pdfCol === 'dateRight') {
                                    text.push({ text: convertDate(controlBreakData[k].data[i][table[j].name]), style: 'cellRight' });
                                } else if (table[j].pdfCol === 'money') {
                                    text.push({ text: formatMoney(controlBreakData[k].data[i][table[j].name]), style: 'cellRight' });
                                } else {
                                    text.push({ text: controlBreakData[k].data[i][table[j].name] });
                                }
                            } else if (typeof controlBreakData[k].data[i][table[j].name] === 'number') {
                                text.push({ text: controlBreakData[k].data[i][table[j].name], style: 'cellRight' });
                            } else if (hasOwnProperty(table[j], 'dataDate') === true ||
                                       hasOwnProperty(table[j], 'filterDate') === true ||
                                       hasOwnProperty(table[j], 'searchDate') === true ||
                                       hasOwnProperty(table[j], 'sortDate') === true) {
                                text.push({ text: convertDate(controlBreakData[k].data[i][table[j].name]), style: 'cellCenter' });
                            } else {
                                text.push({ text: controlBreakData[k].data[i][table[j].name] });
                            }
                        }
                    }

                    docDefinition.content[index].table.body.push(text);
                }

                let foundFooter = false;    // Indicates that a footer was found, so place it in the PDF
                let text = [];              // The value for a footer in a column in the table
                for (let i = 0; i < controlBreakData[k].footer.length; i++) {
                    if (controlBreakData[k].footer[i].length > 0) { // There is a footer
                        let value = ''; // Value for the footer
                        for (let j = 0; j < controlBreakData[k].footer[i].length; j++) {    // Build the footer
                            value += controlBreakData[k].footer[i][j] + '\n';
                        }
                        text.push({ text: value, style: 'cellLeftBold' });
                        foundFooter = true;
                    } else {    // No footer found for that column
                        text.push({ text: ' ', style: 'cellLeftBold' });
                    }
                }

                if (foundFooter === true) { // Place the footer in the column for the table
                    docDefinition.content[index].table.body.push(text);
                }

                index++;
            }

            pdfMake.createPdf(docDefinition).open();    // Build the PDF
        }
    }

    /*****************************************************************************************************************
     *
     * This will determine which PDF function to call based on whether there are control breaks or not.
     *
     *****************************************************************************************************************/
    function pdfButton() {
        let localInvalid = [...invalid];    // Makes sure a page orientation for the PDF was selected
        if (pdfOrientation === '' || pdfOrientation === null || pdfOrientation === undefined) {
            localInvalid = setInvalidScreen(localInvalid, PDFORIENT, 'An orientation must be entered for the PDF');
            setInvalid(localInvalid);
            return;
        }

        if (isControlBreak(controlBreakInfo) === true) {    // There is a control break
            pdfCBButton();
        } else {    // No control break
            pdfRegButton();
        }
    }

    /********************************************************************************************************************
     *
     * This will process the data into a CSV file to be imported into excel for a regular search sort table.
     *
     *********************************************************************************************************************/
    function excelRegButton() {
        let title = 'Excel Report';
        if (hasOwnProperty(props, 'title') === true) {
            title = props.title;
        } else if (hasOwnProperty(props, 'report') === true) {
            title = props.report;
        }

        let exData = [];    // The data for the excel spreadsheet

        // Title for the excel spreadsheet
        exData.push(['Report Date: ' +  currentDate()]);
        exData.push([' ']);
        exData.push([title]);
        exData.push([' ']);

        let header = [];    // Header for the excel spreadsheet
        for (let i = 0; i < table.length; i++) {
            header.push(table[i].header);
        }

        exData.push(header);
        exData.push([' ']);     // Blank line

        // Data for the excel spreadsheet
        for (let i = 0; i < props.data.length; i++) {
            let text = [];
            for (let j = 0; j < table.length; j++) {
                text.push(props.data[indexes[i]][table[j].name]);
            }
            exData.push(text);
        }

        // Footer at the bottom of the spreadsheet
        exData.push([' ']);
        exData.push[['For Offical Use Only']];

        setExcelData(exData);
        setShowExcel(true); // Show the Excel Display button
    }

    /********************************************************************************************************************
     *
     * This will process the data into a CSV file to be imported into excel for a search sort table that has control
     * breaks.
     *
     *********************************************************************************************************************/
    function excelCBButton() {
        let title = 'Excel Report';
        if (hasOwnProperty(props, 'title') === true) {
            title = props.title;
        } else if (hasOwnProperty(props, 'report') === true) {
            title = props.report;
        }

        let exData = [];    // Data for the excel spreadsheet

        // Title for the excel spreadsheet
        exData.push(['Report Date: ' +  currentDate()]);
        exData.push([' ']);
        exData.push([title]);
        exData.push([' ']);

        // Header for the excel spreadsheet
        let header = [];
        for (let i = 0; i < table.length; i++) {
            header.push(table[i].header);
        }

        // Data for the excel spreadsheet
        for (let k = 0; k < controlBreakData.length; k++) {
            exData.push([' ']);
            exData.push([' ']);
            exData.push([controlBreakData[k].title]);
            exData.push(header);
            exData.push([' ']);

            for (let i = 0; i < controlBreakData[k].data.length; i++) {
                let text = [];
                for (let j = 0; j < table.length; j++) {
                    text.push(controlBreakData[k].data[i][table[j].name]);
                }
                exData.push(text);
            }
        }

        // Footer at the bottom of the spreadsheet
        exData.push([' ']);
        exData.push[['For Offical Use Only']];

        setExcelData(exData);
        setShowExcel(true); // Show the Excel Display button
    }

    /*****************************************************************************************************************
     *
     * This will determine which excel spreadsheet function to call based on whether there are control breaks or not.
     *
     *****************************************************************************************************************/
    function excelBuildButton() {
        if (isControlBreak(controlBreakInfo) === true) {    // There is a control break in the search sort table
            excelCBButton();
        } else {    // No control break
            excelRegButton();
        }
    }

    /******************************************************************************************************************
     *
     * This will hide the Excel Display button
     *
     ******************************************************************************************************************/
    function closeExDisplay() {
        setShowExcel(false);
    }

    // This will display the PDF button and the Orientation choice box on the screen
    const pdfDisplay = (props.nopdf === true) ? null :
        <span>
            <button name="pdf" className={genButtonStyle} onClick={pdfButton}>PDF</button>
            <span className="sw-invalid_checkForError">
                <label htmlFor="pdfOrientation">Orientation: </label>
                <Choice choices={pdfOrientValues} name="pdfOrientation" value={pdfOrientation}
                    onChange={(event) => setPdfOrientation(event.target.value)}
                    onClick={() => wasClickedScreen(invalid, PDFORIENT, setInvalid)}
                    className={processInvalidStyleScreen(invalid, PDFORIENT)} />
                {(isInvalid(invalid[PDFORIENT], -1) === true) ? <span className="sw-invalid_errMessage">{invalid[PDFORIENT].message}</span> : null }
            </span>
        </span>;

    // This will display the Excel Build and Excel Display button on the screen
    const excelDisplay = (props.noexcel === true) ? null :
        <span>
            <button name="excelBuild" className={genButtonStyle} onClick={excelBuildButton} >Excel Build</button>
            {(showExcel === false) ? null :
                <CSVLink data={excelData} target="_blank" onClick={closeExDisplay} className="sw-sst_excelButtonStyle">Excel Display</CSVLink> }
        </span>;

    // This will determine if both the PDF and Excel buttons and choice box should be displayed or not
    const pdfExcel = (props.nopdf === true && props.noexcel === true) ? null :
        <div className="sw-sst_footStyle2">
            {pdfDisplay}
            {excelDisplay}
        </div>;

    // Indicates whether the footer displaying the pagination on the bottom right corner of the search sort table should be displayed
    const footer = (hasOwnProperty(props,'nofooter') === true) ? null :
        <div>
            <div className="sw-sst_footStyle">
                { (hasOwnProperty(props,'norows') === true) ? null :
                    <span className="sw-sst_marginStyle">
                        <Choice choices={rowValues} name="rows" value={maximum} onChange={(event) => processMaxItems(event.target.value)} className="sw-sst_noBorderStyle" disabled={props.error} />
                        rows
                    </span>
                }
                {topButtonHTML}
                {previousButtonHTML}
                { (hasOwnProperty(props,'nodisplay') === true) ? null :
                    <span>{start + ' - ' + end + ' of ' + length}</span>
                }
                {nextButtonHTML}
                {bottomButtonHTML}
            </div>
        </div>

    let hoverClassName = `sw-sst_tableStyle `;
    if (hasOwnProperty(props,'hover') === true) {  // A row can be hovered over
        let root = document.documentElement;    // The root of the DOM
        let hoverBackColor = 'cyan';            // The default hover color
        let found = false;                      // Indicates whether more than 10 colors have been placed in the CSS

        if (hasOwnProperty(props,'hoverColor') === true) { // The default hover color is to be changed
            hoverBackColor = props.hoverColor;
        }

        // Set the hover color in the CSS
        for (let i = 1; i <= 10 && found === false; i++) {
            let colorValue = getComputedStyle(root).getPropertyValue(`--sw-sst_hover_back_color${i}`);
            if (colorValue === 'none') {
                root.style.setProperty(`--sw-sst_hover_back_color${i}`, hoverBackColor);
                hoverClassName += `sw-sst_search_sort_table${i}`;
                found = true;
            } else if (colorValue === hoverBackColor) {
                hoverClassName += `sw-sst_search_sort_table${i}`;
                found = true;
            }
        }

        if (found === false) {  //
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

    let controlBreakVal = isControlBreak(controlBreakInfo);

    let tableBuild = null;

    let cbCount = -1;
    if (controlBreakVal === true) { // Display control break tables
        let cbTable = `cbtitles_${number}`;
        let cbHeader = `cbhead_${number}`;

        // Build the tables for the control breaks by rendering the headers in blue at the top and
        // each control break table following
        tableBuild =    <span>
                            <table className="sw-sst_table" key={cbTable}>
                              <tbody>
                                <tr key={cbHeader}>
                                    {table.map(buildHeaders(true, 0))}
                                </tr>
                              </tbody>
                            </table>
                            {controlBreakData.map(renderCtrlBreak) }
                        </span>
    } else {    // Regular search sort table
        let keyTable = `table_${number}`;
        let header = `head_${number}`;
        let count = -1;
        tableBuild =    <table className={hoverClassName + " sw-sst_table"} name={`table${number}`} key={keyTable}>
                            <tbody>
                                <tr key={header} className="sw-sst_centerBoldStyle">
                                    {table.map(buildHeaders(true, 0))}
                                </tr>
                                { showData.map((row) => {
                                    count++;
                                    return props.eachRowInTable(row, count);
                                }) }
                                { (hasOwnProperty(props,'footer') === true) ?
                                    <tr className="footerStyle">{ props.footer.map(buildFooter) }</tr> : null }
                                <tr>
                                    {footers.map(buildMathFooters)}
                                </tr>
                            </tbody>
                        </table>
    }

    /************************************************************************************************************************
     *
     * Checks to see if the dropDown field exists and is set to true in the table props.
     *
     *************************************************************************************************************************/
    function areDropDowns() {
        for (let i = 0; i < table.length; i++) {    // Spin through the table to check for the dropDown field and its value
            if (hasOwnProperty(table[i], 'dropDown') === true && table[i].dropDown === true) {
                return true;    // There are dropDowns in the table
            }
        }

        return false;   // No drop downs in the table
    }

    /**************************************************************************************************************************
     *
     * Render the screen
     *
     **************************************************************************************************************************/
    return (
        <div className="sw-sst_divStyle">
            {title}
            <div>
                { (hasOwnProperty(props,'sfbottom') === false) ?
                    (<>
                        {filterSection}
                        {searchSection}
                        <span className="sw-sst_right">
                            {(areDropDowns() === false) ? null : <button name="reset" className={genButtonStyle} onClick={() => resetButton()} disabled={props.error}>Reset</button>}
                        </span>
                        {allButtonHTML}
                        {letters}
                    </>) : null
                }
            </div>
            { (props.data.length === 0 && hasOwnProperty(props,'showtable') === false) ?
            <div>No Data to Display</div> :
            <div>
                <div className={tableDivStyle} style={heightWidthStyle}>
                    {tableBuild}
                </div>
                {footer}
                <div>
                    { (hasOwnProperty(props,'sfbottom') === true) ?
                        (<>
                            {filterSection}
                            {searchSection}
                            <span className="sw-sst_right">
                            {(areDropDowns() === false) ? null : <button name="reset" className={genButtonStyle} onClick={() => resetButton()} disabled={props.error}>Reset</button>}
                        </span>
                            {allButtonHTML}
                            {letters}
                        </>) : null
                    }
                </div>
                {pdfExcel}
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

    /******************************************************************************************************************
     *
     * This will set the search sort table back to its initial state.  It will remove hidden columns, control breaks,
     * and aggregate footers.
     *
     *******************************************************************************************************************/
    function resetButton() {
        let ctrlBreakInfo = [...controlBreakInfo];
        let locFooters = [...footers];
        let ctrlBreakData = [...controlBreakData];

        // Remove the hidden columns and control breaks
        for (let i = 0; i < ctrlBreakInfo.length; i++) {
            ctrlBreakInfo[i].hidden = false;
            ctrlBreakInfo[i].ctrlBreak = 0;
        }

        for (let i = 0; i < locFooters.length; i++) {   // Remove the footers
            locFooters[i] = [];
        }

        for (let i = 0; i < ctrlBreakData.length; i++) {    // Remove the control break data
            for (let j = 0; j < ctrlBreakData[i].footer.length; j++) {
                ctrlBreakData[i].footer[j] = [];
            }
            ctrlBreakData[i].title = '';
        }

        hideTheColumns(ctrlBreakInfo);

        setIndex(origIndexes);  // Set the indexes back to the original indexes
        setControlBreakInfo(ctrlBreakInfo);
        setFooters(locFooters);
        setControlBreakData(ctrlBreakData);
    }

    /************************************************************************************************************
     *
     * Indicates whether a control break has been set or not for a column
     *
     * @param controlBreakInfo  information about hidden columns and control breaks
     *
     ************************************************************************************************************/
    function isControlBreak (controlBreakInfo) {
        for (let i = 0; i < controlBreakInfo.length; i++) {
            if (controlBreakInfo[i].ctrlBreak > 0) {    // If the control break column has a value greater than zero,
                return true;                            // control breaks have been set
            }
        }

        return false;   // No control breaks found
    }

    /********************************************************************************************************************
     *
     * The will place whether the column is hidden or shown in the table.  This information is passed back to the calling
     * component via a hidden function.  The hidden values (true or false) for each column is returned in an array.
     *
     * @param ctrlBreakInfo contains whether the column should be hidden or shown along with the control break information
     *
     *********************************************************************************************************************/
    function hideTheColumns(ctrlBreakInfo) {
        let hide = [];  // Indicates whether the column is hidden (true) or shown (false)
        for (let i = 0; i < ctrlBreakInfo.length; i++) {    // Spin through the control break info and see if the column
            hide.push(ctrlBreakInfo[i].hidden);             // is hidden or shown
        }

        if (hasOwnProperty(props, 'hidden') === true) {
            props.hidden(hide); // Call the hidden function in the calling component
        }
    }

    /***********************************************************************************************************************
     *
     * This will hide a column in the search sort table.  This is selected by the drop down with blue headers for each
     * column.
     *
     * @param row   the row being processed in the table props
     * @param i     current row in the table being processed
     *
     ***********************************************************************************************************************/
    function hideColumn(_row, i) {
        let ctrlBreakInfo = [...controlBreakInfo];
        ctrlBreakInfo[i].hidden = true;                 // Hide that particular column in the search sort table
        hideTheColumns(ctrlBreakInfo);
//        ctrlBreakInfo.forEach(findHiddenColumns(true));     // Find the column that is to be hidden in the DOM and add the hidden attribute
        setControlBreakInfo(controlBreakInfo)
        setHtmlDropDown(false);                         // Hide the dropdown in the column
    }

    /***********************************************************************************************************************
     *
     * This will show a column in the search sort table.  This is selected by the drop down with blue headers for each
     * column.
     *
     * @param row   the row being processed in the table props
     * @param i     current row in the table being processed
     *
     ***********************************************************************************************************************/
    function showColumn(_row, i) {
        let ctrlBreakInfo = [...controlBreakInfo];
        ctrlBreakInfo[i].hidden = false;                // Show that particular column in the search sort table
        hideTheColumns(ctrlBreakInfo);
//        ctrlBreakInfo.forEach(findHiddenColumns(false));    // Find the column that is to be shown in the DOM and add the hidden attribute
        setControlBreakInfo(controlBreakInfo)
        setHtmlDropDown(false);                         // Hide the dropdown in the column
    }

    /*************************************************************************************************************************
     *
     * This will find the next order number for the next control break.
     *
     * @param {*} controlBreakInfo  contains the control break sort order
     * @returns                     returns the next sort order number
     *
     *************************************************************************************************************************/
    function maxPlusOne(controlBreakInfo) {
        let max = -1;   // The next sort order number
        for (let i = 0; i < controlBreakInfo.length; i++) { // Find the maximum sort order number for the control breaks
            if (controlBreakInfo[i].ctrlBreak > max) {
                max = controlBreakInfo[i].ctrlBreak;
            }
        }

        return max + 1; // Return the next sort order number
    }

    /**************************************************************************************************************************
     *
     * This determines the data type of the data to be sorted.  If field is a date, its format is format is converted to the
     * correct format.
     *
     * @param   breakOrder  contains the control break sort order for the control breaks
     * @param   row         indexes for the control break
     *
     **************************************************************************************************************************/
    function buildSortData (breakOrder, row) {
        let data = [];  // The data for the control break
        for (let i = 0; i < breakOrder.length; i++) {   // Spin through the control break sort order
            let dateFormat = null;
            if (hasOwnProperty(table[breakOrder[i].col], 'sortDate')) {    // There is a sort data in the table props
                dateFormat = table[breakOrder[i].col].sortDate;
            }

            if (dateFormat !== null) {  // Convert the date to its sort date format
                if (dateFormat === 'MM/DD/YYYY') {
                    data.push(convertDate2(props.data[row][table[breakOrder[i].col].name], '/', 1));
                } else if (dateFormat === 'MM-DD-YYYY') {
                    data.push(convertDate2(props.data[row][table[breakOrder[i].col].name], '-', 1));
                } else if (dateFormat === 'MM/DD/YYYY HH:MM:SS') {
                    data.push(convertDateTime(props.data[row][table[breakOrder[i].col].name], '/', 1));
                } else if (dateFormat === 'MM-DD-YYYY HH:MM:SS') {
                    data.push(convertDateTime(props.data[row][table[breakOrder[i].col].name], '-', 1));
                } else if (dateFormat === 'YYYY-MM-DDTHH:MM:SS.SSS') {
                    data.push(convertDateTimeReg (props.data[row][table[breakOrder[i].col].name]));
                } else {
                    data.push(props.data[row][table[breakOrder[i].col].name]);
                }
            } else {    // No sort date format
                data.push(props.data[row][table[breakOrder[i].col].name]);
            }
        }

        return data;
    }

    /*********************************************************************************************************************
     *
     * The will sort multiple columns for the control breaks.  It will also sort the control break numbers to get the
     * columns in the right order.
     *
     * @param {*} ctrlBreakInfo information about the ordering of the control breaks
     * @param {*} indexes       indexes into the data
     * @returns                 the indexes and the data for the control break
     *
     *********************************************************************************************************************/
    function sortMultipleCols(ctrlBreakInfo, indexes) {
        let breakOrder = [];    // The sort order for the control breaks
        let sortAry = [];       // The sorted indexes based on the control break order

        if (table === null) return; // No table props

        // Copy the control break order from the control break info
        for (let i = 0; i < ctrlBreakInfo.length; i++) {
            if (ctrlBreakInfo[i].ctrlBreak > 0) {
                breakOrder.push ({ col: i, order: ctrlBreakInfo[i].ctrlBreak});
            }
        }

        // Sort the control break order
        breakOrder.sort(function (item1, item2) {
            return item1.order - item2.order;
        });

        // Build the indexes for each control break
        indexes.forEach ((row) => {
            sortAry.push ({ index: row, data: buildSortData(breakOrder, row) });
        });

        // Sort the indexes based on the control break sort order
        sortAry.sort(function (item1, item2) {
            for (let i = 0; i < breakOrder.length; i++) {

                let a = item1.data[i]
                let b = item2.data[i]

                // Convert to upper case if ignoring case
                if (typeof a === 'string' &&
                    hasOwnProperty(props,'ignorecase') === true) {
                    b = a.toUpperCase()
                    b = b.toUpperCase()
                }

                // Make the comparison
                if (a < b) {
                    return -1;
                } else if (a > b) {
                    return 1;
                }
            }

            return 0;
        });

        // Build the new indexes for the control break
        let newIndexes = [];
        sortAry.forEach((row) => newIndexes.push(row.index));

        setIndex(newIndexes, false);

        return { indexes: newIndexes, srtOrder: breakOrder };
    }

    /***********************************************************************************************************************
     *
     * This will calculate the pagination for the control breaks in the search sort table.  The starting or ending point
     * will be passed down and either the starting table and index within the table or the ending table and index within the
     * table.
     *
     * @param   point   the starting or ending point for a control break
     *
     ************************************************************************************************************************/
    function calcStartEndCB (point) {
        let tablePos = 0;   // The control break table in which the point is located
        let index = 0;      // The index within the control break table where the point is located
        let count = 0;      // Counts the length of each table to determine which table the point is in
        let length = 0;     // The length of a control break table
        let done = false;   // Indicates that the table position and index has been found

        for (let i = 0; i < controlBreakData.length && done === false; i++) {
            length = controlBreakData[i].data.length;
            if (count + length < point) {   // The point is not in this control break table
                count += length;
            } else {    // The point is in the control break table
                tablePos = i;
                index = (point - count);
                done = true;
            }
        }

        return { table: tablePos, index: index};    // Return the table position and index of the point
    }

    /*************************************************************************************************************************
     *
     * This will calculate the starting and ending position for the data to be displayed on the screen (pagination).
     *
     **************************************************************************************************************************/
    function calcPagination() {
        let starting = calcStartEndCB(start);   // Calculate the starting position
        let ending = calcStartEndCB(end);       // Calculate the ending position

        let infoObj = { tableStart: starting.table, // Place the starting and ending position in an object
                        startIndex: starting.index, // and return the object
                        tableEnd: ending.table,
                        endIndex: ending.index };
        return infoObj;
    }

    /*************************************************************************************************************************
     *
     * This will render the control break table and take care of the pagination.
     *
     * @param   row the name of the table being rendered
     * @param   i   current index into the controlBreakData
     *
     **************************************************************************************************************************/
    function renderCtrlBreak (row, i) {
        let name = `table${number}_${i}`;   // The name of the table
        let tableCBInfo = calcPagination(); // Calculate the starting and ending points for the data on the screen
        let displayFooter = false;          // Indicates whether the footer should be displayed or not
        let data = [];                      // The data for the control break

        if (i < tableCBInfo.tableStart) {   // Have not reached the starting control break table for the paginantion
            return null;
        } else if (tableCBInfo.tableStart === i) {      // At the start control break table to be displayed
            let end = controlBreakData[i].data.length;  // Set the ending of the pagination at the end of the control break table
            if (tableCBInfo.tableEnd === i) {           // The end of the pagination is before the end of the control break table
                end = tableCBInfo.endIndex;
            }

            // This pagination will reach the end of the control break table, so display any footers
            for (let j = tableCBInfo.startIndex; j < end; j++) {
                data.push(row.data[j]); // Copy the data to be displayed
                if (j + 1 === controlBreakData[i].data.length) {
                    displayFooter = true;
                }
            }
        } else if (i < tableCBInfo.tableEnd) {  // Have not reached the ending control break table
            data = row.data;                    // therefore, copy all the data from the control break table
        } else if (tableCBInfo.tableEnd === i) {    // Have reached the control break table for the end of the pagination
            // This pagination will reach the end of the control break table, so display any footers
            for (let j = 0; j < tableCBInfo.endIndex; j++) {
                data.push (row.data[j]);    // Copy the data to be displayed
                if (j + 1 === controlBreakData[i].data.length) {
                    displayFooter = true;
                }
            }
        } else {  // No more data for the pagination
            return null;
        }

        // At the end of the data for this pagination, so display the footer
        if (data.length === controlBreakData[i].data.length) {
            displayFooter = true;
        }

        let keyTable = `cbtable_${number}_${i}`;    // Key for the table using the name of the control break table
        let keyHeader = `cbrow_${number}`;          // Key for the header using the control break table number
        let key = `cbfoot_${number}_${i}`;          // Key for the footer using the control break table name

        return (    // Render the control break
            <table name={name} className={hoverClassName + " sw-sst_table"} key={keyTable}>
                <caption className="sw-sst_tableBold">{row.title}</caption>
                <tbody>
                    <tr key={keyHeader}>
                        {table.map(buildHeaders(false, i))}
                    </tr>
                    {data.map((row) => {
                        cbCount++;
                        return props.eachRowInTable(row, cbCount);
                    })}
                    <tr key={key}>
                        {(displayFooter === true) ? row.footer.map(buildMathFooters) : null}
                    </tr>
                </tbody>
            </table>
        )
    }

    /******************************************************************************************************************
     *
     * This compares two values to see if they are equal or unequal and returns true if they are equal and false if
     * they are unequal.  This used to determine the control break data.
     *
     * @param k     index into the control break data array
     * @param info  contains the indexes and sort order info into the data for the comparision
     * @param temp  the temporary value to compare to see if the control breaks have changed
     *
     ******************************************************************************************************************/
    function compare(k, info, temp) {
        let found = true;   // Assume to be equal until proven otherwise
        for (let j = 0; j < info.srtOrder.length; j++) {
            if (props.data[info.indexes[k]][table[info.srtOrder[j].col].name] !== temp[table[info.srtOrder[j].col].name]) {
                found = false;  // The values being compared are unequal
            }
        }

        return found;
    }

    /********************************************************************************************************************
     *
     * This will build the temporary value that is used to see if control breaks have changed.
     *
     * @param k     index into the control break data array
     * @param info  contains the indexes and sort order info into the data for the comparision
     *
     ******************************************************************************************************************/
    function processTemp(k, info) {
        let temp = {};  // Contains the temporary values
        if (props.data.length !== 0 && info.indexes.length !== 0) {
            for (let i = 0; i < info.srtOrder.length; i++) {    // Build the temporary value for a control break change
                temp[table[info.srtOrder[i].col].name] = props.data[info.indexes[k]][table[info.srtOrder[i].col].name];
            }
        }

        return temp;
    }

    /*******************************************************************************************************************
     *
     * This will build the title for each control break table.
     *
     * @param k     index into the control break data array
     * @param info  contains the indexes and sort order info into the data for the comparision
     *
     ******************************************************************************************************************/
    function processTitle(k, info) {
        let title = '';
        for (let i = 0; i < info.srtOrder.length; i++) {
            if (hasOwnProperty(table[info.srtOrder[i].col], 'dataDate') === true ||
                hasOwnProperty(table[info.srtOrder[i].col], 'filterDate') === true ||
                hasOwnProperty(table[info.srtOrder[i].col], 'searchDate') === true ||
                hasOwnProperty(table[info.srtOrder[i].col], 'sortDate') === true) {
                    title += `${table[info.srtOrder[i].col].header} ${convertDate(props.data[info.indexes[k]][table[info.srtOrder[i].col].name])}; `
            } else {
                title += `${table[info.srtOrder[i].col].header} ${props.data[info.indexes[k]][table[info.srtOrder[i].col].name]}; `
            }
        }

        return title;
    }

    /*******************************************************************************************************************
     *
     * This will set up a blenk footer for each control break table.
     *
     ******************************************************************************************************************/
    function processFooter() {
        let footer = new  Array(table.length);      // Allocate an array for the number of columns in the control break table
        for (let i = 0; i < table.length; i++) {    // Build the blank footer
            footer[i] = [];
        }

        return footer;
    }

    /*******************************************************************************************************************
     *
     * This will find the control breaks based on the data and build the control break tables.
     *
     * @param controlBreakInfo  contains whether the column in the table is to be hidden or is a control break
     * @param indexes           indexes into the data
     *
     ******************************************************************************************************************/
    function findCtrlBreak(controlBreakInfo, indexes) {
        let info = sortMultipleCols(controlBreakInfo, indexes); // Sort the columns based on the control break data
        let ctrlBreakData = [];                                 // Contains the control break title, data, and footer
        let startingPos = [0];                                  // Contains where each control break starts in the data
//        let pos = 0;                                            // Used to get the title out of the control break data
        let data = [];                                          // The data for the control break;

        let temp = processTemp (0, info);

        for (let k = 0; k < info.indexes.length; k++) {
            if (compare(k, info, temp) === true) {  // Check to see if the temporary value and data value are equal
//                pos = k;
                data.push(props.data[info.indexes[k]]); // Place the data into the control break data array
                if ((k + 1) === info.indexes.length) {  // At the end of the control break
                    let title = processTitle(k, info);  // Get the control break title and footer
                    let footer = processFooter();
                    ctrlBreakData.push ({ title: title, data: [...data], footer: footer }); // Build the control break data array
                }
            } else {    // Temporary value and dat values are unequal (new control break)
                startingPos.push(k);    // Place the starting position of the new table

                let title = processTitle(k - 1, info);    // Get the control break title and footer
                let footer = processFooter();

                // Build a control break table
                ctrlBreakData.push ({ title: title, data: [...data], footer: footer });

                data = [];  // Reset the data for the new control break table
                temp = processTemp(k, info);            // Get a new temporary value
                data.push(props.data[info.indexes[k]]); // Place the data in the control break data array
                if ((k + 1) === info.indexes.length) {  // At the end of the control break
                    let title = processTitle(k, info);  // Get the control break title and footer
                    let footer = processFooter();
                    ctrlBreakData.push ({ title: title, data: [...data], footer: footer }); // Build the control break data array
                }
            }
        }

        if (hasOwnProperty(props, 'startingpos') === true) {
            props.startingPos(startingPos); // Pass the starting positions of the control break tables back to the calling program
        }
        setStartPos(startingPos);
        setControlBreakData(ctrlBreakData);
    }

    /**************************************************************************************************************************
     *
     * This will turn a control break on in the control break info by assigning the next number in the ctrlBreak field.
     *
     * @param row   row in the control break info array
     * @param i     current index in the control break info array
     *
     **************************************************************************************************************************/
    function controlBreakOn(_row, i) {
        let ctrlBreakInfo = [...controlBreakInfo];

        ctrlBreakInfo[i].ctrlBreak = maxPlusOne(ctrlBreakInfo); // Assign a control break number to the column
        findCtrlBreak(ctrlBreakInfo, indexes);                  // Find the control break title, data, and footer for the contorl break table
        setControlBreakInfo(ctrlBreakInfo);
        setHtmlDropDown(false);                                 // Hide the dropdown for the column
    }

    /**************************************************************************************************************************
     *
     * This will turn a control break off in the control break info by assigning the next number in the ctrlBreak field.
     *
     * @param row   row in the control break info array
     * @param i     current index in the control break info array
     *
     **************************************************************************************************************************/
    function controlBreakOff(_row, i) {
        let ctrlBreakInfo = [...controlBreakInfo];

        ctrlBreakInfo[i].ctrlBreak = 0;         // Turn off the control break
        findCtrlBreak(ctrlBreakInfo, indexes);  // Find the control break title, data, and footer for the contorl break table
        setControlBreakInfo(ctrlBreakInfo);
        setHtmlDropDown(false);                 // Hide the dropdown for the column
    }

    /**************************************************************************************************************************
     *
     * This will hide the drop down in the column header.
     *
     **************************************************************************************************************************/
    function cancel() {
        setHtmlDropDown(false); // Hide the dropdown for the column
    }

    /**************************************************************************************************************************
     *
     * This will determine which column the aggregation is to be placed under.  This is needed because if a column is hidden
     * it will place the aggregation under the correct footer.  For, example if column before the aggregation column is hidden,
     * it will subtract one because of the hidden column to get the correct column.  This is because the column is still in the
     * table it is just hidden.
     *
     * @param index = the index of the aggregation column in the table without considering hidden columns
     *
     * @returns the correct index of the aggregation column wiht condsidering hidden columns
     *
     **************************************************************************************************************************/
    function determineCol (index) {
        let pos = index;    // Current index of the aggregation column
        for (let i = 0; i < controlBreakInfo.length && i < index; i++) {  // Loop until the end of the columns or the hidden column is reached
            if (controlBreakInfo[i].hidden === true) {  // Check to see if the column is hidden
                pos--;
            }
        }

        return pos;
    }

    /**************************************************************************************************************************
     *
     * This will sum a numeric column in the table and place the sum at the bottom of the table.
     *
     * @param   row the column information from the table props
     * @param   i   current index into the table props
     *
     ***************************************************************************************************************************/
    function summationFunct(row, i) {
        let sum = 0;    // The sum of the column
        if (isControlBreak(controlBreakInfo) === true) {    // There are control breaks
            for (let j = 0; j < controlBreakData.length; j++) { // Spin through the control break tables
                sum = 0;
                // Sum up the column for each row
                for (let k = 0; k < controlBreakData[j].data.length; k++) {
                    sum += controlBreakData[j].data[k][row.name];
                }
                controlBreakData[j].footer[determineCol(i)].push(`Sum: ${sum}`);  // Place the sum into the footer
            }
        } else {    // Regular search sort table to sum
            let locFooters = [...footers];  // Current footers

            // Sum the column for each row
            for (let j = 0; j < props.data.length; j++) {
                sum += props.data[j][row.name];
            }

            locFooters[determineCol(i)].push(`Sum: ${sum}`);    // Place the sum into the footer
            setFooters(locFooters);
        }
    }

    /**************************************************************************************************************************
     *
     * This will calculate the average of a numeric column in the table and place the average at the bottom of the table.
     *
     * @param   row the column information from the table props
     * @param   i   current index into the table props
     *
     ***************************************************************************************************************************/
    function averageFunct(row, i) {
        let sum = 0;    // The sum of the column
        let count = 0;  // The number of numeric values (number of rows)
        if (isControlBreak(controlBreakInfo) === true) {    // There are control breaks
            for (let j = 0; j < controlBreakData.length; j++) { // Spin through the control break tables
                sum = 0;
                count = 0;
                // Sum the column for each row
                for (let k = 0; k < controlBreakData[j].data.length; k++) {
                    sum += controlBreakData[j].data[k][row.name];
                    count++;
                }
                controlBreakData[j].footer[determineCol(i)].push(`Average: ${(sum / count).toFixed(mathDecimal)}`);   // Place the average into the footer
            }
        } else {    // Regular search sort table to calculate the average
            let locFooters = [...footers];  // Current footers

            // Sum the column for each row
            for (let j = 0; j < props.data.length; j++) {
                sum += props.data[j][row.name];
                count++;
            }

            locFooters[determineCol(i)].push(`Average: ${(sum / count).toFixed(mathDecimal)}`);   // Place the sum into the footer
            setFooters(locFooters);
        }
    }

    /**************************************************************************************************************************
     *
     * This will count the number of rows in the table and place the count in this column at the bottom of the table.
     *
     * @param   row the column information from the table props
     * @param   i   current index into the table props
     *
     ***************************************************************************************************************************/
    function countFunct(_row, i) {
        let count = 0;  // Counts the number of rows
        if (isControlBreak(controlBreakInfo) === true) {    // There are control breaks
            for (let j = 0; j < controlBreakData.length; j++) { // Spin through the control break tables
                count = 0;
                // Count the number of rows
                for (let k = 0; k < controlBreakData[j].data.length; k++) {
                    count++;
                }
                controlBreakData[j].footer[determineCol(i)].push(`Count: ${count}`);  // Place the counter into the footer
            }
        } else {    // Regular search sort table
            let locFooters = [...footers];  // Current footers

            // Count the number of rows
            for (let j = 0; j < props.data.length; j++) {
                count++;
            }

            locFooters[determineCol(i)].push(`Count: ${count}`);  // Place the counter into the footer
            setFooters(locFooters);
        }
    }

    /**************************************************************************************************************************
     *
     * This will count the distinct number of rows for that column in the table and place the count in this column at the
     * bottom of the table.
     *
     * @param   row the column information from the table props
     * @param   i   current index into the table props
     *
     ***************************************************************************************************************************/
    function countDistinctFunct(row, i) {
        let count = 0;  // The distinct (unique) count for the column
        if (isControlBreak(controlBreakInfo) === true) {    // There is a control break
            for (let j = 0; j < controlBreakData.length; j++) { // Spin through the control break tables
                count = 0;
                for (let k = 0; k < controlBreakData[j].data.length; k++) { // Spin through the rows of data
                    let found = false;
                    for (let m = 0; m < k; m++) {   // Spin through the previous rows in the table to see if a value for that column already exists
                        if (mathIgnoreCase === true && typeof controlBreakData[j].data[k][row.name] === 'string') {
                            // Check to see This value has already been counted after being converted to uppercase
                            if (controlBreakData[j].data[k][row.name].toUpperCase() === controlBreakData[j].data[m][row.name].toUpperCase() && found === false) {
                                found = true;
                            }
                        } else {    // Values is not a string and the case is ignored
                            if (controlBreakData[j].data[k][row.name] === controlBreakData[j].data[m][row.name] && found === false) {
                                found = true;
                            }
                        }
                    }

                    if (found === false) {  // Could not find this number already in the data; therefore, count it
                        count++;
                    }
                }
                controlBreakData[j].footer[determineCol(i)].push(`Distinct Count: ${count}`); // Place the distinct count into the footer
            }
        } else {    // Regular search sort table
            let locFooters = [...footers];  // Current footers

            for (let j = 0; j < props.data.length; j++) {
                let found = false;
                for (let m = 0; m < j; m++) {   // Spin through the previous rows in the table to see if a value for that column already exists
                    if (mathIgnoreCase === true && typeof props.data[j][row.name] === 'string') {
                        // Check to see This value has already been counted after being converted to uppercase
                        if (props.data[j][row.name].toUpperCase() === props.data[m][row.name].toUpperCase() && found === false) {
                            found = true;
                        }
                    } else {    // Values is not a string and the case is ignored
                        if (props.data[j][row.name] === props.data[m][row.name] && found === false) {
                            found = true;
                        }
                    }
                }

                if (found === false) {  // Could not find this number already in the data; therefore, count it
                    count++;
                }
            }

            locFooters[determineCol(i)].push(`Distinct Count: ${count}`); // Place the distinct count into the footer
            setFooters(locFooters);
        }
    }

    /**************************************************************************************************************************
     *
     * This will minimum column value in a column in the table and place the minimum value in this column at the
     * bottom of the table.
     *
     * @param   row the column information from the table props
     * @param   i   current index into the table props
     *
     ***************************************************************************************************************************/
    function minimumFunct(row, i) {
        let minimum = null; // The minimum value for the column
        if (isControlBreak(controlBreakInfo) === true) {    // There is a control break
            for (let j = 0; j < controlBreakData.length; j++) { // Spin through the data to find the minimum
                minimum = controlBreakData[j].data[0][row.name];    // Set the first value in the column to the minimum
                for (let k = 0; k < controlBreakData[j].data.length; k++) { // Spin through the data to find the minimum value in a column
                    if (mathIgnoreCase === true && typeof controlBreakData[j].data[k][row.name] === 'string') {
                        // Determine if a new minimum was found
                        if (controlBreakData[j].data[k][row.name].toUpperCase() < minimum.toUpperCase()) {
                            minimum = controlBreakData[j].data[k][row.name];
                        }
                    } else {    // Ignore the case
                        if (controlBreakData[j].data[k][row.name] < minimum) {  // Determine if a new minimum was found
                            minimum = controlBreakData[j].data[k][row.name];
                        }
                    }
                }
                controlBreakData[j].footer[determineCol(i)].push(`Minimum: ${minimum}`);  // Place the minimum value into the footer
            }
        } else {    // Regular search sort table
            let locFooters = [...footers];  // Current footers

            minimum = props.data[0][row.name];  // Set the first value in the column to the minimum
            for (let j = 0; j < props.data.length; j++) {   // Spin through the data to find the minimum value in a column
                if (mathIgnoreCase === true && typeof props.data[j][row.name] === 'string') {
                    // Determine if a new minimum was found
                    if (props.data[j][row.name].toUpperCase() < minimum.toUpperCase()) {
                        minimum = props.data[j][row.name];
                    }
                } else {    // Ignore the case
                    if (props.data[j][row.name] < minimum) {    // Determine if a new minimum was found
                        minimum = props.data[j][row.name];
                    }
                }
            }

            locFooters[determineCol(i)].push(`Minimum: ${minimum}`);  // Place the minimum value into the footer
            setFooters(locFooters);
        }
    }

    /**************************************************************************************************************************
     *
     * This will maximum column value in a column in the table and place the maximum value in this column at the
     * bottom of the table.
     *
     * @param   row the column information from the table props
     * @param   i   current index into the table props
     *
     ***************************************************************************************************************************/
    function maximumFunct(row, i) {
        let maximum = null; // The maximum value for the column
        if (isControlBreak(controlBreakInfo) === true) {    // There is a control break
            for (let j = 0; j < controlBreakData.length; j++) { // Spin through the data to find the maximum
                maximum = controlBreakData[j].data[0][row.name];    // Set the first value in the column to the maximum
                for (let k = 0; k < controlBreakData[j].data.length; k++) { // Spin through the data to find the maximum value in a column
                    if (mathIgnoreCase === true && typeof controlBreakData[j].data[k][row.name] === 'string') {
                        if (controlBreakData[j].data[k][row.name].toUpperCase() > maximum.toUpperCase()) {
                            // Determine if a new maximum was found
                            maximum = controlBreakData[j].data[k][row.name];
                        }
                    } else {    // Ignore the case
                        if (controlBreakData[j].data[k][row.name] > maximum) {  // Determine if a new maximum was found
                            maximum = controlBreakData[j].data[k][row.name];
                        }
                    }
                }
                controlBreakData[j].footer[determineCol(i)].push(`Maximum: ${maximum}`);  // Place the maximum value into the footer
            }
        } else {
            let locFooters = [...footers];  // Current footers

            maximum = props.data[0][row.name];  // Set the first value in the column to the maximum
            for (let j = 0; j < props.data.length; j++) {
                if (mathIgnoreCase === true && typeof props.data[j][row.name] === 'string') {
                    // Determine if a new maximum was found
                    if (props.data[j][row.name].toUpperCase() > maximum.toUpperCase()) {
                        maximum = props.data[j][row.name];
                    }
                } else {    // Ignore the case
                    if (props.data[j][row.name] > maximum) {    // Determine if a new maximum was found
                        maximum = props.data[j][row.name];
                    }
                }
            }

            locFooters[determineCol(i)].push(`Maximum: ${maximum}`);  // Place the minimum value into the footer
            setFooters(locFooters);
        }
    }

    /**************************************************************************************************************************
     *
     * This will find the median value for a column in the table and place the median value in this column at the
     * bottom of the table.
     *
     * @param   row the column information from the table props
     * @param   i   current index into the table props
     *
     ***************************************************************************************************************************/
    function medianFunct(row, i) {
        let median = null;  // Median value
        let middle = 0;     // Indicates the middle of the table to find the median
        let data = null;    // Sorted data for the table to determine the median
        if (isControlBreak(controlBreakInfo) === true) {    // There is a control break
            for (let j = 0; j < controlBreakData.length; j++) { // Spin through the data to find the median value

                let data = [...controlBreakData[j].data];   // Copy the data for the control break
                data.sort (function (item1, item2) {    // Sort the data inorder to find the median
                    if (item1[row.name] < item2[row.name]) {
                        return -1;
                    } else if (item1[row.name] > item2[row.name]) {
                        return 1;
                    } else {
                        return 0;
                    }
                })

                if (data.length % 2 === 0) {    // There is an even amount of numbers in the column
                    middle = parseInt(data.length / 2); // Find the middle of the data array
                    // Calculate the median by taking the average of the two numbers
                    median = ((data[middle - 1][row.name] + data[middle][row.name]) / 2).toFixed(mathDecimal);
                } else {    // There are an odd amount of numbers in the column
                    middle = parseInt(data.length / 2); // Find the middle of the data array and grab that number
                    median = data[middle][row.name];    // for the median
                }

                controlBreakData[j].footer[determineCol(i)].push(`Median: ${median}`);    // Place the median value into the footer
            }
        } else {    // Regular search sort table
            let locFooters = [...footers];  // Current footers

            median = null;
            middle = 0;
            data = [...props.data]; // Copy the data in order to find the median
            data.sort (function (item1, item2) {        // Sort the data inorder to find the median
                if (item1[row.name] < item2[row.name]) {
                    return -1;
                } else if (item1[row.name] > item2[row.name]) {
                    return 1;
                } else {
                    return 0;
                }
            })

            if (data.length % 2 === 0) {    // There is an even amount of numbers in the column
                middle = parseInt(data.length / 2); // Find the middle of the data array
                // Calculate the median by taking the average of the two numbers
                median = ((data[middle - 1][row.name] + data[middle][row.name]) / 2).toFixed(mathDecimal);
            } else {    // There are an odd amount of numbers in the column
                middle = parseInt(data.length / 2); // Find the middle of the data array and grab that number
                median = data[middle][row.name];    // for the median
            }

            locFooters[determineCol(i)].push(`Median: ${median}`);    // Place the median value into the footer
            setFooters(locFooters);
        }
    }

    /**************************************************************************************************************************
     *
     * This is called when the user presses the Apply button to apply the aggregation to the column from the
     * dropDown over the column.
     *
     * @param   row the column information from the table props
     * @param   i   current index into the table props
     *
     ***************************************************************************************************************************/
    function applyFunction(row, i) {
        // Make sure an aggregation was selected from the pull down choice box
        let localInvalid = [...invalid];
        if (functSelect === '' || functSelect === null || functSelect === undefined) {
            localInvalid = setInvalidScreen(localInvalid, AGGREGATE, 'An aggregate must be entered');
            setInvalid(localInvalid);
            return;
        }

        if (functSelect === 'Summation') {
            summationFunct (row, i);
        } else if (functSelect === 'Average') {
            averageFunct(row, i);
        } else if (functSelect === 'Count') {
            countFunct(row, i);
        } else if (functSelect === 'Count Distinct') {
            countDistinctFunct(row, i);
        } else if (functSelect === 'Minimum') {
            minimumFunct(row, i);
        } else if (functSelect === 'Maximum') {
            maximumFunct(row, i);
        } else if (functSelect === 'Median') {
            medianFunct(row, i);
        }
        setHtmlDropDown(false); // Hide the dropDown over the column
    }

    /*************************************************************************************************************************
     *
     * This will display the dropDown above the column header.  The single page with a circle X will hide the column.
     * The single page by itself will show the column.  The multiple pages will do a control break on that column.  The
     * multiple pages with a circle X will undo the control break for that column.  The circle X will cancel the drop down.
     * The choice box will allow the user to select from a list of aggregations base on the type of data in the column.  The
     * apply button will do the aggregation operation selected and place the result a the bottom of the column.
     *
     * @param   row the column information from the table props
     * @param   i   current index into the table props
     *
     ***************************************************************************************************************************/
    function showDropDown(row, i) {
        let functionList = null;

        if (hasOwnProperty(row, 'type') === true) {    // The type of data for the column is table props
            if (row.type === 'string') {
                functionList = ['', 'Count', 'Count Distinct', 'Minimum', 'Maximum']
            } else {
                functionList = ['', 'Summation', 'Average', 'Count', 'Count Distinct', 'Minimum', 'Maximum', 'Median'];
            }
        } else if (typeof props.data[0][row.name] === 'string') {
            functionList = ['', 'Count', 'Count Distinct', 'Minimum', 'Maximum']
        } else if (typeof props.data[0][row.name] === 'number') {
            functionList = ['', 'Summation', 'Average', 'Count', 'Count Distinct', 'Minimum', 'Maximum', 'Median'];
        }

        let hiddenRender = null;
        if (hasOwnProperty(props, 'nohidden') === false) {
            if (controlBreakInfo[i].hidden === false) {
                hiddenRender =
                    <span className="sw-sst_showToolTip">
                        <button name="hidden" onClick={() => hideColumn(row, i)} className="sw-sst_dropDownButton" >🗏⊗</button>
                        <span className="sw-sst_toolTip sw-sst_top">Hide Column</span>
                    </span>;

            } else {
                hiddenRender =
                    <span className="sw-sst_showToolTip">
                        <button name="show" onClick={() => showColumn(row, i)} className="sw-sst_dropDownButton" >🗏</button>
                        <span className="sw-sst_toolTip sw-sst_top">Show Column</span>
                    </span>
            }
        }

        let controlBreakRender = null;
        if (hasOwnProperty(props, 'nocontrolbreak') === false) {
            if (controlBreakInfo[i].ctrlBreak === 0) {
                controlBreakRender =
                    <span className="sw-sst_showToolTip">
                        <button name="controlBreakOn" onClick={() => controlBreakOn(row, i)} className="sw-sst_dropDownButton" >🗐</button>
                        <span className="sw-sst_toolTip sw-sst_top">Control Break</span>
                    </span>;
            } else {
                controlBreakRender =
                    <span className="sw-sst_showToolTip">
                        <button name="controlBreakOff" onClick={() => controlBreakOff(row, i)} className="sw-sst_dropDownButton" >🗐⊗</button>
                        <span className="sw-sst_toolTip sw-sst_top">Undo Control Break</span>
                    </span>;
            }
        }


        // Render the drop down
        return (
            <div className="sw-sst_dropDownDiv">
                { hiddenRender }
                { controlBreakRender }
                <span className="sw-sst_showToolTip">
                    <button name="cancel" onClick={cancel} className="sw-sst_dropDownButton">⊗</button><br />
                    <span className="sw-sst_toolTip sw-sst_top">Cancel</span>
                </span>
                { (hasOwnProperty(props, 'noaggregation') === true) ? null :
                    <span>
                        <span className="sw-invalid_checkForError">
                            <Choice choices={functionList} name="functSelect" value={functSelect}
                                onChange={(event) => setFunctSelect(event.target.value)}
                                onClick={() => wasClickedScreen(invalid, AGGREGATE, setInvalid)}
                                className={"sw-sst-dropDown_choice" + processInvalidStyleScreen(invalid, AGGREGATE)} />
                            {(isInvalid(invalid[AGGREGATE], -1) === true) ? <span className="sw-invalid_errMessage">{invalid[AGGREGATE].message}</span> : null }
                        </span>
                        <button name="apply" onClick={() => applyFunction(row, i)} className="sw-sst_dropButton">Apply</button>
                    </span>
                }
            </div>
        );
    }

    /****************************************************************************************************************************
     *
     * This determines which column the drop down menu is displayed over.
     *
     * @param   row the column information from the table props
     * @param   i   current index into the table props
     *
     ***************************************************************************************************************************/
    function displayDropDown(_row, i) {
        setDropDownIndex(i);    // Indicates which column in the table the drop down should appear above
        setFunctSelect('');     // No aggregate function has been selected
        setHtmlDropDown(true);  // Display the drop down over the appropriate column
    }

    /***********************************************************************************************************************
     *
     * This function will called when the user presses the checkbox in the header if there is one.  The function
     * will indicate the checkbox changed values and it will call the checkedFunct passed in through the props.
     *
     * @param {*} value indicates whether the checkbox is checked (Y) or unchecked
     *
     ***********************************************************************************************************************/
    function processChecked(value) {
        setChecked(value);
        props.checkedFunct(value, filterOn);
    }


    /*********************************************************************************************************************
     *
     * The is will place the headers in the table object into the table.
     *
     * @param {*} row           the row in the table props which contains the name of the header
     * @param {*} i             the index of the column in the table
     * @param {*} main          indicates whether this is the main header, which will be displayed in a certain color
     * @param {*} tableIndex    indicates the column in which drop down should appear
     *
     *********************************************************************************************************************/
    function buildHeaders(main, tableIndex) {
        const f = (row, i) => {
            let key = 'cell_' + i;
            let btnImg = '\u2BC8';
            // let filterKey = 'filter_' + i;
            let filterName = row.header + '_filter';
            let ctrlBreak = false;

            if (isControlBreak(controlBreakInfo) === true) {
                ctrlBreak = true;
            }

            let doSort = false;
            if ((main === true && ctrlBreak === false) || (main === false && ctrlBreak === true)) {
                doSort = true;
            }

            if (doSort === true && controlBreakInfo.length > 0 && controlBreakInfo[i].hidden === true) {
                return;
            }

            // console.log(`buildHeaders() filter[${filter.length}]:`, JSON.stringify(filter));

            let fontColor = null;
            if (main === true) {
                fontColor = "sw-sst_headerColor";
            }

            if (table[i].sort === true && sortOrder[i] !== 'N' && (doSort === true)) {
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

            if (row.checked === true) {
                return (<th key={key} className={headerStyle}>
                            <CheckBox selectedValue="Y" className="sw-ss_check"
                                name="checked" value={checked}
                                onChange={(event) => processChecked(event.target.value)} />
                        </th>
                )
            } else if (filterOn === 'Y' && (hasOwnProperty(props,'nofilter') === false  || props.nofilter === true) && main === true) {
                // Filter is turned on
                let filterStyle = processInvalidStyleScreen(invalid, FILTER, 'sw-sst_widthStyle');

                if (row.sort === false || hasOwnProperty(props,'nosort') === true) { // No sorting, so no onClick handler
                    if (row.search === false) { // No searching on this field, so no filtering on it also
                        /* at this point main is always true    && main === true */
                        if (row.dropDown === true) {
                            return (<th key={key} className={headerStyle}>
                                        {(i === dropDownIndex && htmlDropDown === true) ? showDropDown(row, i) : null}
                                        <button className={"sw-sst_headerButton " + fontColor} onClick={() => displayDropDown(row, i)}>{row.header}</button>
                                    </th>)  // Display the header only
                        } else {
                            return (<th key={key} className={headerStyle}>
                                        <div className={fontColor}>{row.header}</div>
                                    </th>)  // Display the header only
                        }
                    } else {    // Can filter; therefore, display the input field
                        return (
                            <th key={key} className={headerStyle + ' sw-sst_bottom'}>
                                {/* at this point main is always true    && main === true */}
                                {(i === dropDownIndex && htmlDropDown === true) ? showDropDown(row, i) : null}
                                {/* at this point main is always true    && main === true */}
                                {(row.dropDown === true) ?
                                    <button className={"sw-sst_headerButton" + fontColor} onClick={() => displayDropDown(row, i)}>{row.header}</button> :
                                    <div className={fontColor}>{row.header}</div>}
                                <span className="sw-invalid_checkForError">
                                    {(hasOwnProperty(props, 'choice') === false) ?
                                        <input type="text" name={filterName} className={filterStyle} value={filter[i]} onChange={(event) => processFilter(event.target.value, i)} disabled={props.error} /> :
                                        <ChoiceText list={"dropDown_" + i} choices={columns[i]} name={filterName} className={filterStyle} value={filter[i]} onChange={(event) => processFilter(event.target.value, i)} disabled={props.error} />}
                                </span>
                            </th>
                        );
                    }
                } else {    // Sorting on the column is allowed
                    if (row.search === false) { // No searching or filtering on the column, so display header only
                        return (
                            <th key={key} className={headerStyle}>
                              {/* at this point main is always true    && main === true */}
                                {(i === dropDownIndex && htmlDropDown === true) ? showDropDown(row, i) : null}

                                {/* at this point main is always true    && main === true */}
                                {(row.dropDown === true) ? <button className={"sw-sst_headerButton " + fontColor} onClick={() => displayDropDown(row, i)}>{row.header}</button> :
                                    <div className={fontColor}>{row.header}</div>}
                                {(doSort === true) ? <button name="sort" onClick={() => sortClicked(row.name, 'X', indexes, tableIndex)} className="sw-sst_buttonStyle2">{btnImg}</button> : null }
                            </th>
                        );
                    } else {    // Searching and filtering is allowed
                        return (    // Display header and input field for filtering
                            <th key={key} className={headerStyle + ' sw-sst_bottom'}>
                                {/* at this point main is always true    && main === true */}
                                {(i === dropDownIndex && htmlDropDown === true) ? showDropDown(row, i) : null}
                                <div>
                                    {/* at this point main is always true    && main === true */}
                                    {(row.dropDown === true) ? <button className={"sw-sst_headerButton " + fontColor} onClick={() => displayDropDown(row, i)}>{row.header}</button> :
                                        <div className={fontColor}>{row.header}</div>}
                                    {(doSort === true) ? <button name="sort" onClick={() => sortClicked(row.name, 'X', indexes, tableIndex)} className="sw-sst_buttonStyle2">{btnImg}</button> : null }
                                </div>
                                <span className="sw-invalid_checkForError">
                                    {(hasOwnProperty(props, 'choice') === false) ?
                                        <input type="text" name={filterName} className={filterStyle} value={filter[i]} onChange={(event) => processFilter(event.target.value, i)} disabled={props.error} /> :
                                        <ChoiceText list={"dropDown" + i} choices={columns[i]} name={filterName} className={filterStyle} value={filter[i]} onChange={(event) => processFilter(event.target.value, i)} disabled={props.error} /> }
                                </span>
                            </th>
                        );
                    }
                }
            // Filtering is off or not allowed
            } else if (row.sort === false || hasOwnProperty(props,'nosort') === true) { // No sorting, so no onClick handler
                return (<th key={key} className={headerStyle}>
                                {(i === dropDownIndex && main === true && htmlDropDown === true) ? showDropDown(row, i) : null}
                                {(row.dropDown === true && main === true) ? <button className={fontColor} onClick={() => displayDropDown(row, i)}>{row.header}</button> :
                                    <div className={fontColor}>{row.header}</div>}
                        </th> ); // Display the header only
            } else {    // Sorting on the column is allowed
                return (
                    <th key={key} className={headerStyle}>
                        {(i === dropDownIndex && main === true && htmlDropDown === true) ? showDropDown(row, i) : null}
                        {(row.dropDown === true && main === true) ? <button className={"sw-sst_headerButton " + fontColor} onClick={() => displayDropDown(row, i)}>{row.header}</button> :
                            <div className={fontColor}>{row.header}</div>}
                        {(doSort === true) ? <button name="sort" onClick={() => sortClicked(row.name, 'X', indexes, tableIndex)} className="sw-sst_buttonStyle2">{btnImg}</button> : null }
                    </th>
                );
            }
        }

        return f
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

    /******************************************************************************************************
     *
     * This will place the aggregate footers at the bottom of each column if there are any.
     *
     * @param row   row in the control break data array that contains the footer
     * @param i     current index into the control break data array
     *
     ******************************************************************************************************/
    function buildMathFooters(row, i) {
        let key = 'mathfooter_' + i;

        if (row === undefined || row === null) {    // No footer for this column, so return a blank cell
            return <td key={key}></td>;
        }


        let foot = [];  // Contains all the information in the footer with <br /> between each aggregate footer
        for (let j = 0; j < row.length; j++) {
            foot.push(<span>{row[j]}<br /></span>);
        }

        return (    // Place a value in the column
            <td key={key} className={footerStyle}>{foot}</td>
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

        if (value !== 'Y' && isControlBreak(controlBreakInfo) === true) {
            findCtrlBreak(controlBreakInfo, origIndexes);
        } else {
            setIndex(origIndexes, true);
            resetSortOrder();
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

        // console.log(`processFilter() local[${local.length}]`, JSON.stringify(local));

        setFilter(local);
    }

    /******************************************************************************************
     *
     * This will make sure that the user entered at least one value in one of the filter
     * input boxes.  This is called when the user presses the Filter button.
     *
     * @param {*}   which indicates whether both (B) the search header and item
     *                  should be validated or only the header (H)
     *
     ******************************************************************************************/
    function filterValidate(_which) {
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
                if (hasOwnProperty(table[indexing[j]], 'dataDate') && hasOwnProperty(table[indexing[j]], 'filterDate')) {
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
                        dataPart = convertDate2(data[indexes[i]][table[indexing[j]].name], '/', 1);
                    } else if (table[indexing[j]].dataDate === 'MM-DD-YYYY') {
                        dataPart = convertDate2(data[indexes[i]][table[indexing[j]].name], '-', 1);
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
                            filterPart = convertDate2(filter[indexing[j]], '/', 1);
                        } else if (filter[indexing[j]].length === 'MM/YYYY'.length && filter[indexing[j]].indexOf('/') !== -1) {
                            filterPart = convertDate2(filter[indexing[j]], '/', 2);
                        } else {
                            filterPart = filter[indexing[j]];
                        }
                    } else if (table[indexing[j]].filterDate === 'MM-DD-YYYY') {
                        if (filter[indexing[j]].length === 'MM-DD-YYYY'.length) {
                            filterPart = convertDate2(filter[indexing[j]], '-', 1);
                        } else if (filter[indexing[j]].length === 'MM-YYYY'.length && filter[indexing[j]].indexOf('-') !== -1) {
                            filterPart = convertDate2(filter[indexing[j]], '-', 2);
                        } else {
                            filterPart = filter[indexing[j]];
                        }
                    } else if (table[indexing[j]].filterDate === 'MM/DD/YYYY HH:MM:SS') {
                        if (filter[indexing[j]].length === 'MM/DD/YYYY HH:MM:SS'.length) {
                            filterPart = convertDateTime(filter[indexing[j]], '/', 1);
                        } else if (filter[indexing[j]].length === 'MM/YYYY'.length && filter[indexing[j]].indexOf('/') !== -1) {
                            filterPart = convertDate2(filter[indexing[j]], '/', 2);
                        } else {
                            filterPart = filter[indexing[j]];
                        }
                    } else if (table[indexing[j]].filterDate === 'MM-DD-YYYY HH:MM:SS') {
                        if (filter[indexing[j]].length === 'MM-DD-YYYY HH:MM:SS'.length) {
                            filterPart = convertDateTime (filter[indexing[j]], '-', 1);
                        } else if (filter[indexing[j]].length === 'MM/YYYY'.length && filter[indexing[j]].indexOf('-') !== -1) {
                            filterPart = convertDate2(filter[indexing[j]], '-', 2);
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
            if (isControlBreak(controlBreakInfo) === true) {
                findCtrlBreak(controlBreakInfo, newData);
            }
        }
    }

    /********************************************************************************************************************
     *
     * This will set the indexes, and possibly a copy of the index, the length of the indexes, and the start and end of
     * the indexes.
     *
     * @param indexing  the indexes to be set
     * @param doCopy    indicates whether a copy of the indexes should be made (true) or not (false)
     *
     *********************************************************************************************************************/
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
     * @param {*} type  number to indicate whether to have the date (1) or date and time (2)
     *
     **********************************************************************************************/
    function convertDate2(date, char, type) {
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
     * @param {*} date  the date to be converted to the YYYY-MM-DD format
     * @param {*} char  the slash (/) or dash (-)
     * @param {*} type  number to indicate whether to have the date (1) or date and time (2)
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
     *******************************************************************************/
    function validate() {
        let localInvalid = [...invalid];

        localInvalid[SRCHHDR].validity = false;
        localInvalid[SRCHHDR].display = false;
        localInvalid[SRCHITEM].validity = false;
        localInvalid[SRCHITEM].display = false;

        if (searchHeader === '') {
            localInvalid = setInvalidScreen(localInvalid, SRCHHDR, 'A column header to be searched must be selected');
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
        if (table && validate() === true) {  // Make sure a value has been selected in the drop down and text box
            let search = null;
            search = (hasOwnProperty(props,'ignorecase') === true) ?
                searchItem.toUpperCase() :  // Convert to upper case to ignore case
                searchItem;
            // Find a match in the correct column of the data

            let found = false;
            if (searchHeader !== 'All') {
                let tableIndex = table.map(function(e) { return e.header; }).indexOf(searchHeader);
                // Column match
                if (hasOwnProperty(table[tableIndex], 'dataDate') && hasOwnProperty(table[tableIndex], 'searchDate')) {
                    found = searchDate(search, tableIndex);
                } else if (hasOwnProperty(props,'searchstart') === true) {
                    found = searchStart(search, table[tableIndex].name);
                } else {
                    found = searchAny(search, table[tableIndex].name);
                }

//            let index = props.data.findIndex(val => val[table[tableIndex].name].toString().startsWith(search));   // Text match
    //            setStartEnd(index); // Set the start and end to show the found text
            }
            else if (hasOwnProperty(props, 'searchall')) {
                for (let tableIndex = 0; tableIndex < table.length && found === false; tableIndex++) {
                    if (hasOwnProperty(table[tableIndex], 'dataDate') && hasOwnProperty(table[tableIndex], 'searchDate')) {
                        found = searchDate(search, tableIndex);
                    } else if (hasOwnProperty(props,'searchstart') === true && found === false) {
                        found = searchStart(search, table[tableIndex].name);
                    } else if (found === false) {
                        found = searchAny(search, table[tableIndex].name);
                    }
                }
            }

            if (found === false) {
                setAlertMessage(`Could not find ${searchItem} in the table`);
                setShowAlert(true);
            }
        }
    }

    /*********************************************************************************************
     *
     * This is search through the date and compare dates in the correct format to see if they
     * are equal.  If they are equal, it will move that row in the table to the top.
     *
     * Parameters:
     * @param   searchItem the date to search for
     * @param   tableIndex the index into the table
     *
     **********************************************************************************************/
    function searchDate(searchItem, tableIndex) {

        let data = props.data;  // The data to filter
        let done = false;
        let found = false;

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
                    dataPart = convertDate2(data[indexes[i]][table[tableIndex].name], '/', 1);
                } else if (table[tableIndex].dataDate === 'MM-DD-YYYY') {
                    dataPart = convertDate2(data[indexes[i]][table[tableIndex].name], '-', 1);
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
                        searchPart = convertDate2(searchItem, '/', 1);
                    } else if (searchItem.length === 'MM/YYYY'.length && searchItem.indexOf('/') !== -1) {
                        searchPart = convertDate2(searchItem, '/', 2);
                    } else {
                        searchPart = searchItem;
                    }
                } else if (table[tableIndex].searchDate === 'MM-DD-YYYY') {
                    if (searchItem.length === 'MM-DD-YYYY'.length) {
                        searchPart = convertDate2(searchItem, '-', 1);
                    } else if (searchItem.length === 'MM-YYYY'.length && searchItem.indexOf('-') !== -1) {
                        searchPart = convertDate2(searchItem, '-', 2);
                    } else {
                        searchPart = searchItem;
                    }
                } else if (table[tableIndex].searchDate === 'MM/DD/YYYY HH:MM:SS') {
                    if (searchItem.length === 'MM/DD/YYYY HH:MM:SS'.length) {
                        searchPart = convertDateTime(searchItem, '/', 1);
                    } else if (searchItem.length === 'MM/YYYY'.length && searchItem.indexOf('/') !== -1) {
                        searchPart = convertDate2(searchItem, '/', 2);
                    } else {
                        searchPart = searchItem;
                    }
                } else if (table[tableIndex].searchDate === 'MM-DD-YYYY HH:MM:SS') {
                    if (searchItem.length === 'MM-DD-YYYY HH:MM:SS'.length) {
                        searchPart = convertDateTime (searchItem, '-', 1);
                    } else if (searchItem.length === 'MM/YYYY'.length && searchItem.indexOf('-') !== -1) {
                        searchPart = convertDate2(searchItem, '-', 2);
                    } else {
                        searchPart = searchItem;
                    }
                } else if (table[tableIndex].searchDate === 'YYYY-MM-DDTHH:MM:SS.SSS') {
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
                    found = true;
                }
            }
        }

        return found;
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
        let begin = (hasOwnProperty(props,'nocontsearch') === true || start === 0) ? 0: start + 1;  // Where to start the search
        let found = false;  // Indicates that the item was found

        for (let i = begin; i < length && found === false; i++) {
            let compareStr = (hasOwnProperty(props, 'ignorecase')) ? props.data[indexes[i]][name].toString().toUpperCase() :
                                                                  props.data[indexes[i]][name].toString();
            if (compareStr.startsWith(search)) {    // Item was found
                found = true;
                setStartEnd(i, length, indexes); // Set the start and end positions of the data on the screen.
            }
        }

        return found;
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
        let begin = (hasOwnProperty(props,'nocontsearch') === true || start === 0) ? 0: start + 1;  // Where to start the search
        let found = false;  // Indicates that the item was found

        for (let i = begin; i < props.data.length && found === false; i++) {
            const str = (props.data[indexes[i]][name]) ? props.data[indexes[i]][name].toString() : ''
            const compareStr = (hasOwnProperty(props, 'ignorecase')) ? str.toUpperCase() : str;

            if (compareStr.indexOf(search) !== -1) {    // Item was found
                found = true;
                setStartEnd(i, length, indexes);  // Set the start and end positions of the data on the screen.
            }
        }

        return found;
    }

    /******************************************************************************************************************
     *
     * This function will sort a column header in the table (all the data is sorted by
     * the field that matches the column header) in either ascending (A) or descending (D)
     * order.
     *
     * @param {*} name          the name of the column header to sort
     * @param {*} orderType     the order in which the array should be sorted (A - ascending, D - Descending, N - Neither)
     * @param {*} indexes       the current indexing of how the data should be displayed
     * @param {*} tableIndex    the index into the table props for the table being sorted
     *
     *******************************************************************************************************************/
    function sortClicked(name, orderType, indexes, tableIndex) {

        // console.log('sortClicked(',name, orderType);

        if (!table) {   // No table props
           return []
        }

        let index = table.map(function(e) { return e.name; }).indexOf(name);   // Column match
        let localIndexes = [...indexes];
        let ctrlBreak = false;      // Indicates whether there is a control break or not
        let startingPosition = 0;   // The starting position of the control break for the column
        let endingPosition = 0;     // The ending position of the control break for the column

        if (isControlBreak(controlBreakInfo) === true) {    // There is a control break
            startingPosition = startPos[tableIndex];
            if (tableIndex + 1 >= startPos.length) {
                endingPosition = startingPosition + 1;
            } else {
                endingPosition = startPos[tableIndex + 1];
            }
            localIndexes = [];  // Determine the indexes for the control break
            for (let j = startingPosition; j < endingPosition; j++) {
                localIndexes.push (indexes[j]);
            }
            ctrlBreak = true;
        }


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
                if (ctrlBreak === true) {
                    ordering = 'A';
                    order[index] = 'A';
                } else {
                    ordering = 'N';
                    order[index] = 'N';
                }
            }

            setSortOrder(order);
        }

        // console.log('sortOrder was:', sortOrder, 'changing to:', order, 'ordering:', ordering, 'orderType:', orderType);

        if (ordering === 'N') {
            setIndex(copyIndex, false);

            return;
        }

        let dateFormat = null;
        if (hasOwnProperty(table[index], 'sortDate')) {
            dateFormat = table[index].sortDate;
        }

        let sortAry = [];
        localIndexes.forEach ((row) => {
            if (dateFormat !== null) {
                if (dateFormat === 'MM/DD/YYYY') {
                    sortAry.push({index: row, data: convertDate2(props.data[row][name], '/', 1)});
                } else if (dateFormat === 'MM-DD-YYYY') {
                    sortAry.push({index: row, data: convertDate2(props.data[row][name], '-', 1)});
                } else if (dateFormat === 'MM/DD/YYYY HH:MM:SS') {
                    sortAry.push({index: row, data: convertDateTime(props.data[row][name], '/', 1)});
                } else if (dateFormat === 'MM-DD-YYYY HH:MM:SS') {
                    sortAry.push({index: row, data: convertDateTime(props.data[row][name], '-', 1)});
                } else if (dateFormat === 'YYYY-MM-DDTHH:MM:SS.SSS') {
                    sortAry.push({index: row, data: convertDateTimeReg (props.data[row][name])});
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
                hasOwnProperty(props,'ignorecase') === true) {
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

        if (ctrlBreak === true) {   // There is a control break
            let cbData = [];    // The data for the control break
            // Create the indexes for each individual control break
            //console.log('sortAry :', sortAry);
            for (let i = 0; i < sortAry.length; i++) {
                localIndexes[i] = sortAry[i].index;
                cbData.push (props.data[sortAry[i].index]);
            }

            let newIndexes = [...indexes];  // New indexes for the control break
            for (let i = startingPosition, j = 0; i < endingPosition; i++, j++) {
                newIndexes[i] = localIndexes[j];
            }

            let localData = [...controlBreakData];
            localData[tableIndex].data = cbData;
            setControlBreakData(localData);

            setIndex(newIndexes, false);

            return newIndexes;
        } else {    // Regular search sort table
            let newIndexes = [];    // Indexes for the search sort table
            sortAry.forEach((row) => newIndexes.push(row.index));

            setIndex(newIndexes, false);

            return newIndexes;
        }
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

    /*************************************************************************************************************************
     *
     * This will reset the sort order back to neither (not ascending or descending).
     *
     *************************************************************************************************************************/
    function resetSortOrder() {
        let order = new Array(table.length).fill('N');
//        console.log('sortOrder was:', sortOrder, 'changing to:', order);
        setSortOrder(order);
    }

    /*************************************************************************************************************************
     *
     * This will set the background if the letters prop option is used.
     *
     * @param index the index for the letter that was pressed
     * @param set   indicates to make that letter a special background color
     *
     **************************************************************************************************************************/
    function clearSetBackground(index, set) {
        let backgrd = [...background];  // Array of for each letter displayed for the background color
        for (let i = 0; i < backgrd.length; i++) {  // Set all the letters to a standard background color
            backgrd[i] = 'sw-sst_regBackground';
        }

        if (set === true) { // Set the letter pressed to the special background color
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
     * @param {*} letter    the selected letter by the user
     * @param {*} bIndex    the index of the letter that was selected
     *
     *************************************************************************************/
    function letterLink(letter, bIndex) {

        if (!table) {
          return
        }

        let indexing = [...origIndexes];

        if (validate() === true) {   // Validate that a search header was entered
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

    /************************************************************************************************************
     *
     * This will determine if the top, previous, next, or bottom buttons are disabled
     * on the search bar.
     *
     * @param {*} index     the current starting index in the data
     * @param {*} endLen    the ending length of the data to determine what to disable
     *
     *************************************************************************************************************/
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

    /********************************************************************************************************************
     *
     * This will send the indexes being displayed (pagination) back to the calling component
     *
     * @param   start   the start of the indexes to be returned
     * @param   end     the end of the indexes to be returned
     * @param   length  the length of the indexes array
     * @param   indexes the complete set of indexes
     *
     ******************************************************************************************************************************/
    function sendIndexes(start, end, length, indexes) {
        let sentIndexes = [];   // The indexes to be returned (pagination) to the calling component
        for (let i = start; i < end && i < length; i++) {
            sentIndexes.push(indexes[i]);
        }

        if (hasOwnProperty(props, 'indexing')) {
            props.indexing(sentIndexes);    // Send back the pagination indexes back to the calling component
        }

        if (hasOwnProperty(props, 'allIndexes') === true) {
            props.allIndexes(indexes);  // Send all the indexes back to the calling component
        }
    }

    /***********************************************************************************
     *
     * This will determine where the current start and end are in the data so they
     * can be displayed in the table.
     *
     * @param {*} index     the current starting position
     * @param {*} dataLen   the length of the data
     * @param {*} indexes   the indexes that indicates how the data is to be displayed
     *
     ***********************************************************************************/
    function setStartEnd(index, dataLen, indexes) {
        if (index !== -1) {
            if (index + maxItems >= dataLen) { // End is past the data
                setStart (index);
                setEnd (dataLen);
                (hasOwnProperty(props,'startEnd') === true) ? props.startEnd (index, dataLen) : null;
                sendIndexes(index, dataLen, dataLen, indexes);
                setDisable(index, dataLen);
            } else {    // End is not past the data
                setStart (index);
                setEnd (index + maxItems);
                setDisable(index, dataLen);
                (hasOwnProperty(props,'startEnd') === true) ? props.startEnd (index, index + maxItems) : null;
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
            (hasOwnProperty(props,'startEnd') === true) ? props.startEnd (0, maxItems) : null;
            sendIndexes(0, maxItems, length, indexes);
        } else {    // At the end of the data
            setStart (0);
            setEnd (length);
            (hasOwnProperty(props,'startEnd') === true) ? props.startEnd (0, length) : null;
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
            (hasOwnProperty(props,'startEnd') === true) ? props.startEnd (0, maxItems) : null;
            sendIndexes(0, maxItems, length, indexes);
        } else {    // Not past the beginning of the data
            setStart (index);
            setEnd (index + maxItems);
            (hasOwnProperty(props,'startEnd') === true) ? props.startEnd (index, index + maxItems) : null;    // Add max items to get the new current end
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
            (hasOwnProperty(props,'startEnd') === true) ? props.startEnd (begin, length) : null;
            sendIndexes(begin, length, length, indexes);
        } else {    // Not at the end of the data
            setStart (begin);
            setEnd (index + maxItems);
            (hasOwnProperty(props,'startEnd') === true) ? props.startEnd (begin, index + maxItems) : null;    // Increment to the next max items
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
            (hasOwnProperty(props,'startEnd') === true) ? props.startEnd (0, length) : null;
            sendIndexes(0, length, length, indexes);
        } else {    // Not at the end of the data
            setStart (length - maxItems);
            setEnd (length);
            (hasOwnProperty(props,'startEnd') === true) ? props.startEnd(length - maxItems, length) : null;
            sendIndexes(length - maxItems, length, length, indexes);
        }

        setDisable(length, length);
    }
}