import { useScheduleContext } from "../contexts/ScheduleContext";
import BusCard from "./BusCard";

function AvailableSchedules(){
  const {allSchedules, schedulesToRender} = useScheduleContext();
  return (
    <div className="overflow-y-scroll max-h-[100vh] w-[60%] hidden-scrollbar bg-white rounded-2xl shadow-lg shadow-gray-500">
      <div className="flex flex-col gap-4 rounded-lg p-5">
        { allSchedules.map((bus, index) => (
          <BusCard key={index} bus={bus} onBusCardClick={() => {
            setSelectedBus(bus);
            setOverlay(true)}}/>
        ))}
      </div>
    </div>
  );
}

export default AvailableSchedules