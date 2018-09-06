import constants from './constants';
import defaultConstants from './defaultConstants';

var pdfStructureDefault = {
    doc : null, // The PDF document 

    margins : { // The margins for the page in points (margins are set for 1 one inch or 72 points)
        left: defaultConstants.MARGINS_LEFT_DEFAULT,        // Left margin
        right: defaultConstants.MARGINS_RIGHT_DEFAULT,      // Right margin
        top: defaultConstants.MARGINS_TOP_DEFAULT,          // Top margin
        bottom: defaultConstants.MARGINS_BOTTOM_DEFAULT,    // bottom margin
        set: defaultConstants.MARGINS_SET_DEFAULT,          // Used to see if the setMargins method is called more than once or if text has been printed.  Can only set the top and bottom margins once.
    },

    pageInfo : {    // The information about the page
        width: defaultConstants.PAGE_INFO_WIDTH_DEFAULT,                    // The width of the page
        height: defaultConstants.PAGE_INFO_HEIGHT_DEFAULT,                  // The height of the page
        length: defaultConstants.PAGE_INFO_LENGTH_DEFAULT,                  // The actual length of the page for print
        lineWrap: defaultConstants.PAGE_INFO_LINE_WRAP_DEFAULT,             // Indicates whether line wrapping will occur or not
        fullyJustified: defaultConstants.PAGE_INFO_FULLY_JUSTIFIED_DEFAULT, // Indicates whether the line should be fully justified or not (lineWrap must be true)
        tab: defaultConstants.PAGE_INFO_TAB_DEFAULT,                        // The amount to tab when the autoTab method is used
    },

    font : {    // The font for the regular text
        family: defaultConstants.FONT_FAMILY_DEFAULT,   // The name of the font
        size: defaultConstants.FONT_SIZE_DEFAULT,       // The size of the font
        style: defaultConstants.FONT_STYLE_DEFAULT,     // The style of the font (plain, bold, italic, etc) 
    },

    heading_font : {    // The font for the heading
        family: defaultConstants.HEAD_FONT_FAMILY_DEFAULT,  // The name of the font
        size: defaultConstants.HEAD_FONT_SIZE_DEFAULT,      // The size of the font
        style: defaultConstants.HEAD_FONT_STYLE_DEFAULT,    // The style of the font (plain, bold, italic, etc)
    },

    footer_font : { // The font for footer
        family: defaultConstants.FOOTER_FONT_FAMILY_DEFAULT,    // The name of the footer font
        size: defaultConstants.FOOTER_FONT_SIZE_DEFAULT,        // The size of the footer font
        style: defaultConstants.FOOTER_FONT_STYLE_DEFAULT,      // The style of the footer font (plain, bold, italic, etc)
    },

    footer : {  // The describes the make up of the footer, which will be at the bottom of each page
        lines: defaultConstants.FOOTER_LINES_DEFAULT,                   // The lines of text that make up the footer
        isPage: defaultConstants.FOOTER_IS_PAGE_DEFAULT,                // Indicates if the page number is to be displayed as the last line in the footer (true) or not (false).  If set to true, it will automatically place the text Page: number on the last line of the footer.
        location: defaultConstants.FOOTER_LOCATION_DEFAULT,             // The location of the text within the footer.  The values are LEFT (starts in the left margin), CENTER (centered within the footer), or RIGHT (ends at the right margin).  All lines in the footer have the same location.
        isOfPart: defaultConstants.FOOTER_IS_OF_PART_DEFAULT,           // Indicates if there should be an of part to the page number, like Page: 1 of 5, indicating this is the first of 5 pages.
        set: defaultConstants.FOOTER_SET_DEFAULT,                       // Indicates that a footer has been set up before any text has been printed to the PDF.  Can not set up a footer after text has been printed.
        canNotBeSet: defaultConstants.FOOTER_CAN_NOT_BE_SET_DEFAULT,    // Indicates that the footer can not be set, since text has been printed to the PDF already.
    },

    heading : { // The information needed to build the heading
        titles: defaultConstants.HEADING_TITLES_DEFAULT,            // The titles that can be displayed (can display several titles in the heading)
        left: defaultConstants.HEADING_LEFT_DEFAULT,                // The information to the left of the titles to be displayed (can have several)
        right: defaultConstants.HEADING_RIGHT_DEFAULT,              // The information to the right of the titles to be displayed (can have several)
        isPage: defaultConstants.HEADING_IS_PAGE_DEFAULT,           // Indicates whether there should be a page number in the title.  If true, there must be a value for pageNumLoc.
        pageNumLoc: defaultConstants.HEADING_PAGE_NUM_LOC_DEFAULT,  // This indicates where the page number is to be placed in the heading.  It will be placed after the text in that location.  The first value is which one of the left or right positions it is to be placed in and the second value in the array is either left or right to 
                                                                    // whether it should be on left side or the right side of the page.
        blankLines: defaultConstants.HEADING_BLANK_LINES_DEFAULT,   // The number of blank lines after the printing of the heading
        endOfPage: defaultConstants.HEADING_END_OF_PAGE_DEFAULT,    // Indicates whether the end of page has been reached or not
    },

    counters : {    // The counters keep track of the current position on the page
        curPos: defaultConstants.COUNTERS_CUR_POS_DEFAULT,      // The current position on the line
        linePos: defaultConstants.COUNTERS_LINE_POS_DEFAULT,     // The current line on the page
        pageCount: defaultConstants.COUNTERS_PAGE_COUNT_DEFAULT,   // The current page in the document
        totalPages: defaultConstants.COUNTER_TOTAL_PAGES_DEFAULT,  // The total number of pages printed in the PDF document 
    },

    error: defaultConstants.ERROR_DEFAULT,
};

export default pdfStructureDefault;