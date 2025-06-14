/* eslint-disable react-hooks/exhaustive-deps */
/* eslint react/prop-types: 0 */

// cSpell:ignore Funct hdrs occrred noupper nolower nodigit SRCHITEM SRCHHDR PDFORIENT searclall Vals filterdaterange showall intialize searchall nofilter
// cSpell:ignore noheaderborder  nofooterborder notop noprevious nonext nobottom checkedsymbol nosearch throught Offical nofooter norows nodisplay cbtitles
// cSpell:ignore cbhead sfbottom showtable backgrd DDTHH nosort comparision paginantion cbtable cbrow cbfoot blenk startingpos contorl wiht condsidering inorder
// cSpell:ignore nohidden nocontrolbreak searchstart nocontsearch represents mathfooter inidicates noaggregation

import React, { Fragment, useState, useEffect } from 'react';
import { css } from "@emotion/react";
import FadeLoader from "react-spinners/FadeLoader";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { CSVLink } from 'react-csv';

import '../src/sw-table.css';

import { CheckBox, Choice, isInvalid, setInvalidScreen, generateInvalid,
    processInvalidStyleScreen, wasClickedScreen, AlertModal, ChoiceText,
    generateCSSButton, currentDate, convertDate, formatMoney, hasOwnProperty,
    dateTime
} from './index.js'

import funnel from './funnel-filter-svgrepo-com.svg';

pdfMake.vfs = pdfFonts.vfs;

const upper = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
const lower = [...'abcdefghijklmnopqrstuvwxyz'];
const digit = [...'0123456789'];

const REGULAR_ALIGN = 0;
const CONTROL_BREAK_ALIGN = 1;
const FINAL_TOTALS_ALIGN = 2;
const PDF_ALIGN = 3;
const DEFAULT_ALIGN = 'sw-sst_center';
const DEFAULT_ALIGN_PDF = 'cellCenter';


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

    return {header, name, search: true, sort: true,
            dropDown: false, /*pdfCol: 'left',*/ drag: false,
            align: 'sw-sst_center', headerAlign: 'sw-sst_center' }
}

// ----------------------------------------------------------------------------
const genDefaultColHeaders = (rowZero, hiddenLookupColumns) => {

    if (!rowZero)
       return null

    let hdrs = Object.keys(rowZero).map( col => genHdr(col) )

    hiddenLookupColumns.forEach(index => hdrs.splice(index, 1))    // mutates hdrs

    return hdrs
}

/******************************************************************************************************
 *
 * This will either return a class name or a PDF based on the align or pdfCol on the table, control
 * break, final totals, or pdfCol (in table).
 *
 * Parameters:
 * 1.   align = indicates the alignment on a the align or pdfCol fields on the table, control break
 *      array, final totals, or pdfCol.
 * 2.   isPDF = indicates that a PDF is being generated, which has different alignment values.
 *
 ******************************************************************************************************/
