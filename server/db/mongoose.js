var mongoose = require('mongoose');

//Here we configure mongoose and connect it to the mongodb
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TZDairyApp')

module.exports = {mongoose};
