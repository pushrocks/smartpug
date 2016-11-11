# smartpug
handle pug easily and mesh it with data

## Availabililty
[![npm](https://push.rocks/assets/repo-button-npm.svg)](https://www.npmjs.com/package/smartpug)
[![git](https://push.rocks/assets/repo-button-git.svg)](https://gitlab.com/pushrocks/smartpug)
[![git](https://push.rocks/assets/repo-button-mirror.svg)](https://github.com/pushrocks/smartpug)
[![docs](https://push.rocks/assets/repo-button-docs.svg)](https://pushrocks.gitlab.io/smartpug/)

## Status for master
[![build status](https://gitlab.com/pushrocks/smartpug/badges/master/build.svg)](https://gitlab.com/pushrocks/smartpug/commits/master)
[![coverage report](https://gitlab.com/pushrocks/smartpug/badges/master/coverage.svg)](https://gitlab.com/pushrocks/smartpug/commits/master)
[![Dependency Status](https://david-dm.org/pushrocks/smartpug.svg)](https://david-dm.org/pushrocks/smartpug)
[![bitHound Dependencies](https://www.bithound.io/github/pushrocks/smartpug/badges/dependencies.svg)](https://www.bithound.io/github/pushrocks/smartpug/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/pushrocks/smartpug/badges/code.svg)](https://www.bithound.io/github/pushrocks/smartpug)
[![TypeScript](https://img.shields.io/badge/TypeScript-2.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%206.x.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Usage
pug (previously known as jade, renamed to pug due to trademark issues) allows easy server side html creation

```javascript
testSmartpug = new smartpug.Smartpug({
    filePath: './test/test.pug'
})
let resultHtml = testSmartpug.getHtmlForData({testValue: 'Hello'})
console.log(resultHtml) // will lof the resulting html string
```

[![npm](https://push.rocks/assets/repo-header.svg)](https://push.rocks)
