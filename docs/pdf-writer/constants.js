// The size of the paper
const constants = {
    LETTER_WIDTH_PORTRAIT : 8.3,
    LETTER_HEIGHT_PORTRAIT : 11.7,
    LETTER_WIDTH_LANDSCAPE : 11.7,
    LETTER_HEIGHT_LANDSCAPE : 8.3,
    
    POINTS_PER_INCH : 72, // Number of points in one inch

    SPACING : 2,  // The spacing between lines in the PDF in points

    NO_ERROR : 0,     // No error occurred in the constructor
    MINOR_ERROR : 1,  // A minor error occurred in the constructor, but processing can continue
    MAJOR_ERROR : 2,  // A major error occurred in the constructor, but processing can NOT continue
}

export default constants;