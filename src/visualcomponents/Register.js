import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { BsApple } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { Context } from "../Context";
import {logins} from '../allLists'

export default function Register() {
  const $ = useContext(Context);
  useEffect(() =>{
    console.log(logins);
  })
  return (
    <div className='sign_container' style={{background : $.bgcolor ? $.color_list :  $.color_list }}>
    <div className="sign_content">
      <h2 style={{fontFamily: !$.webfonts ?  $.fonts_lsit : $.fonts_lsit,}}>Sign up</h2>
      <div className="sign_info">
        <div className="sign_input">
        <h4 style={{fontFamily: !$.webfonts ?  $.fonts_lsit : $.fonts_lsit,}}>Username</h4>
        <span><FaRegUser /><input type="text" placeholder="type your username" onChange={(e) => $.setField({...$.field, username : e.target.value})} style={{background : $.bgcolor ? $.color_list :  $.color_list }} /></span>
        </div>
        <div className="sign_input">
        <h4 style={{fontFamily: !$.webfonts ?  $.fonts_lsit : $.fonts_lsit,}}>Password</h4>
        <span><RiLockPasswordLine /><input type="text" placeholder="type your password" onChange={(e) => $.setField({...$.field, password : e.target.value})} style={{background : $.bgcolor ? $.color_list :  $.color_list }} /></span>
        </div>
        <div className="sign_input">
        <h4 style={{fontFamily: !$.webfonts ?  $.fonts_lsit : $.fonts_lsit,}}>email</h4>
        <span><MdEmail /><input type="email" placeholder="type your email" onChange={(e) => $.setField({...$.field, email : e.target.value})} style={{background : $.bgcolor ? $.color_list :  $.color_list }}/></span>
        </div>
        <button onClick={() => {
            localStorage.setItem('reginfo', JSON.stringify($.field));
            window.location.reload();
        }}>Sign in</button>
        <p style={{fontFamily: !$.webfonts ?  $.fonts_lsit : $.fonts_lsit,}}>already sign ,<Link to='/Sign' onClick={() => $.setforloader(!$.forloader)}>Login!</Link></p>
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
