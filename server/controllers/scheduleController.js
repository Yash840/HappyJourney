import { fetchBusById, fetchOperatorByBus, fetchRoutesByEndPoints, fetchRouteById, getAvailableSeatsCount } from "../lib/utils.fetch.js"
import Schedule from "../models/schedule.model.js";

const findAvailableSchedules = async (req, res) => {
  try {
    const availableRoutes = await fetchRoutesByEndPoints(req.body.source, req.body.destination);

    const routes = availableRoutes.map(r => r._id);

    const availableSchedules = await Schedule.find({route_id: {$in: routes}, schedule_date : req.body.date}).exec();

    const formattedSchedules = await Promise.all(availableSchedules.map(async schedule => {
      const [route, operator, seats, bus] = await Promise.all([
        fetchRouteById(schedule.route_id),
        fetchOperatorByBus(schedule.bus),
        getAvailableSeatsCount(schedule._id),
        fetchBusById(schedule.bus)
      ])

      return {
        schedule_id: schedule._id,
        source: route.source,
        destination: route.destination,
        startTime: schedule.departure_timings[0].time,
        endTime: schedule.arrival_timings[0].time,
        operator_name: operator.name,
        singleSeats: seats.single,
        doubleSeats: seats.double,
        basePrice: schedule.base_price,
        amenities: bus.amenities,
        busModel : bus.model
      }
    }));
    
    return res.status(200).json(formattedSchedules);
  } catch (error) {
    console.error('Error finding available schedules:', error);
    return res.status(500).json({ message: 'Failed to retrieve available schedules', error: error.message });
  }
}

export default findAvailableSchedules;