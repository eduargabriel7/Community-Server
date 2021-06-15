// required modules
const User = require('../../../../models/User');
const { UserInputError } = require('apollo-server-express');
const { createToken } = require('../../../../library/jwt');
const bcrypt = require('bcryptjs');

// create register mutation
const registerMutation = {

   register: async (
      _,
      { registerInput: { fullname, username, email, password, confirmPassword } }
   ) => {
      // user already exist
      const userForEmail = await User.findOne({ email });
      if (userForEmail) {
         throw new UserInputError('errors', {
            errors: {
               email: "There is already a user with this email"
            }
         })
      }
      // username is already in use
      const userForUsername = await User.findOne({ username })
      if (userForUsername) {
         throw new UserInputError('errors', {
            errors: {
               username: "The username is already in use"
            }
         })
      }
      // hash password and save user
      const passwordHash = await bcrypt.hash(password, 12);
      const newUser = new User({
         fullname, username, email, password: passwordHash
      })
      const userSaved = await newUser.save();

      // create token and return User
      const token = createToken(userSaved);
      return {
         ...userSaved._doc,
         id: userSaved._id,
         token
      }
   }
}

// export module
module.exports = registerMutation;