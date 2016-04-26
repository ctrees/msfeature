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
    1. Create new feature file [pace.feature]
    1. catmini:msfeature cat$ npm test
    1. Should get test of [pace.feature]
    1. NOW we add [pace.js] test page to the test/site server
    1. Add route to line 24 and 25 to test/site/server.js
    1. Add [pace.js] to test/site/pace.js
    1. Add [pace.css] to test/site/pace-theme-center-simple.css
    1. Add the pace view to test/site/routes.js
    1. Add the view to test/site/views/pace.swig which is the page we will test
    1. Go view the test page: http://localhost:3000/pace
    1. Now, to simulate a slow page... we setup a page request that take a delay as a param
    1. Add the delay route to test/site/server.js
    1. Add the delay code to test/site/routes.js
    1. I uncommented the @wip tag in test/runner.js (so just test @wip features)
    1. npm test
    1. tweak test/features/pace.feature [pace.feature] and test/site/views/pace.swig [pace.swig]
1. Review the [protractor] client js pattern
    1. Now we've got a target event to listen withing the client side JS [pase.js] lets create a feature like [browser.waitForAngular()]
    1. Looking at [protractor] structure [functions.waitForAngular()] we may want to concider just adopting the protractor framework for passing client side functions.
    1. At Line 696 (the bottom) of [functions.waitForAngular()] we see how protrator exports client side scripts
    1. At Line 350 of [protractor.prototype.waitForAngular] we see how protractor pulls in and uses [functions.waitForAngular()]
1. Review the [msfeature] methods pattern
    1. To Do ?? if helpfull ??
1. Extend the [msfeature] api using [protractor] style client js event listener to gate client-side testing flow
    1. [msfeature] uses [webdriverio] package where [protractor] uses [selenium-webdriver] 
    1. [msfeature] uses [webdriverio] and adds the methods as prototypes in the driver/methods directory tree
    1. To extend client executed code a reasonable place would be to add a new method would be lib/driver/methods
    1. See [cucumber-mink Issue 26] which leads to [cucumber-mink feature/angularjs-support]
    1. So we want to add new method waitForPace.js that looks like waitForAngular.js
    1. Enable and start testing waitForAngular to verify code works
    1. Push this commit with comment "waitForAngular test changes"
    1. next step

## General Structure and Principles
1. The goal of [msfeature] is to create a [DSL] specific for [Mail Services, LLC]
1. [msfeature] is a hack of [cucumber-mink] a fork of [community cucumber-mink] 
1. [msfeature] uses [webdriver] to communicate over [JsonWireProtocol] to a [W3C browser]
1. [msfeature] is driven by a feature text file in [cucumber] language
1. [msfeature] contains [msDSL] a [cucumber-mink] extention example: [ 

[msfeature]: https://github.com/ctrees/msfeature
[msfeature dev]: https://github.com/ctrees/msfeature/blob/master/READMEdev.md
[DSL]: https://en.wikipedia.org/wiki/Domain-specific_language
[Mail Services, LLC]: https://www.mailserviceslc.com/
[istanbul]: http://gotwarlost.github.io/istanbul/
[codeclimate]: https://codeclimate.com/
[travis]: https://travis-ci.org/
[cucumber-mink]: https://github.com/ctrees/cucumber-mink
[community cucumber-mink]: http://cucumber-mink.js.org/
[cucumber-mink Issue 26]: https://github.com/Adezandee/cucumber-mink/issues/26
[cucumber-mink feature/angularjs-support]: https://github.com/Adezandee/cucumber-mink#feature/angularjs-support
[cucumber-mink steps]: http://cucumber-mink.js.org/steps
[webdriver]: http://webdriver.io/api.html
[webdriverio]: https://www.npmjs.com/package/webdriverio
[JsonWireProtocol]: https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol
[W3C browser]: https://w3c.github.io/webdriver/webdriver-spec.html
[cucumber]: https://cucumber.io/
[protractor]: https://github.com/angular/protractor
[selenium-webdriver]: https://www.npmjs.com/package/selenium-webdriver
[browser.waitForAngular()]: https://github.com/angular/protractor/blob/9144494a28dac5a0409de4c5384e933f2d2f8156/spec/plugins/specs/browser_get_wait_spec.js
[functions.waitForAngular()]: https://github.com/angular/protractor/blob/9144494a28dac5a0409de4c5384e933f2d2f8156/lib/clientsidescripts.js
[protractor.prototype.waitForAngular]: https://github.com/angular/protractor/blob/9144494a28dac5a0409de4c5384e933f2d2f8156/lib/protractor.js 
[pace.js]: https://github.com/HubSpot/pace
[pace.css]: http://github.hubspot.com/pace/docs/welcome/
[pace.feature]: https://github.com/ctrees/msfeature/blob/master/test/features/pace.feature
[pace.swig]: https://github.com/ctrees/msfeature/blob/master/test/site/views/pace.swig