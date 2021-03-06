
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', function(table){
    table.increments();
    table.text('content');
    table.integer('post_id').references('id').inTable('posts');
    table.integer('user_id').references('id').inTable('users').onDelete('CASCADE');
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');

};
