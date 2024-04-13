import React, { useContext } from 'react'
import { cars } from '../../allLists'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { Link } from 'react-router-dom'
import { Context } from '../../Context';
import { FaHeartCirclePlus,FaHeartCircleCheck } from "react-icons/fa6";

export default function HomePopularCars() {
    const $ = useContext(Context)
    return (
    <div className='home_popular_cars' data-aos="fade-up"
    data-aos-anchor-placement="bottom-bottom">
        <h2>Popular cars in auction</h2>
            <Swiper modules={[Navigation]} slidesPerView={window.innerWidth <= 1024 ? 1 : 4} spaceBetween={30} grabCursor='true' loop='true' navigation  >
                {cars.slice(0, 7).map(car => {
                    return <SwiperSlide key={car.id}>
                        <div className='home_popular_item'>
                            <img src={car.picture} alt="" />
                            <h2>{car.name}</h2>
                            <h4>${car.price},00</h4>
                            <h5>{car.date}</h5>
                            <Link to='/Single'><button style={{background : $.bgcolor ? $.color_list :  $.color_list }} onClick={() =>{
                                $.setActualSingle(car);
                                localStorage.setItem('actualcar',JSON.stringify(car));
                                $.setforloader(!$.forloader);
                            }}>View Details</button></Link>
                            {
                            !$.favorite.includes(car) ?
                            <FaHeartCirclePlus onClick={() => {
                                $.favoriteAdding(car);
                        }}/> : 
                            <FaHeartCircleCheck style={{color:'teal'}} onClick={() => {
                            $.favoriteRemoveing(car.id);
                        }}/>
                        }
                        </div>
                </SwiperSlide>
                })}
            </Swiper>
        </div>
    )
}
