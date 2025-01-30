
// Taken from
// https://souporserious.com/bundling-typescript-with-esbuild-for-npm/

const { build } = require('esbuild')
const inlineImage = require("esbuild-plugin-inline-image")

const { peerDependencies } = require('./package.json')

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
console.log('const peerDeps =', JSON.stringify(peerDeps))

build({
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

  outfile: 'esbuild-lib/index.js',
  format: "cjs",                      //
})

// https://esbuild.github.io/api/#format
// esm, cjs, iife (immediately-invoked function expression aka. browser)
