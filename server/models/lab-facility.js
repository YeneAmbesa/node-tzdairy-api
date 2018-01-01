const mongoose = require('mongoose');



var LabFacilitySchema = new mongoose.Schema({
      labName:{
        type: String,
        minlength: 1,
        trim: true
    }

});


var LabFacility = mongoose.model('LabFacility', LabFacilitySchema);

module.exports = {LabFacility}
