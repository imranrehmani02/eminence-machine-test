const mongoose = require('mongoose');

// Define a user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  },
});

// Create a User model based on the user schema
const User = mongoose.model('users', userSchema);

module.exports = User;