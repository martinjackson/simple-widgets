/*****************************************************************************
 *
 *  This will sequential search a table until the key is found and return 
 *  the number the table entry associated with this key.
 *
 *  @param table  the table or array to be searched
 *  @param key    the key to search for in the table
 *  @param field  the field in the table to search
 *
 *  @return returns the entry in the table associated with the key.  If the
 *          key is not found null is returned.
 *
 ****************************************************************************/
export const search = (table, key, field) => {
    // Spin through the table until the key is found
    for (let i = 0; i < table.length; i++) {
        if (table[i][field] === key) {  // Key is found in the table
            return table[i];
        }
    }

    return null; // Key was not found
}

/*****************************************************************************
 *
 *  This will binary search a table until the key is found and returns the 
 *  table entry associated with this key.
 *
 *  @param table  the table or array to be searched
 *  @param key    the key to search for in the table
 *  @param field  the field in the table to search
 *
 *  @return returns the entry in the table associated with the key or null if
 *          the key is not found.
 *
 ****************************************************************************/
export const binSearch = (table, key, field) => {
    let top = 0;                // Index to the top of the table
    let bottom = table.length;  // Index to the bottom of the table
    let middle = 0;             // Index to the calculated middle of the table
    let found = false;          // Indicates the key was found
    let neverFound = false;     // Indicates the key will never be found

    // Loop until the key is found or it never can be found
    while (found === false && neverFound === false) {
        middle = parseInt ((top + bottom) / 2);

        if (top >= bottom) {
            neverFound = true;
        } else if (table[middle][field] === key) {
            found = true;
        } else if (table[middle][field] > key) {
            bottom = middle - 1;
        } else if (table[middle][field] < key) {
            top = middle + 1;
        }
    }

    if (found) {    // Key was found
        return table[middle];
    } else {    // Key was not found
        return null;
    }
}

