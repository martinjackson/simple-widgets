/**************************************************************************************************************
 *
 *  In order to access jsPDF you must place the following in the html file:
 *
 *      <script src="jspdf.min.js"></script>
 *      <script src="jspdf.debug.js"></script>
 *
 **************************************************************************************************************/

// The size of the paper
const LETTER_WIDTH_PORTRAIT = 8.3;
const LETTER_HEIGHT_PORTRAIT = 11.7;
const LETTER_WIDTH_LANDSCAPE = 11.7;
const LETTER_HEIGHT_LANDSCAPE = 8.3;

const POINTS_PER_INCH = 72; // Number of points in one inch

const SPACING = 2;  // The spacing between lines in the PDF in points

const NO_ERROR = 0;     // No error occurred in the constructor
const MINOR_ERROR = 1;  // A minor error occurred in the constructor, but processing can continue
const MAJOR_ERROR = 2;  // A major error occurred in the constructor, but processing can NOT continue


/****************************************************************************************************************
 *
 * This class is used to generate a PDF document.
 *
 ****************************************************************************************************************/
class PDFWriter {
    /************************************************************************************************************
     *
     * Constructor
     *
     * @param orientation   the orientation of the paper (PORTRAIT or LANDSCAPE)
     *
     ************************************************************************************************************/
    constructor (orientation) {
        this.pdfStructure = {
            doc : null, // The PDF document

            pageInfo : {    // The information about the page
                width: 0,                   // The width of the page
                height: 0,                  // The height of the page
                length: 0,                  // The actual length of the page for print
                lineWrap: true,             // Indicates whether line wrapping will occur or not
                fullyJustified: true,       // Indicates whether the line should be fully justified or not (lineWrap must be true)
                tab: 0.5 * POINTS_PER_INCH, // The amount to tab when the autoTab method is used
            },

            margins : { // The margins for the page in points (margins are set for 1 one inch or 72 points)
                left: POINTS_PER_INCH,      // Left margin
                right: POINTS_PER_INCH,     // Right margin
                top: POINTS_PER_INCH,       // Top margin
                bottom: POINTS_PER_INCH,    // bottom margin
                set: false,                 // Used to see if the setMargins method is called more than once or if text has been printed.  Can only set the top and bottom margins once.
            },

            font : {    // The font for the regular text
                family: 'Times New Roman',  // The name of the font
                size: 12,                   // The size of the font
                style: 'plain',             // The style of the font (plain, bold, italic, etc)
            },

            heading_font : {    // The font for the heading
                family: 'Times New Roman',  // The name of the font
                size: 12,                   // The size of the font
                style: 'plain',             // The style of the font (plain, bold, italic, etc)
            },

            footer_font : { // The font for footer
                family: 'Times New Roman',  // The name of the footer font
                size: 12,                   // The size of the footer font
                style: 'plain',             // The style of the footer font (plain, bold, italic, etc)
            },

            footer : {  // The describes the make up of the footer, which will be at the bottom of each page
                lines: [],          // The lines of text that make up the footer
                isPage: false,      // Indicates if the page number is to be displayed as the last line in the footer (true) or not (false).  If set to true, it will automatically place the text Page: number on the last line of the footer.
                location: 'CENTER', // The location of the text within the footer.  The values are LEFT (starts in the left margin), CENTER (centered within the footer), or RIGHT (ends at the right margin).  All lines in the footer have the same location.
                isOfPart: false,    // Indicates if there should be an of part to the page number, like Page: 1 of 5, indicating this is the first of 5 pages.
                set: false,         // Indicates that a footer has been set up before any text has been printed to the PDF.  Can not set up a footer after text has been printed.
                canNotBeSet: false, // Indicates that the footer can not be set, since text has been printed to the PDF already.
            },

            heading : { // The information needed to build the heading
                titles: [],         // The titles that can be displayed (can display several titles in the heading)
                left: [],           // The information to the left of the titles to be displayed (can have several)
                right: [],          // The information to the right of the titles to be displayed (can have several)
                isPage: false,      // Indicates whether there should be a page number in the title.  If true, there must be a value for pageNumLoc.
                pageNumLoc: [],     // This indicates where the page number is to be placed in the heading.  It will be placed after the text in that location.  The first value is which one of the left or right positions it is to be placed in and the second value in the array is either left or right to
                                    // whether it should be on left side or the right side of the page.
                blankLines: 1,      // The number of blank lines after the printing of the heading
            },

            counters : {    // The counters keep track of the current position on the page
                curPos: 0,      // The current position on the line
                linePos: 0,     // The current line on the page
                pageCount: 1,   // The current page in the document
                totalPages: 1,  // The total number of pages printed in the PDF document
            },

            error : NO_ERROR,  // Indicates that an error occurred in the constructor
        };

        var paperOrientation = 'portrait';   // Indicates the orientation of the paper

        this.pdfStructure.error = NO_ERROR;

        if (orientation === 'PORTRAIT') {   // The page orientation is PORTRAIT, so set the width and height accordingly
            this.pdfStructure.pageInfo.width = LETTER_WIDTH_PORTRAIT * POINTS_PER_INCH;
            this.pdfStructure.pageInfo.height = LETTER_HEIGHT_PORTRAIT * POINTS_PER_INCH;
            this.pdfStructure.paperOrientation = 'portrait';
        } else if (orientation === 'LANDSCAPE') {    // The page orientation is LANDSCAPE, so set the width and height accordingly
            this.pdfStructure.pageInfo.width = LETTER_WIDTH_LANDSCAPE * POINTS_PER_INCH;
            this.pdfStructure.pageInfo.height = LETTER_HEIGHT_LANDSCAPE * POINTS_PER_INCH;
            this.pdfStructure.paperOrientation = 'landscape';
        } else {    // Neither PORTRAIT or LANDSCAPE
            console.log ('Error in constructor: The orientation is ', orientation, '.  It should be PORTRAIT or LANDSCAPE.  Defaulting to PORTRAIT.');
            this.pdfStructure.error = MINOR_ERROR;

            this.pdfStructure.pageInfo.width = LETTER_WIDTH_PORTRAIT * POINTS_PER_INCH;
            this.pdfStructure.pageInfo.height = LETTER_HEIGHT_PORTRAIT * POINTS_PER_INCH;
        }

        try {
            this.pdfStructure.doc = new jspdf (paperOrientation, 'pt', 'a4');   // Set the jsPDF document for generating the PDF
        }
        catch (err) {
            console.log ('Error in constructor: Probably missing either the <script src="jspdf.min.js"></script> or  <script src="jspdf.debug.js"></script> in the html');
            this.pdfStructure.error = MAJOR_ERROR;
            return null;
        }

        // Set the length of the page
        this.pdfStructure.pageInfo.length = this.pdfStructure.pageInfo.height - this.pdfStructure.margins.bottom + this.pdfStructure.font.size + SPACING;

        // Set the counters for the page
        this.pdfStructure.counters.curPos = this.pdfStructure.margins.left;
        this.pdfStructure.counters.linePos = this.pdfStructure.margins.top + this.pdfStructure.font.size;

        // Set to the default font for the document
        this.pdfStructure.doc.setFont (this.pdfStructure.font.family, this.pdfStructure.font.size, this.pdfStructure.font.style);
    }

    /********************************************************************************************
     *
     * Indicates whether no error occurred (returns 0), a minor error occurred (returns 1),
     * or a major error occurred (returns 2) in the constructor. A minor error means that
     * processing can continue, whereas a major error indicates that processing can not continue.
     *
     * @return returns 0 if there is no error, 1 if there is a minor error, and 2 if there is a4
     * major error.
     *
     ********************************************************************************************/
    getError() {
        return this.pdfStructure.error;
    }


