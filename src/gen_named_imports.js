

const fs = require('node:fs')
const path = require('node:path')

console.log(`
  // cSpell:ignore Funct Parms disp

  import './index.css'

`)

//-------------------------------------------------------------------------------------
function goodFile(file) {
  return file.endsWith('.js') &&
               !file.includes('gen_imports.js') &&
               !file.includes('gen_named_imports.js') &&
               !file.includes('index.js') &&
               !file.includes('serviceWorker.js')
}

//-------------------------------------------------------------------------------------
function getFunctionName(line) {
  const word = line.split(' ')[2]  // get 3rd word
  const i = word.indexOf('(')
  return (i != -1) ? word.substr(0,i) : word.trim()
}

//-------------------------------------------------------------------------------------
function getRelativePath(base, file) {
  return path.relative(base, path.resolve(base, file));
}

//-------------------------------------------------------------------------------------
function getAllJsFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.resolve(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      // Recurse into subdirectory
      results = results.concat(getAllJsFiles(fullPath));
    } else if (goodFile(file)) {
      // Add file to results if it's a .js file and not excluded
      results.push(getRelativePath('.', fullPath));
    }
  });
  return results;
}

const files = getAllJsFiles('.');

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

