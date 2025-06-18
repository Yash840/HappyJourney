import { useEffect, useState } from "react";
import { seats } from "../assets/assets";
import { useAppContext } from "../contexts/AppContext";
import toast from "react-hot-toast";

const lowerSeats = seats.filter( (seat) => seat.pos === 'L');
const upperSeats = seats.filter( (seat) => seat.pos === 'U');




function DeckLayout(){
  const [billAmt, setBillAmt] = useState(0);
  const {bookingRequest , calculateBillAmt} = useBookingDetails();
  
  useEffect(() => {
    setBillAmt(calculateBillAmt())
  }, [bookingRequest.selected_seats])

  return (
    <div id="deck-wrapper" className="flex flex-col items-center gap-5  bg-blue-200 p-2 rounded-md " >
      <div className="flex flex-col items-center sticky" id='Seat-details'>
        <h1 className="text-center text-blue-500 text-xl font-medium my-1">Select Your Seats</h1>
        <div className="w-[100px] bg-blue-500 h-0.5 rounded-xl mt-1 mb-3"></div>
        <div className="flex items-stretch sticky ">
          <div className="flex">
            <p className="bg-blue-500 flex items-center justify-center px-2 text-white font-medium rounded-tl-xl rounded-bl-xl">Selected Seats</p>
          </div>
          {
            bookingRequest.selected_seats.length > 0 ? 
              <div className="flex flex-wrap items-center justify-evenly border border-blue-500 p-2 bg-white  gap-1 max-w-[300px] overflow-x-auto min-h-[40px]">
              {
              bookingRequest.selected_seats.map( (seat, index) => (
                <p key={index} className="bg-blue-500 w-6 h-6 text-white font-semibold flex items-center justify-center text-center rounded-[2.5px]">{seat.seat_id}</p>
                ))
              }
              </div> :
              <div className="flex flex-wrap items-center justify-evenly border border-blue-500 p-2 bg-white  gap-1 max-w-[300px] overflow-x-auto min-h-[40px] text-blue-500">
                No Seats Selected
              </div>
          }
          
          <div className="rounded-tr-xl rounded-br-xl bg-blue-500 flex items-center px-2">
            <p className={`text-white font-medium flex flex-col items-center`}>₹{billAmt} <span className="text-xs text-gray-300">only</span></p>
          </div>
      </div>
        
      </div>
      <div className="flex items-center gap-5 m-2 ">
        <div id="lower-deck" className="flex flex-col items-center bg-white shadow-lg shadow-gray-500 rounded-3xl">
        <div id="deck-title-lower" className="flex items-center justify-between pt-2 px-4 mt-2 w-full h-[50px] text-gray-400">
          <h1>Lower Deck</h1>
          <div className="group relative">
            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="currentColor" className="text-gray-400">
              <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-40-84v-120q-60-12-102-54t-54-102H164q12 109 89.5 185T440-164Zm80 0q109-12 186.5-89.5T796-440H676q-12 60-54 102t-102 54v120ZM164-520h116l120-120h160l120 120h116q-15-121-105-200.5T480-800q-121 0-211 79.5T164-520Z"/>
            </svg>
            <div className="absolute bg-black z-10 text-white text-xs text-center rounded-xl p-2 -translate-y-20 -translate-x-1/5 opacity-0 group-hover:opacity-100 transition-opacity">
              <p>Driver</p>
              <div className="w-2 h-2 bg-black rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2"></div>
            </div>
          </div>
        </div>
        <SeatLayout seatsArray={lowerSeats}/>
      </div>
      <div id="upper-deck" className="bg-white shadow-lg shadow-gray-500 rounded-3xl">
        <div id="deck-title-upper" className="flex items-center justify-between pt-2 px-4 mt-2 w-full h-[50px] text-gray-400">
          <h1>Upper Deck</h1>
        </div>
        <SeatLayout seatsArray={upperSeats} />
      </div>
      </div>
    </div>
  );
}

function Seat({seat}){
  const {selectedSeats, setSelectedSeats, billAmt, setBillAmt} = useAppContext();
  const [selected, setSelected] = useState(false)

  function handleSeatClick(){
    if(seat.isBooked){
      toast.error('Seat is already booked');
      return;
    }

    if(selected){
      setSelectedSeats(selectedSeats.filter(s => s._id !== seat._id));
      setBillAmt(billAmt - seat.price);
      setSelected(false);
      return ;
    }

    setSelected(true);
    setSelectedSeats([...selectedSeats, seat]);
    setBillAmt(billAmt + seat.price);
    return ;
  }

  return (
    <div className="flex flex-col items-center justify-between w-[40px] h-[70px] sm:w-[50px] sm:h-[90px] my-1 rounded-[7.5px]">
      <div 
      className={`group flex flex-col items-center justify-between rounded-[7.5px] w-[30px] h-[70px] sm:w-[40px] sm:h-[80px] transition ease-in-out duration-300 border-2 ${seat.isBooked ? seat.bookingDetails.gender === 'Female' ? 'border-pink-300 bg-gray-200 cursor-not-allowed' : 'border-purple-300 bg-gray-200 cursor-not-allowed' : 'border-blue-500 hover:bg-blue-500 cursor-pointer'} ${selected && 'bg-blue-500'}`}
      onClick={handleSeatClick}
      >
        {
          seat.isBooked ? seat.bookingDetails.gender === 'Female' ?
          <div className="flex flex-col items-center justify-center h-full">
            <i className="fa-solid fa-person-dress text-pink-300"></i>
          </div> :
          <div className="flex items-center h-full">
          <i className="fa-solid fa-person text-purple-300"></i>
          </div>  :
          <>
          <div className={`flex items-center justify-center text-gray-400 group-hover:text-blue-200 ${selected && 'text-white'}`}>
            <p>{seat._id}</p>
          </div>
          <p className={`text-sm bg-gray-400 rounded-[5px] w-4 h-1 sm:w-5 sm:h-1.5 mb-2 group-hover:bg-blue-200 ${selected && 'bg-white'}`}></p>
          </>
        }
      </div>
      <p className="text-gray-400 text-xs">{ seat.isBooked ? 'Sold' : seat.price}</p>
    </div>
  );
}


function SeatLayout({seatsArray}){
  // console.log(lowerSeats)
  return (
    <div id="parent" className="flex flex-col gap-1 p-3 sm:p-4  m-2">
      {
        Array.from({length : 6}, (_, rowIndex) =>(
            <div key={rowIndex} className="flex items-center gap-3 sm:gap-6">
              {
                seatsArray[rowIndex*3] && (
                  <Seat seat={seatsArray[rowIndex*3]} />
                )
              }

              <div className="flex items-center sm:gap-1.5 gap-[2px] p-2">
                {
                  seatsArray[rowIndex*3+1] && (
                  <Seat seat={seatsArray[rowIndex*3+1]} />
                )
                }
                {
                  seatsArray[rowIndex*3+2] && (
                  <Seat seat={seatsArray[rowIndex*3+2]} />
                )
                }
              </div>
            </div>
          )
        )
      }
    </div>
  );
}



export default DeckLayout

