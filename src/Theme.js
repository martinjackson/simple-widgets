import { hasOwnProperty } from './index.js'

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
    let genButtonStyle = {};
    if (style !== null) {
        genButtonStyle = Object.assign ({}, style); // Copy the button style
    }
    if (error === true || disabled === true) {  // Change certain buttons to the disable color to reflect the buttons have been disabled due to an error
        genButtonStyle.backgroundColor = disableColor;
    } else {

        // Do not disable the button
        // Make sure the style has a background color, if not use the theme color

        // eslint-disable-next-line no-undef
        const bc = Style(document.documentElement).getPropertyValue('--sw-theme_buttonColor')
        genButtonStyle.backgroundColor = (style !== null && hasOwnProperty(style, 'backgroundColor') === true) ?
            style.backgroundColor : bc


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
/*
exp--ort const generateDefaultButton = (error, disabled = false) => {

    // Jim, buttonStyle is undefined          vvvvvvvvvvv
    const genButtonStyle = Object.assign ({}, buttonStyle); // Copy the button style
    if (error === true || disabled === true) {  // Change certain buttons to the disable color to reflect the buttons have been disabled due to an error
        genButtonStyle.backgroundColor =
            getComputedStyle(document.documentElement).getPropertyValue('--sw-theme_disableButtonColor');
    } else {    // Do not disable the button
        // Make sure the style has a background color, if not use the theme color
        genButtonStyle.backgroundColor =
            getComputedStyle(document.documentElement).getPropertyValue('--sw-theme_buttonColor');
    }

    return genButtonStyle;  // Return the button
}
*/

/*****************************************************************************************************
 *
 * This will generate the CSS for a button, based on whether there is an error, disabled, or normal.
 * If there is an error or disabled is true, it will use the cssDisableName; otherwise, it is the
 * cssNormalName.
 *
 * Parameters:
 * @param cssClassName      the CSS class that descibes the button
 * @param error             boolean value indicating an error (true) or not (false)
 * @param disabled          boolean value indicating whether the button should be disabled (true) or not (false)
 * @param noBackground      boolean value indicating whether (false) or not (true) to use the normal background color
 * @param cssNormalName     the CSS class for the normal background color
 * @param cssDisableName    the CSS class for the error or disable background color
 *
 **************************************************************************************************** */
export const generateCSSButton = (cssClassName,
                                  error,
                                  disabled = false,
                                  noBackground = false,
                                  cssNormalName = 'sw-theme_normalButtonBackground',
                                  cssDisableName = 'sw-theme_grayButtonBackground') => {
    if (error === true || disabled === true) {
        return `${cssDisableName} ${cssClassName}`;
    } else {    // No error or disable
        if (noBackground === true) {
            return cssClassName;
        } else {
            return ` ${cssNormalName} ${cssClassName}`;
        }
    }
}

/*****************************************************************************************************
 *
 * This will generate the CSS for a button using the classes in the Theme.js file.  It will call the
 * generateCSSButton.
 *
 * Parameters:
 * @param error             boolean value indicating an error (true) or not (false)
 * @param disabled          boolean value indicating whether the button should be disabled (true) or not (false)
 *
 **************************************************************************************************** */
export const generateCSSDefaultButton = (error, disabled = false) => {
    return generateCSSButton('sw-theme_buttonStyle', error, disabled);
}