import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImUserTie } from "react-icons/im";
import { IoMdHeart } from "react-icons/io";
import { useContext } from "react";
import { Context } from "../Context";


export default function Header() {
  const $ = useContext(Context);
  
  return (
    <header style={{ background : $.bgcolor ? $.color_list :  $.color_list   }}   >
      <Link to="/" onClick={() => $.setforloader(!$.forloader)}>Drive & Bid <br /> Auto Company</Link>
      <Navbar />
      <div className="header_icons">
        <Link to='/Favorite' onClick={() => $.setforloader(!$.forloader)}><IoMdHeart /></Link>
        <Link to='/Sign' onClick={() => $.setforloader(!$.forloader)}><ImUserTie /></Link>
        <div className="user" style={{display : localStorage.getItem('reginfo') !== null ? 'block' : 'none'}}>
            <h2>{localStorage.getItem('reginfo') !== null ? JSON.parse(localStorage.getItem('reginfo')).username : ''}</h2>
            <span onClick={() => {
                localStorage.removeItem('reginfo');
                window.location.reload();
            }}>Logout</span>
        </div>
        <GiHamburgerMenu onClick={() => {   
            $.setSettings(!$.settings);                
        }} />
      </div>
    </header>
  )
}