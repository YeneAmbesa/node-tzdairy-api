const mongoose = require('mongoose');



var MemberSchema = new mongoose.Schema({
      members:[{
        memberType: {
            type: String
        },
        femaleNo: {
            type: Number
        },
        maleNo: {
            type: Number
        }
    }]
  });

var Member = mongoose.model('Member', MemberSchema);

module.exports = {Member}
