// required modules
const { withFilter } = require('apollo-server-express');

// create posts subscriptions
const commentsSubscription = {

   newCommentPost: {
      subscribe: withFilter(
         (_, args, { pubsub }) => pubsub.asyncIterator('NEW_COMMENT_POST'),
         (payload, variables) => {
            return (
               payload.newCommentPost.commentedPostId === variables.postId
            )
         }
      )
   },
   newCommentToComment: {
      subscribe: withFilter(
         (_, args, { pubsub }) => pubsub.asyncIterator('NEW_COMMENT_TO_COMMENT'),
         (payload, variables) => {
            return (
               payload.newCommentToComment.commentedCommentId === variables.commentId
            )
         }
      )
   },

}

// export module
module.exports = commentsSubscription;