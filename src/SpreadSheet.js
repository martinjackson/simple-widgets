import React, { useState, useEffect } from 'react';
import { client } from './client';
import CheckBox from './CheckBox.js';
import { Choice } from './List.js';
import { isInvalid, setInvalidTable, generateInvalid,
         checkValidityTable, validCheckTable, 
         clearInvalidTable, 
         processInvalidStyleTable, wasClickedTable} from './Invalid.js'
import AlertModal from './AlertModal.js';
import ErrorModal from './ErrorModal.js';
import ConfirmModal from './ConfirmModal.js';
import { generateCSSButton } from './Theme.js';
import SearchSortTable from './SearchSortTable.js';
import ChoiceText from './ChoiceText.js';
import Choice from './List.js';
import CheckBox from './CheckBox.js';
import Radio from './Radio.js';
import { sanitize } from './Common.js';
         
const hasProperty = (obj, propName) => {
    return !!Object.getOwnPropertyDescriptor(obj, propName);
}

let functYes = null;

const SpreadSheet = (props) => {
    const invalidArray = generateInvalid(0, props.sheet.length);

    const ADDITIONAL = (hasProperty(props, 'additionalRows') === true) ? props.additionalRows : 20;
    const ADD = (hasProperty(props, 'blankRows') === true) ? props.blankRows : 100;

    const [data, setData] = useState(props.data);
    const [start, setStart] = useState('');
    const [indexes, setIndexes] = useState([]);
    const [invalid, setInvalid] = useState(invalidArray);
    const [showConfirm, setShowConfirm] = useState(false);
    const [confirmMessage, setConfirmMessage] = useState('');

    let sheet = [...props.sheet];
    for (let i = 0; i < sheet.length; i++) {
        if (hasProperty(sheet[i], 'validate') === false) sheet[i]['validate'] = false;
        if (hasProperty(sheet[i], 'save') === false) sheet[i]['save'] = true;
        if (hasProperty(sheet[i], 'hidden') === false) sheet[i]['hidden'] = false;
        if (hasProperty(sheet[i], 'disabled') === false) sheet[i]['disabled'] = false;
    }

    const populateDirty = () => {
        let localData = [...props.data];

        for (let i = 0; i < localData.length; i++) {
            if (localData[i].count === 0) {
                for (let j = 0; j < localData[i].dirty.length; j++) {
                    if (localData[i][sheet[j].name] !== '' && localData[i][sheet[j].name] !== null && localData[i][sheet[j].name] !== undefined) {
                        localData[i].dirty[j] = true;
                        localData[i].count++;
                    }
                }
            }
        }

        setData(localData);
    }

    useEffect(() => {
        populateDirty();
        setData(props.data)
    }, [props.data]);

    const startEnd = (start, end) => {
        setStart(start);
        if (hasProperty(props, 'startEnd') === true) {
            props.startEnd(start, end);
        }
    }

    const indexing = (indexes) => {
        setIndexes(indexes);
        if (hasProperty(props, 'indexing') === true) {
            props.indexing(indexes);
        }
    }

    const populate = (numRows = ADD, clear = false) => {
        let blank = [];
        for (let i = 0; i < numRows; i++) {
            let obj = {
                count: 0,
                dirty: new Array(sheet.length).fill(false),
            };

            for (let j = 0; j < sheet.length; j++) {
                obj[sheet[j].name] = '';
            }
            
            blank.push(obj);
        }

        if (clear === true) {
            setData(blank);
        } else {
            setData (prev => [...prev, ...blank]);
        }
    }

    useEffect(() => {
        populate();
    }, [])



    const table = [];
    for (let i = 0; i < sheet.length; i++) {
        if (sheet[i].hidden === false) {
            table.push({ header: sheet[i].header, name: sheet[i].name, search: false, sort: false });
        }
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

        if (hasProperty(props, 'specialProcessing') === true) {
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
                        } else if (sheet[j].type === 'text' || sheet[j].type === 'textarea') {
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
            console.log('rowSheet :', rowSheet);

            if (rowSheet.hidden === false) {
                if (rowSheet.type === 'text' || rowSheet.type === 'date' || rowSheet.type === 'number') {
                    if (rowSheet.validate === true) {
                        html.push(<td className="sw-invalid_checkForError">
                                    <input type={rowSheet.type} name={rowSheet.name} value={row[rowSheet.name]} 
                                        onChange={(event) => processValue(event, pos, i)} 
                                        onClick={() => wasClickedTable(invalid, i, pos, setInvalid)} 
                                        disabled={props.error || rowSheet.disabled} 
                                        className={rowSheet.className + ' ' + processInvalidStyleTable(invalid, i, pos)}/>
                                    { checkValidityTable(invalid, i, pos) }
                                </td>);
                    } else {
                        html.push(<td>
                                    <input type={rowSheet.type} name={rowSheet.name} value={row[rowSheet.name]} 
                                        onChange={(event) => processValue(event, pos, i)} 
                                        className={rowSheet.className} disabled={props.error || rowSheet.disabled} />
                                </td>);
                    }
                } else if (rowSheet.type === 'textarea') {
                    if (rowSheet.validate === true) {
                        html.push(<td className="sw-invalid_checkForError">
                                    <textarea name={rowSheet.name} value={row[rowSheet.name]} 
                                        onChange={(event) => processValue(event, pos, i)} 
                                        onClick={() => wasClickedTable(invalid, i, pos, setInvalid)} 
                                        disabled={props.error || rowSheet.disabled} 
                                        className={rowSheet.className + ' ' + processInvalidStyleTable(invalid, i, pos)}/>
                                    { checkValidityTable(invalid, i, pos) }
                                </td>);
                    } else {
                        html.push(<td>
                                    <textarea name={rowSheet.name} value={row[rowSheet.name]} 
                                        onChange={(event) => processValue(event, pos, i)} 
                                        className={rowSheet.className} 
                                        disabled={props.error || rowSheet.disabled} />
                                </td>);
                    }
                } else if (rowSheet.type === 'Choice') {
                    if (rowSheet.validate === true) {
                        html.push(<td className="sw-invalid_checkForError">
                                    <Choice choices={rowSheet.choices} 
                                        name={rowSheet.name} value={row[rowSheet.name]} 
                                        onChange={(event) => processValue(event, pos, i)} 
                                        onClick={() => wasClickedTable(invalid, i, pos, setInvalid)} 
                                        disabled={props.error || rowSheet.disabled} 
                                        className={rowSheet.className + ' ' + processInvalidStyleTable(invalid, i, pos)}/>
                                    { checkValidityTable(invalid, i, pos) }
                                </td>);
                    } else {
                        html.push(<td>
                                    <Choice choices={rowSheet.choices} name={rowSheet.name} value={row[rowSheet.name]} 
                                        onChange={(event) => processValue(event, pos, i)} 
                                        className={rowSheet.className} disabled={props.error || rowSheet.disabled} />
                                </td>);
                    }
                } else if (rowSheet.type === 'ChoiceText') {
                    if (rowSheet.validate === true) {
                        html.push(<td className="sw-invalid_checkForError">
                                    <ChoiceText list={`sheetList_${i}_${pos}`} choices={rowSheet.choices}
                                        name={rowSheet.name} value={row[rowSheet.name]} 
                                        onChange={(event) => processValue(event, pos, i)} 
                                        onClick={() => wasClickedTable(invalid, i, pos, setInvalid)} 
                                        disabled={props.error || rowSheet.disabled} 
                                        className={rowSheet.className + ' ' + processInvalidStyleTable(invalid, i, pos)}/>
                                    { checkValidityTable(invalid, i, pos) }
                                </td>);
                    } else {
                        html.push(<td>
                                    <ChoiceText list={`sheetList_${i}_${pos}`} choices={rowSheet.choices}
                                        name={rowSheet.name} value={row[rowSheet.name]} 
                                        onChange={(event) => processValue(event, pos, i)} 
                                        className={rowSheet.className} disabled={props.error || rowSheet.disabled} />
                                </td>);
                    }
                } else if (rowSheet.type === 'CheckBox') {
                    html.push(<td>
                                <CheckBox selectedValue={rowSheet.selectedValue}
                                    name={rowSheet.name} value={row[rowSheet.name]} text={rowSheet.header}
                                    onChange={(event) => processValue(event, pos, i)} 
                                    className={rowSheet.className} disabled={props.error || rowSheet.disabled} />                          
                            </td>);
                } else if (rowSheet.type === 'Radio') {
                    html.push(<td>
                                <Radio selectedValue={rowSheet.selectedValue}
                                    name={rowSheet.name} value={row[rowSheet.name]} text={rowSheet.header}
                                    onChange={(event) => processValue(event, pos, i)} 
                                    className={rowSheet.className} disabled={props.error || rowSheet.disabled} />                          
                                </td>);
                } else if (rowSheet.type === 'button') {
                    html.push(<td>
                                <button name={rowSheet.name} 
                                        onClick={() => rowSheet.buttonOnClick(rowSheet.parameters, pos, data)} 
                                        className={genButtonStyle + ' ' + rowSheet.className} 
                                        disabled={props.error || rowSheet.disabled}>
                                    {rowSheet.name}
                                </button>
                            </td>)
                } else if (rowSheet.type === 'html') {
                    html.push(<td>
                                { rowSheet.html }
                            </td>);
                }
            }
        }

        return html;
    }

    const eachRowInTable = (row, i) => {
        let key = 'row_' + (start + i);
        let pos = indexes[i];

        let html = buildHTML(row, pos);

        return (
            <tr key={key}>
                { html.map(row => row) }
            </tr>
        )
    }

    const saveButton = async() => {
        if (validate() === true) {
            let localData = [...data];
            console.log('localData save :', localData);
            let newData = [];
            for (let i = 0; i < localData.length; i++) {
                if (localData[i].count > 0) {
                    newData.push(localData[i]);
                }
            }

            for (let i = 0; i < newData.length; i++) {
                if (hasProperty(props, 'specialProcessingSave') === true) {
                    newData[i] = props.specialProcessingSave (newData[i]);
                }

                delete newData[i].dirty;
                delete newData[i].count;
                
                for (let j = 0; j < sheet.length; j++) {
                    if (props.sheet[j].save === false) {
                        delete newData[i][sheet[j].name];
                    }
                }
            }

            if (newData.length !== 0) {
                props.saveFunct(newData);
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

    const genButtonStyle = generateCSSButton('sw-theme_buttonStyle', props.error);

    let title = null;

    if (hasProperty(props, 'title') === true) {
        title = <h1 className="sw-ss_center">{props.title}</h1>;
    }

    return (
        <div>
            {title}
            <SearchSortTable
                data={data}
                table={table}
                MAX_ITEMS={(hasProperty(props, 'maxItems') === true) ? props.maxItems : 50}
                eachRowInTable={eachRowInTable}
                startEnd={startEnd}
                indexing={indexing}
                error={props.error}
                scroll
                nosearch
                nofilter
                noheaderborder
                height={(hasProperty(props, 'height') === true) ? props.height : "675px"}>
            </SearchSortTable>
            <div className="sw-ss_center">
                {(hasProperty(props, 'noSave') === true) ? null : <button name="save" className={genButtonStyle} onClick={saveButton }>Save</button> }
                {(hasProperty(props, 'noClear') === true) ? null : <button name="clear" className={genButtonStyle} onClick={clearButton}>Clear</button> }
                {(hasProperty(props, 'noAddRows') === true) ? null : <button name="addrows" className={genButtonStyle} onClick={() => populate(ADDITIONAL)}>Add Rows</button> }
            </div>
            <ConfirmModal show={showConfirm} yesFunct={functYes} closeFunct={setShowConfirm} message={confirmMessage} />
        </div>
    )
}

export default SpreadSheet;