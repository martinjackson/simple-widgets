const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
  entry: './ExampleApp.js',
  output: {
        path: resolve('.'),
        filename: 'bundle.js'
    },
  resolve:{
    modules: [
      resolve('.'),
      resolve('../src'),
      resolve('../node_modules') ]
    },
  devtool: 'source-map',   
  stats: 'normal',    // 'minimal',    // 'errors-only',
  devServer: {

     // dont include boolean equivalent of these commandline switches, it will not work here
     // these are in the package.json where the following is executed
     //  webpack-dev-server --mode development --devtool eval-source --progress --colors

     // CLI only    --colors  --progress
     // Docs lie --hot --inline are CLI Only

     // --history-api-fallback
     historyApiFallback: true,

     // host: '0.0.0.0',     // allow more than localhost (0.0.0.0 confuses win10)
     port: 8080,
     contentBase: './',
     open: true,
     clientLogLevel: 'none',
     stats: 'errors-only',

     // allow NodeJS to run side-by-side with webpack-dev-server
     proxy: {  '/api/*': 'http://localhost:8081/' }   // <- backend
  },
  plugins: [
    new ProgressBarPlugin(),
  ],
  module: {
    rules: [
          {
            test: /^(?!.*\.{test,min}\.js$).*\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                      "plugins": [
                        "@babel/plugin-proposal-object-rest-spread",
                        ["@babel/plugin-proposal-class-properties", { "loose": true }]
                      ],
                      "presets": ["@babel/env", "@babel/react", "@babel/preset-flow"]                      
                   },
          },

          {
            test: /\.tsx?$/,
            loader: "awesome-typescript-loader",
          },
          
          {
              test: /\.css$/,
              use: [ 'style-loader', 'css-loader' ]
          },

          // "file" loader for svg
          {
             test: /\.svg|\.png|\.gif|\.jpg$/,
             loader: 'file-loader',
             query: {
               name: 'static/media/[name].[hash:8].[ext]'
             }
          },

          {
            test: /\.html$/,
            loader: 'raw-loader'
          }
    ]
  }
}
