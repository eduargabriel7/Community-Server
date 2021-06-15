// required modules
const { model, Schema } = require('mongoose');

// create schema
const commentSchema = new Schema({
   content: {
      type: String,
      required: true
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
   }
})

// export model
module.exports = model('Comment', commentSchema);