import HomeCompanies from "./HomeCompanies";
import HomeInformation from "./HomeInformation";
import HomePngSwiper from "./HomePngSwiper";
import HomeSwiper from "./HomeSwiper";
import HomePopularCars from "./HomePopularCars";
import { useContext } from "react";
import { Context } from "../../Context";


export default function Home() {
  const $ = useContext(Context)
  return (
    <div className="home_container"  >
        <HomeSwiper />
        <HomePopularCars/>
        <HomeInformation />
        <HomePngSwiper />
        <HomeCompanies />
        
    </div>
  )
}