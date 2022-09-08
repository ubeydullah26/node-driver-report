const Mongoose = require('mongoose');

const TruckSchema = new Mongoose.Schema({
   no: {
      type: String,
      required: true,
      unique: true
   },
}, {versionKey: false, timestamps: true});

module.exports = Mongoose.model('Truck', TruckSchema);