# Search Functions

The two functions in this file are a sequential search and a binary search.

1.  ** search **
    This will sequential search a table until the key is found and return the number the table entry associated with this key.

    Parameters:
    a.  table       the table or array to be searched
    b.  key         the key to search for in the table
    c.  field       the field in the table to search

    Returns the entry in the table associated with the key.  If the key is not found null is returned.

    Example:
    ```javascript
    const names = [
        {id: 1, name: 'Jones'},
        {id: 2, name: 'Smith'},
        {id: 3, name: 'Mary'},
        {id: 4, name: 'John'},
        {id: 5, name: 'Paul'},
        {id: 6, name: 'Greg'},
        {id: 7, name: 'Tom'},
    ];

    let found1 = search(names, 3, 'id');
    let found2 = search(names, 23, 'id');
    ```

    Result: 
        found1: {id: 3, name: 'Mary'}
        found2: null


2.  ** binSearch **
    This will binary search a table until the key is found and returns the table entry associated with this key.

    Parameters:
    a.  table       the table or array to be searched
    b.  key         the key to search for in the table
    c.  field       the field in the table to search

    Returns the entry in the table associated with the key or null if the key is not found.

    Example:
    ```javascript
    const names = [
        {id: 1, name: 'Jones'},
        {id: 2, name: 'Smith'},
        {id: 3, name: 'Mary'},
        {id: 4, name: 'John'},
        {id: 5, name: 'Paul'},
        {id: 6, name: 'Greg'},
        {id: 7, name: 'Tom'},
    ];

    let binFound1 = binSearch(names, 3, 'id');
    let binFound2 = binSearch(names, 23, 'id');
    ```
    
    Result: 
        binFound1: {id: 3, name: 'Mary'}
        binFound2: null
