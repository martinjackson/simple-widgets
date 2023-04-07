// -----------------------------------------------------------------------------------------------------
export function isNotEmpty(obj) {

  if (Array.isArray(obj) && obj.length > 0) {
    return true;
  }

  return (obj != null);
}
