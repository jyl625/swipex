const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CommentSchema = new Schema(
  {
    commentor: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    conversation: {
      type: Schema.Types.ObjectId,
      ref: "Conversation",
      required: true
    },
    content: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

module.exports = Comment = mongoose.model('Comment', CommentSchema);