import { act, useEffect, useState } from "react";
import DeckLayout from "./Deck.jsx";
import { useAppContext } from "../contexts/AppContext.jsx";
import toast from "react-hot-toast";
import SeatSelection from "./SeatSelection.jsx";
import BoardDropPoints from "./BoardDropPoints.jsx";

function BookingOverlay({display, onClose, bus}){
  const [section, setSection] = useState('seat-selection');
  const {selectedSeats,setSelectedSeats} = useAppContext();

  useEffect(() => {
    if (display) {
      // Disable scrolling on body when overlay is shown
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable scrolling when overlay is hidden
      document.body.style.overflow = 'auto';
    }

    // Cleanup function to ensure scrolling is re-enabled when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [display]);

  const activeSectionStyle = 'bg-blue-500 text-white font-medium';

  return (
    <div className={`${display ? 'flex' : 'hidden'} flex-col fixed inset-0 z-50 items-center justify-center bg-gray-500/60 bg-opacity-50 transition duration-1000 overflow-hidden`}>
      <div className="bg-white px-1 py-2 rounded-lg shadow-lg w-[90%] max-w-2xl max-h-[90vh] min-h-[75vh] min-w-[75vw] overflow-y-auto flex flex-col border border-blue-500">
        <div className="flex items-center justify-between px-2">
          <button className="w-9 h-9"
          onClick={onClose}
          ><i className="fa-solid fa-xmark text-black text-xl"></i></button>
          <div className="flex items-center gap-3">
            <p 
            className={`rounded-lg py-2 px-3 ${section === 'seat-selection' ? activeSectionStyle : 'bg-white text-blue-500'}`}
            onClick={() => setSection('seat-selection')}
            >1. Select Your Seats</p>
            <p 
            className={`rounded-lg py-2 px-3 
              ${section === 'board-drop-points' ? activeSectionStyle : 'bg-white text-blue-500'
              }`}
            onClick={() => {
              if(selectedSeats.length === 0){
                toast.error('Select Seats first');
                return
              }
              setSection('board-drop-points')}}
            >2. Boarding/Dropping Points</p>
            <p 
            className={`rounded-lg py-2 px-3 ${section === 'passenger-details' ? activeSectionStyle : 'bg-white text-blue-500'}`}
            onClick={() => setSection('passenger-details')}
            >3. Passenger Details</p>
          </div>
          <p className="flex items-center justify-center rounded-full bg-blue-300 w-9 h-9"><i className="fa-solid fa-question text-blue-500 text-xl"></i></p>
        </div>
        <div className="overflow-hidden h-full mt-3 w-full ">
          {
            section === 'seat-selection' ? <SeatSelection bus={bus} /> : 
            section === 'board-drop-points'? <BoardDropPoints /> : <h1>hello</h1>
          }
        </div>
      </div>
    </div>
  );
}






export default BookingOverlay