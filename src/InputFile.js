import React, { useState } from 'react';

const hasProperty = (obj, propName) => { return !!Object.getOwnPropertyDescriptor(obj, propName);}

export const InputFile = (props) => {
    const [displayFile, setDisplayFile] = useState('');
    const [inputFile, setInputFile] = useState('');

    let buttonName = 'Browse';
    if (hasProperty(props, 'buttonname')) {
        buttonName = props.buttonname;
    }

    const processFile = (value) => {
        console.log ('value', value);

        let index = value.lastIndexOf('\\');
        let file = value.substring(index + 1);
        console.log('file :', file);

        setInputFile(value);
        setDisplayFile(file);

        if (hasProperty(props, 'getFileName')) {
            props.getFileName(file, value);
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
            <label htmlFor="pfile" className="sw-infile_marginStyle">{props.title}</label>
            <input type="text" id="pfile" name="displayFile" value={displayFile} className="sw-infile_textStyle"
            onChange={(event) => processDisplay(event.target.value)} />
            <label htmlFor={props.id} className="sw-infile_buttonStyle  sw-theme_normalButtonBackground" >
                <input type="file" name={props.name} value={inputFile} id={props.id}
                    accept={(props.hasOwnProperty('accept')) ? props.accept : '' } className="sw-infile_fileStyle"
                    onChange={(event) => processFile(event.target.value)} />
                {buttonName}
            </label>
        </span>
    )
}
