// required modules
require('dotenv').config();
const http = require('http');
const express = require('express');
const connection = require('./connection');
const apollo = require('./apollo');
const morgan = require('morgan');

// create server
const app = express();
const httpServer = http.createServer(app);

// connection to database
connection();

// middlewares
app.use(morgan('dev'));

// apollo server express
apollo.start();
apollo.applyMiddleware({ app });
apollo.installSubscriptionHandlers(httpServer);

// listen express server
const PORT = process.env.PORT || 4000
httpServer.listen(PORT, () => {
   console.log(`🚀 Server ready at http://localhost:${PORT}${apollo.graphqlPath}`);
   console.log(`🚀 Subscriptions ready at ws://localhost:${PORT}${apollo.subscriptionsPath}`);
})