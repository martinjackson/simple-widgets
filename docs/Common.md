# Common Functions

Contains common functions that can be useful.

1.  **sanitize**<br>
    This method will sanitize any free format entry by making sure the text does not start with a colon (:).

    Parameters:
    -  text = the text that is to be checked for any problems
    -  item = used to identify the item being sanitized
 
    Returns an object that contains a valid field and a message field.  The valid field is a boolean value that returns true if the text is sanitized and false if it does not.  The message field will be blank if the valid field is true.  The message field will contain a message of why the field in not valid if the valid field is false.

    Example:
    ```javascript
    let san1 = sanitize('SELECT Item', 'RECORD');
    let san2 = sanitize(':SQL InjectionItem', 'RECORD');
    let san3 = sanitize('This is an ok record', 'RECORD');
    ```

    Result:<br>
        san1: { valid: false, message: "Record can not start with the word SELECT" }<br>
        san2: { valid: false, message: "Record can not start with a colon (:)" }<br>
        san3: { valid: true, message: "" }

2.  **formatMoney**<br>
    This function will take a floating point value and format it as a dollar amount.  It will contain a $ at the front of the number, commas in the appropriate places (every three decimal places from right to left), a decimal point, and two digits right of the decimal.

    For example: 12345.6789, will transformed to $12,345.68.

    Parameters:
    -  amount = the floating point number to be translated in the money format
    -  decimalCount = number of places right of the decimal point (default is 2 if not present)
    -  decimal = symbol for the decimal point (default is a period (.), if not present)
    -  thousands = the seperator of every three digits from right to left (default is a comma (,), if not present)
    -  dollarSign = the value at the beginning of the number (default is a dollar sign ($), if not present)

    Example:
    ```javascript
    let money = formatMoney(1234.56);               Result: $1,234.56
    ```