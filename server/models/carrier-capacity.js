const mongoose = require('mongoose');


var CarrierCapacitySchema = new mongoose.Schema({
  carrierCapacity:[{
    engineCC: {
      type: String
    },
    truckNo: {
      type: Number
    },
    potential: {
      type: Number
    },
    actual: {
      type: Number
    },
    marketArea: {
      type: String,
      minlength: 1,
      trim: true
    }
  }]
});


var CarrierCapacity = mongoose.model('CarrierCapacity', CarrierCapacitySchema);

module.exports = {CarrierCapacity}
