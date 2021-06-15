// required modules
const { withFilter } = require('apollo-server-express');

// create posts subscriptions
const postsSubscription = {

   newPost: {
      subscribe: (_, args, { pubsub }) => {
         return pubsub.asyncIterator('NEW_POST');
      }
   },
   newUpdatedPost: {
      subscribe: (_, args, { pubsub }) => {
         return pubsub.asyncIterator('NEW_UPDATED_POST');
      }
   },
   newLikePost: {
      subscribe: withFilter(
         (_, args, { pubsub }) => pubsub.asyncIterator('NEW_LIKE_POST'),
         (payload, variables) => {
            return (
               payload.newLikePost.postLiked.id === variables.postId
            )
         }
      )
   }

}

// export module
module.exports = postsSubscription;