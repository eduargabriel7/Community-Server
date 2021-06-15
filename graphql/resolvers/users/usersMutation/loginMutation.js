// required modules
const User = require('../../../../models/User');
const { UserInputError } = require('apollo-server-express');
const { createToken } = require('../../../../library/jwt');
const bcrypt = require('bcryptjs');

// create login mutation
const loginMutation = {

   login: async (
      _,
      { loginInput: { email, password } }
   ) => {

      // make sure user does not already exist
      const userFound = await User.findOne({ email });
      if (!userFound) {
         throw new UserInputError('errors', {
            errors: {
               email: 'user does not exist'
            }
         })
      }

      // validate password
      const isMatch = await bcrypt.compare(password, userFound.password);
      if (!isMatch) {
         throw new UserInputError('errors', {
            errors: {
               password: 'the password is incorrect'
            }
         })
      }

      // create token and return User
      const token = createToken(userFound);
      return {
         ...userFound._doc,
         id: userFound._id,
         token
      }
   }
}

// export module
module.exports = loginMutation;