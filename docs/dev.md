# msfeature

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]

Intent: Create an npm module for use with mailservices DSL feature testing.

# Setup

- Requires
  - npm install -g webdriver-manager
  - npm install -g codeclimate-test-reporter
  - npm install -g coveralls
  - webdriver-manager update --standalone
- git clone https://github.com/ctrees/msfeature
- cd msfeature
- npm install
- phantomjs -w
- webdriver-manager start
- npm start
- npm run coverage

# Debug

- Change test/runner.js  config.tags = ['@wip']; 
- comment out additional browsers ( I just use chrome to debug )
- tag @wip to feature file Scenario you want to debug
- npm run coverage

# Add feature
- Create new feature file: (example test/features/scroll.feature )
- Add new target site page feature (routes.js, views) if required (example test/site/views/partials/compact-post.swig )
- npm run coverage (to pick up the new regex you need to write)
- add regex to lib/step_definitions/index.js with Ext.somefunction (example Ext.Custom.scrolltoid )
- add the function to corresponding file lib/step_definitins/ext/somefunction.js (example lib/step_definitions/ext/custom.js )

# view coverage

- cd msfeature/coverage
- serve -p 3333
- browse to: http://localhost:3333/lcov-report/

# pre-Setup

- create github repo: [git-url]
- create npm account 
- Follow instructions: [Publish npm package](https://docs.npmjs.com/getting-started/publishing-npm-packages)
    - npm login
    - npm publish
- push to github
- turn on travis sync [travis-profile]
- check travis status [travis-url]
- check npm package [npm-url]

# Maintainers

The npm module for this library is maintained by:

* [Chris Trees](http://github.com/ctrees)
* [mfeature Issues / Bugs][git-bug]

[List of all contributors](https://github.com/ctrees/msfeature/graphs/contributors)

# License

[MIT](LICENSE) © [Chris Trees](http://github.com/ctrees)

## Notes

[webdriver-docs]
[travis-docs]
[npm-docs]


# Inspired

This module is inspired by [Arnaud Dezandee](https://github.com/Adezandee/cucumber-mink) and PHP [Behat/MinkExtension](https://github.com/Behat/MinkExtension).

[git-url]: https://github.com/ctrees/msfeature
[git-bug]: https://github.com/ctrees/msfeature/issues
[npm-image]: https://img.shields.io/npm/v/msfeature.svg?style=flat
[npm-url]: https://www.npmjs.com/package/msfeature
[travis-image]: https://img.shields.io/travis/ctrees/msfeature.svg?style=flat
[travis-url]: https://travis-ci.org/ctrees/msfeature
[travis-profile]: https://travis-ci.org/profile/ctrees
[bithound-image]: https://www.bithound.io/github/ctrees/msfeature/badges/score.svg
[bithound-url]: https://www.bithound.io/github/ctrees/msfeature

[webdriver-docs]: http://webdriver.io/

[travis-docs]: https://travis-ci.org/getting_started
[npm-docs]: https://docs.npmjs.com/getting-started/creating-node-modules
