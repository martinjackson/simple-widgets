
/*****************************************************************************
 *
 *  This method will sanitize any free format entry by making sure the text
 *  does not start with a colon (:).
 *
 *  @param text the text that is to be checked for any problems
 *  @param item Used to identify the item being sanitized
 *
 *  @return returns an object that contains a valid field and a message
 *          field.  The valid field is a boolean value that returns true if 
 *          the text is sanitized and false if it does not.  The message field
 *          will be blank if the valid field is true.  The message field will
 *          contain a message of why the field in not valid if the valid field
 *          is false.
 *
 ****************************************************************************/
export function sanitize(text, item) {
    const table = [
        'SELECT',
        'DELETE',
        'INSERT',
        'UPDATE',
        'ALTER'
    ];
    let message = null;

    if (text === null || text === '') {
        return { valid: true, message: ''};
    }

    if (text.startsWith(':')) { // Check to see if the text starts with a colon (:)
        message = item + ' can not start with a colon (:)';
        return { valid: false, message: message };
    }

    for (let i = 0; i < table.length; i++) {
        if (text.toUpperCase().startsWith(table[i])) {
            message = item + ' can not start with the word ' + table[i];
            return { valid: false, message: message };
        }
    }

    return { valid: true, message: ''} ;  // No problems encountered
}

/********************************************************************************************
 * 
 * This function will take a floating point value and format it as a dollar amount.  It will
 * contain a $ at the front of the number, commas in the appropriate places (every three 
 * decimal places from right to left), a decimal point, and two digits right of the decimal.
 * For example: 12345.6789, will transformed to $12,345.68.
 * 
 * @param {*} amount        the floating point number to be translated in the money format
 * @param {*} decimalCount  number of places right of the decimal point (default is 2 if not 
 *                          present)
 * @param {*} decimal       symbol for the decimal point (default is a period (.), if not 
 *                          present)
 * @param {*} thousands     the separator of every three digits from right to left (default
 *                          is a comma (,), if not present)
 * @param {*} dollarSign    the value at the beginning of the number (default is a dollar 
 *                          sign ($), if not present)
 * 
 **********************************************************************************************/
export function formatMoney(amount, decimalCount = 2, decimal = ".", thousands = ",", dollarSign = '$') {
    try {
        // Truncate to the appropriate number of decimals after the decimal point
        decimalCount = Math.abs(decimalCount);
        decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
    
        // Determine if the number is negative or positive
        const negativeSign = amount < 0 ? "-" : "";
    
        // Determine where the thousands separators belong in the number
        let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
        let j = (i.length > 3) ? i.length % 3 : 0;
    
        // Return the money formatted number
        return dollarSign + negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
    } catch (e) {
        console.log(e)
    }
}
