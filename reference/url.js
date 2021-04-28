const { URL } = require('url'); 

const myUrl = new URL('https://visu.studio/movies.php?id=10&status=real');

// Serialized URL
console.log(myUrl.href);
//console.log(myUrl.toString());

//Root domain :)
console.log(myUrl.host); // with the port

// Host name
console.log(myUrl.hostname); // without the port

//path name

console.log(myUrl.pathname);

// query
console.log(myUrl.search); //?query

// params obj
console.log(myUrl.searchParams);

//add params
myUrl.searchParams.append('visu', 'loggedIn');
console.log(myUrl.searchParams);

// Loop through the params and print them
myUrl.searchParams.forEach( (value, name) => 
console.log(`${name}: ${value}`)
);