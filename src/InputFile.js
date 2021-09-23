import React, { useState, useEffect } from 'react';

const hasProperty = (obj, propName) => { return !!Object.getOwnPropertyDescriptor(obj, propName);}

const InputFile = (props) => {
    const [inputFile, setInputFile] = useState('');
    const [displayFile, setDisplayFile] = useState('');

    const fileStyle = {
        display: "none",
    };
    
    let buttonStyle ={
        margin: "10px",
        borderRadius: "10px",
        color: "white",
        backgroundColor: "blue",
        fontWeight: "bold",
        padding: "5px",
        display: "inline-block",
        cursor: "pointer",
    }

    if (hasProperty(props, 'buttonStyle')) {
        buttonStyle = props.buttonStyle;
    }

    let textStyle = {
        width: "40em",
        height: "25px"
    }

    if (hasProperty(props, 'textStyle')) {
        textStyle = props.textStyle;
    }

    let buttonName = 'Browse';
    if (hasProperty(props, 'buttonname')) {
        buttonName = props.buttonname;
    }

    const processFile = (value) => {
        setInputFile(value);
        let index = value.lastIndexOf('\\');
        let file = value.substring(index + 1);
        setDisplayFile(file);

        if (hasProperty(props, 'getFileName')) {
            props.getFileName(file);
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

    const marginStyle = {
        marginRight: "10px",
    }

    return (
        <span className="InputFileClass">
            <label htmlFor={props.id} style={marginStyle}>{props.title}</label>
            <input file="text" id="pfile" name="displayFile" value={displayFile} style={textStyle} onChange={(event) => processDisplay(event.target.value)} />
            <label htmlFor={props.id} style={buttonStyle} >
                <input type="file" name={props.name} value={inputFile} id={props.id} accept={(props.hasOwnProperty('accept')) ? props.accept : '' } style={fileStyle} onChange={(event) => processFile(event.target.value)} />
                {buttonName}
            </label>
        </span>
    )
}

export default InputFile;