
const path = require('path');

const pkg = require('./package.json');
const libraryName= pkg.name;

module.exports = function(env, argv) {

  return {
  mode: 'development',
  devtool: 'source-map',

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
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },

      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: [
              '@babel/plugin-proposal-object-rest-spread',
              '@babel/plugin-proposal-optional-chaining',
              [ '@babel/plugin-proposal-class-properties', {"loose": true} ]
            ]
          }
        }
      },

      // Images
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },

      // Fonts and SVGs
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },

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