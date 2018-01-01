const mongoose = require('mongoose');



var OwnerSchema = new mongoose.Schema({
        ownerName: {
            type: String
        },
        ownerType: {
            type: String
        }
  });

var Owner = mongoose.model('Owner', OwnerSchema);

module.exports = {Owner}
