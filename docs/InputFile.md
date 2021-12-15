# Input File

This will allow a user to select a file from a file menu and the file name will be filled in the input box.
The bring up the file menu, the user must press the button to the right of the input box.  By default it will be Browse.  The user can not enter a file name in the input box, it can only be selected from the file menu.

## Props
1.  title is the title that goes before the input box.
2.  getFileName is a function that returns the file name.
3.  additionalProcessing is a function that does any additional processing after the file name has been selected.
4.  accept is a list of file extensions seperated by commas that are displayed in the file menu.
5.  buttonname is the name of the button to the right of the input box.  If no prop is given, the name of the button will be Browse.

## CSS File

The following CSS file will need to be imported into the file that uses this InputFile component.  The import would be, if it is not be changed:

```javascript
import '../node_modules/simple-widgets/lib/theme.css';
import '../node_modules/simple-widgets/lib/inputFile.css';
```

For more information on CSS files, see [Using CSS](./UsingCSS.md).

## inputFile.css

The classes in the file are:

1. ***sw-infile_fileStyle*** = displays the input box and button in the correct format.  This should not be changed.

```css
.sw-infile_fileStyle {
    display: none;
};
```

2. ***sw-infile_buttonStyle*** = the style of the button to the right of input box.  

```css
.sw-infile_buttonStyle {
    margin: var(--theme_buttonMargin);
    border-radius: var(--theme_buttonRadius);;
    color: var(--theme_buttonTextColor);
    font: var(--theme_buttonFont);
    font-weight: var(--theme_buttonFontWeight);
    font-size: var(--theme_buttonFontSize);
    padding: 5px;
    display: inline-block;
    cursor: pointer;
}
```

3. ***sw-infile_textStyle*** = the style of the input file box.

```css
.sw-infile_textStyle {
    width: 40em;
    height: 25px;
}
```

4. ***sw-infile_marginStyle*** = the margin between the input file box and the button.

```css
.sw-infile_marginStyle {
    margin-right: 10px;
}
```

## Example
```javascript
    import '../node_modules/simple-widgets/lib/theme.css';
    import '../node_modules/simple-widgets/lib/inputFile.css';
    
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
