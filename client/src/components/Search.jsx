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
    navigate(`/buses?fromCity=${fromCity}&toCity=${toCity}&onwards=${date}`);
  }

  return (
    <div>
      {/* DeskTop */}
      <div className="flex flex-col items-center gap-8 py-2 px-8 rounded-4xl">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-evenly">
            <input type="text" 
            placeholder="SOURCE"
            value={fromCity}
            onChange={(e) => setFromCity(e.target.value)}
            className="bg-white h-10 rounded-md border-2 border-blue-500 p-2 text-blue-500 font-semibold"/>
            <p className="text-blue-500 sm:text-white font-bold italic hidden sm:block">TO</p>
            <input type="text" 
            placeholder="DESTINATION"
            value={toCity}
            onChange={(e) => setToCity(e.target.value)}
            className="bg-white h-10 rounded-md border-2 border-blue-500 p-2 text-blue-500 font-semibold"/>
          </div>
          <p className="text-blue-500 sm:text-white font-bold italic hidden sm:block">ON</p>
          <div className="relative">
            <input 
              type="date" 
              value={date}
              onChange={(e) => setDate(e.target.value)}
              min={formatDate(date)}
              className="bg-blue-500 text-white p-2 rounded-xl appearance-none"
              style={{ colorScheme: 'dark' }}
            />
          </div>
        </div>
        <div>
          <button 
          className="bg-blue-500 rounded-full text-white font-medium text-xl px-4 py-2"
          onClick={handleSearchBuses}
          >Search Buses</button>
        </div>
    </div>


    </div>
    
  );
}

export default Search