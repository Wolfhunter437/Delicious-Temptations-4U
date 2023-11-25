import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';

export default function Gallery() {
  return (
    <div className='container' id='gallery'>
      <div className="row">
        <div className="galleryTry">
          <div className="galleryContent">
          <h3 className='Gallery fade-in'>Our Creation</h3>
          <p className='galleryText fade-in'>Step into our gallery and immerse yourself in a visual feast of irresistible delights. From intricately designed cakes to decadent cookies, each image tells a story of craftsmanship and flavor. Explore the artistry behind our creations, and get ready to embark on a sensory journey through our delectable world</p>
          <div className="galleryContainer galleryContainer1 fade-in">
              <Swiper
                effect={'cards'}
                grabCursor={true}
                autoplay={{
                  delay: 4500,
                  disableOnInteraction: false,
                }}
                loop={true}
                navigation={true}
                modules={[EffectCards, Pagination, Navigation, Autoplay]}
                className="mySwiper">
                <SwiperSlide className='galleryImgContainer'>
                  <img className='galleryImg' src="assets/1.jpg" alt=''/>
                </SwiperSlide>
                <SwiperSlide className='galleryImgContainer'>
                  <img className='galleryImg' src="assets/2.jpg" alt=''/>
                </SwiperSlide>
                <SwiperSlide className='galleryImgContainer'>
                  <img className='galleryImg' src="assets/3.jpg" alt=''/>
                </SwiperSlide>
                <SwiperSlide className='galleryImgContainer'>
                  <img className='galleryImg' src="assets/4.jpg" alt=''/>
                </SwiperSlide>
                <SwiperSlide className='galleryImgContainer'>
                  <img className='galleryImg' src="assets/5.jpg" alt=''/>
                </SwiperSlide>
                <SwiperSlide className='galleryImgContainer'>
                  <img className='galleryImg' src="assets/6.jpg" alt=''/>
                </SwiperSlide>
                <SwiperSlide className='galleryImgContainer'>
                  <img className='galleryImg' src="assets/7.jpg" alt=''/>
                </SwiperSlide>
                <SwiperSlide className='galleryImgContainer'>
                  <img className='galleryImg' src="assets/8.jpg" alt=''/>
                </SwiperSlide>
                <SwiperSlide className='galleryImgContainer'>
                  <img className='galleryImg' src="assets/9.jpg" alt=''/>
                </SwiperSlide>
                <SwiperSlide className='galleryImgContainer'>
                  <img className='galleryImg' src="assets/10.png" alt=''/>
                </SwiperSlide>
                <SwiperSlide className='galleryImgContainer'>
                  <img className='galleryImg' src="assets/14.png" alt=''/>
                </SwiperSlide>
                <SwiperSlide className='galleryImgContainer'>
                  <img className='galleryImg' src="assets/12.png" alt=''/>
                </SwiperSlide>
                <SwiperSlide className='galleryImgContainer'>
                  <img className='galleryImg' src="assets/13.png" alt=''/>
                </SwiperSlide>
                <SwiperSlide className='galleryImgContainer'>
                  <img className='galleryImg' src="assets/11.jpg" alt=''/>
                </SwiperSlide>
                <SwiperSlide className='galleryImgContainer'>
                  <img className='galleryImg' src="assets/15.png" alt=''/>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
