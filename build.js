
// Taken from
// https://souporserious.com/bundling-typescript-with-esbuild-for-npm/

const { build } = require('esbuild')
const inlineImage = require("esbuild-plugin-inline-image")
// const { externalGlobalPlugin } = require("esbuild-plugin-external-global");

const { dependencies, peerDependencies } = require('./package.json')

/*
    externalGlobalPlugin({
        'react': 'window.React',
        'react-dom': 'window.ReactDOM',
        'pdfmake': 'pdfmake',
        'react-csv': 'react-csv',
        'autoprefixer': 'autoprefixer'
    })
*/

const peerDeps = Object.keys(peerDependencies)
console.log('peerDeps:', peerDeps)

const shared = {
  entryPoints: ['src/index.js'],
  bundle: true,
  sourcemap: true,
  loader: {
    ".js": "jsx",
  },
  plugins: [
    inlineImage(),
  ],
  external: peerDeps,
}

build({
  ...shared,
  outfile: 'lib/index.js',
  format: "cjs",
})

/*
build({
  ...shared,
  outfile: 'lib/index.mjs',
  format: 'esm',
})
*/

/*
const { Generator } = require('npm-dts')

new Generator({
  entry: 'src/index.ts',
  output: 'lib/index.d.ts',
}).generate()

*/