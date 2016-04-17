# Developer README for [msfeature]
Setup to test via [travis] (see the .travis.yml file)
NOTE: the travis test use phantomjs and xvfb for headless selenium

test/features - the features to test (cuke) 
test/site - the test target site (node)
test/spec - the unit tests

## dev-test setup
1. npm install -g webdriver-manager
1. npm install
1. webdriver-manager update --standalone
1. webdriver-manager start
1. npm start
1. npm test

## dev-test code coverage via [istanbul]
1. ./node_modules/.bin/istanbul cover test/runner.js --root ./lib
1. npm run coverage
1. [istanbul] creates coverage directory (html navigable tree/website)
1. The Travis script also uses coveralls to create [codeclimate] badge info

## General Structure and Principles
1. The goal of [msfeature] is to create [DSL] specific for [Mail Services, LLC]
1. [msfeature] is a hack of [cucumber-mink] ( a fork of [community cucumber-mink] )
1. [msfeature] uses [webdriver] to communicate over [JsonWireProtocol] to a [W3C browser]
1. [msfeature] is driven by a feature text file in [cucumber] language

[msfeature]: https://github.com/ctrees/msfeature
[DSL]: https://en.wikipedia.org/wiki/Domain-specific_language
[Mail Services, LLC]: https://www.mailserviceslc.com/
[istanbul]: http://gotwarlost.github.io/istanbul/
[codeclimate]: https://codeclimate.com/
[travis]: https://travis-ci.org/
[cucumber-mink]: https://github.com/ctrees/cucumber-mink
[community cucumber-mink]: https://github.com/Adezandee/cucumber-mink
[webdriver]: http://webdriver.io/api.html
[JsonWireProtocol]: https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol
[W3C browser]: https://w3c.github.io/webdriver/webdriver-spec.html
[cucumber]: https://cucumber.io/
