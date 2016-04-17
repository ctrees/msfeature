# Developer README for [msfeature]
Setup to test via [travis] (see the .travis.yml file)
NOTE: the travis test use phantomjs and xvfb for headless selenium

test/features - the features to test (cuke) 
test/site - the test target site (node)
test/spec - the unit tests

## Dev Test
1. npm install -g webdriver-manager
1. cd ~/Code
1. git clone https://github.com/ctrees/msfeature
1. cd msfeature
1. npm install
1. webdriver-manager update --standalone
1. webdriver-manager start
1. npm start
1. npm test

## dev-test code coverage via [istanbul]
1. ./node_modules/.bin/istanbul cover test/runner.js --root ./lib
1. npm run coverage
1. [istanbul] creates coverage directory a html navigable tree/website
1. The Travis script also uses coveralls to create [codeclimate] badge info

## dev-test Feature Add Example
1. Background of Feature Add motivation
    1. There is an issue with waiting for a javascript page to become stable esp with any type of animation
    1. [protractor] had [browser.waitForAngular()] which I like because it used a feature depenency in the framework to regulate the test process
    1. SO let's add a feature to [msfeature] that is used in the framework
    1. Currently [pace.js] is used in the base UI template
    1. [pace.js] will fire events when done and when it hides the page load animation
    1. GREAT... if we add a [msfeature] that listens to that event BEFORE doing any page queries we should be able to REMOVE all the 'And I wait x seconds' from the feature files
    1. THIS is a user UI/UX [DSL] improvement as the animation is there to give feedback to the user to WAIT for page to load... this is alignment of the [DSL] to the expected user UX/UI
1. Feature Replacement GOAL: Replace step 'And I wait x seconds' with 'When the Page is ready'
    1. First Create a test that Fails
    1. SO... pull [msfeature] and setup for [msfeature dev](#dev-test) 
        
    1. NOW we add [pace.js] to the test/site server
    1. Add route to line 24 and 25 to test/site/server.js

## General Structure and Principles
1. The goal of [msfeature] is to create [DSL] specific for [Mail Services, LLC]
1. [msfeature] is a hack of [cucumber-mink] a fork of [community cucumber-mink] 
1. [msfeature] uses [webdriver] to communicate over [JsonWireProtocol] to a [W3C browser]
1. [msfeature] is driven by a feature text file in [cucumber] language

[msfeature]: https://github.com/ctrees/msfeature
[msfeature dev]: https://github.com/ctrees/msfeature/blob/master/READMEdev.md
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
[protractor]: https://github.com/angular/protractor
[browser.waitForAngular()]: https://github.com/angular/protractor/blob/9144494a28dac5a0409de4c5384e933f2d2f8156/spec/plugins/specs/browser_get_wait_spec.js
[pace.js]: https://github.com/HubSpot/pace