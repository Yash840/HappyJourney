import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";


function SearchOverviewDesktop(){
  const {navigate} = useAppContext();
  const [searchParams] = useSearchParams();
  const [fromCity, setFromCity] = useState(searchParams.get('fromCity') || '');
  const [toCity, setToCity] = useState(searchParams.get('toCity') || '');
  const [date, setDate]= useState(searchParams.get('onwards') || '');

  return (
    <div className="bg-white shadow-md rounded-lg p-5 mb-6 hidden sm:flex flex-col justify-center items-center sticky top-0 z-10 w-full">
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
          <div className="flex items-center w-full sm:w-auto">
            <label htmlFor="FROM" className="sr-only">From</label>
            <input 
              type="text" 
              name="FROM" 
              placeholder="From" 
              value={fromCity}
              onChange={(e) => setFromCity(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <p className="text-gray-500 font-bold">→</p>
          <div className="flex items-center w-full sm:w-auto">
            <label htmlFor="TO" className="sr-only">To</label>
            <input 
              type="text" 
              name="TO" 
              placeholder="To" 
              value={toCity}
              onChange={(e) => setToCity(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <input 
            type="date" 
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
          <button 
          onClick={() => navigate(`/buses?fromCity=${fromCity}&toCity=${toCity}&onwards=${date}`)}
          className="bg-blue-500 p-2 rounded-md text-white font-bold"
          >GO</button>
        </div>
        <p className="text-gray-700 font-medium"> Buses Found</p>
        </div>
  );
}

export default SearchOverviewDesktop