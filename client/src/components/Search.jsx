import { useState } from "react";
import { useAppContext } from "../contexts/AppContext";

function formatDate(date){
  return new Date(date).toISOString().slice(0, 10);
}



function Search(){
  const {navigate} = useAppContext();
  const [date, setDate] = useState(formatDate(new Date()));
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  // console.log(date)

  function handleSearchBuses(){
    navigate(`/buses?fromCity=${fromCity}&toCity=${toCity}&date=${date}`);
  }

  return (
    <div>
      {/* DeskTop */}
      <div className="flex flex-col items-center gap-8 py-2 px-8 rounded-4xl">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8  p-3 rounded-lg bg-white">
          <div className="flex flex-col sm:flex-row   items-center gap-5 justify-evenly">
            <input type="text" 
            placeholder="SOURCE"
            value={fromCity}
            onChange={(e) => setFromCity(e.target.value)}
            className="bg-blue-100 h-10 rounded-md  px-3 py-5 text-blue-700 font-semibold border-4 focus:border-b-blue-500  focus:border-r-blue-500 focus:outline-0 border-blue-100 "/>
            <p className="sm:text-gray-400 font-bold italic hidden sm:block"><i className="fa-duotone fa-solid fa-right-left"></i></p>
            <input type="text" 
            placeholder="DESTINATION"
            value={toCity}
            onChange={(e) => setToCity(e.target.value)}
            className="bg-blue-100 h-10 rounded-md  px-3 py-5 text-blue-700 font-semibold border-4 focus:border-b-blue-500  focus:border-r-blue-500 focus:outline-0 border-blue-100 "/>
          </div>
          {/* <p className="text-blue-500 sm:text-white font-bold italic hidden sm:block">ON</p> */}
          <div className="relative">
            <input 
              type="date" 
              value={date}
              onChange={(e) => setDate(e.target.value)}
              min={formatDate(date)}
              className="bg-linear-to-t from-sky-500 to-indigo-500 rounded-full text-white font-medium text-xl px-4 py-3 appearance-none"
              style={{ colorScheme: 'dark' }}
            />
          </div>
        </div>
        <div>
          <button 
          className="bg-linear-to-t from-sky-500 to-indigo-500 rounded-full text-white font-medium text-xl px-4 py-2"
          onClick={handleSearchBuses}
          >Search Buses</button>
        </div>
    </div>


    </div>
    
  );
}

export default Search