var nodeModulesPath = 'node_modules/';
var applicationPath = 'src/main/javascript/';
var testPath = 'src/test/javascript/';

var wallabify = require('wallabify');
var wallabyPostprocessor = wallabify({});

module.exports = function (wallaby) {
  return {
    files: [
      {
        pattern: nodeModulesPath + 'chai/chai.js',
        instrument: false
      },
      nodeModulesPath + 'angular/angular.js',
      nodeModulesPath + 'angular-mocks/angular-mocks.js',
      {
        pattern: applicationPath + '**/*.js',
        load: false
      }
    ],

    tests: [
      '!src/test/javascript/karma.conf.js',
      {
        pattern: testPath + '**/*.js',
        load: false
      }
    ],

    postprocessor: wallabyPostprocessor,

    testFramework: 'mocha',

    env: {
      type: 'browser'
    },

    setup: function () {
      // required to trigger tests loading
      window.__moduleBundler.loadTests();
    }
  };
};