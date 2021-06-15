// required modules
const { gql } = require('apollo-server-express');

// create type input definitions
const typeInput = [
   gql`
      input RegisterInput{
         fullname: String!
         username: String!
         email: String!
         password: String!
         confirmPassword: String!
      }
      input LoginInput{
         email: String!
         password: String!
      }
      input UpdateUserInput{
         id: ID!
         profilePhoto: String!
         coverPhoto: String!
         fullname: String!
         username: String!
         website: String!
         about: String!
      }
      input SearchUsersInput{
         username: String!
      }
      input FollowUserInput{
         followerId: ID!
         followedId: ID!
      }


      input GetPostInput {
         postId: ID!
         username: String!
      }
      input CreatePostInput {
         userId: ID!
         content: String!
         images: [String!]
      }
      input UpdatePostInput {
         postId: ID!
         content: String!
         images: [String!]
      }
      input LikePostInput {
         postId: ID!
         userId: ID!
      }


      input CreateCommentPostInput {
         postId: ID!
         userId: ID!
         content: String!
      }
      input CreateCommentToCommentInput {
         commentId: ID!
         userId: ID!
         content: String!
      }
   `
]

// export module
module.exports = typeInput;