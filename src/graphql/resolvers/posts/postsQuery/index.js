// required modules
const getPosts = require('./getPosts');
const getPost = require('./getPost');

// create posts queries
const postsQuery = {
     getPosts,
     getPost
}

// export module
module.exports = postsQuery;