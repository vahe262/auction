import { Swiper, SwiperSlide } from "swiper/react";
import { png_swiper } from "../../allLists";
import { Link } from "react-router-dom";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useContext, useState } from "react";
import { Context } from "../../Context";

export default function HomePngSwiper() {
  const [effect, setEffect] = useState(false);
  const $ = useContext(Context)
  return (
    <div className="home_png_swiper">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        loop="true"
        grabCursor="true"
        onSlideChange={() => {
          setEffect(false);
          setTimeout(() => {
            setEffect(true);
          }, 150);
        }}
      >
        {png_swiper.map((png) => {
          return (
            <SwiperSlide key={png.id}>
              <div className="png_container">
                <div
                  className="png_left_side"
                  style={{
                    background: `url(${png.picture}) no-repeat center center / contain`,
                    opacity: effect ? 1 : 0,
                    transform: effect ? "scale(1)" : "scale(0)",
                  }}
                ></div>
                <div className="png_right_side">
                  <h2 style={{
                    opacity: effect ? 1 : 0,
                    transform: effect ? "scale(1)" : "scale(0)"
                  }}>{png.name}</h2>
                  <p style={{
                    opacity: effect ? 1 : 0,
                    transform: effect ? "scale(1)" : "scale(0)", fontFamily: !$.webfonts ? $.fonts_lsit : $.fonts_lsit
                  }} >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Rem harum necessitatibus nisi in, sed ipsa doloremque, ullam
                    libero repellat nesciunt voluptates voluptatem. Est autem
                    ex, at explicabo nostrum dolores tenetur veniam amet, optio
                    animi veritatis vitae ullam et necessitatibus accusamus
                    facilis doloremque vero error. Autem recusandae inventore
                    laboriosam officiis impedit!
                  </p>
                  <h4 style={{
                    opacity: effect ? 1 : 0,
                    transform: effect ? "scale(1)" : "scale(0)"
                  }}>{png.price}$</h4>
                  <Link to="/">
                    <button style={{
                      opacity: effect ? 1 : 0,
                      transform: effect ? "scale(1)" : "scale(0)", fontFamily: !$.webfonts ? $.fonts_lsit : $.fonts_lsit
                    ,background : $.bgcolor ? $.color_list :  $.color_list,color : 'white' }}>Go to Auction</button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
