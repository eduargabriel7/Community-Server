// required modules
const Post = require('../../../../models/Post');
const Comment = require('../../../../models/Comment');

// create query
const getPost = async (_, { getPostInput: { postId, username } }) => {
   try {
      const postFound = await Post.findById(postId)
         .populate('user likes')
         .populate({
            path: 'comments',
            populate: {
               path: 'user comments likes',
               populate: 'user'
            }
         })
      const isSameUser = postFound.user.username === username;
      if (!postFound || !isSameUser) { throw new Error('post does not exist') }
      // return post
      return postFound;
   }
   catch (err) {
      throw new Error(err);
   }
}


// export module
module.exports = getPost;