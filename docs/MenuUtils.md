# MenuUtils

The MenuUtils contains functions that will take the user to another page within the application.

# Link

This will allow you transfer to another page component and pass parmeters to another page.  ***The Link component will only transfer control if either the Flat Menu or MenuBar is used.***

Props:

1.  to = is the path of the page component to go to.  The path is one that is listed in the menu array in the Flat Menu or MenuBar.

2.  parms = is an object that contains the items to pass to the page component.

### Example
```js
    import { Link } from 'simple-widgets';

    const menuItems = [
        {title: 'Home',       path: '/home',     component: () => <Home />},
        {title: 'Employee',   path: '/employee', component: () => <Employee />},
        {title: 'Vacancy',    path: '/vacancy',  component: () => <TODO msg="Vacancy" />},
    ];

    return (
        <Link to={menuItems[1].path}>{menuItems[1].title}</Link>
    )
```

This will transfer control to the Employee component.

### Example with parms

```js
    import { Link } from 'simple-widgets';

    const menuItems = [
        {title: 'Home',       path: '/home',     component: () => <Home />},
        {title: 'Employee',   path: '/employee', component: () => <Employee />},
        {title: 'Vacancy',    path: '/vacancy',  component: () => <TODO msg="Vacancy" />},
    ];

    return (
        <Link to="/employee" parms={{ ssn: 123456789, name: 'Jones' }}>Employee</Link>
    )
```

This will transfer control to the Employee component and pass the ssn and name values to the Employee component.

### Reading Parameters

To read the parameters in the Employee component:

```js
    import { useMenuParms } from 'simple-widgets';

    const Employee = () => {
        const parms = useMenuParms();   // This must be before the state variables
        ...
    }

    export default Employee;
```

The values will now be in the object parms.  So parms.ssn will contain 1234567689 and parms.name will contain Jones.

# Redirect

This will redirect the page from one page component to another without a link name or link on the page.  Parameters can be passed down to the other page component.  ***The Redirect component will only transfer control if either the Flat Menu or MenuBar is used.***

Props:

1.  to = is the path of the page component to go to.  The path is one that is listed in the menu array in the Flat Menu or MenuBar.

2.  parms = is an object that contains the items to pass to the page component.

### Example
```js
    import { Redirect } from 'simple-widgets';

    const menuItems = [
        {title: 'Home',       path: '/home',     component: () => <Home />},
        {title: 'Employee',   path: '/employee', component: () => <Employee />},
        {title: 'Vacancy',    path: '/vacancy',  component: () => <TODO msg="Vacancy" />},
        {path: '/company',  component: () => <Company />},
    ];

    return (
        <Redirect to="/company" />
    )
```

This will redirect to the Company component.

### Example with parms

```js
    import { Redirect } from 'simple-widgets';

    const menuItems = [
        {title: 'Home',       path: '/home',     component: () => <Home />},
        {title: 'Employee',   path: '/employee', component: () => <Employee />},
        {title: 'Vacancy',    path: '/vacancy',  component: () => <TODO msg="Vacancy" />},
        {path: '/company',  component: () => <Company />},
    ];

    return (
        <Redirect to="/company" parms={{ name: 'ABC Widget', street: "123 Main St" }} />
    )
```

This will transfer control to the Company component and pass the name and street values to the Company component.

### Reading Parameters

To read the parameters in the Company component:

```js
    import { useMenuParms } from 'simple-widgets';

    const Company = () => {
        const parms = useMenuParms();   // This must be before the state variables
        ...
    }

    export default Company;
```

The values will now be in the object parms.  So parms.name will contain ABC Widget and parms.street will contain 123 Main St..


