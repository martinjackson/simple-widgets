// ---------------------------------------------------------------------------------------------------------------------
export const dispAsString = (data) => {
  if (Array.isArray(data)) {
    return '['+data.length+']'
  } else {
    return ''+data
  }

}