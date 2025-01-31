
const fs = require('node:fs');

const files = fs.readdirSync('.')
              .filter(fn => fn.endsWith('.js'))
              .filter(fn => fn !== 'gen_imports.js')
              .filter(fn => fn !== 'index.js')

console.log(`

  // cSpell:ignore Funct

  import './index.css'

  // export * from "module-name"

`)


files.forEach(name => {
  // export * from "module-name";
  console.log(`export * from "${name}"`)

});