/***********************************************************************************
 * 
 * The default theme settings.
 * 
 ***********************************************************************************/
export const defaultThemeSettings = {
    backgroundColor: 'aliceblue',
    buttonColor: 'blue',
    buttonTextColor: 'white',
    buttonFont: 'Times New Roman',
    buttonFontWeight: 'bold',
    buttonFontSize: 12,
    disableButtonColor: 'gray',
    font: 'Times New Roman',
    fontWeight: 'plain',
    fontSize: 12,
    errorColor: 'pink',
    normalColor: 'white',
    textColor: 'black',
};

/***********************************************************************************
 * 
 * The default button style.
 * 
 ***********************************************************************************/
export const buttonStyle = {
    margin: "10px",
    borderRadius: "10px",
    color: defaultThemeSettings.buttonTextColor,
    backgroundColor: defaultThemeSettings.buttonColor,
    width: "100px",
    height: "30px",
    font: defaultThemeSettings.buttonFont,
    fontWeight: "bold",
};


/*********************************************************************
 * 
 * 04-23-2020   Initial check-in.
 * 09-16-2020   Added the getNormalBackColor and getErrorColor 
 *              functions.
 * 
 *********************************************************************/

/********************************************************************************
 * 
 * This will generate a button and will determine if the button should be
 * disabled or not.
 * 
 * @param {*} style         the style used for the button 
 * @param {*} error         indicates whether an error occurred and if so, disable 
 *                          the button
 * @param {*} disabled      indicates whether the button should be disabled or not
 * @param {*} disableColor  the color for the disabled button (default is gray)
 * 
 *********************************************************************************/
export const generateButton = (style, error, disabled = false, disableColor = 'gray') => {
    const genButtonStyle = Object.assign ({}, style); // Copy the button style
    if (error === true || disabled === true) {  // Change certain buttons to the disable color to reflect the buttons have been disabled due to an error
        genButtonStyle.backgroundColor = disableColor;
    } else {    // Do not disable the button
        // Make sure the style has a background color, if not use the theme color
        genButtonStyle.backgroundColor = (style.hasOwnProperty('backgroundColor') === true) ? 
            style.backgroundColor : Theme.getBackgroundColor();
    }

    return genButtonStyle;  // Return the button
}

/********************************************************************************
 * 
 * This will generate a button and will determine if the button should be
 * disabled or not.
 * 
 * @param {*} error         indicates whether an error occurred and if so, disable 
 *                          the button
 * @param {*} disabled      indicates whether the button should be disabled or not
 * 
 *********************************************************************************/
export const generateDefaultButton = (error, disabled = false) => {
    const genButtonStyle = Object.assign ({}, Theme.getButtonStyle()); // Copy the button style
    if (error === true || disabled === true) {  // Change certain buttons to the disable color to reflect the buttons have been disabled due to an error
        genButtonStyle.backgroundColor = Theme.getDisableButtonColor();
    } else {    // Do not disable the button
        // Make sure the style has a background color, if not use the theme color
        genButtonStyle.backgroundColor = Theme.getBackgroundColor();
    }

    return genButtonStyle;  // Return the button
}

