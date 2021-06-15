// required modules
const { gql } = require('apollo-server-express');

// create type mutation definitions
const typeMutation = [
   gql`
      type Mutation{
         register(registerInput: RegisterInput): User!
         login(loginInput: LoginInput): User!
         updateUser(updateUserInput: UpdateUserInput): User!
         followUser(followUserInput: FollowUserInput): Boolean!

         createPost(createPostInput: CreatePostInput): Post!
         updatePost(updatePostInput: UpdatePostInput): Post!
         deletePost(postId: ID!): Post!
         likePost(likePostInput: LikePostInput): Post!

         createCommentPost(createCommentPostInput: CreateCommentPostInput): Comment!
         createCommentToComment(createCommentToCommentInput: CreateCommentToCommentInput): Comment!
      }
   `
]

// export module
module.exports = typeMutation;