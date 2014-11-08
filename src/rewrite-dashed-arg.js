'use strict';

/**
 * Rewrite the first dashed arg in a conforming way.
 * Do nothing if the first arg is not dashed or the name is not given.
 *
 * This function also gives the precise definition of a dashed arg.
 * To be considered such, the argument must:
 *   - come first in the list;
 *   - start with a dash;
 *   - other than that, consist solely of digits and uppercase.
 *
 * @example 1/10
 * > rewriteDashedArg(["-1", "file.txt"], "depth")
 * ["--depth", "1", "file.txt"]
 *
 * @example 2/10
 * > rewriteDashedArg(["-1", "-2", "file.txt"], "depth")
 * ["--depth", "1", "-2", "file.txt"]
 *
 * @example 3/10
 * > rewriteDashedArg(["-ACCEPT"], "action")
 * ["--action", "ACCEPT"]
 *
 * @example 4/10
 * > rewriteDashedArg(["-f", "file.txt"], "depth")
 * ["-f", "file.txt"]
 *
 * @example 5/10
 * > rewriteDashedArg(["file.txt", "-1"], "depth")
 * ["file.txt", "-1"]
 *
 * @example 6/10
 * > rewriteDashedArg(["1", "file.txt"], "depth")
 * ["1", "file.txt"]
 *
 * @example 7/10
 * > rewriteDashedArg(["--1", "file.txt"], "depth")
 * ["--1", "file.txt"]
 *
 * @example 8/10
 * > args = ["-1", "file.txt"]
 * > rewriteDashedArg(args, "depth")
 * ["--depth", "1", "file.txt"]
 * > args
 * ["-1", "file.txt"]
 *
 * @example 9/10
 * > args = ["-1", "file.txt"]
 * > rewriteDashedArg(args)
 * ["-1", "file.txt"]
 * > args
 * ["-1", "file.txt"]
 *
 * @example 10/10
 * > rewriteDashedArg([])
 * []
 *
 * @arg {string[]} args - Argument vector, not modified.
 * @arg {string} [dashedName]
 * @return {string[]}
 */
var rewriteDashedArg = function (args, dashedName) {
  if (dashedName && /^-[A-Z0-9]+$/.test(args[0])) {
    args = ['--' + dashedName, args[0].slice(1)].concat(args.slice(1));
  }
  return args;
};

module.exports = rewriteDashedArg;
