# yargs-dashed [![Build Status][travis-badge]][travis] [![Dependency Status][david-badge]][david] [![DevDependency Status][david-dev-badge]][david-dev]

[![npm](https://nodei.co/npm/yargs-dashed.png)](https://nodei.co/npm/yargs-dashed/)

[travis-badge]: https://travis-ci.org/eush77/yargs-dashed.svg
[travis]: https://travis-ci.org/eush77/yargs-dashed
[david-badge]: https://david-dm.org/eush77/yargs-dashed.png
[david]: https://david-dm.org/eush77/yargs-dashed
[david-dev-badge]: https://david-dm.org/eush77/yargs-dashed/dev-status.png
[david-dev]: https://david-dm.org/eush77/yargs-dashed#info=devDependencies

Wrapper around [yargs](https://www.npmjs.org/package/yargs) that allows passing options in the dashed style as in `head -10 file.txt` (non-standard).

## API

In addition to the `yargs`':

### .dashed(name)

Registers option `name` as a dashed option.

The dashed option is the one that satisfies the following constraints:

- it comes first in the list;
- it starts with a dash;
- other than that, it consists solely of digits and uppercase.

Such options are rewritten in a conforming way (`head -1 file.txt` -> `head --depth 1 file.txt`).

Note that only one such option can be recognized and it must be the first.

## Install

```shell
npm install yargs-dashed
```

## License

MIT
