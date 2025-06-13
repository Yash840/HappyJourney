import { popLocations } from "../assets/assets";

function PopularRoutes(){
  return (
    <div className="px-24 my-8">
      <h1 className="text-xl font-bold">Popular Cities</h1>
      <div className="flex items-center gap-4 mt-4">
        {
        popLocations.map(city => <CityCard city = {city} key= {city.id}/>)
        }
      </div>
    </div>
  );
}

export default PopularRoutes


function CityCard({city}){
  return (
    <div className="flex flex-col relative items-center justify-center">
      <img src={city.img} alt={city.name} className="w-[300px] h-[150px] object-cover rounded-sm"/>
      <p className="mt-2">{city.name}</p>
    </div>
  );
}