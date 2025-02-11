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

  devServer: {
     historyApiFallback: true,
     static: path.resolve(__dirname, './'),  // All other content is served from files here
     port: 8080,
     // host: '0.0.0.0',             // allow more than localhost (0.0.0.0 confuses win10)
     proxy: {  '/api/*': 'http://localhost:8081/' }   // <- backend
  },

  stats: 'normal',    // 'minimal',    // 'errors-only',

  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [ "style-loader", "css-loader", "sass-loader", ],
      },

      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: [
              "@babel/plugin-proposal-object-rest-spread",
              "@babel/plugin-proposal-optional-chaining",
              ["@babel/plugin-proposal-class-properties", {"loose": true} ],
              ["@babel/plugin-proposal-private-methods", {"loose": true} ],
              ["@babel/plugin-proposal-private-property-in-object", {"loose": true} ],
            ],
          },
        },
      },

      // Images
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },

      // Fonts and SVGs
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
    ],
  }
}
