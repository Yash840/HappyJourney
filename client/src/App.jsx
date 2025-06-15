import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import NavBar from './components/NavBar.jsx';
import Home from './pages/Home.jsx';
import Buses from './pages/Buses.jsx';
import { buses } from './assets/assets.js';
import Deck from './components/Deck.jsx';

function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/routes' element={<Buses buses={buses} />} />
        <Route path='/deck' element = {<Deck />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App
