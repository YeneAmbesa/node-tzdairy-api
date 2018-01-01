const mongoose = require('mongoose');

//The processor capacity subdocument is used for processors as wells as bars, shops and kiosks
var ProcessorCapacitySchema = new mongoose.Schema({
  processorCapacity:[{
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


var ProcessorCapacity = mongoose.model('ProcessorCapacity', ProcessorCapacitySchema);

module.exports = {ProcessorCapacity}
