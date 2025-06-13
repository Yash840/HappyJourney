import Footer from "../components/Footer";
import MainBanner from "../components/MainBanner";
import NavBar from "../components/NavBar";
import NewsLetter from "../components/NewsLetter";
import PopularRoutes from '../components/PopularRoutes'

function Home(){
  return (
    <div>
      <MainBanner />
      <PopularRoutes />
      <NewsLetter />
    </div>
  );
}

export default Home