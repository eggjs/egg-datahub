# egg-datahub

---

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-datahub.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-datahub
[travis-image]: https://img.shields.io/travis/macacajs/egg-datahub.svg?style=flat-square
[travis-url]: https://travis-ci.org/macacajs/egg-datahub
[coveralls-image]: https://img.shields.io/codecov/c/github/macacajs/egg-datahub.svg?style=flat-square
[coveralls-url]: https://codecov.io/gh/macacajs/egg-datahub
[node-image]: https://img.shields.io/badge/node.js-%3E=_8-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/egg-datahub.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-datahub

> egg plugin for Macaca DataHub

### Installation

```
$ npm i egg-datahub --save-dev
```

### Usage

config/plugin.js

```javascript
exports.datahub = {
  enable: true,
  package: 'egg-datahub'
};
```

config.default.js (default config)

```javascript
exports.datahub = {
  port: 5678,
  hostname: 'localhost'
};
```

<!-- GITCONTRIBUTOR_START -->

## Contributors

|[<img src="https://avatars1.githubusercontent.com/u/1011681?v=4" width="100px;"/><br/><sub><b>xudafeng</b></sub>](https://github.com/xudafeng)<br/>
| :---: |


This project follows the git-contributor [spec](https://github.com/xudafeng/git-contributor), auto upated at `Sat Apr 28 2018 19:53:30 GMT+0800`.

<!-- GITCONTRIBUTOR_END -->

## License

The MIT License (MIT)
