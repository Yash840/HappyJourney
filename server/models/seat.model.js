import {Schema, model} from 'mongoose'


const seatSchema = new Schema({
  schedule_id : {type : Schema.Types.ObjectId, required : true},
  seat_number : {type : String, required : true},
  seat_index : {type : Number, required : true},
  position : {type : String, default : 'L'},
  window : {type : Boolean, default : false},
  fare : Number,
  isBooked : {type : Boolean, default : false},
  booking_details  :[
    {type : Schema.Types.ObjectId, ref : 'bookings'}
  ]
})

const Seat = model('Seat', seatSchema)

export default Seat