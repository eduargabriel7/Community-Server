// required modules
const typeData = require('./typeData');
const typeInput = require('./typeInput');
const typeMutation = require('./typeMutation');
const typeQuery = require('./typeQuery');
const typeSubscription = require('./typeSubscription');

// The GraphQL schema
const typeDefs = [
   ...typeData,
   ...typeInput,
   ...typeMutation,
   ...typeQuery,
   ...typeSubscription
]

// export module
module.exports = typeDefs;