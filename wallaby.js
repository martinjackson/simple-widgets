var wallabyWebpack = require('wallaby-webpack');

module.exports = function (wallaby) {

  var webpackPostprocessor = wallabyWebpack({
    // webpack options
    resolve: {
      extensions: ['.js', '.jsx']
    }
  });

  return {

    // set `load: false` to all source files and tests processed by webpack (except external files),
    // as they should not be loaded in browser, their wrapped versions will be loaded instead

    files: [ 
      {pattern: 'src/**/*.js', load: false},
      {pattern: 'test/**/*.js', load: false},
      "!test/**/*.test.js",
      "!test/webpack.config.js",
      "!test/ExampleApp.js",
      "!src/PrevDoubleListBox/**/*.js",
    ],

    tests: [ 
      {pattern: 'test/**/*.test.js', load: false}
    ],

    compilers: {
      '**/*.js*': wallaby.compilers.babel()
    },

    env: {kind: 'chrome'},

    debug: true,

    postprocessor: webpackPostprocessor,

    setup: function () {
      window.__moduleBundler.loadTests();
    }
  };
};
