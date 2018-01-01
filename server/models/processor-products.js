const mongoose = require('mongoose');

//The processor products subdocument is used for processors as wells as bars, shops and kiosks
var ProcessorProductsSchema = new mongoose.Schema({
  processorProducts:[{
    productName: {
      type: String,
      minlength: 1,
      trim: true
    },
    brandName: {
      type: String,
      minlength: 1,
      trim: true
    },
    unitsProduced: {
      type: Number
    }
  }]
});


var ProcessorProducts = mongoose.model('ProcessorProducts', ProcessorProductsSchema);

module.exports = {ProcessorProducts}
