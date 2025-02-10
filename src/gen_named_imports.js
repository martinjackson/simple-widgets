

const fs = require('fs')

console.log(`
  // cSpell:ignore Funct Parms disp

  import './index.css'

`)

function getFunctionName(line) {
  const word = line.split(' ')[2]  // get 3rd word
  const i = word.indexOf('(')
  return (i != -1) ? word.substr(0,i) : word.trim()
}

const files = fs.readdirSync('.')
              .filter(fn => fn.endsWith('.js'))
              .filter(fn => fn !== 'gen_imports.js')
              .filter(fn => fn !== 'gen_named_imports.js')
              .filter(fn => fn !== 'index.js')
              .filter(fn => fn !== 'serviceWorker.js')

const ans = files.map( fname => {
  const names = fs.readFileSync(fname,{ encoding : 'utf8' })
      .split('\n')
      .filter( line => line.includes('export '))
      .filter( line => !line.includes('export default'))
      .map(line => getFunctionName(line))

  return { fname, names:names.sort().join(', ') }
})
   .filter(f => f.names.length>0)

ans.forEach(info => console.log(`import { ${info.names} } from './${info.fname}' `))

console.log('')
console.log('export {')

ans.forEach(info => console.log(`${info.names},`))

console.log('}')

