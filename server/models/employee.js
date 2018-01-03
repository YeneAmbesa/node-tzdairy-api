const mongoose = require('mongoose');



//Employees object should only be displayed to Farms, Producers, Heiffer Farms
var EmployeeSchema = new mongoose.Schema({

      employees:[{
        femaleNo: {
            type: Number,
            minlength: 6
        },
        maleNo: {
            type: Number,
            default: null
        },
        skilledInDairyNo: {
            type: Number
        },
        skilledInOtherNo: {
            type: Number
        },
        unskilledNo: {
            type: Number
        }
    }]
  });

var Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = {Employee}
