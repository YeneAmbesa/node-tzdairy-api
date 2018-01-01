const mongoose = require('mongoose');

var vaccines = new mongoose.Schema({
  name: String
});

var treatments = new mongoose.Schema({
  name: String
});

var prophylaxis = new mongoose.Schema({
  name: String
});


//Vaccines are only displayed for farms, producers, heiffer farms
var VaccineSchema = new mongoose.Schema({
  vaccine:[{
    vaccines: [vaccines],
    treatments: [treatments],
    prophylaxis: [prophylaxis]
  }]
});


var Vaccines = mongoose.model('Vaccines', VaccineSchema);

module.exports = {Vaccines}
