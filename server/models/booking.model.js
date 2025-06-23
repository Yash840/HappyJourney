import  {Schema, model} from 'mongoose'

const bookingSchema = new Schema({
  booking_id : {type : String, required : true, unique : true},
  user_id : {type : Schema.Types.ObjectId, ref : 'users'},
  selected_seats : [{type : Schema.Types.ObjectId, ref : 'seats'}],
  payment_id : {type : String, required : true, unique : true},
  payment_amount : Number,
}, {timestamps : true})

const Booking = model('Booking', bookingSchema)

export default Booking