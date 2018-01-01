const mongoose = require('mongoose');

var {MilkSource} = require('./milk-source');
var {CarrierCapacity} = require('./carrier-capacity');
var {CarrierProducts} = require('./carrier-products');
var {Stakeholder} = require('./stakeholder');


var CarrierSchema = new mongoose.Schema({

  milkSource: [{type:mongoose.Schema.Types.Object, ref: 'MilkSource'}],
  carrierCapacity: [{type:mongoose.Schema.Types.Object, ref: 'CarrierCapacity'}],
  carrierProducts: [{type:mongoose.Schema.Types.Object, ref: 'CarrierProducts'}],
  stakeholder: [{type:mongoose.Schema.Types.Object, ref: 'Stakeholder'}]

});

var Carrier = mongoose.model('Carrier', CarrierSchema);

module.exports = {Carrier};
