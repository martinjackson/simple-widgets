
// taken from:
// https://www.tutorialspoint.com/flattening-a-json-object-in-javascript#


// ------------------------------------------------------------------------------------------
export function flattenJSON(obj = {}, res = {}, extraKey = '') {
  let key;
  for (key in obj) {

    const collapseArray = (Array.isArray(obj[key]) && obj[key].length == 1)

    if (collapseArray) {    // array with single object, collapse
       flattenJSON(obj[key][0], res, `${extraKey}${key}.`);
    } else {
      if (typeof obj[key] !== 'object') {
        res[extraKey + key] = obj[key];
      } else {
        flattenJSON(obj[key], res, `${extraKey}${key}.`);
      }
    }
  }

  return res
}

/**
 * Unlike flattenJSON() this one can loose data if the innermost nested
 * property names are not unique.
 **/
// ------------------------------------------------------------------------------------------
export function dumbFlattenJSON(obj = {}, extraKey = '') {

  obj = flattenJSON(obj)

  const res = {}
  let key;
  for (key in obj) {

    let dumbKey = key
    const idx = key.lastIndexOf('.')
    if (idx != -1) {
      dumbKey = key.substring(idx+1)
    }
    res[extraKey + dumbKey] = obj[key];
  }

  return res
}

