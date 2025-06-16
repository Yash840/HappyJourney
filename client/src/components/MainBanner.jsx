import { images } from '../assets/assets.js'
import Search from './Search.jsx';

function MainBanner(){
  return (
    <div className="flex justify-center w-full px-4 md:px-12 lg:px-24">
      {/* Desktop/Tablet Banner */}
        <div className='relative w-full h-[500px] overflow-hidden rounded-2xl mt-10 hidden sm:block'>
          <img 
            src={images.newBanner} 
            alt="Travel destination banner"
            className='absolute w-full h-full inset-0 object-cover object-bottom transform scale-105 transition-transform duration-10000 hover:scale-100'
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center rounded-2xl">
            <h1 className='text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-3 drop-shadow-lg'>Your journey starts here</h1>
            <p className='text-white text-lg mb-6 max-w-2xl px-4 drop-shadow-md'>Book your bus tickets with ease and enjoy a comfortable ride to your destination</p>
            <Search />
      
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