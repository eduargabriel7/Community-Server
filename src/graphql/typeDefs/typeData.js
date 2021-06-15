// required modules
const { gql } = require('apollo-server-express');

// create type data definitions
const typeData = [
   gql`
      type User {
         id: ID!
         fullname: String!
         username: String!
         email: String!
         gender: String!
         profilePhoto: String!
         coverPhoto: String!
         mobile: String!
         address: String!
         about: String!
         website: String!
         createdAt: String!
         updatedAt: String!
         followers: [User!]
         following: [User!]
         token: String!
      }
      type Follow {
         follower: User!
         followed: User!
      }
      type Unfollow {
         nonFollower: User!
         nonFollowed: User!
      }


      type Post {
         id: ID!
         user: User!
         content: String!
         images: [String!]
         comments: [Comment!]
         likes: [User!]
         createdAt: String!
         updatedAt: String!
      }
      type LikePost {
         userLike: User!
         postLiked: Post!
      }
      type CommentPost {
         commentedPostId: ID!
         comment: Comment!
      }


      type Comment {
         id: ID!
         user: User!
         content: String!
         comments: [Comment!]
         likes: [User!]
         createdAt: String!
      }
      type LikeComment {
         likedCommentId: ID!
         likeUser: User!
      }
      type CommentToComment {
         commentedCommentId: ID!
         comment: Comment!
      }
   `
]

// export module
module.exports = typeData;