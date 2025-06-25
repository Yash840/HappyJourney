import dotenv from 'dotenv';
import mongoose from 'mongoose';
import connectDB from './config/db.js';
import Bus from './models/bus.model.js';
import Route from './models/route.model.js';
import Seat from './models/seat.model.js';
import Schedule from './models/schedule.model.js';
import Booking from './models/booking.model.js';
import Operator from './models/operator.model.js';
import { dummyOperators } from './models/operator.model.js';

dotenv.config();

await connectDB();

// Clear existing data
async function clearDatabase() {
  console.log('Clearing existing data...');
  await Booking.deleteMany({});
  await Seat.deleteMany({});
  await Schedule.deleteMany({});
  await Bus.deleteMany({});
  await Route.deleteMany({});
  await Operator.deleteMany({});
  console.log('Database cleared');
}

// Maharashtra cities for routes
const maharashtraCities = [
  'Mumbai', 'Pune', 'Nagpur', 'Thane', 'Nashik', 
  'Aurangabad', 'Solapur', 'Kolhapur', 'Amravati', 'Nanded',
  'Sangli', 'Latur', 'Dhule', 'Ahmednagar', 'Akola',
  'Jalgaon', 'Chandrapur', 'Parbhani', 'Jalna', 'Satara'
];

// Bus amenities options
const amenitiesOptions = [
  ['A/c', 'WiFi', 'USB Charging', 'Blanket', 'Water Bottle'],
  ['A/c', 'WiFi', 'USB Charging', 'Personal Screen', 'Snacks'],
  ['A/c', 'WiFi', 'USB Charging', 'Water Bottle'],
  ['A/c', 'WiFi', 'Blanket'],
  ['A/c', 'USB Charging', 'Water Bottle'],
  ['A/c', 'WiFi']
];

// Bus models
const busModels = ['Volvo 9400', 'Scania Metrolink', 'Mercedes Benz', 'Tata Marcopolo', 'Ashok Leyland'];

