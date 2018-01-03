const mongoose = require('mongoose');


//Market only displayed for farms, producers, heiffer farms
var PowerSchema = new mongoose.Schema({
    //power:[{
      powerSource:{
        type: String,
        minlength: 1,
        trim: true
    }
  //}]
});


var Power = mongoose.model('Power', PowerSchema);

module.exports = {Power}
