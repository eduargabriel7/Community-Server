// required modules
const jwt = require('jsonwebtoken');
const { AuthenticationError } = require('apollo-server-express');

// check authentication
const checkAuth = (context) => {
     
     // context apollo server
     const authHeader = context.req.headers.authorization;

     // verify token
     if (authHeader) {
          try {
               const user = jwt.verify(authHeader, process.env.TOKEN_SECRET_KEY);
               return user;
          }
          catch (err) {
               throw new AuthenticationError('expired or invalid token');
          }
     }
     else {
          throw new AuthenticationError('authentication must be provided');
     }
}

// export module
module.exports = checkAuth;