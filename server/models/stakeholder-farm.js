const mongoose = require('mongoose');


var {Breeding} = require('./breeding');
var {Employee} = require('./employee');
var {Equipment} = require('./equipment');
var {Feeding} = require('./feeding');
var {Market} = require('./market');
var {MilkProduction} = require('./milk-production');
var {Partner} = require('./partner');
var {Power} = require('./power');
var {Stakeholder} = require('./stakeholder');
var {Vaccine} = require('./vaccine');



var FarmSchema = new mongoose.Schema({

  breeding: [{type:mongoose.Schema.Types.Object, ref: 'Breeding'}],
  employee: [{type:mongoose.Schema.Types.Object, ref: 'Employee'}],
  equipment: [{type:mongoose.Schema.Types.Object, ref: 'Equipment'}],
  feeding: [{type:mongoose.Schema.Types.Object, ref: 'Feeding'}],
  market: [{type:mongoose.Schema.Types.Object, ref: 'Market'}],
  milkProduction: [{type:mongoose.Schema.Types.Object, ref: 'Milk Production'}],
  partner: [{type:mongoose.Schema.Types.Object, ref: 'Partner'}],
  power: [{type:mongoose.Schema.Types.Object, ref: 'Power'}],
  stakeholder: [{type:mongoose.Schema.Types.Object, ref: 'Stakeholder'}],
  vaccine: [{type:mongoose.Schema.Types.Object, ref: 'Vaccine'}]


});

var Farm = mongoose.model('Farm', FarmSchema);

module.exports = {Farm};
