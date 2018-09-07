var wallabyWebpack = require('wallaby-webpack');

module.exports = function (wallaby) {

  var webpackPostprocessor = wallabyWebpack({
    // webpack options
    resolve: {
      extensions: ['.js', '.jsx']
    }
  });

  return {
    files: [
      {pattern: 'example/App.js', load: false},
      {pattern: 'src/**/*.js*', load: false}
    ],

    tests: [
      {pattern: 'test/**/*Spec.js*', load: false}
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