// Function to generate a random time
function getRandomTime(start = 17, end = 23) {
  const hour = Math.floor(Math.random() * (end - start + 1)) + start;
  const minutes = [0, 15, 30, 45][Math.floor(Math.random() * 4)];
  return `${hour.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}

// Function to get random future date (0-10 days from now)
function getRandomFutureDate() {
  const now = new Date();
  const future = new Date();
  future.setDate(now.getDate() + Math.floor(Math.random() * 10));
  return future;
}

// Function to get random item from an array
function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Function to get random items from an array
function getRandomItems(array, count) {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Generate routes between cities
function generateRoutes(count) {
  const routes = [];
  for (let i = 0; i < count; i++) {
    // Get two different random cities
    const [source, destination] = getRandomItems(maharashtraCities, 2);
    
    // Get intermediate stops (between 0 and 3)
    const intermediateStopsCount = Math.floor(Math.random() * 4);
    const availableCities = maharashtraCities.filter(city => city !== source && city !== destination);
    const stops = getRandomItems(availableCities, intermediateStopsCount);
    
    routes.push({
      source,
      destination,
      route: [source, ...stops, destination]
    });
  }
  return routes;
}

// Generate bus registration numbers
function generateBusRegNumber(index) {
  const districts = ['MH01', 'MH02', 'MH03', 'MH04', 'MH05', 'MH06', 'MH07', 'MH08'];
  const district = districts[Math.floor(Math.random() * districts.length)];
  const letters = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
  const letter1 = letters[Math.floor(Math.random() * letters.length)];
  const letter2 = letters[Math.floor(Math.random() * letters.length)];
  const number = (1000 + index).toString().substring(1);
  
  return `${district} ${letter1}${letter2} ${number}`;
}

// Generate seat layout for a bus
function generateSeatLayout() {
  const layout = [];
  // Standard 2+1 sleeper layout with 12 rows
  for (let row = 1; row <= 12; row++) {
    // Add single seat on left (window)
    layout.push(`${row}A`);
    // Add double seats on right
    layout.push(`${row}B`);
    layout.push(`${row}C`);
  }
  return layout;
}

// Generate seats for a schedule
async function generateSeats(scheduleId, seatLayout) {
  const seats = [];
  const basePrice = 500 + Math.floor(Math.random() * 1500);
  
  for (let i = 0; i < seatLayout.length; i++) {
    const seatNumber = seatLayout[i];
    const isSingle = seatNumber.endsWith('A'); // A seats are single
    const isWindow = seatNumber.endsWith('A') || seatNumber.endsWith('C'); // A and C are window seats
    
    // Randomize fare slightly based on position
    const fareFactor = isSingle ? 1.2 : 1; // Single seats cost more
    const windowFactor = isWindow ? 1.1 : 1; // Window seats cost more
    
    const seat = new Seat({
      schedule_id: scheduleId,
      seat_number: seatNumber,
      seat_index: i,
      position: isSingle ? 'L' : 'R',
      window: isWindow,
      fare: Math.round(basePrice * fareFactor * windowFactor),
      isBooked: Math.random() < 0.3, // 30% chance of being booked
      booking_details: []
    });
    
    const savedSeat = await seat.save();
    seats.push(savedSeat._id);
  }
  
  return seats;
}

// Main seeding function
async function seedDatabase() {
  try {
    await clearDatabase();
    
    console.log('Starting to seed database...');
    
    // Create operators
    console.log('Creating operators...');
    const operators = [];
    
    for (const opData of dummyOperators) {
      const operator = new Operator(opData);
      const savedOperator = await operator.save();
      operators.push(savedOperator);
    }
    
    console.log(`Created ${operators.length} operators`);
    
    // Create buses, routes, and schedules for each operator
    for (const operator of operators) {
      console.log(`Creating data for operator: ${operator.name}...`);
      
      // Create 4 buses for this operator
      const buses = [];
      for (let i = 0; i < 4; i++) {
        const bus = new Bus({
          operator_id: operator._id,
          bus_reg_number: generateBusRegNumber(operators.indexOf(operator) * 10 + i),
          model: getRandomItem(busModels),
          amenities: getRandomItem(amenitiesOptions),
          seat_layout: generateSeatLayout()
        });
        
        const savedBus = await bus.save();
        buses.push(savedBus);
        
        // Add bus to operator's fleet
        operator.fleet.push(savedBus._id);
      }
      
      // Create 4 routes for this operator
      const routeOptions = generateRoutes(4);
      const routes = [];
      
      for (let i = 0; i < 4; i++) {
        const route = new Route({
          operator_id: operator._id,
          source: routeOptions[i].source,
          destination: routeOptions[i].destination,
          route: routeOptions[i].route
        });
        
        const savedRoute = await route.save();
        routes.push(savedRoute);
        
        // Add route to operator's routes
        operator.routes.push(savedRoute._id);
      }
      
      // Save operator with updated fleet and routes
      await operator.save();
      
      // Create a schedule for each combination of bus and route
      const schedules = [];
      
      for (let i = 0; i < buses.length; i++) {
        const bus = buses[i];
        const route = routes[i % routes.length]; // Match buses with routes cyclically
        
        // Create departure and arrival timings
        const departureTime = new Date(getRandomFutureDate());
        departureTime.setHours(parseInt(getRandomTime(17, 22).split(':')[0]), 
                              parseInt(getRandomTime(17, 22).split(':')[1]), 0, 0);
        
        // Journey takes 6-12 hours
        const journeyHours = 6 + Math.floor(Math.random() * 7);
        const arrivalTime = new Date(departureTime);
        arrivalTime.setHours(arrivalTime.getHours() + journeyHours);
        
        // Generate random date between today and 30 days from now
        const today = new Date();
        const futureDate = new Date();
        futureDate.setDate(today.getDate() + 30);
        const randomTimestamp = today.getTime() + Math.random() * (futureDate.getTime() - today.getTime());
        const randomDate = new Date(randomTimestamp);
        const scheduleDate = `${randomDate.getFullYear()}-${String(randomDate.getMonth() + 1).padStart(2, '0')}-${String(randomDate.getDate()).padStart(2, '0')}`;
        
        // Generate random base price between 500 and 2500
        const basePrice = 500 + Math.floor(Math.random() * 2000);
        
        // Create schedule
        const schedule = new Schedule({
          bus: bus._id,
          route_id: route._id,
          schedule_date: scheduleDate,
          base_price: basePrice,
          departure_timings: [{
            boarding_point: route.source,
            time: departureTime
          }],
          arrival_timings: [{
            dropping_point: route.destination,
            time: arrivalTime
          }],
          seat_map: [] // Will be filled after creating seats
        });
        
        const savedSchedule = await schedule.save();
        
        // Create seats for this schedule
        console.log(`Creating seats for bus ${bus.bus_reg_number}...`);
        const seatIds = await generateSeats(savedSchedule._id, bus.seat_layout);
        
        // Update schedule with seat map
        savedSchedule.seat_map = seatIds;
        await savedSchedule.save();
        
        schedules.push(savedSchedule);
        
        // Add schedule to operator's schedules
        operator.schedules.push(savedSchedule._id);
        await operator.save();
      }
      
      console.log(`Created ${buses.length} buses, ${routes.length} routes, and ${schedules.length} schedules for ${operator.name}`);
    }
    
    console.log('Database seeding completed successfully!');
    
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // mongoose.connection.close();
    console.log('Database connection maintained. Close manually if needed.');
  }
}

// Run the seeding function
seedDatabase();

