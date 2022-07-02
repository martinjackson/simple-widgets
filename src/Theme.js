
const hasProperty = (obj, propName) => { 
    if (!obj) {    // obj is null
       return false
    }
    return !!Object.getOwnPropertyDescriptor(obj, propName);
}


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
    } else {    // Do not disable the button
        // Make sure the style has a background color, if not use the theme color
        genButtonStyle.backgroundColor = (hasProperty(style, 'backgroundColor') ) ?
            style.backgroundColor : 
            getComputedStyle(document.documentElement).getPropertyValue('--sw-theme_buttonColor')
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

export const generateCSSButton = (cssClassName,
                                  error, 
                                  disabled = false,
                                  noBackground = false,
                                  cssNormalName = 'sw-theme_normalButtonBackground',
                                  cssDisableName = 'sw-theme_grayButtonBackground') => {
    if (error === true || disabled === true) {
        return `${cssClassName} ${cssDisableName}`;
    } else {
        if (noBackground === true) {
            return cssClassName;
        } else {
            return `${cssClassName} ${cssNormalName}`;
        }
    }
}

export const generateCSSDefaultButton = (error, disabled = false) => {
    generateCSSButton('sw-theme_buttonStyle', error, disabled);
}