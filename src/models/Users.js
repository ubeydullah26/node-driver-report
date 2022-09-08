const Mongoose = require('mongoose');

const UserSchema = new Mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  no: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
  versionKey: false,
});

module.exports = Mongoose.model('User', UserSchema);