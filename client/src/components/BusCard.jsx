import { getTime } from "../lib/utils";

function BusCard({schedule, onBusCardClick}){
  const AC = (
    <div className="flex items-center gap-1 px-2 py-1 bg-gray-200 rounded-xl">
      <i className="fa-solid fa-snowflake"></i>
      <p className="hidden sm:block">AC</p>
    </div>
  );

  const newBus = (
    <div className="flex items-center gap-1 px-2 py-1 bg-gray-200 rounded-xl">
      <i className="fa-solid fa-bus"></i>
      <p className="hidden sm:block">New Bus</p>
    </div>
  );

    const chargingPort = (
    <div className="flex items-center gap-1 px-2 py-1 bg-gray-200 rounded-xl">
      <i className="fa-solid fa-plug"></i>
      <p className="hidden sm:block">Charging Port</p>
    </div>
  );

  const tvScreen = (
    <div className="flex items-center gap-1 px-2 py-1 bg-gray-200 rounded-xl">
      <i className="fa-solid fa-tv"></i>
      <p className="hidden sm:block">Personal Screen</p>
    </div>
  );

  return (
      <div 
      className="flex flex-col p-3 border border-gray-400 rounded-xl hover:border-blue-500 bg-white cursor-pointer"
      onClick={onBusCardClick}
      > {/* Main Div */}
      <div className="flex justify-between"> {/* Trip Details */}
        <div className="hidden sm:block"> {/* Bus Details */}
          <h1 className="flex text-2xl font-semibold items-center gap-3">{schedule.operatorName} <span className= {`text-[8px] rounded-[5px] py-0.5 px-1 text-white bg-black`}><i className="fa-solid fa-star text-[7.5px]"></i> {schedule.rating || 5}</span></h1>
          <p className="block text-l text-gray-500">{schedule.busModel}</p>
        </div>
        <div className="flex flex-col items-start sm:items-center"> {/* Timing */}
          <div>
            <div className="flex items-center gap-2 text-xl font-medium">
              <p>{getTime(schedule.startTime)}</p>
              <p>-</p>
              <p>{getTime(schedule.endTime)}</p>
            </div>
          </div>
          <p className="text-l text-gray-500">{schedule.source} → {schedule.duration || '⏭️'} HRS → {schedule.destination}</p>
        </div>
        <div className="flex flex-col items-center justify-center  rounded-xl p-2 font-semibold">
          <p className="font-bold text-xl">₹{schedule.basePrice}</p>
          <p className="text-xs text-gray-400">Onwards</p>
        </div>
        
      </div>
      <div className="flex gap-2 items-center sm:hidden">
        <h1 className="text-xl text-black">{schedule.operatorName}</h1>
        <p className="text-sm text-gray-400"> {schedule.busModel} </p>
        
      </div>
      <div className="flex items-center justify-between mt-4 text-xs sm:text-sm"> {/* Amenities and Seats */}
        
        <div className="flex items-center gap-2"> { /* Amenities */}
          { AC}
          {newBus}
          { tvScreen}
          {chargingPort}
          <p className="sm:hidden"><span className= {`text-[8px] rounded-[5px] py-0.5 px-1 text-white bg-black`}><i className="fa-solid fa-star text-[7.5px]"></i> {schedule.rating || 5}</span></p>
        </div>

        <p className="text-xs text-gray-400 italic ">Single {schedule.singleSeats} • Double {schedule.doubleSeats}</p>
      </div>
      </div>   
  );
}

export default BusCard