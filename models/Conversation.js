const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ConversationSchema = new Schema(
  { 
    sellpost: {
      type: Schema.Types.ObjectId,
      ref: "SellPost",
      required: true
    },
    seller: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    buyer: {
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