/************************************************************************************
 * 
 * This will find all the rules that match the name of the search rule in the CSS 
 * Rules (selectorText) in a stylesheet.  The search rule can be a class name, id 
 * selector, etc.)  First print out the CSS Rules to find the value to be manipulated.
 * 
 * @param {*} searchRule the rule to search for in the stylesheet.
 * 
 * @returns returns an array of objects which contain the following fields:
 *      sheetIndex = the index for the style sheet
 *      index = the index of the rule in the stylesheet
 * 
 *************************************************************************************/
export const findCssRule = (searchRule) => {
    let ruleIndex = [];
    for (let j = 0; j < document.styleSheets.length; j++) {
        let found = false;
        let cssRules = document.styleSheets[j].cssRules;
        for (let i = 0; i < cssRules.length && found === false; i++) {
            if (cssRules[i].selectorText === searchRule) {
                ruleIndex.push ({ sheetIndex: j, index: i });
                found = true;
            }
        }
    }

    return ruleIndex;
}

/********************************************************************************************
 * 
 * This will delete a CSS rule from a stylesheet.
 * 
 * @param {*} searchRule the rule to be deleted (selectorText)
 * 
 *********************************************************************************************/
export const deleteCssRule = (searchRule) => {
    let ruleIndexes = findCssRule(searchRule);

    for (let i = 0; i < ruleIndexes.length; i++) {
        document.styleSheets[ruleIndexes[i].sheetIndex].deleteRule(ruleIndexes[i].index);
    }
}

/***********************************************************************************************
 * 
 * This will find a stylesheet based on the title of the stylesheet; therefore, each stylesheet
 * should have a title on it.
 * 
 * @param {*} title the title of the style sheet
 * 
 * @returns the index of the stylesheet in the stylesheet array
 * 
 ************************************************************************************************/
export const findStyleSheet = (title) => {
    let sheets = document.styleSheets;
    for (let i = 0; i < sheets.length; i++) {
        if (sheets[i].title === title) {
            return i;
        }
    }
}

/**************************************************************************************************
 * 
 * This will insert a new rule into a stylesheet.
 * 
 * @param {*} styleSheetTitle the title of the stylesheet in which the rule is to be inserted
 * @param {*} newRule the rule to be added (normal CSS)
 * 
 **************************************************************************************************/
export const insertCssRule = (styleSheetTitle, newRule) => {
    let index = findStyleSheet(styleSheetTitle);
    document.styleSheets[index].insertRule(newRule);
}

/***************************************************************************************************
 * 
 * This will print out the stylesheet and all the rules within the stylesheet.
 * 
 ****************************************************************************************************/
export const printCssRules = () => {
    for (let j = 0; j < document.styleSheets.length; j++) {
        console.log ('Style Sheet', document.styleSheets[j]);
        console.log ('');
        let cssRules = document.styleSheets[j].cssRules;
        for (let i = 0; i < cssRules.length; i++) {
                console.log ('CSS Rule: ', cssRules[i]);
                console.log ('');
        }
        console.log ('');
        console.log ('');
    }
}
