# Using the CSS files in simple-widgets

To use the CSS files in your project:

1.  Copy the css files from the library into the public directory of your project.  ***There might be a postinstall script in your package.json to do this.  If you plan on changing the css you might want to remove this script after you do the initial install.***
```
    cd your-project-name
    npm install
    cp ./node_modules/simple-widgets/lib/*.css ./public/
```
2.  In the index.html file in the public directory, in the <head> section of the HTML, place the following:
```html
    <link rel="stylesheet" href="contextMenuHover.css" />
    <link rel="stylesheet" href="modal.css" />
    <link rel="stylesheet" href="mousehover.css" />
    <link rel="stylesheet" href="slider(num).css" />
    <link rel="stylesheet" href="table.css" />
```

The above css files are now avaliable to any file in the src directory.  There is ***no*** need to import the css files in the source files.

## CSS Files in simple-widgets

The css files in the simple-widgets library are:
1.  contextMenuHover.css
2.  modal.css
3.  mousehover.css
4.  slider1.css to slider5.css
5.  table.css
  
### contextMenuHover.css
  
  This css file is used with the ContextMenu component in the simple-widgets library.
  
  The div.contextMenuHov class is used to determine its location on the screen, which generally just to the right of where the context menu was selected.
  
  The span.contextMenuHov:hover class is used to indicate the color of the highlighted item in the context menu.
  
### modal.css
  
  This css file is used with the AlertModal, ConfirmModal, ErrorModal, and Modal components in the simple-widgets library.
  
  The modalButton class is used to style the button next to the username.  The button is styled as just a period to the right of the username.

  The modal class describes the position of the modal on the screen and the background color of the modal that covers the screen behind the modal.

  The modal > div class describes the div within the modal.
  
### mousehover.css
  
  This is used with the Invalid functions in the simple-widgets library.
  
  The css in this file is used to display error message next to the component that is causing the error.  The component will be in pink when there is an error.  There error message will be displayed when you hover over the pink component.
  
  The checkForError class indicates the position of the error message box, which is to the right of the component that caused the error.
  
  The errMessage class styles the error message box.
  
  The ceckForError: hover .errMessage class will display the error message box when the mouse is hovered over the component that caused the error (the pink component).
  
  ***Example***
  
  ```javascript
    <div className="row checkForError">
        <label htmlFor="id_user" className="tableLabel9">User:</label>
        <ChoiceText id="id_user" list="listOfNames" choices={nameValues} name="addUser" value={addUser} className="cell5" onChange={(event) => processName(event.target.value)} onClick={() => wasClickedScreen(invalid, NAME, setInvalid)} style={processInvalidStyleScreen(invalid, NAME)} disabled={error} />
        { checkValidityScreen(invalid, NAME) }
    </div>
```

The wasClickedScreen, processInvalidStyleScreen, and checkValidityScreen are all part of the invalid functions.
      
The only class name is checkForError which is for the entire div.
      

### slider1.css to slider5.css

These five slider CSS files are 5 different sliders the user can have in their project.  See the slider documentation for more information.  [Slider](./Slider.md)

### table.css
      
   This css file is used to align labels and input components so that they line up underneath each at the exact same position using a table grid.  The css file is also used to style regular tables.
   
   The table class starts the table grid.
      
   The row and specialRow classes indicates a row in the table grid.  The row generally consists of a div that contains a label and some type of input component.
      
   The tableLabels 1 to 8 classes indicate the styling for the label in the div.  Each label for each row in the table must have the same tableLabel class.
      
   The cell 1 to 7 classes indicates the styling for the input component in the div.  Each input component for each row in the table must have the same cell class.
      
   The choice-style and special_choice_style are used for styling Choice (input) components in the div.
      
   The th1, and td1 is used for placing a grid around a regular HTML table.
      
   The table1 class is used for styling a regular HTML table.
      
   The root and table.search_sort_table items are used by the SearchSortTable component to keep track of the hover colors that have been used and should not changed at all.
      
   ***Example***
   ```javascript
     <div className="table">
        <div className="row checkForError">
            <label htmlFor="id_user" className="tableLabel8">User:</label>
            <ChoiceText id="id_user" list="listOfNames" choices={nameValues} name="addUser" value={addUser} className="cell5" onChange={(event) => processName(event.target.value)} onClick={() => wasClickedScreen(invalid, NAME, setInvalid)} style={processInvalidStyleScreen(invalid, NAME)} disabled={error} />
            { checkValidityScreen(invalid, NAME) }
        </div>
        <div className="row checkForError">
            <label htmlFor="id_role" className="tableLabel8">Role:</label>
            <Choice id="id_role" choices={roleNames} name="addRole" value={addRole} onChange={(event) => setAddRole(event.target.value)} onClick={() => wasClickedScreen(invalid, ROLE, setInvalid)} className="cell5"  disabled={error} style={processInvalidStyleScreen(invalid, ROLE)} />
            { checkValidityScreen(invalid, ROLE) }
        </div>
        <div className="row checkForError">
            <label htmlFor="id_active" className="tableLabel8">Active / Inactive:</label>
            <Choice choices={activeValues} name="addActive" value={addActive} onChange={(event) => setAddActive(event.target.value)} onClick={() => wasClickedScreen(invalid, AORI, setInvalid)} className="cell5"  disabled={error} style={processInvalidStyleScreen(invalid, AORI)} />
            { checkValidityScreen(invalid, AORI) }
        </div>
    </div>
   ```
The first div starts the table grid with className="table".  The table grid ends with the closing div.
The three consecutive divs after the first div, indicate a row in the table grid, with the className="row checkForError".
Each label in the three divs all have tableLabel8.  They should all have the same tableLabel if items are to line up correctly.
Each input component in the three divs all have cell5.  They should all have the same cell if items are to line up correctly.


   
