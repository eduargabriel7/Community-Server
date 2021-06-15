// required modules
const User = require('../../../../models/User');

// create update user mutation
const updateUserMutation = {
   updateUser: async (
      _,
      { updateUserInput: {
         id, fullname, username, website, about, profilePhoto, coverPhoto
      } }
   ) => {
      const userToUpdate = await User.findById(id);
      if (username !== userToUpdate.username) {
         const userInUse = await User.findOne({ username });
         if (userInUse) {
            return new Error('the username entered is already in use');
         }
      }
      await User.updateOne(
         { _id: id },
         {
            $set: {
               fullname, username, website, about, profilePhoto, coverPhoto
            }
         }
      );
      return await User.findById(id).populate('followers').populate('following')
   }
}

// export module
module.exports = updateUserMutation;