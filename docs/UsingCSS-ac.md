# Using the CSS files in appclient

To use the CSS files in your project:

1.  Copy the css files from the library into the public directory of your project.  ***If the template was used to build your project, the files will already be copied to your public directory; therefore, this step can be skipped.  If changes are made to the css files and an install is done, it will ask if you want to replace them or not.***
```
    cd your-project-name
    npm install
    cp ./node_modules/@nctr/appclient/lib/*.css ./public/
```
2.  In the index.html file in the public directory, in the <head> section of the HTML, place the following:
```html
    <link rel="stylesheet" href="DropDown.css" />
    <link rel="stylesheet" href="NavBar.css" />
```

The above css files are now avaliable to any file in the src directory.  There is ***no*** need to import the css files in the source files.

## CSS Files in appclient

There are three css files in the @nctr/appclient library:
1.  NavBar.css
2.  DropDown.css
3.  modal.css

### NavBar.css

The NavBar.css and DropDown.css files are used by the MenuBar component in the library.  The modal.css is use by the Header component in the library.

The NavBar.css controls the main vertical bar across the top of the screen.  The only items that should be changed are the colors and the box shadow.

Other styling features may also be added.

### DropDown.css

The DropDown.css controls the drop down (horizontal) on the MenuBar component.  The only items that should be changed are the following:

1.  In the dropdown-menu class, the z-index may need to be changed if it is blocked by other css classes.
2.  The widths in the dropdown-menu classes.
3.  The colors, the box-shadow, and pointer types.  

Other styling features may also be added.
