const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CafeteriaSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  lat: {
    type: Number,
    required: true
  },
  lng: {
    type: Number,
    required: true
  },
  photoUrls: [String]
})

module.exports = Cafeteria = mongoose.model('Cafeteria', CafeteriaSchema);
