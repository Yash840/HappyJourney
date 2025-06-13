import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import NavBar from './components/NavBar.jsx';
import Home from './pages/Home.jsx';
import Buses from './pages/Buses.jsx';

function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/routes' Component={Buses} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App
