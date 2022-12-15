# **Theme**

Theme allows the user to standardize their screens to the same background color, button style, font, error color, etc.

Theme will also allow you to change the theme settings by changing variables or classes.

Theme will also contains a theme button style.

***Other CSS files and simple widget components that use theme.css***

1. checkboxRadio.css
2. contextMenuHover.css
3. doubleListBox.css
4. inputFile.css
5. table.css
6. AlertModal
7. ConfirmModal
8. DoubleListBox
9. ErrorModal
10. InputFile
11. Invalid
12. SearchSortTable

The following CSS variables are available for theming:

| Name | Value     | Variable |
|  :--------------- | :-------- | :--------------- |
| Background Color | aliceblue | --sw-theme_backgroundColor |
| Button Margin |10px | --sw-theme_buttonMargin |
| Button Border Radius |blue | --sw-theme_buttonRadius |
| Button Width |100px | --sw-theme_buttonWidth |
| Button Height |30px | --sw-theme_buttonHeight |
| Button Color |blue | --sw-theme_buttonColor |
| Button Text Color | white | --sw-theme_buttonTextColor |
| Button Font | Times New Roman | --sw-theme_buttonFont |
| Button Font Weight | bold | --sw-theme_buttonFontWeight |
| Button Font Size | 12 | --sw-theme_buttonFontSize |
| Disable Button Color | gray | --sw-theme_disableButtonColor |
| Font | Times New Roman | --sw-theme_font |
| Font Weight | plain | --sw-theme_fontWeight |
| Font Size | 12 | --sw-theme_fontSize |
| Error Color | pink | --sw-theme_errorColor |
| Normal Background Color | white | --sw-theme_normalColor |
| Text Color | black | --sw-theme_textColor |

1. --sw-theme_backgroundColor - the background color of all components
2. --sw-theme_buttonMargin = the margin around all buttons
3. --sw-theme_buttonRadius - the border radius around all buttons
4. --sw-theme_buttonWidth - the width of all buttons
5. --sw-theme-buttonHeight - the height of all buttons
6. --sw-theme-buttonColor - the background color of all buttons
7. --sw-theme_buttonTextColor - the color of the text in all buttons
8. --sw-theme_buttonFont - the font for the text in all buttons
9. --sw-theme_buttonFontWeight - the font weight for the text in all buttons
10. --sw-theme_buttonFontSize - the font size for the text in all buttons
11. --sw-theme_disableButtonColor - the background color of a button when it is disabled
12. --sw-theme_font - the overall font for all components, except themed buttons
13. --sw-theme_fontWeight - the overall font weight for all components, except themed buttons
14. --sw-theme_fontSize - the overall font size for all components, except themed buttons
15. --sw-theme_errorColor - the background color a component turns when there is an error for that component
16. --sw-theme_normalColor - the normal background color for a component, , except themed buttons
17. --sw-theme_textColor - the text color for all components, except themed buttons

The normal background color and error color are used in error notification.
If there is an error, the field will have the error color.  If there is not an error for that field, the field will have the normal background color.

**The theme button Class:**

```css
.sw-theme_buttonStyle {
    margin: var(--sw-theme_buttonMargin);
    border-radius: var(--sw-theme_buttonRadius);
    color: var(--sw-theme_buttonTextColor);
    width: var(--sw-theme_buttonWidth);
    height: var(--sw-theme_buttonHeight);
    font: var(--sw-theme_buttonFont);
    font-size: var(--sw-theme_buttonFontSize);
    font-weight: var(--sw-theme_buttonFontWeight);
  };
```

This is the theme for all buttons in a project.  This class can be used to make all the buttons throughout the project.  If you notice there is no background color, since the color can change if disabled or not.  To get the background color, the theme is normally used with either sw-theme_normalButtonBackground or sw-theme_grayButtonBackground classes (see below).  The user can either change the variable or
the theme_buttonStyle class in the CSS.

### **Example with some of the using some of the above fields:**

```javascript
import 'sw-theme.css';

<button name="save" className="sw-theme_buttonStyle">Save</button>
```

### Other Classes

1. ***sw-theme_grayButtonBackground Class*** = this class is used when a button is disabled.  If the generate button functions are used, it will automatically use this class.

