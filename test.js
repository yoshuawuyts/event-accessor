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
      .should.throw('Emitter should be an object');

    proxy.bind(proxy, {})
      .should.not.throw('Emitter should be an object');
  });

  it('should only expose emitter functions', function() {
    var emitter = proxy(store('test'));

    emitter.addListener.should.be.of.type('function');
    emitter.on.should.be.of.type('function');
    emitter.once.should.be.of.type('function');
    emitter.removeListener.should.be.of.type('function');
    emitter.removeAllListeners.should.be.type('function');
    emitter.setMaxListeners.should.be.of.type('function');
    emitter.listeners.should.be.of.type('function');
    emitter.emit.should.be.of.type('function');
    Object.keys(emitter).should.eql([
      'addListener',
      'on',
      'once',
      'removeListener',
      'removeAllListeners',
      'setMaxListeners',
      'listeners',
      'emit'
    ]);
  });
});
