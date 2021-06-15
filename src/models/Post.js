// required modules
const { model, Schema } = require('mongoose');

// create schema
const postSchema = new Schema({
   content: {
      type: String,
   },
   images: {
      type: Array,
      default: []
   },
   user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
   },
   comments: [{
      type: Schema.Types.ObjectId,
      ref: 'Comment'
   }],
   likes: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
   }],
   createdAt: {
      type: String, 
      default: new Date().toISOString()
   },
   updatedAt: {
      type: String, 
      default: new Date().toISOString()
   },
})

// export model
module.exports = model('Post', postSchema);