import { createContext, useContext, useReducer, useState } from "react";
import { useAppContext } from "./AppContext";
import { buses } from "../assets/assets";

const ScheduleContext = createContext();

const defaultFilters = {
  amenities : [],
  arrival : undefined,
  departure : undefined,
  boardingPoint : undefined,
  droppingPoint : undefined
}

let allSchedules = buses

export const SchduleContextProvider = ({children}) => {
  const [filters, dispatchFilters] = useReducer(filterReducer, defaultFilters)
  const [schedulesToRender, setSchedulesToRender] = useState(undefined)


  return <ScheduleContext.Provider value = {{filters, dispatchFilters, filterResults, allSchedules, schedulesToRender, setSchedulesToRender}}>
    {children}
  </ScheduleContext.Provider>
}

export const useScheduleContext = () => {
  const context = useContext(ScheduleContext);

  if(!context){
    console.log('trying to use context out of range...')
    return 
  }

  return context;
}

const filterReducer = (filter, action) => {
  switch(action.type){
    case 'add-amenity' : {
      return(
        {
          ...filter,
          amenities : [
            ...filter.amenities, action.item
          ]
        }
      );
    }

    case 'remove-amenity' : {
      return(
        {
          ...filter,
          amenities : filter.amenities.filter((f) => f !== action.item)
        }
      );
    }

    case 'add-boarding-point' : {
      return(
        {
          ...filter,
          boardingPoint : action.item
        }
      );
    }

    case 'remove-boarding-point' : {
      return(
        {
          ...filter,
          boardingPoint : undefined
        }
      );
    }

    case 'add-dropping-point' : {
      return(
        {
          ...filter,
          droppingPoint : action.item
        }
      );
    }

    case 'remove-dropping-point' : {
      return(
        {
          ...filter,
        droppingPoint : undefined
        }
      );
    }

    case 'add-arrival' : {
      return(
        {
          ...filter,
          arrival : action.item
        }
      );
    }

    case 'remove-arrival' : {
      return(
        {
          ...filter,
          arrival : undefined
        }
      );
    }

    case 'add-departure' : {
      return(
        {
          ...filter,
          departure : action.item
        }
      );
    }

    case 'remove-departure' : {
      return(
        {
          ...filter,
          departure : undefined
        }
      );
    }

    default : {
      return defaultFilters
    }
      
  }
}

const filterResults = (filtersArg, allResults = allSchedules) => {
  const filteredResults = allResults.filter((res) => {
    // Check amenities - need to check each amenity in the filter exists in the result
    for(let i = 0; i < filtersArg.amenities.length; i++){
        const amenity = filtersArg.amenities[i];
        if(!res.amenities.includes(amenity)) return false;
    }

    if(filtersArg.arrival && res.firstArrival !== filtersArg.arrival) return false;
    if(filtersArg.departure && res.firstDeparture !== filtersArg.departure) return false;
    if(filtersArg.boardingPoint && !res.boardingPoints.includes(filtersArg.boardingPoint)) return false;
    if(filtersArg.droppingPoint && !res.droppingPoints.includes(filtersArg.droppingPoint)) return false;

    return true;
  });

  setSchedulesToRender(filteredResults)
}

const sortByPrice = (type, allResults) => {
  return allResults.sort((a, b) => {
    if(type === 'asc') return a.minPrice - b.minPrice
    if(type === 'desc') return b.minPrice - a.minPrice

    return 0
  })
}

