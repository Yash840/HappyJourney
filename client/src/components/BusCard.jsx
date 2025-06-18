function BusCard({bus, onBusCardClick}){
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
      className="flex flex-col p-3 border border-gray-400 rounded-xl hover:border-blue-500 bg-white"
      onClick={onBusCardClick}
      > {/* Main Div */}
      <div className="flex justify-between"> {/* Trip Details */}
        <div className="hidden sm:block"> {/* Bus Details */}
          <h1 className="flex text-2xl font-semibold items-center gap-3">{bus.operator} <span className= {`text-[8px] rounded-[5px] py-0.5 px-1 text-white bg-black`}><i className="fa-solid fa-star text-[7.5px]"></i> {bus.rating}</span></h1>
          <p className="block text-l text-gray-500">{bus.model}</p>
        </div>
        <div className="flex flex-col items-start sm:items-center"> {/* Timing */}
          <div>
            <div className="flex items-center gap-2 text-xl font-medium">
              <p>{bus.departure}</p>
              <p>-</p>
              <p>{bus.arrival}</p>
            </div>
          </div>
          <p className="text-l text-gray-500">{bus.source} → {bus.duration} HRS → {bus.destination}</p>
        </div>
        <div className="flex flex-col items-center justify-center  rounded-xl p-2 font-semibold">
          <p className="font-bold text-xl">₹{bus.minPrice}</p>
          <p className="text-xs text-gray-400">Onwards</p>
        </div>
        
      </div>
      <div className="flex gap-2 items-center sm:hidden">
        <h1 className="text-xl text-black">{bus.operator}</h1>
        <p className="text-sm text-gray-400"> {bus.model} </p>
        
      </div>
      <div className="flex items-center justify-between mt-4 text-xs sm:text-sm"> {/* Amenities and Seats */}
        
        <div className="flex items-center gap-2"> { /* Amenities */}
          {bus.amenities.ac && AC}
          {bus.isNew && newBus}
          {bus.amenities.tv && tvScreen}
          {bus.amenities.chargingPort && chargingPort}
          <p className="sm:hidden"><span className= {`text-[8px] rounded-[5px] py-0.5 px-1 text-white bg-black`}><i className="fa-solid fa-star text-[7.5px]"></i> {bus.rating}</span></p>
        </div>

        <p className="text-xs text-gray-400 italic ">Single {bus.singleSeats} • Double {bus.doubleSeats}</p>
      </div>
      </div>   
  );
}

export default BusCard