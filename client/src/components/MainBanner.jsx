import { carousal } from '../assets/assets.js';
import Carousel from './Carousel.jsx'
import Search from './Search.jsx';

function MainBanner(){
  return (
    <div className="flex justify-center w-full px-4 md:px-12 lg:px-24">
      {/* Desktop/Tablet Banner */}
      <div className='relative w-full h-[500px] overflow-hidden rounded-2xl mt-10 hidden sm:block'>
        <div className='z-10'>
          <Carousel images={carousal} />
        </div>
        <div className="absolute inset-0 z-15 flex flex-col items-center justify-center text-center rounded-2xl pointer-events-none">
          <h1 className='text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-3 drop-shadow-lg drop-shadow-blue-500'>Your journey starts here</h1>
          <p className='text-white text-lg mb-6 max-w-2xl px-4 drop-shadow-md'>Book your bus tickets with ease and enjoy a comfortable ride to your destination</p>
          <div className="pointer-events-auto">
            <Search />
          </div>
        </div>
      </div>

      {/* Mobile Banner */}
      <div className="w-full py-8 px-4 sm:hidden">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Hey Traveler, Where are you going?</h1>
        <Search />
      </div>
    </div>
  );
}

export default MainBanner