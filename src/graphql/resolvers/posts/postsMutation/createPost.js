// required modules
const Post = require('../../../../models/Post');

// create mutation
const createPost = async (
   _,
   { createPostInput: { userId, content, images } },
   context
) => {
   try {
      // create a new post
      const newPost = new Post({
         user: userId, content, images
      })
      const postSaved = await newPost.save()
      // Publishing an event
      context.pubsub.publish('NEW_POST', {
         newPost: postSaved
      })
      // return post saved
      return postSaved;
   }
   catch (error) {
      throw new Error(error);
   }
}

// export mutation
module.exports = createPost;