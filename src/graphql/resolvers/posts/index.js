// required modules
const postsQuery = require('./postsQuery');
const postsMutation = require('./postsMutation');
const postsSubscription = require('./postsSubscription');

// resolvers
const postsResolvers = {
     Query: postsQuery,
     Mutation: postsMutation,
     Subscription: postsSubscription
}

// export module
module.exports = postsResolvers;