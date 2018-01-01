const mongoose = require('mongoose');



var MilkSourceSchema = new mongoose.Schema({
  milkSource:[{
    sourceName: {
      type: String,
      minlength: 1,
      trim: true
    },
    sourceDistance: {
      type: Number
    }
  }]

});


var MilkSource = mongoose.model('MilkSource', MilkSourceSchema);

module.exports = {MilkSource}
