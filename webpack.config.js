
const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const pkg = require('./package.json');
const libraryName= pkg.name;

module.exports = function(env, argv) {

  return {
  mode: 'development',
  devtool: 'source-maps',

  entry: path.join(__dirname, "./src/index.js"),
  target: "web",
  output: {
    path: path.join(__dirname, 'lib'),
    filename: "index.js",
    library: libraryName,
    libraryTarget: 'umd',
    publicPath: '/lib/',
    umdNamedDefine: true
  },
  resolve: {
    modules: [
      path.join(__dirname, "src"),
      "node_modules"
    ]
  },
  stats: "normal",
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
                      presets: ['@babel/preset-env', '@babel/preset-react']
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
  },
  resolve: {
    alias: {
        'react': path.resolve(__dirname, './node_modules/react'),
        'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
    }
},
externals: {
    // Don't bundle react or react-dom
    react: {
        commonjs: "react",
        commonjs2: "react",
        amd: "React",
        root: "React"
    },
    "react-dom": {
        commonjs: "react-dom",
        commonjs2: "react-dom",
        amd: "ReactDOM",
        root: "ReactDOM"
    }
}
}

}