// required modules
const Comment = require('../../../../models/Comment');

// create mutation
const createCommentToComment = async (
   _,
   { createCommentToCommentInput: { commentId, userId, content } },
   { pubsub }
) => {
   try {
      const newComment = await new Comment({ content, user: userId });
      // add comment to post
      await Comment.findByIdAndUpdate(
         commentId,
         {
            $push: { comments: newComment._id }
         }
      )
      // save comment
      const commentSaved = await newComment.save();
      const commentToReturn = await Comment.findById(commentSaved._id).populate('user');
      // subscription
      pubsub.publish('NEW_COMMENT_TO_COMMENT', {
         newCommentToComment: {
            commentedCommentId: commentId, comment: commentToReturn
         }
      })
      // return comment
      return commentToReturn;
   }
   catch (error) {
      throw new Error(error);
   }
}

// export mutation
module.exports = createCommentToComment;