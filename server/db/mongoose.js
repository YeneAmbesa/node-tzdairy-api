var mongoose = require('mongoose');

//Here we configure mongoose and connect it to the mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TZDairyApp')

module.exports = {mongoose};
