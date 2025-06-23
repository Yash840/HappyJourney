import {Schema, model} from 'mongoose'

const routeSchema = new Schema({
  operator_id : {type : Schema.Types.ObjectId, required : true},
  source : {type : String, required : true},
  destination : {type : String, required : true},
  route : [String],
})

const Route = model('Route', routeSchema)

export default Route