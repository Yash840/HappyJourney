import {Schema, model} from 'mongoose'


const busSchema = new Schema({
  operator_id : {type : Schema.Types.ObjectId, ref : 'operators'},
  bus_reg_number : {type : String, unique : true, required : true},
  model : {type : String, required : true},
  amenities : [String],
  seat_layout : [String]
})

const Bus = model('Bus',busSchema);

export default Bus