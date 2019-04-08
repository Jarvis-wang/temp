

const mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  orderID: { type: Number, required: true, unique: true, default: 555 },
  email: { type: String, required: true },
  dateShipped: { type: Date, required: false },
  productID: { type: Number, required: true },
   
})

module.exports = mongoose.model('Transaction', TransactionSchema)