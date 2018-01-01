const mongoose = require('mongoose');


//Market only displayed for farms, producers, heiffer farms
var MarketSchema = new mongoose.Schema({
  market:[{
    marketName: {
      type: String,
      minlength: 1,
      trim: true
    },
    marketDistance: {
      type: Number
    }
  }]

});


var Market = mongoose.model('Market', MarketSchema);

module.exports = {Market}
