# **CSS Rule Functions**

This set of functions will allow CSS Rules to be deleted or inserted into a stylesheet dynamically.  The stylesheets can also be printed to the console.log.

1.  **findCssRule**<br>
    This will ind all the rules that match the name of the search rule in the CSS Rules (selectorText) in a stylesheet.  The search rule can be a class name, id selector, etc.)  First print out the CSS Rules to find the value to be manipulated.

    Parameters:<br>
    -  searchRule = the rule to search for in the stylesheet

    Returns:<br>
    -  an array of objects that contains the sheetIndex, where the rule was found, and the index into that sheet.

    **Example:**
    ```javascript
    let theRules = findCssRule('.test');
    ```

    If the class test was found in the first stylesheet in the 53rd position, the following would be returned into theRules { sheetIndex: 0, index: 52 }.

2.  **deleteCssRule**<br>
    This will delete a CSS rule from a stylesheet.

    Parameters:<br>
    - searchRule = the rule to be deleted.  It uses the selectorText field in the CSS rule to find the correct rule.  Print out the rules to find the rule to be deleted.

    **Example**
    ```javascript
    deleteCssRule('.test');
    ```

    This will delete the rule .test from the stylesheet.

3.  **findStyleSheet**<br>
    This will find a stylesheet based on the title of the stylesheet; therefore, each stylesheet should have a title on it.  To place a title on a style sheet:

    ```html
      <link rel="stylesheet" href="./dist/main.css" title="main"/>
    ```

    Parameters:<br>
    - title = the title of the style sheet

    Returns:<br>
    - returns the index of the style sheet in the style sheet array (document.styleSheets)

    **Example**
    ```javascript
    let index = findStyleSheet('main');
    ```

    This will return the index of where the style sheet with the name of main is within the document.styleSheets.

4.  **insertCssRule**<br>
    This will insert a new rule into a stylesheet.

    Parameters:<br>
    - stylesheetTitle = the title of the style sheet to insert the CSS rule
    - newRule = the new rule to add to the style sheet

    **Example**
    ```javascript
    insertRule ('main', '.test { color: red }');
    ```

    This will insert the CSS rule below into the stylesheet with a title of main:
    ```css
    .test {
        color: red;
    }
    ```

5.  **printCssRules**<br>
    This will print out the stylesheet and all the rules within the stylesheet.  The rules will be printed to the console.log.

    No parameters.

    **Example**
    ```javascript
    printCssRules();
    ```