# **Scroll Functions**

This scroll functions will move the user to a different part of the screen when the function is executed.  There are four scroll functions that will move to a component on the screen based on the id, name, class name, and tag name.  The names of the four functions are:

1.  scrollToViewByID
2.  scrollToViewByName
3.  scrollToViewByClassName
4.  scrollToViewByTagName

## **scollToViewByID**
This will move the user to the component on the screen that has a specific id.

**Parameters:**
1.  elementID = the component on the screen with that specific id.

**Example:**

```js
    const scrollToID = () => {
        scrollToViewByID('id_div');
    }
    ...
    <button name="scroll" onClick={scrollToID}>Scroll</button>
    ...
    <div id="id_div">
        ...
    </div>
```

When the user presses the Scroll button the screen will scroll to the div with an id of id_div.


## **scollToViewByName**
This will move the user to the component on the screen that has the first componenet with that name.

**Parameters:**
1.  elementName = the components on the screen with that name.

**Example:**

```js
    const scrollToName = () => {
        scrollToViewByName('name_div');
    }
    ...
    <button name="scroll" onClick={scrollToID}>Scroll</button>
    ...
    <div name="id_div">
        ...
    </div>
```

When the user presses the Scroll button the screen will scroll to the div with a name of name_div.  If there are several elements with the same name on the screen, it will scroll to the first name only.

## **scollToViewByClassName**
This will move the user to the component on the screen that has the first componenet with that class name.

**Parameters:**
1.  elementID = the component on the screen with that class name.

**Example:**

```js
    const scrollToClassName = () => {
        scrollToViewByTagName('div');
    }
    ...
    <button name="scroll" onClick={scrollToClassName}>Scroll</button>
    ...
    <div>
        ...
    </div>
```

When the user presses the Scroll button the screen will scroll to the first div found.  If there are several elements with the same tag name on the screen, it will scroll to the first tag name only.




