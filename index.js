// required modules
require('dotenv').config();
const http = require('http');
const express = require('express');
const connection = require('./connection');
const apollo = require('./apollo');
const morgan = require('morgan');

// create server
const app = express();

// create server http and web sockets
const server_http_ws = http.createServer(app);

// connection to database
connection();

// middlewares
app.use(morgan('dev'));

// apollo server express
apollo.start();
apollo.applyMiddleware({ app });
apollo.installSubscriptionHandlers(server_http_ws);

// listen express server
server_http_ws.listen((process.env.PORT || 4000), () => {
   console.log('Server is running');
})