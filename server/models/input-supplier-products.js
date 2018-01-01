const mongoose = require('mongoose');

var primaryObjective = new mongoose.Schema({
  categoryName: String
});

var InputSupplierProductsSchema = new mongoose.Schema({
  inputSupplierProducts:[{
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
  }],
  primaryObjective: [primaryObjective]
});


var inputsupplierProducts = mongoose.model('InputSupplierProducts', InputSupplierProductsSchema);

module.exports = {InputSupplierProducts}
