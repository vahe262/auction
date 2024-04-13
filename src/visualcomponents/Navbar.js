import { NavLink } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { FaClipboardUser,FaShip } from "react-icons/fa6";
import { RiGalleryFill, RiAuctionFill } from "react-icons/ri";
import { FaEnvelopeOpenText ,FaList } from "react-icons/fa";
import { useContext } from "react";
import { Context } from "../Context";

export default function Navbar() {
  const $ = useContext(Context);
  return (
    <nav>
      <ul className="navbar" style={{background : $.bgcolor ? $.color_list :  $.color_list }}>
        <li><NavLink to="/" onClick={() => $.setforloader(!$.forloader)} style={{fontFamily: !$.webfonts ?  $.fonts_lsit : $.fonts_lsit,}}><IoIosHome /> Home</NavLink></li>
        <li><NavLink to="/About" onClick={() => $.setforloader(!$.forloader)} style={{fontFamily: !$.webfonts ?  $.fonts_lsit : $.fonts_lsit,}}><FaClipboardUser /> About us</NavLink></li>
        <li><NavLink to="/Gallery" onClick={() => $.setforloader(!$.forloader)} style={{fontFamily: !$.webfonts ?  $.fonts_lsit : $.fonts_lsit,}}><FaList/> Catalog</NavLink></li>
        <li><NavLink to="/Auction" onClick={() => $.setforloader(!$.forloader)} style={{fontFamily: !$.webfonts ?  $.fonts_lsit : $.fonts_lsit,}}><RiAuctionFill /> Auction</NavLink></li>
        <li> <NavLink to="/Logistics" onClick={() => $.setforloader(!$.forloader)} style={{fontFamily: !$.webfonts ?  $.fonts_lsit : $.fonts_lsit,}}><FaShip /> Logistics</NavLink></li>
        <li> <NavLink to="/Contact" onClick={() => $.setforloader(!$.forloader)} style={{fontFamily: !$.webfonts ?  $.fonts_lsit : $.fonts_lsit,}}><FaEnvelopeOpenText /> Contact us</NavLink></li>
      </ul>
    </nav>
  );
}