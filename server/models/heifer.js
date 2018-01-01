const mongoose = require('mongoose');


var HeiferSchema = new mongoose.Schema({
  heifer:[{
    heiferType: {
      type: String,
      minlength: 1,
      trim: true
    },
    numberOf: {
      type: Number
    },
    price: {
      type: Number
    }
  }]
});


var Heifer = mongoose.model('Heifer', HeiferSchema);

module.exports = {Heifer};