```css
.sw-theme_grayButtonBackground {
    background-color: var(--sw-theme_disableButtonColor);
}
```

2. ***sw-theme_normalButtonBackground*** = this class is used for the normal background color of a button.  If the generate button functions are used, it will automatically use this class.

```css
.sw-theme_normalButtonBackground {
    background-color: var(--sw-theme_buttonColor);
}
```

3. ***sw-theme_errorBackground*** = this class is used to indicate that there is an error for this component.  If the invalid functions are used, it will automatically use this class.

```css
.sw-theme_errorBackground {
    background-color: var(--sw-theme_errorColor);
}
```

4. ***sw-theme_normalBackground*** = this class is used for the normal background color of a component.  If the invalid functions are used, it will automatically use this class.

```css
.sw-theme_normalBackground {
    background-color: var(--sw-theme_normalColor);
}
```



# **The Generate Button Functions**

Theme will also allow you to generate button styles that will allow the button colors to change if they are enabled or disabled.

To generate a button that uses an existing style and will allow the style to either set the button style to its standard color or to the disable color if the the disable value is true.  These functions must be called everytime the screen is rendered.

1.  **generateCSSButton**<br>
    This will generate a button and will determine if the button should be
    disabled or not.

    Parameters:
    - cssClassName = the CSS class name the defines the style for the button used for the button.  This is a string.
    - error = indicates whether an error occurred and if so, change the color to the disable color for the button.  This is a boolean variable and if true will set the button to the disable color.
    - disabled = indicates whether the button should be disabled or not.  This should be a boolean value and if true, it will be set to the disable color; otherwise, it will be its normal color (default is false)
    - noBackground = indicates that a background color should not be set if there is not an error (default is false).

    **Example:**
    ```javascript
    import { generateCSSButton } from 'simple-widgets';
    import '../node_modules/simple-widgets/lib/theme.css';

    let error = false;
    let disableValue = false;
    ...
    let genButtonStyle1 = generateCSSButton('sw-theme_buttonStyle',
                                    error, disableValue);
    let genButtonStyle2 = generateCSSButton('sw-theme_buttonStyle',
                                    error, true);
    let genButtonStyle3 = generateCSSButton('sw-theme_buttonStyle',
                                    error);
    ...
    <button className={genButtonStyle1}>Test 1</button>
    <button className={genButtonStyle2}>Test 2</button>
    <button className={genButtonStyle3}>Test 3</button>
    ```

    In getButtonStyle1 associated with button Test 1, if error or disableValue is true the button color will be gray; otherwise, the button color will be blue.

    In getButtonStyle2 associated with button Test 2, if error or disableValue is true the button color will be gray; otherwise, the button color will not be set; therefore, it will be the current background color.

    In getButtonStyle3 associated with button Test 3, if error is true the button color will be gray; otherwise, the button color will be blue.  Since no disabled value was given, that value will default to false.

2.  **generateCSSDefaultButton**<br>
    This will generate a button and will determine if the button should be
    disabled or not.  It will use the theme button style (see above for the theme button style) and the disable color of gray.

    Parameters:
    - error = indicates whether an error occurred and if so, disable the button
    - disabled = indicates whether the button should be disabled or not.  The default is false.

    **Example:**
    ```javascript
    import { generateCSSDefaultButton } from 'simple-widgets';
    import '../node_modules/simple-widgets/lib/theme.css';

    let error = false;
    let disableValue = false;
    ...
    let genButtonStyle1 = generateCSSDefaultButton(error, disableValue);
    let genButtonStyle2 = generateCSSDefaultButton(error);
    ...
    <button style={genButtonStyle1}>Test 1</button>
    <button style={genButtonStyle2}>Test 2</button>
    ```

    In getButtonStyle1 associated with button Test 1, if error or disableValue is true the button color will be gray; otherwise, the button color will be blue.  Since no button style can be given, it will use the default button style (see above for the default button style).  Since no disable color can be given, gray will be used.

    In getButtonStyle2 associated with button Test 2, if error is true the button color will be gray; otherwise, the button color will be blue.  Since no disable color was given, it will default to gray.  Since no button style can be given, it will use the default button style (see above for the default button style).  Since no disable color can be given, gray will be used.  Since no disable value was given, it will default to false.

