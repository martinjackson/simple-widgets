
const fs = require('fs');

var files = fs.readdirSync('.')
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

