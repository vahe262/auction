import { Swiper, SwiperSlide } from "swiper/react";
import { list_home_swiper } from "../../allLists";
import 'swiper/css';

export default function HomeSwiper() {
  return <div className="home_swiper" >
        <Swiper grabCursor="true" loop="true">
            {list_home_swiper.map(home => {
                return <SwiperSlide key={home}>
                    <div className="swiper_picture" style={{background:`url(${home}) no-repeat center center / cover`}}></div>
                </SwiperSlide>
            })}
        </Swiper>
  </div>;
}