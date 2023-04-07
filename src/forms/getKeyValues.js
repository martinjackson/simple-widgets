
// import { TS }        from './time.js'

// -------------------------------------------------------------------------------------
export const getGqlName = (fqRecName) => {

  const idx = fqRecName.lastIndexOf('.')
  let gqlName = (idx != -1) ? fqRecName.substr(idx+1) : fqRecName

  const idx2 = gqlName.lastIndexOf('[')
  if (idx2 != -1) {
    gqlName = gqlName.substr(0,idx2)
  }

  return gqlName
}

// -------------------------------------------------------------------------------------
export const getKeyValues = (pkNames, rec, gqlName) => {

    const missing = []
    const newRec = {}
    pkNames.map(n => {
      if (!rec[n]) {
        missing.push(n)
      }
      newRec[n] = rec[n]
    })

    if (missing.length > 0) {
      const msg = 'Unable to Save Changes: '+gqlName+' in query is missing PK field(s): '+missing+' '
      // +TS()

      const err = new Error(msg)
      throw err
    }

    return newRec
}