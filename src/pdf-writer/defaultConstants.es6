import constants from './constants'; 

const defaultConstants = { 
    MARGINS_LEFT_DEFAULT: constants.POINTS_PER_INCH,    // Default value for the left margin in points
    MARGINS_RIGHT_DEFAULT: constants.POINTS_PER_INCH,   // Default value for the right margin in points
    MARGINS_TOP_DEFAULT: constants.POINTS_PER_INCH,     // Default value for the top margin in points
    MARGINS_BOTTOM_DEFAULT: constants.POINTS_PER_INCH,  // Default value for the bottom margin in points
    MARGINS_SET_DEFAULT: false,                         // Default value indicating whether the top and bottom margins have been set

    MARGINS_LEFT_INCH_DEFAULT: 1,       // Default value for the left margin in inches
    MARGINS_RIGHT_INCH_DEFAULT: 1,      // Default value for the right margin in inches
    MARGINS_TOP_INCH_DEFAULT: 1,        // Default value for the top margin in inches
    MARGINS_BOTTOM_INCH_DEFAULT: 1,     // Default value for the bottom margin in inches

    PAGE_INFO_WIDTH_DEFAULT: 0,                                 // Default value for the width of the paper
    PAGE_INFO_HEIGHT_DEFAULT: 0,                                // Default value for the height of the paper
    PAGE_INFO_LENGTH_DEFAULT: 0,                                // Default value for the printable length on the paper excluding top and bottom margins
    PAGE_INFO_LINE_WRAP_DEFAULT: true,                          // Default value indicating whether line wrapping should take place or not
    PAGE_INFO_FULLY_JUSTIFIED_DEFAULT: true,                    // Default value indicating whether full justification should take place or not
    PAGE_INFO_TAB_DEFAULT: 0.5 * constants.POINTS_PER_INCH,     // Default value for distance between each tab stop on the line

    FONT_FAMILY_DEFAULT: 'Times New Roman', // Default value for the font on the page
    FONT_SIZE_DEFAULT: 12,                  // Default value for the font size on the page
    FONT_STYLE_DEFAULT: 'plain',            // Default value for the font style on the page

    HEAD_FONT_FAMILY_DEFAULT: 'Times New Roman',    // Default value for the font for the heading on each page
    HEAD_FONT_SIZE_DEFAULT: 12,                     // Default value for the font size for the heading on each page
    HEAD_FONT_STYLE_DEFAULT: 'plain',               // Default value for the font style for the heading on each page

    FOOTER_FONT_FAMILY_DEFAULT: 'Times New Roman',  // Default value for the font for the footer on each page
    FOOTER_FONT_SIZE_DEFAULT: 12,                   // Default value for the font size for the footer on each page
    FOOTER_FONT_STYLE_DEFAULT: 'plain',             // Default value for the font style for the footer on each page

    FOOTER_LINES_DEFAULT: [],                       // Default value for the footer lines at the bottom of each page
    FOOTER_IS_PAGE_DEFAULT: false,                  // Default value indicating whether a page number should be displayed at the bottom of each page
    FOOTER_LOCATION_DEFAULT: 'CENTER',              // Default value for where each line of the footer should be printed
    FOOTER_IS_OF_PART_DEFAULT: false,               // Default value indicating whether the of total pages should be displayed with the page number
    FOOTER_SET_DEFAULT: false,                      // Default value indicating whether the footer information has been set already
    FOOTER_CAN_NOT_BE_SET_DEFAULT: false,           // Default value inidcating that the footer information can never be set, since regular text has already been printed

    HEADING_TITLES_DEFAULT: [],             // Default values for the titles of the heading (these values will be in the middle of the line)
    HEADING_LEFT_DEFAULT: [],               // Default values for the left side of the heading
    HEADING_RIGHT_DEFAULT: [],              // Default values for the right side of the heading
    HEADING_IS_PAGE_DEFAULT: false,         // Default value indicating whether the page number should be printed in the heading or not
    HEADING_PAGE_NUM_LOC_DEFAULT: [],       // Default value that indicates where the page number should be printed in the heading
    HEADING_BLANK_LINES_DEFAULT: 1,         // Default value indicating the number of blank lines that should be printed after the heading
    HEADING_END_OF_PAGE_DEFAULT: false,     // Default value indicating whether the end of page has been reached or not and a new page should begin

    COUNTERS_CUR_POS_DEFAULT: 0,            // Default value for the current position on the line
    COUNTERS_LINE_POS_DEFAULT: 0,           // Default value for the current line on the page
    COUNTERS_PAGE_COUNT_DEFAULT: 1,         // Default value for the current page count
    COUNTER_TOTAL_PAGES_DEFAULT: 1,         // Default value for the total number of pages processed thus far

    ERROR_DEFAULT: false,   // Default value for indicating whether an error occurred in the constructor or not
};

export default defaultConstants;