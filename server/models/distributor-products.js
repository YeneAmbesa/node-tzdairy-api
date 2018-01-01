const mongoose = require('mongoose');

//The processor products subdocument is used for processors as wells as bars, shops and kiosks
var DistributorProductsSchema = new mongoose.Schema({
  distributorProducts:[{
    objective: {
      type: String,
      minlength: 1,
      trim: true
    },
    productName: {
      type: String,
      minlength: 1,
      trim: true
    },
    brandName: {
      type: String,
      minlength: 1,
      trim: true
    }

  }]
});


var DistributorProducts = mongoose.model('DistributorProducts', DistributorProductsSchema);

module.exports = {DistributorProducts}
