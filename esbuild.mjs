import esbuild from 'esbuild'
import { nodeExternalsPlugin } from 'esbuild-node-externals'

import postcss from 'esbuild-postcss'

import inlineImage from 'esbuild-plugin-inline-image'
import esbPlugMd from 'esbuild-plugin-markdown'
const { markdownPlugin } = esbPlugMd

import chalk from 'chalk';
// chalk.level = 1;    // Use colors in the VS Code Debug Window

// ----------------------------------------------------------------------------
function format(yourDate) {
  const ds = yourDate.toISOString().split('T')
  return ds[0]+' '+HHmm(yourDate)
}

// ----------------------------------------------------------------------------
function HHmm(yourDate) {
  let h = yourDate.getHours()
  const m = yourDate.getMinutes()
  const min = (m < 10) ? '0'+m : m
  const pm = (h > 11) ? ' pm' : ' am'
  if (h > 12) {
    h -= 12
  }
  return h+':'+min+pm
}

// ============================================================================
let start = new Date()

esbuild
  .build({
    entryPoints: ["./src/index.js"],
    outfile: "dist/index.js",
    sourcemap: true,
    bundle: true,
    minify: true,
    treeShaking: true,
    platform: "node",
    format: "cjs",
    target: "node14",
    loader: { '.js': 'jsx' },
    plugins: [postcss(), inlineImage(), markdownPlugin(), nodeExternalsPlugin()],
  })
  .catch((err) => {
    console.log(chalk.red(' build err: '), err.message);
    process.exit(1)
  })
  .finally(() => {
    const end = new Date()
    console.log(chalk.green(` • built in ${(end - start)/1000.0}s on ${format(end)} `))
  })
