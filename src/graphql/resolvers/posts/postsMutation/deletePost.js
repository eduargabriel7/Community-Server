// required modules
const Post = require('../../../../models/Post');
const { AuthenticationError } = require('apollo-server-express');

// create mutation
const deletePost = async (_, { postId }, context) => {
   try {
      const postFound = await Post.findById(postId);
      if (userAuth.id == postFound.user) {
         const postDeleted = await postFound.delete();
         return postDeleted;
      }
      else {
         throw new AuthenticationError('action not allowed');
      }
   }
   catch (err) {
      throw new Error(err);
   }
}

// export mutation
module.exports = deletePost;