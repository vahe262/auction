import React, { useContext } from 'react'
import { logistic } from '../../allLists'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css'
export default function LogisticsReserve() {

  
  return (
    <div className='logistic_reserve'>
      <Swiper modules={[Navigation]} navigation loop="true" grabCursor="true">
        {logistic.map((logistic) => {
          return <SwiperSlide key={logistic}>
            <div className='logistic_swiper' style={{background: `url(${logistic}) no-repeat center center / cover`}}></div>
          </SwiperSlide>
        })}
      </Swiper>
    </div>  
  )
}

