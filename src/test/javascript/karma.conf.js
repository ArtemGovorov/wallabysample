// Karma configuration
// Generated on Mon Jun 13 2016 14:11:39 GMT+0800 (PHT)

var nodeModulesPath = '../../../node_modules/';
var applicationPath = '../../../src/main/javascript/';
var testPath = '../../../src/test/javascript/';

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['browserify', 'mocha', 'chai'],


        // list of files / patterns to load in the browser
        files: [
            nodeModulesPath + 'angular/angular.js',
            nodeModulesPath + 'angular-mocks/angular-mocks.js',
            applicationPath + '**/*.js',
            testPath  + '**/*.js'
        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            '../../../src/main/javascript/**/*.js': [
                'browserify',
                'coverage'
            ]
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['mocha', 'coverage', 'bamboo'],

        mochaReporter: {
            output: 'autowatch'
        },
        bambooReporter: {
            filename: 'mocha.frontend.json'
        },

        coverageReporter: {
            type : 'lcov',
            subdir: '.',
            dir : '../../../../coverage/frontend-unit'
        },

        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,

    })
}
