const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Stakeholder} = require('./../server/models/stakeholder');
const {User} = require('./../server/models/user');

// // This code removes all
// Stakeholder.remove({}).then((result) => {
//   console.log(result);
// });

// Find one and remove finds the first document and removes it and returns the document
// Lets you query by more than just the id
//Stakeholder.findOneAndRemove({_id: '5a46abb88ae32a3bc85a8036'}).then((todo) => {
// })

//Finds one document by id and returns the doc
Stakeholder.findByIdAndRemove('5a46abb88ae32a3bc85a8036').then((stakeholder) => {
  console.log(stakeholder);
});
