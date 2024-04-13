import React, { useContext } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Autcion } from '../../allLists';
import { Navigation } from 'swiper/modules'
import 'swiper/css/navigation'
import { Context } from '../../Context';

export default function AboutCompany() {
    const $ = useContext(Context)
    return (
        <div className='About_Company_container'>
            <Swiper modules={[Navigation]} navigation loop="true" grabCursor="true">
                {Autcion.map((auction) => {
                    return <SwiperSlide key={auction}>
                        <div className="About_company_item" style={{ background: `url(${auction}) no-repeat center center / cover` }}><h1>Copart buildings</h1></div>
                    </SwiperSlide>
                })}
            </Swiper>
            <div className="Main_info_container">
            <div className="About_Company_info" data-aos="fade-up-right">
                <p style={{color : $.bgcolor ? $.color_list :  $.color_list,fontFamily: !$.webfonts ?  $.fonts_lsit : $.fonts_lsit }} >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur saepe distinctio dolorum qui ullam optio facilis eligendi suscipit. Iste perspiciatis quo accusantium voluptatum nesciunt incidunt provident ex ratione libero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aliquam pariatur accusantium tempore dignissimos fugit maiores, quis placeat corrupti dolorem dolor facere numquam laborum facilis exercitationem, asperiores a accusamus. Eius praesentium cumque, quaerat laborum perspiciatis explicabo quo perferendis molestias sunt recusandae fuga nulla doloremque! Obcaecati, sapiente odit minus nam, dolores temporibus aliquam voluptatem doloremque non, beatae voluptates est iusto? Vel?</p>
                <img src="https://www.youfixcars.com/wp-content/uploads/2021/04/75a72466ad4eb5f21ee4ffa7b6a31458.jpg" alt="" />
            </div >
            <div className="About_Company_info_two" data-aos="fade-up-left">
                <img src="https://static.tildacdn.com/tild6565-6366-4364-b336-616266666439/iaaiplase.jpg" alt="" />
                <p style={{color : $.bgcolor ? $.color_list :  $.color_list,fontFamily: !$.webfonts ?  $.fonts_lsit : $.fonts_lsit }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quaerat officia reprehenderit recusandae soluta eaque veritatis beatae architecto. Reprehenderit error quisquam quidem debitis tempora illo corrupti, sequi necessitatibus ratione dolores itaque totam ipsum quasi nesciunt ut blanditiis modi sint? Facilis ipsam, voluptatibus fugiat sed voluptatum esse numquam nemo, dignissimos blanditiis vitae enim eveniet saepe nihil. Consequatur, recusandae rerum ut hic corporis illum nulla ducimus harum. Veritatis soluta culpa possimus consequatur amet, maxime minus ducimus, sed ad rem animi ratione? Ut accusantium, tempore quae dolores eum animi magni dicta quasi dolorum.</p>
            </div>
            </div>
            <div className="Picss">
                
            </div>
        </div>
    )
}
