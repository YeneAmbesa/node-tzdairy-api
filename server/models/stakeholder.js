var mongoose = require('mongoose');

//Here we create a model where we specify the attributes we want Stakeholders to have
var Stakeholder = mongoose.model('Stakeholder', {
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
  }
  // completed: {
  //   type: Boolean,
  //   default: false
  // },
  // completedAt: {
  //   type: Number,
  //   default: null
  // }
});

module.exports = {Stakeholder};
