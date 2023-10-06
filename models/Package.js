const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Package must have name!'],
    trim: true,
  },
  packageType: {
    type: String,
    enum: ['deluxe', 'super deluxe', 'premium'],
    required: [true, 'package type required!'],
  },
  code: {
    type: String,
    required: [true, 'Package must have booking code!'],
    unique: [true, 'A package must have unique code'],
  },
  startingPrice: {
    type: Number,
    required: [true, 'starting price required!'],
  },
  image: [
    {
      type: String,
      //   type: Buffer, // Use the "Buffer" data type
      //   get: (data) => {
      //     // When fetching the data, convert it from Buffer to base64
      //     return data.toString('base64');
      //   },
      //   set: (data) => {
      //     // When setting the data, convert it from base64 to Buffer
      //     return Buffer.from(data, 'base64');
      //   },
    },
  ],
  // {
  //   type: String,
  //   required: [true, 'A tour must have images!'],
  // },
  hotels: [
    {
      nights: Number,
      destination: String,
      name: String,
      roomType: String,
      mealPlan: String,
      similarHotels: [String],
    },
  ],
  itinerary: {
    type: [
      {
        day: Number,
        heading: String,
        description: String,
      },
    ],
    required: [true, 'A tour must have itinerary!'],
  },
  price: [{ heading: String, value: [String] }],
  inclusion: {
    type: [String],
    required: [true, 'A Package must have inclusion'],
  },
  exclusion: {
    type: [String],
    required: [true, 'A Package must have exclusion'],
  },
  importantNotes: {
    type: [String],
    required: [true, 'A Package must have important notes!'],
  },
  additional: {
    type: [String],
  },
  paymentTerm: {
    type: [String],
    required: [true, 'A Package must have payment  term!'],
  },
  cancellationPolicy: {
    type: [String],
    required: [true, 'A Package must have cancellation policy!'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

// schema.pre(/^find/, function (next) {
//   // console.log('Enter in populate..');
//   this.createdAt = this.createdAt.toLocalString();
//   next();
// });

const Package = mongoose.model('Package', schema);

module.exports = Package;