    /***********************************************************************************************************
     *
     * This sets up the margins for the page in a PDF document.
     *
     * @param left      the left margin for the page
     * @param right     the right margin for the page
     * @param top       the top margin for the page (1 is the default)
     * @param bottom    the bottom margin for the page (1 is the default)
     * @param units     indicates whether the margin values are in 'INCHES' or 'POINTS' (INCHES is the default)
     *
     * @return returns true if an error occurred and false if there was no error
     *
     ***********************************************************************************************************/
    setMargins (left, right, top = 1, bottom = 1, units = 'INCHES') {
        var error = false;  // Indicates that an error occurred

        if (this.pdfStructure.margins.set === true) { // This method has already been called during the generation of the PDF or text has been printed to the PDF
            console.log ("Error in setMargins: Can not use setMargins to set the margins any longer, use setSideMargins, setLeftMargin, or setRightMargin.");
            error = true;
        } else {    // This method has not been called already
            if (units === 'INCHES') {   // The margins are in inches, so convert to points
                this.pdfStructure.margins.left = left * POINTS_PER_INCH;
                this.pdfStructure.margins.right = right * POINTS_PER_INCH;
                this.pdfStructure.margins.top = top * POINTS_PER_INCH;
                this.pdfStructure.margins.bottom = bottom * POINTS_PER_INCH;
            } else if (units === 'POINTS') {
                this.pdfStructure.margins.left = left;
                this.pdfStructure.margins.right = right;
                this.pdfStructure.margins.top = top;
                this.pdfStructure.margins.bottom = bottom;
            } else {    // Units are not INCHES or POINTS
                console.log ('Error in setMargins: The units are', units, '.  They should be INCHES or POINTS; therefore, using default values.');
                error = true;

                // Set to the default values
                this.pdfStructure.margins.left = POINTS_PER_INCH;
                this.pdfStructure.margins.right = POINTS_PER_INCH;
                this.pdfStructure.margins.top = POINTS_PER_INCH;
                this.pdfStructure.margins.bottom = POINTS_PER_INCH;
            }

            // Reset the page length base on the margins being set
            if (this.pdfStructure.footer.set === true) {
                // The footer size is the number of lines in the footer times the footer font size.  If there is to be a
                // page number as the last line in the footer, then add on another footer font size for the page number.
                // To calculate the page length take the height of the page minus the bottom margin and the footer length
                // to get the page length.
                this.pdfStructure.pageInfo.length = this.pdfStructure.pageInfo.height - this.pdfStructure.margins.bottom -
                    (this.pdfStructure.footer_font.size * this.pdfStructure.footer.lines.length +
                    ((this.pdfStructure.footer.isPage) ? this.pdfStructure.footer_font.size : 0));
            } else {
                this.pdfStructure.pageInfo.length = this.pdfStructure.pageInfo.height - this.pdfStructure.margins.bottom +
                    this.pdfStructure.font.size + SPACING;
            }

            // Reset the counters base on the margins being set
            this.pdfStructure.counters.curPos = this.pdfStructure.margins.left;

            this.pdfStructure.margins.set = true;
        }

        return error;
    }

    /***********************************************************************************************************
     *
     * This will change the left and right margins for the page in a PDF document.
     *
     * @param left      the left margin for the page
     * @param right     the right margin for the page
     * @param units     indicates whether the margin values are in 'INCHES' or 'POINTS' (INCHES is the default)
     *
     * @return returns true if an error occurred and false if there was no error
     *
     ***********************************************************************************************************/
    setSideMargins (left, right, units = 'INCHES') {
        var error = false;  // Indicates that an error occurred

        if (units === 'INCHES') {   // The margins are in inches, so convert to points
            this.pdfStructure.margins.left = left * POINTS_PER_INCH;
            this.pdfStructure.margins.right = right * POINTS_PER_INCH;
        } else if (units === 'POINTS') {
            this.pdfStructure.margins.left = left;
            this.pdfStructure.margins.right = right;
        } else {    // Units are not INCHES or POINTS
            console.log ('Error in setSideMargins: The units are', units, '.  They should be INCHES or POINTS; therefore, using default values.');
            error = true;

            // Set to the default values
            this.pdfStructure.margins.left = POINTS_PER_INCH;
            this.pdfStructure.margins.right = POINTS_PER_INCH;
        }

        this.pdfStructure.counters.curPos = this.pdfStructure.margins.left;

        return error;
    }

    /***********************************************************************************************************
     *
     * This will change the left margin for the page in a PDF document.
     *
     * @param left      the left margin for the page
     * @param units     indicates whether the margin values are in 'INCHES' or 'POINTS' (INCHES is the default)
     *
     * @return returns true if an error occurred and false if there was no error
     *
     ***********************************************************************************************************/
    setLeftMargin (left, units = 'INCHES') {
        var error = false;  // Indicates that an error occurred

        if (units === 'INCHES') {   // The margins are in inches, so convert to points
            this.pdfStructure.margins.left = left * POINTS_PER_INCH;
        } else if (units === 'POINTS') {
            this.pdfStructure.margins.left = left;
        } else {    // Units are not INCHES or POINTS
            console.log ('Error in setLeftMargin: The units are', units, '.  They should be INCHES or POINTS; therefore, using default values.');
            error = true;

            // Set to the default values
            this.pdfStructure.margins.left = POINTS_PER_INCH;
        }

        this.pdfStructure.counters.curPos = this.pdfStructure.margins.left;

        return error;
    }

    /***********************************************************************************************************
     *
     * This will change the right margin for the page in a PDF document.
     *
     * @param right     the right margin for the page
     * @param units     indicates whether the margin values are in 'INCHES' or 'POINTS' (INCHES is the default)
     *
     * @return returns true if an error occurred and false if there was no error
     *
     ***********************************************************************************************************/
    setRightMargin (right, units = 'INCHES') {
        var error = false;  // Indicates that an error occurred

        if (units === 'INCHES') {   // The margins are in inches, so convert to points
            this.pdfStructure.margins.right = right * POINTS_PER_INCH;
        } else if (units === 'POINTS') {
            this.pdfStructure.margins.right = right;
        } else {    // Units are not INCHES or POINTS
            console.log ('Error in setRightMargin: The units are', units, '.  They should be INCHES or POINTS; therefore, using default values.');
            error = true;

            // Set to the default values
            this.pdfStructure.margins.right = POINTS_PER_INCH;
        }

        this.pdfStructure.counters.curPos = this.pdfStructure.margins.left;

        return error;
    }

    /**********************************************************************************************************
     *
     * This will set the font (font name, size, and style).
     *
     * @param fontName  the name of the font
     * @param fontSize  the size of the font
     * @param fontStyle the style of the font
     *
     **********************************************************************************************************/
    setFont (fontName, fontSize, fontStyle) {
        this.pdfStructure.doc.setFont (fontName, fontStyle);
        this.pdfStructure.doc.setFontSize (fontSize);

        // Store the font information for doing calculations
        this.pdfStructure.font.family = fontName;
        this.pdfStructure.font.style = fontStyle;
        this.pdfStructure.font.size = fontSize;
    }

    /***********************************************************************************************************
     *
     * This will set the font name and font style.
     *
     * @param fontName  the name of the font
     * @param fontStyle the style of the font
     *
     ***********************************************************************************************************/
    setFontAndStyle (fontName, fontStyle) {
        this.pdfStructure.doc.setFont (fontName, fontStyle);

        // Store the font information for doing calculations
        this.pdfStructure.font.family = fontName;
        this.pdfStructure.font.style = fontStyle;
    }

    /**********************************************************************************************************
     *
     * This will set the font size.
     *
     * @param fontSize  the size of the font
     *
     **********************************************************************************************************/
    setFontSize (fontSize) {
        this.pdfStructure.doc.setFontSize (fontSize);

        // Store the font information for doing calculations
        this.pdfStructure.font.size = fontSize;
    }

    /**********************************************************************************************************
     *
     * This will set the font style.
     *
     * @param fontStyle the style of the font
     *
     **********************************************************************************************************/
    setFontStyle (fontStyle) {
        this.pdfStructure.doc.setFontStyle (fontStyle);

        // Store the font information for doing calculations
        this.pdfStructure.font.style = fontStyle;
    }

