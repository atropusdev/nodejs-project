console.log('Starting app.js...');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');


console.log('Result:', notes.add(5, -2));

//console.log(_.isString(true));
//console.log(_.isString('Andrew'));

var filteredArray = _.uniq(['Andrew', 'Andrew', 'Colton', '3', '4']);
console.log(filteredArray);

//console.log(module);
