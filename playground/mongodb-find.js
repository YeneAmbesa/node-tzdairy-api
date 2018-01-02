//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TZDairyApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

// //Here we're quering data by the completed status
//   db.collection('Todos').find({completed: false}).toArray().then((docs) => {
//     console.log('Todos');
//     console.log(JSON.stringify(docs, undefined, 2));
//   }, (err) => {
//     console.log('Unable to fetch todos', err);
//   });

// //This is how we grab documents by objectID using the objectID constructor function
//   db.collection('Todos').find({
//     _id: new ObjectID('5a403a1df918ec0cd4929e1c')
//   }).toArray().then((docs) => {
//     console.log('Todos');
//     console.log(JSON.stringify(docs, undefined, 2));
//   }, (err) => {
//     console.log('Unable to fetch todos', err);
//   });

  // //Here we're quering data by the completed status
  //   db.collection('Todos').find().count().then((count) => {
  //     console.log(`Todos count: ${count}`);
  //   }, (err) => {
  //     console.log('Unable to fetch todos', err);
  //   });

// db.collection('Users').find({firstName: 'Thelonius'}).toArray().then((docs) => {
//   console.log(JSON.stringify(docs, undefined, 2));
// }, (err) => {
//   console.log('Unable to fetch users', err);
// });

db.collection('producers').find({"stakeholder.district": 'Hampton'}).toArray().then((docs) => {
  console.log(JSON.stringify(docs, undefined, 2));
}, (err) => {
  console.log('Unable to fetch users', err);
});





















  //db.close();
});