    /**********************************************************************************************************
     *
     * This will set the font (font name, size, and style) for the heading.
     *
     * @param fontName  the name of the heading font
     * @param fontSize  the size of the heading font
     * @param fontStyle the style of the heading font
     *
     **********************************************************************************************************/
    setHeadingFont (fontName, fontSize, fontStyle) {
        this.pdfStructure.heading_font.family = fontName;
        this.pdfStructure.heading_font.style = fontStyle;
        this.pdfStructure.heading_font.size = fontSize;
    }

    /**********************************************************************************************************
     *
     * This will set the font name and style) for the heading.
     *
     * @param fontName  the name of the heading font
     * @param fontStyle the style of the heading font
     *
     **********************************************************************************************************/
    setHeadingFontAndStyle (fontName, fontStyle) {
        this.pdfStructure.heading_font.family = fontName;
        this.pdfStructure.heading_font.style = fontStyle;
    }

    /**********************************************************************************************************
     *
     * This will set the font size for the heading.
     *
     * @param fontSize  the size of the heading font
     *
     **********************************************************************************************************/
    setHeadingFontSize (fontSize) {
        this.pdfStructure.heading_font.size = fontSize;
    }

    /**********************************************************************************************************
     *
     * This will set the font style for the heading.
     *
     * @param fontStyle the style of the heading font
     *
     **********************************************************************************************************/
    setHeadingFontStyle (fontStyle) {
        this.pdfStructure.heading_font.style = fontStyle;
    }

    /**********************************************************************************************************
     *
     * This will set the font (font name, size, and style) for the footer.
     *
     * @param fontName  the name of the footer font
     * @param fontSize  the size of the footer font
     * @param fontStyle the style of the footer font
     *
     * @return returns true if an error occurred and false if not did not.  An error will occur if the user
     * tries to set the footer font information after the footer information.  That is because the footer
     * font size is used in determining the size of the footer.
     *
     **********************************************************************************************************/
    setFooterFont (fontName, fontSize, fontStyle) {
        let error = false;  // Indicates that an error occurred

        if (this.pdfStructure.footer.set === true) {  // The footer information has already been set, before setting the font
            console.log ('Error in setFooterFont: The footer font should be set before calling the setFooterInfo method.');
            error = true;
        } else {    // Footer information has not been set
            this.pdfStructure.footer_font.family = fontName;
            this.pdfStructure.footer_font.style = fontStyle;
            this.pdfStructure.footer_font.size = fontSize;

            // The footer size is the number of lines in the footer times the footer font size.  If there is to be a
            // page number as the last line in the footer, then add on another footer font size for the page number.
            // To calculate the page length take the height of the page minus the bottom margin and the footer length
            // to get the page length.
            this.pdfStructure.pageInfo.length = this.pdfStructure.pageInfo.height - this.pdfStructure.margins.bottom -
                (this.pdfStructure.footer_font.size * this.pdfStructure.footer.lines.length +
                ((this.pdfStructure.footer.isPage) ? this.pdfStructure.footer_font.size : 0));
        }

        return error;
    }

    /**********************************************************************************************************
     *
     * This will set the font name and style) for the footer.
     *
     * @param fontName  the name of the footer font
     * @param fontStyle the style of the footer font
     *
     * @return returns true if an error occurred and false if not did not.  An error will occur if the user
     * tries to set the footer font information after the footer information.  That is because the footer
     * font size is used in determining the size of the footer.
     *
     **********************************************************************************************************/
    setFooterFontAndStyle (fontName, fontStyle) {
        let error = false;  // Indicates that an error occurred

        if (this.pdfStructure.footer.set === true) {  // The footer information has already been set, before setting the font
            console.log ('Error in setFooterFontAndStyle: The footer font should be set before calling the setFooterInfo method.');
            error = true;
        } else {    // Footer information has not been set
            this.pdfStructure.footer_font.family = fontName;
            this.pdfStructure.footer_font.style = fontStyle;
        }

        return error;
    }

    /**********************************************************************************************************
     *
     * This will set the font size for the footer.
     *
     * @param fontSize  the size of the footer font
     *
     * @return returns true if an error occurred and false if not did not.  An error will occur if the user
     * tries to set the footer font information after the footer information.  That is because the footer
     * font size is used in determining the size of the footer.
     *
     **********************************************************************************************************/
    setFooterFontSize (fontSize) {
        let error = false;  // Indicates that an error occurred

        if (this.pdfStructure.footer.set === true) {  // The footer information has already been set, before setting the font
            console.log ('Error in setFooterFontSize: The footer font should be set before calling the setFooterInfo method.');
            error = true;
        } else {    // Footer information has not been set
            this.pdfStructure.footer_font.size = fontSize;

            // The footer size is the number of lines in the footer times the footer font size.  If there is to be a
            // page number as the last line in the footer, then add on another footer font size for the page number.
            // To calculate the page length take the height of the page minus the bottom margin and the footer length
            // to get the page length.
            this.pdfStructure.pageInfo.length = this.pdfStructure.pageInfo.height - this.pdfStructure.margins.bottom -
                (this.pdfStructure.footer_font.size * this.pdfStructure.footer.lines.length +
                ((this.pdfStructure.footer.isPage) ? this.pdfStructure.footer_font.size : 0));
        }

        return error;
    }

    /**********************************************************************************************************
     *
     * This will set the font style for the footer.
     *
     * @param fontStyle the style of the footer font
     *
     **********************************************************************************************************/
    setFooterFontStyle (fontStyle) {
        let error = false;  // Indicates that an error occurred

        if (this.pdfStructure.footer.set === true) {  // The footer information has already been set, before setting the font
            console.log ('Error in setFooterFontStyle: The footer font should be set before calling the setFooterInfo method.');
            error = true;
        } else {    // Footer information has not been set
            this.pdfStructure.footer_font.style = fontStyle;
        }

        return error;
    }

    /*********************************************************************************************************
     *
     * This will set up the length of the footer and the information that can be placed in the footer.
     *
     *
     * @param {*} lines     the lines of text (as an array) that are to be placed in the footer
     * @param {*} isPage    indicates that a a footer line with the page number (Page: page-number) should be
     *                      placed in the footer (true) or not (false)
     * @param {*} isOfPart  indicates that of and the total number of pages should be appended to the line
     *                      with the page number (Page page-number of total-pages) (true) or not (false)
     * @param {*} location  the location in the footer in which the lines should be placed.  The values are
     *                      left (lines start at the left margin), center (lines are centered on the page),
     *                      and right (the largest footer line ends at the right margin)
     *
     * @return returns true if an error occurred and false if not did not.  An error will occur if this method
     * is called after any text has been printed.  Once text has been printed the size of the footer is
     * difficult to determine.  Another error could occur if the location is not LEFT, RIGHT, or CENTER.
     *
     *********************************************************************************************************/
    setFooterInfo (lines, isPage, isOfPart, location) {
        let error = false;  // Indicates that an error occurred

        if (this.pdfStructure.footer.canNotBeSet === true) {  // Indicates that lines of text have already been printed; therefore,
                                            // a footer can not be placed in the PDF
            console.log ("Error in setFooterInfo: The footer information should be set before any text is written.");
            error = true;
        } else {    // The footer can be placed in the PDF, since no lines of text have been printed yet
            if (lines === null) {   // No lines in the footer to display, probably only the page number
                this.pdfStructure.footer.lines = [];
            } else {    // There are lines to display in the footer
                this.pdfStructure.footer.lines = lines;
            }

            this.pdfStructure.footer.isPage = isPage;

            // Make sure the location has a valid value
            if (location !== 'LEFT' && location !== 'RIGHT' && location !== 'CENTER') { // Not a valid value
                console.log ('Error in setFooterInfo: The location is ', location, '.  It should be LEFT, RIGHT, or CENTER; therefore, using a default of CENTER.');
                this.pdfStructure.footer.location = 'CENTER';

                error = true;
            } else {    // Location has a valid value
                this.pdfStructure.footer.location = location;
            }

            this.pdfStructure.footer.isOfPart = isOfPart; // The of total-pages part of the page number

            this.pdfStructure.footer.set = true;  // Indicate that the footer has been set

        }

        return error;
    }

