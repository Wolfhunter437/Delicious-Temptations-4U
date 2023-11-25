import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

export default function Artisan_Cakes() {
  return (
    <>
      <div className="menuContent">
        <Swiper
          grabCursor={true}
          slidesPerView={'auto'}
          centeredSlides={true}
          spaceBetween={15}
          loop={true}
          autoplay={{
            delay: 6000,
            disableOnInteraction: true,
          }}
          // pagination={{
          //   dynamicBullets: true,
          // }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper menuContentInner">
          <SwiperSlide className='menuContentInnerItem'>
            <div className="imgContainerBg" style={{ background: 'var(--bgColor)' }}>
              <div className="imgContainer">
                <img src="assets/7.jpg" alt="" />
              </div>
            </div>
            <div className='menuContentInnerItemText' style={{ background: 'var(--bgColor)' }}>
              <h3 className='cakeName'>Whiskey Barrel Cake</h3>
              <p className='cakePrice'>1 kg- ₹ 1600</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='menuContentInnerItem'>
            <div className="imgContainerBg" style={{ background: 'var(--color3)' }}>
              <div className="imgContainer">
                <img src="assets/3.jpg" alt="" />
              </div>
            </div>
            <div className='menuContentInnerItemText' style={{ background: 'var(--color3)' }}>
              <h3 className='cakeName'>Yoga Theme Cake</h3>
              <p className='cakePrice'>1 kg- ₹ 1300</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='menuContentInnerItem'>
            <div className="imgContainerBg" style={{ background: 'var(--color2)' }}>
              <div className="imgContainer">
                <img src="assets/4.jpg" alt="" />
              </div>
            </div>
            <div className='menuContentInnerItemText' style={{ background: 'var(--color2)' }}>
              <h3 className='cakeName'>KFC Cake</h3>
              <p className='cakePrice'>1 kg- ₹ 1400</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='menuContentInnerItem'>
            <div className="imgContainerBg" style={{ background: 'var(--bgColor)' }}>
              <div className="imgContainer">
                <img src="assets/1.jpg" alt="" />
              </div>
            </div>
            <div className='menuContentInnerItemText' style={{ background: 'var(--bgColor)' }}>
              <h3 className='cakeName'>Queen Cake</h3>
              <p className='cakePrice'>1 kg- ₹ 1700</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='menuContentInnerItem'>
            <div className="imgContainerBg" style={{ background: 'var(--color3)' }}>
              <div className="imgContainer">
                <img src="assets/2.jpg" alt="" />
              </div>
            </div>
            <div className='menuContentInnerItemText' style={{ background: 'var(--color3)' }}>
              <h3 className='cakeName'>Princess Cake</h3>
              <p className='cakePrice'>1 kg- ₹ 1800</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='menuContentInnerItem'>
            <div className="imgContainerBg" style={{ background: 'var(--bgColor)' }}>
              <div className="imgContainer">
                <img src="assets/7.jpg" alt="" />
              </div>
            </div>
            <div className='menuContentInnerItemText' style={{ background: 'var(--bgColor)' }}>
              <h3 className='cakeName'>Whiskey Barrel Cake</h3>
              <p className='cakePrice'>1 kg- ₹ 1600</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='menuContentInnerItem'>
            <div className="imgContainerBg" style={{ background: 'var(--color3)' }}>
              <div className="imgContainer">
                <img src="assets/3.jpg" alt="" />
              </div>
            </div>
            <div className='menuContentInnerItemText' style={{ background: 'var(--color3)' }}>
              <h3 className='cakeName'>Yoga Theme Cake</h3>
              <p className='cakePrice'>1 kg- ₹ 1300</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='menuContentInnerItem'>
            <div className="imgContainerBg" style={{ background: 'var(--color2)' }}>
              <div className="imgContainer">
                <img src="assets/4.jpg" alt="" />
              </div>
            </div>
            <div className='menuContentInnerItemText' style={{ background: 'var(--color2)' }}>
              <h3 className='cakeName'>KFC Cake</h3>
              <p className='cakePrice'>1 kg- ₹ 1400</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='menuContentInnerItem'>
            <div className="imgContainerBg" style={{ background: 'var(--bgColor)' }}>
              <div className="imgContainer">
                <img src="assets/1.jpg" alt="" />
              </div>
            </div>
            <div className='menuContentInnerItemText' style={{ background: 'var(--bgColor)' }}>
              <h3 className='cakeName'>Queen Cake</h3>
              <p className='cakePrice'>1 kg- ₹ 1700</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='menuContentInnerItem'>
            <div className="imgContainerBg" style={{ background: 'var(--color3)' }}>
              <div className="imgContainer">
                <img src="assets/2.jpg" alt="" />
              </div>
            </div>
            <div className='menuContentInnerItemText' style={{ background: 'var(--color3)' }}>
              <h3 className='cakeName'>Princess Cake</h3>
              <p className='cakePrice'>1 kg- ₹ 1800</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='menuContentInnerItem'>
            <div className="imgContainerBg" style={{ background: 'var(--bgColor)' }}>
              <div className="imgContainer">
                <img src="assets/7.jpg" alt="" />
              </div>
            </div>
            <div className='menuContentInnerItemText' style={{ background: 'var(--bgColor)' }}>
              <h3 className='cakeName'>Whiskey Barrel Cake</h3>
              <p className='cakePrice'>1 kg- ₹ 1600</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='menuContentInnerItem'>
            <div className="imgContainerBg" style={{ background: 'var(--color3)' }}>
              <div className="imgContainer">
                <img src="assets/3.jpg" alt="" />
              </div>
            </div>
            <div className='menuContentInnerItemText' style={{ background: 'var(--color3)' }}>
              <h3 className='cakeName'>Yoga Theme Cake</h3>
              <p className='cakePrice'>1 kg- ₹ 1300</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='menuContentInnerItem'>
            <div className="imgContainerBg" style={{ background: 'var(--color2)' }}>
              <div className="imgContainer">
                <img src="assets/4.jpg" alt="" />
              </div>
            </div>
            <div className='menuContentInnerItemText' style={{ background: 'var(--color2)' }}>
              <h3 className='cakeName'>KFC Cake</h3>
              <p className='cakePrice'>1 kg- ₹ 1400</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='menuContentInnerItem'>
            <div className="imgContainerBg" style={{ background: 'var(--bgColor)' }}>
              <div className="imgContainer">
                <img src="assets/1.jpg" alt="" />
              </div>
            </div>
            <div className='menuContentInnerItemText' style={{ background: 'var(--bgColor)' }}>
              <h3 className='cakeName'>Queen Cake</h3>
              <p className='cakePrice'>1 kg- ₹ 1700</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='menuContentInnerItem'>
            <div className="imgContainerBg" style={{ background: 'var(--color3)' }}>
              <div className="imgContainer">
                <img src="assets/2.jpg" alt="" />
              </div>
            </div>
            <div className='menuContentInnerItemText' style={{ background: 'var(--color3)' }}>
              <h3 className='cakeName'>Princess Cake</h3>
              <p className='cakePrice'>1 kg- ₹ 1800</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <p className='message'>For customisation drop a message on WhatsApp</p>
    </>
  )
}
