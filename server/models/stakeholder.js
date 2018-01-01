const mongoose = require('mongoose');

var {Employees} = require('./employee');
var {Partners} = require('./partner');
var {Breeding} = require('./breeding');
var {MilkProduction} = require('./milk-production');

//Here we create a model where we specify the attributes we want Stakeholders to have
//var Stakeholder = mongoose.model('Stakeholder', {
var StakeholderSchema = new mongoose.Schema({
      stakeholders:[{
              type: {
                type: String,
                required: true,
                minlength: 1,
                trim: true
              },
              firstName: {
                type: String,
                required: true,
                minlength: 1,
                trim: true
              },
              lastName: {
                type: String,
                required: true,
                minlength: 1,
                trim: true
              },
              poBox: {
                type: Number,
                required: false,
                minlength: 1,
                trim: true
              },
              plotNo: {
                type: Number,
                required: false,
                minlength: 1,
                trim: true
              },
              street: {
                type: String,
                required: false,
                minlength: 1,
                trim: true
              },
              plusCode: {
                type: String,
                required: false,
                minlength: 1,
                trim: true
              },
              region: {
                type: String,
                required: true,
                minlength: 1,
                trim: true
              },
              district: {
                type: String,
                required: true,
                minlength: 1,
                trim: true
              },
              ward: {
                type: String,
                required: true,
                minlength: 1,
                trim: true
              },
              village: {
                type: String,
                required: true,
                minlength: 1,
                trim: true
              },
              regStatus: {
                type: Boolean,
                default: false
              },
              regAt: {
                type: Number,
                default: null
              },
              retentionValDate: {
                type: Number,
                default: null
              },
              retentionFee: {
                type: Number,
                default: null
              },
              retentionStatus: {
                type: String,
                minlength: 1,
                trim: true
              }
  // partners: [{type:mongoose.Schema.Types.Array, ref: 'Partners'}],
  // employees: [{type:mongoose.Schema.Types.Array, ref: 'Employees'}],
  // breeding: [{type:mongoose.Schema.Types.Array, ref: 'Breeding'}],
  // vaccines: [{type:mongoose.Schema.Types.Array, ref: 'Vaccines'}],
  // feeding: [{type:mongoose.Schema.Types.Array, ref: 'Feeding'}],
  // market: [{type:mongoose.Schema.Types.Array, ref: 'Market'}],
  // power: [{type:mongoose.Schema.Types.Array, ref: 'Power'}],
  // milkProduction: [{type:mongoose.Schema.Types.Array, ref: 'Milk Production'}]



  // regFee: {
  //   type: Number,
  //   default: null
  // }
  // regFeeStatus: {
  //   type: Number,
  //   default: null
  // }
}]
});
var Stakeholder = mongoose.model('Stakeholders', StakeholderSchema);
module.exports = {Stakeholder};
