// required modules
const { ApolloServer, PubSub } = require('apollo-server-express');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const EventEmitter = require('events');

// max listeners
const biggerEventEmitter = new EventEmitter();
biggerEventEmitter.setMaxListeners(30);

// create apollo server
const pubsub = new PubSub({ eventEmitter: biggerEventEmitter });
const apollo = new ApolloServer({
     typeDefs,
     resolvers,
     context: ({ req, res }) => ({ req, res, pubsub })
});

// export module
module.exports = apollo;