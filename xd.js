/*const Person = require('./person')

const person1 = new Person('Murat', 20);

person1.greeting();*/

const Logger = require('./logger');

const logger = new Logger();

logger.on('message', (data) => console.log('Called Listener: ', data));

logger.log('Hello world!');