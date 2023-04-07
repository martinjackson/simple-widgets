// --------------------------------------------------------------------------------------------------------------------------------------------------
export function ignoreCase(a, b) {
  a = a.toUpperCase();
  b = b.toUpperCase();

  if (a < b)
    return -1;
  if (a > b)
    return 1;

  return 0;
}
