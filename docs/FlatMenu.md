# Flat Menu

The Flat Menu is a vertical display of menu items.  The Flat Menu that does ***not*** allow any submenus.  When you click on one of the menu options, it will take you to that link component.

Props:

1.  menuTree = contains the tree structure of the menu as an array.  See the example of the menuTree below.

### Example

```js
    import { FlatMenu } from 'simple-widgets';

    const menuItems = [
        {title: 'Home',       path: '/home',     component: () => <Home />},
        {title: 'Employee',   path: '/employee', component: () => <Employee />},
        {title: 'Vacancy',    path: '/vacancy',  component: () => <TODO msg="Vacancy" />},
        {title: 'Memo',       path: '/memo',     component: () => <TODO msg="Memo" />},
        {title: 'Reports',    path: '/reports',  component: () => <Reports />},
        {title: 'About',      path: '/about',    component: () => <About />},
        {path: '/OrgReport',  component: () => <TODO msg="OrgReport" />},
        {path: '/LabReport',  component: () => <TODO msg="LabReport" />}
    ]

    return (
        <FlatMenu menuItems={menuTreeItems} />
    );
```

The title field is the title that will be displayed on the menu.  The path is the URL path.  The component is the component that will be displayed when the mouse selects that menu item.    The last tow entries in the array do not have a titles; therefore, the paths and components are added to the route, but not to the menu.

