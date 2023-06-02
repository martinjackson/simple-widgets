
import React, { useState, useEffect } from 'react';
/*
import { CheckBox }        from './CheckBox.js';
import { Choice }          from './Choice.js';
import { SearchSortTable } from './SearchSortTable.js';
import { ChoiceText }      from './ChoiceText.js';
import { Radio }           from './Radio.js';

// import { isInvalid, 
import { setInvalidTable, generateInvalid,
         checkValidityTable, validCheckTable, 
         clearInvalidTable, 
         processInvalidStyleTable, wasClickedTable} from './Invalid.js'

import { ConfirmModal }  from './ConfirmModal.js';

import { generateCSSButton } from './Theme.js';
import { sanitize } from './Common.js';
         
import { hasOwnProperty } from './hasOwnProperty.js';
*/
import { CheckBox, Choice, /*SearchSortTable, */ ChoiceText, Radio, 
    setInvalidTable, generateInvalid,
    checkValidityTable, validCheckTable, 
    clearInvalidTable, 
    processInvalidStyleTable, wasClickedTable,
    ConfirmModal, generateCSSButton, sanitize, hasOwnProperty } from 'simple-widgets';

import { SearchSortTable } from './SearchSortTable.js';

let functYes = null;

export const SpreadSheet = (props) => {
    if (hasOwnProperty(props, 'sheet') === false) {
        console.error ('SpreadSheet: The sheet prop is missing');
        return <div></div>;
    }

    const invalidArray = generateInvalid(0, props.sheet.length);

    const ADDITIONAL = (hasOwnProperty(props, 'additionalRows') === true) ? props.additionalRows : 20;
    const ADD = (hasOwnProperty(props, 'blankRows') === true) ? props.blankRows : 100;

    const [data, setData] = useState([]);
    const [table, setTable] = useState([]);
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [indexes, setIndexes] = useState([]);
    const [invalid, setInvalid] = useState(invalidArray);
    const [showConfirm, setShowConfirm] = useState(false);
    const [confirmMessage, setConfirmMessage] = useState('');
    const [count, setCount] = useState(0);

    let sheet = [...props.sheet];
    for (let i = 0; i < sheet.length; i++) {
        if (hasOwnProperty(sheet[i], 'validate') === false) sheet[i]['validate'] = false;
        if (hasOwnProperty(sheet[i], 'save') === false) sheet[i]['save'] = true;
        if (hasOwnProperty(sheet[i], 'hidden') === false) sheet[i]['hidden'] = false;
        if (hasOwnProperty(sheet[i], 'disabled') === false) sheet[i]['disabled'] = false;
        if (hasOwnProperty(sheet[i], 'checked') === false) sheet[i]['checked'] = false;
        if (hasOwnProperty(sheet[i], 'search') === false) sheet[i]['searched'] = false;
        if (hasOwnProperty(sheet[i], 'sort') === false) sheet[i]['sort'] = false;
    }

    const populateDirty = (data) => {
        let localData = [];

        for (let i = 0; i < data.length; i++) {
            let obj = {};
            obj['count'] = 0;
            obj['dirty'] = new Array(sheet.length).fill(false);
            obj['checked'] = 'N';
            Object.keys(data[i]).forEach (fieldName => {
                obj[fieldName] = data[i][fieldName];
            })
            localData.push(obj);
        }

        if (hasOwnProperty(props, 'preload') === true) {
            props.preload(data);
        }

//        for (let i = 0; i < localData.length; i++) {
//            if (localData[i].count === 0) {
//                for (let j = 0; j < localData[i].dirty.length; j++) {
//                    if (localData[i][sheet[j].name] !== '' && localData[i][sheet[j].name] !== null && localData[i][sheet[j].name] !== undefined) {
//                        localData[i].dirty[j] = true;
//                        localData[i].count++;
//                    }
//                }
//            }
//        }

        setData(localData);
    }

    useEffect(() => {
        populateDirty(props.data);
    }, [props.data]);

 
    const startEnd = (start, end) => {
        setStart(start);
        setEnd(end);
        if (hasOwnProperty(props, 'startEnd') === true) {
            props.startEnd(start, end);
        }
    }

    const indexing = (indexes) => {
        setIndexes(indexes);
        if (hasOwnProperty(props, 'indexing') === true) {
            props.indexing(indexes);
        }
    }

    const populate = (numRows = ADD, clear = false) => {
        let blank = [];

        for (let i = 0; i < numRows; i++) {
            let obj = {
                count: 0,
                dirty: new Array(sheet.length).fill(false),
                checked: 'N',
            };

            for (let j = 0; j < sheet.length; j++) {
                obj[sheet[j].name] = '';
            }
            
            blank.push(obj);
        }

        if (hasOwnProperty(props, 'preload') === true) {
            props.preload(blank);
        }

        if (clear === true || data.length === 0) {
            setData(blank);
        } else {
            setData (prev => [...prev, ...blank]);
        }
    }

    useEffect(() => {
        if (hasOwnProperty(props, 'data') === false) {
            populate();
        }
    }, [])


    if (table.length === 0) {
        let table = [];
        for (let i = 0; i < sheet.length; i++) {
            if (sheet[i].hidden === false) {
                table.push({ header: sheet[i].header, name: sheet[i].name, 
                    search: sheet[i].search, sort: sheet[i].sort,
                    checked: (hasOwnProperty(sheet[i], 'checked') === true) ? sheet[i].checked : false });
            }
        }
        setTable(table);
    }

    const processCount = (localData, value, index, posNum) => {
        if (value === '' && localData[index].count > 0) {
            localData[index].count--;
            localData[index].dirty[posNum] = false;
        } else if (localData[index].dirty[posNum] === false) {
            localData[index].count++;
            localData[index].dirty[posNum] = true;
        }

        return localData;
    }

    const processValue = (event, index, posNum) => {
        let localData = [...data];
        let name = event.target.name;
        let value = event.target.value;

        localData = processCount(localData, value, index, posNum);

        if (hasOwnProperty(props, 'specialProcessing') === true) {
            localData = props.specialProcessing(localData, name, value, index);
        }

        localData[index][name] = value;
        setData(localData);
    }

    const validate = () => {
        let localInvalid = [...invalid];

        setInvalid(clearInvalidTable(localInvalid));
        
        for (let i = 0; i < data.length; i++) {
            if (data[i].count > 0) {
                for (let j = 0; j < sheet.length; j++) {
                    if (sheet[j].validate === true && sheet[j].hidden === false) {
                        if (data[i][sheet[j].name] === '' ||
                            data[i][sheet[j].name] === null ||
                            data[i][sheet[j].name] === undefined) {
                                localInvalid = setInvalidTable(localInvalid, j, i, `A ${sheet[j].header} must be given or selected`);
                        } else if ((sheet[j].type === 'text' && typeof (data[i][sheet[j].name]) === 'string') || sheet[j].type === 'textarea') {
                            let answer = sanitize (data[i][sheet[j].name], sheet[j].header);
                            if (answer.valid === false) {
                                localInvalid = setInvalidTable(localInvalid, j, i, answer.message);
                            }
                        }
                    }
                }
            }
        }

        setInvalid(localInvalid);

        // Determine if any of the validation checks were invalid
        return validCheckTable(localInvalid);
    }

    const buildHTML = (row, pos) => {
        let html = [];

        const genButtonStyle = generateCSSButton('sw-ss_button', props.error);

        for (let i = 0; i < sheet.length; i++) {
            let rowSheet = sheet[i];
            const key = `spsht_${pos}${i}`;

            if (rowSheet.hidden === false) {
                if (rowSheet.checked === true) {
                    html.push (<td key={key} className="sw-ss_center">
                                    <CheckBox selectedValue="Y"
                                        name={rowSheet.name} value={row[rowSheet.name]}
                                        onChange={(event) => processChecked(event.target.value, pos)} 
                                        className={" sw-ss_check " + rowSheet.className} disabled={props.error || rowSheet.disabled} />                          
                                </td>)
                } else if (rowSheet.type === 'text' || rowSheet.type === 'date' || rowSheet.type === 'number') {
                    if (rowSheet.validate === true) {
                        html.push(<td key={key} className="sw-invalid_checkForError sw-ss_center">
                                    <input type={rowSheet.type} name={rowSheet.name} value={row[rowSheet.name]} 
                                        onChange={(event) => processValue(event, pos, i)} 
                                        onClick={() => wasClickedTable(invalid, i, pos, setInvalid)} 
                                        disabled={props.error || rowSheet.disabled} 
                                        className={rowSheet.className + ' ' + processInvalidStyleTable(invalid, i, pos)}/>
                                    { checkValidityTable(invalid, i, pos) }
                                </td>);
                    } else {
                        html.push(<td key={key} className="sw-ss_center">
                                    <input type={rowSheet.type} name={rowSheet.name} value={row[rowSheet.name]} 
                                        onChange={(event) => processValue(event, pos, i)} 
                                        className={rowSheet.className} disabled={props.error || rowSheet.disabled} />
                                </td>);
                   }
                } else if (rowSheet.type === 'textarea') {
                    if (rowSheet.validate === true) {
                        html.push(<td key={key} className="sw-invalid_checkForError sw-ss_center">
                                    <textarea name={rowSheet.name} value={row[rowSheet.name]} 
                                        onChange={(event) => processValue(event, pos, i)} 
                                        onClick={() => wasClickedTable(invalid, i, pos, setInvalid)} 
                                        disabled={props.error || rowSheet.disabled} 
                                        className={rowSheet.className + ' ' + processInvalidStyleTable(invalid, i, pos)}/>
                                    { checkValidityTable(invalid, i, pos) }
                                </td>);
                    } else {
                        html.push(<td key={key} className="sw-ss_center">
                                    <textarea name={rowSheet.name} value={row[rowSheet.name]} 
                                        onChange={(event) => processValue(event, pos, i)} 
                                        className={rowSheet.className} 
                                        disabled={props.error || rowSheet.disabled} />
                                </td>);
                    }
                } else if (rowSheet.type === 'Choice') {
                    if (rowSheet.validate === true) {
                        html.push(<td key={key} className="sw-invalid_checkForError sw-ss_center">
                                    <Choice choices={rowSheet.choices} 
                                        name={rowSheet.name} value={row[rowSheet.name]} 
                                        onChange={(event) => processValue(event, pos, i)} 
                                        onClick={() => wasClickedTable(invalid, i, pos, setInvalid)} 
                                        disabled={props.error || rowSheet.disabled} 
                                        className={rowSheet.className + ' ' + processInvalidStyleTable(invalid, i, pos)}/>
                                    { checkValidityTable(invalid, i, pos) }
                                </td>);
                    } else {
                        html.push(<td key={key} className="sw-ss_center">
                                    <Choice choices={rowSheet.choices} name={rowSheet.name} value={row[rowSheet.name]} 
                                        onChange={(event) => processValue(event, pos, i)} 
                                        className={rowSheet.className} disabled={props.error || rowSheet.disabled} />
                                </td>);
                    }
                } else if (rowSheet.type === 'ChoiceText') {
                    if (rowSheet.validate === true) {
                        html.push(<td key={key} className="sw-invalid_checkForError sw-ss_center">
                                    <ChoiceText list={`sheetList_${i}_${pos}`} choices={rowSheet.choices}
                                        name={rowSheet.name} value={row[rowSheet.name]} 
                                        onChange={(event) => processValue(event, pos, i)} 
                                        onClick={() => wasClickedTable(invalid, i, pos, setInvalid)} 
                                        disabled={props.error || rowSheet.disabled} 
                                        className={rowSheet.className + ' ' + processInvalidStyleTable(invalid, i, pos)}/>
                                    { checkValidityTable(invalid, i, pos) }
                                </td>);
                    } else {
                        html.push(<td key={key} className="sw-ss_center">
                                    <ChoiceText list={`sheetList_${i}_${pos}`} choices={rowSheet.choices}
                                        name={rowSheet.name} value={row[rowSheet.name]} 
                                        onChange={(event) => processValue(event, pos, i)} 
                                        className={rowSheet.className} disabled={props.error || rowSheet.disabled} />
                                </td>);
                    }
                } else if (rowSheet.type === 'CheckBox') {
                    html.push(<td key={key} className="sw-ss_center">
                                <CheckBox selectedValue={rowSheet.selectedValue}
                                    name={rowSheet.name} value={row[rowSheet.name]} text={rowSheet.header}
                                    onChange={(event) => processValue(event, pos, i)} 
                                    className={rowSheet.className} disabled={props.error || rowSheet.disabled} />                          
                            </td>);
                } else if (rowSheet.type === 'Radio') {
                    html.push(<td key={key} className="sw-ss_center">
                                <Radio selectedValue={rowSheet.selectedValue}
                                    name={rowSheet.name} value={row[rowSheet.name]} text={rowSheet.header}
                                    onChange={(event) => processValue(event, pos, i)} 
                                    className={rowSheet.className} disabled={props.error || rowSheet.disabled} />                          
                                </td>);
                } else if (rowSheet.type === 'button') {
                    html.push(<td key={key} className="sw-ss_center">
                                <button name={rowSheet.name} 
                                        onClick={() => rowSheet.buttonOnClick(rowSheet.parameters, pos, data)} 
                                        className={genButtonStyle + ' ' + rowSheet.className} 
                                        disabled={props.error || rowSheet.disabled}>
                                    {rowSheet.name}
                                </button>
                            </td>)
                } else if (rowSheet.type === 'html') {
                    html.push(<td key={key} className="sw-ss_center">
                                { rowSheet.html }
                            </td>);
                }
            }
        }

        html.map (row => delete row.ref);


        return html;
    }

    const processAllChecks = (value, filter) => {
        if (value !== 'Y') {
            value = 'N';
        }

        if (filter === 'Y') {
            for (let i = start; i < end; i++) {
                pos = indexes[i];
                Object.keys(data[pos]).forEach (fieldName => {
                    if (fieldName !== 'count' && fieldName !== 'dirty' && fieldName !== 'checked') {
                        if (data[pos][fieldName] !== '' && data[pos][fieldName] !== null && data[pos][fieldName] !== undefined) {
                            data[pos].checked = value;
                        }
                    }
                })
            }
        } else {
            data.map(row => Object.keys(row).forEach (fieldName => {
                if (fieldName !== 'count' && fieldName !== 'dirty' && fieldName !== 'checked') {
                    if (row[fieldName] !== '' && row[fieldName] !== null && row[fieldName] !== undefined) {
                        row.checked = value;
                    }
                }
            }))
        }
    }

    const processChecked = (value, i) => {
        let localData = [...data];
        localData[i].checked = (value === 'Y') ? 'Y' : 'N';
        setData(localData);
    }

    const eachRowInTable = (row, i) => {
        let key = 'row_' + (start + i);
        let pos = indexes[i];

        let html = buildHTML(row, pos);

        return (
            <tr key={key} className={(data[pos].checked === 'Y') ? 'sw-ss_checked_background' : 'sw-ss_background'}>
                { html.map(row => row) }
            </tr>
        )
    }

    const saveButton = async() => {
        if (validate() === true) {

            let localData = [...data];
            let newData = [];
            for (let i = 0; i < localData.length; i++) {
                if (localData[i].count > 0) {
                    newData.push(localData[i]);
                }
            }

            for (let i = 0; i < newData.length; i++) {
                if (hasOwnProperty(props, 'specialProcessingSave') === true) {
                    newData[i] = props.specialProcessingSave (newData[i]);
                }

                if (hasOwnProperty(props, 'showmetadata') === false) {
                    delete newData[i].dirty;
                    delete newData[i].count;
                    delete newData[i].checked;
                }
                
                for (let j = 0; j < sheet.length; j++) {
                    if (props.sheet[j].save === false) {
                        delete newData[i][sheet[j].name];
                    }
                }
            }

            if (newData.length !== 0) {
                if (hasOwnProperty(props, 'saveFunct') === true) {
                    props.saveFunct(newData);
                }
            }
        }
    }

    const clearButton = () => {
        functYes = clearButtonYes;
        setConfirmMessage('Do you want to clear?')
        setShowConfirm(true);
    }

    const clearButtonYes = () => {
        populate(ADD, true);
    }

    const removeFunct = (data) => {
        functYes = () => removeFunctYes(data);
        setConfirmMessage('Remove the checked rows?')
        setShowConfirm(true);
    }

    const removeFunctYes = (data) => {
        let count = 0;
        let localData = [...data];

        let filterData = localData.filter(row => { count++; return row.checked !== 'Y'});
        setData(filterData);

        populate(count);
    }

    const buttonFunct = (data) => {
        let counter = count;
        counter++;
        setCount(counter);
        props.buttonFunct(data);
    }

    const genButtonStyle = generateCSSButton('sw-theme_buttonStyle', props.error);

    let title = null;

    if (hasOwnProperty(props, 'title') === true) {
        title = <h1 className="sw-ss_center">{props.title}</h1>;
    }

    const alignmentClass = (hasOwnProperty(props, 'alignment') === true) ? `sw-ss_${props.alignment}` : 'sw-ss_center';
    const placement = (hasOwnProperty(props, 'placement') === true) ? props.placement : 'top';

    let checkFound = false;
    for (let i = 0; i < sheet.length; i++) {
        if (sheet[i].checked === true) {
            checkFound = true;
        }
    }

    let specialButton = null;
    if (checkFound === true && 
        hasOwnProperty(props, 'buttonName') === true && 
        hasOwnProperty(props, 'buttonFunct') === true) {
        let newData = data.filter (row => row.checked === 'Y' );

        specialButton = <button name={props.buttonName} 
                            className={genButtonStyle} onClick={() => buttonFunct(newData)} >
                                {props.buttonName}
                        </button>
    } else if (checkFound === true) {
        const buttonName = (hasOwnProperty(props, 'buttonName') === true) ? props.buttonName : 'Remove';

        specialButton = <button name={buttonName} 
                            className={genButtonStyle} onClick={() => removeFunct(data)} >
                                {buttonName}
                        </button>
    }

    let buttonGroup = 
        <div className={alignmentClass}>
            {(hasOwnProperty(props, 'nosave') === true) ? null : <button name="save" className={genButtonStyle} onClick={saveButton }>Save</button> }
            {(hasOwnProperty(props, 'noclear') === true) ? null : <button name="clear" className={genButtonStyle} onClick={clearButton}>Clear</button> }
            {(hasOwnProperty(props, 'noaddrows') === true) ? null : <button name="addrows" className={genButtonStyle} onClick={() => populate(ADDITIONAL)}>Add Rows</button> }
            { specialButton }
        </div>

    return (
        <div>
            {title}
            {(placement === 'top') ? buttonGroup : null}
            <SearchSortTable
                data={data}
                table={table}
                MAX_ITEMS={(hasOwnProperty(props, 'maxItems') === true) ? props.maxItems : 50}
                eachRowInTable={eachRowInTable}
                startEnd={startEnd}
                indexing={indexing}
                checkedFunct={processAllChecks}
                error={props.error}
                number={1}
                scroll
                nofilter={hasOwnProperty(props, 'nofilter')}
                nopdf={hasOwnProperty(props, 'nopdf')}
                noexcel={hasOwnProperty(props, 'noexcel')}
                resetIndexes={count}
                noheaderborder
                sfbottom
                height={(hasOwnProperty(props, 'height') === true) ? props.height : "675px"}>
            </SearchSortTable>
            {(placement === 'bottom') ? buttonGroup : null}
            <ConfirmModal show={showConfirm} yesFunct={functYes} closeFunct={setShowConfirm} message={confirmMessage} />
        </div>
    )
}

