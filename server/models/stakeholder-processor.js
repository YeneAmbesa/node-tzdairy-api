const mongoose = require('mongoose');


var {Employee} = require('./employee');
var {Equipment} = require('./equipment');
var {LabFacility} = require('./lab-facility');
var {Market} = require('./market');
var {MilkSource} = require('./milk-source');
var {Partner} = require('./partner');
var {Power} = require('./power');
var {ProcessorCapacity} = require('./processor-capacity');
var {ProcessorProducts} = require('./processor-products');
var {Stakeholder} = require('./stakeholder');



var ProcessorSchema = new mongoose.Schema({


  employee: [{type:mongoose.Schema.Types.Object, ref: 'Employee'}],
  equipment: [{type:mongoose.Schema.Types.Object, ref: 'Equipment'}],
  labFacility: [{type:mongoose.Schema.Types.Object, ref: 'LabFacility'}],
  market: [{type:mongoose.Schema.Types.Object, ref: 'Market'}],
  milkSource: [{type:mongoose.Schema.Types.Object, ref: 'MilkSource'}],
  partner: [{type:mongoose.Schema.Types.Object, ref: 'Partner'}],
  power: [{type:mongoose.Schema.Types.Object, ref: 'Power'}],
  processorCapacity: [{type:mongoose.Schema.Types.Object, ref: 'ProcessorCapacity'}],
  processorProducts: [{type:mongoose.Schema.Types.Object, ref: 'ProcessorProducts'}],
  stakeholder: [{type:mongoose.Schema.Types.Object, ref: 'Stakeholder'}]



});

var Processor = mongoose.model('Processor', ProcessorSchema);

module.exports = {Processor};
