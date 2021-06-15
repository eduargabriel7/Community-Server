// required modules
const Post = require('../../../../models/Post');

// create mutation
const updatePost = async (
   _,
   { updatePostInput: { postId, content, images } },
   { pubsub }
) => {
   try {
      // update post
      const postUpdated = await Post.findByIdAndUpdate(
         postId,
         { content, images, updatedAt: new Date().toISOString() },
         { new: true }
      ).populate('user').populate('comments').populate('likes');
      // subscription
      pubsub.publish('NEW_UPDATED_POST', {
         newUpdatedPost: postUpdated
      })
      // return post updated
      return postUpdated;
   }
   catch (error) {
      throw new Error(error);
   }
}

// export mutation
module.exports = updatePost;