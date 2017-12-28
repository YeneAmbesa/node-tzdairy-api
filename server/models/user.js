var mongoose = require('mongoose');


//Here is a model for Users
var User = mongoose.model('User', {
  // firstName: {
  //   type: String,
  //   required: true,
  //   minlength: 1,
  //   trim: true
  // },
  // lastName: {
  //   type: String,
  //   required: true,
  //   minlength: 1,
  //   trim: true
  // },
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

module.exports = {User};
