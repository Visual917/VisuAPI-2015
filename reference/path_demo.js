const path = require('path');

//Base file name

//console.log(__filename); // get entire path and file name
//console.log(path.basename(__filename)); // get only the file name

//console.log(path.dirname(__filename)); // self explanatory

// get extension

//console.log(path.extname(__filename)); //awesome

// create an object with the different parts of the path

//console.log(path.parse(__filename));
//console.log(path.parse(__filename).root);

// concatenate paths


console.log(path.join(__dirname, 'test', 'hello.html'));