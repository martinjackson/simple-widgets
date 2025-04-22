export const scrollToViewByID = ( elementId ) => {
    const anElement = document.getElementById(elementId);

    anElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
    });
};
    
export const scrollToViewByName = ( elementName ) => {
    const anElement = document.getElementsByName(elementName);

    anElement[0].scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
    });
};
    
export const scrollToViewByClassName = ( elementClassName ) => {
    const anElement = document.getElementsByClassName(elementClassName);

    anElement[0].scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
    });
};
    
export const scrollToViewByTagName = ( elementTagName ) => {
    const element = document.getElementsByTag(elementTagName);

    element[0].scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
    });
};
    
    