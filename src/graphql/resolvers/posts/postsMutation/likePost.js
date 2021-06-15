// required modules
const Post = require('../../../../models/Post');
const User = require('../../../../models/User');

// create mutation
const likePost = async (
   _,
   { likePostInput: { postId, userId } },
   { pubsub }
) => {
   try {
      const postFound = await Post.findById(postId);
      const like = postFound.likes.find(
         userLikeId => userLikeId == userId
      )
      if (!like) {
         // like
         await Post.findByIdAndUpdate(
            postId, {
            $push: { likes: userId }
         })
      }
      else {
         // unlike
         await Post.findByIdAndUpdate(
            postId, {
            $pull: { likes: userId }
         })
      }
      const postLiked = await Post.findById(postId)
         .populate('user').populate('comments').populate('likes');
      const userLike = await User.findById(userId);
      // subscription
      pubsub.publish('NEW_LIKE_POST', {
         newLikePost: { userLike, postLiked }
      })
      // return post updated
      return postLiked;
   }
   catch (err) {
      throw new Error(err);
   }
}

// export mutation
module.exports = likePost;