
// ----------------------------------------------------------------------------
export function getUrlPath() {

  const urlParams = new URLSearchParams(window.location.search)
  const path = urlParams.get('path') || '/'

  return path;
}
