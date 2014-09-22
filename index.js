/**
 * Module dependencies
 */

var assert = require('assert');

/**
 * Create a new proxy.
 */

module.exports = function(emitter) {
  assert('object' == typeof emitter, 'Emitter should be an object');
  assert(emitter.removeAllListeners, 'Emitter should have function \'removeAllListeners\'');
  assert(emitter.emit, 'Emitter should have function \'emit\'');
  assert(emitter.on, 'Emitter should have function \'on\'');

  return {
    get addListener() {
      return emitter.addListener;
    },

    get on() {
      return emitter.on;
    },

    get once() {
      return emitter.once;
    },

    get removeListener() {
      return emitter.removeListener;
    },

    get removeAllListeners() {
      return emitter.removeAllListeners;
    },

    get setMaxListeners() {
      return emitter.setMaxListeners;
    },

    get listeners() {
      return emitter.listeners;
    },

    get emit() {
      return emitter.emit;
    }
  }
}
