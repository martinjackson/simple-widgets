const backgroundColor = 'aliceblue';
const buttonColor = 'blue';
const buttonTextColor = 'white';
const font = 'Times New Roman'
const errorColor = 'pink';
const normalColor = 'white';


/*********************************************************************
 * 
 * 04-23-2020   Initial check-in.
 * 
 *********************************************************************/

/*******************************************************************************
 *
 * This class contains functions that are common throughout the entire project,
 * and, therefore, can be used by any other module within the project
 *
 ******************************************************************************/
export default class Theme {
    /*****************************************************************************
     *
     *  The background color for all screens
     *
     ****************************************************************************/
    static getBackgroundColor() {
        return backgroundColor;
    }

    /*****************************************************************************
     *
     *  The button background color for all screens
     *
     ****************************************************************************/
    static getButtonBGColor() {
        return buttonColor;
    }

    /*****************************************************************************
     *
     *  The button foreground color for all screens
     *
     ****************************************************************************/
    static getButtonFGColor() {
        return buttonTextColor;
    }

    /*****************************************************************************
     *
     *  The button font type for all acreens
     *
     ****************************************************************************/
    static getButtonFont() {
        return font;
    }

    /*****************************************************************************
     *
     *  The background color for errors in text boxes, selects, radio buttons,
     *  checkboxes, textareas, etc, for all screens
     *
     ****************************************************************************/
    static getErrorColor() {
        return errorColor;
    }

    /*****************************************************************************
     *
     *  The normal background color in text boxes, selects, radio buttons,
     *  checkboxes, textareas, etc, for all screens
     *
     ****************************************************************************/
    static getNormalBackColor() {
        return normalColor;
    }

    /********************************************************************************
     * 
     * This will generate a button and will determine if the button should be
     * disabled or not.
     * 
     * @param {*} style         the style used for the button 
     * @param {*} error         indicates whether an error occurred and if so, disable 
     *                          the button
     * @param {*} disabled      indicates whether the button should be disabled or not
     * @param {*} disableColor  the color for the disabled button
     * 
     *********************************************************************************/
    static generateButton(style, error, disabled, disableColor) {
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

}