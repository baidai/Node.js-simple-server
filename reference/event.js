const EventEmitter = require('events');

//create class
class MyEmitter extends EventEmitter{}

//
const myEmitter = new MyEmitter();
//event listener
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
myEmitter.emit('event');


