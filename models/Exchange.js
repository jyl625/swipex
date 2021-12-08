const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ExchangeSchema = new Schema(
  {
    closePrice: {
      type: Number,
      required: true
    },
    sellPost: {
      type: Schema.Types.ObjectId,
      ref: "SellPost"
    },
    seller: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    buyer: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    timestamps: true
  }
)

module.exports = Exchange = mongoose.model('Exchange', ExchangeSchema);