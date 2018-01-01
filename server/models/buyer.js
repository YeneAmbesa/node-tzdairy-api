const mongoose = require('mongoose');



var BuyerSchema = new mongoose.Schema({
      buyers:[{
        buyerType: {
            type: String
        },
        femaleNo: {
            type: Number
        },
        maleNo: {
            type: Number
        }
    }]
  });

var Buyer = mongoose.model('Buyer', BuyerSchema);

module.exports = {Buyer}
