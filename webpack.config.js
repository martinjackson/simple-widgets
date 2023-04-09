
const path = require("path");

const PeerDepsExternalsPlugin = require('peer-deps-externals-webpack-plugin');

const pkg = require("./package.json");
const libraryName = pkg.name;

module.exports = {
  mode: "development",
  devtool: "source-map",

  entry: path.join(__dirname, "./src/index.js"),
  target: "web",
  output: {
    publicPath: "/lib/",
    path: path.join(__dirname, "lib"),
    filename: "index.js",
    library: libraryName,
    libraryTarget: "umd",
    umdNamedDefine: true
  },

  resolve: {
    alias: {
      "react":          path.resolve(__dirname, "./node_modules/react"),
      "react-dom":      path.resolve(__dirname, "./node_modules/react-dom"),
    },
    modules: [path.join(__dirname, "src"), "node_modules"],
  },

  externals: {
    // Don't bundle Peer Dependancies
    "object-sizeof" : {
      commonjs: "object-sizeof",
      commonjs2: "object-sizeof",
    },
    "deep-object-diff": {
      commonjs: "deep-object-diff",
      commonjs2: "deep-object-diff",
    },
    "@apollo/client": {
        commonjs: "@apollo/client",
        commonjs2: "@apollo/client",
    },
    "graphql-tag":    {
        commonjs: "graphql-tag",
        commonjs2: "graphql-tag",
    },
    "axios":          {
        commonjs: "axios",
        commonjs2: "axios",
    },
    "react": {
        commonjs: "react",
        commonjs2: "react",
        amd: "React",
        root: "React",
    },
    "react-dom": {
        commonjs: "react-dom",
        commonjs2: "react-dom",
        amd: "ReactDOM",
        root: "ReactDOM",
    },
  },

  stats: "normal",

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: [
              new PeerDepsExternalsPlugin(),
              "@babel/plugin-proposal-object-rest-spread",
              "@babel/plugin-proposal-optional-chaining",
              ["@babel/plugin-proposal-class-properties", {"loose": true} ],
              ["@babel/plugin-proposal-private-property-in-object", { "loose": true }],
              ["@babel/plugin-proposal-private-methods", { "loose": true }]
            ],
          },
        },
      },

      // style-loader css-loader ar mangling the css
      // CSS
      {
        test: /\.css$/,
        type: "asset/resource",
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

  },

}
