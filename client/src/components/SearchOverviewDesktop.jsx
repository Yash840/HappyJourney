import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import curtain from "../assets/curatain.png";
import { arrayStateUpdate } from "../lib/utils";
import { useScheduleContext } from "../contexts/ScheduleContext";


function SearchOverviewDesktop(){
  const {navigate} = useAppContext();
  const [searchParams] = useSearchParams();
  const [fromCity, setFromCity] = useState(searchParams.get('fromCity') || '');
  const [toCity, setToCity] = useState(searchParams.get('toCity') || '');
  const [date, setDate]= useState(searchParams.get('onwards') || '');
  const {filters, dispatchFilters} = useScheduleContext();

  return (
    <div className={`bg-white rounded-lg p-2 mb-6 hidden sm:flex flex-col justify-center items-center sticky top-0 z-40 w-full shadow-lg shadow-gray-300`}>
      <form className="rounded-2xl text-center bg-transparent p-2  flex items-center">
        <div className="flex items-center gap-10 bg-white rounded-2xl ">
          <div className="flex items-center gap-2">
            <input type="text" value={fromCity.toLocaleUpperCase()} 
            placeholder="FROM"
            onChange={(e) => setFromCity(e.target.value)} 
            className="border-2 border-gray-400 rounded-sm text-center focus:outline-0  p-2"
            />
          </div>
          <div>
            <input type="text" value={toCity.toLocaleUpperCase()} 
            placeholder="TO"
            onChange={(e) => setToCity(e.target.value)} 
            className="border-2 border-gray-400 rounded-lg text-center focus:outline-0  p-2"
            />
          </div>
          
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)}
          className="border-2 border-gray-400 rounded-lg text-center focus:outline-0  p-2"
          />
          <button 
          onClick={(e) => {
            e.preventDefault();
            navigate(`/buses?fromCity=${fromCity}&toCity=${toCity}&onwards=${date}`);
          }}
          className="bg-transparent rounded-lg w-[40px] h-[40px] text-xl font-bold text-blue-500 mx-2 hover:bg-blue-500 hover:text-white transition duration-300"><i className="fa-solid fa-arrows-rotate"></i></button>
        </div>
        
      </form>
    </div>
  );
}

export default SearchOverviewDesktop