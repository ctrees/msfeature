/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 Arnaud Dezandee
 * Copyright (c) 2016 Chris Trees
 *
 * Authors:
 *     Arnaud Dezandee <dezandee.arnaud@gmail.com>
 *     Chris Trees <ctrees@mailserviceslc.com>
 */

/**
 * @param {String} selector
 * @param {Function} callback
 */
module.exports = function isVisible(selector, callback) {
  //this.client.isVisible(selector, callback);
  this.client.isVisibleWithinViewport(selector, callback);
};
