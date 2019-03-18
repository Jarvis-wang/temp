/** 
*  Order model
*  Describes the characteristics of each attribute in an order resource.
*
* @author Denise Case <dcase@nwmissouri.edu>
*
*/

// see <https://mongoosejs.com/> for more information
const mongoose = require('mongoose')

const account = new mongoose.Schema({
  _id: { type: Number, required: true },
  email: { type: String, required: true },
  given: { type: String, required: true, default: 'Given' },
  family: { type: String, required: true, default: 'Family' },
  password:{type:String,required: true, default:"000000"}
})

module.exports = mongoose.model('Order', OrderSchema)