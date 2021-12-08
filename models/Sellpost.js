const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SellPostSchema = new Schema({
  seller: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  askPrice: {
    type: Number,
    required: true
  },
  expiration: {
    type: String, // or type: Integer to indicate days left
    required: true
  },
  cafeId: {
    type: Schema.Types.ObjectId, 
    ref: 'Cafeteria'
  },
  open: {
    type: Boolean,
    default: true
  },
  timeCreated: {
    type: Date,
    default: new Date().toISOString().slice(0, 10)
  }
})

module.exports = SellPost = mongoose.model('SellPost', SellPostSchema);