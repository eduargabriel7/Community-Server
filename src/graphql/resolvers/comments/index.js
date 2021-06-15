// required modules
const commentsMutation = require('./commentsMutation');
const commentsSubscription = require('./commentsSubscription');

// resolvers
const commentsResolvers = {
   Mutation: commentsMutation,
   Subscription: commentsSubscription
}

// export module
module.exports = commentsResolvers;