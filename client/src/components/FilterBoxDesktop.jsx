import { useEffect, useState } from "react"
import { useScheduleContext } from "../contexts/ScheduleContext"

const allAmenities = [
  'A/c', 'Charging-Port', 'Water', 'WiFi','Personal-Screen'
]

const departureRecord = [
  '19:30','20:00','20:15','20:30', '20:45', '21:00'
]

const arrivalRecord =[
  '05:45','06:00','06:30','07:00','07:30'
]



const filterOptions = [
  {type : 'Amenities', contents : allAmenities, field : 'amenity'},
  {type : 'Arrival', contents : arrivalRecord, field : 'arrival'},
  {type : 'Departure', contents : departureRecord, field : 'departure'}
]

function FilterBoxDeskTop({criteria, setCriteria}){
  const {filters, dispatchFilters, filterResults} = useScheduleContext();
  const [selectedOption, setSelectedOption] = useState('')


  return <div className="bg-white rounded-2xl p-5 mb-6 w-[300px] shadow-lg shadow-gray-500 flex flex-col">
        <div id="filter-box" className="flex flex-col gap-2">
          <h1 className="w-full border border-white border-b-gray-400 pb-1 font-bold text-xl text-blue-500">Filter Results</h1>
          {
            filterOptions.map((option, i) => {
              return <div key={i} className="px-2 text-black">
                <p 
                className="text-black text-lg font-semibold w-full cursor-pointer"
                onClick={(e) => {
                  if(selectedOption === option.type){
                    setSelectedOption('')
                    return
                  }
                  setSelectedOption(option.type)
                }}
                >{option.type} <span
                className="transition delay-150 duration-1000 ease-linear"
                >
                  {
                    selectedOption === option.type ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>
                  }
                  </span></p>
                <div className={`${selectedOption === option.type ? 'flex': 'hidden'} flex-col gap-1`}>
                  {
                    option.contents.map((content,i) => {
                      return <div key={i} className="flex items-center gap-2">
                        <p className="text-gray-400 text-lg font-bold">. . .</p>
                        <input 
                        type={`${option.field === 'amenity' ? 'checkbox' : 'radio'}`}
                        name={`${option.field === 'amenity' ? content : option.field}`} id={`${content}`} className="text-2xl"
                        onChange = {
                          (e) => {
                            if(e.target.checked){
                              dispatchFilters({type:`add-${option.field}`, item:content})
                            }else{
                              dispatchFilters({type:'remove-amenity', item:content})
                            }
                          }
                        }
                        />
                        <label htmlFor={`${content}`}>{content}</label>
                      </div>
                    })
                  }
                </div>
              </div>
            })
          }
        </div>
        <div id="filter-button" className="flex items-center justify-center mt-3 w-full">
          <button 
          onClick={() => filterResults(filters)}
          className="bg-blue-500 rounded-md px-2 py-1 text-white w-full cursor-pointer">Apply Filters</button>
        </div>
        <div id="sort-box" className="mt-4">
          <h1 className="w-full border border-white border-b-gray-400 pb-1 font-bold text-xl text-blue-500">Sort Results</h1>
          <div className="flex items-center gap-2 font-medium">
            <input type="radio" name="sort-option" id="price-low-to-high" value="price-low-to-high" />
            <label htmlFor="price-low-to-high">Price : Low to High</label>
          </div>
          <div className="flex items-center gap-2 font-medium">
            <input type="radio" name="sort-option" id="price-high-to-low" value="price-high-to-low" />
            <label htmlFor="price-high-to-low">Price : High to Low</label>
          </div>
          <div className="flex items-center gap-2 font-medium">
            <input type="radio" name="sort-option" id="rating-high-to-low" value="rating-high-to-low" />
            <label htmlFor="rating-high-to-low">Rating : High to Low</label>
          </div>
        </div>
      </div>
}

export default FilterBoxDeskTop