const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Destination must have name!'],
    unique: [true, 'Name must be unique!'],
    trim: true,
  },
  description: {
    type: String,
    // required: [true, 'Description required!'],
    maxlength: 5000,
    trim: true,
  },
  image: [
    {
      type: String, // Use the "Buffer" data type
      // get: (data) => {
      //   // When fetching the data, convert it from Buffer to base64
      //   return data.toString('base64');
      // },
      // set: (data) => {
      //   // When setting the data, convert it from base64 to Buffer
      //   return Buffer.from(data, 'base64');
      // },
    },
  ],
  category: {
    type: String,
    enum: ['domestic', 'international'],
  },
  packages: [
    {
      day: Number,
      night: Number,
      package: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Package',
        },
      ],
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

schema.pre(/^find/, function (next) {
  // console.log('Enter in populate..');
  this.populate({
    path: 'packages.package',
    select: '-__v',
  });
  next();
});

const Destination = mongoose.model('Destination', schema);

module.exports = Destination;
