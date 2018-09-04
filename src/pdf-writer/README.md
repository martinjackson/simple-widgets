# PDF Writer

This will users to quickly build PDF files using jsPDF.  This will allow users to build reports with headings and page numbers at the top of each page.  It allows line wrapping and
fully justified lines.  Margins can also be set for the document in both inches and points.  The top, left, right, and bottom margins can be set individually.  The user may set
fonts and modify them throughout the PDF.  This is only set up for 8 1/2 by 11 paper, but will work for either portrait or landscape.

# Installation

```
npm install pdf-writer --save
yarn add pdf-writer --save
```

# HTML

* Copy the jspdf.min.js or jspdf.debug.js from ./node_modules/pdf-writer to the directory that contains your html files.

* Place one of the following in your html file that generates the PDF:

```
<script src="jspdf.min.js"></script>
<script src="jspdf.debug.js"></script>
```    

* Example:

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Welcome to Electron</title>
    <script src="jspdf.min.js"></script>
  </head>
  <body>
    <div id="App"></div>
  </body>

  <script>
      // You can also require other files to run in this process
      require('./bundle.js')
  </script>
</html>
```

 * The jspdf.min.js file was added to the html.

# Import

```
import PDFWriter from 'pdf-writer';
```

# Instantation

Format:

    PDFWriter (orientation)

 * orientation is the orientation of the paper.  The values are PORTRAIT or LANDSCAPE.

Error Messages:

 * The following error message will be displayed in the console if the orientation is not PORTRAIT or LANDSCAPE:

   - Error in constructor: The orientation is *orientation-value*.  It should be PORTRAIT or LANDSCAPE.  Defaulting to PORTRAIT'.
   - Error in constructor: Probably missing either the <script src="jspdf.min.js"></script> or  <script src="jspdf.debug.js"></script> in the html

Example:

    var npdf = new PDFWriter ('PORTRAIT');


# Methods

**getError**

Indicates whether no error occurred (returns 0), a minor error occurred (returns 1), or a major error occurred (returns 2) in the constructor. A minor error means that processing can continue, whereas a major error indicates that processing can not continue.

Format:

    getError()

Example:

    var npdf = new PDFWriter ('PORTRAIT');    
    if (npdf.getError() === 2) {
        console.log ('Constructor Error');
    }

 * If a major error occurred (2), the Constructor Error would be printed.

**setMargins**

This will set the margins for the pages in the PDF.  The left, right, top, and bottom margins can be set
individually.  The units in which you enter them can be also set.  If changing margins in the middle of
the page, make sure that the last text was written with a printTextLine and not a printText; otherwise,
it will most likely write over the text that used the printText.  This method can only be called once
and should be called before the first line of text is printed.  If the left and right margins need to
be changed, use setSideMargins, setLeftMargin, or setRightMargin methods.  The top and bottom margins
can only be set by this method and must be done before the first line of text is printed.  This method
will automatically place the cursor at the start of the line, so it is best of you end the line before
setting the margins.

Format:

    setMargins (left, right, top, bottom, units)

 * left is the left margin (the default is 1 inch or 72 points)

 * right is the left margin (the default is 1 inch or     72 points)

 * top is the left margin (the default is 1 inch or 72 points)

 * bottom is the left margin (the default is 1 inch or 72 points)

 * units are the units for the margin (the default is INCHES).  The possible values are INCHES or POINTS.  This is an optional parameter.

 * This method will return true if an error occurred or false if no error occurred.

Error Messages:

 * If this method is called twice or more, the following error message will be displayed in the console:

  - Error in setMargins: Can not use setMargins to set the margins any longer, use setSideMargins,
                setLeftMargin, or setRightMargin.               

 * If the units are not INCHES or POINTS, the following error message will be displayed in the console:

  - Error in setMargins: The units are *units-value*.  They should be INCHES or POINTS; therefore,
                using default values.

Example:

    npdf.setMargins (0.5, 0.5, 1, 1, "INCHES");
    npdf.setMargins (1, 1, 1, 1);

 * In the first example, the left and right margins are set at 1/2 inch, since the units are in inches.  
The top and bottom margins are set to 1 inch.  The units are in inches.

 * In the second example, all the margins are set to 1 inch.  The second parameter is optional, which is why it is not present.  The default for
the units is 'INCHES', if the second parameter is not specified.

**setSideMargins**

This will set the left and right margins for the pages in the PDF.  The left and right margins can be set individually.  The units in whch you enter
them can be also set.  If changing margins in the middle of the page, make sure that the last text was written with a printTextLine and not a
printText; otherwise, it will most likely write over the text that used the printText.  This method will automatically place the cursor at the start of the line, so it is best of you end the line before setting the margins.

Format:

    setSideMargins (left, right, units)

 * left is the left margin (the default is 1 inch or 72 points)

 * right is the left margin (the default is 1 inch or 72 points)

 * units are the units for the margin (the default is INCHES).  The possible values are INCHES or POINTS.  This is an optional parameter.

 * This method will return true if an error occurred or false if no error occurred.

Error Messages:

 * If the units are not INCHES or POINTS, the following error message will be displayed in the console:

  - Error in setSideMargins: The units are *units-value*.  They should be INCHES or POINTS; therefore, using default values.

Example:

    npdf.setSideMargin (0.5, 0.5, "INCHES");
    npdf.setSideMargin (1, 1);

 * In the first example, the left and right margins are set at 1/2 inch, since the units are in inches.  The units are in inches.

 * In the second example, the left and right margins are set to 1 inch.  The second parameter is optional, which is why it is not present.  The default for the units is 'INCHES', if the second parameter is not specified.

**setLeftMargin**

This will set the left margin for the pages in the PDF.  The units in which you enter them can be also set.  If changing margins in the middle of the page, make sure that the last text was written with a printTextLine and not a printText; otherwise, it will most likely write over the text that used the printText.  This method will automatically place the cursor at the start of the line, so it is best of you end the line before setting the margins.

Format:

    setLeftMargin (left, units)

 * left is the left margin (the default is 1 inch or 72 points)

 * units are the units for the margin (the default is INCHES).  The possible values are INCHES or POINTS.  This is an optional parameter.

 * This method will return true if an error occurred or false if no error occurred.

Error Messages:

 * If the units are not INCHES or POINTS, the following error message will be displayed in the console:

  - Error in setLeftMargin: The units are *units-value*.  They should be INCHES or POINTS; therefore, using default values.

Example:

    npdf.setLeftMargin (0.5, "INCHES");
    npdf.setLeftMargin (1);

 * In the first example, the left margin are set at 1/2 inch, since the units are in inches.  The units are in inches.

 * In the second example, the left margin are set to 1 inch.  The second parameter is optional, which is why it is not present.  The default for the units is 'INCHES', if the second parameter is not specified.

**setRightMargin**

This will set the right margin for the pages in the PDF.  The units in which you enter them can be also set.  If changing margins in the middle of the page, make sure that the last text was written with a printTextLine and not a printText; otherwise, it will most likely write over the text that used the printText.  This method will automatically place the cursor at the start of the line, so it is best of you end the line before setting the margins.

Format:

    setRightMargin (right, units)

 * right is the right margin (the default is 1 inch or 72 points)

 * units are the units for the margin (the default is INCHES).  The possible values are INCHES or POINTS.  This is an optional parameter.

 * This method will return true if an error occurred or false if no error occurred.

Error Messages:

 * If the units are not INCHES or POINTS, the following error message will be displayed in the console:

  - Error in setRightMargin: The units are *units-value*.  They should be INCHES or POINTS; therefore, using default values.

Example:

    npdf.setRightMargin (0.5, "INCHES");
    npdf.setRightMargin (1);

 * In the first example, the right margin are set at 1/2 inch, since the units are in inches.  The units are in inches.

 * In the second example, the right margin are set to 1 inch.  The second parameter is optional, which is why it is not present.  The default for the units is 'INCHES', if the second parameter is not specified.

**setFont**

This will set the font for the text in the PDF.  The name, the size, and the style of the font can be set with this method.

Format:

    setFont (fontName, fontSize, fontStyle)

 * fontName the name of the font (default is Times New Roman)

 * fontSize the size of the font (default is 12)

 * fontStyle the style of the font (values are 'plain', 'bold', 'italic', and 'underline') (default is plain)

Example:

    npdf.setFont ("Courier", 16, 'bold');

 * The font is Courier with a font size of 12 and the text will be bold.

**setFontAndStyle**

This will set the font name and style for the text in the PDF.

Format:

    setFontAndStyle (fontName, fontStyle)

 * fontName the name of the font (default is Times New Roman)

 * fontStyle the style of the font (values are 'plain', 'bold', 'italic', and 'underline') (default is plain)

Example:

    npdf.setFontAndStyle ("Courier", 'bold');

 * The font will be set to a bold Courier.

**setFontSize**

This will set the font size for the text in the PDF.

Format:

    setFontSize (fontSize)

 * fontSize the size of the font (default is 12)

Example:

    npdf.setFontSize (12);

 * The size for the current font will be set to 12.

**setFontStyle**

This will set the style for the text in the PDF.

Format:

    setFontStyle (fontStyle)

 * fontStyle the style of the font (values are 'plain', 'bold', 'italic', and 'underline') (default is plain)

Example:

    npdf.setFontStyle ('italic');

 * The style for the current font will be set to 'italic'.

**setHeadingFont**

This will set the font for the heading in the PDF.  The name, the size, and the style of the heading font can be set with this method.

Format:

    setHeadingFont (fontName, fontSize, fontStyle)

 * fontName the name of the heading font (default is Times New Roman)

 * fontSize the size of the heading font (default is 12)

 * fontStyle the style of the heading font (values are 'plain', 'bold', 'italic', and 'underline') (default is plain)

Example:

    npdf.setHeadingFont ("Courier", 16, 'bold');

 * The heading font is Courier with a font size of 12 and the heading will be bold.

**setHeadingFontAndStyle**

This will set the heading font name and style for the text in the PDF.

Format:

    setHeadingFontAndStyle (fontName, fontStyle)

 * fontName the name of the heading font (default is Times New Roman)

 * fontStyle the style of the heading font (values are 'plain', 'bold', 'italic', and 'underline') (default is plain)

Example:

    npdf.setHeadingFontAndStyle ("Courier", 'bold');

 * The heading font will be set to a bold Courier.

**setHeadingFontSize**

This will set the heading font size for the text in the PDF.

Format:

    setHeadingFontSize (fontSize)

 * fontSize the size of the heading font (default is 12)

Example:

    npdf.setHeadingFontSize (12);

 * The size for the current heading font will be set to 12.

**setHeadingFontStyle**

This will set the style for the heading in the PDF.

Format:

    setHeadingFontStyle (fontStyle)

 * fontStyle the style of the heading font (values are 'plain', 'bold', 'italic', and 'underline') (default is plain)

Example:

    npdf.setHeadingFontStyle ('italic');

 * The style for the current heading font will be set to 'italic'.

**setFooterFont**

This will set the font for the footer in the PDF.  The name, the size, and the style of the footer font can be set with this method.

Format:

    setFooterFont (fontName, fontSize, fontStyle)

 * fontName the name of the footer font (default is Times New Roman)

 * fontSize the size of the footer font (default is 12)

 * fontStyle the style of the footer font (values are 'plain', 'bold', 'italic', and 'underline') (default is plain)

 * This method will return true if an error occurred or false if no error occurred.  An error will occur if the user tries to set the footer font information after the footer information.  That is because the footer font size is used in determining the size of the footer.

Error Messages:

 * If the setFooterInfo method is called before setting the footer font family, size, and style, the following error message is displayed in the console:

  - Error in setFooterFont: The footer font should be set before calling the setFooterInfo method.

Example:

    npdf.setFooterFont ("Courier", 16, 'bold');

 * The footer font is Courier with a font size of 12 and the heading will be bold.

**setFooterFontAndStyle**

This will set the footer font name and style for the text in the PDF.

Format:

    setFooterFontAndStyle (fontName, fontStyle)

 * fontName the name of the footer font (default is Times New Roman)

 * fontStyle the style of the footer font (values are 'plain', 'bold', 'italic', and 'underline') (default is plain)

 * This method will return true if an error occurred or false if no error occurred.  An error will occur if the user tries to set the footer font information after the footer information.  That is because the footer font size is used in determining the size of the footer.

Error Messages:

 * If the setFooterInfo method is called before setting the footer font family and style, the following error message is displayed in the console:

  - Error in setFooterFontAndStyle: The footer font should be set before calling the setFooterInfo method.

Example:

    npdf.setFooterFontAndStyle ("Courier", 'bold');

 * The footer font will be set to a bold Courier.

**setFooterFontSize**

This will set the footer font size for the text in the PDF.

Format:

    setFooterFontSize (fontSize)

 * fontSize the size of the footer font (default is 12)

 * This method will return true if an error occurred or false if no error occurred.  An error will occur if the user tries to set the footer font information after the footer information.  That is because the footer font size is used in determining the size of the footer.

Error Messages:

 * If the setFooterFontSize method is called before setting the footer font size, the following error message is displayed in the console:

  - Error in setFooterFontSize: The footer font should be set before calling the setFooterInfo method.

Example:

    npdf.setFooterFontSize (12);

 * The size for the current footer font will be set to 12.

**setFooterFontStyle**

This will set the style for the footer in the PDF.

Format:

    setFooterFontStyle (fontStyle)

 * fontStyle the style of the footer font (values are 'plain', 'bold', 'italic', and 'underline') (default is plain)

 * This method will return true if an error occurred or false if no error occurred.  An error will occur if the user tries to set the footer font information after the footer information.  That is because the footer font size is used in determining the size of the footer.

Error Messages:

 * If the setFooterFontSize method is called before setting the footer font style, the following error message is displayed in the console:

  - Error in setFooterFontStyle: The footer font should be set before calling the setFooterInfo method.

Example:

    npdf.setFooterFontStyle ('italic');

 * The style for the current footer font will be set to 'italic'.

**setFooterInfo**

This will set up the length of the footer and the information that can be placed in the footer.

Format:

    setFooterInfo (lines, isPage, isOfPart, location)

 * lines the lines of text (as an array) that are to be placed in the footer.  A value of null, should be passed if no lines are to be displayed, but the page number line.

 * isPage indicates that a a footer line with the page number (Page: page-number) should be placed in the footer (true) or not (false)

 * isOfPart indicates that of and the total number of pages should be appended to the line with the page number (Page page-number of total-pages) (true) or not (false)

 * location the location in the footer in which the lines should be placed.  The values are left (lines start at the left margin), center (lines are centered on the page), and right (the largest footer line ends at the right margin)

 * This method will return true if an error occurred and false if not did not.  An error will occur if this method is called after any text has been printed.  Once text has been printed the size of the
footer is difficult to determine.  Another error could occur if the location is not LEFT, RIGHT,             or CENTER.

 * If isPage is set, then the last footer line will contain the following automatically:

        Page: page-number

  This line will automatically be generated if isPage is set, the user does not have to do anything.

 * If isPage and isOfPart are set, then the last footer line will contain the following automatically:

        Page: page-number of total-pages

 * This line will automatically be generated if isPage and isOfPart are set, the user does not have to do anything.

Error Messages:

 * If this method is called after any text has been printed, the following error message will be displayed in the console:

  - Error in setFooterInfo: The footer information should be set before any text is written.

 * If the location is not LEFT, RIGHT, or CENTER the following error message will be displayed in the console:

  - Error in setFooterInfo: The location is *location-value*.  It should be LEFT, RIGHT, or CENTER; therefore, using a default of CENTER.

Examples:

    npdf.setFooterInfo (null, true, false, 'CENTER')
    npdf.setFooterInfo (null, true, true, 'LEFT')
    npdf.setFooterInfo (['This is the first footer line', This is the second footer line], true, false, 'RIGHT');
    npdf.setFooterInfo (['This is the first footer line', This is the second footer line], true, true, 'CENTER');
    npdf.setFooterInfo (['This is the first footer line', This is the second footer line], false, false, 'CENTER');

 * The first example will display the page number in the center of the footer.  The footer will look similar to the following:


                               Page: 1


   The line is centered, since the location was CENTER.

 * The second example will display the page number and of part after the left margin in the footer.  The footer will look similar to the following:

                           Page: 1 of 10

 * This indicates that it is the first page out of ten.  The location of left, starts it at the left margin.

 * The third examples has four footer lines in the footer, with the last line being the page number.  The footer will look similar to the following:

                                     This is the first footer line
                                     This is the second footer line
                                     This is the third footer line
                                     Page: 1

  The location of right causes the second footer line to end at the right margin and all other lines start at the same location as the second footer line.  The second footer line is the longest.

 * The fourth example has four footer lines in the footer, with the last line being the page number with the of part.  The footer will look similar to the following:

                        This is the first footer line
                       This is the second footer line
                        This is the third footer line
                                Page 1 of 10

    The footer lines are centered, since the location was CENTER.

 * The fifth example has three footer lines, with no page number.  The footer will look similar to the following:

                        This is the first footer line
                       This is the second footer line
                        This is the third footer line
                                Page 1 of 10

  The footer lines are centered, since the location was CENTER.

**setPageNumber**

This will set the starting page number.  If this method is not called the page number will default to 1.

Format:

    setPageNumber (pageNum)

 * pageNum the page number to set the starting page to.

Example:

    npdf.setPageNumber (5);

 * This indicates that the first page in the PDF will have a page number of 5.

**setTextColor**

This will set the text color for all text and headings in the PDF.

Format:

    setTextColor (hexValue)

 * hexValue the hexadecimal value for a color

Example:

    setTextColor ('#FF0000');

 * This will set the text color to red; therefore, all text and headings in the PDF will show up as red.

**setPageInfo**

This will allow the line wrapping and fully justified to be turned on and off.  The fully justified will only work if line wrapping is turned on.  If line wrapping is off, fully justified will not work.  Line wrapping will automatically take string and divide the line and place what will not fit on the next line.  Without it, the text will run off the end of the line.  If the text does not fit on a line, it will break at the end of a word and place that part of the text on the current line.  The remainder of the line will be placed on the next line if it will fit.  If the remainder of the text does not fit on the line it will be broken at the end of the  word and the remainder will be placed on the next line.  This will continue until the end of the text is reached.  Full justification indicates that all lines will start and end in the same place.  
    Full justification is accomplished by adding extra spaces in between words on the line until it reaches the end of the line.  It will first insert a blank between the first two words in the text.  Next, it will add an extra space between the second and third words on the line.  It will continue doing this with successive words in the text.  If it runs out of words and has not fully justified the text, it start over with the first two words and proceed on from there.  The default values for line wrapping and full justification is true.

Format:

    setPageInfo (lineWrap, fullyJustified)

 * lineWrap turns line wrapping on if the value is set true and off if it is set to false

 * fullyJustified  turns full justification on if the value is set true and off if it is set to false

Examples:

    npdf.setPageInfo (true, true)
    npdf.setPageInfo (true, false)
    npdf.setPageInfo (false, false)
    npdf.setPageInfo (false, true)

 * In the first example, both line wrapping and fully justification are turned on.  Therefore, the text in the PDF will be line wrapped and each full line will be fully justified.

 * In the second example, line wrapping is turned on, but full justification is not.  Therefore, the text in the PDF will be line wrapped, but each line will not be fully justified.

 * In the third example, both are turned off.  Therefore, no line wrapping will take place and the text can run off the end of the page.  Also, each line will be jagged at the end.

 * In the last example, line wrapping is turned off and full justification is on.  However, when line wrapping is off, so is fully justification.  Therefore, this is them same as example three.

**setLineWrap**

This will allow the line wrapping to be turned on and off.  Line wrapping will automatically take string and divide the line and place what will not fit on the next line.  Without it, the text will run off the end of the line.  If the text does not fit on a line, it will break at the end of a word and place that part of the text on the current line.  The remainder of the line will be placed on the next line if it will fit.  If the remainder of the text does not fit on the line it will be broken at the end of the word and the remainder will be placed on the next line.  This will continue until the end of the text is reached.  The default value for line wrapping is true.

Format:

    setLineWrap (lineWrap)

 * lineWrap turns line wrapping on if the value is set true and off if it is set to false

Examples:

    npdf.setLineWrap (true)
    npdf.setLineWrap (false)

 * In the first example, line wrapping is turned on.  Therefore, the text in the PDF will be line wrapped.

 * In the second example, line wrapping is turned of, but full justification is not.  Therefore, the text in the PDF will not be line wrapped.

**setFullJustification**

This will allow the fully justified to be turned on and off.  The fully justified will only work if line wrapping is turned on.  If line wrapping is off, fully justified will not work.  Full justification indicates that all lines will start and end in the same place.  Full justification is accomplished by adding extra spaces in between words on the line until it reaches the end of the line.  It will first insert a blank between the first two words in the text.  Next, it will add an extra space between the second and third words on the line.  It will continue doing this with successive words in the text.  If it runs out of words and has not fully justified the text, it start over with the first two words and proceed on from there.  The default value for full justification is true.

Format:

    setFullJustification (fullyJustified)

 * fullyJustified turns full justification on if the value is set true and off if it is set to false

Examples:

    npdf.setFullJustification (true)
    npdf.setFullJustification (false)

 * In the first example, full justification is turned on.  Therefore, each full line will be fully justified.

 * In the second example, full justification is turned off.  Therefore, each line will be jagged at the end.

**setTab**

This will set the tab amount when the tab method is invoked.

Format:

    setTab (length, units)

 * length the length of the tab in either inches or points that will be tabbed when the tab method is invoked.

 * units indicates whether the length is in inches or points.  The valid values are 'INCHES' (default) or 'POINTS'.  This is an optional parameter.

 * This method returns true if an error occurred and false if there was no error.  An error occurs if the units are not INCHES or POINTS.

Error Message:

 * If the units are not INCHES or POINTS the following error messages is displayed in the console:

  - Error in setTab: The units are *units-value*.  They should be INCHES or POINTS; therefore, using default values.

Example:

    ndpf.setTab (0.5);
    npdf.setTab (1, 'INCHES');

 * The first example will set the tab at 0.5 inches.  The second parameter is optional and was not set, since the default is inches.  If the user want to specify it in points, then the second parameter was needed to set it as 'POINTS'.

 * The second example will set the tab at 1 inch.  The second parameter was not needed, since the default was 'INCHES'.

**setHeading**

This will allow you to set up the heading that will be displayed on each page.  The value passed to this method is an object that describes how the heading is to be displayed at the top of the page.  Also, any time the end of page is reached, it will automatically print the heading at the top of the next page and increment the page number.

Format:

    setHeading (heading, print)

The heading is an object of the following format:


    {
        titles: [],
        left: [],
        right: [],
        isPage: false,
        pageNumLoc: [],
        blankLines: 1
    }

 * The titles array contains the titles for the header.  The PDF can have several title lines.  The number depends on how many elements are in the titles array.  The default value is an empty array, indicating no headers to display.  The titles are                 centered on the line.  The array is a string array.

 * The left array is used to place other items in the heading to the left of the title on that line.  The number of elements in the left does not have to match the number of elements in title; however, it will display all the items in left.  The default is an empty array indicating no items to display left of the title.  The array is a string array.

 * The right array is used to place other items in the heading to the right of the title on that line.  Again, the number of elements do not have to match the number of elements in either titles or left.  All the items in the right array will be displayed.  The default is an empty array indicating no items to display right of the title.  The array is a string array.

 * The isPage field indicates whether or not you want the page number to be displayed.  If the value is true, the page number is displayed and values must be supplied to the pageNumLoc array.  If the value is false, the page number will not be displayed and values do not have to be given to the pageNumLoc array.  The default value is false, indicating no page numbers.

 * The pageNumLoc array indicates where the page number is to appear in the heading.  The first value is a number indicating the element in the left or right array in which the page number is to be appended to the value in that array position.  The second value is either 'LEFT' or 'RIGHT' indicating whether the page number is appended to the value in the left array or the right array.  For example, suppose the following pageNumLoc: [0, 'RIGHT'].  This would mean that the page number would be appended to
the value that is in the first element of the right array.  The default is an empty array.  The array only needs to be populated if the pageNum is set to true.

 * The blankLines field indicates the number of blank lines that should be printed after the last heading line has been printed.

 * print indicates whether the page header should be printed after the heading has been set up (true) or not (false).  This is an optional parameter with a default value of true.  If the value is false, the user must call the printHeading method to get the page heading on the first page.

 * This method returns true if an error occurred in the set up of the heading; otherwise, true is returned if there are no errors.  An error occurs if the second value in pageNumLoc array is not LEFT or RIGHT.

Error Messages:

 * If the second element in the array pageNumLoc is not LEFT or RIGHT, the following error message will be displayed in the console:

  - Error in setHeading: The second element in the pageNumLoc for a heading should have the value of LEFT or RIGHT.  Page number will not be displayed.

  The page number will not be displayed, since it does not know the location of the page number.


Examples:

Example 1:

    var heading = {
        titles: ['Rat Weight Report'],
        left: ['Report Date: 05/06/2017', 'Report Time: 12:34:56'],
        right: ['Page: '],
        isPage: true;
        pageNumLoc: [0, 'RIGHT'],
        blankLines: 2
    }

    npdf.setHeading (heading);

The output for the header will look similar to the following:

     Report Date: 05/06/2017                     Rat Weight Report                           Page: 1
     Report Time: 12:34:56

There will be one blank line after the Report Time line.  The print parameter is not specified and the default value is true; therefore, the page heading will be printed.

Example 2:

    var heading2 = {
        titles: ['The Baseball', 'Batting Average', 'Report'],
        left: ['Quarter: First', 'Num Players: 8,000', 'Page: '],
        right: [],
        isPage: true,
        pageNumLoc: [2, 'LEFT'],
        blankLines: 2
    }

    npdf.setHeading (heading2);

The output for the header will look similar to the following:

        Quarter: First                                  The Baseball
        Num Players: 8,000                            Batting Average
        Page: 1                                            Report

There will be two blank lines after the Page line.  The print parameter is not specified and the default value is true; therefore, the page heading will be printed.

Example 3:

    var heading3 = {
        titles: ['The Baseball', 'Batting Average', 'Report'],
        left: ['Quarter: First', 'Num Players: 8,000'],
        right: [],
        isPage: false,
        pageNumLoc: [],
        blankLines: 2
    }

    npdf.setHeading (heading3, false);
    npdf.printHeading();

The output for the header will look similar to the following:

        Quarter: First                                  The Baseball
        Num Players: 8,000                            Batting Average
                                                           Report

There will be two blank lines after the Page line.  The print parameter is specified as false; therefore, the user must call the printHeading method to print out the page heading.

**setSimpleHeading**

This will all you to set up a one line heading with a title and possibly a page number on the left or right of the title.

Format:

    setSimpleHeading (title, isPage, right, print)

 * title the heading title to be centered on the lines

 * isPage  indicates whether the header should contain a page number or not.  If the value is true, 'Page: ' followed by a page number will appear.  If the value is false, no page number will appear.

 * right   indicates whether the page number is to the right or left of the title.  If the value is true, then 'Page: ' followed by the page number will appear to the right of the title.  If the value is false, then 'Page: ' followed by the page number will appear to the left of the title.

 * print indicates whether the page header should be printed after the heading has been set up (true) or not (false).  This is an optional parameter with a default value of true.  If the value is false, the user must call the printHeading method to get the page heading on the first page.

Example:

Example 1:

    npdf.setSimpleHeading ('Rat Weight Report, true, true);

 * The output for the header will look similar to the following:

        Rat Weight Report                               Page: 1

 There will be on blank line after the header.  The print parameter is not specified and the default value is true; therefore, the page heading will be printed.

Example 2:

    npdf.setSimpleHeading ('Rat Weight Report, true, false);

* The output for the header will look similar to the following:

        Page: 1                                   Rat Weight Report


  There will be on blank line after the header.The print parameter is not specified and the default value is true; therefore, the page heading will be printed.

Example 3:

    npdf.setSimpleHeading ('Rat Weight Report, false, false, false);

    npdf.printHeading();

 * The output for the header will look similar to the following:

                    Rat Weight Report


   There will be on blank line after the header.  The print parameter is specified as false; therefore, the user must call the printHheading method to print out the page heading.


**setHeadingBlankLines**

This will set the number of blank lines that are printed after the heading is printed.

Format:

    setHeadingBlankLines (blankLines)

 * blankLines the number of blank lines to be printed.

Example:

    npdf.setHeadingBlankLines (2);

 * There will be two blank lines printed after the heading is printed.

**printHeading**

This will print out the heading and should only be used on the first page.  If want page breaks in the middle of the page use printNewPage.  This will not automatically jump to the beginning of the next page.  It will print the heading where you currently are on the page.  Line wrapping and full justification will not occur when printing a heading.  This method generally does not have to be called, since it can be called in setHeading and setSimpleHeading.  Also, it will automatically be called when a page break occurs.

Format:

    printHeading();

Example:

    npdf.printHeading();

 * This will print the heading on the page at the current page location.  Line wrapping and full justification will not occur when printing a heading.

**printNewPage**

This will create a new page in the PDF and print the heading at the top of the new page.  Line wrapping and full justification will not occur when printing a heading.

Format:

    printNewPage (print)

 * print indicates whether a new page should be created and the heading printed on that page (true) or not (false).  If at the end of the page, a new page will automatically be generated and the heading printed regardless of the value of print. This value should always be set to true, to generate a new page and heading.  Line wrapping and full justification will not occur when printing a heading.

Example:

    npdf.printNewPage (true);

 * This will generate a new page and print the heading at the top of it.

**printText**

This will print the text to the PDF and will leave the cursor at the current position on the line.  This way the next text to be printed will pick up from where this one left off.  Line wrapping and full justification will occur if these values are set to true.

Format:

    printText (text)

 * text the text to be printed in the PDF.

Example

    npdf.printText ('This is a line of text');

 * The 'This is a line of text' will be printed to the PDF from the current cursor location on the line and the cursor will be left after the text that was printed.  Line wrapping and full justification will occur if these values are set to true.

**printBoldText**

This will print the text to the PDF as bold text and will leave the cursor at the current position on the line.  This way the next text to be printed will pick up from where this one left off.  Line wrapping and full justification will occur if these values are set to true.  The style of text will revert back
to the style it was before this method was called.

Format:

    printBoldText (text)

 * text the text to be printed in the PDF as bold text.

Example

    npdf.printBoldText ('This is a line of text');

 * The 'This is a line of text' will be printed to the PDF as bold text from the current cursor location on the line and the cursor will be left after the text that was printed.  Line wrapping and full justification will occur if these values are set to true.  The style of text will revert back
to the style it was before this method was called.

**printItalicText**

This will print the text to the PDF as italicized text and will leave the cursor at the current position on the line.  This way the next text to be printed will pick up from where this one left off.  Line wrapping and full justification will occur if these values are set to true.  The style of text will revert back
to the style it was before this method was called.

Format:

    printItalicText (text)

 * text the text to be printed in the PDF as bold italicized.

Example

    npdf.printItalicText ('This is a line of text');

 * The 'This is a line of text' will be printed to the PDF as italicized text from the current cursor location on the line and the cursor will be left after the text that was printed.  Line wrapping and full justification will occur if these values are set to true.  The style of text will revert back
to the style it was before this method was called.

**printBoldItalicText**

This will print the text to the PDF as bold italicized text and will leave the cursor at the current position on the line.  This way the next text to be printed will pick up from where this one left off.  Line wrapping and full justification will occur if these values are set to true.  The style of text will revert back to the style it was before this method was called.

Format:

    printBoldItalicText (text)

 * text the text to be printed in the PDF as bold italicized text.

Example

    npdf.printBoldItalicText ('This is a line of text');

 * The 'This is a line of text' will be printed to the PDF as bold italicized text from the current cursor location on the line and the cursor will be left after the text that was printed.  Line wrapping and full justification will occur if these values are set to true.  The style of text will revert back
to the style it was before this method was called.


**printTextLine**

This will print the text to the PDF and will advance the cursor to the next line.  The printing will start at the current cursor position on the line.  Line wrapping and full justification will occur if these values are set to true.

Format:

    printTextLine (text)

 * text the text to be printed in the PDF.

Example

    npdf.printTextLine ('This is a line of text');

 * The 'This is a line of text' will be printed to the PDF from the current cursor location on the line and the cursor will be placed at the beginning of the next line.  Line wrapping and full justification will occur if these values are set to true.

**printBoldTextLine**

This will print the text to the PDF as bold text and will advance the cursor to the next line.  The printing will start at the current cursor position on the line.  Line wrapping and full justification will occur if these values are set to true.  The style of text will revert back
to the style it was before this method was called.

Format:

    printBoldTextLine (text)

 * text the text to be printed in the PDF as bold text.

Example

    npdf.printBoldTextLine ('This is a line of text');

 * The 'This is a line of text' will be printed to the PDF as bold text from the current cursor location on the line and the cursor will be placed at the beginning of the next line.  Line wrapping and full justification will occur if these values are set to true.  The style of text will revert back
to the style it was before this method was called.

**printItalicTextLine**

This will print the text to the PDF as italicized text and will advance the cursor to the next line.  The printing will start at the current cursor position on the line.  Line wrapping and full justification will occur if these values are set to true.  The style of text will revert back
to the style it was before this method was called.

Format:

    printItalicTextLine (text)

 * text the text to be printed in the PDF as italicized text.

Example

    npdf.printItalicTextLine ('This is a line of text');

 * The 'This is a line of text' will be printed to the PDF as italicized text from the current cursor location on the line and the cursor will be placed at the beginning of the next line.  Line wrapping and full justification will occur if these values are set to true.  The style of text will revert back
to the style it was before this method was called.

**printBoldItalicTextLine**

This will print the text to the PDF as bold italicized text and will advance the cursor to the next line.  The printing will start at the current cursor position on the line.  Line wrapping and full justification will occur if these values are set to true.  The style of text will revert back
to the style it was before this method was called.

Format:

    printBoldItalicTextLine (text)

 * text the text to be printed in the PDF as bold italicized text.

Example

    npdf.printBoldItalicTextLine ('This is a line of text');

 * The 'This is a line of text' will be printed to the PDF as bold italicized text from the current cursor location on the line and the cursor will be placed at the beginning of the next line.  Line wrapping and full justification will occur if these values are set to true.  The style of text will revert back
to the style it was before this method was called.

**printCenterTextLine**

This will print the test in the center of the line in the PDF.  The text should fit on the line as there will be no line wrapping or full justification regardless of what they are set to.

Format:

    printCenterTextLine (text)

 * text the text to centered on the line.

Example:

    npdf.printCenterTextLine ('This text will be centered on the line');

 * The text 'This text will be centered on the line' will be centered on the line.  Line wrapping and full justification will not occur regardless of what these values are set to.

**printCenterBoldTextLine**

This will print the test in the center of the line in the PDF as bold text.  The text should fit on the line as there will be no line wrapping or full justification regardless of what they are set to.  The style of text will revert back to the style it was before this method was called.

Format:

    printCenterBoldTextLine (text)

 * text the text to centered and bold on the line.

Example:

    npdf.printCenterBoldTextLine ('This text will be centered on the line');

 * The text 'This text will be centered on the line' will be centered and bold on the line.  Line wrapping and full justification will not occur regardless of what these values are set to.  The style of text will revert back to the style it was before this method was called.

**printCenterItalicTextLine**

This will print the test in the center of the line in the PDF as italicized text.  The text should fit on the line as there will be no line wrapping or full justification regardless of what they are set to.  The style of text will revert back to the style it was before this method was called.

Format:

    printCenterItalicTextLine (text)

 * text the text to centered and italicized on the line.

Example:

    npdf.printCenterItalicTextLine ('This text will be centered on the line');

 * The text 'This text will be centered on the line' will be centered and italicized on the line.  Line wrapping and full justification will not occur regardless of what these values are set to.  The style of text will revert back to the style it was before this method was called.

**printCenterBoldItalicTextLine**

This will print the test in the center of the line in the PDF as bold italicized text.  The text should fit on the line as there will be no line wrapping or full justification regardless of what they are set to.  The style of text will revert back to the style it was before this method was called.

Format:

    printCenterBoldItalicTextLine (text)

 * text the text to centered and bold italicized on the line.

Example:

    npdf.printCenterBoldItalicTextLine ('This text will be centered on the line');

 * The text 'This text will be centered on the line' will be centered and bold italicized on the line.  Line wrapping and full justification will not occur regardless of what these values are set to.  The style of text will revert back to the style it was before this method was called.

**printBlankLines**

This will print a number of blank lines in the PDF.  If printing blank lines causes a page break, then the remaining blank lines after the page break will not be printed.  There is no sense in printing blank lines at the top of a new page.

Format:

    printBlankLines (num)

 * num the number of blank lines to print

Example:

    npdf.printBlankLines (2);

 * This will print two blank lines to the PDF.

**tab**

This will tab to the next tab position from the current position on the line.  The amount that was set with the setTab method.  If the setTab method did not set a tab, it will default to 1/2 inch.  This means that if the tab method was called and the line is at 5 3/4 inches and the tab was set at 1/2 inch, the next tab position on the line would be at 6 inches.

Format:

    tab (num)

 * num the number of tabs to tab over.  This is an optional parameter, since it defaults to 1.

 * This method returns true if an error occurred and false if there was no error.  An error occurs the tab goes past the right margin.

Error Message:

 * If tab goes past the end of the right margin the following error messages is displayed in the console:

  - Error in tab: Past the right margin.  Advancing to the next line.

Example:

    npdf.setTab (0.5);
    ...
    npdf.tab();
    npdf.tab (2);

 * In the first example, it will tab 1/2 inch from the current position on the line.

 * In the second example, it will tab 1/2 inch twice format he current position on the line.

 **moveOver**

 This will move the current position on the line over the specified length.  The length can be in either
 INCHES or POINTS.

 Format:

    moveOver (length, units)

 * length the length to move over on the line.

 * units indicates whether the length is in inches or points.  The valid values are 'INCHES' (default) or 'POINTS'.  This is an optional parameter.

 * This method returns true if an error occurred and false if there was no error.  An error occurs if the units are not INCHES or POINTS.  Another error occurs if moving past the right margin.

 **moveTo**

 This will move the current position on the line to the specified length.  The length can be in either
 INCHES or POINTS.

 Format:

    moveTo (length, units)

 * length the length to move to on the line.

 * units indicates whether the length is in inches or points.  The valid values are 'INCHES' (default) or 'POINTS'.  This is an optional parameter.

 * This method returns true if an error occurred and false if there was no error.  An error occurs if the units are not INCHES or POINTS.  Another error occurs if moving past the right margin.

Error Message:

 * If the units are not INCHES or POINTS the following error messages is displayed in the console:

  - Error in setTab: The units are *units-value*.  They should be INCHES or POINTS; therefore, using default values.

 * If tab goes past the end of the right margin the following error messages is displayed in the console:

  - Error in moveTo: Past the right margin.  Advancing to the next line.

Example:

    ndpf.moveTo (0.5);
    npdf.moveTo (1, 'INCHES');

 * The first example will move the position on the line to 0.5 inches.  The second parameter is optional and was not set, since the default is inches.  If the user want to specify it in points, then the second parameter was needed to set it as 'POINTS'.

 * The second example will move the position on the line to 1 inch.  The second parameter was not needed, since the default was 'INCHES'.

**createPDFFile**

This will save the PDF in the named file, but first it will print the footer on each page.

Format:

    createPDFFile (filename)

 * filename the name of the file to place the PDF in

Example:

    npdf.createPDFFile (test.pdf);

 * This will save the PDF in the current directory under the name of test.pdf.

**getPDFContents**

This will return the contents of the PDF as a string, after printing the footer on each page.

Format:

    getPDFContents()

Example:

    var pdfContents = npdf.getPDFContents();

 * The variable pdfContents will contain the contents of the PDF that was created.  Below is an example in electron of how to create an PDF file and display the contents of the PDF in Adobe.

# Other Methods

These are other methods in the javascript file that are called by the above methods.  These can be called, but should be not.  The are included so that you know what these files are in the javascript file.

**fitOnLine**

This will make sure that the text will fit on a line.  If the text does not fit on a line, it will break at the end of a word and place that part of the text on the current line.  The remainder of the line will be placed on the next line if it will fit.  If the remainder of the text does not fit on the line it will be broken at the end of the word and the remainder will be placed on the next line.  This will continue until the end of the text is reached.  The lines that have been broken will be placed in an array and this is the value to be returned.  

Format:

    fitOnLine (text)

 * text the text that is to be fit onto lines

 * This method returns the text that was broken down into lines into an array in which each element represents a line in the PDF.

Example:

    npdf.fitOnLine ('This is a long piece of text that may not fit all on one line');

 * Depending on how many characters will fit on a line, this may return the following:

        line[0] = 'This is a long piece of text that may not fit all'
        line[1] = 'all on one line'

**fullyJustify**

This will fully justify a line in the PDF.  It will do this by adding extra spaces in between words on the line until it reaches the end of the line.  It will first insert a blank between the first two words in the text.  Next, it will add an extra space between the second and third words on the line.  It will continue doing this with successive words in the text.  If it runs out of words and has not fully  justified the text, it start over with the first two words and proceed on from there.

Format:

    fullyJustify (text, maxWidth)

 * text the text to be fully justified

 * maxWidth the maximum width of the line in points for the full justification

 * This method returns the fully justified text as a string.

Example:

    npdf.fullyJustify ('This is a long piece of text that may not fit all on one line', 522);

 * Depending on how many spaces need to be inserted until it reaches the maximum width, it may return the following:

        This  is  a  long  piece  of text that may not fit all on one line

 * There are extra space between the following words:

        This and is
        is and a
        a and long

**insert**

This will insert a string into the middle of another string.

Format:

    insert (str, index, value)

 * str the string to insert the other string into

 * index the index into str into which the other string should be inserted into

 * value the other string to insert into str

 * This method will return the string with value inserted into it at index.

Example:

    var str = 'The boy on the block';
    var newStr = insert (str, 4, ' new');

 * The value of newStr will be 'The new boy on the block'

**printFooterCenterTextLine**

This will print the text in the center of the line in the footer.  The text should fit on the line as there will be no line wrapping.  This method should never be called by the user.

Format:

    printFooterCenterTextLine (text, linePostion)

 * text the text to centered on the line.

 * linePosition  the line on the page to print the text

Example:

    npdf.printFooterCenterTextLine ('This is some text', 432);

 * This will print and center on the line the text 'This is some text', 432 points from the top of the page.

**printFooterRightTextLine**

This will print the text so that it ends on the right margin in the footer.  The text should fit on the      line as there will be no line wrapping.  This method should never be called by the user.

Format:

    printFooterRightTextLine (text, text_width, linePosition)

 * text the text to centered on the line.

 * text_width the width of the largest line in the footer.  This is so all the text for each line will line up.

 * linePosition the line on the page to print the text

Example:

    npdf.printFooterRightTextLine ('This is some text', 123, 432)

 * This will print 'This is some text', 123 points from the right margin and 432 points from the top of the page

**determineLargest**

This will determine the largest line in the footer.  This method is called if the location of the footer lines is RIGHT.  This will make sure that all the lines in the footer start in the same location and the largest footer line will end at the right margin.  This method should never be called by the user.

Format:

    determineLargest();

 * This will determine the largest line in the footer.  This is called by pageFooter, when the footer location is set to RIGHT.

**pageFooter**

This will display the page footer at the bottom of each page.  This is called when the PDF is being saved to a file or when the contents of the PDF is being retrieved.

Format:

    pageFooter()

Example:

    npdf.pageFooter();

 * This will print the page footer at the bottom of each page in the PDF.

**determineTabPosition**

This will determine where the next tab position is on the line, by using the current position on the line to find the next position.  This method should not be called by the user.

Format:

    determineTabPosition (length)

 * length the length of each tab in points

Example:

    npdf.determineTabPosition (72)

 * This will find the next tab position on the current line.  The tabs are set at one inch intervals.

**pastEndOfLine**

This will check to see if the current position on the line is past the right margin, and if it is an error message will be displayed.  The current position on the line will advance to the beginning of the next line.  This method should not be called by the user.

Format:

    pastEndOfLine (method)

 * method the method that called the pastEndOfLine method

 * This method returns true if an error occurred and false if there was no error.  An error occurs if moving past the right margin.

Error Message:

 * If tab goes past the end of the right margin the following error messages is displayed in the console:

  - Error in moveOver: Past the right margin.  Advancing to the next line.

Example:

    npdf.pastEndOfLine ('moveOver');

 * The will check to see if the current position on the line is past the right margin and if it is will print out an error message.


# Using NCTR PDF with Electron to save a PDF file

In the file that is using NCTR PDF, the following should appear:

        // Generate the PDF using the above methods

        var pdfContents = apdf.getPDFContents();    // Retrieve the contents of the PDF

        // Save the contents of the PDF in the file c:\ElectronApps\pdftest\reports\test.pdf
        // This is calling ipcMain with 'write-file' in main.js to save the file
        var fileName = ipcRenderer.sendSync ('write_file', "c:\\ElectronApps\\pdftest\\reports\\test.pdf", pdfContents);

        if (fileName !== null) {    // If a file was created, open the PDF with Adobe or whatever program opens a PDF file
            shell.openItem (fileName);
        }

In the main.js file the following should appear:

        const { ipcMain, dialog } = require('electron');    // This should be at the top of the file

        ipcMain.on ('write_file', (event, fileName, pdfContents) => {
            const options = {   // The options for the dialog box
                title: "Save PDF File", // Title for the dialog box
                defaultPath: fileName,  // The file name to display in the dialog box
            };

            var fileName = dialog.showSaveDialog (win, options);    // Display the dialog box

            if (fileName !== undefined) {   // The user pressed the OK button
                fs.writeFileSync (fileName, pdfContents);   // Save the PDF in the file
            } else {    // The user pressed the cancel button, so the file was not saved
                fileName = null;    // Return null for the file name to indicate the file was not saved
            }

            event.returnValue = fileName;   // Return the file name the PDF was saved in
        })

# Overall Example

    import React from 'react';
    import './App.css';
    import logo from './logo.svg';
    import autoBind from 'react-autobind';
    import PDFWriter from 'pdf-writer';

    /*******************************************************************************************************************************
    *
    * This class is used to test PDFWriter
    *
    *******************************************************************************************************************************/
    export default class App extends React.Component {
        /***************************************************************************************************************************
        *
        * Constructor
        *
        ***************************************************************************************************************************/
        constructor() {
        super();
        autoBind(this);
        }

        /***************************************************************************************************************************
        *
        * This will render the HTML page, which contains a single button to generate the PDF
        *
        ***************************************************************************************************************************/
        render() {
            return (<div>
            <button name="PDF" onClick={this.generatePDF}>Generate PDF</button>
            </div>)
        }

        /***************************************************************************************************************************
        *
        * This will generate the PDF and is called when the Generate PDF button is clicked
        *
        ***************************************************************************************************************************/
        generatePDF() {
        var heading = { // Build the heading for each page
            left: ["First Left", "Second Left", "Third Left"],
            titles: ["This is the title"],
            right: ["First Right", "Second Right", "Page: "],
            pageNum: true,
            pageNumLoc: [2, 'RIGHT'],
            blankLines: 2
        };

        var apdf = new PDFWriter ("PORTRAIT");  // Intantiate the PDF

        apdf.setTextColor ("#FF0000");
        apdf.setHeadingFont ("Times New Roman", 16, 'bold');
        apdf.setHeading (heading);
    //      pdf.setSimpleHeading ("This is the title", true, true);
        apdf.setMargins (0.5, 0.5, 1, 1, "INCHES");
        apdf.setFontStyle ('plain');

        for (let i = 0; i < 40; i++) {  // Print 40 lines of the same text to show page breaks
            apdf.printTextLine (i + " This is some text.  This is even some more text that will make this line even longer than it was before, but not after.");
            if (i === 20) { // Change the font size after 20 lines of the text
            apdf.setFontSize(16);
            }
        }

        // Add additional text to test printText and printTextLine together
        apdf.printText ("This is the last line of text.");
        apdf.printTextLine ("This is a long last line of text to see if this works or not.  I hope it does.")

        // Add additional text to test printNewPage, printCenterTextLine, printNewLine, and printTextLine
        apdf.printNewPage (true);
        apdf.printCenterTextLine ("This text should be centered on the line");
        apdf.printBlankLines (3);
        apdf.printTextLine ('End of Text');

      apdf.printBoldText ('This is bold text');
      apdf.printText ('This is normal text');
      apdf.printBoldTextLine ('This is more bold text');
      apdf.printTextLine ('This is normal text');

      apdf.printItalicText ('This is italic text');
      apdf.printText ('This is normal text');
      apdf.printItalicTextLine ('This is more italic text');
      apdf.printTextLine ('This is normal text');

      apdf.printBoldItalicText ('This is bold italic text');
      apdf.printText ('This is normal text');
      apdf.printBoldItalicTextLine ('This is more bold italic text');
      apdf.printTextLine ('This is normal text');

      apdf.printCenterBoldTextLine ('This is bold text');
      apdf.printCenterTextLine ('This is normal text');
      apdf.printCenterItalicTextLine ('This is italic text');
      apdf.printCenterTextLine ('This is normal text');
      apdf.printCenterBoldItalicTextLine ('This is bold italic text');
      apdf.printCenterTextLine ('This is normal text');

      error = apdf.tab (2);
      if (error) {
        console.log ('tab error');  
      }
      apdf.printTextLine ('This is some text');

      apdf.printText ('This is a lot of text');
      error = apdf.tab ();
      if (error) {
        console.log ('tab error');
      }
      apdf.printTextLine ('This is some more text');

      apdf.printText ('This is a lot of text');
      error = apdf.moveOver (1);
      if (error) {
        console.log ('moveOver error');
      }
      apdf.printTextLine ('This is some more text');

        // Write the contents of the PDF out to a file
        var pdfContents = apdf.getPDFContents();

        var fileName = ipcRenderer.sendSync ('write_file', "c:\\ElectronApps\\pdftest\\reports\\test.pdf", pdfContents);

        if (fileName !== null) {
            shell.openItem (fileName);
        }
    }
