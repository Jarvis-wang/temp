
/**
 * Author : 
 * Email : 
 */
const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({

  _id: { type: Number, required: true },
  email: {
    type: String,
    required: true,
    default: 'satish@gmail.com'
  },
  datePlaced: {
    type: String,
    required: false,
    default: '00-00-0000'
  },
  dateShipped: {
    type: String,
    required: false,
    default: '00-00-0000'
  },
  paymentType: {
    type: String,
    required: false,
    default: 'Cash' 
},
amountDue: {
  type: Number,
  required: false,
  default: 0 
},
paid: {
    type: Boolean,
    required: false,
    default: false
}
})
module.exports = mongoose.model('Order', OrderSchema)
