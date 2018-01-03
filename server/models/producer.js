const mongoose = require('mongoose');


// var {Breeding} = require('./breeding');
// var {Employee} = require('./employee');
// var {Equipment} = require('./equipment');
// var {Feeding} = require('./feeding');
// var {Market} = require('./market');
// var {MilkProduction} = require('./milk-production');
// var {Partner} = require('./partner');
// var {Power} = require('./power');
// var {Stakeholder} = require('./stakeholder');
// var {Vaccine} = require('./vaccine');


var breedingTechniques = new mongoose.Schema({
    technique: String,
    percentUsed: Number
    // technique: {
    //   type: String,
    //   minlength: 1,
    //   trim: true
    // },
    // percentUsed: {
    //   type: Number,
    //   minlength: 1,
    //   trim: true
    // }
});


//Breeding are only displayed for farms, producers, heiffer farms
var BreedingSchema = new mongoose.Schema({
    gender: {
      type: String,
      minlength: 1,
      trim: true
    },
    maturity: {
      type: String,
      minlength: 1,
      trim: true
    },
    category: {
      type: String,
      minlength: 1,
      trim: true
    },
    breedType: {
      type: String,
      minlength: 1,
      trim: true
    },
    howMany: {
      type: Number,
      default: null
    },
    litersPerDay: {
      type: Number,
      default: null
    },
    breedingTechniques: [breedingTechniques]
});

var EmployeeSchema = new mongoose.Schema({
        femaleNo: {
            type: Number
        },
        maleNo: {
            type: Number
        },
        skilledInDairyNo: {
            type: Number
        },
        skilledInOtherNo: {
            type: Number
        },
        unskilledNo: {
            type: Number
        }
  });

var EquipmentSchema = new mongoose.Schema({
      equipName: {
        type: String,
        minlength: 1,
        trim: true
      },
      equipCapacity: {
        type: String,
        minlength: 1,
        trim: true
      },
      unitOfMeasure: {
        type: Number
      }
  });

  //Feeding only displayed for farms, producers, heiffer farms
  var FeedingSchema = new mongoose.Schema({
      mgmtSystem: {
        type: String,
        minlength: 1,
        trim: true
      },
      manager: {
        type: String,
        minlength: 1,
        trim: true
      },
      plotSize: {
        type: Number
      },
      feed: {
        type: String,
        minlength: 1,
        trim: true
      },
      supplier: {
        type: String,
        minlength: 1,
        trim: true
      },
      price: {
        type: Number,
        default: null
      }
  });

  //Market only displayed for farms, producers, heiffer farms
  var MarketSchema = new mongoose.Schema({
      marketName: {
        type: String,
        minlength: 1,
        trim: true
      },
      marketDistance: {
        type: Number
      }
  });
////////////////////////////////////////////////////////////////////////////////////////
  //Used in MilkProductionSchema
  var practiceSchema = new mongoose.Schema({
    name: String
  });
  //Used in MilkProductionSchema
  var utensilSchema = new mongoose.Schema({
    name: String
  });

  //Raw milk production only displayed for farms, producers, heiffer farms
  var MilkProductionSchema = new mongoose.Schema({
      year: {
        type: Number
      },
      season: {
        type: String,
        minlength: 1,
        trim: true
      },
      potential: {
        type: Number
      },
      actual: {
        type: Number
      },
      supplier: {
        type: String,
        minlength: 1,
        trim: true
      },
      price: {
        type: Number,
        default: null
      },
    milkingPractices: [practiceSchema],
    utensils: [utensilSchema]
  });

  //Partners are only displayed for farms, producers, heiffer farms
  var PartnerSchema = new mongoose.Schema({
      firstName: {
        type: String,
        minlength: 1,
        trim: true
      },
      lastName: {
        type: String,
        minlength: 1,
        trim: true
      },
      gender: {
        type: String,
        minlength: 1,
        trim: true
      },
      dependentAdultNo: {
        type: Number,
        default: null
      },
      dependentChildNo: {
        type: Number,
        default: null
      }
  });

  var StakeholderSchema = new mongoose.Schema({
                stakeholderType: {
                  type: String,
                  required: true,
                  minlength: 1,
                  trim: true
                },
                firstName: {
                  type: String,
                  required: true,
                  minlength: 1,
                  trim: true
                },
                lastName: {
                  type: String,
                  required: true,
                  minlength: 1,
                  trim: true
                },
                poBox: {
                  type: Number,
                  required: false,
                  minlength: 1,
                  trim: true
                },
                plotNo: {
                  type: Number,
                  required: false,
                  minlength: 1,
                  trim: true
                },
                street: {
                  type: String,
                  required: false,
                  minlength: 1,
                  trim: true
                },
                plusCode: {
                  type: String,
                  required: false,
                  minlength: 1,
                  trim: true
                },
                region: {
                  type: String,
                  required: true,
                  minlength: 1,
                  trim: true
                },
                district: {
                  type: String,
                  required: true,
                  minlength: 1,
                  trim: true
                },
                ward: {
                  type: String,
                  required: true,
                  minlength: 1,
                  trim: true
                },
                village: {
                  type: String,
                  required: true,
                  minlength: 1,
                  trim: true
                },
                regStatus: {
                  type: Boolean,
                  default: false
                },
                regAt: {
                  type: Number,
                  default: null
                },
                retentionValDate: {
                  type: Number,
                  default: null
                },
                retentionFee: {
                  type: Number,
                  default: null
                },
                retentionStatus: {
                  type: String,
                  minlength: 1,
                  trim: true
                }
              });



var PowerSchema = new mongoose.Schema({
      powerSource: {
        type: String,
        minlength: 1,
        trim: true
      }
});

//Used in VaccineSchema
var vaccines = new mongoose.Schema({
  name: String
});

var treatments = new mongoose.Schema({
  name: String
});

var prophylaxis = new mongoose.Schema({
  name: String
});


//Vaccines are only displayed for farms, producers, heiffer farms
var VaccineSchema = new mongoose.Schema({
    vaccines: [vaccines],
    treatments: [treatments],
    prophylaxis: [prophylaxis]
});

var ProducerSchema = new mongoose.Schema({

  //breeding: [{type:mongoose.Schema.Types.Object, ref: 'Breeding'}],
  breeding: [BreedingSchema],
  //employee: [{_id: true, type:mongoose.Schema.Types.Object, ref: {Employee}}],
  employee: [EmployeeSchema],
  //equipment: [{type:mongoose.Schema.Types.Object, ref: 'Equipment'}],
  equipment: [EquipmentSchema],
  //feeding: [{type:mongoose.Schema.Types.Object, ref: 'Feeding'}],
  feeding: [FeedingSchema],
  //market: [{type:mongoose.Schema.Types.Object, ref: 'Market'}],
  market: [MarketSchema],
  //milkProduction: [{type:mongoose.Schema.Types.Object, ref: 'Milk Production'}],
  milkProduction: [MilkProductionSchema],
  //partner: [{type:mongoose.Schema.Types.Object, ref: 'Partner'}],
  partner: [PartnerSchema],
  //power: [{type:mongoose.Schema.Types.ObjectId, ref: 'Power'}],
  power: [PowerSchema],
  //stakeholder: [{type:mongoose.Schema.Types.Object, ref: 'Stakeholder'}],
  stakeholder: [StakeholderSchema],
  //vaccine: [{type:mongoose.Schema.Types.Object, ref: 'Vaccine'}]
  vaccine: [VaccineSchema]


});

var Producer = mongoose.model('Producer', ProducerSchema);

module.exports = {Producer};
