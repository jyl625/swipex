const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RatingSchema = new Schema({
  exchangeId: {
    type: Schema.Type.ObjectId,
    ref: "Exchange"
  },
  sellerScore: {
    type: Number,
  },
  buyerScore: {
    type: Number,
  }
})

module.exports = Rating = mongoose.model('Rating', RatingSchema);