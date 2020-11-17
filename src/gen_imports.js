
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

  return { fname, names:names.sort().join(', ') }
})
   .filter(f => f.names.length>0)
   .map( info => [
     `import { ${info.names} } from '${info.fname}' `,
     `export { ${info.names} }`
   ])

ans.flat().forEach(f => console.log(f))

/*
import { DatePickerStyle() } from 'DatePickerStyle.js'
export { DatePickerStyle() }
import { clearInvalidDual, clearInvalidScreen, clearInvalidScreenOnly, clearInvalidTable, copyStyle, getInvalidMessage, invalidStyling, isConstant, isInvalid, processStyleScreen, processStyleTable, resetDisplayScreen, resetDisplayTable, setInvalidDual, setInvalidScreen, setInvalidTable, validCheckDual, validCheckScreen, validCheckTable, validStyling, wasClickedScreen, wasClickedTable } from 'Invalid.js'
export { clearInvalidDual, clearInvalidScreen, clearInvalidScreenOnly, clearInvalidTable, copyStyle, getInvalidMessage, invalidStyling, isConstant, isInvalid, processStyleScreen, processStyleTable, resetDisplayScreen, resetDisplayTable, setInvalidDual, setInvalidScreen, setInvalidTable, validCheckDual, validCheckScreen, validCheckTable, validStyling, wasClickedScreen, wasClickedTable }
import { Choice, List } from 'List.js'
export { Choice, List }
import { buttonStyle, defaultThemeSettings, generateButton, generateDefaultButton } from 'Theme.js'
export { buttonStyle, defaultThemeSettings, generateButton, generateDefaultButton }
*/
