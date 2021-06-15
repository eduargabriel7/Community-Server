// required modules
const usersMutation = require('./usersMutation');
const usersQuery = require('./usersQuery');
const usersSubscription = require('./usersSubscription');

// resolvers
const usersResolvers = {

   // mutations
   Mutation: usersMutation,

   // queries
   Query: usersQuery,

   // subscriptions
   Subscription: usersSubscription
}

// export module
module.exports = usersResolvers;