# key-locker
[![Build Status](https://travis-ci.org/akameco/key-locker.svg?branch=master)](https://travis-ci.org/akameco/key-locker)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

> Locker


## Install

```
$ npm install key-locker
```


## Usage

```js
const KeyLocker = require('key-locker');

const locker = keyLocker();

locker.add('test')
locker.has('test'))
// => true
// 1000ms later
locker.has('test'))
// => false
```


## API

### `KeyLocker({ waitTime })`

#### waitTime

Type: `number` <br>
Default: `1000`ms <br>

refresh time.

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars2.githubusercontent.com/u/4002137?v=4" width="100px;"/><br /><sub>akameco</sub>](http://akameco.github.io)<br />[💻](https://github.com/akameco/typed-assign/commits?author=akameco "Code") [📖](https://github.com/akameco/typed-assign/commits?author=akameco "Documentation") [⚠️](https://github.com/akameco/typed-assign/commits?author=akameco "Tests") [🚇](#infra-akameco "Infrastructure (Hosting, Build-Tools, etc)") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## License

MIT © [akameco](http://akameco.github.io)
