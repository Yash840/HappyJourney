import dotenv from 'dotenv';
import mongoose from 'mongoose';
import connectDB from './config/db.js';
import Bus from './models/bus.model.js';
import Route from './models/route.model.js';
import Seat from './models/seat.model.js';
import Schedule from './models/schedule.model.js';
import Booking from './models/booking.model.js';

dotenv.config();

await connectDB();

async function seed() {
  // Create a route
  const route = await Route.create({
    operator_id: new mongoose.Types.ObjectId(),
    source: 'CityA',
    destination: 'CityB',
    route: ['Stop1', 'Stop2', 'Stop3']
  });

  // Create a bus
  const bus = await Bus.create({
    operator_id: route.operator_id,
    bus_reg_number: 'MH12AB1234',
    model: 'Volvo',
    amenities: ['A/c', 'WiFi'],
    seat_layout: ['1A', '1B', '2A', '2B']
  });

  // Create a schedule
  const schedule = await Schedule.create({
    bus: bus._id,
    route_id: route._id,
    departure_timings: [{ boarding_point: 'Stop1', time: new Date() }],
    arrival_timings: [{ dropping_point: 'Stop3', time: new Date(Date.now() + 3600000) }],
    seat_map: [] // Will fill after creating seats
  });

  // Create seats
  const seat1 = await Seat.create({
    schedule_id: schedule._id,
    seat_number: '1A',
    seat_index: 0,
    position: 'L',
    window: true,
    fare: 500,
    isBooked: false,
    booking_details: []
  });
  const seat2 = await Seat.create({
    schedule_id: schedule._id,
    seat_number: '1B',
    seat_index: 1,
    position: 'R',
    window: false,
    fare: 500,
    isBooked: false,
    booking_details: []
  });

  // Update schedule with seat_map
  schedule.seat_map = [seat1._id, seat2._id];
  await schedule.save();

  // Create a booking
  await Booking.create({
    booking_id: 'BK001',
    user_id: new mongoose.Types.ObjectId(),
    selected_seats: [seat1._id],
    payment_id: 'PAY001',
    payment_amount: 500
  });

  console.log('Sample data inserted!');
  process.exit();
}

seed().catch(e => { console.error(e); process.exit(1); });