    /***********************************************************************************************************
     *
     * This will set the starting page number.  If this method is not called the page number will default
     * to 1.
     *
     * @param {*} pageNum the page number to set the starting page to.
     *
     ***********************************************************************************************************/
    setPageNumber (pageNum) {
        this.pdfStructure.counters.pageCount = pageNum;
    }

    /**********************************************************************************************************
     *
     * This will set the text color for all text in the PDF.
     *
     * @param hexValue the hex value of the text color
     *
     **********************************************************************************************************/
    setTextColor (hexValue) {
        this.pdfStructure.doc.setTextColor (hexValue);
    }

    /**********************************************************************************************************
     *
     * This will set the line wrap and fully justification for the text in the PDF.
     *
     * @param lineWrap      indicates whether line wrapping should take place (true) or not (false).  This will
     *                      automatically take string and divide the line and place what will not fit on the
     *                      next line.  Without it, the text will run off the end of the line.
     * @param fullyJustifed indicates whether the line should be fully justified (true) or not (false).  Full
     *                      justification indicates that all lines will start and end in the same place.
     *
     **********************************************************************************************************/
    setPageInfo (lineWrap, fullyJustified) {
        this.pdfStructure.pageInfo.lineWrap = lineWrap;
        this.pdfStructure.pageInfo.fullyJustified = fullyJustified;
    }

    /**********************************************************************************************************
     *
     * This will set the line wrap for the text in the PDF.
     *
     * @param lineWrap      indicates whether line wrapping should take place (true) or not (false).  This will
     *                      automatically take string and divide the line and place what will not fit on the
     *                      next line.  Without it, the text will run off the end of the line.
     *
     **********************************************************************************************************/
    setLineWrap (lineWrap) {
        this.pdfStructure.pageInfo.lineWrap = lineWrap;
    }

    /**********************************************************************************************************
     *
     * This will set the fully justified for the text in the PDF.
     *
     * @param fullyJustifed indicates whether the line should be fully justified (true) or not (false).  Full
     *                      justification indicates that all lines will start and end in the same place.
     *
     **********************************************************************************************************/
    setFullJustification (fullyJustified) {
        this.pdfStructure.pageInfo.fullyJustified = fullyJustified;
    }

    /**********************************************************************************************************
     *
     * This will set the heading that is to be printed at the top of each page in the PDF.
     *
     * @param value the heading object that describes how the heading is to be printed at the top of each
     *              page.  See the heading section at the top of this page for more information.
     * @param print     Indidates whether the page heading should be printed (true) or not (false)
     *
     * @return returns true if an error occurred in the set up of the heading; otherwise, true is returned
     * if there are no errors
     *
     **********************************************************************************************************/
    setHeading (value, print = true) {
        let error = false;  // Indicates that an error occurred

        this.pdfStructure.heading = value;

        if (this.pdfStructure.heading.isPage === true) { // A page number is to occur in the heading
            // Make sure that the second element in the pageNumLoc array contains either LEFT or RIGHT
            if (this.pdfStructure.heading.pageNumLoc[1] !== 'LEFT' && this.pdfStructure.heading.pageNumLoc[1] !== 'RIGHT') {
                console.log ('Error in setHeading: The second element in the pageNumLoc for a heading should have the value of LEFT or RIGHT.  Page number will not be displayed.')
                error = true;
            }
        }

        if (print) {
            this.printHeading();
        }

        return error;
    }

    /**********************************************************************************************************
     *
     * This will set the tab amount when the autoTab method is invoked.  The will set the tab field in the
     * pageInfo object.
     *
     * @param length    the length of the tab in either inches or points that will be tabbed when the autoTab
     *                  method is invoked.
     * @param units     indicates whether the length is in inches ('INCHES') or points ('POINTS')
     *
     * @return returns true if an error occurred and false if there was no error
     *
     **********************************************************************************************************/
    setTab (length, units = "INCHES") {
        let error = false;  // Indicates that an error occurred

        if (units === "INCHES") {
            this.pdfStructure.pageInfo.tab = length * POINTS_PER_INCH;    // Convert the inches to points
        } else if (units === 'POINTS') {    // Units are in points, so no need to convert
            this.pdfStructure.pageInfo.tab = length;
        } else {    // Neither INCHES or POINTS
            console.log ('Error in setTab: The units are', units, '.  They should be INCHES or POINTS; therefore, using default values.');
            error = true;

            this.pdfStructure.pageInfo.tab = 0.5 * POINTS_PER_INCH;
        }

        return error;
    }

    /**********************************************************************************************************
     *
     * This will allows the creation of a simple heading that is to be printed at the top of each page in the
     * PDF.  The heading will only contain a title and a page number that can appear on the left or the right
     * at the top of the page.  This information will be placed in the heading object.  See the heading
     * section at the top of this page for more information.
     *
     * @param title     the title that is to be printed at the top of each page.
     * @param isPage    indicates whether the heading is to contain a page number (true) or not (false).  The
     *                  word 'Page: ' will be in front of the page number.
     * @param right     indicates whether the page number should be on the right side of the page (true) or the
     *                  left side of the page (false)
     * @param print     Indidates whether the page heading should be printed (true) or not (false)
     *
     **********************************************************************************************************/
    setSimpleHeading (title, isPage, right, print = true) {
        this.pdfStructure.heading.titles.push (title);    // Place the title in the heading array
        this.pdfStructure.heading.isPage = isPage;       // Indicate whether the page number is to be displayed or not
        this.pdfStructure.heading.pageNumLoc.push(0);     // The page number will be on the first line of the heading

        if (right) {    // Page number is to the right of the title
            this.pdfStructure.heading.right.push("Page: ");
            this.pdfStructure.heading.pageNumLoc.push('RIGHT');
        } else {    // Page number is to the left of the title
            this.pdfStructure.heading.left.push("Page: ");
            this.pdfStructure.heading.pageNumLoc.push('LEFT');
        }

        if (print === true) {
            this.printHeading();
        }
    }

    /**********************************************************************************************************
     *
     * This will set number of blank lines after the heading in the PDF.
     *
     * @param blankLines    the number of blank lines after the heading
     *
     **********************************************************************************************************/
    setHeadingBlankLines (blankLines) {
        this.pdfStructure.heading.blankLines = blankLines;
    }

