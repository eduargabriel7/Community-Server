// required modules
const { withFilter } = require('apollo-server-express');

// create users subscriptions
const usersSubscription = {

   newFollow: {
      subscribe: withFilter(
         (_, args, { pubsub }) => pubsub.asyncIterator('NEW_FOLLOW'),
         (payload, variables) => {
            return (
               payload.newFollow.follower.username === variables.username ||
               payload.newFollow.followed.username === variables.username
            )
         }
      )
   },

   newUnfollow: {
      subscribe: withFilter(
         (_, args, { pubsub }) => pubsub.asyncIterator('NEW_UNFOLLOW'),
         (payload, variables) => {
            return (
               payload.newUnfollow.nonFollower.username === variables.username ||
               payload.newUnfollow.nonFollowed.username === variables.username
            )
         }
      )
   }

}

// export module
module.exports = usersSubscription;