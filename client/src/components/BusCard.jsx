function BusCard({bus}){
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
      <div className="flex flex-col p-3 border border-gray-400 rounded-xl hover:border-blue-500 bg-white"> {/* Main Div */}
      <div className="flex justify-between"> {/* Trip Details */}
        <div> {/* Bus Details */}
          <h1 className="text-2xl font-semibold">{bus.operator}</h1>
          <p className="text-l text-gray-500">{bus.model}</p>
        </div>
        <div className="flex flex-col items-center"> {/* Timing */}
          <div>
            <div className="flex items-center gap-2 text-xl font-medium">
              <p>{bus.departure}</p>
              <p>-</p>
              <p>{bus.arrival}</p>
            </div>
          </div>
          <p className="text-l text-gray-500">{bus.duration} HRS</p>
        </div>
        <div className="flex flex-col items-center w-[65px] h-[65px] justify-between border border-green-700 rounded-xl  bg-green-200">
          <p className="bg-green-700 w-full h-50 text-center text-xl flex items-center justify-evenly font-bold px-1 text-white rounded-t-xl"><i className="fa-solid fa-star text-sm"></i>  {bus.rating} </p>
          <p className="text-xs text-black font-medium "> {bus.reviews} </p>
        </div>
        <div className="flex flex-col items-center justify-center  rounded-xl p-2 font-semibold">
          <p className="font-bold text-xl">₹{bus.minPrice}</p>
          <p className="text-xs text-gray-400">Onwards</p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4 text-xs sm:text-sm"> {/* Amenities and Seats */}
        <div className="flex items-center gap-2"> { /* Amenities */}
          {bus.amenities.ac && AC}
          {bus.isNew && newBus}
          {bus.amenities.tv && tvScreen}
          {bus.amenities.chargingPort && chargingPort}
          <div className="flex gap-4 items-center text-white bg-red-400 italic rounded-[10px] px-2 py-0.5"> {/* Seats Availaible */}
            <p>Single <b>{bus.singleSeats}</b> Double <b>{bus.doubleSeats}</b></p>
          </div>
        </div>

        <p className="text-xs text-gray-400 italic ">Click to view details...</p>
      </div>
      </div>   
  );
}

export default BusCard