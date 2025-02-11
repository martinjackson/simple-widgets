
const esbuild = require("esbuild");
const { nodeExternalsPlugin } = require("esbuild-node-externals");

const postcss = require('esbuild-postcss')
const inlineImage = require("esbuild-plugin-inline-image")
const esbPlugMd = require('esbuild-plugin-markdown')
const { markdownPlugin } = esbPlugMd

const chalk = require('chalk')

// chalk.level = 1;    // Use colors in the VS Code Debug Window

const error = chalk.red;
const _warning = chalk.bgRed;         // Orange color
const good = chalk.greenBright;

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
    console.log(error(' build err: '), err.message);
    process.exit(1)
  })
  .finally(() => {
    const end = new Date()
    console.log(good(` • built in ${(end - start)/1000.0}s on ${format(end)} `))
  })
