/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2016 Chris Trees
 *
 * Authors:
 *     Chris Trees <ctrees@mailserviceslc.com>
 */

var debug = require('debug')('mink:driver');

exports.scrolltoid = function(selector, callback) {
    this.driver.client
    .execute('document.getElementById("' + selector + '").scrollIntoView(true);')
    .then(debug)
    .call(callback);
};

exports.scrollDown = function(pixels, callback) {
    this.driver.client
    .execute('window.scrollBy(0,' + pixels + ')', '')
    .then(debug)
    .call(callback);
};

exports.scrollUp = function(pixels, callback) {
    this.driver.client
    .execute('window.scrollBy(0,-' + pixels + ')', '')
    .then(debug)
    .call(callback);
};
