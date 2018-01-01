const mongoose = require('mongoose');

var CarrierProductsSchema = new mongoose.Schema({
  carrierProducts:[{
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


var CarrierProducts = mongoose.model('CarrierProducts', CarrierProductsSchema);

module.exports = {CarrierProducts}
