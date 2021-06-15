// required modules
const registerMutation = require('./registerMutation');
const loginMutation = require('./loginMutation');
const updateUserMutation = require('./updateUserMutation');
const followUserMutation = require('./followUserMutation');

// create users mutations
const usersMutation = {
     ...registerMutation,
     ...loginMutation,
     ...updateUserMutation,
     ...followUserMutation
}

// export module
module.exports = usersMutation;