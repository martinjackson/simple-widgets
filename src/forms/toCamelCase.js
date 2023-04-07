
// ---------------------------------------------------------------------------------------------------------------------
export function toCamelCaseVar(str) {

  return str.toLowerCase()
            .replace(/_/g, ' ')
            .replace(/(?:^\w|[A-Z]|\b\w)/g, (ltr, idx) => idx === 0 ? ltr.toLowerCase() : ltr.toUpperCase())
            .replace(/\s+/g, '')
            .replace('#','');
}
/*
  return str.split(' ')
    .map((word, index) => {
      if (index == 0) { // 1st word lowercase
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');
*/

// ---------------------------------------------------------------------------------------------------------------------
export function toEnglishPhrase(str) {

  return str.toLowerCase()
            .replace(/_/g, ' ')
            .replace(/(?:^\w|[A-Z]|\b\w)/g, (ltr) => ltr.toUpperCase())
            .replace('#','');

}
