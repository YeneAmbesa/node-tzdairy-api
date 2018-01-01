const mongoose = require('mongoose');

var {Buyer} = require('./buyer');
var {Employee} = require('./employee');
var {Equipment} = require('./equipment');
var {DistributorProducts} = require('./distributor-products');
var {Market} = require('./market');
var {Partner} = require('./partner');
var {Power} = require('./power');
var {Stakeholder} = require('./stakeholder');
var {SupplierCapacity} = require('./supplier-capacity');


var DistributorSchema = new mongoose.Schema({

  buyer: [{type:mongoose.Schema.Types.Object, ref: 'Buyer'}],
  employee: [{type:mongoose.Schema.Types.Object, ref: 'Employee'}],
  equipment: [{type:mongoose.Schema.Types.Object, ref: 'Equipment'}],
  distributorProducts: [{type:mongoose.Schema.Types.Object, ref: 'DistributorProducts'}],
  market: [{type:mongoose.Schema.Types.Object, ref: 'Market'}],
  partner: [{type:mongoose.Schema.Types.Object, ref: 'Partner'}],
  power: [{type:mongoose.Schema.Types.Object, ref: 'Power'}],
  stakeholder: [{type:mongoose.Schema.Types.Object, ref: 'Stakeholder'}],
  supplierCapacity: [{type:mongoose.Schema.Types.Object, ref: 'SupplierCapacity'}]

});

var Distributor = mongoose.model('Distributor', DistributorSchema);

module.exports = {Distributor};
