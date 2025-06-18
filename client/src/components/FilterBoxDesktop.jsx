function FilterBoxDeskTop({criteria, setCriteria, allSchedules, setSchedulesToRender}){
  function addCriteria(e,criterion){
    if (e.target.checked && criterion in criteria){
      setCriteria(criteria.filter(c => c !== criterion))
    }else {
      setCriteria([...criteria, criterion])
    }
  }

  return <div className="bg-white shadow-md rounded-lg p-5 mb-6">
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
                onChange={(e) => addCriteria(e, 'AC')}
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
                onChange={(e) => addCriteria(e, 'Charging-Port')}
                className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="cp" className="ml-2 text-sm text-gray-700">Charging Port</label>
            </div>
            <div className="flex items-center">
              <input 
                type="checkbox" 
                name="tv" 
                id="tv" 
                onChange={(e) => addCriteria(e, 'Personal-Screen')}
                className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="tv" className="ml-2 text-sm text-gray-700">Personal Screen</label>
            </div>
          </div>
          <button 
          className="mt-4 w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md transition duration-200"
          onClick={() => {
            setSchedulesToRender(filterBuses(allSchedules, criteria));
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
                  onChange={(e) =>{ if (e.target.checked) setSchedulesToRender(sortBusesByPrice(busList,'asc'))}}
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-full"
                />
                <label htmlFor="hTl" className="ml-2 text-sm text-gray-700">Low to High</label>
              </div>
              <div className="flex items-center">
                <input 
                  type="radio" 
                  name="priceSort" 
                  id="lTh" 
                  onChange={(e) =>{ if (e.target.checked) setSchedulesToRender(sortBusesByPrice(busList,'desc'))}}
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-full"
                />
                <label htmlFor="lTh" className="ml-2 text-sm text-gray-700">High to Low</label>
              </div>
            </div>
          </div>
        </div>
        {/* Sort Area Ends */}
      </div>
}

export default FilterBoxDeskTop