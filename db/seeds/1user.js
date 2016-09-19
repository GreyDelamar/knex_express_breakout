var bcrypt = require('bcrypt');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({id: 1, username: 'user1', password: bcrypt.hashSync('test1', 10)}),
        knex('users').insert({id: 2, username: 'user2', password: bcrypt.hashSync('test2', 10)}),
        knex('users').insert({id: 3, username: 'user3', password: bcrypt.hashSync('test3', 10)})
      ]);
    });
};
