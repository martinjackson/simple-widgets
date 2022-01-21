# sw-entryform.css
      
This css file is used to align labels and input components so that they line up underneath each at the exact same position using a table grid.  The css file is also used to style regular tables.
   
The table class starts the table grid.
      
The row and specialRow classes indicates a row in the table grid.  The row generally consists of a div that contains a label and some type of input component.
      
The tLabel classes indicate the styling for the label in the div.  Each label for each row in the table must have the same tableLabel class.
      
The cell classes indicates the styling for the input component in the div.  Each input component for each row in the table must have the same cell class.

The w classes specify the width in ems and the text alignment.  The number after the w specifies the width in ems.  If there is a P after the number, this specifies a padding of 10px.  If there is a R after the number, the text alignment is right.
The w19 class, for example, specifies a width of 19em with a text alignment of left.  
The w19P class, specifies a width of 19em, a text alignment of left, and a padding of 10px.  
The w19R class specifies a width of 19em and a text alignment of right.  
The w19PR class specifies a width of 19em, a padding of 10px, and a text alignment of right.
Each w class has a left and right text alignment for that number; however, there may or may not have a padding class for that number.

To convert from px to em, there is a calculator for doing this at [Calculator](https://www.w3schools.com/tags/ref_pxtoemconversion.asp).
      
The th1, and td1 is used for placing a grid around a regular HTML table.
      
The table1 class is used for styling a regular HTML table.
      
***Example***
```javascript
<div className="sw-ef_table">
    <div className="sw-ef_row sw-invalid_checkForError">
        <label htmlFor="id_user" className="sw-ef_tLabel sw-ef_w12">User:</label>
        <ChoiceText id="id_user" list="listOfNames" choices={nameValues} name="addUser" value={addUser} onChange={(event) => processName(event.target.value)} onClick={() => wasClickedScreen(invalid, NAME, setInvalid)} className={"sw-ef_cell sw-ef_w19 " + processInvalidStyleScreen(invalid, NAME)} 
        disabled={error} />
        { checkValidityScreen(invalid, NAME) }
    </div>
    <div className="sw-ef_row sw-invalid_checkForError">
        <label htmlFor="id_role" className="sw-ef_tLabel sw-ef_w12">Role:</label>
        <Choice id="id_role" choices={roleNames} name="addRole" value={addRole} onChange={(event) => setAddRole(event.target.value)} onClick={() => wasClickedScreen(invalid, ROLE, setInvalid)} 
        disabled={error} 
        className={"sw-ef_cell sw-ef_w19 " + processInvalidStyleScreen(invalid, ROLE)} />
        { checkValidityScreen(invalid, ROLE) }
    </div>
    <div className="sw-ef_row sw-invalid_checkForError">
        <label htmlFor="id_active" className="sw-ef_tLabel sw-ef_w12">Active / Inactive:</label>
        <Choice choices={activeValues} name="addActive" value={addActive} onChange={(event) => setAddActive(event.target.value)} onClick={() => wasClickedScreen(invalid, AORI, setInvalid)} disabled={error} className={"sw-ef_cell sw-ef_w19 " + processInvalidStyleScreen(invalid, AORI)} />
        { checkValidityScreen(invalid, AORI) }
    </div>
</div>
```

The first div starts the table grid with className="table".  The table grid ends with the closing div.
The three consecutive divs after the first div, indicate a row in the table grid, with the className="row checkForError".
Each label in the three divs all have tLabel w12 (width of 12em and text alignment of left).  They should all have the same tableLabel if items are to line up correctly.
Each input component in the three divs all have cell w19 (width of 19em and text alignment of left).  They should all have the same cell if items are to line up correctly.
