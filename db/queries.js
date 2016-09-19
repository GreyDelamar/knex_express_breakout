var knex = ('./knex');

function Users(){
  return knex('users')
};

function Posts(){
  return knex('posts')
};

function Comments(){
  return knex('comments')
};

module.exports = {
  getAllUsers: function(){
    return Users();
  },
  getALlPosts: function(){
    return Posts();
  },
  getALLComments: function(){
    return COmments();
  },
  getSinglePost: function(){
    return Posts().where('id', id);
  }
};
