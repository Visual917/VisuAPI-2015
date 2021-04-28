const EventEmitter = require('events');

//Create class 

class MyEmitter extends EventEmitter { };

//Init obj from class

const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('event', () => console.log('Event Fired!'));

// Init event

myEmitter.emit('event');