    /**********************************************************************************************************
     *
     * This will print the heading in the PDF.
     *
     **********************************************************************************************************/
    printHeading() {
        var heading_width = 0;  // The width of the haeding
        var center = 0;         // The center of the page
        var start = 0;          // The start of the title on the line
        var largest = 0;        // The largest text in points in the right headings (right array)
        var i = 0;              // Loop control variable

        // Set the font for the heading
        this.pdfStructure.doc.setFont (this.pdfStructure.heading_font.family, this.pdfStructure.heading_font.style);
        this.pdfStructure.doc.setFontSize (this.pdfStructure.heading_font.size);

        // Determine the largest text in points that is in the right array
        for (i = 0; i < this.pdfStructure.heading.right.length; i++) {
            // Is this where the page number is to be displayed
            if (this.pdfStructure.heading.isPage && this.pdfStructure.heading.pageNumLoc[1] === 'RIGHT' &&
                this.pdfStructure.heading.pageNumLoc[0] === i) {
                var head = this.pdfStructure.heading.right[i] + this.pdfStructure.counters.pageCount;   // Determine the width of the right heading and page number
                heading_width = this.pdfStructure.doc.getStringUnitWidth(head) * this.pdfStructure.heading_font.size;   // Multiplying by the font size, since it determines the width for a font size of 1
            } else {  // Determine the width of that element of the right heading
                heading_width = this.pdfStructure.doc.getStringUnitWidth (this.pdfStructure.heading.right[i]) * this.pdfStructure.heading_font.size;  // Multiplying by the font size, since it determines the width for a font size of 1
            }

            if (heading_width > largest) {  // The right heading width is now the largest, so make it the largest
                largest = heading_width;
            }
        }

        // Determine the largest number of left headings, titles, or right headings
        var size = (this.pdfStructure.heading.titles.length > this.pdfStructure.heading.left.length) ?
            this.pdfStructure.heading.titles.length : this.pdfStructure.heading.left.length;
        size = (size > this.pdfStructure.heading.right.length) ? size : this.pdfStructure.heading.right.length;

        // Spin through all the headings and print them to the PDF
        for (i = 0; i < size; i++) {
            if (i < this.pdfStructure.heading.left.length) {  // Is there a left heading? Yes
                // Is this where the page number is to be displayed
                if (this.pdfStructure.heading.isPage && this.pdfStructure.heading.pageNumLoc[1] === 'LEFT' && this.pdfStructure.heading.pageNumLoc[0] === i) {
                    var head = this.pdfStructure.heading.left[i] + this.pdfStructure.counters.pageCount;    // Determine the width of the right heading and page number
                    this.pdfStructure.doc.text (head, this.pdfStructure.counters.curPos, this.pdfStructure.counter.linePos);  // Place the page number info in the PDF
                } else {    // Determine the width of that element of the left heading
                    this.pdfStructure.doc.text (this.pdfStructure.heading.left[i], this.pdfStructure.counters.curPos, this.pdfStructure.counters.linePos);  // Place the left heading in the PDF
                }
            }

            if (i < this.pdfStructure.heading.titles.length) {    // Is it a regular title to be centered on the page? Yes
                heading_width = this.pdfStructure.doc.getStringUnitWidth (this.pdfStructure.heading.titles[i]) * this.pdfStructure.heading_font.size; // Multiplying by the font size, since it determines the width for a font size of 1
                center = this.pdfStructure.pageInfo.width / 2;        // Determine the center of the page
                start = center - heading_width / 2; // Determine where the heading should start on the line in the PDF

                this.pdfStructure.doc.text (this.pdfStructure.heading.titles[i], start, this.pdfStructure.counters.linePos);  // Place the title in the center of the line in the PDF
            }

            if (i < this.pdfStructure.heading.right.length) {  // Is there a right heading? Yes
                // Is this where the page number is to be displayed
                if (this.pdfStructure.heading.isPage && this.pdfStructure.heading.pageNumLoc[1] === 'RIGHT' && this.pdfStructure.heading.pageNumLoc[0] === i) {
                    const head = this.pdfStructure.heading.right[i] + this.pdfStructure.counters.pageCount; // Determine the width of the right heading and page number
                    this.pdfStructure.doc.text (head,
                                                this.pdfStructure.pageInfo.width - (largest + this.pdfStructure.margins.right),
                                                this.pdfStructure.counters.linePos);  // Place the page number info in the PDF
                } else {    // Determine the width of that element of the right heading
                    this.pdfStructure.doc.text (this.pdfStructure.heading.right[i],
                                                this.pdfStructure.pageInfo.width - (largest + this.pdfStructure.margins.right),
                                                this.pdfStructure.counters.linePos);  // Place the right heading in the PDF
                }
            }

            this.pdfStructure.counters.linePos += this.pdfStructure.heading_font.size + SPACING;    // Advance to the next line in the PDF
        }

        this.printBlankLines(this.pdfStructure.heading.blankLines);

        // Reset the font information to the regular font and not the heading font
        this.pdfStructure.doc.setFont (this.pdfStructure.font.family, this.pdfStructure.font.style);
        this.pdfStructure.doc.setFontSize (this.pdfStructure.font.size);
    }

    /**********************************************************************************************************
     *
     * This will determine if the end of page has been reached and if it has a new page heading will be
     * printed in the PDF.
     *
     * @param print indicates whether a new page should be created and the header displayed regardless of
     *              whether at the end of the page (true) or not (false)
     *
     * @returns returns true if the a new page in the PDF was created (true) or not (false)
     *
     **********************************************************************************************************/
    printNewPage (print) {
        // Check to see if the end of the page has been reached
        if (this.pdfStructure.counters.linePos >= this.pdfStructure.pageInfo.length + ((this.pdfStructure.footer.set) ? 0 : this.pdfStructure.font.size + SPACING) ||
            print) {    // End of page reached
           // Reset the counters for a new page
            this.pdfStructure.counters.pageCount++;
            this.pdfStructure.counters.totalPages++;
            this.pdfStructure.counters.linePos = this.pdfStructure.margins.top + this.pdfStructure.font.size;
            this.pdfStructure.counters.curPos = this.pdfStructure.margins.left;
            this.pdfStructure.counters.tagPosition = this.pdfStructure.margins.left;

            // Add a page to the PDF document and print out a new page heading
            this.pdfStructure.doc.addPage();
            this.printHeading();
            return true;
        } else {    // End of page not reached
            return false;
        }
    }

    /**********************************************************************************************************
     *
     * This will make sure that the text will fit on a line.  If the text does not fit on a line, it will break
     * at the end of a word and place that part of the text on the current line.  The remainder of the line
     * will be placed on the next line if it will fit.  If the remainder of the text does not fit on the line
     * it will be broken at the end of the word and the remainder will be placed on the next line.  This
     * will continue until the end of the text is reached.  The lines that have been broken will be placed in
     * an array and this is the value to be returned.  This method will only be called if lineWrap is set to
     * true.
     *
     * @param text the text that is to be fit onto lines
     *
     * @returns returns text that was broken down into lines into an array in which each element represents
     * a line in the PDF file
     *
     **********************************************************************************************************/
    fitOnLine (text) {
        var index = 1;                                      // The place in the line where the last blank was encountered.  This is used to find the last word in the current line
        var lines = [];                                     // An array of lines that contain the broken down text.  Each element is a line in the PDF.
        var curLine = '';                                   // The current line that is being built and will eventually be placed in the lines array
        var text_width = 0;                                 // The width of the text in points
        var line_width = this.pdfStructure.pageInfo.width - this.pdfStructure.margins.right;    // The width of the line in points
        var left_over = null;                               // The left over characters in the current line, once a line break is discovered.  This may contain a partial word.
        var position = this.pdfStructure.counters.curPos;   // The current position on the line

        // Spin through the text one character at a time and build each line until there is no more text
        for (let i = 0; i < text.length; i++) {
            text_width = this.pdfStructure.doc.getStringUnitWidth (curLine) * this.pdfStructure.font.size;  // Multiplying by the font size, since it determines the width for a font size of 1
            if (position + text_width > line_width) {   // End of the line has been reached
                index = curLine.lastIndexOf (' ');      // Find the last blank in the line, which tells us where the end of the last complete word is located
                left_over = curLine.substr (index + 1, curLine.length); // Retrieve the left over characters on the current line that do not make up a full word

                if (this.pdfStructure.pageInfo.fullyJustified === true) { // Is the line to be fully justified? Yes
                    lines.push (this.fullyJustify(curLine.substr (0, index), line_width - this.pdfStructure.counters.curPos));    // Place the line in the lines array (fully justified).  The substr will break on a full word.
                } else {    // No full justification
                    lines.push (curLine.substr (0, index)); // Place the line in the lines array.  The substr will break on a full word.
                }

                curLine = left_over + text.charAt(i);   // Start building the next line with the characters left over from the previous line and the next character in the text
                position = this.pdfStructure.margins.left;                // Set the position to the start of the line
            } else {    // End of the line has not been reached, so continue adding characters to it
                curLine += text.charAt(i);
            }
        }

        if (curLine.length > 1) {   // If there are any characters in the current line, add it to the array of lines (last line processed)
            lines.push (curLine);
        }

        return lines;   // Return the text as lines to be printed to the PDF
    }

