export const filterBuses = (buses, criteria) => {
  // Filter buses based on the provided criteria
  return buses.filter(bus => {
    // Check each criterion only if it's specified in the criteria object
    if (criteria.ac && !bus.amenities.ac) return false;
    if (criteria.tv && !bus.amenities.tv) return false;
    if (criteria.chargingPort && !bus.amenities.chargingPort) return false;
    
    // If all specified criteria are met, include this bus
    return true;
  });
};


export const sortBusesByPrice = (buses, order = 'asc') => {
  // Create a copy of the buses array to avoid mutating the original
  const sortedBuses = [...buses];
  
  // Sort buses based on minPrice
  return sortedBuses.sort((a, b) => {
    if (order.toLowerCase() === 'asc') {
      return a.minPrice - b.minPrice;
    } else if (order.toLowerCase() === 'desc') {
      return b.minPrice - a.minPrice;
    }
    // Default to ascending if order parameter is invalid
    return a.minPrice - b.minPrice;
  });
};

