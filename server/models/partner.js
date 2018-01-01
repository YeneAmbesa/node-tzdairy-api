const mongoose = require('mongoose');


//Partners are only displayed for farms, producers, heiffer farms
var PartnerSchema = new mongoose.Schema({
  partners:[{
    firstName: {
      type: String,
      minlength: 1,
      trim: true
    },
    lastName: {
      type: String,
      minlength: 1,
      trim: true
    },
    gender: {
      type: String,
      minlength: 1,
      trim: true
    },
    dependentAdultNo: {
      type: Number,
      default: null
    },
    dependentChildNo: {
      type: Number,
      default: null
    }
  }]
});



var Partners = mongoose.model('Partners', PartnerSchema);

module.exports = {Partners}

//module.exports = mongoose.model('Partners', PartnerSchema);
