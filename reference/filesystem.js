const fs = require('fs');
const { dirname } = require('node:path');
const path = require('path');

//creating paths
/*fs.mkdir(path.join(__dirname, '/test'), {}, err => {
    if (err) throw err;
    console.log('Created folder!');
});*/

//create and write to file // it also overwrites!
/*
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'),
                        'goodbaiii lolllll', err => {
                        if (err) throw err;
                        console.log('Created text file!');
                                                            }
);

// appending too!
fs.appendFile(path.join(__dirname, '/test', 'hello.txt'),
                        ' haha lolllll', err => {
                        if (err) throw err;
                        console.log('Created text file!');
                                                            }
); */

// reading and using the file, data
/*
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8',
                        (err, data) => {
                        if (err) throw err;
                        console.log(data); });*/

// Renamed.

fs.rename(
    path.join(__dirname, '/test', 'hello.txt'),
    path.join(__dirname, '/test', 'hello2.txt'),
                        err => {
                        if (err) throw err;
                        console.log('Renamed.'); }
                        );