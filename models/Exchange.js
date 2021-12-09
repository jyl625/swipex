const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SellPost = require("mongoose").model("SellPost")

const ExchangeSchema = new Schema(
  {
    closePrice: {
      type: Number,
      required: true
    },
    sellPost: {
      type: Schema.Types.ObjectId,
      ref: "SellPost",
      unique: true
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

ExchangeSchema.statics.findByCafeId = function(cafeId){
  const query = this.findOne();
  SellPost.findOne({"cafeId": cafeId}, function(error, sellPost){
    query.where(
      {sellPost: mongoose.Types.ObjectId(sellPost._id)}
    ).exec()
  })
  return query;
}

module.exports = Exchange = mongoose.model('Exchange', ExchangeSchema);