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

