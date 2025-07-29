/***************************************************************************
 * 
 * This will convert a date from the YYYY-MM-DD format to the MM/DD/YYYY 
 * format.
 * 
 * @param {*} convDate the date in the YYYY-MM-DD format
 * 
 ***************************************************************************/
export const convertDate = (convDate) => {
    if (convDate === null) return null;
    if (convDate.indexOf('-') === -1) return convDate;

    let date = convDate.split('-');
    return date[1] + '/' + date[2] + '/' + date[0]; 
}

/****************************************************************************
 * 
 * This will convert a date and time in the YYYY-MM-DDTHH:MM:SS.sss format
 * to the MM/DD/YYYY HH:MM:SS format.
 * 
 * @param {*} dateAndTime the date in the YYYY-MM-DDTHH:MM:SS.sss format
 * 
 ****************************************************************************/
export const dateTime = (dateAndTime) => {
    if (dateAndTime === null) return null;

    let splitDT = dateAndTime.split('T');   // Split the date and time
    let date = splitDT[0].split('-');       // Split the date
    let partTime = splitDT[1].split('.');   // Remove the microseconds
    let time = partTime[0].split(':');      // Split the time

    return date[1] + '/' + date[2] + '/' + date[0] + ' ' +
                time[0] + ':' + time[1] + ':' + time[2];
}

/***************************************************************************
 * 
 * If value contains a single digit, it will place a 0 in front of the
 * single digit.
 * 
 * @param {*} value the value to determine whether a 0 should be placed
 *                  in front of the single digit
 * 
 ****************************************************************************/
export const addDigit = (value) => {
    let newValue = null;        // Value to be returned
    if (value.length === 1) {   // Value is a single digit
        newValue = '0' + value;
        return newValue;
    }

    return value;
}

/*****************************************************************************
 * 
 * This will return the current date and time in the MM/DD/YYYY HH:MM:SS 
 * format.
 * 
 *****************************************************************************/
export const currentDateTime = () => {
    let today = new Date(); // Current date and time
    return addDigit((today.getMonth() + 1).toString()) + '/' + 
            addDigit(today.getDate().toString()) + '/' + 
            today.getFullYear().toString() + ' ' +
            addDigit(today.getHours().toString()) + ':' + 
            addDigit(today.getMinutes().toString()) + ':' + 
            addDigit(today.getSeconds().toString()); 
}

/*****************************************************************************
 * 
 * This will return the current date in the MM/DD/YYYY format.
 * 
 *****************************************************************************/
export const currentDate = () => {
    let today = new Date();
    return addDigit((today.getMonth() + 1).toString()) + '/' + 
           addDigit(today.getDate().toString()) + '/' + 
           today.getFullYear().toString();
}

/*****************************************************************************
 * 
 * This will return the date that Oracle expects to receive as a string.  The
 * format will be YY-MON-DD HH:MM:SS.sss.
 * 
 ******************************************************************************/
export const currentDBDateTime = () => {
    let today = new Date();
    
    return  addDigit(today.getDate().toString()) + '-' +
            monthName(today.getMonth()) + '-' +             // Month as a three letter abbreviation
            today.getFullYear().toString().substr(2, 2) + ' ' +  // Two digit year
            addDigit(today.getHours().toString()) + ':' + 
            addDigit(today.getMinutes().toString()) + ':' + 
            addDigit(today.getSeconds().toString()) + '.' +
            today.getMilliseconds().toString();
}

/*********************************************************************************
 * 
 * This will place the current date in the YYYY-MM-DD format.
 * 
 *********************************************************************************/
export const currentDBDate = () => {
    let today = new Date(); // Get the current date

    return  addDigit(today.getDate().toString()) + '-' +
            monthName(today.getMonth()) + '-' +             // Month as a three letter abbreviation
            today.getFullYear().toString().substr(2, 2);  // Two digit year
}

/**********************************************************************************
 * 
 * The will take a date in the MM/DD/YYYY format and convert it to the YYYY-MM-DD 
 * format.
 * 
 * @param {*} date  the date in the MM/DD/YYYY format
 * 
 **********************************************************************************/
export const dbDate = (date) => {
    let split = date.split('/');    // Divide the MM/DD/YYYY into individual components
    return split[2] + '-' + // Convert to the YYYY-MM-DD format
            split[0] + '-' +
            split[1];
}

/*****************************************************************************
 *
 *  This will convert month as a number into a three letter month name.
 *
 *  @param month the month as a number between 0 and 11
 *
 *  @return returns the three letter month abbreviation
 *
 ****************************************************************************/
export const monthName = (month) => {
    switch (month) {
        case 0: return 'JAN';
        case 1: return 'FEB';
        case 2: return 'MAR';
        case 3: return 'APR';
        case 4: return 'MAY';
        case 5: return 'JUN';
        case 6: return 'JUL';
        case 7: return 'AUG';
        case 8: return 'SEP';
        case 9: return 'OCT';
        case 10: return 'NOV';
        case 11: return 'DEC';
    }
}

