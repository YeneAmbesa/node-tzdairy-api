//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

// //deleteMany
// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
//   console.log(result);
// });
//
// //deleteOne
// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
//   console.log(result);
// });
//
// //findOneAndDelete allows you to delete an individual item and returns their values
// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//   console.log(result);
// });

// db.collection('Users').deleteMany({firstName: 'Roman'}).then((result) => {
//   console.log(result);
// });

db.collection('Users').findOneAndDelete({
  _id: new ObjectID('5a405435c6323223c0fc63dd')
}).then((result) => {
  console.log(result);
});

  //db.close();
});
