const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ConversationSchema = new Schema(
  { 
    sellPost: {
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
    buyerOffer:{
      type: Number
    },
    sellerOffer: {
      type: Number
    },
    deal:{
      type: Number
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

ConversationSchema.index({'sellPost':1, 'seller':1, 'buyer':1}, {unique: true})

module.exports = Conversation = mongoose.model('Conversation', ConversationSchema);