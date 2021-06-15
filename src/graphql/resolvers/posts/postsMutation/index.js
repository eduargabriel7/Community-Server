// required modules
const createPost = require('./createPost');
const deletePost = require('./deletePost');
const updatePost = require('./updatePost');
const likePost = require('./likePost');

// create posts mutations
const postsMutation = {
     createPost,
     deletePost,
     likePost,
     updatePost
}

// export module
module.exports = postsMutation;