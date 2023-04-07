// ---------------------------------------------------------------------------------------------------------------------
export function removeTypeName(arr) {
  if (arr) {
    arr = arr.map(item => {
      // eslint-disable-next-line no-unused-vars
      const { __typename, ...rest } = item;
      return rest;
    });
  }

  return arr;
}
