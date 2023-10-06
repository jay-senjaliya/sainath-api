const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  hotelGroup: {
    type: String,
    unique: [true, 'hotel group must be unique!'],
    required: [true, 'hotel group required!'],
    trim: true,
  },
  image: [String],
  hotels: {
    type: [
      {
        name: String,
        address: String,
        image: [String],
      },
    ],
  },
});

const Hotel = mongoose.model('Hotel', schema);

module.exports = Hotel;
