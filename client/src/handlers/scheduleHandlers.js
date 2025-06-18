import { useBookingDetails } from "../contexts/BookingReqContext"

const {bookingRequest, dispatchReq, selectedSeat} = useBookingDetails(); 

export const handleScheduleClick = (schId) => {
  dispatchReq({type : 'set-schedule', schedule_id : schId})
}

export const handleSeatClick = (seatId, setSelected) => {
  if (selectedSeat(seatId, bookingRequest)){ //If seat is already Selected
    dispatchReq({type : 'dis-select-seat', seat_id : seatId})
    setSelected(false);
    return ;
  }

  dispatchReq({type : 'select-seat', seat_id : seatId})
  setSelected(true);
  return ;
}
