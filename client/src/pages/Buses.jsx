import { buses } from "../assets/assets";
import BusCard from "../components/BusCard";

function Buses(){
  return (
    <div className="bg-gray-100">
      {/* Bus Details Area Begins */}
      <div className="bg-white shadow-md rounded-lg p-5 mb-6 flex flex-col justify-center items-center sticky top-0 z-10 w-full">
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
          <div className="flex items-center w-full sm:w-auto">
            <label htmlFor="FROM" className="sr-only">From</label>
            <input 
              type="text" 
              name="FROM" 
              placeholder="From" 
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
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <input 
            type="date" 
            className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <p className="text-gray-700 font-medium">21 Buses Found</p>
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
                className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="cp" className="ml-2 text-sm text-gray-700">Charging Port</label>
            </div>
            <div className="flex items-center">
              <input 
                type="checkbox" 
                name="tv" 
                id="tv" 
                className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="tv" className="ml-2 text-sm text-gray-700">Personal Screen</label>
            </div>
          </div>
          <button className="mt-4 w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md transition duration-200">
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
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-full"
                />
                <label htmlFor="hTl" className="ml-2 text-sm text-gray-700">High to Low</label>
              </div>
              <div className="flex items-center">
                <input 
                  type="radio" 
                  name="priceSort" 
                  id="lTh" 
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-full"
                />
                <label htmlFor="lTh" className="ml-2 text-sm text-gray-700">Low to High</label>
              </div>
            </div>
          </div>
        </div>
        {/* Sort Area Ends */}
      </div>      
      <div className="overflow-y-scroll max-h-[100vh] w-[60%] scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-100">
        <div className="flex flex-col gap-4 rounded-lg p-5">
          {buses.map((bus, index) => (
            <BusCard key={index} bus={bus} />
          ))}
        </div>
      </div>
      
    </div>
    </div>
    
  );
}

export default Buses