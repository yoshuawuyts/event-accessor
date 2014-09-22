/*eslint no-unused-expressions: 0*/

/**
 * Module dependencies
 */

var store = require('simple-store');
var proxy = require('./index');

/**
 * Test
 */

describe('event-accessor()', function() {
  it('should assert argument types', function() {
    proxy.bind(proxy, 123)
      .should.throw('Emitter should be a function');

    proxy.bind(proxy, {})
      .should.not.throw('Emitter should be a function');
  });

  it('should only expose emitter functions', function() {
    var emitter = proxy(store('test'));

    emitter.on.should.be.of.type('function');
    emitter.emit.should.be.of.type('function');
    emitter.removeAllListeners.should.be.type('function');

    Object.keys(emitter).should.eql(['on', 'emit', 'removeAllListeners']);
  });
});
