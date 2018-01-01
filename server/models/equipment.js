const mongoose = require('mongoose');


var EquipmentSchema = new mongoose.Schema({
  equipment:[{
    name: {
      type: String,
      minlength: 1,
      trim: true
    },
    capacity: {
      type: String,
      minlength: 1,
      trim: true
    },
    unitOfMeasure: {
      type: Number
    }
  }]
});


var Equipment = mongoose.model('Equipment', EquipmentSchema);

module.exports = {Equipment}
