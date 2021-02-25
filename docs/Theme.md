# **Theme**

Theme allows the user to standardize their screens to the same background color, button style, font, error color, etc.  

Theme will also allow you to change the theme settings by changing all the settings, a single setting, or multiple settings.

Theme will also allow you to generate button styles that will allow the button colors to change if they are enabled or disabled.

Theme will also allow you to retrieve and set a default button style.

The following fields are available for theming:

| Name | Value     | Field |
|  :--------------- | :-------- | :--------------- |
| Background Color | aliceblue | backgroundColor |
| Button Color |blue | buttonColor |
| Button Text Color | white | buttonTextColor |
| Button Font | Times New Roman | buttonFont |
| Button Font Weight | bold | buttonFontWeight |
| Button Font Size | 12 | buttonFontSize |
| Disable Button Color | gray | disableButtonColor |
| Font | Times New Roman | font |
| Font Weight | plain | fontWeight |
| Font Size | 12 | fontSize |
| Error Color | pink | errorColor |
| Normal Background Color | white | normalColor |
| Text Color  black | textColor |

The normal background color and error color are used in error notification.
If there is an error, the field will have the error color.  If there is not an error for that field, the field will have the normal background color.

**The default theme settings object:**

```javascript
const defaultThemeSettings = {
    backgroundColor: 'lightblue',
    buttonColor: 'yellow',
    buttonTextColor: 'white',
    buttonFont: 'Sanserif',
    buttonFontWeight: 'plain',
    buttonFontSize: 10,
    disableButtonColor: 'gray',
    font: 'Sanserif',
    fontWeight: 'plain',
    fontSize: 10,
    errorColor: 'pink',
    normalColor: 'white',
    textColor: 'black',
};
```

### **Example with some of the using some of the above fields:**

```javascript
import { defaultThemeSettings } from 'simple-widgets';

const Theme = [...defaultThemeSettings];

const screenStyle = {
    backgroundColor: Theme.backgroundColor,
    font: Theme.font,
    fontSize: Theme.fontSize,
    color: Theme.textColor,
};

const buttonStyle = {
    margin: "10px",
    borderRadius: "10px",
    color: Theme.buttonColor(),
    backgroundColor: Theme.buttonTextColor,
    width: "100px",
    height: "30px",
    font: Theme.buttonFont(),
    fontWeight: "bold",
}

```

### **To overwrite the some of the theme settings or to add new ones:**

### **Override Example:**
```javascript
import { defaultThemeSettings } from 'simple-widgets';

const override = {
    buttonColor: 'yellow',
    buttonTextColor: 'blue',
    backgroundColor: 'lightBlue',
}

const Theme = [...defaultThemeSettings, ...override];
```

**Another way to override theme settings:**
```javascript
import { defaultThemeSettings } from 'simple-widgets';

let Theme = [...defaultThemeSettings];
Theme.buttonColor = 'yellow';
Theme.buttonTextColor = 'blue';
Theme.backgroundColor = 'lightBlue';
```

### **To add theme settings:**
```javascript
import { defaultThemeSettings } from 'simple-widgets';

const additional = {
    paragraphBackColor: 'yellow',
    paragraphTextColor: 'black',
}

const Theme = [...defaultThemeSettings, ...additional];
```

### **To both override and add new theme items:**

```javascript
import { defaultThemeSettings } from 'simple-widgets';

const overrideAdd = {
    buttonColor: 'yellow',
    buttonTextColor: 'blue',
    backgroundColor: 'lightBlue',
    paragraphBackColor: 'yellow',
    paragraphTextColor: 'black',
}

const Theme = [...defaultThemeSettings, ...overrideAdd];
```

### **The button style allows all buttons in the application to look the same:**

```javascript
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
```

### **To access the button style:**

```javascript
import { buttonStyle } from 'simple-widgets';

<button style={buttonStyle}>Test</button>
```

**To change values on the button style:**

