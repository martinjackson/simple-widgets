# **Date Functions**

This set of functions will convert from one date format to another or will return the current date in a specific format.

1.  **convertDate**<br>
    This will convert a date from the YYYY-MM-DD format to the MM/DD/YYYY format.

    Parameters:<br>
    -  convDate = the date in the YYYY-MM-DD format

    **Example:**
    ```javascript
    let date1 = convertDate('2020-12-31');              Result: 12/31/2020
    ```

2.  **dateTime**<br>
    This will convert a date and time in the YYYY-MM-DDTHH:MM:SS.sss format to the MM/DD/YYYY HH:MM:SS format.

    Parameters:<br>
    -  dateAndTime = the date in the YYYY-MM-DDTHH:MM:SS.sss format

    **Example:**
    ```javascript
    let date2 = dateTime('2020-12-31T13:23:34.123');    Result: 12/31/2020 13:23:34
    ```

3.  **addDigit**<br>
    If value contains a single digit, it will place a 0 in front of the single digit.
 
    Parameters:
    -  value = the value to determine whether a 0 should be placed in front of the single digit

4.  **currentDateTime**<br>
    This will return the current date and time in the MM/DD/YYYY HH:MM:SS format.

    **Example:**
    ```javascript
    let date3 = currentDateTime();                      Result: 02/25/2021 11:25:43
    ```

5.  **currentDate**<br>
    This will return the current date in the MM/DD/YYYY format.

    **Example:**
    ```javascript
    let date4 = currentDate();                          Result: 02/25/2021
    ```

6.  **currentDBDateTime**<br>
    This will return the current date that the database expects to receive as a string.  The format will be YY-MON-DD HH:MM:SS.sss.

    **Example:**
    ```javascript
    let date5 = currentDBDateTime();                    Result: 21-FEB-25 11:25:43.100
    ```

7.  **currentDBDate**<br>
    This will place the current date in the YYYY-MM-DD format.

    **Example:**
    ```javascript
    let date6 = currentDBDate();                        Result: 2021-02-25
    ```

8.  **dbDate**<br>
    The will take a date in the MM/DD/YYYY format and convert it to the YYYY-MM-DD format.

    Parameters:
    -  date = the date in the MM/DD/YYYY format

    **Example:**
    ```javascript
    let date7 = dbDate('02/15/2020');                   Result: 2020-02-15
    ```

9.  **monthName**<br>
    This will convert month as a number into a three letter month name.

    Parameters:
    -  month = the month as a number between 0 and 11

    **Example:**
    ```javascript
        let month = monthName(2);                       Result: MAR
    ```
