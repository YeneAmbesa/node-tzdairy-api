const mongoose = require('mongoose');



var ServiceSchema = new mongoose.Schema({
      //services:[{
        serviceName: {
          type: Array,
          minlength: 1,
          trim: true
      }
    //}]
  });

var Service = mongoose.model('Service', ServiceSchema);

module.exports = {Service}
