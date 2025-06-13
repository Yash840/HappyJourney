import { NavLink } from 'react-router-dom';
import { images } from '../assets/assets.js'
import { useState } from 'react'
import { useAppContext } from '../contexts/AppContext.jsx';

function NavBar(){
  const [open, setOpen] = useState(false);
  const { user, setUser }  = useAppContext();

  async function logOut(e){
    e.stopPropagation();
    setUser(false);
  }

  return (
    <nav className='flex justify-between items-center px-6 mr-0 md:px-14 lg:px-20 xl:px-10 py-4 border-b border-gray-300 bg-white relative transition-all shadow-sm'>
      <div className='sm:flex justify-between items-center gap-12 hidden'>
        <NavLink to='/'><img src={images.Logo} alt="HappyJourney" className='h-9 transition-transform hover:scale-105'/></NavLink>
        <div className='flex justify-between items-center gap-8 text-gray-600 font-medium'>
          <NavLink to='/' className='hover:text-blue-600 underline-offset-8 hover:underline decoration-2 transition duration-300 ease-in-out'>Home</NavLink>
          <NavLink to='/routes' className='hover:text-blue-600 underline-offset-8 hover:underline decoration-2 transition duration-300 ease-in-out'>Routes</NavLink>
          <NavLink to='/bookings' className='hover:text-blue-600 underline-offset-8 hover:underline decoration-2 transition duration-300 ease-in-out'>My Bookings</NavLink>
        </div>
      </div>

      {!user && <button className='bg-blue-600 rounded-md p-2 w-24 text-center text-white font-medium hover:bg-blue-500 transition-colors hidden sm:block hover:shadow-md'>Login</button>}

      {user && <div className='relative group'>
        <img src={images.DefUser} alt='User' className='h-[45px] w-[45px] rounded-full border-2 border-gray-200 hover:border-blue-400 transition-all cursor-pointer' />
        <div className='absolute right-0 hidden group-hover:flex gap-2 py-3 flex-col justify-start items-center bg-white shadow-lg rounded-md px-4 w-[120px] mt-1 transition-all z-10'>
          <NavLink to='account' className='text-gray-700 hover:text-blue-600 w-full text-center transition-colors'>Account</NavLink>
          <hr className='w-full border-gray-200' />
          <button 
          className='text-gray-700 hover:text-red-500 w-full text-center transition-colors' 
          onClick={logOut} >Logout</button>
        </div>
      </div>}

      <div className='sm:hidden w-full'>
        <div className='flex justify-between items-center w-full relative'>
          <NavLink to='/'><img src={images.Logo} alt="HappyJourney" className='h-9 transition-transform hover:scale-105'/></NavLink>
          <button onClick={(e) => {
            open ? setOpen(false) : setOpen(true);
            e.stopPropagation();
          }} className='p-2 mr-2 transition-colors hover:text-blue-600'>
            {open ? <i className="fa-solid fa-circle-xmark text-xl"></i>: <i className="fa-solid fa-bars text-xl"></i>}
          </button>
        </div>

        <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-lg rounded-b-md py-4 flex-col items-start gap-3 px-5 text-sm md:hidden z-20 border-t border-gray-100`}>
          <NavLink to='/' className='hover:text-blue-600 p-2 w-full transition-colors'>Home</NavLink>
          <NavLink to='/routes' className='hover:text-blue-600 p-2 w-full transition-colors'>Routes</NavLink>
          <NavLink to='/bookings' className='hover:text-blue-600 p-2 w-full transition-colors'>My Bookings</NavLink>
          <hr className='w-full border-gray-200' />
          <button className='bg-blue-600 rounded-md p-2 w-full text-center text-white font-medium hover:bg-blue-500 transition-colors mt-2'>Login</button>
        </div>
      </div>
    </nav>
  );
}
export default NavBar