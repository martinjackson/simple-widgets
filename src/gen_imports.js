
const fs = require('node:fs');

console.log(`
  // cSpell:ignore Funct Parms disp

  import './index.css'

  // export * from "module-name"
`)

const files = fs.readdirSync('.')
              .filter(fn => fn.endsWith('.js'))
              .filter(fn => fn !== 'gen_imports.js')
              .filter(fn => fn !== 'index.js')

files.forEach(name => {
  // export * from "module-name";
  console.log(`export * from './${name}'`)

});