```javascript
import { buttonStyle } from 'simple-widgets';

const override = {
    backgroundColor: 'yellow',
    color: 'red',
};

const newButtonStyle = [...buttonStyle, ...override];

<button style={newButtonStyle}>Test</button>
```

### **Another way to change the values on the button style:**

```javascript
import { buttonStyle } from 'simple-widgets';

let newButtonStyle = [...buttonStyle];
newButtonStyle.backgroundColor = 'yellow';
newButtonStyle.color = 'red';

<button style={newButtonStyle}>Test</button>
```

**To add new values to the button style:**

```javascript
import { buttonStyle } from 'simple-widgets';

const additional = {
    padding: "15px",
    textAlign: "center",
};

const newButtonStyle = [...buttonStyle, ...additional];

<button style={newButtonStyle}>Test</button>
```

## **The Generate Button Functions**

To generate a button that uses an existing style and will allow the style to either set the button style to its standard color of to the disable color if the the disable value is true.  These functions must be called everytime the screen is rendered.

1.  **generateButton**
    This will generate a button and will determine if the button should be
    disabled or not.
    
    Parameters:
    - style = the style used for the button as an object
    - error = indicates whether an error occurred and if so, change the color to the disable color for the button.  This is a boolean variable and if true will set the button to the disable color.
    - disabled = indicates whether the button should be disabled or not.  This should be a boolean value and if true, it will be set to the disable color; otherwise, it will be its normal color (default is false)
    - disableColor = the color for the disabled button (default is gray)

    **Example:**
    ```javascript
    import { generateButton } from 'simple-widgets';

    let error = false;
    let disableValue = false;
    ...
    let genButtonStyle1 = generateButton(Theme.getButtonStyle(), 
                                    error, disableValue, 'gray');
    let genButtonStyle2 = generateButton(Theme.getButtonStyle(),
                                    error, disableValue);
    let genButtonStyle3 = generateButton(Theme.getButtonStyle(), 
                                    error);
    ...
    <button style={genButtonStyle1}>Test 1</button>
    <button style={genButtonStyle2}>Test 2</button>
    <button style={genButtonStyle3}>Test 3</button>
    ```

    In getButtonStyle1 associated with button Test 1, if error or disableValue is true the button color will be gray; otherwise, the button color will be blue.

    In getButtonStyle2 associated with button Test 2, if error or disableValue is true the button color will be gray; otherwise, the button color will be blue.  Since no disable color was given, it will default to gray.

    In getButtonStyle3 associated with button Test 3, if error is true the button color will be gray; otherwise, the button color will be blue.  Since no disableColor was given, that value will default to false.  Since no disable color was given, it will default to gray.

2.  **generateDefaultButton**
    This will generate a button and will determine if the button should be
    disabled or not.  It will use the default button style (see above for the default button style) and the disable color of gray.

    Parameters:
    - error = indicates whether an error occurred and if so, disable the button
    - disabled = indicates whether the button should be disabled or not.  The default is false.

    **Example:**
    ```javascript
    import { generateDefaultButton } from 'simple-widgets';

    let error = false;
    let disableValue = false;
    ...
    let genButtonStyle1 = generateDefaultButton(error, disableValue);
    let genButtonStyle2 = generateDefaultButton(error);
    ...
    <button style={genButtonStyle1}>Test 1</button>
    <button style={genButtonStyle2}>Test 2</button>
    ```

    In getButtonStyle1 associated with button Test 1, if error or disableValue is true the button color will be gray; otherwise, the button color will be blue.  Since no button style can be given, it will use the default button style (see above for the default button style).  Since no disable color can be given, gray will be used.

    In getButtonStyle2 associated with button Test 2, if error is true the button color will be gray; otherwise, the button color will be blue.  Since no disable color was given, it will default to gray.  Since no button style can be given, it will use the default button style (see above for the default button style).  Since no disable color can be given, gray will be used.  Since no disable value was given, it will default to false.

