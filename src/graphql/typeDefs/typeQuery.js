// required modules
const { gql } = require('apollo-server-express');

// create type query definitions
const typeQuery = [
   gql`
      type Query{
      getUser(username: String!): User!
      searchUsers(searchUsersInput: SearchUsersInput): [User!]
      
      getPosts: [Post!]
      getPost(getPostInput: GetPostInput): Post!
      }
   `
]

// export module
module.exports = typeQuery;