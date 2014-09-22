# event-accessor
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

Proxy event dispatchers to only expose default functionality.

## Installation
```bash
$ npm i --save event-accessor
```

## Overview
```js
var proxy = require('event-accessor');
var Emitter = require('events').EventEmitter;

var emitter = new Emitter;

var proxyEmitter = proxy(emitter);
```

## API
#### event-accessor()
Wrap an event emmitter inside a event-accessor function, allowing only built-in
methods to be exposed. Exposes [all emitter functions](http://nodejs.org/api/events.html).
```js
var proxy = require('event-accessor');
var Emitter = require('events').EventEmitter;

var emitter = new Emitter;

var proxyEmitter = proxy(emitter);
```

## License
[MIT](https://tldrlegal.com/license/mit-license) ©
[Yoshua Wuyts](yoshuawuyts.com)

[npm-image]: https://img.shields.io/npm/v/event-accessor.svg?style=flat-square
[npm-url]: https://npmjs.org/package/event-accessor
[travis-image]: https://img.shields.io/travis/yoshuawuyts/event-accessor.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/event-accessor
[coveralls-image]: https://img.shields.io/coveralls/yoshuawuyts/event-accessor.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yoshuawuyts/event-accessor?branch=master
