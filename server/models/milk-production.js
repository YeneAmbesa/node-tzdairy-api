const mongoose = require('mongoose');

var practiceSchema = new mongoose.Schema({
  name: String
});

var utensilSchema = new mongoose.Schema({
  name: String
});

//Raw milk production only displayed for farms, producers, heiffer farms
var MilkProductionSchema = new mongoose.Schema({
  milkProduction:[{
    year: {
      type: Number
    },
    season: {
      type: String,
      minlength: 1,
      trim: true
    },
    potential: {
      type: Number
    },
    actual: {
      type: Number
    },
    supplier: {
      type: String,
      minlength: 1,
      trim: true
    },
    price: {
      type: Number,
      default: null
    },
  milkingPractices: [practiceSchema],
  utensils: [utensilSchema]
  }],
});


var MilkProduction = mongoose.model('MilkProduction', MilkProductionSchema);

module.exports = {MilkProduction}