export function getAlignment (align, isPDF = false) {
    if (align === '' || align === null || align === undefined) {
        return 'sw-sst_center';
    }

    switch (align) {
        case 'left':                return (isPDF === true) ? 'cellLeft'        : 'sw-sst_left';
        case 'leftbold':            return (isPDF === true) ? 'cellLeftBold'    : 'sw-sst_left_bold';
        case 'center':              return (isPDF === true) ? 'cellCenter'      : 'sw-sst_center';
        case 'centerbold':          return (isPDF === true) ? 'cellCenterBold'  : 'sw-sst_center_bold';
        case 'right':               return (isPDF === true) ? 'cellRight'       : 'sw-sst_right';
        case 'rightbold':           return (isPDF === true) ? 'cellRightBold'   : 'sw-sst_right_bold';
        case 'number':              return (isPDF === true) ? 'cellRight'       : 'sw-sst_right';
        case 'numberbold':          return (isPDF === true) ? 'cellRightBold'   : 'sw-sst_right_bold';
        case 'moneyleft':           return (isPDF === true) ? 'cellLeft'        : 'sw-sst_left';
        case 'moneyleftbold':       return (isPDF === true) ? 'cellLeftBold'    : 'sw-sst_left_bold';
        case 'moneycenter':         return (isPDF === true) ? 'cellCenter'      : 'sw-sst_center';
        case 'moneycenterbold':     return (isPDF === true) ? 'cellCenterBold'  : 'sw-sst_center_bold';
        case 'money':               return (isPDF === true) ? 'cellRight'       : 'sw-sst_right';
        case 'moneybold':           return (isPDF === true) ? 'cellRightBold'   : 'sw-sst_right_bold';
        case 'datetimeleft':        return (isPDF === true) ? 'cellLeft'        : 'sw-sst_left';
        case 'datetimeleftbold':    return (isPDF === true) ? 'cellLeftBold'    : 'sw-sst_left_bold';
        case 'datetime':            return (isPDF === true) ? 'cellCenter'      : 'sw-sst_center';
        case 'datetimebold':        return (isPDF === true) ? 'cellCenterBold'  : 'sw-sst_center_bold';
        case 'datertimeight':       return (isPDF === true) ? 'cellRight'       : 'sw-sst_right';
        case 'datetimerightbold':   return (isPDF === true) ? 'cellRightBold'   : 'sw-sst_right_bold';
        case 'dateleft':            return (isPDF === true) ? 'cellLeft'        : 'sw-sst_left';
        case 'dateleftbold':        return (isPDF === true) ? 'cellLeftBold'    : 'sw-sst_left_bold';
        case 'date':                return (isPDF === true) ? 'cellCenter'      : 'sw-sst_center';
        case 'datebold':            return (isPDF === true) ? 'cellCenterBold'  : 'sw-sst_center_bold';
        case 'dateright':           return (isPDF === true) ? 'cellRight'       : 'sw-sst_right';
        case 'daterightbold':       return (isPDF === true) ? 'cellRightBold'   : 'sw-sst_right_bold';
        default:                    return (isPDF === true) ? DEFAULT_ALIGN_PDF : align;
    }
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

    // Set the number of the SearchSort table to the value in the props for numbe
    let number = 0;
    if (hasOwnProperty(propsPassed, 'number') === true) {
        number = propsPassed.number;
    }

    const defaultEachRowInTable = (row, i) => {

        let cols = null      // if no data yet
        if (row) {
            const keys = Object.keys(row)
            const hideCols = new Array(keys.length).fill(null);
            hiddenLookupColumns.forEach(i => hideCols[i] = true)

            let tableKey = `cols_${number}_${i}}`;

            cols = keys.map( (idx, j) => ( <td hidden={hideCols[idx]} key={tableKey}>{row[idx]}</td> ) )
        }

        const odd = (i % 2) ? 'sw-sst_oddRow' : 'sw-sst_evenRow'

        return (<tr className={odd} key={`tblank1_${number}_${i}`}>{cols}</tr>)
    }


    if (!propsPassed.data || !Array.isArray(propsPassed.data)) {
        console.error('Search Sort Table component: props.data is missing/null or not an Array:', propsPassed.data);
        return <><hr /></>
    }

    if (hasOwnProperty(propsPassed,'data') === false) {
        console.error('Search Sort Table component: A data prop must be passed');
        return (<span></span>);
    }

    const defaultColHeaders = () => { return genDefaultColHeaders(propsPassed.data[0], hiddenLookupColumns) }

    let defaultProps = {                           // Default props if non are given
      error: false,                                  // Indicates that an error has occrred
      MAX_ITEMS: 100,                                // Maximum items on a page
      eachRowInTable: defaultEachRowInTable,         // The default each row in table function
      table: defaultColHeaders()                     // if no table def passed in as a prop, setup a default
    }

    const props = Object.assign(defaultProps, propsPassed);

    if (hasOwnProperty(props,'table') === false) {                         // CAN NOT HAPPEN, see defaultProps
        console.error('Search Sort Table component: A table object prop must be passed');
        return (<span></span>);
    }

    if (hasOwnProperty(props, 'table') === true && hasOwnProperty(props, 'footer') === true) {
        if (props.table.length !== props.footer.length) {
            console.error('The table and footer must have the same number of elements.');
            return (<span></span>);
        }
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
const _InnerSearchSortTable = (propsPassed) => {
    const propKeys = Object.keys(propsPassed);
    let props = {};
    for (let i = 0; i < propKeys.length; i++) {
        props[propKeys[i]] = propsPassed[propKeys[i]]
    }

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

    // How the page is oriented for the PDF
    const pdfOrientValues = (hasOwnProperty(props, 'pdfcard') === true) ?
        ['', 'Portrait', 'Landscape', 'Card', 'Card per Page'] :
        ['', 'Portrait', 'Landscape'];

    let searchValue = (hasOwnProperty(props, 'searchall') === true) ? 'All' : '';

    /******************************************************************************************
     *
     * This will fill in any missing values in the table props.
     *
     * Parameters:
     * 1.   table - the table to add missing parameters to.
     *
     *****************************************************************************************/
    const fillMissingValsInTable = (table) => {
        let localTable = [...table];
        for (let i = 0; i < localTable.length; i++) {
            if (hasOwnProperty(localTable[i], 'align') === false) {
                localTable[i]['align'] = 'sw-sst_center';
            }

            if (hasOwnProperty(localTable[i], 'headerAlign') === false) {
                localTable[i]['headerAlign'] = 'sw-sst_center_bold';
            }

//            if (hasOwnProperty(localTable[i], 'pdfCol') === false) {
//                localTable[i]['pdfCol'] = 'left';
//            }

            if (hasOwnProperty(localTable[i], 'drag') === false) {
                localTable[i]['drag'] = false;
            }

            if (hasOwnProperty(localTable[i], 'dropDown') === false) {
                localTable[i]['dropDown'] = false;
            }

            if (hasOwnProperty(localTable[i], 'filterdaterange') === false) {
                localTable[i]['filterdaterange'] = false;
            }
        }

        return localTable;
    }

    let initTable = fillMissingValsInTable(props.table);

    const localUserFooter = (hasOwnProperty(props, 'footer') === true) ? props.footer : [];
    const localFinalTotals = (hasOwnProperty(props, 'finaltotals') === true) ? props.finaltotals : [];

    let cellBorder = "sw-sst_body_full ";
    if (hasOwnProperty(props, 'noborders') === true) {
        cellBorder = "";
    } else if (hasOwnProperty(props, 'cellBorder') === true) {
        if (props.cellBorder === 'none') {
            cellBorder = "";
        } else if (props.cellBorder === 'full') {
            cellBorder = "sw-sst_body_full ";
        } else if (props.cellBorder === 'row') {
            cellBorder = "sw-sst_body_row ";
        } else if (props.cellBorder === 'col') {
            cellBorder = "sw-sst_body_col ";
        }
    }

    let rowStyle = "sw-sst_stripe";
    if (hasOwnProperty(props, 'rowStyle') === true) {
        if (props.rowStyle === 'none') {
            rowStyle="";
        } else if (props.rowStyle === 'stripe') {
            rowStyle = "sw-sst_stripe";
        }
    }

    let tableBorder = "sw-sst_table";
    if (hasOwnProperty(props, 'noborders') === true ||
        hasOwnProperty(props, 'noTableBorder') === true) {
            tableBorder = "sw-sst_table2";
    }

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
    const [filterFound, setFilterFound] = useState(false);              // Indicates whether filtered items were found when the filter button was pressed
    const [invalid, setInvalid] = useState(invalidArray);               // Indicates which fields are invalid and which ones are not
    const [alertMessage, setAlertMessage] = useState('');               // The message for the alert modal
    const [showAlert, setShowAlert] = useState(false);                  // Indicates whether the alert modal should be displayed or not
    const [indexes, setIndexes] = useState([...startIndexes]);          // Indicates the order in which the data should be displayed (the data remains in the original order)
    const [copyIndex, setCopyIndex] = useState([...startIndexes]);      // This is a copy of the index in order to put it back into its original order
    const [length, setLength] = useState(props.data.length);            // The length of the data
    const [background, setBackground] = useState(initialBackground);    // Background color for the letters prop
    const [table, setTable] = useState(initTable);                      // Contains information about how to display the table
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
    const [dragOver, setDragOver] = useState('');                       // TODO: dragOver is never used, change to _dragOver if intentionally needed
    const [userFooter, setUserFooter] = useState(localUserFooter);      // Contains the users footer that is passed down through the footer prop
    const [originalTable] = useState(props.table);                      // Contains the original table before any dragging took place
    const [finalTotals, setFinalTotals] = useState([]);                 // Contains the final totals for certain fields in the table
    const [finalTotalsInfo, setFinalTotalsInfo] = useState(localFinalTotals);   // Contains the final totals info, like any title for the final total and which fields get the final totals
//    const [done, setDone] = useState(false);
    const [origControlBreakInfo, setOrigControlBreakInfo] = useState([]);
    const [origFinalTotals, setOrigFinalTotals] = useState([]);
    const [displayAll, setDisplayAll] = useState('N')

    // TODO: Ask Jim  hideCols is never used

    // const [indexSet, setIndexSet] = useState([[...startIndexes]]);
    // const [origIndexes, setOrigIndexes] = useState([...startIndexes]);
    const origIndexes = [...startIndexes];  // The original set of indexes that is used when the sort order is neither or control breaks are removed

    let previousRow = null;

    const setTableTD = (obj, i) => {
        let row = obj.row;
        let col = obj.col;
        if (hasOwnProperty(col, 'norepeat') === true && col.norepeat === true) {
            if (previousRow !== null && row[col.name] === previousRow[col.name]) {
                if (row[col.name] === table[table.length - 1][col.name]) {
                    previousRow = row;
                }
                return <span></span>;
            }
        }

        if (row[col.name] === table[table.length - 1][col.name]) {
            previousRow = row;
        }

        if (hasOwnProperty(props, 'tableTD') === true &&
            hasOwnProperty(props, 'firstTD') === true) {
                return props.tableTD(obj, i);
        } else if (col.align.indexOf('money') !== -1) {
            return formatMoney(row[col.name]);
        } else if (col.align.indexOf('datetime') !==  -1) {
            return dateTime(row[col.name]);
        } else if (col.align.indexOf('date') !==  -1) {
            return convertDate(row[col.name]);
        } else if (hasOwnProperty(col, 'decimal') === true) {
            return row[col.name].toFixed(col.decimal);
        } else if (hasOwnProperty(props, 'tableTD') === true &&
                   hasOwnProperty(props, 'firstTD') === false) {
            return props.tableTD(obj, i);
        } else {
            return row[col.name];
        }
    }

    const defaultEachRowInTable2 = (row, index) => {
        if (controlBreakInfo.length !== 0) {
            return (
                <tr key={`eachRowInTableRow_${props.number}_${index}`} className={rowStyle} >
                    {table.map((col, idx) => (
                        <td key={`${col.header}_${props.number}_${idx}_${index}`}
                                    className={cellBorder + getAlignment(col.align)}
                                    hidden={controlBreakInfo[idx].hidden} >
                            { [{row, col}].map((obj) => setTableTD(obj, index /*, idx */)) }
                        </td>
                    ))}
                </tr>
            )
        } else {
            return <tr></tr>
        }
    }

    const defaultEachRowInTableTransfer = (row, index) => {
        if (controlBreakInfo.length !== 0) {

            return (
                <tr key={`eachRowInTableRow_${props.number}_${index}`} className={rowStyle}
                        onClick={() => props.transfer(row)}>
                    {table.map((col, idx) => (
                        <td key={`${col.header}_${props.number}_${idx}_${index}`}
                                    className={cellBorder + getAlignment(col.align)}
                                    hidden={controlBreakInfo[idx].hidden} >
                            { [{row, col}].map((obj, i) => setTableTD(obj, index /*, idx */)) }
                        </td>
                    ))}
                </tr>
            )
        } else {
            return <tr></tr>
        }
    }

    if (props.eachRowInTable === 'default') {
        props.eachRowInTable = defaultEachRowInTable2;
    } else if (props.eachRowInTable === 'defaultTransfer') {
        props.eachRowInTable = defaultEachRowInTableTransfer;
    }

    const userCtrlBreak = (table) => {
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

        return isUserCtrlBreak;
    }

    /*************************************************************************************************************
     *
     * This will set up controlBreakInfo array, which contains whether the column in the table is hidden or is a
     * control break
     *
     **************************************************************************************************************/
    function populateDropDown (table, indexes) {
        let isUserCtrlBreak = userCtrlBreak(table);

        if (hasOwnProperty(props, 'finaltotals') === true) {
            if (props.finaltotals.length !== table.length) {
                console.log ('SearchSortTable: final totals array must be the same size as the table array');
                console.log ('SearchSortTable: final totals may not work correctly');
            }
        }

        if (isUserCtrlBreak === true) {
            setControlBreakInfo (props.controlBreak);
            setOrigControlBreakInfo(props.controlBreak);
            if (hasOwnProperty(props, 'finaltotals') === true) {
                setOrigFinalTotals(props.finaltotals);
            }
            findCtrlBreak(props.controlBreak, indexes);
//            if (done === false) {
//                setDone(findCtrlBreak(props.controlBreak, indexes));
//            }
            hideTheColumns(props.controlBreak);
        } else {
            let ctrlBreakAry = [];  // The control break info array
            for (let i = 0; i < table.length; i++) {
                ctrlBreakAry.push ({hidden: false, ctrlBreak: 0 });
            }

            setControlBreakInfo(ctrlBreakAry);
            setOrigControlBreakInfo(ctrlBreakAry)
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

        if (row.filterdaterange === true) { // The dates should have range options
            values = [
                'Last 10 Years',
                'Last 7 Years',
                'Last 5 Years',
                'Last 2 Years',
                'Last Year',
                'Last Month',
                'Last Week',
                'Last 2 Days',
                'Last Day',
                'Last 12 Hours',
                'Last 2 Hours',
                'Last Hour',
                'Next Hour',
                'Next 2 Hours',
                'Next 12 Hours',
                'Next Day',
                'Next 2 Days',
                'Next Week',
                'Next Month',
                'Next Year',
                'Next 2 Years',
                'Next 5 Years',
                'Next 7 Years',
                'Next 10 Years',
            ];
        } else {
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
        }

        localCols[i] = values;  // Place each choice box value in the localCols array
    }

    /*******************************************************************************************************
     *
     * This will reset the indexes back to the original indexes.
     *
     ********************************************************************************************************/
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
      let localTable = fillMissingValsInTable(props.table);
//      console.log('SearchSortTable useEffect [] ');
      populateSearch(localTable);
      localTable.forEach(buildChoices);
      setColumns(localCols);
      setFinalTotals(buildFinalFooters())
      populateDropDown(props.table, indexes);
    }, []);

    // ---------
    useEffect (() => {
//        console.log('SearchSortTable useEffect [] props.table:', props.table);
        let localTable = fillMissingValsInTable(props.table);

        setTable(localTable);
        populateSearch(localTable);
        localTable.forEach(buildChoices);
        setColumns(localCols);
        setFinalTotals(buildFinalFooters())
        populateDropDown(props.table, indexes);
    }, [props.table]);

    // ---------
    useEffect (() => {
//        console.log('SearchSortTable useEffect [props.data]', props.data, ' props.table:', props.table, 'table:', table);

        if (!props.table && !table) {        // No table def passed in as a prop, setup a default
            let tableDef = props.defaultColHeaders()
            setTable(tableDef)
            populateSearch(tableDef)
            tableDef.forEach(buildChoices);
            setColumns(localCols);
            setFinalTotals(buildFinalFooters())
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
        if (hasOwnProperty(props, 'controlBreak') === false) {
            populateDropDown(props.table, indexes);
            setFinalTotals(buildFinalFooters())
        }
    }, [props.data.length, props.resetIndexes, maximum, maxItems])


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

    // Set the number of the SearchSort table to the value in the props for numbe
    let number = 0;
    if (hasOwnProperty(props, 'number') === true) {
        number = props.number;
    }

    let mathDecimal = 2;    // Number right of the decimal for the aggregate functions
    if (hasOwnProperty(props, 'mathDecimal') === true) {
        mathDecimal = parseInt(props.mathDecimal);
    }

    let mathIgnoreCase = false; // Ignore the case when counting, minimum, maximum, and median
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

        // If searchall is in the props, set the initial search item to All
        if (hasOwnProperty(props, 'searchall') === true) {
            search[0] = 'All';
        }

        if (!table) {   // No table
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
        let start = props.MAX_ITEMS - 30;

        if (start < 5 || (start % 5) !== 0) {
            start = 5;
        }
        for (let count = start; count <= 100; count += 5) {
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

    let heightWidthStyle = {};  // Set the and width of the SearchSortTable
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
    } else if (filterPressed === true && filterFound === true) {
        filterBackground = 'sw-sst_imageStyleFilter';
    } else {
        filterBackground = 'sw-sst_imageStyleNormal';
    }

    let headerStyle = 'sw-sst_headerStyle';
    if (hasOwnProperty(props, 'noborders') === true ||
        hasOwnProperty(props, 'noHeaderBorder') === true ||
        hasOwnProperty(props, 'noh0eaderborder') === true) {
            headerStyle = 'sw-sst_headerStyle2';
    }

    let footerStyle = 'sw-sst_footerStyle';
    if (hasOwnProperty(props, 'noborders') === true ||
        hasOwnProperty(props, 'noFooterBorder') === true ||
        hasOwnProperty(props, 'nofooterborder') === true) {
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

        let key = `letters_${number}}`;
        letterDigit.push('^');
        letters = <span key={key}><br />{letterDigit.map(alphabet)}<br /><br /></span>
    }

    // This configures the SearchSortTable based on the props
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
    if (hasOwnProperty(props,'title') === true) {   // Set the size of the title based on the title and titleSize props
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
        } else {    // Default title size
            title = <h3 className="sw-sst_titleStyle">{props.title}</h3>
        }
    }

    // Renders certain sections on the screen

    const filterSection = (hasOwnProperty(props,'nofilter') === true || props.nofilter === true) ? null :
        (<>
            <CheckBox selectedValue="Y" name="filterOn"
                text="&nbsp;Filter On" value={filterOn}
                checkedsymbol="green" className="sw-sst_checkbox_bold"
                onChange={(event) => processFilterOn(event.target.value)} />
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
            <span>
                <CheckBox name="displayAll" value={displayAll} className="sw-sst_left_bold"
                          onChange={(event) => setDisplayAll(event.target.value)}
                          text="&nbsp;Display All" selectedValue="Y" checkedsymbol="blue" />
            </span>
            <button name="searchButtonName" className={genButtonStyle} onClick={() => searchItemButton()} disabled={props.error}>Search</button>
        </>)

    /*****************************************************************************************************************
     *
     * Constants for the PDFs
     *
     ****************************************************************************************************************/

    const PDF_TABLE_HEAD = 'cellLeft';
    const PDF_TABLE_VALUE = 'cellLeft';
    const PDF_PORTRAIT_POINTS = 571;
    const PDF_LANDSCAPE_POINTS = 717;

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

        let subTitle1 = '';
        if (hasOwnProperty(props, 'reportSub1') === true) {
            subTitle1 = props.reportSub1;
        }

        let subTitle2 = '';
        if (hasOwnProperty(props, 'reportSub2') === true) {
            subTitle2 = props.reportSub2;
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
                    fontSize: 20,
                    bold: true,
                    alignment: 'center',
//                    margin: [0, 3, 0, 0]
                },
                header2: {
                    fontSize: 14,
                    bold: true,
                    alignment: 'center',
                },
                cellLeft: {
                    alignment: 'left',
                },
                cellLeftBold: {
                    alignment: 'left',
                    fontSize: 12,
                    bold: true,
                },
                cellCenter: {
                    alignment: 'center'
                },
                cellCenterBold: {
                    alignment: 'center',
                    fontSize: 12,
                    bold: true,
                },
                cellRight: {
                    alignment: 'right',
                },
                cellRightBold: {
                    alignment: 'right',
                    fontSize: 12,
                    bold: true,
                },
            }
        };

        docDefinition.header = {    // Build the header and footer
            stack: [
                {columns: [
                    { text: 'Report Date: ' +  currentDate(), alignment: 'right', margin: [0, 5, 5, 0]},
                ]},
                { text: title, style: 'header1' },
                { text: subTitle1, style: 'header2' },
                { text: subTitle2, style: 'header2' },
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

            let tableSST =  // Builds the body of the table
            {
                columns: [  // Used to center the table on the screen
                    { width: '*', text: '' },
                    { width: 'auto',
                      table: {  // Build the table
                        dontBreakRows: true,
                        headerRows: 1,  // 1 row of headers
                        widths: widths,

                        body: [ // Build the table header
                            headers,
                        ]
                    }},
                    { width: '*', text: '' },
                ]
            }

            docDefinition.content.push(tableSST);

            // Print out a row in the table
            for (let i = 0; i < indexes.length; i++) {
                let text = [];
                for (let j = 0; j < table.length; j++) {    // Process a column in the table
                    if (controlBreakInfo[j].hidden === false) {
                        const [align, originalAlign] = determineAlignment(j, REGULAR_ALIGN, true);
                        // Determine the format of the cell
                        if (originalAlign.indexOf('money') !== -1) {
                            text.push({ text: formatMoney(props.data[indexes[i]][table[j].name]), style: align });
                        } else if (originalAlign.indexOf('date') !== -1 ||
                                   hasOwnProperty(table[j], 'dataDate') === true ||
                                   hasOwnProperty(table[j], 'filterDate') === true ||
                                   hasOwnProperty(table[j], 'searchDate') === true ||
                                   hasOwnProperty(table[j], 'sortDate') === true) {
                            text.push({ text: convertDate(props.data[indexes[i]][table[j].name]), style: align });
                        } else {
                            text.push({ text: props.data[indexes[i]][table[j].name], style: align });
                        }
                    }
                }

                docDefinition.content[0].columns[1].table.body.push(text);
            }

            // Process the aggregate footers
            let foundFooter = false;    // Indicates that a footer for that column was found
            let text = [];              // The text for the footers
            for (let i = 0; i < footers.length; i++) {
                if (footers[i].length > 0) {
                    const [align, originalAlign] = determineAlignment(i, FINAL_TOTALS_ALIGN, true);
                    let value = ''; // Build the footer
                    for (let j = 0; j < footers[i].length; j++) {
                        value += footers[i][j] + '\n';
                    }
                    text.push({ text: value, style: align });
                    foundFooter = true;
                } else {
                    text.push ({ text: ' ', style: 'cellCenter' });
                }
            }

            if (foundFooter === true) { // A footer was found, so display it
                docDefinition.content[0].columns[1].table.body.push(text);
            }

            // Process the user footers
            text = [];
            foundFooter = false;
            for (let i = 0; i < userFooter.length; i++) {
                if (controlBreakInfo[i].hidden === false) {
                    const [align, originalAlign] = determineAlignment(i, FINAL_TOTALS_ALIGN, true);
                    text.push({ text: userFooter[i], style: align })
                    foundFooter = true;
                }
            }

            if (foundFooter === true) { // Place the footer in the column for the table
                docDefinition.content[0].columns[1].table.body.push(text);
            }

            // Process the final total footers
            text = [];
            foundFooter = false;
            for (let i = 0; i < finalTotals.length; i++) {
                if (controlBreakInfo[i].hidden === false) {
                    const [align, originalAlign] = determineAlignment(i, FINAL_TOTALS_ALIGN, true);
                    text.push({ text: finalTotals[i], style: align})
                    foundFooter = true;
                }
            }

            if (foundFooter === true) { // Place the footer in the column for the table
                docDefinition.content[0].columns[1].table.body.push(text);
            }

            pdfMake.createPdf(docDefinition).open();    // Build the PDF
        }
    }

    /*****************************************************************************************************************
     *
     * This will display the PDF with the regular data that is in the search sort table.
     *
     ******************************************************************************************************************/
    function pdfRegCardFormat(perPage) {
        let title = 'PDF Report';
        if (hasOwnProperty(props, 'title') === true) {
            title = props.title;
        } else if (hasOwnProperty(props, 'report') === true) {
            title = props.report;
        }

        let subTitle1 = '';
        if (hasOwnProperty(props, 'reportSub1') === true) {
            subTitle1 = props.reportSub1
        }

        let subTitle2 = '';
        if (hasOwnProperty(props, 'reportSub2') === true) {
            subTitle2 = props.reportSub2
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
                    fontSize: 20,
                    bold: true,
                    alignment: 'center',
//                    margin: [0, 3, 0, 0]
                },
                header2: {
                    fontSize: 14,
                    bold: true,
                    alignment: 'center',
                },
                cellLeft: {
                    alignment: 'left',
                },
                cellLeftBold: {
                    alignment: 'left',
                    fontSize: 12,
                    bold: true,
                },
                cellCenter: {
                    alignment: 'center'
                },
                cellCenterBold: {
                    alignment: 'center',
                    fontSize: 12,
                    bold: true,
                },
                cellRight: {
                    alignment: 'right',
                },
                cellRightBold: {
                    alignment: 'right',
                    fontSize: 12,
                    bold: true,
                },
            }
        };

        docDefinition.header = {    // Build the header and footer
            stack: [
                {columns: [
                    { text: 'Report Date: ' +  currentDate(), alignment: 'right', margin: [0, 5, 5, 0]},
                ]},
                { text: title, style: 'header1' },
                { text: subTitle1, style: 'header2' },
                { text: subTitle2, style: 'header2' },
            ]
        };
        docDefinition.footer = { text: 'For Official Use Only', alignment: 'center' };

        // Place the page number at the bottom of each page

        docDefinition.footer = function(currentPage, pageCount) { return {text: 'Page: ' + currentPage.toString() + ' of ' + pageCount + '   For Official Use Only', alignment: 'center'} };

        if (props.data.length > 0) {
            let tableSST =  // Builds the body of the table
            {
                columns: [  // Used to center the table on the screen
                    { width: '*', text: '' },
                    { width: 'auto',
                      table: {  // Build the table
                        widths: [161, 375],

                        body: [ // Build the table header
                        ]
                    }},
                    { width: '*', text: '' },
                ]
            }


            // Print out a row in the table
            let index = 0;
            for (let i = 0; i < indexes.length; i++) {
                docDefinition.content.push(structuredClone(tableSST));
                for (let j = 0; j < table.length; j++) {    // Process a column in the table
                    let text = [];
                    if (controlBreakInfo[j].hidden === false) {
                        text.push({text: table[j].header, style: PDF_TABLE_HEAD });

                        const [align, originalAlign] = determineAlignment(j, REGULAR_ALIGN, true);
                        // Determine the format of the cell
                        if (originalAlign.indexOf('money') !== -1) {
                            text.push({ text: formatMoney(props.data[indexes[i]][table[j].name]), style: PDF_TABLE_VALUE });
                        } else if (originalAlign.indexOf('date') !== -1 ||
                                   hasOwnProperty(table[j], 'dataDate') === true ||
                                   hasOwnProperty(table[j], 'filterDate') === true ||
                                   hasOwnProperty(table[j], 'searchDate') === true ||
                                   hasOwnProperty(table[j], 'sortDate') === true) {
                            text.push({ text: convertDate(props.data[indexes[i]][table[j].name]), style: PDF_TABLE_VALUE });
                        } else {
                            text.push({ text: props.data[indexes[i]][table[j].name], style: PDF_TABLE_VALUE });
                        }
                        docDefinition.content[index].columns[1].table.body.push(text);
                    }
                }
                index++;
                docDefinition.content.push ({ text: ' ' });
                index++;
                if (perPage === true) {
                    docDefinition.content.push ({ text: ' ', pageBreak: 'after' });
                } else {
                    docDefinition.content.push ({ text: ' ' });
                }
                index++;
            }

            if (userFooter.length > 0) {
                docDefinition.content.push(structuredClone(tableSST));
            }

            // Process the user footers
            for (let i = 0; i < userFooter.length; i++) {
                let text = [];
                if (controlBreakInfo[i].hidden === false) {
                    text.push({text: table[i].header, style: PDF_TABLE_HEAD });

                    const [align, originalAlign] = determineAlignment(i, FINAL_TOTALS_ALIGN, true);
                    text.push({ text: userFooter[i], style: PDF_TABLE_VALUE })
                    docDefinition.content[index].columns[1].table.body.push(text);
                }
            }

            if (userFooter.length > 0) {
                index++;
                docDefinition.content.push ({ text: ' ' });
                index++;
                if (perPage === true) {
                    docDefinition.content.push ({ text: ' ', pageBreak: 'after' });
                } else {
                    docDefinition.content.push ({ text: ' ' });
                }
                index++;
            }

            if (finalTotals.length > 0) {
                docDefinition.content.push(structuredClone(tableSST));
            }

            // Process the final total footers
            for (let i = 0; i < finalTotals.length; i++) {
                let text = [];
                if (controlBreakInfo[i].hidden === false) {
                    text.push({text: table[i].header, style: PDF_TABLE_HEAD });

                    const [align, originalAlign] = determineAlignment(i, FINAL_TOTALS_ALIGN, true);
                    text.push({ text: finalTotals[i], style: PDF_TABLE_VALUE})
                    docDefinition.content[index].columns[1].table.body.push(text);
                }
            }

            pdfMake.createPdf(docDefinition).open();    // Build the PDF
        }
    }

    /****************************************************************************************************
     *
     * This will determine how the value will be aligned in the cell.
     *
     * If the regular align, does have an alignment for the column, it will be used; otherwise, it
     * defaults to center.
     *
     * If there is a control break, this alignment for the column will be used.  If there was a previous
     * alignment it will be disgarded.  If there is not a control break alignment for the column, it will
     * keep any previous alignments.
     *
     * If there are final totals, this alignment for the column will be used.  If there was a previous
     * alignment it will be disgarded.  If there is not a final controls alignment for the column, it will
     * keep any previous alignments.
     *
     * If there are pdfCol alignments, this alignment for the column will be used.  If there was a previous
     * alignment it will be disgarded.  If there is not a pdfCol alignment for the column, it will
     * keep any previous alignments.
     *
     * There is basically a cascading effect.  For example if there is a PDF.  It would first check to see
     * if there are any alignments at the table level.  If there use that alignment; otherwise, use the
     * default of center.  If there are any control break alignments for a column.  If there are use that
     * alignment and disregard the previous one for that column.  If there are any final totals alignments
     * for that column.  If there are use that aligment and disregard the previous one for that column.  If
     * there are any PDF alignments for a column.  If there are any PDF alignments for that column.  If
     * there are use that aligment and disregard the previous one for that column.
     *
     * Parameters:
     * 1.   index = the index of the column in either the table, control break, final totals, and
     *      PDF aligns or pdfCol.
     * 2.   type = the type of alignment sought.  The values can be REGULAR_ALIGN, CONTROL_BREAK_ALIGN,
     *      FINAL_TOTALS_ALIGN, or PDF_ALIGN.
     * 3.   isPDF = indicates that a PDF is being generated, which has different alignment values.
     *
     ********************************************************************************************************/
    function determineAlignment (index, type, isPDF) {
        let tempControlBreak = null;
        if (hasOwnProperty(props, 'controlBreak') === true && controlBreakInfo.length === 0) {
            tempControlBreak = props.controlBreak;
        } else {
            tempControlBreak = controlBreakInfo;
        }

        let tempFinalTotals = null;
        if (hasOwnProperty(props, 'finaltotals') === true && finalTotalsInfo.length === 0) {
            tempFinalTotals = props.finaltotals;
        } else {
            tempFinalTotals = finalTotalsInfo;
        }

        let align = (isPDF === true) ? DEFAULT_ALIGN_PDF : DEFAULT_ALIGN;           // The current alignment for the column.  Default is center.
        let originalAlign = (isPDF === true) ? DEFAULT_ALIGN_PDF : DEFAULT_ALIGN;   // The original alignment for the column.  Default is center.

        // Process the regular align
        if (type === REGULAR_ALIGN || type === CONTROL_BREAK_ALIGN ||
            type === FINAL_TOTALS_ALIGN || type === PDF_ALIGN) {
            if (hasOwnProperty(table[index], 'align') === true) {
                align = getAlignment(table[index].align, isPDF);
                originalAlign = table[index].align;
            }
        }

        // Process the control break aligns
        if (type === CONTROL_BREAK_ALIGN ||
            type === FINAL_TOTALS_ALIGN || type === PDF_ALIGN) {
            if (hasOwnProperty(props, 'controlBreak') === true &&
                hasOwnProperty(tempControlBreak[index], 'align') === true) {
                align = getAlignment(tempControlBreak[index].align, isPDF);   // Determine the alignment
                originalAlign = tempControlBreak[index].align;
            }
        }

        // Process the final totals aligns
        if (type === FINAL_TOTALS_ALIGN || type === PDF_ALIGN) {
            if (hasOwnProperty(props, 'finaltotals') === true &&
                hasOwnProperty(tempFinalTotals[index], 'align') === true) {
                align = getAlignment(tempFinalTotals[index].align, isPDF);
                originalAlign = tempFinalTotals[index].align;
            }
        }

        // Process the PDF aligns
        if (type === PDF_ALIGN && isPDF === true) {
            if (hasOwnProperty(table[index], 'pdfCol') === true) {
                align = getAlignment(table[index].pdfCol, isPDF);
                originalAlign = table[index].pdfCol;
            }
        }

        return [align, originalAlign];
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

        let subTitle1 = '';
        if (hasOwnProperty(props, 'reportSub1') === true) {
            subTitle1 = props.reportSub1;
        }

        let subTitle2 = '';
        if (hasOwnProperty(props, 'reportSub2') === true) {
            subTitle2 = props.reportSub2;
        }

        let sidePoints = PDF_PORTRAIT_POINTS;
        if (pdfOrientation === 'Landscape') {
            sidePoints = PDF_LANDSCAPE_POINTS;
        }

        let points = sidePoints / controlBreakInfo.length;

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
                    fontSize: 20,
                    bold: true,
                    alignment: 'center',
//                    margin: [0, 3, 0, 0]
                },
                header2: {
                    fontSize: 14,
                    bold: true,
                    alignment: 'center',
                },
                cellLeft: {
                    alignment: 'left',
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
                cellCenter: {
                    alignment: 'center'
                },
                cellCenterBold: {
                    alignment: 'center',
                    fontSize: 12,
                    bold: true,
                },
                cellRight: {
                    alignment: 'right',
                },
                cellRightBold: {
                    alignment: 'right',
                    fontSize: 12,
                    bold: true,
                },
            }
        };

        docDefinition.header = {    // Build the header and footer
            stack: [
                {columns: [
                    { text: 'Report Date: ' +  currentDate(), alignment: 'right', margin: [0, 5, 5, 0]},
                ]},
                { text: title, style: 'header1' },
                { text: subTitle1, style: 'header2' },
                { text: subTitle2, style: 'header2' },
            ]
        };
        docDefinition.footer = { text: 'For Official Use Only', alignment: 'center' };

        // Place the page number at the bottom of each page

        docDefinition.footer = function(currentPage, pageCount) { return {text: 'Page: ' + currentPage.toString() + ' of ' + pageCount + '   For Official Use Only', alignment: 'center'} };

        if (props.data.length > 0) {    // There is data to display
            let index = 0;  // Indicates the next position in the content array

            for (let k = 0; k < controlBreakData.length; k++) { // Spin through the control break data
                if (k !== 0) {  // If not the first control break, print out a blank line
                    docDefinition.content.push ({ text: ' ', style: 'cellCenterBoldBig' });
                    index++;
                }
                docDefinition.content.push ({ text: controlBreakData[k].title, style: 'cellCenterBoldBig' });
                index++;

                // Process the headers for the table
                let widths = [];    // The width of each of the field, will be auto
                let headers = [];   // The header for each row of the table
                for (let i = 0; i < table.length; i++) {
                    if (controlBreakInfo[i].hidden === false) {
                        headers.push({text: table[i].header, style: 'cellCenter' });
                    }
                }

                for (let i = 0; i < headers.length; i++) {
                    widths.push(points);
                }

                let tableSST =  // Main table
                {
                    columns: [
                        { width: '*', text: '' },
                        { width: 'auto',
                          table: {  // Build the table
                            headerRows: 1,  // 1 row of headers
                            widths: widths,

                            body: [ // Build the table header
                                headers,
                            ]
                        }},
                        { width: '*', text: '' },
                    ]
                }

                docDefinition.content.push(tableSST);

                for (let i = 0; i < controlBreakData[k].data.length; i++) { // Spin throught the data for each control break
                    let text = [];  // The text for each cell
                    for (let j = 0; j < table.length; j++) {
                        if (controlBreakInfo[j].hidden === false) {
                            const [align, originalAlign] = determineAlignment(j, REGULAR_ALIGN, true);
                            if (originalAlign.indexOf('date') !== -1 ||
                                hasOwnProperty(table[j], 'dataDate') === true ||
                                hasOwnProperty(table[j], 'filterDate') === true ||
                                hasOwnProperty(table[j], 'searchDate') === true ||
                                hasOwnProperty(table[j], 'sortDate') === true) {
                                text.push({ text: convertDate(controlBreakData[k].data[i][table[j].name]), style: align });
                            } else if (originalAlign.indexOf('money') !== -1) {
                                text.push({ text: formatMoney(controlBreakData[k].data[i][table[j].name]), style: align });
                            } else {
                                text.push({ text: controlBreakData[k].data[i][table[j].name], style: align });
                            }
                        }
                    }

                    docDefinition.content[index].columns[1].table.body.push(text);
                }

                // Print out the aggregrate values and the totals for each control break
                let foundFooter = false;    // Indicates that a footer was found, so place it in the PDF
                let text = [];              // The value for a footer in a column in the table
                for (let i = 0; i < controlBreakData[k].footer.length; i++) {
                    if (controlBreakData[k].footer[i].length > 0) { // There is a footer
                        let value = ''; // Value for the footer
                        for (let j = 0; j < controlBreakData[k].footer[i].length; j++) {    // Build the footer
                            value += controlBreakData[k].footer[i][j].toString() + '\n';
                        }

                        if (controlBreakInfo[i].hidden === false) {
                            const [align, originalAlign] = determineAlignment (i, CONTROL_BREAK_ALIGN, true);
                            text.push({ text: value, style: align });
                            foundFooter = true;
                        }
                    } else {    // No footer found for that column
                        text.push({ text: ' ', style: 'cellLeftBold' });
                    }
                }

                if (foundFooter === true) { // Place the footer in the column for the table
                    docDefinition.content[index].columns[1].table.body.push(text);
                }

                index++;
            }

            // Print a blank line
            docDefinition.content.push ({ text: ' ', style: 'cellCenter' });
            index++;

            // Print the header for the final totals
            if (finalTotals.length > 0) {
                let widths = [];    // The width of each of the field, will be auto
                let headers = [];   // The header for each row of the table
                for (let i = 0; i < table.length; i++) {
                    if (controlBreakInfo[i].hidden === false) {
                        headers.push({text: table[i].header, style: 'cellCenter' });
                    }
                }

                for (let i = 0; i < headers.length; i++) {
                    widths.push(points);
                }

                let tableSSTFinal = // Table for the final totals
                {
                    columns: [
                        { width: '*', text: '' },
                        { width: 'auto',
                        table: {  // Build the table
                            dontBreakRows: true,
                            headerRows: 1,  // 1 row of headers
                            widths: widths,

                            body: [ // Build the table header
                                headers,
                            ]
                        }},
                        { width: '*', text: '' },
                    ]
                }


                docDefinition.content.push(tableSSTFinal);

                // Process the final totals
                let text = [];
                let foundFooter = false;
                for (let i = 0; i < finalTotals.length; i++) {
                    if (controlBreakInfo[i].hidden === false) {
                        const [align, originalAlign] = determineAlignment(i, FINAL_TOTALS_ALIGN, true);
                        text.push({ text: finalTotals[i], style: align })
                        foundFooter = true;
                    }
                }

                if (foundFooter === true) { // Place the footer in the column for the table
                    docDefinition.content[index].columns[1].table.body.push(text);
                }
            }

            if (hasOwnProperty(props, 'footer') === true) {
                let foundFooter = false;
                let text = [];
                for (let i = 0; i < userFooter.length; i++) {
                    if (controlBreakInfo[i].hidden === false) {
                        const [align, originalAlign] = determineAlignment(i, FINAL_TOTALS_ALIGN, true);
                        text.push({ text: userFooter[i], style: align })
                        foundFooter = true;
                    }
                }

                if (foundFooter === true) { // Place the footer in the column for the table
                    docDefinition.content[index].columns[1].table.body.push(text);
                    index++;
                }
            }

            pdfMake.createPdf(docDefinition).open();    // Build the PDF
        }
    }

    /*****************************************************************************************************************
     *
     * This will display the PDF with the control break data that is in the search sort table.
     *
     ******************************************************************************************************************/
    function pdfCBCardFormat(perPage) {
        let title = 'PDF Report';
        if (hasOwnProperty(props, 'title') === true) {
            title = props.title;
        } else if (hasOwnProperty(props, 'report') === true) {
            title = props.report;
        }

        let subTitle1 = '';
        if (hasOwnProperty(props, 'reportSub1') === true) {
            subTitle1 = props.reportSub1;
        }

        let subTitle2 = '';
        if (hasOwnProperty(props, 'reportSub2') === true) {
            subTitle2 = props.reportSub2;
        }

        let docDefinition = {   // This contains the PDF report information
            info: {
                 title: title,
            },
            pageOrientation: 'Portrait',
            pageMargins: [20, 100, 20, 80],

            content: [  // The main body of the PDF
            ],
            styles: {   // Styles for the header and cell headers
                header1: {
                    fontSize: 20,
                    bold: true,
                    alignment: 'center',
//                    margin: [0, 3, 0, 0]
                },
                header2: {
                    fontSize: 14,
                    bold: true,
                    alignment: 'center',
                },
                cellLeft: {
                    alignment: 'left',
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
                cellCenter: {
                    alignment: 'center'
                },
                cellCenterBold: {
                    alignment: 'center',
                    fontSize: 12,
                    bold: true,
                },
                cellRight: {
                    alignment: 'right',
                },
                cellRightBold: {
                    alignment: 'right',
                    fontSize: 12,
                    bold: true,
                },
            }
        };

        docDefinition.header = {    // Build the header and footer
            stack: [
                {columns: [
                    { text: 'Report Date: ' +  currentDate(), alignment: 'right', margin: [0, 5, 5, 0]},
                ]},
                { text: title, style: 'header1' },
                { text: subTitle1, style: 'header2' },
                { text: subTitle2, style: 'header2' },
            ]
        };
        docDefinition.footer = { text: 'For Official Use Only', alignment: 'center' };

        // Place the page number at the bottom of each page

        docDefinition.footer = function(currentPage, pageCount) { return {text: 'Page: ' + currentPage.toString() + ' of ' + pageCount + '   For Official Use Only', alignment: 'center'} };

        if (props.data.length > 0) {    // There is data to display
            let index = 0;  // Indicates the next position in the content array

            for (let k = 0; k < controlBreakData.length; k++) { // Spin through the control break data
                if (k !== 0) {  // If not the first control break, print out a blank line
                    if (perPage === true) {
                        docDefinition.content.push ({ text: ' ', pageBreak: 'before' });
                    } else {
                        docDefinition.content.push ({ text: ' ', style: 'cellCenterBoldBig' });
                    }
                    index++;
                }
                docDefinition.content.push ({ text: controlBreakData[k].title, style: 'cellCenterBoldBig' });
                index++;

                let widths = [161, 375];

                let tableSST =  // Main table
                {
                    columns: [
                        { width: '*', text: '' },
                        { width: 'auto',
                          table: {  // Build the table
                            widths: widths,

                            body: [ // Build the table header
                            ]
                        }},
                        { width: '*', text: '' },
                    ]
                }

                docDefinition.content.push(tableSST);

                for (let i = 0; i < controlBreakData[k].data.length; i++) { // Spin throught the data for each control break
                    for (let j = 0; j < table.length; j++) {
                        if (controlBreakInfo[j].hidden === false) {
                            let text = [];  // The text for each cell
                            text.push({text: table[j].header, style: PDF_TABLE_HEAD });

                            const [align, originalAlign] = determineAlignment(j, REGULAR_ALIGN, true);
                            if (originalAlign.indexOf('date') !== -1 ||
                                hasOwnProperty(table[j], 'dataDate') === true ||
                                hasOwnProperty(table[j], 'filterDate') === true ||
                                hasOwnProperty(table[j], 'searchDate') === true ||
                                hasOwnProperty(table[j], 'sortDate') === true) {
                                text.push({ text: convertDate(controlBreakData[k].data[i][table[j].name]), style: PDF_TABLE_VALUE });
                            } else if (originalAlign.indexOf('money') !== -1) {
                                text.push({ text: formatMoney(controlBreakData[k].data[i][table[j].name]), style: PDF_TABLE_VALUE });
                            } else {
                                text.push({ text: controlBreakData[k].data[i][table[j].name], style: PDF_TABLE_VALUE });
                            }

                            if (perPage === true && j >= table.length - 1) {
                                text[1]['pageBreak'] = 'after';
                            }
                            docDefinition.content[index].columns[1].table.body.push(text);
                        }
                    }

                    if (perPage === false) {
                        let blank = [
                            { text: ' ', style: 'cellCenterBoldBig' },
                            { text: ' ', style: 'cellCenterBoldBig' }
                        ];

                        docDefinition.content[index].columns[1].table.body.push(blank);
                    }
                }

                // Print out the aggregrate values and the totals for each control break
                for (let i = 0; i < controlBreakData[k].footer.length; i++) {
                    let text = [];              // The value for a footer in a column in the table
                    if (controlBreakData[k].footer[i].length > 0) { // There is a footer
                        let value = ''; // Value for the footer
                        for (let j = 0; j < controlBreakData[k].footer[i].length; j++) {    // Build the footer
                            value += controlBreakData[k].footer[i][j].toString() + '\n';
                        }

                        if (controlBreakInfo[i].hidden === false) {
                            text.push({text: table[i].header, style: PDF_TABLE_HEAD });

                            const [align, originalAlign] = determineAlignment (i, CONTROL_BREAK_ALIGN, true);
                            text.push({ text: value, style: PDF_TABLE_VALUE });
                            docDefinition.content[index].columns[1].table.body.push(text);
                        }
                    } else {    // No footer found for that column
                        text.push({text: table[i].header, style: PDF_TABLE_HEAD });
                        text.push({ text: ' ', style: 'cellLeftBold' });
                        docDefinition.content[index].columns[1].table.body.push(text);
                    }
                }

                index++;
            }

            // Print a blank line
            if (perPage === true) {
                docDefinition.content.push ({ text: ' ', style: 'cellCenter', pageBreak: 'after'});
            } else {
                docDefinition.content.push ({ text: ' ', style: 'cellCenter', });
            }
            index++;

            // Print the header for the final totals
            if (finalTotals.length > 0) {
                let tableSSTFinal = // Table for the final totals
                {
                    columns: [
                        { width: '*', text: '' },
                        { width: 'auto',
                        table: {  // Build the table
                            headerRows: 1,  // 1 row of headers
                            widths: [161, 375],

                            body: [ // Build the table header
                            ]
                        }},
                        { width: '*', text: '' },
                    ]
                }


                docDefinition.content.push(tableSSTFinal);

                // Process the final totals
                for (let i = 0; i < finalTotals.length; i++) {
                    let text = [];
                    if (controlBreakInfo[i].hidden === false) {
                        text.push({text: table[i].header, style: PDF_TABLE_HEAD });

                        const [align, originalAlign] = determineAlignment(i, FINAL_TOTALS_ALIGN, true);
                        text.push({ text: finalTotals[i], style: PDF_TABLE_VALUE })
                        docDefinition.content[index].columns[1].table.body.push(text);
                    }
                }
            }

            if (hasOwnProperty(props, 'footer') === true) {
                let foundFooter = false;
                for (let i = 0; i < userFooter.length; i++) {
                    let text = [];
                    if (controlBreakInfo[i].hidden === false) {
                        text.push({text: table[i].header, style: PDF_TABLE_HEAD });

                        const [align, originalAlign] = determineAlignment(i, FINAL_TOTALS_ALIGN, true);
                        text.push({ text: userFooter[i], style: PDF_TABLE_VALUE })
                        docDefinition.content[index].columns[1].table.body.push(text);
                    }
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
            if (pdfOrientation === 'Card') {
                pdfCBCardFormat(false);
            } else if (pdfOrientation === 'Card per Page') {
                pdfCBCardFormat(true);
            } else {
                pdfCBButton();
            }
        } else {    // No control break
            if (pdfOrientation === 'Card') {
                pdfRegCardFormat(false);
            } else if (pdfOrientation === 'Card per Page') {
                pdfRegCardFormat(true);
            } else {
                pdfRegButton();
            }

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
        if (hasOwnProperty(props, 'reportSub1') === true) {
            exData.push([props.reportSub1]);
        }
        if (hasOwnProperty(props, 'reportSub2') === true) {
            exData.push([props.reportSub2]);
        }
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
                if (controlBreakInfo[j].hidden === false) {
                    text.push(props.data[indexes[i]][table[j].name]);
                }
            }
            exData.push(text);
        }

        // Print the user footers
        if (hasOwnProperty(props, 'footer') === true) {
            let text = [];
            for (let i = 0; i < userFooter.length; i++) {
                if (controlBreakInfo[i].hidden === false) {
                    text.push(userFooter[i]);
                }
            }
            exData.push(text);
            exData.push([' ']);
        }

        // Print the final totals
        if (hasOwnProperty(props, 'finaltotals') === true) {
            let text = [];
            for (let i = 0; i < finalTotals.length; i++) {
                if (controlBreakInfo[i].hidden === false) {
                    text.push(finalTotals[i]);
                }
            }

            exData.push(text);
            exData.push([' ']);
        }

        // Footer at the bottom of the spreadsheet
        exData.push([' ']);
        exData.push(['For Offical Use Only']);

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
        if (hasOwnProperty(props, 'reportSub1') === true) {
            exData.push([props.reportSub1]);
        }
        if (hasOwnProperty(props, 'reportSub2') === true) {
            exData.push([props.reportSub2]);
        }
        exData.push([' ']);

        // Header for the excel spreadsheet
        let header = [];
        for (let i = 0; i < table.length; i++) {
            if (controlBreakInfo[i].hidden === false) {
                header.push(table[i].header);
            }
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
                    if (controlBreakInfo[j].hidden === false) {
                        text.push(controlBreakData[k].data[i][table[j].name]);
                    }
                }
                exData.push(text);
            }

            let text = [];
            for (let j = 0; j < controlBreakData[k].footer.length; j++) {
                if (controlBreakInfo[j].hidden === false) {
                    text.push(controlBreakData[k].footer[j]);
                }
            }
            exData.push(text);
        }

        // Print the user footers
        if (hasOwnProperty(props, 'footer') === true) {
            let text = [];
            for (let i = 0; i < userFooter.length; i++) {
                if (controlBreakInfo[i].hidden === false) {
                    text.push(userFooter[i]);
                }
            }
            exData.push(text);
            exData.push([' ']);
        }

        exData.push([' ']);
        let text = [];
        for (let i = 0; i < finalTotals.length; i++) {
            if (controlBreakInfo[i].hidden === false) {
                text.push(finalTotals[i]);
            }
        }
        exData.push(text);

        // Footer at the bottom of the spreadsheet
        exData.push([' ']);
        exData.push(['For Offical Use Only']);

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

    /*******************************************************************************************
     *
     * This function will be called when the drag operation on the header begins.
     *
     * Parameters:
     * 1.   e = the drag event
     *
     *******************************************************************************************/
    const handleDragStart = e => {
        const { id } = e.target;
        const idx = table.findIndex(col => col.header === id);  // Find the index of the starting column
        e.dataTransfer.setData("colIdx", idx);  // Store the index of the starting column for the drag
    };

    const handleDragOver = e => e.preventDefault();

    /*******************************************************************************************
     *
     * This function is called when another column is entered.  It will note the id of the
     * column.
     * Parameters:
     * 1.   e = the drag event
     *
     *******************************************************************************************/
    const handleDragEnter = e => {
        const id = e.target.textContent
        if (id !== '') setDragOver(id);
    };

    /*******************************************************************************************
     *
     * This function is called when the mouse is released.  This is where most of work happens
     * for the drag.  Columns are moved at this point.
     *
     * Parameters:
     * 1.   e = the drag event
     *
     *******************************************************************************************/
    const handleOnDrop = e => {
        const id  = e.target.textContent;

        const droppedColIdx = parseInt(table.findIndex(col => col.header === id));  // Index of where the column was dropped
        const draggedColIdx = parseInt(e.dataTransfer.getData("colIdx"));                 // Index of the
        const tempCols = [...table];
        let   temp = null;

        if (droppedColIdx === -1) {
            return;
        }

        if (tempCols[droppedColIdx].drag === false) {
            return;
        }

        // Move the dragged column to its new location
        temp = tempCols[draggedColIdx];         // Make a temporary copy of the starting column
        tempCols.splice (draggedColIdx, 1);         // Remove the starting column
        tempCols.splice (droppedColIdx, 0, temp);   // Insert the column where it was dropped

        // This will move the Math footers in control breaks
//        if (controlBreakVal === true) {
            let localData = [...controlBreakData];
            for (let i = 0; i < localData.length; i++) {
                temp = localData[i].footer[draggedColIdx];          // Make a temporary copy of the starting footer
                localData[i].footer.splice (draggedColIdx, 1);          // Remove the starting footer
                localData[i].footer.splice (droppedColIdx, 0, temp);    // Insert the footer where it was dropped
            }

            setControlBreakData(localData);

            let localInfo = [...controlBreakInfo];
            temp = localInfo[draggedColIdx];         // Make a temporary copy of the starting column
            localInfo.splice (draggedColIdx, 1);         // Remove the starting column
            localInfo.splice (droppedColIdx, 0, temp);   // Insert the column where it was dropped

            setControlBreakInfo(localInfo);
//        } else {    // Math footers not in control breaks
            let localFooters = [...footers];
            temp = localFooters[draggedColIdx];         // Make a temporary copy of the Math Footer
            localFooters.splice (draggedColIdx, 1);         // Remove the starting Math footer
            localFooters.splice (droppedColIdx, 0, temp);   // Insert the Math footer where it was dropped

            setFooters(localFooters);
//        }

        // Set Final Totals
        let localTotals = null;
        if (hasOwnProperty(props, 'finaltotals') === true) {
            localTotals = [...finalTotals];
            let temp = localTotals[draggedColIdx];         // Make a temporary copy of the Math Footer
            localTotals.splice (draggedColIdx, 1);         // Remove the starting Math footer
            localTotals.splice (droppedColIdx, 0, temp);   // Insert the Math footer where it was dropped

            setFinalTotals(localTotals);

            let localInfo = [...finalTotalsInfo];
            let temp2 = localInfo[draggedColIdx];         // Make a temporary copy of the starting column
            localInfo.splice (draggedColIdx, 1);         // Remove the starting column
            localInfo.splice (droppedColIdx, 0, temp2);   // Insert the column where it was dropped

            setFinalTotalsInfo(localInfo);
        }

        // Normal user footer
        let localUserFooter = null;
        if (hasOwnProperty(props, 'footer') === true) { // There is a user footer
            localUserFooter = [...userFooter];
            temp = localUserFooter[draggedColIdx];              // Make a temporary copy of the user footer
            localUserFooter.splice (draggedColIdx, 1);          // Remove the starting user footer
            localUserFooter.splice (droppedColIdx, 0, temp);    // Insert the user footer where it was dropped
            setUserFooter(localUserFooter);
        }

        if (hasOwnProperty(props, 'setTheTable') === true) {    // Send the table for storage in
            if (hasOwnProperty(props, 'controlBreak') === true) {
                props.setTheTable(tempCols, localInfo, localTotals);                        // the parent
            } else {
                props.setTheTable(tempCols, null, localTotals);                        // the parent
            }
        }

        if (hasOwnProperty(props, 'setTheFooter') === true) {   // Send the user footer for
            props.setTheFooter(localUserFooter);                // storage in the parent
        }

        setTable(tempCols);
        setDragOver("");
    }

    // This will render the final totals for the table
    function doFinalTotals(row, i) {
        let key = `rowft_${number}_${i}`;

        if (hasOwnProperty(props, 'finaltotals') === true) {    // Make sure final totals are wanted
            if (controlBreakInfo !== undefined && controlBreakInfo.length !== 0 &&
                controlBreakInfo[i].hidden === true) {
                    const [align, originalAlign] = determineAlignment(i, FINAL_TOTALS_ALIGN, false);
                    return ( <td key={key} className={footerStyle} hidden></td> );
            } else {
                const [align, originalAlign] = determineAlignment(i, FINAL_TOTALS_ALIGN, false);
                return ( <td key={key} className={footerStyle + ' ' + align}>{row}</td> );
            }
        }
    }

    // This will display the PDF button and the Orientation choice box on the screen
    const pdfDisplay = (props.nopdf === true) ? null :
        <span>
            <button name="pdf" className={genButtonStyle} onClick={pdfButton} key={`button_${number}`}>
                PDF
            </button>
            <span className="sw-invalid_checkForError">
                <label htmlFor="pdfOrientation">Orientation: </label>
                <Choice choices={pdfOrientValues} name="pdfOrientation" value={pdfOrientation}
                    onChange={(event) => setPdfOrientation(event.target.value)}
                    onClick={() => wasClickedScreen(invalid, PDFORIENT, setInvalid)}
                    className={processInvalidStyleScreen(invalid, PDFORIENT)}
                    key={`choice_${number}`} />
                {(isInvalid(invalid[PDFORIENT], -1) === true) ?
                    <span className="sw-invalid_errMessage">{invalid[PDFORIENT].message}</span> : null }
            </span>
        </span>;

    // This will display the Excel Build and Excel Display button on the screen
    const excelDisplay = (props.noexcel === true) ? null :
        <span>
            <button name="excelBuild" className={genButtonStyle} onClick={excelBuildButton}
                    key={`button_${number}`}>
                Excel Build
            </button>
            {(showExcel === false) ? null :
                <CSVLink data={excelData} target="_blank" onClick={closeExDisplay}
                        className="sw-sst_excelButtonStyle"
                        key={`csv_${number}`}>
                    Excel Display
                </CSVLink> }
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
    let controlBreakProps = false;
    if (hasOwnProperty(props, 'controlBreak') === true) {
        controlBreakProps = isControlBreak(props.controlBreak);
    }

    let tableBuild = null;

    let cbCount = -1;
    if (controlBreakVal === true || controlBreakProps === true) { // Display control break tables
        let cbTable = `cbtitles_${number}`;
        let cbHeader = `cbhead_${number}}`;

        let finalTotalsTable = <Fragment key={`frag_2_${number}`}></Fragment>;
        if (hasOwnProperty(props, 'finaltotals') === true) {
            finalTotalsTable =
                <Fragment key={`frag_2_${number}`}>
                    <thead>
{/*                        <tr key={cbHeader2}>
                            {table.map(buildHeaders(false, 0))}
        </tr> */}
                    </thead>
                    <tbody>
                        <tr key={`tblank19_${number}`}>
                            <td key={`col3_${number}`} colSpan={table.length}>&nbsp;</td>
                        </tr>
                        <tr key={`tblank2_${number}`}>
                            {finalTotals.map(doFinalTotals)}
                        </tr>
                    </tbody>
                </Fragment>
        }

        // Build the tables for the control breaks by rendering the headers in blue at the top and
        // each control break table following
        tableBuild =    <Fragment key={`frag_3_${number}}`}>
                            <table className={tableBorder} key={cbTable}>
                                <thead>
                                    <tr key={cbHeader}>
                                        {table.map(buildHeaders(true, 0, true))}
                                    </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            </table>
                            <table key={`table1_${number}`}
                                    className={`${hoverClassName} ${tableBorder} sw-sst_final_total_margin`}>
                                {controlBreakData.map(renderCtrlBreak) }
                                { finalTotalsTable }
                            </table>
                        </Fragment>
    } else {    // Regular search sort table
        let keyTable = `table_${number}`;
        let header = `head_${number}`;
        let count = -1;

//        let finalTotals = buildFinalFooters();

        let finalTotalsRow = <tr key={`tblank3_${number}`}></tr>;
        if (hasOwnProperty(props, 'finaltotals') === true) {
            finalTotalsRow =
                <tr key={`tblank3_${number}`}>
                    {finalTotals.map(doFinalTotals)}
                </tr>
        }

        previousRow = null;
        tableBuild =    <table className={`${hoverClassName} ${tableBorder}`}
                                name={`table${number}`} key={keyTable}>
                            <thead>
                                <tr key={header} className="sw-sst_centerBoldStyle">
                                    {table.map(buildHeaders(true, 0, false))}
                                </tr>
                            </thead>
                            <tbody>
                                { showData.map((row) => {
                                    count++;
                                    return props.eachRowInTable(row, count);
                                }) }
                                { (hasOwnProperty(props,'footer') === true) ?
                                    <tr key={`tblank4_${number}`}
                                        className="footerStyle">{ userFooter.map(buildFooter) }</tr> : null }
                                <tr key={`tblank5_${number}`}>
                                    {footers.map(buildMathFooters)}
                                </tr>
                                {finalTotalsRow}
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

    let outerBorder = "sw-sst_divStyle";
    if (hasOwnProperty(props, 'noborders') === true ||
        hasOwnProperty(props, 'noOuterBorder') === true) {
        outerBorder = "sw-sst_divStyle2";
    }

    /**************************************************************************************************************************
     *
     * Render the screen
     *
     **************************************************************************************************************************/
    return (
        <div className={outerBorder} style={heightWidthStyle}>
            {title}
            <div>
                { (hasOwnProperty(props,'sfbottom') === false) ?
                    (<>
                        {filterSection}
                        {searchSection}
                        <span className="sw-sst_right_top_bot">
                            {(areDropDowns() === false && hasOwnProperty(props, 'controlBreak') === false) ?
                                null :
                                <button name="reset" className={genButtonStyle} onClick={() => resetButton()} disabled={props.error}>Reset</button>}
                        </span>
                        {allButtonHTML}
                        {letters}
                    </>) : null
                }
            </div>
            { (props.data.length === 0 && hasOwnProperty(props,'showtable') === false) ?
            <div>No Data to Display</div> :
            <div>
                <div className={tableDivStyle}>
                    {tableBuild}
                </div>
                {footer}
                <div>
                    { (hasOwnProperty(props,'sfbottom') === true) ?
                        (<>
                            {filterSection}
                            {searchSection}
                            <span className="sw-sst_right_top_bot">
                            {(areDropDowns() === false && hasOwnProperty(props, 'controlBreak') === false) ?
                                null :
                                <button name="reset" className={genButtonStyle}
                                    onClick={() => resetButton()} disabled={props.error}>
                                        Reset
                                </button>}
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
        let ctrlBreakInfo = [...origControlBreakInfo];
        let locFooters = [...footers];
        let ctrlBreakData = [...controlBreakData];

        // Remove the hidden columns and control breaks
        for (let i = 0; i < ctrlBreakInfo.length; i++) {
            ctrlBreakInfo[i].hidden = false;
            ctrlBreakInfo[i].ctrlBreak = 0;
            delete ctrlBreakInfo[i].sortOrder;
            if (hasOwnProperty(props, 'controlBreak') === true) {
                props.controlBreak[i].hidden = false;
                props.controlBreak[i].ctrlBreak = 0;
                delete props.controlBreak[i].sortOrder;
            }
        }

        for (let i = 0; i < locFooters.length; i++) {   // Remove the footers
            locFooters[i] = [];
        }
        setFooters(locFooters);

        for (let i = 0; i < ctrlBreakData.length; i++) {    // Remove the control break data
            for (let j = 0; j < ctrlBreakData[i].footer.length; j++) {
                ctrlBreakData[i].footer[j] = [];
            }
            ctrlBreakData[i].title = '';
        }

        if (hasOwnProperty(props, 'finaltotals') === true) {
            setFinalTotalsInfo([...origFinalTotals]);
        } else {
            setFinalTotalsInfo([]);
        }

        hideTheColumns(ctrlBreakInfo);

        setIndex(origIndexes);  // Set the indexes back to the original indexes
        setControlBreakInfo(ctrlBreakInfo);
        setFooters(locFooters);
        setControlBreakData(ctrlBreakData);
        setTable(originalTable);

        if (hasOwnProperty(props, 'setTheTable') === true) {
            props.setTheTable(originalTable, origControlBreakInfo, origFinalTotals);
        }
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
        findCtrlBreak(ctrlBreakInfo, indexes);
        setControlBreakInfo(ctrlBreakInfo)
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
        findCtrlBreak(ctrlBreakInfo, indexes);
        setControlBreakInfo(ctrlBreakInfo)
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
                let sortOrder = 'ASC';
                if (hasOwnProperty(ctrlBreakInfo[i], 'sortOrder') === true) {
                    sortOrder = ctrlBreakInfo[i].sortOrder.toUpperCase();
                }
                breakOrder.push ({ col: i, order: ctrlBreakInfo[i].ctrlBreak, sortOrder: sortOrder});
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



                if (breakOrder[i].sortOrder === 'DESC') {
                    // Make the comparison
                    if (a < b) {
                        return 1;
                    } else if (a > b) {
                        return -11;
                    }
                } else {
                    // Make the comparison
                    if (a < b) {
                        return -1;
                    } else if (a > b) {
                        return 1;
                    }
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

//        let keyTable = `cbtable_${number}_${i}`;              // Key for the table using the name of the control break table
        let keyHeader = `cbrow_${number}_${i}`;   // Key for the header using the control break table number
        let key = `cbfoot_${number}_${i}`;        // Key for the footer using the control break table name

        let title = row.title;
        if (row.title.endsWith('; ') === true || row.title.endsWith(', ') === true) {
            title = row.title.substring(0, row.title.length - 2);
            row.title = title;
        }


        let titleAlign = 'sw-sst_left_bold';
        let titleSize = 20;

        if (hasOwnProperty(props, 'cbtitlealignsize') === true) {
            if (props.cbtitlealignsize.indexOf(':') === -1) {
                titleAlign = props.cbtitlealignsize;
            } else {
                let alignSize = props.cbtitlealignsize.split(':');
                titleAlign = alignSize[0];
                titleSize = alignSize[1];
            }
        }

        previousRow = null;
        return (    // Render the control break
            <Fragment key={`frag_1_${number}_${i}`}>
                <thead key={`thead_${number}_${i}`}>
                    <tr key={`tblank6_${number}_${i}`}>
                        <td key={`col1_${number}_${i}`}
                            colSpan={table.length}>&nbsp;
                        </td>
                    </tr>
                    <tr key={`${keyHeader}_title`}>
                        <td key={`col2_${number}_${i}`} colSpan={table.length}
                            className={getAlignment(titleAlign) + " sw-sst_tableBold"}
                            style={{ fontSize: titleSize }}>
                                {title}
                        </td>
                    </tr>
                    <tr key={keyHeader}>
                        {table.map(buildHeaders(false, i, false))}
                    </tr>
                </thead>
                <tbody key={`tbody_${number}_${i}`}>
                    {data.map((row) => {
                        cbCount++;
                        return props.eachRowInTable(row, cbCount);
                    })}
                    <tr key={key}>
                        {(displayFooter === true) ? row.footer.map(buildMathFooters) : null}
                </tr>
                </tbody>
            </Fragment>
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

    function processTitleFormat (value) {
        switch (value) {
            case 'colon':   return ':';
            case 'comma':   return ',';
            case 'scolon':  return ';';
            case 'semi':    return ';';
            case 'slash':   return '/';
            case 'dash':    return '-';
            case 'none':    return '';
            default:        return value;
        }
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
        let seperator1 = '';
        let seperator2 = ';';
        if (hasOwnProperty(props, 'cbtitleformat') === true) {
            if (props.cbtitleformat.indexOf('~') === -1) {
                seperator1 = processTitleFormat(props.cbtitleformat);
            } else {
                let seperators = props.cbtitleformat.split('~');
                seperator1 = processTitleFormat(seperators[0]);
                seperator2 = processTitleFormat(seperators[1]);
            }
        }

        let title = '';
        for (let i = 0; i < info.srtOrder.length; i++) {
            if (hasOwnProperty(table[info.srtOrder[i].col], 'dataDate') === true ||
                hasOwnProperty(table[info.srtOrder[i].col], 'filterDate') === true ||
                hasOwnProperty(table[info.srtOrder[i].col], 'searchDate') === true ||
                hasOwnProperty(table[info.srtOrder[i].col], 'sortDate') === true) {
                    title += `${table[info.srtOrder[i].col].header}${seperator1} ${convertDate(props.data[info.indexes[k]][table[info.srtOrder[i].col].name])}${seperator2} `
            } else {
                title += `${table[info.srtOrder[i].col].header}${seperator1} ${props.data[info.indexes[k]][table[info.srtOrder[i].col].name]}${seperator2} `
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

        ctrlBreakData = buildControlBreakFooters(ctrlBreakData);

        if (hasOwnProperty(props, 'startingpos') === true) {
            props.startingPos(startingPos); // Pass the starting positions of the control break tables back to the calling program
        }
        setStartPos(startingPos);
        setControlBreakData(ctrlBreakData);

        if (ctrlBreakData.length !== 0) {
            return true;
        } else {
            return false;
        }
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
//    function determineCol (index) {
//        let pos = index;    // Current index of the aggregation column
//        for (let i = 0; i < controlBreakInfo.length && i < index; i++) {  // Loop until the end of the columns or the hidden column is reached
//            if (controlBreakInfo[i].hidden === true) {  // Check to see if the column is hidden
//                pos--;
//            }
//        }
//
//        return pos;
//    }

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
                if (Number.isInteger(sum) === true) {
                    controlBreakData[j].footer[i].push(`Sum: ${sum}`);  // Place the sum into the footer
                } else {
                    controlBreakData[j].footer[i].push(`Sum: ${sum.toFixed(mathDecimal)}`);  // Place the sum into the footer
                }
            }
        } else {    // Regular search sort table to sum
            let locFooters = [...footers];  // Current footers

            // Sum the column for each row
            for (let j = 0; j < props.data.length; j++) {
                sum += props.data[j][row.name];
            }

            if (Number.isInteger(sum) === true) {
                locFooters[i].push(`Sum: ${sum}`);    // Place the sum into the footer
            } else {
                locFooters[i].push(`Sum: ${sum.toFixed(mathDecimal)}`);    // Place the sum into the footer
            }
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

                let average = sum / count;
                if (Number.isInteger(average) === true) {
                    controlBreakData[j].footer[i].push(`Average: ${average}`);   // Place the average into the footer
                } else {
                    controlBreakData[j].footer[i].push(`Average: ${average.toFixed(mathDecimal)}`);   // Place the average into the footer
                }
            }
        } else {    // Regular search sort table to calculate the average
            let locFooters = [...footers];  // Current footers

            // Sum the column for each row
            for (let j = 0; j < props.data.length; j++) {
                sum += props.data[j][row.name];
                count++;
            }

            let average = sum / count;

            if (Number.isInteger(average) === true) {
                locFooters[i].push(`Average: ${average}`);   // Place the sum into the footer
            } else {
                locFooters[i].push(`Average: ${average.toFixed(mathDecimal)}`);   // Place the sum into the footer
            }

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
                controlBreakData[j].footer[i].push(`Count: ${count}`);  // Place the counter into the footer
            }
        } else {    // Regular search sort table
            let locFooters = [...footers];  // Current footers

            // Count the number of rows
            for (let j = 0; j < props.data.length; j++) {
                count++;
            }

            locFooters[i].push(`Count: ${count}`);  // Place the counter into the footer
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
                controlBreakData[j].footer[i].push(`Distinct Count: ${count}`); // Place the distinct count into the footer
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

            locFooters[i].push(`Distinct Count: ${count}`); // Place the distinct count into the footer
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

                if (Number.isInteger(minimum) === true || typeof minimum === 'string') {
                    controlBreakData[j].footer[i].push(`Minimum: ${minimum}`);  // Place the minimum value into the footer
                } else {
                    controlBreakData[j].footer[i].push(`Minimum: ${minimum.toFixed(mathDecimal)}`);  // Place the minimum value into the footer
                }
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

            if (Number.isInteger(minimum) === true || typeof minimum === 'string') {
                locFooters[i].push(`Minimum: ${minimum}`);  // Place the minimum value into the footer
            } else {
                locFooters[i].push(`Minimum: ${minimum.toFixed(mathDecimal)}`);  // Place the minimum value into the footer
            }

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

                if (Number.isInteger(maximum) === true || typeof maximum === 'string') {
                    controlBreakData[j].footer[i].push(`Maximum: ${maximum}`);  // Place the maximum value into the footer
                } else {
                    controlBreakData[j].footer[i].push(`Maximum: ${maximum.toFixed(mathDecimal)}`);  // Place the maximum value into the footer
                }
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

            if (Number.isInteger(maximum) === true || typeof maximum === 'string') {
                locFooters[i].push(`Maximum: ${maximum}`);  // Place the minimum value into the footer
            } else {
                locFooters[i].push(`Maximum: ${maximum.toFixed(mathDecimal)}`);  // Place the minimum value into the footer
            }

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

                if (Number.isInteger(median) === true) {
                    controlBreakData[j].footer[i].push(`Median: ${median}`);    // Place the median value into the footer
                } else {
                    controlBreakData[j].footer[i].push(`Median: ${median.toFixed(mathDecimal)}`);    // Place the median value into the footer
                }
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

            if (Number.isInteger(median) === true) {
                locFooters[i].push(`Median: ${median}`);    // Place the median value into the footer
            } else {
                locFooters[i].push(`Median: ${median.toFixed(mathDecimal)}`);    // Place the median value into the footer
            }

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
        } else {
            functionList = ['', 'Count', 'Count Distinct', 'Minimum', 'Maximum']
        }

        // let isUserCtrlBreak = userCtrlBreak(table);
        let hiddenRender = null;
        if (hasOwnProperty(props, 'nohidden') === false) {
            /*if (isUserCtrlBreak === true &&  controlBreakInfo[i].hidden === true &&
                controlBreakInfo[i].hidden === props.controlBreak[i].hidden) {
                hiddenRender = <span></span>;
            } else*/ if (controlBreakInfo[i].hidden === false) {
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
            /*if (isUserCtrlBreak === true && controlBreakInfo[i].ctrlBreak !== 0 &&
                controlBreakInfo[i].ctrlBreak === props.controlBreak[i].ctrlBreak) {
                controlBreakRender = <span></span>;
            } else */if (controlBreakInfo[i].ctrlBreak === 0) {
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
    function buildHeaders(main, tableIndex, isMainHeader) {
        const f = (row, i) => {
//            console.log('row :', row);
            let key = `cell_${number}_${i}`;
            let btnImg = '\u2BC8';
            // let filterKey = 'filter_' + i;
            let filterName = `${row.header}_filter_${number}_${i}`;
            let ctrlBreak = false;

//            console.log ('row.header', row.header)

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

            let align = table[i].headerAlign;
            let hSize = 'medium';

            if (hasOwnProperty(props, 'headersize') === true) {
                hSize = props.headersize;
            }

            let classes = null;
            if (row.checked === true) {
                classes = (isMainHeader === true) ? `${headerStyle} ${align}` : `${headerStyle} ${align} sw-sst_resize`;
                return (<th key={key} className={classes} style={{ fontSize: hSize }}
                                id={row.header}
                                draggable={row.drag && main}
                                onDragStart={handleDragStart}
                                onDragOver={handleDragOver}
                                onDrop={handleOnDrop}
                                onDragEnter={handleDragEnter} >

                            <CheckBox selectedValue="Y" className="sw-ss_check"
                                name="checked" value={checked}
                                key={`checkbox_${i}`}
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
                            classes = (isMainHeader === true) ? `${headerStyle} ${align}` : `${headerStyle} ${align} sw-sst_resize`;
                            return (<th key={key} className={classes} style={{ fontSize: hSize }}
                                        id={row.header}
                                        draggable={row.drag && main}
                                            onDragStart={handleDragStart}
                                            onDragOver={handleDragOver}
                                            onDrop={handleOnDrop}
                                            onDragEnter={handleDragEnter} >

                                        {(i === dropDownIndex && htmlDropDown === true) ? showDropDown(row, i) : null}
                                        <button className={"sw-sst_headerButton " + fontColor} onClick={() => displayDropDown(row, i)}>{row.header}</button>
                                    </th>)  // Display the header only
                        } else {
                            classes = (isMainHeader === true) ? `${headerStyle} ${align}` : `${headerStyle} ${align} sw-sst_resize`;
                            return (<th key={key} className={classes} style={{ fontSize: hSize }}
                                        id={row.header}
                                        draggable={row.drag && main}
                                            onDragStart={handleDragStart}
                                            onDragOver={handleDragOver}
                                            onDrop={handleOnDrop}
                                            onDragEnter={handleDragEnter} >

                                        <div className={"sw-sst_headerButton " + fontColor}>{row.header}</div>
                                    </th>)  // Display the header only
                        }
                    } else {    // Can filter; therefore, display the input field
                        classes = (isMainHeader === true) ? `${headerStyle} sw-sst_bottom ${align}` : `${headerStyle} sw-sst_bottom ${align} sw-sst_resize`;
                        return (
                            <th key={key} className={classes} style={{ fontSize: hSize }}
                                id={row.header}
                                draggable={row.drag && main}
                                    onDragStart={handleDragStart}
                                    onDragOver={handleDragOver}
                                    onDrop={handleOnDrop}
                                    onDragEnter={handleDragEnter} >
                                {/* at this point main is always true    && main === true */}
                                {(i === dropDownIndex && htmlDropDown === true) ? showDropDown(row, i) : null}
                                {/* at this point main is always true    && main === true */}
                                {(row.dropDown === true) ?
                                    <button className={"sw-sst_headerButton" + fontColor} onClick={() => displayDropDown(row, i)}>{row.header}</button> :
                                    <div className={fontColor}>{row.header}</div>}
                                <span className="sw-invalid_checkForError" >
                                    {(hasOwnProperty(props, 'choice') === false) ?
                                        <input type="text" name={filterName}
                                            key={`${key}_text_${number}_${i}`}
                                            className={filterStyle} value={filter[i]}
                                            onChange={(event) => processFilter(event.target.value, i)} disabled={props.error} /> :
                                        <ChoiceText list={`dropDown_${number}_${i}`}
                                            key={`choice_text1_${number}_${i}`}
                                            choices={columns[i]} name={filterName} className={filterStyle} value={filter[i]} onChange={(event) => processFilter(event.target.value, i)} disabled={props.error} />}
                                </span>
                            </th>
                        );
                    }
                } else {    // Sorting on the column is allowed
                    if (row.search === false) { // No searching or filtering on the column, so display header only
                        classes = (isMainHeader === true) ? `${headerStyle} ${align}` : `${headerStyle} ${align} sw-sst_resize`;
                        return (
                            <th key={key} className={classes} style={{ fontSize: hSize }}
                                id={row.header}
                                draggable={row.drag && main}
                                    onDragStart={handleDragStart}
                                    onDragOver={handleDragOver}
                                    onDrop={handleOnDrop}
                                    onDragEnter={handleDragEnter} >
                              {/* at this point main is always true    && main === true */}
                                {(i === dropDownIndex && htmlDropDown === true) ? showDropDown(row, i) : null}

                                {/* at this point main is always true    && main === true */}
                                {(row.dropDown === true) ? <button className={"sw-sst_headerButton " + fontColor} onClick={() => displayDropDown(row, i)}>{row.header}</button> :
                                    <div className={fontColor}>{row.header}</div>}
                                {(doSort === true) ? <button name="sort" onClick={() => sortClicked(row.name, 'X', indexes, tableIndex)} className="sw-sst_buttonStyle2">{btnImg}</button> : null }
                            </th>
                        );
                    } else {    // Searching and filtering is allowed
                        classes = (isMainHeader === true) ? `${headerStyle} sw-sst_bottom ${align}` : `${headerStyle} sw-sst_bottom ${align} sw-sst_resize`;
                        return (    // Display header and input field for filtering
                            <th key={key} className={classes} style={{ fontSize: hSize }}
                                id={row.header}
                                draggable={row.drag && main}
                                    onDragStart={handleDragStart}
                                    onDragOver={handleDragOver}
                                    onDrop={handleOnDrop}
                                    onDragEnter={handleDragEnter} >
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
                classes = (isMainHeader === true) ? `${headerStyle} ${align}` : `${headerStyle} ${align} sw-sst_resize`;
                return (<th key={key} className={classes} style={{ fontSize: hSize }}
                            id={row.header}
                            draggable={row.drag && main}
                                onDragStart={handleDragStart}
                                onDragOver={handleDragOver}
                                onDrop={handleOnDrop}
                                onDragEnter={handleDragEnter} >

                                {(i === dropDownIndex && main === true && htmlDropDown === true) ? showDropDown(row, i) : null}
                                {(row.dropDown === true && main === true) ? <button className={"sw-sst_headerButton " + fontColor} onClick={() => displayDropDown(row, i)}>{row.header}</button> :
                                    <div className={fontColor}>{row.header}</div>}
                        </th> ); // Display the header only
            } else {    // Sorting on the column is allowed
                classes = (isMainHeader === true) ? `${headerStyle} ${align}` : `${headerStyle} ${align} sw-sst_resize`;
                return (
                    <th key={key} className={classes} style={{ fontSize: hSize }}
                        id={row.header}
                        draggable={row.drag && main}
                            onDragStart={handleDragStart}
                            onDragOver={handleDragOver}
                            onDrop={handleOnDrop}
                            onDragEnter={handleDragEnter} >

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
        let key = `footer_${number}_${i}`;

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
        let key = `mathfooter_${number}_${i}`;
        let key2 = `mathfooter2_${number}_${i}`;
        let key3 = `mathfooter3_${number}_${i}`;
        let ctrlBreakInfo = controlBreakInfo;
        if (controlBreakInfo.length === 0) {
            ctrlBreakInfo = props.controlBreak;
        }

        if (row === undefined || row === null) {    // No footer for this column, so return a blank cell
            return <td key={key}></td>;
        }

        if (ctrlBreakInfo !== undefined && ctrlBreakInfo[i].hidden === true) {
            return <td key={key2} hidden></td>
        }

        let foot = '';  // Contains all the information in the footer with <br /> between each aggregate footer
        for (let j = 0; j < row.length; j++) {
            if (j === row.length - 1) {
                foot += row[j];
            } else {
                foot += (row[j] + '\n');
            }
        }

        if (ctrlBreakInfo !== undefined) {
            const [align, originalAlign] = determineAlignment(i, CONTROL_BREAK_ALIGN, false);
            let newAlign = align;
            if (hasOwnProperty(table[i], 'dropDown') === true &&
                table[i].dropDown === true &&
                align.endsWith('_bold') === false) {
                    newAlign += '_bold';
            }
            return (<td key={key3} className={`${footerStyle} ${newAlign} sw-sst_pre`}>{foot}</td>)
        }
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

    /*******************************************************************************
     *
     * This will check to see if a date is within a range of the current date and
     * the range date.
     *
     * Parameters:
     *
     * 1.   range = the ending range to compare the dates.  The range will be a number
     *          which could be years, month, days, or hours.
     * 2.   type = indicates whether the range represents years, months, days, or hours.
     * 3.   direction = indicates whether the range is before (value is Last) or
     *          after (value is Next) the current date.
     * 4.   dataPart = the date to be compared to see if it is within the range.
     *
     **********************************************************************************/
    function dateCompare (range, type, direction, dataPart) {
        let todayDate = new Date();             // Today's date (current date for comparison)
        let currentDate = new Date();           // Current Date (used to calculate the range)
        let rangeDate = null;                   // The amount of time between the current date and the end date
        let compareDate = new Date(dataPart);   // The date to be compared

        if (type === 'Year') {
            rangeDate = new Date(currentDate.setFullYear(currentDate.getFullYear() + range));
        } else if (type === 'Month') {
            rangeDate = new Date(currentDate.setMonth(currentDate.getMonth() + range));
        } else if (type === 'Week' || type === 'Day') {
            rangeDate = new Date(currentDate.setDate(currentDate.getDate() + range));
        } else if (type === 'Hour') {
            rangeDate = new Date(currentDate.setHours(currentDate.getHours() + range));
        }

        // Check to see if the date is within the range
        if (direction === 'Last') {
            return (compareDate >= rangeDate && compareDate <= todayDate) ? true : false;
        }
        else {
            return (compareDate >= todayDate && compareDate <= rangeDate) ? true : false;
        }
    }

    /*******************************************************************************
     *
     * This will take the selection and set range, type, and direction and call
     * the function that compares the dates to see if they are in the date range.
     *
     * Parameters:
     *
     * 1.   dataPart = the date to be compared to see if it is within the range.
     * 2.   selection = the selection that was made on the ChoiceText box that
     *          was selected on the filter for that header.
     *
     ********************************************************************************/
    function filterDateRange(dataPart, selection) {
        if (selection === 'Last 10 Years') {
            return dateCompare(-10, 'Year', 'Last', dataPart);
        } else if (selection === 'Last 7 Years') {
            return dateCompare(-7, 'Year', 'Last', dataPart);
        } else if (selection === 'Last 5 Years') {
            return dateCompare(-5, 'Year', 'Last', dataPart);
        } else if (selection === 'Last 2 Years') {
            return dateCompare(-2, 'Year', 'Last', dataPart);
        } else if (selection === 'Last Year') {
            return dateCompare(-1, 'Year', 'Last', dataPart);
        } else if (selection === 'Last Month') {
            return dateCompare(-1, 'Month', 'Last', dataPart);
        } else if (selection === 'Last Week') {
            return dateCompare(-7, 'Week', 'Last', dataPart);
        } else if (selection === 'Last 2 Days') {
            return dateCompare(-2, 'Day', 'Last', dataPart);
        } else if (selection === 'Last Day') {
            return dateCompare(-1, 'Day', 'Last', dataPart);
        } else if (selection === 'Last 12 Hours') {
            return dateCompare(-12, 'Hour', 'Last', dataPart);
        } else if (selection === 'Last 2 Hours') {
            return dateCompare(-2, 'Hour', 'Last', dataPart);
        } else if (selection === 'Last Hour') {
            return dateCompare(-1, 'Hour', 'Last', dataPart);
        } else if (selection === 'Next Hour') {
            return dateCompare(1, 'Hour', 'Next', dataPart);
        } else if (selection === 'Next 2 Hours') {
            return dateCompare(2, 'Hour', 'Next', dataPart);
        } else if (selection === 'Next 12 Hours') {
            return dateCompare(12, 'Hour', 'Next', dataPart);
        } else if (selection === 'Next Day') {
            return dateCompare(1, 'Day', 'Next', dataPart);
        } else if (selection === 'Next 2 Days') {
            return dateCompare(2, 'Day', 'Next', dataPart);
        } else if (selection === 'Next Week') {
            return dateCompare(1, 'Week', 'Next', dataPart);
        } else if (selection === 'Next Month') {
            return dateCompare(1, 'Month', 'Next', dataPart);
        } else if (selection === 'Next Year') {
            return dateCompare(1, 'Year', 'Next', dataPart);
        } else if (selection === 'Next 2 Years') {
            return dateCompare(2, 'Year', 'Next', dataPart);
        } else if (selection === 'Next 5 Years') {
            return dateCompare(5, 'Year', 'Next', dataPart);
        } else if (selection === 'Next 7 Years') {
            return dateCompare(7, 'Year', 'Next', dataPart);
        } else if (selection === 'Next 10 Years') {
            return dateCompare(10, 'Year', 'Next', dataPart);
        }
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

                    if (table[indexing[j]].filterdaterange === true) {  // There is a data range on the filter
                        found.push(filterDateRange(dataPart, filter[indexing[j]]));
                    } else if (dataPart.toString().indexOf(filterPart.toString()) !== -1) {  // Compare the dates
                        found.push(true);
                    } else {    // Dates are not equal
                        found.push(false);
                        done = true;
                    }
                // There is a date range on the filter
                } else if (table[indexing[j]].filterdaterange === true) {
                    found.push(filterDateRange(data[indexes[i]][table[indexing[j]].name], filter[indexing[j]]));
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
            setFilterFound(true);
            if (isControlBreak(controlBreakInfo) === true) {
                findCtrlBreak(controlBreakInfo, newData);
            }
        } else {    // Filtered items were not found
            setFilterFound(false);
            setAlertMessage(`Could not find any rows that matched the filter criteria in the table`);
            setShowAlert(true);
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
    function validate(type) {
        let localInvalid = [...invalid];

        localInvalid[SRCHHDR].validity = false;
        localInvalid[SRCHHDR].display = false;
        localInvalid[SRCHITEM].validity = false;
        localInvalid[SRCHITEM].display = false;

        if (searchHeader === '') {
            localInvalid = setInvalidScreen(localInvalid, SRCHHDR, 'A column header to be searched must be selected');
        }

        if (type === 'Letter' && searchHeader === 'All') {
            localInvalid = setInvalidScreen(localInvalid, SRCHHDR, 'The word All can be used when using letters.  Select another column');
        }

        setInvalid(localInvalid);

        return  localInvalid[SRCHHDR].validity === false &&
                localInvalid[SRCHITEM].validity === false;    // No problems occurred
    }

    function searchItemButton() {
        if (displayAll === 'Y') {
            searchItemButtonAll();
        } else {
            searchItemButtonSingle();
        }
    }

    function buildIndexes(foundIndexes) {
        let newIndexes = [];

        for (let i = 0; i < foundIndexes.length; i++) {
            newIndexes.push(foundIndexes[i]);
        }

        for (let i = 0; i < indexes.length; i++) {
            let found = false;
            for (let j = 0; j < foundIndexes.length; j++) {
                if (indexes[i] === foundIndexes[j]) {
                    found = true;
                }
            }

            if (found === false) {
                newIndexes.push(indexes[i]);
            }
        }

        return newIndexes;
    }

    function searchItemButtonAll() {
        let foundIndexes = [];

        if (table && validate('Search') === true) {  // Make sure a value has been selected in the drop down and text box
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
                    foundIndexes = searchDateAll(search, tableIndex, foundIndexes);
                } else if (hasOwnProperty(props,'searchstart') === true) {
                    foundIndexes = searchStartAll(search, table[tableIndex].name, foundIndexes);
                } else {
                    foundIndexes = searchAnyAll(search, table[tableIndex].name, foundIndexes);
                }

//            let index = props.data.findIndex(val => val[table[tableIndex].name].toString().startsWith(search));   // Text match
    //            setStartEnd(index); // Set the start and end to show the found text
            }
            else if (hasOwnProperty(props, 'searchall')) {
                for (let tableIndex = 0; tableIndex < table.length && found === false; tableIndex++) {
                    if (hasOwnProperty(table[tableIndex], 'dataDate') && hasOwnProperty(table[tableIndex], 'searchDate')) {
                        foundIndexes = searchDateAll(search, tableIndex, foundIndexes);
                    } else if (hasOwnProperty(props,'searchstart') === true && found === false) {
                        foundIndexes = searchStartAll(search, table[tableIndex].name, foundIndexes);
                    } else if (found === false) {
                        foundIndexes = searchAnyAll(search, table[tableIndex].name, foundIndexes);
                    }
                }
            }

            if (foundIndexes.length === 0) {
                setAlertMessage(`Could not find ${searchItem} in the table`);
                setShowAlert(true);
            } else {
                let newIndexes = buildIndexes(foundIndexes);
                setIndexes(newIndexes);
                setStartEnd(0, length, newIndexes);
            }
        }
    }

    /********************************************************************************
     *
     * This will search a column in a table until it matches the starting characters
     * in the column with that which is in the text box.  In other words, if the
     * column contains SMITH and SM is entered in the text box, it will match.  It
     * will match until it finds the first occurrence.
     *
     **********************************************************************************/
    function searchItemButtonSingle() {
        if (table && validate('Search') === true) {  // Make sure a value has been selected in the drop down and text box
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

    function searchDateAll(searchItem, tableIndex, foundIndexes) {
        let data = props.data;  // The data to filter
        let done = false;

        // Find if the index is in the date table

        for (let i = 0; i < indexes.length; i++) {
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
                    foundIndexes.push(tableIndex);
                }
            }
        }

        return foundIndexes;
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

    function searchStartAll(search, name, foundIndexes) {
        for (let i = 0; i < length; i++) {
            let compareStr = (hasOwnProperty(props, 'ignorecase')) ? props.data[indexes[i]][name].toString().toUpperCase() :
                                                                  props.data[indexes[i]][name].toString();
            if (compareStr.startsWith(search)) {    // Item was found
                foundIndexes.push(indexes[i]);
            }
        }

        return foundIndexes;
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

    function searchAnyAll(search, name, foundIndexes) {
        let begin = (hasOwnProperty(props,'nocontsearch') === true || start === 0) ? 0: start + 1;  // Where to start the search

        for (let i = begin; i < props.data.length; i++) {
            const str = (props.data[indexes[i]][name]) ? props.data[indexes[i]][name].toString() : ''
            const compareStr = (hasOwnProperty(props, 'ignorecase')) ? str.toUpperCase() : str;

            if (compareStr.indexOf(search) !== -1) {    // Item was found
                foundIndexes.push(indexes[i]);
            }
        }

        return foundIndexes;
    }

    /*********************************************************************************************************
     *
     * This will store the final footers in the finalTotal array which sent back to tables that already have
     * control breaks and those that do not have control breaks.  This will require the finaltotals prop.
     *
     * Parameters:
     * 1.   total = contain the raw final totals
     *
     *********************************************************************************************************/
    function storeFinalFooters(total) {
        if (hasOwnProperty(props, 'finaltotals') === true) {    // Make sure there is the finaltotals prop
            let isFooter = false;
            let finalTotal = new Array(finalTotalsInfo.length).fill('');    // Array that contains the final totals
            for (let j = 0; j < finalTotalsInfo.length; j++) {  // Spin through the final totals
                const [align, originalAlign] = determineAlignment(j, FINAL_TOTALS_ALIGN, false);
                if (hasOwnProperty(finalTotalsInfo[j], 'finaltitle') === true &&    // Title and total go together
                    hasOwnProperty(finalTotalsInfo[j], 'finaltotal') === true &&
                    finalTotalsInfo[j].finaltotal === true) {   // There is a final total for this column
                        if (originalAlign.indexOf('money') !== -1) {    // Final total is a money format
                                finalTotal[j] =`${finalTotalsInfo[j].finaltitle}: ${formatMoney(total[j])}`;
                        } else {    // Final total is not a money format
                            finalTotal[j] = `${finalTotalsInfo[j].finaltitle}: ${total[j]}`;
                        }
                        isFooter = true;
                } else if (hasOwnProperty(finalTotalsInfo[j], 'finaltitle') === true &&     // The title and total
                            hasOwnProperty(finalTotalsInfo[j], 'finaltotal') === false) {   // do not go together
                    finalTotal[j] = `${finalTotalsInfo[j].finaltitle}`;
                    isFooter = true;
                } else if (hasOwnProperty(finalTotalsInfo[j], 'finaltotal') === true && // Final total is by itself
                          finalTotalsInfo[j].finaltotal === true) {
                    if (originalAlign.indexOf('money') !== -1) {    // Final total should be in a money format
                            finalTotal[j] = `${formatMoney(total[j])}`;
                    } else {    // Final total is not in a money format
                        finalTotal[j] = `${total[j]}`;
                    }
                    isFooter = true;
                }
            }

            return finalTotal;
        }

        return [];  // No final totals to return
    }

    /*********************************************************************************************************
     *
     * This function will total up the final totals and place them in the footer section for each column.
     *
     *********************************************************************************************************/
    function buildFinalFooters() {
        if (hasOwnProperty(props, 'finaltotals') === true) {    // Make sure final totals are wnated
            let total = new Array(table.length).fill(0);    // Array that contains the final totals
            for (let j = 0; j < finalTotalsInfo.length; j++) {    // Spin through the final totals to
                let totaling = false;                               // determing which fields have final totals and titlse
                if (hasOwnProperty(props, 'finaltotals') === true &&    // Make sure this column is to be
                    finalTotalsInfo[j].finaltotal === true) {         // totaled
                    totaling = true;
                }
                // Sum up the column for each row
                for (let k = 0; k < props.data.length && totaling === true; k++) {
                    if (props.data[k][table[j].name] !== null &&
                        props.data[k][table[j].name] !== undefined) {
                        total[j] += props.data[k][table[j].name];
                    }
                }
            }

            return storeFinalFooters(total);    // Place the final totals in the footers
        } else {    // No final totals
            return [];
        }
    }

    function buildControlBreakFooters(ctrlBreakData) {
        let ctrlBreakInfo = controlBreakInfo;   // Retrieve the control break info, which contains the summing information
        if (controlBreakInfo.length === 0) {    // If there is not control break info, use the one the user passed
            ctrlBreakInfo = props.controlBreak
        }

        let total = new Array(table.length).fill(0);    // The final totals for all control breaks
        for (let i = 0; i < ctrlBreakData.length; i++) {    // Spin through control break data
            for (let j = 0; j < ctrlBreakInfo.length; j++) {    // Spin through the columns to determine whether the columns should be summed and totaled
                let summing = false;    // Indicates whether the column should be summed for a control break
                if (hasOwnProperty(ctrlBreakInfo[j], 'sum') === true &&
                    ctrlBreakInfo[j].sum === true) {
                        summing = true;
                }

                let totaling = false;   // Indicates whether the column should be totaled
                if (hasOwnProperty(props, 'finaltotals') === true &&
                    finalTotalsInfo[j].finaltotal === true) {
                        totaling = true;
                }

                // Place the sum title in one of the footers
                if (hasOwnProperty(ctrlBreakInfo[j], 'sumtitle') === true &&    // The column has a title, but
                    hasOwnProperty(ctrlBreakInfo[j], 'sum') === false) {        // does not have a sum
                    ctrlBreakData[i].footer[j].push(ctrlBreakInfo[j].sumtitle);
                }

                let sum = new Array(table.length).fill(0);      // Allocate the array for the sums
                if (summing === true || totaling === true) {    // The column should be summed or totaled
                    // Sum and total up the column for each row
                    for (let k = 0; k < ctrlBreakData[i].data.length; k++) {
                        sum[j] += ctrlBreakData[i].data[k][table[j].name];
                        total[j] += ctrlBreakData[i].data[k][table[j].name];
                    }
                }

                // Check to see if the column is hidden
                if (ctrlBreakInfo[j].hidden === false) {    // Column is not hidden
                    const [align, originalAlign] = determineAlignment(j, CONTROL_BREAK_ALIGN, false);
                    if (originalAlign.indexOf('money') !== -1 && summing === true) {    // The column contains money, so format for money
                            if (hasOwnProperty(ctrlBreakInfo[j], 'sumtitle') === true) {    // Column should have a title and sum
                                ctrlBreakData[i].footer[j].push(`${ctrlBreakInfo[j].sumtitle} ${formatMoney(sum[j])}`);  // Place the sum into the footer
                            } else {    // Column only contains the sum only
                                ctrlBreakData[i].footer[j].push(`${formatMoney(sum[j])}`);  // Place the sum into the footer
                            }
                    } else if (summing === true) {    // Control break is to be summed
                        if (hasOwnProperty(ctrlBreakInfo[j], 'sumtitle') === true) {    // Column should have a title and sum
                            ctrlBreakData[i].footer[j].push(`${ctrlBreakInfo[j].sumtitle} ${sum[j]}`);  // Place the sum into the footer
                        } else {
                            ctrlBreakData[i].footer[j].push(`${sum[j]}`);  // Place the sum into the footer
                        }
                    }
                } else {    // Column is hidden
                    ctrlBreakData[i].footer[j].push('');  // Place a blank into the footer
                }
            }
        }

        // Store the final totals to be displayed
        let finalTotals = storeFinalFooters(total);
        setFinalTotals(finalTotals);

        return ctrlBreakData;   // Return the control break data that now contains the footer containing the totals
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
                endingPosition = indexes.length;
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
        let key = `anchor_${number}_${i}`;

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

        if (validate('Letter') === true) {   // Validate that a search header was entered
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