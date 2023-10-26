// ----------------------------------------------------------------------------------------------------------------------------------------------
function val2str(data) {

    let display = data
    if (typeof data == 'function') display = 'fn()'
    if (typeof data == 'object') display = JSON.stringify(data)   // JSON.stringify(data, null, 2) puts in newlines

    return display
}

// ----------------------------------------------------------------------------------------------------------------------------------------------
export function prop2str(obj, propList) {

  return propList.map(name => {
    let data = obj[name]
    return  name + ': ' + val2str(data)
  }).join(' ');
}
