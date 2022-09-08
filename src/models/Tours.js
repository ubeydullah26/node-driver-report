const Mongoose = require('mongoose');

const TourSchema = new Mongoose.Schema({
  userId:{
    type: Mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  reportId:{
    type: Mongoose.Schema.Types.ObjectId,
    ref: 'Report',
  },
  truckId: {
    type: Mongoose.Schema.Types.ObjectId,
    ref: 'Truck',
    required: true,
  },
  no: {
    type: String,
    required: true,
  },
}, {timestamps: true, versionKey: false});

module.exports = Mongoose.model('Tour', TourSchema);