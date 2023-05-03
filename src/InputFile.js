/* eslint-disable react/no-unknown-property */
import React, { useState } from 'react';

import { hasOwnProperty } from './hasOwnProperty.js'

const hasProperty = (obj, propName) => { return !!Object.getOwnPropertyDescriptor(obj, propName);}

export const InputFile = (props) => {
    const [displayFile, setDisplayFile] = useState('');

    let buttonName = 'Browse';
    if (hasProperty(props, 'buttonname')) {
        buttonName = props.buttonname;
    }

    const processFile = (file) => {
        setDisplayFile(file.name);

        if (hasProperty(props, 'getFileName')) {
            props.getFileName(file.name, file);
        }

        if (hasProperty(props, 'additionalProcessing')) {
            props.additionalProcessing();
        }
    }

    const processDisplayDefault = (value) => {
        console.log ('file', value);
    }

    let processDisplay = processDisplayDefault;
    if (hasProperty(props, 'processDisplay')) {
        processDisplay = props.processDisplay;
    }

    return (
        <span className="InputFileClass">
            <label htmlFor={props.id} className="sw-infile_marginStyle">{props.title}</label>
            <input file="text" id="pfile" name="displayFile" value={displayFile} className="sw-infile_textStyle" onChange={(event) => processDisplay(event.target.value)} />
            <label htmlFor={props.id} className="sw-infile_buttonStyle  sw-theme_normalButtonBackground" >
                <input type="file" id={props.id} accept={(hasOwnProperty(props, 'accept')) ? props.accept : '' } className="sw-infile_fileStyle" onChange={(event) => processFile(event.target.files[0])} />
                {buttonName}
            </label>
        </span>
    )
}
