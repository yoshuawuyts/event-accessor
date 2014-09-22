/**
 * Module dependencies
 */

var assert = require('assert');

/**
 * Create a new proxy.
 */

module.exports = function(emitter) {
  assert('object' == typeof emitter, 'Emitter should be a function');
  assert(emitter.removeAllListeners, 'Emitter should have function \'removeAllListeners\'');
  assert(emitter.emit, 'Emitter should have function \'emit\'');
  assert(emitter.on, 'Emitter should have function \'on\'');

  return {
    get on() {
      return emitter.on;
    },

    get emit() {
      return emitter.emit;
    },

    get removeAllListeners() {
      return emitter.removeAllListeners;
    }
  }
}
