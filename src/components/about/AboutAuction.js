import React, { useContext } from "react";
import { Context } from "../../Context";

export default function AboutAuction() {
  const $ = useContext(Context)
  return (
    <div className="about_auction">
      <p style={{color : $.bgcolor ? $.color_list :  $.color_list ,fontFamily: !$.webfonts ?  $.fonts_lsit : $.fonts_lsit}}>What is a Drive & Bid Auction?</p>
      <h4 style={{color : $.bgcolor ? $.color_list :  $.color_list,fontFamily: !$.webfonts ?  $.fonts_lsit : $.fonts_lsit }}>
        Drive & Bid Auctions is the world's leading online auction site for
        used, salvage, salvage and clean title vehicles. We make it easy to
        find, bid on, and win classic cars, boats, repossessed cars, ATVs,
        exotic cars, motorcycles, and many other categories of vehicles. Used or
        salvage car buyers, auto dismantlers, dealers, auto repair shops and
        individuals can all find something for themselves at a Drive & Bid
        auction. We even have vehicles that do not require a business license,
        available in the No License Required section. We offer clean certified
        cars, salvage cars, trucks, SUVs, motorcycles, heavy equipment and more
        every weekday.
      </h4>
      <h6 style={{color : $.bgcolor ? $.color_list :  $.color_list, fontFamily: !$.webfonts ?  $.fonts_lsit : $.fonts_lsit }}>
        Choose from Drive & Bid extensive inventory of salvage and pre-owned
        vehicles
      </h6>

      <div className="about_auction_container"> 
            
      </div>
    </div>
  );
}
