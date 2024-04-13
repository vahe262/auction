import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { BsApple } from "react-icons/bs";
import { useContext } from "react";
import { Context } from "../Context";

export default function Sign() {
  const $ = useContext(Context);
  return (
    <div className='sign_container'>
      <div className="sign_content" style={{background : $.bgcolor ? $.color_list :  $.color_list }}>
        <h2 style={{fontFamily: !$.webfonts ?  $.fonts_lsit : $.fonts_lsit}}>Login</h2>
        <div className="sign_info">
          <div className="sign_input">
          <h4 style={{fontFamily: !$.webfonts ?  $.fonts_lsit : $.fonts_lsit}}>Username</h4>
          <span><FaRegUser /><input type="text" placeholder="type youre username" style={{background : $.bgcolor ? $.color_list :  $.color_list }} /></span>
          </div>
          <div className="sign_input">
          <h4 style={{fontFamily: !$.webfonts ?  $.fonts_lsit : $.fonts_lsit}}>Password</h4>
          <span><RiLockPasswordLine /><input type="text" placeholder="type youre password"  style={{background : $.bgcolor ? $.color_list :  $.color_list }}/></span>
          </div>
          <button style={{fontFamily: !$.webfonts ?  $.fonts_lsit : $.fonts_lsit}}>Sign in</button>
          <p style={{fontFamily: !$.webfonts ?  $.fonts_lsit : $.fonts_lsit}}>Not sign ,<Link to='/SignUp' onClick={() => $.setforloader(!$.forloader)}>Register!</Link></p>
          <div className="social_container">
            <FaFacebookF/>
            <FaGoogle/>
            <BsApple/>
          </div>
        </div>
  
      </div>
    </div>
  )
}
