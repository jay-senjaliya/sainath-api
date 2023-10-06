const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  package: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Package',
  },
  price: {
    type: Number,
    required: [true, 'price required!'],
    trim: true,
  },
});

schema.pre(/^find/, function (next) {
  // console.log('Enter in populate..');
  this.populate({
    path: 'package',
    select: '-__v',
  });
  next();
});

const FixedDeparture = mongoose.model('FixedDeparture', schema);

module.exports = FixedDeparture;
