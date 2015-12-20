# msfeature
<a href="https://cucumber.io/"><img src="https://cucumber.io/images/cucumber-logo.svg" width="200px" alt="Cukes" align="right" /></a>

# Introduction

msfeature is a [cucumber-js](https://github.com/cucumber/cucumber-js) step definition library with msDSL.

Run your test with any Selenium browser: Phantomjs, Chrome, Firefox, IE

 - [API References and examples](docs/API.md)

# Prerequisites

* [Node.js](http://nodejs.org)
* Selenium server with WebDriver (Selenium 2.0), see:
	* [PhantomJS](http://phantomjs.org/download.html)
	* [Webdriver-manager](https://github.com/pose/webdriver-manager)

# Quick start

``` bash
$ npm install -g msfeature
```

Launch your Selenium server (ex: PhantomJS)

``` bash
$ phantomjs -w
```

Use pre-defined steps in `features/__.feature` files

``` gherkin
# features/home.feature
Feature: I can use cucumber.mink to check the content of my website

  Background:
    Given I browse "http://localhost:3000"

  Scenario: Check Homepage content
    Given I am on the homepage
    And   I should see "Welcome to my awesome application" in the "h1" element
```

Run your tests

``` bash
$ npm test
```

