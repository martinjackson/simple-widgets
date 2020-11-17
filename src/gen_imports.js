
const fs = require('fs');

const files = fs.readdirSync('.')
              .filter(fn => fn.endsWith('.js'))
              .filter(fn => fn !== 'gen_imports.js')
              .filter(fn => fn !== 'index.js')

const ans = files.map( fname => {
  const names = fs.readFileSync(fname,{ encoding : 'utf8' })
      .split('\n')
      .filter( line => line.includes('export '))
      .filter( line => !line.includes('export default'))
      .map(line => line.split(' ')[2])  // get 3rd word

  return { fname, names:names.join(', ') }
})
   .filter(f => f.names.length>0)
   .map( info => [
     `import { ${info.names} } from '${info.fname}' `,
     `export { ${info.names} }`
   ])

ans.flat().sort().forEach(f => console.log(f))

/*
export { Choice, List }
export { DatePickerStyle() }
export { defaultThemeSettings, buttonStyle, generateButton, generateDefaultButton }
export { setInvalidScreen, setInvalidTable, setInvalidDual, resetDisplayScreen, resetDisplayTable, wasClickedScreen, wasClickedTable, isConstant, validCheckDual, validCheckScreen, validCheckTable, clearInvalidDual, clearInvalidScreen, clearInvalidTable, copyStyle, processStyleScreen, clearInvalidScreenOnly, processStyleTable, validStyling, invalidStyling, isInvalid, getInvalidMessage }

import { Choice, List } from 'List.js'
import { DatePickerStyle() } from 'DatePickerStyle.js'
import { defaultThemeSettings, buttonStyle, generateButton, generateDefaultButton } from 'Theme.js'
import { setInvalidScreen, setInvalidTable, setInvalidDual, resetDisplayScreen, resetDisplayTable, wasClickedScreen, wasClickedTable, isConstant, validCheckDual, validCheckScreen, validCheckTable, clearInvalidDual, clearInvalidScreen, clearInvalidTable, copyStyle, processStyleScreen, clearInvalidScreenOnly, processStyleTable, validStyling, invalidStyling, isInvalid, getInvalidMessage } from 'Invalid.js'

*/
