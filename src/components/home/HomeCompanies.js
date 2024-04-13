import { Swiper, SwiperSlide } from "swiper/react";
import { companies } from "../../allLists";
import 'swiper/css';

export default function HomeCompanies() {
  return (
    <div className="home_companies" data-aos="fade-up"
    data-aos-anchor-placement="bottom-bottom">
        <Swiper slidesPerView={window.innerWidth <= 1024 ? 1 : 4} loop="true" spaceBetween={20} grabCursor="true">
            {companies.map((company,i) => {
                return <SwiperSlide key={company}>
                    <div className="swiper_company" style={{background:`url(${company}) no-repeat center center / 50%`}}></div>
                </SwiperSlide>
            })}
        </Swiper>
    </div>
  )
}
