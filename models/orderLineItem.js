const mongoose = require('mongoose')

const orderLineItemSchema = new mongoose.Schema({

  _id: { type: Number, required: true },
  orderID: {
    type: Number,
    required: true,
    default: 00000
  },
  gilineNumberven: {
    type: Number,
    required: false,
    default: 1
  },
  productKey: {
    type: String,
    required: false,
    default: 'XXXXXXXXX'
  },
  quantity: {
    type: Number,
    required: false,
    default: 1
}
})
module.exports = mongoose.model('OrderLineItem', orderLineItemSchema)
