#!/usr/bin/env node

const path = require('path');
const chickpea = require('chickpea');
const program = require('./index.js');

const configuration = {

  file: 'Requirement document to parse.',
  verbose_flag: 'Be verbose about actions taken.'
};

const options = chickpea(configuration);

options.file = path.resolve(options.file);
program(options)
