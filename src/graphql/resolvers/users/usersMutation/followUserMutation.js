// required modules
const User = require('../../../../models/User');

// create follow user mutation
const followUserMutation = {

   followUser: async (
      _,
      { followUserInput: { followerId, followedId } },
      { pubsub }
   ) => {

      // verify followed
      const userFollowed = await User.findById(followedId);
      const isFollowed = userFollowed.followers.find(
         userId => userId == followerId
      )
      if (!isFollowed) {

         // FOLLOW 
         const follower = await User.findByIdAndUpdate(
            followerId, {
            $push: { following: followedId }
         })
         const followed = await User.findByIdAndUpdate(
            followedId, {
            $push: { followers: followerId }
         })
         // subscription
         pubsub.publish('NEW_FOLLOW', {
            newFollow: { follower, followed }
         })
         // return update isFollowed
         return true;
      }
      else {

         // UNFOLLOW
         const nonFollower = await User.findByIdAndUpdate(
            followerId, {
            $pull: { following: followedId }
         })
         const nonFollowed = await User.findByIdAndUpdate(
            followedId, {
            $pull: { followers: followerId }
         })
         // subscription
         pubsub.publish('NEW_UNFOLLOW', {
            newUnfollow: { nonFollower, nonFollowed }
         })
         // return update isFollowed
         return false;
      }
   }
}

// export module
module.exports = followUserMutation;