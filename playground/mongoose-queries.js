const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5a4281a276876215e4855a7711';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// //This code lets you pass in an id as a string
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// //This code will return the first result, so good if you want to find one document by something other than id
// Todo.findOne({
// _id: id
// }).then((todo) => {
// console.log('Todos', todo);
// });

// //This is useful if you want to find one document by ID
// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('ID not found');
//   }
// console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));


var id = '5a42a394441cc20dc8fe0d91';

User.findById(id).then((user) => {
  if (!user) {
    return console.log('ID not found');
  }
  console.log('User By Id', user);
}).catch((e) => console.log(e));
