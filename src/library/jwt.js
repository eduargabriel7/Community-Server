// required modules
const jwt = require('jsonwebtoken');

// create token
const jwtLibrary = {
     createToken: (user) => {
          return jwt.sign(
               { id: user._id, username: user.username, email: user.email },
               process.env.TOKEN_SECRET_KEY,
               { expiresIn: '1d' }
          )
     }
}

// export module
module.exports = jwtLibrary;
