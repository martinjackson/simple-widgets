# Release 1.32.0    

## Changes
1.  The SearchSortTable has the following changes:
    a. Drop down for each column if enabled.
    b. Allows the hiding of columns
    c. Allows the following aggregations: Summation only for columns with numbers, Average only for columns,with numbers, Count, Distinct Count, Maximum, Minimum, and Median
    d. Allows control breaks on multiple columns
    e. Print the table to a PDF
    f. Place the table in an Excel spreadsheet
    g. When using a filter all the filter boxes line up correctly
    h. Reset button to undo control breaks, hiding of columns, and aggregation

    For more information see the SearchSortTable documentation to apply these changes.

2.  The Header no longer depends on environment variables to fill in information.  You must now use the title, titleLogo, alertLogo, logout, login, and dbType.

    ***This may break any previous versions***

    For more information see the Header documentation to apply these changes.

3.  The MenuBar has the following changes:
    a. Allows you to place a page symbol icon beside each menu item.
    b. On vertical menus, it no longer expands the space between menu items when you go to a longer page.

    For more information see the MenuBar documentation to apply these changes.


##Simple Widgets Maintainers (These are changes only for the Maintainers of this project)

1.  All export defaults have been removed.  There for all local imports must look like the following:
```js
    import { value } from './file'
```

2.  There is an _InnerSearchSortTable component in the SearchSortTable.  The useEffect has to be in front of any if statements; therefore, the _InnerSearchSort table was introduced.  The if statements promoted to the upper component.
