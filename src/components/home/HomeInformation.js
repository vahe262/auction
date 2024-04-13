import { useContext } from "react"
import { Context } from "../../Context"


export default function HomeInformation() {
  const $ = useContext(Context)
  return (
    <div className="home_information"   >
        <h1>100% ONLINE AUTO AUCTIONS</h1>
        <h2 style={{color : $.bgcolor ? $.color_list :  $.color_list,fontFamily: !$.webfonts ?  $.fonts_lsit : $.fonts_lsit }}>The Most Popluar cars</h2>
        <p style={{color : $.bgcolor ? $.color_list :  $.color_list, fontFamily: !$.webfonts ?  $.fonts_lsit : $.fonts_lsit, }} > Auto auctions are the most popular method to sell used vehicles in Japan. Most customers are Japanese seeking a cheap vehicle to start with or replace their older vehicle. There are many also trying to sell their vehicles. Individuals though cannot directly use auto auctions, but must go through those holding auction membership.In Japanese law, only dealerships may become members of auto auctions. The system allows people to have access to information, but keeps the auctions orderly with only professionals actually able to bid.
A small percentage of the dealers that are members of Japanese auto auctions are also used vehicle exporters that most often use the auto auctions as their primary source of used vehicles. Other than these exporters, most members are used vehicle dealerships that sell in Japan and are used by Japanese people to find a car they want.
In Japan, there are over 30 well-known auto auction groups and over 200 auto auction locations throughout Japan. Additionally, there are smaller auctions held for specialized items. Furthermore, large numbers of cars in Japan are auctioned online, using various types of auction software. Auction inspection sheets allow buyers and inspectors to evaluate the worth of a car over such systems.</p>
    </div>
  )
}
  