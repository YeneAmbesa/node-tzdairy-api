const mongoose = require('mongoose');

var {Buyer} = require('./buyer');
var {CollectionCapacity} = require('./collection-capacity');
var {Employee} = require('./employee');
var {Equipment} = require('./equipment');
var {DistributorProducts} = require('./distributor-products');
var {Market} = require('./market');
var {Partner} = require('./partner');
var {Power} = require('./power');
var {Stakeholder} = require('./stakeholder');



var TraderSchema = new mongoose.Schema({

  buyer: [{type:mongoose.Schema.Types.Object, ref: 'Buyer'}],
  collectionCapacity: [{type:mongoose.Schema.Types.Object, ref: 'CollectionCapacity'}],
  employee: [{type:mongoose.Schema.Types.Object, ref: 'Employee'}],
  equipment: [{type:mongoose.Schema.Types.Object, ref: 'Equipment'}],
  market: [{type:mongoose.Schema.Types.Object, ref: 'Market'}],
  milkSource: [{type:mongoose.Schema.Types.Object, ref: 'MilkSource'}],
  partner: [{type:mongoose.Schema.Types.Object, ref: 'Partner'}],
  power: [{type:mongoose.Schema.Types.Object, ref: 'Power'}],
  stakeholder: [{type:mongoose.Schema.Types.Object, ref: 'Stakeholder'}],


});

var Trader = mongoose.model('Trader', TraderSchema);

module.exports = {Trader};
