# msfeature

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

# pre-Setup

- create github repo: [git-url-msfeature]
- create npm account 
- Follow instructions: [Publish npm package](https://docs.npmjs.com/getting-started/publishing-npm-packages)
    - npm login
    - npm publish
- push to github
- turn on travis sync https://travis-ci.org/profile/ctrees
- check travis status https://travis-ci.org/ctrees
- check npm package https://www.npmjs.com/package/msfeature

# Maintainers

The npm module for this library is maintained by:

* [Chris Trees](http://github.com/ctrees)

[List of all contributors](https://github.com/ctrees/msfeature/graphs/contributors)

# License

[MIT](LICENSE) © [Chris Trees](http://github.com/ctrees)

## Notes

https://travis-ci.org/getting_started
https://docs.npmjs.com/getting-started/creating-node-modules


# Inspired

This module is inspired by [Arnaud Dezandee](https://github.com/Adezandee/cucumber-mink) and PHP [Behat/MinkExtension](https://github.com/Behat/MinkExtension).

[git-url-msfeature]: https://github.com/ctrees/msfeature
[npm-url-msfeature]: https://www.npmjs.com/package/msfeature
[travis-url-msfeature]: https://travis-ci.org/ctrees/msfeature
[js-org-url]: http://js.org