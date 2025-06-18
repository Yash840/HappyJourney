import { Children, createContext, useContext, useReducer } from "react";

const selectedSeat = (id,bookingRequest) => {
  return bookingRequest.selected_seats.find(seat => seat.seat_id === id);
}

const BookingDetails = createContext();

const initialBookingReq = {
  schedule_id : null,
  selected_seats : [
    {
      seat_id : null, 
      seat_number : null,
      fare : 0,
      passenger_name : null,
      passenger_gender : null,
      passenger_age : null
    }
  ],
  boarding_point : null,
  dropping_point : null
};

const BookingDetailsProvider = ({children}) => {
  const [bookingRequest, dispatchReq] = useReducer(bookingRequestReducer,initialBookingReq);

  const calculateBillAmt = () => {
    return bookingRequest.selected_seats.reduce((acc, current) => (acc + current), 0)
  }

  return (
    <BookingDetails.Provider value = {{bookingRequest, dispatchReq, selectedSeat, calculateBillAmt}}>
      {children}
    </BookingDetails.Provider>
  );
}

const useBookingDetails = () => {
  const context = useContext(BookingDetails);
  
  if (!context) {
    throw new Error("useBookingDetails must be used within a BookingDetailsProvider");
  }
  
  return context;
}

const bookingRequestReducer = (bookingRequest, action) => {
  switch (action.type){
    case 'select-seat':{
      if (selectedSeat(action.seat_id, bookingRequest)) return bookingRequest;
      return {
        ...bookingRequest,
        selected_seats : [
          ...bookingRequest.selected_seats,
          {
            seat_id : action.seat_id, 
            seat_number : action.seat_number,
            fare : action.fare,
          }
        ]
      }
    }

    case 'dis-select-seat':{
      if(!selectedSeat(action.seat_id, bookingRequest)) return bookingRequest;

      return {
        ...bookingRequest,
        selected_seats : 
          bookingRequest.selected_seats.filter(seat => seat.seat_id !== action.seat_id)
      }
    }

    case 'select-boarding-point':{
      return {
        ...bookingRequest,
        boarding_point: action.boarding_point
      }
    }

    case 'select-dropping-point':{
      return {
        ...bookingRequest,
        dropping_point: action.dropping_point
      }
    }

    case 'set-schedule':{
      return {
        ...bookingRequest,
        schedule_id: action.schedule_id
      }
    }

    case 'update-passenger-details':{
      return {
        ...bookingRequest,
        selected_seats: bookingRequest.selected_seats.map(seat => 
          seat.seat_id === action.seat_id 
            ? { 
                ...seat, 
                passenger_name: action.passenger_name,
                passenger_gender: action.passenger_gender,
                passenger_age: action.passenger_age 
              } 
            : seat
        )
      }
    }

    case 'reset':{
      return initialBookingReq;
    }

    default:
      return bookingRequest;
  }
}



export { BookingDetailsProvider, useBookingDetails };