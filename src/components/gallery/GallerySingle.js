import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../Context'
import { IoIosArrowBack } from "react-icons/io";
export default function GallerySingle() {
  const $ = useContext(Context)
  const [sliderindex, setSliderindex] = useState(0)
  return (
    <div className='single_conatiner'>
      <div className="single_grid">
        <div className="silgle_left_side">
          <div className="top_bar">
            <Link to='/Gallery' onClick={() => $.setforloader(!$.forloader)}><IoIosArrowBack /></Link>
            <h2>{$.ActualCar.name}</h2>
          </div>
          <img src={$.ActualCar.gallery[sliderindex]} alt="" />
          <div className="single_picture_gallery">

            {$.ActualCar.gallery.map((item,i) => {
              return <img src={item} className='slide_images' alt='' key={item} onClick={(e) =>{
                setSliderindex(i);
                document.querySelectorAll(".slide_images").forEach(item =>
                   item.classList.remove('active_slide')
                  )
                   e.target.classList.add('active_slide')
              }}></img>
            })}
          </div>
        </div>
        <div className="single_right_side">
          <div className="grid">
            <h4><span style={{fontFamily: !$.webfonts ? $.fonts_lsit : $.fonts_lsit}}>Lot</span><span>#{$.ActualCar.id * 10000000000000000}</span></h4>
            <h4><span style={{fontFamily: !$.webfonts ? $.fonts_lsit : $.fonts_lsit}}>Vin</span><span>{$.ActualCar.vin}</span></h4>
            <h4><span style={{fontFamily: !$.webfonts ? $.fonts_lsit : $.fonts_lsit}}>Vehicle Model Year</span><span>{$.ActualCar.date}</span></h4>
            <h4><span style={{fontFamily: !$.webfonts ? $.fonts_lsit : $.fonts_lsit}}>Buy without Auction</span><span>{$.ActualCar.price}$</span></h4>
            <h4><span style={{fontFamily: !$.webfonts ? $.fonts_lsit : $.fonts_lsit}}>Horse Powers</span><span>{$.ActualCar.hp}hp</span></h4>
          </div>
        </div>
      </div>
    </div>
  )
}
