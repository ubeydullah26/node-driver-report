const Mongoose = require('mongoose');

const DestinationSchema = new Mongoose.Schema({
  userId:{
    type: Mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  tourId:{
    type: Mongoose.Schema.Types.ObjectId,
    ref: 'Tour',
    required: true
  },
  destination:{
    type: String,
    required: true
  },
  departure:{
    type: String,
    required: true
  }
}, {timestamps: true, versionKey: false});

module.exports = Mongoose.model('Destination', DestinationSchema);