// required modules
const User = require('../../../models/User');

// create users queries
const usersQuery = {

   getUser: async (_, { username }) => {
      try {
         const userFound = await User.findOne(
            { username }
         ).populate(
            'followers'
         ).populate(
            'following'
         )
         if (!userFound) {
            throw new Error('user does not exist').message
         }
         return userFound;
      }
      catch (err) {
         throw new Error(err);
      }
   },

   searchUsers: async (_, { searchUsersInput: { username } }) => {
      try {
         const usersFound = await User.find(
            {
               $or: [
                  { username: { $regex: username, $options: 'i' } },
                  { fullname: { $regex: username, $options: 'i' } }
               ]
            }
         ).limit(10)
         return usersFound;
      } catch (err) {
         throw new Error(err);
      }
   }
}

// export module
module.exports = usersQuery;