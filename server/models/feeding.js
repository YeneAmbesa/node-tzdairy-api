const mongoose = require('mongoose');


//Feeding only displayed for farms, producers, heiffer farms
var FeedingSchema = new mongoose.Schema({
  feeding:[{
    mgmtSystem: {
      type: String,
      minlength: 1,
      trim: true
    },
    manager: {
      type: String,
      minlength: 1,
      trim: true
    },
    plotSize: {
      type: Number
    },
    feed: {
      type: String,
      minlength: 1,
      trim: true
    },
    supplier: {
      type: String,
      minlength: 1,
      trim: true
    },
    price: {
      type: Number,
      default: null
    }
  }]
});


var Feeding = mongoose.model('Feeding', FeedingSchema);

module.exports = {Feeding}
