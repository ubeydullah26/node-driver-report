const Mongoose = require('mongoose');

const ReportSchema = new Mongoose.Schema({
  userId: {
    type: Mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  startKm: {
    type: Number,
    required: true,
  },
  endKm: {
    type: Number,
    required: true,
  },
  fuel: {
    type: Number,
  },
}, {timestamps: true, versionKey: false});

module.exports = Mongoose.model('Report', ReportSchema);