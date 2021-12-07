const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ConversationSchema = new Schema(
  {
    sellerId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    buyerId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      }
    ]
  },
  {
    timestamps: true
  }
)

module.exports = Conversation = mongoose.model('Conversation', ConversationSchema);