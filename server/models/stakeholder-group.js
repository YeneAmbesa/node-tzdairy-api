const mongoose = require('mongoose');

var {Member} = require('./member');
var {Partner} = require('./service');
var {Stakeholder} = require('./stakeholder');


var GroupSchema = new mongoose.Schema({

  member: [{type:mongoose.Schema.Types.Object, ref: 'Member'}],
  service: [{type:mongoose.Schema.Types.Object, ref: 'Service'}],
  stakeholder: [{type:mongoose.Schema.Types.Object, ref: 'Stakeholder'}]



});

var Group = mongoose.model('Group', GroupSchema);

module.exports = {Group};
