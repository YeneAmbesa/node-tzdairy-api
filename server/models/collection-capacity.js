const mongoose = require('mongoose');

//This collection capacity is used for Traders
var CollectionCapacitySchema = new mongoose.Schema({
  collectionCapacity:[{
    year: {
      type: Number
    },
    season: {
      type: String,
      minlength: 1,
      trim: true
    },
    potential: {
      type: Number
    },
    actual: {
      type: Number
    }
  }]
});


var CollectionCapacity = mongoose.model('CollectionCapacity', CollectionCapacitySchema);

module.exports = {CollectionCapacity}
