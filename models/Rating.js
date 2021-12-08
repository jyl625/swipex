const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RatingSchema = new Schema({
  exchangeId: {
    type: Schema.Type.ObjectId,
    ref: "Exchange"
  },
  sellerScore: {
    type: Number,
    enum: [1, 2, 3, 4, 5]
  },
  buyerScore: {
    type: Number,
    enum: [1, 2, 3, 4, 5]
  }
})

module.exports = Rating = mongoose.model('Rating', RatingSchema);