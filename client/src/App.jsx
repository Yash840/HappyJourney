import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import NavBar from './components/NavBar.jsx';
import Home from './pages/Home.jsx';
import { buses } from './assets/assets.js';
import Deck from './components/Deck.jsx';
import { Toaster } from 'react-hot-toast';
import Schedules from './pages/Schedules.jsx';
import { BookingDetailsProvider } from './contexts/BookingReqContext.jsx';
import { SchduleContextProvider } from './contexts/ScheduleContext.jsx';

function App() {
  return (
    <div>
      <div className='sticky top-0 z-30'>
        <NavBar />
      </div>
      
      <Toaster />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/buses' element={
          <BookingDetailsProvider>
              <SchduleContextProvider>
                <Schedules buses={buses} />                
              </SchduleContextProvider>
          </BookingDetailsProvider>
          } />
        <Route path='/deck' element = {<Deck />} />

      </Routes>

      <Footer />
    </div>
  );
}

export default App
