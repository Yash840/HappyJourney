import { useAppContext } from "../contexts/AppContext";
import DeckLayout from "./Deck";
import { images } from "../assets/assets.js";
import { useState, useEffect } from "react";


const gallery = [
  images.Banglore,
  images.Mumbai,
  images.Pune,
  images.newBanner
]


const ROUTES = [
  'Stop-1', 'Stop-2', 'Stop-3', 'Stop-4', 'Stop-5'
]

function SeatSelection( {bus} ){
  if (!bus) {
    return <div className="flex items-center justify-center h-full">Loading bus details...</div>;
  }
  return (
  <div id="main-wrapper"
  className="flex justify-between items-center h-full"
  >
    <SeatMap />
    <ScheduleDetails bus={bus} />
  </div>
  );
}

function SeatMap(){
  return (
    <div id="seat-selection-area"
    className="overflow-auto hidden-scrollbar h-full m-2 w-[50%] rounded-md border-2 border-dashed border-blue-500"
    >
      <DeckLayout />
    </div>
  );
}

function ScheduleDetails({bus}){
  const {selectedSeats, setBillAmt, setSelectedSeats} = useAppContext();
  return (
    <div id="side-details" className="flex flex-col  h-full w-[50%] p-4 mb-3 mt-3 rounded-md bg-white">
      <div id="bus-profile">
        <div id="bus-details"
      className="flex items-center justify-between "
      >
        <div id="bus-name"
        className="flex flex-col items-start"
        >
          <h1 className="text-xl text-black font-semibold">{bus.operator}</h1>
          <p className="text-xs text-gray-400 ">{bus.source} to {bus.destination} • {bus.model}</p>
          <p className="text-xs text-gray-400 ">{bus.departure} - {bus.arrival}</p>
        </div>
        {
          selectedSeats.length > 0 && <div className="bg-blue-500 hover:bg-blue-600 rounded-lg flex flex-col items-center px-2 py-1 cursor-pointer">
          <p className="text-white">PROCEED</p>
          <p className="text-xs text-gray-300">{selectedSeats.length} Seats</p>
        </div>
        }
        
        <div id="rating"
        className="flex flex-col items-center justify-between w-[50px] h-[50px] rounded-xl bg-blue-500 text-center mb-5"
        >
          <p className="w-full bg-blue-500 rounded-t-xl text-white font-bold p-2">{bus.rating}</p>
          <i className="fa-solid fa-star w-full bg-blue-300 text-xs  text-blue-500 font-bold rounded-b-xl p-1"></i>
          </div>
        </div>
        <div id="gallery"
        className="flex items-center gap-3 overflow-x-auto hidden-scrollbar mt-2 mb-4 px-4"
        >
          {
            gallery.map((img, i) => (
              <img key={i} src={img} alt='img' className="h-[150px] w-[300px] rounded-xl"/>
            ))
          }
        </div>
      </div>

      
      <div id='details-nav-bar' className="flex items-center justify-evenly w-full border-1 border-white border-b-gray-500 pb-2 sticky top-0 z-50 mt-0 text-xs text-gray-700">
        <a href="#route-details">Route</a>
        <a href="#features">Features</a>
        <a href="#policies">Policies</a>
        <a href="#operator-details">Operator</a>
      </div>

      <div id='details-content' className="overflow-y-auto thin-scrollbar pt-2 flex-1 relative z-10 mt-2">
        <div id="route-details">
          <div className="flex items-center flex-wrap gap-2 bg-blue-200 rounded-lg p-2">
            <h1 className="text-blue-500 font-medium bg-white rounded-lg p-2">Route Of Journey</h1> 
            <hr />
            <p className="text-blue-500 font-medium">  {bus.source} » </p>
            {
              ROUTES.map((route, ind) => (
                <p key={ind} className="text-blue-500 font-medium">{route} » </p>
              ))
            }
            <p className="text-blue-500 font-medium"> {bus.destination}</p>
          </div>
        </div>

        <div id="features"
        className="bg-yellow-200 rounded-lg p-2 flex flex-col gap-2 mt-4"
        >
          <h1 className="text-yellow-600 font-medium bg-white rounded-lg p-2 mb-1 w-35">Bus Features</h1>
          <div className="flex items-center gap-3 p-1">
            <div className="flex items-center justify-center w-9 h-9 bg-yellow-100 rounded-full">
              <i className="fa-regular fa-clock text-yellow-600 text-xl"></i>
            </div>
            <p className="text-yellow-700">On Time Service</p>
          </div>
          <div className="flex items-center gap-3 p-1">
            <div className="flex items-center justify-center w-9 h-9 bg-yellow-100 rounded-full">
              <i className="fa-solid fa-map-location-dot text-yellow-600 text-xl"></i>
            </div>
            <p className="text-yellow-700">Live Tracking Available</p>
          </div>
          <div className="flex items-center gap-3 p-1">
            <div className="flex items-center justify-center w-9 h-9 bg-yellow-100 rounded-full">
              <i className="fa-solid fa-bus-simple text-yellow-600 text-xl"></i>
            </div>
            <p className="text-yellow-700">Well Maintained Buses</p>
          </div>
          <div className="flex items-center gap-3 p-1">
            <div className="flex items-center justify-center w-9 h-9 bg-yellow-100 rounded-full">
              <i className="fa-solid fa-users text-yellow-600 text-xl"></i>
            </div>
            <p className="text-yellow-700">Friendly Staff</p>
          </div>
        </div>

        <div id="policies"
        className="bg-red-200 rounded-lg p-2 flex flex-col gap-2 mt-4"
        >
          <h1 className="text-red-500 font-medium bg-white rounded-lg p-2 mb-1 w-35">Bus Policies</h1>
          <div className="flex items-center gap-3 p-1">
            <div className="flex items-center justify-center w-9 h-9 bg-red-100 rounded-full">
              <i className="fa-solid fa-paw text-red-500 text-xl"></i>
            </div>
            <p className="text-red-700">Pets Not Allowed</p>
          </div>
          <div className="flex items-center gap-3 p-1">
            <div className="flex items-center justify-center w-9 h-9 bg-red-100 rounded-full">
              <i className="fa-solid fa-wine-bottle text-red-500 text-xl"></i>
            </div>
            <p className="text-red-700">Carrying or consuming liquor inside the bus is prohibited</p>
          </div>
          <div className="flex items-center gap-3 p-1">
            <div className="flex items-center justify-center w-9 h-9 bg-red-100 rounded-full">
              <i className="fa-solid fa-child-reaching text-red-500 text-xl"></i>
            </div>
            <p className="text-red-700">Children above the age of 5 will need a ticket</p>
          </div>
          <div className="flex items-center gap-3 p-1">
            <div className="flex items-center justify-center w-9 h-9 bg-red-100 rounded-full">
              <i className="fa-solid fa-suitcase-rolling text-red-500 text-xl"></i>
            </div>
            <p className="text-red-700">Excess baggage over 10 kgs per passenger will be chargeable</p>
          </div>
        </div>

        <div id="operator-details"
        className="bg-green-200 rounded-lg p-2 flex flex-col gap-2 mt-4"
        >
          <h1 className="text-green-500 font-medium bg-white rounded-lg p-2 mb-1 w-35">Operator Details</h1>
          <div className="flex items-center gap-3 p-1">
            <div className="flex items-center justify-center w-9 h-9 bg-green-100 rounded-full">
              <i className="fa-solid fa-user-tie text-green-500 text-xl"></i>
            </div>
            <p className="text-green-700">{bus.operator || 'Dummy Operator'}</p>
          </div>
          <div className="flex items-center gap-3 p-1">
            <div className="flex items-center justify-center w-9 h-9 bg-green-100 rounded-full">
              <i className="fa-solid fa-location-dot text-green-500 text-xl"></i>
            </div>
            <p className="text-green-700">{'44, City Mall Shop No.4, Pune, Maharashtra 411009'}</p>
          </div>
          <div className="flex items-center gap-3 p-1">
            <div className="flex items-center justify-center w-9 h-9 bg-green-100 rounded-full">
              <i className="fa-solid fa-phone text-green-500 text-xl"></i>
            </div>
            <p className="text-green-700">{'+91 00000 00000'}</p>
          </div>
          <div className="flex items-center gap-3 p-1">
            <div className="flex items-center justify-center w-9 h-9 bg-green-100 rounded-full">
              <i className="fa-solid fa-envelope text-green-500 text-xl"></i>
            </div>
            <p className="text-green-700">{'bus@happyJ.com'}</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default SeatSelection