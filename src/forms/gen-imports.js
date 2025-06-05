
const fs = require('node:fs');

console.log(`
  // cSpell:ignore Funct Parms disp

  // export * from "module-name"
`)

const files = fs.readdirSync('.')
              .filter(fn => fn.endsWith('.js'))
              .filter(fn => fn !== 'gen_imports.js')
              .filter(fn => fn !== 'index.js')

files.forEach(name => {
  console.log(`export * from './${name}'`)
});
