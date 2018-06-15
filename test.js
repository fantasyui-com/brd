const path = require('path');
const assert = require('assert');
const program = require('./index.js');

process.argv.push('--cheese');
process.argv.push('gorgonzola');

const input = {

  file: path.resolve('./examples/text-edit/REQUIREMENTS.md')

};

const actual = program(input);

// this needs to be two objects in an array
const expected = [ ];

console.log(actual);

// assert.deepEqual( actual , expected );
