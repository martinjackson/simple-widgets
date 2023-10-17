# Outline

This will build an outline (vertical) on the screen.  Each items can be either a Title only or a title with a component.  If a title only, you can not hover over the item only compoents can be hovered over.  A title with a component can be hovered over and when clicked, the component will appear to the right of the outline or on a seperate page.  The titles can be made bold or italicized via the text style field.  The titles can either be indented a set amount of space via the indent field or the spacing can be determined by the user via the spacing field.  

Props:

1.  ***links*** = contains the tree structure for the outline as an array.  An example of the links array:
```js
    const links = [
        { title: 'Saving',      textStyle: 'bold' },
        { title: 'Save',                                indent: true,   path: '/save',      component: () => <Save></Save> },
        { title: 'Save As',                             indent: true,   path: '/saveas',    component: () => <SaveAs></SaveAs> },
        { title: 'Open',        textStyle: 'bold' },
        { title: 'Internet',    textStyle: 'italic',    indent: true },
        { title: 'http',                                spacing: '2em', path: '/insecure',  component: () => <Http></Http> },
        { title: 'https',                               spacing: '2em', path: '/secure',    component: () => <Https></Https> },
        { title: 'File',                                                path: '/file',      component: () => <File></File> }
        { title: 'Exit',        type: 'new',                            path: '/exit',      component: () => <Exit></Exit> },
    ]
```
- The title Saving is a title only, since there is not path or component.  The title Saving will be bold, because of the textStyle: 'bold'.

- The title Save and Save As are both title components, since they have a path and component.  They will both be indented a standard amount, because of the indent: true.  If indent: false was present, then no indenting will take place.

- The tile Open is a title only, and will be bold.

- The title Internet is a title only, and will be italicized and indent the standard amount.

- The http and https are both title components, and will be indented 2em.  The spacing is due to the spacing: '2em' field.

- The File and Exit titles are title components and will NOT be styled or indented.

- The selected item for all but exit will appear to the right of the outline component.  Exit will appear on a new page, due to the type: new.  The other possible values are side.

2. ***disabled*** = indicates that the entire outline is disabled.  Can be set to disabled={true} or disabled={false}

3. **nopage** = indicates that no page is to be displayed when the Outline is rendered.  By default, it will automatically show the first page listed in the links prop.


## Fields in a link object

1. ***title*** = the title that will appear on the screen.  A title can either be a title only or a title component.  A title component will have a path and component associated with that title.  A title only will not have a path or component.

2. ***textStyle*** = indicates that the style of the text is either bold, italicized, or plain.  The following options are available:
    - ***bold*** = indicates that the text will be bold
    - ***italic*** = indicates that the text will be italicized
    - ***plain*** = indicates that the text will not be styled.  This is the default.

3. ***indent*** = indicates that the title should be indented a standard amount (1em).  If indent is true, the title is indented the standard amount.  If indent is false (default), the title is not indented.

4. ***spacing*** = indicates that the title should be indented the given amount.  After the spacing field, the value should be given in px, em, or rem.  The title will be indented that amount.  The default is 1em.

5. ***path*** = the URL path for the field.

6. ***component*** = the component that will be displayed when the mouse selects that item from the outline.

7. ***type*** = indicates whether the component should be displayed to the right of the outline or as a new page.  If a new page the outline will disappear.  The following are the options:
    - ***side*** = indicates that the component will be displayed to the right of the outline.  This is the default.
    - ***new*** = indicates that the component will be displayed on a new page.  The outline will disappear.  If this option is used and a menubar is being used, then the path and component should be listed on the menuTree array.



## CSS Files

The following CSS files will need to be imported into the file that uses the MenuBar component.  The import would be, if it is not be changed:

```javascript
import '../node_modules/simple-widgets/lib/sw-outline.css';
```

For more information on CSS files, see [Using CSS](./UsingCSS.md).


### sw-outline.css

The sw-outline.css are used by the Outline component in the library.  

The sw-NavBar.css the styling of the outline.  The following CSS variables can be changed:

1. --sw-outline-indentation_amount = indicates the amount that should be indented by the spacing field (default: 1em)
2. --sw-outline-item_width = the width of the outline title (default is 12.5em)
3. --sw-outline-normal_indent = the amount that is used to indent the standard amount (indent field) (default: 1em)
4. --sw-outline-margin_right = indicates the margin amount to the right of the titles in the outline (default: 1em)
5. --sw-outline-font_size = the size of the font for the titles of the items (default: large)
6. --sw-outline-reg_color = the color of the normal title (default: blue)
7. --sw-outline-reg_back_color = the background color of the normal title (default: white)
8. --sw-outline-hover_color = the color of the title when hovered over (default: white)
9. --sw-outline-hover_back_color = the background color of the title when hovered over (default: gray)
10. --sw-outline-font_family = the font for all the titles (default: Tahoma)
11. --sw-outline-overall_width = the overall width of the outline (default: 100%)

Other styling features may also be added.

### Example

```js
import { Outline } from 'simple-widgets';

const App = () => {
    let links = links from above;

    return (
        <div>
            <Outline links={links}>
        </div>
    );
}

```

This will display the outline on the screen.

