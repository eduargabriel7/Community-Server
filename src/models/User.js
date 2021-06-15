// required modules
const { model, Schema } = require('mongoose');

// create schema
const userSchema = new Schema({
     fullname: {
          type: String, required: true
     },
     username: {
          type: String, trim: true, unique: true, required: true
     },
     email: {
          type: String, trim: true, unique: true, required: true
     },
     password: {
          type: String, trim: true, required: true
     },
     profilePhoto: {
          type: String, default: ''
     },
     coverPhoto: {
          type: String, default: ''
     },
     gender: {
          type: String, default: ''
     },
     mobile: {
          type: String, default: ''
     },
     address: {
          type: String, default: ''
     },
     about: {
          type: String, default: '', maxLength: 200
     },
     website: {
          type: String, default: ''
     },
     followers: {
          type: [{
               type: Schema.Types.ObjectId, ref: 'User'
          }]
     },
     following: {
          type: [{
               type: Schema.Types.ObjectId, ref: 'User'
          }]
     },
     createdAt: {
          type: String, default: new Date().toISOString()
     },
     updatedAt: {
          type: String, default: new Date().toISOString()
     },
     role: {
          type: String, default: 'user'
     }
})

// export model
module.exports = model('User', userSchema);