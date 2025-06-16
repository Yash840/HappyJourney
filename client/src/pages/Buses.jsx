import { use, useEffect, useState } from "react";
import BusCard from "../components/BusCard";
import { filterBuses, sortBusesByPrice } from "../contollers/searchActions";
import sabg from "../assets/sabg.jpg"
import { Navigate, useSearchParams } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";


function Buses({buses}){
  const [busList, setBusList] = useState(buses)
  const [date, setDate] = useState('');
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [criteria, setCriteria] = useState({
    ac : false,
    tv : false,
    chargingPort : false
  });
  const [searchParams] = useSearchParams();
  const {navigate} = useAppContext();

  useEffect(() => {
    setFromCity(searchParams.get('fromCity') || '');
    setToCity(searchParams.get('toCity') || '');
    setDate(searchParams.get('onwards') || '');
  }, [searchParams]); 

  return (
    <div className="bg-gray-100">
      { /* DeskTop  */ }
      <div className="hidden sm:block">
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
        <p className="text-gray-700 font-medium">{busList.length} Buses Found</p>
      </div>
      {/* Bus Details Area Ends */}
      {/* Bus Feed Area */}
      <div className="container flex flex-col sm:flex-row justify-center  mx-auto px-4 py-6 ">
      <div className="bg-white shadow-md rounded-lg p-5 mb-6">
        <h1>Filter Buses</h1>
        {/* Filter Area Begins */}
        <div className="mt-6 border-t pt-4">
          <h3 className="font-medium text-lg mb-3">Amenities</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center">
              <input 
                type="checkbox" 
                name="ac" 
                id="ac" 
                onChange={(e) => {setCriteria({...criteria ,ac : e.target.checked})}}
                className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="ac" className="ml-2 text-sm text-gray-700">A/C</label>
            </div>
            <div className="flex items-center">
              <input 
                type="checkbox" 
                name="newBus" 
                id="newBus" 
                className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="newBus" className="ml-2 text-sm text-gray-700">New Bus</label>
            </div>
            <div className="flex items-center">
              <input 
                type="checkbox" 
                name="cp" 
                id="cp" 
                onChange={(e) => {setCriteria({...criteria ,chargingPort : e.target.checked})}}
                className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="cp" className="ml-2 text-sm text-gray-700">Charging Port</label>
            </div>
            <div className="flex items-center">
              <input 
                type="checkbox" 
                name="tv" 
                id="tv" 
                onChange={(e) => {setCriteria({...criteria ,tv : e.target.checked})}}
                className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="tv" className="ml-2 text-sm text-gray-700">Personal Screen</label>
            </div>
          </div>
          <button 
          className="mt-4 w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md transition duration-200"
          onClick={() => {
            setBusList(filterBuses(buses, criteria));
          }}
          >
            Apply Filters
          </button>
        </div>
        {/* Filter Area Ends */}

        {/* Sort Area Begins */}
        <div className="mt-6 border-t pt-4">
          <h3 className="font-medium text-lg mb-3">Sort</h3>
          <div className="mt-2">
            <h4 className="text-sm font-medium text-gray-700 mb-2">By Price</h4>
            <div className="flex flex-col gap-2">
              <div className="flex items-center">
                <input 
                  type="radio" 
                  name="priceSort" 
                  id="hTl" 
                  onChange={(e) =>{ if (e.target.checked) setBusList(sortBusesByPrice(busList,'asc'))}}
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-full"
                />
                <label htmlFor="hTl" className="ml-2 text-sm text-gray-700">Low to High</label>
              </div>
              <div className="flex items-center">
                <input 
                  type="radio" 
                  name="priceSort" 
                  id="lTh" 
                  onChange={(e) =>{ if (e.target.checked) setBusList(sortBusesByPrice(busList,'desc'))}}
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-full"
                />
                <label htmlFor="lTh" className="ml-2 text-sm text-gray-700">High to Low</label>
              </div>
            </div>
          </div>
        </div>
        {/* Sort Area Ends */}
      </div>      
      <div className="overflow-y-scroll max-h-[100vh] w-[60%] scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-100">
        <div className="flex flex-col gap-4 rounded-lg p-5">
          {busList.map((bus, index) => (
            <BusCard key={index} bus={bus} />
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
      <div className="sm:hidden">
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
        {/* Actions Area Begins */}
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
        {/* Actions Area Ends */}
        { /* Bus List Area Begins */}
        <div className="">
        <div className="flex flex-col gap-4 rounded-lg p-5">
          {busList.map((bus, index) => (
            <BusCard key={index} bus={bus} />
          ))}
        </div>
      </div>
        </div>
        
      </div>
    
  );
}

export default Buses