    /**********************************************************************************************************
     *
     * This will print the text to the PDF and will leave the cursor at the current position on the line.  This
     * way the next text to be printed will pick up from where this one left off.
     *
     * @param text the text to be printed to the PDF
     *
     **********************************************************************************************************/
    printText (text) {
        var text_width = this.pdfStructure.doc.getStringUnitWidth (text) * this.pdfStructure.font.size; // The width of the text in points.  Multiplying by the font size, since it determines the width for a font size of 1
        var lines = [];         // The lines to be printed to the PDF if the text will not all fit on the current line
        var newPage = false;    // Indicates whether a new page was generated or not

        // If line wrapping and the text will not fit on the rest of the current line
        if (this.pdfStructure.pageInfo.lineWrap &&
            this.pdfStructure.counters.curPos + text_width > (this.pdfStructure.pageInfo.width - this.pdfStructure.margins.right)) {
            lines = this.fitOnLine (text);  // Do the line wrap and return the list of lines to be printed to the PDF

            // Spin through the lines and print them to the PDF
            for (let i = 0; i < lines.length; i++) {
                this.pdfStructure.doc.text (lines[i], this.pdfStructure.counters.curPos, this.pdfStructure.counters.linePos); // Print the line to the PDF
                this.pdfStructure.counters.curPos = this.pdfStructure.margins.left;             // Set to the beginning of the line
                this.pdfStructure.counters.linePos += this.pdfStructure.font.size + SPACING;    // Advance to the next line in the PDF
                newPage = this.printNewPage(false); // Check to see if at the end of the page and need a new page in the PDF
            }

            // Set the cursor to the current position on the line.  To do this you need to know the length of the last line in the PDF and you
            // need to place the line position back on the last line
            text_width = this.pdfStructure.doc.getStringUnitWidth (lines[lines.length - 1]) * this.pdfStructure.font.size;  // Multiplying by the font size, since it determines the width for a font size of 1
            this.pdfStructure.counters.curPos = this.pdfStructure.margins.left + text_width;

            if (newPage === false) {    // A new page was not generated, so back up to the last line in the PDF
                this.pdfStructure.counters.linePos -= (this.pdfStructure.font.size + SPACING);
            }
        } else {    // The text will fit on the current line
            this.pdfStructure.doc.text (text, this.pdfStructure.counters.curPos, this.pdfStructure.counters.linePos); // Print the text to the PDF
            this.pdfStructure.counters.curPos += text_width;    // Advance the cursor to the next place on the line
            this.printNewPage(false);                           // Check for a new page
        }

        if (this.pdfStructure.footer.set === false) {
            this.pdfStructure.footer.canNotBeSet = true;
        }
    }

    /**********************************************************************************************************
     *
     * This will print the text to the PDF as bold text and will leave the cursor at the current position on
     * the line.  This way the next text to be printed will pick up from where this one left off.
     *
     * @param text the text to be printed to the PDF as bold text
     *
     **********************************************************************************************************/
    printBoldText (text) {
        var style = this.pdfStructure.font.style; // Save the current style

        this.setFontStyle ('bold');

        this.printText (text);  // Print the text out as bold text

        this.setFontStyle (style);  // Return to the original style
    }

    /**********************************************************************************************************
     *
     * This will print the text to the PDF as italic text and will leave the cursor at the current position on
     * the line.  This way the next text to be printed will pick up from where this one left off.
     *
     * @param text the text to be printed to the PDF as italic text
     *
     **********************************************************************************************************/
    printItalicText (text) {
        var style = this.pdfStructure.font.style; // Save the current style

        this.setFontStyle ('italic');

        this.printText (text);  // Print the text out as italic text

        this.setFontStyle (style);  // Return to the original style
    }

    /**********************************************************************************************************
     *
     * This will print the text to the PDF as bold italic text and will leave the cursor at the current
     * position on the line.  This way the next text to be printed will pick up from where this one left off.
     *
     * @param text the text to be printed to the PDF as bold italic text
     *
     **********************************************************************************************************/
    printBoldItalicText (text) {
        var style = this.pdfStructure.font.style; // Save the current style

        this.setFontStyle ('bolditalic');   // Print the text out as bold italic text

        this.printText (text);

        this.setFontStyle (style);  // Return to the original style
    }

    /**********************************************************************************************************
     *
     * This will print the text to the PDF and will advance the cursor to the next line.
     *
     * @param text the text to be printed to the PDF
     *
     **********************************************************************************************************/
    printTextLine (text) {
        var text_width = this.pdfStructure.doc.getStringUnitWidth (text) * this.pdfStructure.font.size; // The width of the text in points.  Multiplying by the font size, since it determines the width for a font size of 1
        var lines = []; // An array of lines that contain the broken down text.  Each element is a line in the PDF.

        // If line wrapping and the text will not fit on the rest of the current line
        if (this.pdfStructure.pageInfo.lineWrap && this.pdfStructure.counters.curPos + text_width >
            (this.pdfStructure.pageInfo.width - this.pdfStructure.margins.right)) {
            lines = this.fitOnLine (text);  // Do the line wrap and return the list of lines to be printed to the PDF

            // Spin through the lines and print them to the PDF
            for (let i = 0; i < lines.length; i++) {
                this.pdfStructure.doc.text (lines[i], this.pdfStructure.counters.curPos, this.pdfStructure.counters.linePos); // Print the line to the PDF
                this.pdfStructure.counters.curPos = this.pdfStructure.margins.left;                         // Set to the beginning of the line
                this.pdfStructure.counters.linePos += this.pdfStructure.font.size + SPACING;                // Advance to the next line in the PDF
                this.printNewPage(false);                               // Check to see if at the end of the page and need a new page in the PDF
            }
        } else {    // The text will fit on the current line
            this.pdfStructure.doc.text (text, this.pdfStructure.counters.curPos, this.pdfStructure.counters.linePos); // Print the text to the PDF
            this.pdfStructure.counters.curPos = this.pdfStructure.margins.left;                     // Advance the cursor to the next place on the line
            this.pdfStructure.counters.linePos += this.pdfStructure.font.size + SPACING;            // Advance to the next line on the page
            this.printNewPage(false);                           // Check for a new page
        }

        if (this.pdfStructure.footer.set === false) {
            this.pdfStructure.footer.canNotBeSet = true;
        }
     }

    /**********************************************************************************************************
     *
     * This will print the text to the PDF as bold text and will advance the cursor to the next line.
     *
     * @param text the text to be printed to the PDF as bold text
     *
     **********************************************************************************************************/
    printBoldTextLine (text) {
        var style = this.pdfStructure.font.style; // Save the current style

        this.setFontStyle ('bold');

        this.printTextLine (text);  // Print the text out as bold text

        this.setFontStyle (style);  // Return to the original style
    }

    /**********************************************************************************************************
     *
     * This will print the text to the PDF as italic text and will advance the cursor to the next line.
     *
     * @param text the text to be printed to the PDF as italic text
     *
     **********************************************************************************************************/
    printItalicTextLine (text) {
        var style = this.pdfStructure.font.style; // Save the current style

        this.setFontStyle ('italic');

        this.printTextLine (text);// Print the text out as italic text

        this.setFontStyle (style);  // Return to the original style
    }

    /**********************************************************************************************************
     *
     * This will print the text to the PDF as bold italic text and will advance the cursor to the next line.
     *
     * @param text the text to be printed to the PDF as bold italic text
     *
     **********************************************************************************************************/
    printBoldItalicTextLine (text) {
        var style = this.pdfStructure.font.style; // Save the current style

        this.setFontStyle ('bolditalic');

        this.printTextLine (text);  // Print the text out as bold italic text

        this.setFontStyle (style);  // Return to the original style
    }

    /**********************************************************************************************************
     *
     * This will print the text in the center of the line in the PDF.  The text should fit on the line as
     * there will be no line wrapping.
     *
     * @param text the text to centered on the line.
     *
     **********************************************************************************************************/
     printCenterTextLine (text) {
        var text_width = this.pdfStructure.doc.getStringUnitWidth (text) * this.pdfStructure.font.size; // The width of the text in points.  Multiplying by the font size, since it determines the width for a font size of 1
        var center = this.pdfStructure.pageInfo.width / 2;  // Determine the center of the page
        var start = center - text_width / 2;                // Determine where the text should start on the line in the PDF

        this.pdfStructure.doc.text (text, start, this.pdfStructure.counters.linePos);  // Place the text in the center of the line in the PDF
        this.pdfStructure.counters.curPos = this.pdfStructure.margins.left;
        this.pdfStructure.counters.linePos += this.pdfStructure.font.size + SPACING;
     }

