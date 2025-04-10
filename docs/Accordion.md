# **Accordion**

This will display several buttons on the screen.  The first time the button is clicked on it will either open some text below the button or whatever html the user wants to display.  The next time the button is clicked, it will close the text or html.  Each button in the list will do this.  This has an accordion effect as the buttons open up and close text or html.

## **Props**
In order to use the accordion the user must pass the following props:

1. **display** = an array of objects that contains the name of the button and the text or html that is to be displayed the when the button is clicked.  The object contains two fields: an button field that indicates where the text of the button and the text field that contains the text or html to be displayed.  The following is an example:

```js
    let accordionDisplay = [
      { button: 'Test 1', text: 'This is test 1' },
      { button: 'Test 2', text: 'This is test 2' },
      { button: 'Test 3', text: 'This is test 3' },
      { button: 'Test 4', text: 'This is test 4' },
    ];
```

The button field indicates what is displayed on the button.  The text field is for the text that is displayed when the button is opened or closed.  In the above example, there are 4 button and text.

2. **type** = indicates whether the text part of the display contains text or html.  The values can be text (default) or html.
3. **number** = used to make the keys unique for every occurrence of an accordion.  If number is not present, it will default to zero.  Only need if there is more than one accordion per page.

## CSS File

The following CSS file will need to be imported into your code that uses this Accordion component.  We did this so you can style the Accordion, any way you desire.  The import would be, if it is not be changed:

```javascript
import '../node_modules/simple-widgets/lib/sw-accordion.css';
```

For more information on CSS files, see [Using CSS](./UsingCSS.md).


## sw-accordion.css

The CSS class to style the button:

***sw-accordion_button*** = the style for each of the buttons in the accordion.

```css
.sw-accordion_button {
    font-family: var(--sw-theme_buttonFont);
    font-size: var(--sw-theme_buttonFontSize);
    font-weight: var(--sw-theme_buttonFontWeight);
    font-style: var(--sw-theme_buttonStyle);
    color: var(--sw-theme_buttonTextColor);
    border: var(--sw-theme_buttonBorder);
    border-radius: 10px;
    height: 3em;
    margin: var(--sw-theme_buttonMargin);
    padding: var(--sw-theme_buttonPadding);
    background-color: var(--sw-theme_buttonColor);
}

```

***sw-accordion_margin*** = margin for the text or html.

```css
.sw-accordion_margin {
    margin: 20px;
}

```


## **Example 1**
The following is a code example:

```javascript
    let accordionDisplay = [
      { button: 'Test 1', text: 'This is test 1' },
      { button: 'Test 2', text: 'This is test 2' },
      { button: 'Test 3', text: 'This is test 3' },
      { button: 'Test 4', text: 'This is test 4' },
    ]
    ...
    return (
        <div>
            ...
            <Accordion display={carouselDisplay}>
            ...
        </div>
    );
```

When the accordion is initially displayed, there will be four buttons, one underneath the other.  If the user presses the button labeled Test 1, it will display the text This is test 1.  If the user press the button labeled Test 1 again, the text This is test 1 will disappear.

If the user presses the button labeled Test 2, the text This is test 2 will appear.

The text for all four buttons could appear if the they are all closed and the user presses each button.

## **Example 2**
The following is a code example:

```javascript
    const [test11, setTest11] = useState('');
    const [test12, setTest12] = useState('');
    const [test13, setTest13] = useState('');
    const [test14, setTest14] = useState('');

let accordionDisplay2 = [
      { button: 'Test Text', text: <input type="text" name="test11" value={test11} /> },
      { button: 'Test Date', text: <input type="date" name="test12" value={test12} /> },
      { button: 'Test Number', text: <input type="number" name="test13" value={test13} /> },
      { button: 'Test Email', text: <input type="email" name="test14" value={test14} /> },
    ];
    ...
    return (
        <div>
            ...
            <Accordion display={carouselDisplay2} type="html" number={1}>
            ...
        </div>
    );
```

In this example, accordionDisplay2 contains html instead of plain text.

If the button Test Text is pressed and input text box will appear.  If the button is pressed again, it will disappear.

If the button Test Date is pressed and date text box will appear.  If the button is pressed again, it will disappear.

If the button Test Number is pressed and number text box will appear.  If the button is pressed again, it will disappear.

If the button Test Email is pressed and email text box will appear.  If the button is pressed again, it will disappear.

If you do want plain text in one of the buttons, the text can look like the following:

```html
    <p>The text to be displayed.</p>
```