'use strict';

var yargsDashed = require('./yargs-dashed');

var extend = require('extend');


module.exports = extend(yargsDashed, yargsDashed(process.argv.slice(2)));
