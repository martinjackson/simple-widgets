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

## B. Using the CSS files from the node_modules directory in the file it is used

This allows the CSS file to be imported into the file that needs it.  The disadvantage is that since it is in the node_modules directory, you can not change them to style them to your needs.  The CSS files can also be placed in the index.js.  This allows them to be accessed by all javascript files.

An example, suppose you are using the DoubleListBox component in the file, you will need the following imports:

```javascript
import '../node_modules/simple-widgets/lib/sw-theme.css'
import '../node_modules/simple-widgets/lib/sw-doubleListBox.css'
```

If the CSS file is being used in multiple files, the CSS file can be placed in the index.js file instead of each file that uses it.

## C. Being able to Modify CSS files to meet your styling needs

1.  Copy the css files from the library into the public directory of your project.  
```
    cd your-project-name
    cp ./node_modules/simple-widgets/src/*.css ./public/
```

2.  Make copies of any CSS files you are planning on modifying.  Remove the CSS files that are not needed.

3.  Make the modifications to the CSS file.

In the file, that is going to use the modified file, you will need the following import

```javascript
import '../public/name-of-the-file.css';
```

If the CSS file is being used in multiple files, the CSS file can be placed in the index.js file instead of the files that need it.

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
11. sw-slider1.css to sw-slider5.css
12. sw-spreadSheet.css
12. sw-table.css
13. sw-theme.css

Each of these files are described in the documentation in which they are used.
