// required modules
const { gql } = require('apollo-server-express');

// create type subscription definitions
const typeSubscription = [
   gql`
      type Subscription{
         newFollow(username: String!): Follow!
         newUnfollow(username: String!): Unfollow!


         newPost: Post!
         newUpdatedPost: Post!
         newLikePost(postId: ID!): LikePost!


         newCommentPost(postId: ID!): CommentPost!
         newCommentToComment(commentId: ID!): CommentToComment!
         newLikeComment(commentId: ID!): LikeComment!
      }
   `
]

// export module
module.exports = typeSubscription;