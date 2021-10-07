# Input File

This will allow a user to select a file from a file menu and the file name will be filled in the input box.
The bring up the file menu, the user must press the button to the right of the input box.  By default it will be Browse.  The user can not enter a file name in the input box, it can only be selected from the file menu.

## Props
1.  title is the title that goes before the input box.
2.  getFileName is a function that returns the file name.
3.  additionalProcessing is a function that does any additional processing after the file name has been selected.
4.  accept is a list of file extensions seperated by commas that are displayed in the file menu.
5.  buttonname is the name of the button to the right of the input box.  If no prop is given, the name of the button will be Browse.
6.  textStyle is the style of the input box.  The default is:
```javascript
    let textStyle = {
        width: "40em",
        height: "25px"
    }
```
7.  buttonStyle is the style of the button to the right of input box.  The default is:
```javascript
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
```

## Example
```javascript
    const addProcessFile = (value) => {
        setDisable(false);
    }

    const processFileName = (file) => {
        console.log ('filename', file);
    }
    
    return ( 
        <div>
                <InputFile title="Payroll File:" 
                           name="payrollfile" 
                           id="id_payroll_file" 
                           accept=".xlsx" 
                           additionalProcessing={addProcessFile}
                           getFileName={processFileName} />
        </div>
    )
```
The title that goes before the input box is Payroll File.  The file menu will only display files with extensions of .xlsx, because of the accept prop.  After the file has been selected the addProcessFile and processFileName functions will be executed because of the additionalProcessing and getFileName props respectively.
