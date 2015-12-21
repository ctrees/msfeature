# msfeature
<a href="https://cucumber.io/"><img src="https://cucumber.io/images/cucumber-logo.svg" width="200px" alt="Cukes" align="right" /></a>

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]

# Introduction

msfeature is a [cucumber-js](https://github.com/cucumber/cucumber-js) step definition library with msDSL.

Run your test with any Selenium browser: Phantomjs, Chrome, Firefox, IE

 - [API References and examples](docs/API.md)
 - [STEP References](docs/STEP.md)
 - [Developers Guide](docs/dev.md)
 - [mytest directory](docs/mytest)

# Prerequisites

* [Node.js](http://nodejs.org)
* Selenium server with WebDriver (Selenium 2.0), see:
	* [Webdriver-manager](https://github.com/pose/webdriver-manager)
	* [PhantomJS](http://phantomjs.org/download.html) Optional

# Quick start

``` bash
$ mkdir mytest && cd mytest
$ npm init
$ npm install chai chai-as-promised webdriver-manager cucumber --save
$ npm install msfeature --save
```

Launch a Selenium server (if one is not running)

``` bash
$ webdriver-manager start
```

Create feature file structure

``` bash
$ mkdir features && mkdir features/support
```

Create feature/support/msfeatureconf.js file

``` javascript
var mink = require('msfeature');

var parameters = {
  driver: {
    baseUrl: 'https://www.npmjs.com',
    logLevel: 'silent',
    desiredCapabilities: {
      browserName: 'chrome'
    },
    host: 'localhost',
    port: 4444
  }
};

module.exports = function () {
  mink.init(this, parameters);
};
```

Create feature/test.feature file

``` gherkin
# features/test.feature
Feature: I can use msfeature to check the content of my website

  Background:
    Given I am on "https://www.npmjs.com/package/msfeature"

  Scenario: Check Homepage content
    When  I wait 3 seconds
    Then  I should see "msfeature" in the "a" element
```
Run your tests

``` bash
$ cucumber-js --require features/support/msfeatureconf.js
```

[npm-image]: https://img.shields.io/npm/v/msfeature.svg?style=flat
[npm-url]: https://www.npmjs.com/package/msfeature
[travis-image]: https://img.shields.io/travis/ctrees/msfeature.svg?style=flat
[travis-url]: https://travis-ci.org/ctrees/msfeature
[bithound-image]: https://www.bithound.io/github/ctrees/msfeature/badges/score.svg
[bithound-url]: https://www.bithound.io/github/ctrees/msfeature

