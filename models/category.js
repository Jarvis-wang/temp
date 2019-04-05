/**
 * Author : satish gadge
 * Email : s534929@nwmissouri.edu
 */

const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema({

  _id: { type: Number, required: true },
  email: {
    type: String,
    required: true,
    default: 'satish@gmail.com'
  },
  given: {
    type: String,
    required: false,
    default: 'Satish'
  },
  family: {
    type: String,
    required: false,
    default: 'Gadge'
  },
street1: {
    type: String,
    required: false,
    default: '800 University Drive' 
},
street2: {
  type: String,
  required: false,
  default: 'Street 2' 
},
city: {
      type: String,
      required: false,
      default: 'Maryville'
},
state: {
      type: String,
      required: false,
      default: 'MO'
},
zip: {
    type: Number,
    required: false,
    default: 64468
},
country: {
    type: String,
    required: false,
    default: 'USA'
}
})
module.exports = mongoose.model('Category', CategorySchema)
