# Using the CSS files in simple-widgets

The simple-widgets library must be installed in your project:

```
npm install simple-widgets
```

# There are three ways to use CSS files in your project:

## A. Place the CSS files into the index.html file.

This will allow access to all the CSS files in simple-widget in every file in your project.
The advantage is that you will not need to import the CSS files in files that need them.
The disadvantage is that you can not change them to style them to your needs.

The CSS files should be in the public directory.  The CSS files can be copied from the node_modules/simple-widgets/lib.  ***There might be a postinstall script in your package.json to do this.  If you plan on changing the css you might want to remove this script after you do the initial install.***  See section C (below) for more infomation.

In the <head> section of the HTML, place the following:
```html
    <link rel="stylesheet" href="sw-contextMenuHover.css" />
    <link rel="stylesheet" href="sw-modal.css" />
    <link rel="stylesheet" href="sw-invalid.css" />
    <link rel="stylesheet" href="sw-slider(num).css" />
    <link rel="stylesheet" href="sw-entryform.css" />
    <link rel="stylesheet" href="sw-table.css" />
    <link rel="stylesheet" href="sw-checkboxRadio.css" />
    <link rel="stylesheet" href="sw-theme.css" />
    <link rel="stylesheet" href="sw-doubleListBox.css" />
    <link rel="stylesheet" href="sw-inputFile.css" />
```

## B. Using the CSS files from the node_modules directory in the file it is used

This allows the CSS file to be imported into the file that needs it.  The disadvantage is that since it is in the node_modules directory, you can not change them to style them to your needs.  The CSS files can also be placed in the index.js.  This allows them to be accessed by all javascript files.

An example, suppose you are using the DoubleListBox component in the file, you will need the following imports:

```javascript
import '../node_modules/simple-widgets/lib/sw-theme.css'
import '../node_modules/simple-widgets/lib/sw-doubleListBox.css'
```

## C. Being able to Modify CSS files to meet your styling needs

1. Copy the css files from the library into the public directory of your project.  ***There might be a postinstall script in your package.json to do this.  If you plan on changing the css you might want to remove this script after you do the initial install.***
```
    cd your-project-name
    cp ./node_modules/simple-widgets/lib/*.css ./public/
```

2.  Make copies of any CSS files you are planning on modifying.

3.  Make the modifications to the CSS file.

In the file, that is going to use the modified file, you will need the following import

```javascript
import '../public/name-of-the-file.css';
```

## CSS Files in simple-widgets

The css files in the simple-widgets library are:

1. sw-contextMenuHover.css
2. sw-modal.css
3. sw-invalid.css
4. sw-slider1.css to sw-slider5.css
5. sw-entryform.css
6. sw-table.css
7. sw-theme.css
8. sw-doubleListBox.css
9. sw-checkboxRadio.css
10. sw-inputFile.css

Each of these files are described in the documentation in which they are used.
