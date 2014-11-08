'use strict';

var rewriteDashedArg = require('./rewrite-dashed-arg');

var yargs = require('yargs');


module.exports = function (processArgs) {
  var self = {};

  // All the properties are bound to the Yargs object itself,
  //   thus not allowing to redefine read-only properties
  //   in a fancier prototype-based manner.
  var proto = yargs.apply(this, arguments);
  Object.keys(proto).forEach(function (key) {
    if (key == 'parse' || key == 'argv') {
      // More on these later.
      return;
    }
    else if (typeof proto[key] == 'function') {
      self[key] = function () {
        proto[key].apply(this, arguments);
        return self;
      };
    }
    else {
      self[key] = proto[key];
    }
  });

  var dashedName = null;
  self.dashed = function (name) {
    dashedName = name;
    return self;
  };

  // Rewrite args before parsing.
  self.parse = function (args) {
    return proto.parse(rewriteDashedArg(args, dashedName));
  };

  // Refer to `self.parse`.
  Object.defineProperty(self, 'argv', {
    enumerable: true,
    get: function () {
      return self.parse(processArgs);
    }
  });

  return self;
};
