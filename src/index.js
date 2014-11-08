'use strict';

var yargsDashed = require('./yargs-dashed');


var instance = yargsDashed(process.argv.slice(2));

Object.keys(instance).forEach(function (key) {
  yargsDashed[key] = instance[key];
});


module.exports = yargsDashed;
