const mongoose = require("mongoose");
const validator = require("validator");

const schema = new mongoose.Schema({
  role: {
    type: String,
    enum: ["customer", "admin"],
    default: "customer",
  },
  firstName: {
    type: String,
    required: [true, "firstName required!"],
  },
  lastName: {
    type: String,
    required: [true, "lastName required!"],
  },
  phone: {
    type: Number,
    length: 10,
    required: [true, "Enter your monile no."],
  },
  email: {
    type: String,
    required: [true, "Please Provide E-mail!"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please Provide valid email"],
  },
  password: {
    type: String,
    required: [true, "password must required!"],
    minLength: [8, "password must be 8 or greater!"],
  },
});

const User = mongoose.model("User", schema);

module.exports = User;
