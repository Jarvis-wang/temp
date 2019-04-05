const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({

  _id: { type: Number, required: true },
  productKey: {
    type: String,
    required: true,
    default: 'xxxxxxxxxxxxxx'
  },
  description: {
    type: String,
    required: false,
    default: 'DEMO'
  },
  unitPrice: {
    type: Number,
    required: false,
    default: 0.00
  }
})
module.exports = mongoose.model('Product', ProductSchema)
