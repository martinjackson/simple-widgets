// import { removeIllegalAttributes } from './removeIllegalAttributes.js'
// ---------------------------------------------------------------------------------------------------------------------

export function isFunction(functionToCheck) {
  return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}
