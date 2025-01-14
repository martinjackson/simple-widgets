# Using the CSS files in simple-widgets

The simple-widgets library must be installed in your project:

```
npm install simple-widgets
```

# There are three ways to use CSS files in your project:

## A. Import the CSS files into the index.js file

This will allow access to all the CSS files in simple-widgets in every file in your project.
The advantage is that you will not need to import the CSS files in files that need them.
The disadvantage is that you can not change them to style them to your needs.

In the index.js, place the following:
```js
    import '../node_modules/simple-widgets/src/index.css'
```

## B. Being able to Modify CSS files to meet your styling needs

1.  Copy the css files from the library into the public directory of your project.  
```
    Go to the src directory on simple-widgets.
    Open the CSS file you want to modify.
    Copy the contents of the file and place it in a in the src file with an extension of css.
```

2.  Remove the file that you copied from the 
        ```javascript
        ../node_modules/simple-widgets/src/index.css file.
        ```

3.  In the index.js file import the css file that you created in the step above
    ```javascript
    import './name-of-the-file.css';
    ```

4.  Make the modifications to the name-of-the-file.css file


## CSS Files in simple-widgets

The css files in the simple-widgets source directory (src) are:

1. sw-checkboxRadio.css
2. sw-contextMenuHover.css
3. sw-doubleListBox.css
4. sw-DropDown.css
5. sw-entryform.css
6. sw-Header.css
7. sw-inputFile.css
8. sw-invalid.css
9. sw-modal.css
10. sw-NavBar.css
11. sw-outline.css
12. sw-pageTitle.css
13. sw-slider1.css to sw-slider5.css
14. sw-spreadSheet.css
15. sw-table.css
16. sw-theme.css

Each of these files are described in the documentation in which they are used.
