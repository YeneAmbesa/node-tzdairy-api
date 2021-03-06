// var env = process.env.NODE_ENV;

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Stakeholder} = require('./models/stakeholder');
var {User} = require('./models/user');

var {Employees} = require('./models/employee');
var {Partners} = require('./models/partner');
var {Producer} = require('./models/producer');

var app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());

//This code posts a new stakeholder
app.post('/stakeholders', (req, res) => {
  var stakeholder = new Stakeholder ({
    type: req.body.type,
	  firstName: req.body.firstName,
	  lastName: req.body.lastName,
	  poBox: req.body.poBox,
	  plotNo: req.body.plotNo,
    street: req.body.street,
	  plusCode: req.body.plusCode,
	  region: req.body.region,
	  district: req.body.district,
	  ward: req.body.ward,
	  village: req.body.village,
    regStatus: req.body.regStatus,
    regAt: req.body.regAt,
    retentionValDate: req.body.retentionValDate,
    retentionFee: req.body.retentionFee,
    retentionStatus: req.body.retentionStatus,
    // employees: req.body.employees,
    // partners: req.body.partners,
    // breeding: req.body.breeding,
    // vaccines: req.body.vaccines,
    // feeding: req.body.feeding,
    // market: req.body.feeding,
    // power: req.body.power,
    // milkProduction: req.body.milkProduction,
  });

  stakeholder.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

//This code posts a new producer
app.post('/producers', (req, res) => {
  var producer = new Producer ({
    breeding: req.body.breeding,
    employee: req.body.employee,
    equipment: req.body.equipment,
    feeding: req.body.feeding,
    market: req.body.feeding,
    milkProduction: req.body.milkProduction,
    power: req.body.power,
    partner: req.body.partner,
    stakeholder: req.body.stakeholder,
    vaccine: req.body.vaccine
  });

  producer.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

//This code gets all stakeholders
app.get('/stakeholders', (req, res) => {
  Stakeholder.find().then((stakeholders) => {
    res.send({stakeholders});
  }, (e) => {
    res.status(400).send(e);
  });
});

//This code gets all producers
app.get('/producers', (req, res) => {
  Producer.find().then((producers) => {
    res.send({producers});
  }, (e) => {
    res.status(400).send(e);
  });
});


//GET /stakeholders/1234123
app.get('/stakeholders/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  };
  Stakeholder.findById(id).then((stakeholder) => {
     if (!stakeholder) {
       return res.status(404).send();
     }
   res.send({stakeholder});
 }).catch((e) => res.status(400).send());
});

//GET /producers/1234123
app.get('/producers/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  };
  Producer.findById(id).then((producer) => {
     if (!producer) {
       return res.status(404).send();
     }
   res.send({producer});
 }).catch((e) => res.status(400).send());
});



//Finds one document by id and removes it and then returns the doc
app.delete('/stakeholders/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  };
  Stakeholder.findByIdAndRemove(id).then((stakeholder) => {
    if (!stakeholder) {
      return res.status(404).send();
    }
  res.send({stakeholder});
 }).catch((e) => res.status(400).send());
});

//Finds one document by id and removes it and then returns the doc
app.delete('/producers/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  };
  Producer.findByIdAndRemove(id).then((producer) => {
    if (!producer) {
      return res.status(404).send();
    }
  res.send({producer});
 }).catch((e) => res.status(400).send());
});

// //This code allows us to update items
// app.patch('/stakeholders/:id', (req, res) => {
//   var id = req.params.id;
//   var body = _.pick(req.body, ['type', 'firstName', 'lastName', 'poBox', 'plusCode', 'region', 'district', 'ward', 'village', 'regStatus', 'retentionValDate', 'retentionFee', 'retentionStatus']);
//
//   if (!ObjectID.isValid(id)) {
//     return res.status(404).send();
//   };

  //This code allows us to update items
  app.patch('/producers/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['breeding', 'employee', 'equipment', 'feeding', 'market', 'milkProduction', 'partner', 'power', 'stakeholder', 'vaccine']);

    if (!ObjectID.isValid(id)) {
      return res.status(404).send();
    };

//this section checks registration status and stakeholder is registered sets regAt
  if (_.isBoolean(body.regStatus) && body.regStatus) {
    //if completed is boolean and it's true
    body.regAt = new Date().getTime();
  } else {
    //if completed is not boolean or it's not true
    body.regStatus = false;
    body.regAt = null;
  };

//This section checks if retentionStatus is current
  if (body.retentionValDate > Date.now()) {
    body.retentionStatus = "Current";
  } else {
    body.retentionStatus = "Past Due";
  };


  //This section sets object with the key value pairs we generate in body and returns the updated doc setting new to true
  Producer.findByIdAndUpdate(id, {$set: body}, {new: true}).then((producer) => {
    if (!producer) {
      return res.status(404).send();
    }

    res.send({producer});
  }).catch((e) => {
    res.status(400).send();
  })

});

//This code creates a new User
// app.post('/users', (req, res) => {
//   var body = _.pick(req.body, ['email', 'password']);
//   var user = new User(body);
//
//
//   user.save().then(() => {
//     return user.generateAuthToken();
//   }).then((token) => {
//     res.header('x-auth', token).send(user);
//   }).catch((e) => {
//     res.status(400).send(e);
//   })
// });
//////////////////////
// POST /users
app.post('/users', (req, res) => {
  var body = _.pick(req.body, ['email', 'password']);
  var user = new User(body);

  user.save().then(() => {
    return user.generateAuthToken();
  }).then((token) => {
    res.header('x-auth', token).send(user);
  }).catch((e) => {
    res.status(400).send(e);
  })
});


/////////////////////////
app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};
