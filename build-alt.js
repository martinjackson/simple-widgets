
//     "alt-build": "esbuild app.jsx --bundle --minify --sourcemap --target=chrome58,firefox57,safari11,edge16"

import * as esbuild from 'esbuild'

await esbuild.build({
  entryPoints: ['src/index.js'],
  bundle: true,
  minify: true,
  sourcemap: true,
  target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
  outfile: 'lib/index.js',
})
