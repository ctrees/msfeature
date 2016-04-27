/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 Mail Services, LLC
 *
 * Authors:
 *     Chris Trees <ctrees@mailserviceslc.com>
 *     Arnaud Dezandee <dezandee.arnaud@gmail.com>
 * 
 */

/*global window, document, pace*/
var debug = require('debug')('mink:driver:Pace');

/**
 * Wait for Pace, extracted from Protractor sources.
 * @param {String} selector pace element
 * @param {Function} callback
 */
module.exports = function waitForPace(selector, callback) {
  this.client
    .timeoutsAsyncScript(10000) //TODO: pass in a timeout
    .executeAsync(
      function(rootSelector, cb) {
        if (!window || !document) {
          cb(new Error('window / document not initialized').message);
        }
        var el = document.querySelector(rootSelector); //NOTE: the pace element query is not really reqired
        if (!window.Pace || !el) {
          cb(new Error('pace code or element could not be found on the window').message);
        }
        if (window.Pace.on) {
          window.Pace.on('hide', cb);
        } else {
          cb(new Error('could not set pace event done listener').message);
        }
      },
      selector
    )
    .then(debug)
    .call(callback);
};