    /**********************************************************************************************************
     *
     * This will print the text in the center of the line in the PDF as bold text.  The text should fit
     * on the line as there will be no line wrapping.
     *
     * @param text the text to centered and bolded on the line.
     *
     **********************************************************************************************************/
     printCenterBoldTextLine (text) {
         var style = this.pdfStructure.font.style; // Save the current style

         this.setFontStyle ('bold');

         this.printCenterTextLine (text);   // Print the text out as centered bold text

         this.setFontStyle (style);  // Return to the original style
     }

    /**********************************************************************************************************
     *
     * This will print the text in the center of the line in the PDF as italic text.  The text should fit
     * on the line as there will be no line wrapping.
     *
     * @param text the text to centered and italized on the line.
     *
     **********************************************************************************************************/
     printCenterItalicTextLine (text) {
         var style = this.pdfStructure.font.style; // Save the current style

         this.setFontStyle ('italic');

         this.printCenterTextLine (text);   // Print the text out as centered italic text

         this.setFontStyle (style);  // Return to the original style
     }

    /**********************************************************************************************************
     *
     * This will print the text in the center of the line in the PDF as bold italized text.  The text should
     * fit on the line as there will be no line wrapping.
     *
     * @param text the text to centered and bold italized on the line.
     *
     **********************************************************************************************************/
     printCenterBoldItalicTextLine (text) {
         var style = this.pdfStructure.font.style; // Save the current style

         this.setFontStyle ('bolditalic');

         this.printCenterTextLine (text);   // Print the text out as centered bold italic text

         this.setFontStyle (style);  // Return to the original style
     }

    /**********************************************************************************************************
     *
     * This will print a number of blank lines in the PDF.
     *
     * @param num the number of blank lines to print.
     *
     **********************************************************************************************************/
     printBlankLines (num) {
         for (let i = 0; i < num; i++) {    // Print out the number of blank lines
             this.pdfStructure.doc.text (' ', this.pdfStructure.margins.left, this.pdfStructure.counters.linePos);    // Print out a blank line
             this.pdfStructure.counters.curPos = this.pdfStructure.margins.left;                     // Set to the beginning of the line
             this.pdfStructure.counters.linePos += this.pdfStructure.font.size + SPACING;           // Advance to the next line in the PDF
             if (this.printNewPage(false) === true) {           // Check for a new page
                 break; // Break out of loop, if on a new page no need to print blank lines at the top of a new page
             }
         }
     }

    /**********************************************************************************************************
     *
     * This will tab from the current position on the line the amount that is set in pageInfo.tab.
     *
     * @param num       number of tabs to tab over
     *
     * @return returns an error if on occurred (true) or not (false).  An error occurs if the user tabbed past
     * the end of the right margin.
     *
     **********************************************************************************************************/
     tab (num = 1) {
         var i = 0;         // Loop control variable

             // Spin through the number of tabs specified and tab over that many
         for (i = 0; i < num; i++) {
            this.pdfStructure.counters.curPos = this.determineTabPosition (this.pdfStructure.pageInfo.tab);
         }

         // Check to see if past the end of the line
         return this.pastEndOfLine ('tab');
     }

     /********************************************************************************************************
      *
      * This will determine where the next tab position is on the line, by using the current position on the
      * line to find the next position.
      *
      * @param {*} length the length of each tab in points
      *
      *********************************************************************************************************/
     determineTabPosition (length) {
         var curTabPos = this.pdfStructure.margins.left;  // The current calculated tab position on the line

         // Loop until the current calculated tab position is greater than the current position on the line and
         // that will be the next tab position
         while (curTabPos <= this.pdfStructure.counters.curPos) {
             curTabPos += length;
         }

         return curTabPos;  // Return the next tab position
     }

     /********************************************************************************************************
      *
      * This will move the current position on the line over the specifed length.  The length can be in either
      * INCHES or POINTS.
      *
      * @param {*} length the length to move over on the line
      * @param {*} units  indicates whether the length is in inches ('INCHES') or points ('POINTS')
      *
      * @return returns an error if on occurred (true) or not (false).  An error occurs if the user tabbed past
      * the end of the right margin or if the units are not in 'INCHES' or 'POINTS' .
      *
      ********************************************************************************************************/
     moveOver (length, units = "INCHES") {
         let error = false; // Indicates if an error occurred or not

         if (units === 'INCHES') {
             this.pdfStructure.counters.curPos += (length * POINTS_PER_INCH); // Convert the inches to points
         } else if (units === 'POINTS') {
             this.pdfStructure.counters.curPos += length;
         } else {   // Neither inches or points
            console.log ('Error in moveOver: The units are', units, '.  They should be INCHES or POINTS; therefore, using default values.');
            error = true;
         }

         // Check to see if past the end of the line
         error = (this.pastEndOfLine ('moveOver') === true) ? true : error;

         return error;
     }

     /********************************************************************************************************
      *
      * This will move the current position on the line to the specifed length.  The length can be in either
      * INCHES or POINTS.
      *
      * @param {*} length the length to move to on the line
      * @param {*} units  indicates whether the length is in inches ('INCHES') or points ('POINTS')
      *
      * @return returns an error if on occurred (true) or not (false).  An error occurs if the user tabbed past
      * the end of the right margin or if the units are not in 'INCHES' or 'POINTS' .
      *
      ********************************************************************************************************/
     moveTo (length, units = "INCHES") {
         let error = false; // Indicates if an error occurred or not

         if (units === 'INCHES') {
             this.pdfStructure.counters.curPos = (length * POINTS_PER_INCH); // Convert the inches to points
         } else if (units === 'POINTS') {
             this.pdfStructure.counters.curPos = length;
         } else {   // Neither inches or points
            console.log ('Error in moveOver: The units are', units, '.  They should be INCHES or POINTS; therefore, using default values.');
            error = true;
         }

         // Check to see if past the end of the line
         error = (this.pastEndOfLine ('moveTo') === true) ? true : error;

         return error;
     }

     /*******************************************************************************************************
      *
      * This will check to see if the current position on the line is past the right margin, and if it is
      * an error message will be displayed.  The current position on the line will advance to the beginning
      * of the next line.
      *
      * @param {*} method the method that called the pastEndOfLine method
      *
      *******************************************************************************************************/
     pastEndOfLine (method) {
         let error = false; // Indicates that an error occurred

         // Current positon on the line past the right margin?
         if (this.pdfStructure.counters.curPos > this.pdfStructure.pageInfo.width - this.pdfStructure.margins.right) {    // Yes
             console.log ('Error in ', method, ': Past the right margin.  Advancing to the next line.');
             error = true;

             // Advance to the beginning of the next line
             this.pdfStructure.counters.curPos = this.pdfStructure.margins.left;
             this.pdfStructure.counters.linePos += this.pdfStructure.font.size + SPACING;
             this.printNewPage (false);
         }

         return error;
     }

    /**********************************************************************************************************
     *
     * This will print the text in the center of the line in the footer.  The text should fit on the line as
     * there will be no line wrapping.
     *
     * @param text          the text to centered on the line.
     * @param linePosition  the line on the page to print the text
     *
     **********************************************************************************************************/
     printFooterCenterTextLine (text, linePosition) {
        var text_width = this.pdfStructure.doc.getStringUnitWidth (text) * this.pdfStructure.footer_font.size; // The width of the text in points.  Multiplying by the font size, since it determines the width for a font size of 1
        var center = this.pdfStructure.pageInfo.width / 2;        // Determine the center of the page
        var start = center - text_width / 2;    // Determine where the text should start on the line in the PDF

        this.pdfStructure.doc.text (text, start, linePosition);  // Place the text in the center of the line in the PDF
     }

    /**********************************************************************************************************
     *
     * This will print the text so that it ends on the right margin in the footer.  The text should fit on the
     * line as there will be no line wrapping.
     *
     * @param text          the text to centered on the line.
     * @param text_width    the width of the largest line in the footer.  This is so all the text for each
     *                      line will line up.
     * @param linePosition  the line on the page to print the text
     *
     **********************************************************************************************************/
     printFooterRightTextLine (text, text_width, linePosition) {
        var start = this.pdfStructure.pageInfo.width - (this.pdfStructure.margins.right + text_width);  // Determine where the line should start on the line

        this.pdfStructure.doc.text (text, start, linePosition);   // Place the text in the footer
     }

