import { useEffect, useState } from "react";
import { useScheduleContext } from "../contexts/ScheduleContext";
import BusCard from "./BusCard";
import Loader from "./Loader";
import { findSchedules } from "../contollers/findSchedules";
import { useBookingDetails } from "../contexts/BookingReqContext";

function AvailableSchedules(){
  const {allSchedules, schedulesToRender, setSchedulesToRender, isLoading, setIsLoading, fromCity, toCity, date, setAllSchedules} = useScheduleContext();
  const {dispatchReq, bookingRequest} = useBookingDetails();
  
  useEffect(() => {
    const getSchedules = async () => {
      try{
      setIsLoading(true);
      const response = (await findSchedules(fromCity, toCity, date))

      setAllSchedules(response.success ? response.data : []);
      setSchedulesToRender(allSchedules);
      } catch(error) {
      console.log(error.message)
      toast.error("Couldn't find buses, right now")
      } finally {
      setIsLoading(false)
      }
    }
    getSchedules();
  },[fromCity, toCity, date])

  return (
    <div className="overflow-y-scroll max-h-[100vh] w-[60%] hidden-scrollbar bg-white rounded-2xl shadow-lg shadow-gray-500 relative">
      {isLoading && <Loader />}
      <div className="flex flex-col gap-4 rounded-lg p-5">
        { allSchedules.map((bus, index) => (
          <BusCard key={index} schedule={bus} onBusCardClick={() => {
            dispatchReq({type : "set-schedule", schedule_id : bus.schedule_id});
            console.log(bookingRequest)
            setOverlay(true)}}/>
        ))}
      </div>
    </div>
  );
}

export default AvailableSchedules