// required modules
const createCommentPost = require('./createCommentPost');
const createCommentToComment = require('./createCommentToComment');

// create comments mutations
const commentsMutation = {
   createCommentPost,
   createCommentToComment
}

// export module
module.exports = commentsMutation;