     /*********************************************************************************************************
      *
      * This will determine the largest line in the footer.  This method is called if the location of the
      * footer lines is RIGHT.  This will make sure that all the lines in the footer start in the same location
      * and the largest footer line will end at the right margin.
      *
      *********************************************************************************************************/
     determineLargest () {
         var largest = 0;       // The width of the laragest line in the footer
         var text_width = 0;    // The length of a line of text in the footer

         // Spin through the footer lines to determine the largest of the lines
         for (let i = 0; i < this.pdfStructure.footer.lines.length; i++) {
            text_width = this.pdfStructure.doc.getStringUnitWidth (this.pdfStructure.footer.lines[i]) * this.pdfStructure.footer_font.size;   // Determine the width of the line

            if (text_width > largest) { // Is this the new largest line in the footer
                largest = text_width;
            }
         }

         if (this.pdfStructure.footer.isPage === true) {  // Are there page numbers in the footer? Yes
            if (this.pdfStructure.footer.isOfPart === true) { // Is the of part of the page number being used?  Yes
               // Determines the width of Page: and of and then add an inch for the page number and total number of pages
               text_width = this.pdfStructure.doc.getStringUnitWidth ('Page:  of ') * this.pdfStructure.footer_font.size + POINTS_PER_INCH;
            } else {    // Not using the of part of the page number
               // Determines the width of Page: and then add an inch for the page number
               text_width = this.pdfStructure.doc.getStringUnitWidth ('Page: ') * this.pdfStructure.footer_font.size + POINTS_PER_INCH;
            }

            if (text_width > largest) { // Check to see if the page number is now the largest
                largest = text_width;
            }
         }

         return largest;    // Return the largest width in the footer
     }

     /*******************************************************************************************************************************
      *
      * This will display the page footer at the bottom of each page.  This is called when the PDF is being saved to a file or when
      * the contents of the PDF is being retrieved.
      *
      *******************************************************************************************************************************/
     pageFooter() {
         var text = null;   // The current line of text to be displayed in the footer
         var linePos = 0;   // The current line position in the footer
         var largest = 0;   // The largest line width within the footer

         if (this.pdfStructure.footer.set === true) { // The footer was set up, so it needs to be displayed on each page
            // Set up the footer font from the regular text font
            this.pdfStructure.doc.setFont (this.pdfStructure.footer_font.family, this.pdfStructure.footer_font.style);
            this.pdfStructure.doc.setFontSize (this.pdfStructure.footer_font.size);

            if (this.pdfStructure.footer.location === 'RIGHT') {
                largest = this.determineLargest();  // Determine the width of the largest line of text in the footer
            }

            // Spin through all the pages in the PDF and place the footer at the bottom of each one.  The space at the bottom of the
            for (let i = 1; i <= this.pdfStructure.counters.totalPages; i++) {
                this.pdfStructure.doc.setPage(i); // Advance to the page to place the footer on

                linePos =this.pdfStructure. pageInfo.length + this.pdfStructure.footer_font.size * 2;   // Determine the first line of the footer, which is two lines after the last line printed

                // Spin through the footer lines and print them in the footer
                for (let j = 0; j < this.pdfStructure.footer.lines.length; j++) {
                    if (this.pdfStructure.footer.location === 'LEFT') {
                        doc.text (this.pdfStructure.footer.lines[j], this.pdfStructure.margins.left, linePos);
                    } else if (this.pdfStructure.footer.location === 'RIGHT') {
                        this.printFooterRightTextLine (footer.lines[j], largest, linePos);
                    } else if (this.pdfStructure.footer.location === 'CENTER') {
                        this.printFooterCenterTextLine (this.pdfStructure.footer.lines[j], linePos);
                    }

                    linePos += this.pdfStructure.footer_font.size + SPACING;  // Advance to the next line in the footer
                }

                // Is the page number to be displayed?
                if (this.pdfStructure.footer.isPage === true) {   // Yes
                    if (this.pdfStructure.footer.isOfPart === true) { // Is the of part of the page number being used?  Yes
                        text = "Page: " + i + " of " + this.pdfStructure.counters.totalPages; // Build the page number line with the of part
                    } else {    // Not using the of part
                        text = "Page: " + i;    // Build the page number line
                    }

                    // Print the page number line
                    if (this.pdfStructure.footer.location === 'LEFT') {
                        this.pdfStructure.doc.text (text, this.pdfStructure.margins.left, linePos);
                    } else if (this.pdfStructure.footer.location === 'CENTER') {
                        this.printFooterCenterTextLine (text, linePos);
                    } else if (this.pdfStructure.footer.location === 'RIGHT') {
                        this.printFooterRightTextLine (text, largest, linePos);
                    }
                }
            }

            // Reset the font to be the regular font
            this.pdfStructure.doc.setFont (this.pdfStructure.font.family, this.pdfStructure.font.style);
            this.pdfStructure.doc.setFontSize (this.pdfStructure.font.size);
         }
     }

    /**********************************************************************************************************
     *
     * This will save the PDF in the named file.
     *
     * @param filename the name of the file to save the PDF in
     *
     **********************************************************************************************************/
     createPDFFile(filename) {
         this.pageFooter(); // Print the footer for each page
         this.pdfStructure.doc.save (filename);
     }

    /**********************************************************************************************************
     *
     * This will return the contents of the PDF as a string.
     *
     **********************************************************************************************************/
     getPDFContents() {
         this.pageFooter(); // Print the footer for each page
         return this.pdfStructure.doc.output (undefined);
     }

    /**********************************************************************************************************
     *
     * This will insert a string into the middle of another string.
     *
     * @param str   the string to insert the other string into
     * @param index the index into str into which the other string should be inserted into
     * @param value the other string to insert into str
     *
     **********************************************************************************************************/
     insert (str, index, value) {
         return str.substr (0, index) + value + str.substr(index);
     }

    /**********************************************************************************************************
     *
     * This will fully justify a line in the PDF.  It will do this by adding extra spaces in between words on
     * the line until it reaches the end of the line.  It will first insert a blank between the first two
     * words in the text.  Next, it will add an extra space between the second and third words on the line.
     * It will continue doing this with successive words in the text.  If it runs out of words and has not
     * fully justified the text, it start over with the first two words and proceed on from there.
     *
     * @param text      the text to be fully justified
     * @param maxWidth  the maximum width of the line for the full justiification
     *
     * @return returns the fully justifed text as a string
     *
     **********************************************************************************************************/
     fullyJustify (text, maxWidth) {
         var text_width = this.pdfStructure.doc.getStringUnitWidth (text) * this.pdfStructure.font.size;    // The width of the text in points.  Multiplying by the font size, since it determines the width for a font size of 1
         var i = 0;         // Loop control variable
         var start = 0;     // The current place in the text to start looping, either to find a blank or a non-blank character
         var found = true;  // Indicates whether a blank was found or not in the text

         // Keep looping until the text is fully justifed or there is no blank
         // in the text to make it fully justified
         while (text_width < maxWidth && found === true) {
             found = false;
             // Find the next blank in the text
             for (i = start; i < text.length; i++) {
                 if (text.charAt(i) === ' ') {  // Found a blank
                     text = this.insert (text, i, ' '); // Insert an extra blank for full justification
                     found = true;  // Blank was found and break out of the for loop
                     break;
                 }
             }

             start = i + 1; // Start a the character after the first blank

             // Spin through the characters until a non-blank is found, to find the blank between the
             // next set of two words
             for (i = start; i < text.length; i++) {
                 if (text.charAt(i) !== ' ') {  // Non-blank character found, so break the for loop
                     break;
                 }
             }

             start = i; // Start at the next blank character

             if (start >= text.length) {    // Reached the end of the text, so start over until fully justified
                 start = 0;
             }

             text_width = this.pdfStructure.doc.getStringUnitWidth (text) * this.pdfStructure.font.size;    // The new width of the text (after adding a blank) in points.  Multiplying by the font size, since it determines the width for a font size of 1.
         }

         return text;   // Return the fully justified text
     }
}

export default PDFWriter;
