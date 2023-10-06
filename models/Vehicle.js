const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    unique: [true, 'vehicle name must be unique!'],
    required: [true, 'name required!'],
    trim: true,
  },
  image: [String],
  price: {
    type: Number,
    required: [true, 'price per km required!'],
  },
  category: {
    type: String,
    enum: ['bus', 'traveller', 'cab'],
    required: [true, 'category required'],
  },
});

const Vehicle = mongoose.model('Vehicle', schema);

module.exports = Vehicle;
