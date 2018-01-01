const mongoose = require('mongoose');

//The supplier capacity subdocument is used for input suppliers, distributors, importers and exporters
var SupplierCapacitySchema = new mongoose.Schema({
  SupplierCapacity:[{
    year: {
      type: Number
    },
    potential: {
      type: Number
    },
    actual: {
      type: Number
    }
  }]
});


var SupplierCapacity = mongoose.model('SupplierCapacity', SupplierCapacitySchema);

module.exports = {SupplierCapacity}
