const mongoose = require('mongoose');

var {Employee} = require('./employee');
var {InputSupplierProducts} = require('./input-supplier-products');
var {Market} = require('./market');
var {Partner} = require('./partner');
var {Stakeholder} = require('./stakeholder');
var {SupplierCapacity} = require('./supplier-capacity');


var InputSupplierSchema = new mongoose.Schema({

  employee: [{type:mongoose.Schema.Types.Object, ref: 'Employee'}],
  inputSupplierProducts: [{type:mongoose.Schema.Types.Object, ref: 'InputSupplierProducts'}],
  market: [{type:mongoose.Schema.Types.Object, ref: 'Market'}],
  partner: [{type:mongoose.Schema.Types.Object, ref: 'Partner'}],
  stakeholder: [{type:mongoose.Schema.Types.Object, ref: 'Stakeholder'}],
  supplierCapacity: [{type:mongoose.Schema.Types.Object, ref: 'SupplierCapacity'}],


});

var InputSupplier = mongoose.model('InputSupplier', InputSupplierSchema);

module.exports = {InputSupplier};
