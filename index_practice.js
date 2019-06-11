console.log('Yo from node.js....');

const person = require('./person');

console.log(person);  // object

console.log(person.age);

//define class Person
const Person = require('./person');

const person1 = new Person('Rufus', 32);
person1.greeting();


console.log(uuid.v4());
//create class
class MyEmitter extends EventEmitter{}

//
const myEmitter = new MyEmitter();
//event listener
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
myEmitter.emit('event');




const Lo = require('./lo');
const lo = new Lo();

lo.on('message', (data)  => console.log('Called Listener', data));

lo.log('Yo Yo World!');