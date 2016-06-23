'use strict';
var angular = require('angular');

var app = angular.module('newtest', []);

var mainService = require('./services/mainService');

app.factory('MainService', mainService);
console.log('yes yes');
module.exports = app.name;