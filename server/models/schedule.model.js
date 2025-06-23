import {Schema, model} from 'mongoose'


const scheduleSchema = new Schema({
  bus : {type : Schema.Types.ObjectId, ref : 'buses', unique : true},
  route_id : {type : Schema.Types.ObjectId, ref : 'routes', unique : true},
  departure_timings : [
    {
      boarding_point : {type : String, required : true},
      time : Schema.Types.Date,
    }
  ],
  arrival_timings : [
    {
      dropping_point : {type : String, required : true},
      time : Schema.Types.Date,
    }
  ],
  seat_map : [
    {type : Schema.Types.ObjectId, ref : 'seats'}
  ]
}, {collection : 'schedules'});

const Schedule = model('Schedule', scheduleSchema);

export default Schedule

