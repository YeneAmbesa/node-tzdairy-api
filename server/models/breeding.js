const mongoose = require('mongoose');


var breedingTechniques = new mongoose.Schema({
    technique: String,
    percentUsed: Number
    // technique: {
    //   type: String,
    //   minlength: 1,
    //   trim: true
    // },
    // percentUsed: {
    //   type: Number,
    //   minlength: 1,
    //   trim: true
    // }
});


//Breeding are only displayed for farms, producers, heiffer farms
var BreedingSchema = new mongoose.Schema({
  breeding:[{
    gender: {
      type: String,
      minlength: 1,
      trim: true
    },
    maturity: {
      type: String,
      minlength: 1,
      trim: true
    },
    category: {
      type: String,
      minlength: 1,
      trim: true
    },
    breedType: {
      type: String,
      minlength: 1,
      trim: true
    },
    howMany: {
      type: Number,
      default: null
    },
    litersPerDay: {
      type: Number,
      default: null
    }
  }],
  breedingTechniques: [breedingTechniques]
  // breedingTechniques: [{
  //   breedingTechniques: [breedingTechniques]
  // }]
});



var Breeding = mongoose.model('Breeding', BreedingSchema);

module.exports = {Breeding}
