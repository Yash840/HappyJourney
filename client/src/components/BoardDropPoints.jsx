import { useState } from "react";

const boarding_points = [
  {point : 'Boarding Point 1', arrivalTime : 'xx:xx'},
  {point : 'Boarding Point 2', arrivalTime : 'xx:xx'},
  {point : 'Boarding Point 3', arrivalTime : 'xx:xx'},
  {point : 'Boarding Point 4', arrivalTime : 'xx:xx'},
  {point : 'Boarding Point 5', arrivalTime : 'xx:xx'},
  {point : 'Boarding Point 6', arrivalTime : 'xx:xx'},
  {point : 'Boarding Point 7', arrivalTime : 'xx:xx'},
  {point : 'Boarding Point 8', arrivalTime : 'xx:xx'},
]

const dropping_points = [
  {point : 'Dropping Point 1', arrivalTime : 'xx:xx'},
  {point : 'Dropping Point 2', arrivalTime : 'xx:xx'},
  {point : 'Dropping Point 3', arrivalTime : 'xx:xx'},
  {point : 'Dropping Point 4', arrivalTime : 'xx:xx'},
  {point : 'Dropping Point 5', arrivalTime : 'xx:xx'},
  {point : 'Dropping Point 6', arrivalTime : 'xx:xx'},
  {point : 'Dropping Point 7', arrivalTime : 'xx:xx'},
  {point : 'Dropping Point 8', arrivalTime : 'xx:xx'},
  {point : 'Dropping Point 5', arrivalTime : 'xx:xx'},
  {point : 'Dropping Point 6', arrivalTime : 'xx:xx'},
  {point : 'Dropping Point 7', arrivalTime : 'xx:xx'},
  {point : 'Dropping Point 8', arrivalTime : 'xx:xx'},
]

function BoardDropPoints(){
  const [boardPoint, setBoardPoint] = useState('');
  const [dropPoint, setDropPoint] = useState('');

  const selectedPointStyle = 'bg-blue-500 text-white'

  return (
    <div id="board-drop-points"
    className="flex items-stretch justify-between w-full p-4"
    >
      <div id="board-points"
      className="bg-blue-200 rounded-md p-2 m-3 w-full h-[500px] overflow-y-auto hidden-scrollbar border-2 border-dashed border-blue-500"
      >
        <h1 className="text-center text-white bg-blue-500 rounded-md p-2 font-medium text-xl sticky top-0 z-10">Select Boarding Point</h1>
        <div className="flex flex-col mt-4">
          {
            boarding_points.map((pt, i) => (
              <div key={i} className={`flex items-center cursor-pointer hover:bg-blue-300 justify-between p-2 rounded-md
              ${boardPoint === pt.point && selectedPointStyle}`}
              onClick={ () => setBoardPoint(pt.point)}
              >
                <div 
                className={`flex items-center justify-center text-blue-200 w-7 h-7 rounded-full
                  ${boardPoint === pt.point && 'bg-blue-500 text-white'}
                  `}
                ><i className='fa-solid fa-van-shuttle fa-flip-horizontal text-2xl'></i></div>
                <div className="flex flex-col items-start justify-center">
                  <h2 className="text-lg">{pt.point}</h2>
                  <p className="text-xs text-gray-400">{pt.arrivalTime}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div id="drop-points"
      className="bg-yellow-200 rounded-md p-2 m-3 w-full h-[500px] overflow-y-auto hidden-scrollbar border-2 border-dashed border-yellow-500"
      >
        <h1 className="text-center text-white bg-yellow-500 rounded-md p-2 font-medium text-xl sticky top-0 z-10">Select Dropping Point</h1>
        <div className="flex flex-col mt-4">
          {
            dropping_points.map((pt, i) => (
              <div key={i} className={`flex items-center justify-between p-2 hover:bg-yellow-300  cursor-pointer rounded-md
              ${dropPoint === pt.point && 'bg-yellow-500 text-white'}`}
              onClick={ () => setDropPoint(pt.point)}
              >
                <div 
                className={`flex items-center justify-center text-yellow-200 w-7 h-7 rounded-full
                  ${dropPoint === pt.point && 'bg-yellow-500 text-white'}
                  `}
                ><i className='fa-solid fa-van-shuttle text-2xl'></i></div>
                <div className="flex flex-col items-start justify-center">
                  <h2 className="text-lg">{pt.point}</h2>
                  <p className="text-xs text-gray-400">{pt.arrivalTime}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default BoardDropPoints