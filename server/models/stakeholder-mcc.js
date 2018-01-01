const mongoose = require('mongoose');

var {Buyer} = require('./buyer');
var {CollectionCapacity} = require('./collection-capacity');
var {Employee} = require('./employee');
var {Equipment} = require('./equipment');
var {DistributorProducts} = require('./distributor-products');
var {LabFacility} = require('./lab-facility');
var {Market} = require('./market');
var {Owner} = require('./owner');
var {Partner} = require('./partner');
var {Power} = require('./power');
var {Stakeholder} = require('./stakeholder');



var MccSchema = new mongoose.Schema({

  buyer: [{type:mongoose.Schema.Types.Object, ref: 'Buyer'}],
  collectionCapacity: [{type:mongoose.Schema.Types.Object, ref: 'CollectionCapacity'}],
  employee: [{type:mongoose.Schema.Types.Object, ref: 'Employee'}],
  equipment: [{type:mongoose.Schema.Types.Object, ref: 'Equipment'}],
  labFacility: [{type:mongoose.Schema.Types.Object, ref: 'LabFacility'}],
  market: [{type:mongoose.Schema.Types.Object, ref: 'Market'}],
  milkSource: [{type:mongoose.Schema.Types.Object, ref: 'MilkSource'}],
  owner: [{type:mongoose.Schema.Types.Object, ref: 'Owner'}],
  partner: [{type:mongoose.Schema.Types.Object, ref: 'Partner'}],
  power: [{type:mongoose.Schema.Types.Object, ref: 'Power'}],
  stakeholder: [{type:mongoose.Schema.Types.Object, ref: 'Stakeholder'}],


});

var Mcc = mongoose.model('MCC', MccSchema);

module.exports = {Mcc};
