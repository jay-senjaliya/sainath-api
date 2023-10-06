const mongoose = require('mongoose');
const validator = require('validator');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name required!'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please Provide E-mail!'],
    // lowercase: true,
    // validate: [validator.isEmail, 'Please Provide valid email'],
  },
  mobile: {
    type: Number,
    required: [true, 'mobile no required!'],
  },
  message: {
    type: String,
    trim: true,
  },
});

const Contact = mongoose.model('Contact', schema);

module.exports = Contact;
