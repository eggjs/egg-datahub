# egg-datahub

---

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![node version][node-image]][node-url]
[![egg version][egg-image]][egg-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-datahub.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-datahub
[travis-image]: https://img.shields.io/travis/macacajs/egg-datahub.svg?style=flat-square
[travis-url]: https://travis-ci.org/macacajs/egg-datahub
[coveralls-image]: https://img.shields.io/codecov/c/github/macacajs/egg-datahub.svg?style=flat-square
[coveralls-url]: https://codecov.io/gh/macacajs/egg-datahub
[node-image]: https://img.shields.io/badge/node.js-%3E=_8-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[egg-image]: https://img.shields.io/badge/egg-%3E=_2-green.svg?style=flat-square
[egg-url]: https://github.com/eggjs/egg
[download-image]: https://img.shields.io/npm/dm/egg-datahub.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-datahub

> Macaca DataHub plugin for Egg.js

## Installation

```
$ npm i egg-datahub --save-dev
```

## Configuration

config/plugin.js

```javascript
exports.datahub = {
  enable: true,
  package: 'egg-datahub'
};
```

config.unittest.js (default config)

```javascript
exports.datahub = {
  port: 9200,
  hostname: 'localhost'
};
```

## Example

[hackernews-datahub](//github.com/eggjs/examples/tree/master/hackernews-datahub)

<!-- GITCONTRIBUTOR_START -->

## Contributors

|[<img src="https://avatars1.githubusercontent.com/u/11460601?v=4" width="100px;"/><br/><sub><b>zivyangll</b></sub>](https://github.com/zivyangll)<br/>|[<img src="https://avatars1.githubusercontent.com/u/1011681?v=4" width="100px;"/><br/><sub><b>xudafeng</b></sub>](https://github.com/xudafeng)<br/>|[<img src="https://avatars1.githubusercontent.com/u/2139038?v=4" width="100px;"/><br/><sub><b>zhangyuheng</b></sub>](https://github.com/zhangyuheng)<br/>|[<img src="https://avatars0.githubusercontent.com/u/156269?v=4" width="100px;"/><br/><sub><b>fengmk2</b></sub>](https://github.com/fengmk2)<br/>|
| :---: | :---: | :---: | :---: |


This project follows the git-contributor [spec](https://github.com/xudafeng/git-contributor), auto updated at `Tue Jun 11 2019 09:21:41 GMT+0800`.

<!-- GITCONTRIBUTOR_END -->

## License

The MIT License (MIT)

