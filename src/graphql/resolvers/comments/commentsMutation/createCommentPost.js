// required modules
const Comment = require('../../../../models/Comment');
const Post = require('../../../../models/Post');

// create mutation
const createCommentPost = async (
   _,
   { createCommentPostInput: { postId, userId, content } },
   { pubsub }
) => {
   try {
      const newComment = await new Comment({ content, user: userId });
      // add comment to post
      await Post.findByIdAndUpdate(
         postId,
         {
            $push: { comments: newComment._id }
         }
      )
      // save comment
      const commentSaved = await newComment.save();
      const commentToReturn = await Comment.findById(commentSaved._id).populate('user');
      // subscription
      pubsub.publish('NEW_COMMENT_POST', {
         newCommentPost: {
            commentedPostId: postId, comment: commentToReturn
         }
      })
      // return comment
      return commentToReturn;
   }
   catch (error) {
      throw new Error(error);
   }
}

// export mutation
module.exports = createCommentPost;