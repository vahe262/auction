import React, { useContext } from 'react'
import Navbar from './Navbar'
import { Link } from "react-router-dom";
import { FiPhone } from "react-icons/fi";
import { FaAppStore } from "react-icons/fa";
import { RiGooglePlayLine } from "react-icons/ri";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { PiTiktokLogoLight } from "react-icons/pi";
import { FiYoutube } from "react-icons/fi";
import { Context } from '../Context';

export default function Footer() {
  const $ = useContext(Context);
  return (
    <footer style={{background : $.bgcolor ? $.color_list :  $.color_list }}>
      <div className="connect_us" >
        <h2>Connect with Us</h2>
        <Link to='https://www.facebook.com/Copart'><CiFacebook />Facebook</Link>
        <Link to='https://www.instagram.com/copart1982/'><FaInstagram />Instagram</Link>
        <Link to='https://www.tiktok.com/@copart?'><PiTiktokLogoLight />TikTok</Link>
        <Link to='https://www.youtube.com/copart'><FiYoutube />YouTube</Link>
        <Link to='https://apps.apple.com/us/app/copart-online-auto-auctions/id414275302'><FaAppStore />App Store</Link>
        <Link to='https://play.google.com/store/apps/details?id=com.copart.membermobile&hl=en&pli=1'><RiGooglePlayLine />Google Play</Link>
        <Link to='https://www.google.com/search?q=copart&sca_esv=ea8a5e562c8e2e39&sxsrf=ACQVn093-CCI3mfkVp8Ieys02QZl9wDuqA%3A1712078625327&ei=IT8MZtXGE9Dlxc8P87K3gAI&udm=&ved=0ahUKEwiV26jyhaSFAxXQcvEDHXPZDSAQ4dUDCBA&uact=5&oq=copart&gs_lp=Egxnd3Mtd2l6LXNlcnAiBmNvcGFydDIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzINEAAYgAQYigUYQxiwAzIZEC4YgAQYigUYQxjHARjRAxjIAxiwA9gBBDIZEC4YgAQYigUYQxjHARjRAxjIAxiwA9gBBDIZEC4YgAQYigUYQxjHARjRAxjIAxiwA9gBBDIZEC4YgAQYigUYQxjHARjRAxjIAxiwA9gBBEiWJFAAWJYYcAJ4AZABAZgBzQGgAcsIqgEFMC42LjG4AQPIAQD4AQGYAgigAqIHqAIRwgIHECMY6gIYJ8ICExAAGIAEGIoFGEMY6gIYtALYAQHCAhwQLhiABBiKBRhDGMcBGNEDGMgDGOoCGLQC2AECwgIKECMYgAQYigUYJ8ICDBAjGIAEGIoFGBMYJ8ICExAuGIAEGIoFGEMYsQMYxwEY0QPCAgoQABiABBiKBRhDwgIQEC4YgAQYigUYQxjHARivAcICEBAuGIAEGIoFGEMYxwEY0QPCAgsQLhiABBjHARivAcICIhAuGIAEGIoFGEMYsQMYxwEY0QMYlwUY3AQY3gQY4ATYAQPCAg0QABiABBiKBRhDGLEDwgIIEAAYgAQYsQPCAgUQABiABMICCxAAGIAEGLEDGIMBwgIOEC4YgAQYsQMYxwEY0QPCAg0QABiABBgUGIcCGLEDwgITEC4YgAQYFBiHAhixAxjHARjRA8ICCBAAGIAEGMsBwgIOEC4YrwEYxwEYywEYgATCAiIQLhiABBgUGIcCGLEDGMcBGNEDGJcFGNwEGN4EGOAE2AEDmAMG4gMFEgExIECIBgGQBg26BgYIARABGAG6BgYIAhABGAi6BgYIAxABGBS6BgQIBBgIkgcDMi42oAf5ZA&sclient=gws-wiz-serp'><FiPhone />+374 96 88 88 44</Link>
        <Link to='/Contact' onClick={() => $.setforloader(!$.forloader)}>Help</Link>
      </div>
      <div className="brands_of_cars">
        <h2>Brands of cars available here</h2>
        <p>Dodge</p>
        <p>Ford</p>
        <p>Mazda</p>
        <p>Mercedes</p>
        <p>Bmw</p>
        <p>Audi</p>
        <p>Lexus</p>
        <p>Toyota</p>
        <p>Nissan</p>
      </div>
      <div className="footer_navbar">
        <Navbar />
        <p>&copy; Drive & Bid Auto Company : All rigths reserved from 2017</p>
      </div>
      
    </footer>
  )
}
