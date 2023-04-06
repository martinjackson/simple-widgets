
// Taken from
// https://souporserious.com/bundling-typescript-with-esbuild-for-npm/

const { build } = require('esbuild')
const inlineImage = require("esbuild-plugin-inline-image")

const { dependencies, peerDependencies } = require('./package.json')

const shared = {
  entryPoints: ['src/index.js'],
  bundle: true,
  sourcemap: true,
  loader: {
    ".js": "jsx",
  },
  plugins: [inlineImage()],
  external: Object.keys(dependencies).concat(Object.keys(peerDependencies)),
}

build({
  ...shared,
  outfile: 'lib/index.js',
})

build({
  ...shared,
  outfile: 'lib/index.esm.js',
  format: 'esm',
})

/*
const { Generator } = require('npm-dts')

new Generator({
  entry: 'src/index.ts',
  output: 'lib/index.d.ts',
}).generate()

*/