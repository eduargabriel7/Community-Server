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

app.get('/', (req, res) => {
   res.send('hello world')
})

// listen express server
app.listen((process.env.PORT || 4000), () => {
   console.log('Server is running');
})