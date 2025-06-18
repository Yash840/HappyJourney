import { use, useEffect, useState } from "react";
import BusCard from "../components/BusCard";
import { filterBuses, sortBusesByPrice } from "../contollers/searchActions";
import sabg from "../assets/sabg.jpg"
import { Navigate, useSearchParams } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import BookingOverlay from "../components/BookingOverlay";
import SearchOverviewDesktop from "../components/SearchOverviewDesktop";
import FilterBoxDeskTop from "../components/FilterBoxDesktop";


function Schedules({buses}){
  const [busList, setBusList] = useState(buses)
  const [selectedBus, setSelectedBus] = useState(null);
  const [criteria, setCriteria] = useState([]);
  const [overlay, setOverlay] = useState(false);
  const [searchParams] = useSearchParams();
  const {navigate} = useAppContext();

  return (
    <div className="bg-gray-100">
      { /* DeskTop  */ }
      <div className="hidden sm:block">
        <SearchOverviewDesktop />
      {/* Bus Feed Area */}
      <div className="container flex flex-col sm:flex-row justify-center  mx-auto px-4 py-6 ">

        <FilterBoxDeskTop criteria={criteria} setCriteria={setCriteria} allSchedules={buses} setSchedulesToRender={setBusList}/>

        <div className="overflow-y-scroll max-h-[100vh] w-[60%] thin-scrollbar">
          <div className="flex flex-col gap-4 rounded-lg p-5">
            {busList.map((bus, index) => (
              <BusCard key={index} bus={bus} onBusCardClick={() => {
                setSelectedBus(bus);
                setOverlay(true)}}/>
            ))}
          </div>
      </div>
      
    </div>
    <button
      onClick={() => {
        setBusList(buses)
      scrollTo(0,0)}}
      className="mx-auto mt-4 mb-6 hidden sm:block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md transition duration-200 shadow-md"
    >
      Clear All Filters
    </button>
      </div>
      
      { /* Mobile */ }

      {/* <div className="sm:hidden">
        <div className="bg-white shadow-lg rounded-lg p-4 m-2">
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="bg-blue-50 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">{fromCity.toUpperCase()} to {toCity.toUpperCase()}</p>
                  <p className="font-medium">{busList.length} buses available</p>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg p-2">
                <input 
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="bg-transparent text-sm font-medium focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg flex flex-col px-4 py-1 mt-2 m-2">
          <div className="flex flex-wrap items-center gap-4 mb-3">
            <div className="flex items-center">
              <input 
                type="checkbox" 
                name="ac" 
                id="ac-mobile" 
                onChange={(e) => {setCriteria({...criteria, ac: e.target.checked})}}
                className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="ac-mobile" className="ml-2 text-sm text-gray-700">A/C</label>
            </div>
            <div className="flex items-center">
              <input 
                type="checkbox" 
                name="tv" 
                id="tv-mobile" 
                onChange={(e) => {setCriteria({...criteria, tv: e.target.checked})}}
                className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="tv-mobile" className="ml-2 text-sm text-gray-700">Personal Screen</label>
            </div>
            <div className="flex items-center">
              <input 
                type="checkbox" 
                name="cp" 
                id="cp-mobile" 
                onChange={(e) => {setCriteria({...criteria, chargingPort: e.target.checked})}}
                className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="cp-mobile" className="ml-2 text-sm text-gray-700">Charging Port</label>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <button 
              className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded text-sm"
              onClick={() => {setBusList(filterBuses(buses, criteria))}}
            >
              Apply
            </button>
            <div className="flex gap-2">
              <button 
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-1 px-3 rounded flex items-center text-sm"
                onClick={() => {setBusList(sortBusesByPrice(busList, 'asc'))}}
              >
                <span className="mr-1">Price</span>↓
              </button>
              <button 
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-1 px-3 rounded flex items-center text-sm"
                onClick={() => {setBusList(sortBusesByPrice(busList, 'desc'))}}
              >
                <span className="mr-1">Price</span>↑
              </button>
              <button 
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-1 px-3 rounded text-sm"
                onClick={() => {setBusList(buses)}}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
        
        <div className="">
        <div className="flex flex-col gap-4 rounded-lg p-5">
          {busList.map((bus, index) => (
            <BusCard key={index} bus={bus} onBusCardClick={() => setOverlay(true)}/>
          ))}
        </div>
      </div>
      </div> */}

      <div className="flex items-center justify-center w-full h-full">
        <BookingOverlay display={overlay} bus={selectedBus} onClose={() => setOverlay(false)}/>
      </div>
        
      </div>
    
  );
}

export default Schedules