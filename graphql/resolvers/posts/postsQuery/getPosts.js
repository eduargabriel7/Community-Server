// required modules
const Post = require('../../../../models/Post');
const Comment = require('../../../../models/Comment');

// create query
const getPosts = async () => {
   try {
      const postsFound = await Post.find().sort({ createdAt: -1 })
         .populate('user likes')
         .populate({
            path: 'comments',
            populate: {
               path: 'user comments likes',
               populate: 'user'
            }
         })
      // return posts
      return postsFound;
   }
   catch (err) {
      throw new Error(err);
   }
}


// export module
module.exports = getPosts;