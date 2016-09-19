var enviroment = process.end.NODE_ENV || 'development';

var config = require('../knexfile')[enviroment];

module.exports = require('knex')(config);
