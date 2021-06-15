// required modules
const postsResolvers = require('./posts');
const usersResolvers = require('./users');
const commentsResolvers = require('./comments');

// A map of functions which return data for the schema.
const resolvers = {
     Query: {
          ...postsResolvers.Query,
          ...usersResolvers.Query
     },
     Mutation: {
          ...usersResolvers.Mutation,
          ...postsResolvers.Mutation,
          ...commentsResolvers.Mutation
     },
     Subscription: {
          ...postsResolvers.Subscription,
          ...usersResolvers.Subscription,
          ...commentsResolvers.Subscription
     }
}

// export module
module.exports = resolvers;