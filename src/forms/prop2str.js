// ----------------------------------------------------------------------------------------------------------------------------------------------
export function prop2str(obj, propList) {
  return propList.map(name => {
    const display = (typeof obj[name] == 'function') ? 'fn()' : obj[name]
    return  name + ': ' + display
  }).join(' ');
}
