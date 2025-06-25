import Bus from "../models/bus.model.js";
import Route from "../models/route.model.js" 
import Schedule from "../models/schedule.model.js"
import Seat from "../models/seat.model.js"
import Operator from "../models/operator.model.js"

export const fetchRouteById = async (id) => {
  try {
    const fetchedRoute = await Route.findById(id, "-_id").exec();
    return fetchedRoute;
  } catch (err) {
    console.log("Error occurred during finding Route by ID:", err);
    return null;
  }
}

export const fetchRoutesByEndPoints = async (source, destination) => {
  // Function to return an array of Id's of routes, matching given src and dest
  // Used in methods to find routes for fetching available schedules.
  try {
    const fetchedRoutes = await Route.find({source: source, destination: destination}).exec();
    console.log(fetchedRoutes)
    return fetchedRoutes;
  } catch (err) {
    console.log("Error occurred during finding Routes:", err);
    return []; 
  }
}

export const fetchScheduleById = async (id) => {
  try {
    const fetchedSchedule = await Schedule.findById(id).select("-_id").exec();
    return fetchedSchedule;
  } catch (err) {
    console.log("Error occurred during finding Schedule by ID:", err);
    return null;
  }
}

export const fetchBusById = async (id) => {
  try {
    const fetchedBus = await Bus.findById(id).select("-operator_id").exec();
    return fetchedBus;
  } catch (err) {
    console.log("Error occurred during finding Bus by ID:", err);
    return null;
  }
}

export const fetchOperatorByBus = async (busId) => {
  try {
    const fetchedOperator = await Operator.findOne({fleet : {$in : [busId]}}).exec();
    return fetchedOperator;
  } catch (err) {
    console.log("Error occurred during finding Operator by Bus:", err);
    return null;
  }
}

export const getAvailableSeatsCount = async (scheduleId) => {
  // Function to count the available seats in bus, categorised in to single and double
  // This is not final implementation, because it is very loosely implemented
  // Only works for standard 2+1 sleeper bus, generally used in India
  // It is bus layout specific due to use of seat indices, which represents single and double seats at fixed indices
  // Definitely, for other layout buses, implementation of this function will change in future or other method will be created.
  try {
    const allSingleSeats = await Seat.countDocuments({schedule_id : scheduleId, seat_index : {$in : [0,3,6,9,12,15]}, isBooked : false}).exec();

    const allDoubleSeats = await Seat.countDocuments({schedule_id : scheduleId, seat_index : {$nin : [0,3,6,9,12,15]}, isBooked : false}).exec();

    return {
      single : allSingleSeats,
      double : allDoubleSeats
    }
  } catch (err) {
    console.log("Error occurred during getting available seats count:", err);
    return { single: 0, double: 0 };
  }
}