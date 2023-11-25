import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

export default function Flavours_with_a_twist() {
  return (
    <>
      <div className="menuContent">
        <Swiper
          grabCursor={true}
          slidesPerView={'auto'}
          spaceBetween={15}
          centeredSlides={true}
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
              <img src="assets/13.png" alt="" />
            </div>
            </div>
            <div className='menuContentInnerItemText' style={{ background: 'var(--bgColor)' }}>
            <h3 className='cakeName'>Vanilla With Bubble Gum</h3>
            <p className='cakePrice'>1 kg- ₹ 1500</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='menuContentInnerItem'>
            <div className="imgContainerBg" style={{ background: 'var(--color3)' }}>
          <div className="imgContainer">
              <img src="assets/21.png" alt="" />
            </div>
            </div>
            <div className='menuContentInnerItemText' style={{ background: 'var(--color3)' }}>
            <h3 className='cakeName'>Pineapple Cake</h3>
            <p className='cakePrice'>1 kg- ₹ 1300</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='menuContentInnerItem'>
            <div className="imgContainerBg" style={{ background: 'var(--color2)' }}>
          <div className="imgContainer">
              <img src="assets/26.png" alt="" />
            </div>
            </div>
            <div className='menuContentInnerItemText' style={{ background: 'var(--color2)' }}>
            <h3 className='cakeName'>Vanilla Cake</h3>
            <p className='cakePrice'>1 kg- ₹ 1400</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='menuContentInnerItem'>
            <div className="imgContainerBg" style={{ background: 'var(--bgColor)' }}>
          <div className="imgContainer">
              <img src="assets/22.png" alt="" />
            </div>
            </div>
            <div className='menuContentInnerItemText' style={{ background: 'var(--bgColor)' }}>
            <h3 className='cakeName'>Pinacolada Cake</h3>
            <p className='cakePrice'>1 kg- ₹ 1700</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='menuContentInnerItem'>
            <div className="imgContainerBg" style={{ background: 'var(--color3)' }}>
          <div className="imgContainer">
              <img src="assets/15.png" alt="" />
            </div>
            </div>
            <div className='menuContentInnerItemText' style={{ background: 'var(--color3)' }}>
            <h3 className='cakeName'>Mango Berry Cloud</h3>
            <p className='cakePrice'>1 kg- ₹ 1800</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='menuContentInnerItem'>
            <div className="imgContainerBg" style={{ background: 'var(--bgColor)' }}>
            <div className="imgContainer">
              <img src="assets/13.png" alt="" />
            </div>
            </div>
            <div className='menuContentInnerItemText' style={{ background: 'var(--bgColor)' }}>
            <h3 className='cakeName'>Vanilla With Bubble Gum</h3>
            <p className='cakePrice'>1 kg- ₹ 1500</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='menuContentInnerItem'>
            <div className="imgContainerBg" style={{ background: 'var(--color3)' }}>
          <div className="imgContainer">
              <img src="assets/21.png" alt="" />
            </div>
            </div>
            <div className='menuContentInnerItemText' style={{ background: 'var(--color3)' }}>
            <h3 className='cakeName'>Pineapple Cake</h3>
            <p className='cakePrice'>1 kg- ₹ 1300</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='menuContentInnerItem'>
            <div className="imgContainerBg" style={{ background: 'var(--color2)' }}>
          <div className="imgContainer">
              <img src="assets/26.png" alt="" />
            </div>
            </div>
            <div className='menuContentInnerItemText' style={{ background: 'var(--color2)' }}>
            <h3 className='cakeName'>Vanilla Cake</h3>
            <p className='cakePrice'>1 kg- ₹ 1400</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='menuContentInnerItem'>
            <div className="imgContainerBg" style={{ background: 'var(--bgColor)' }}>
          <div className="imgContainer">
              <img src="assets/22.png" alt="" />
            </div>
            </div>
            <div className='menuContentInnerItemText' style={{ background: 'var(--bgColor)' }}>
            <h3 className='cakeName'>Pinacolada Cake</h3>
            <p className='cakePrice'>1 kg- ₹ 1700</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='menuContentInnerItem'>
            <div className="imgContainerBg" style={{ background: 'var(--color3)' }}>
          <div className="imgContainer">
              <img src="assets/15.png" alt="" />
            </div>
            </div>
            <div className='menuContentInnerItemText' style={{ background: 'var(--color3)' }}>
            <h3 className='cakeName'>Mango Berry Cloud</h3>
            <p className='cakePrice'>1 kg- ₹ 1800</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='menuContentInnerItem'>
            <div className="imgContainerBg" style={{ background: 'var(--bgColor)' }}>
            <div className="imgContainer">
              <img src="assets/13.png" alt="" />
            </div>
            </div>
            <div className='menuContentInnerItemText' style={{ background: 'var(--bgColor)' }}>
            <h3 className='cakeName'>Vanilla With Bubble Gum</h3>
            <p className='cakePrice'>1 kg- ₹ 1500</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='menuContentInnerItem'>
            <div className="imgContainerBg" style={{ background: 'var(--color3)' }}>
          <div className="imgContainer">
              <img src="assets/21.png" alt="" />
            </div>
            </div>
            <div className='menuContentInnerItemText' style={{ background: 'var(--color3)' }}>
            <h3 className='cakeName'>Pineapple Cake</h3>
            <p className='cakePrice'>1 kg- ₹ 1300</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='menuContentInnerItem'>
            <div className="imgContainerBg" style={{ background: 'var(--color2)' }}>
          <div className="imgContainer">
              <img src="assets/26.png" alt="" />
            </div>
            </div>
            <div className='menuContentInnerItemText' style={{ background: 'var(--color2)' }}>
            <h3 className='cakeName'>Vanilla Cake</h3>
            <p className='cakePrice'>1 kg- ₹ 1400</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='menuContentInnerItem'>
            <div className="imgContainerBg" style={{ background: 'var(--bgColor)' }}>
          <div className="imgContainer">
              <img src="assets/22.png" alt="" />
            </div>
            </div>
            <div className='menuContentInnerItemText' style={{ background: 'var(--bgColor)' }}>
            <h3 className='cakeName'>Pinacolada Cake</h3>
            <p className='cakePrice'>1 kg- ₹ 1700</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='menuContentInnerItem'>
            <div className="imgContainerBg" style={{ background: 'var(--color3)' }}>
          <div className="imgContainer">
              <img src="assets/15.png" alt="" />
            </div>
            </div>
            <div className='menuContentInnerItemText' style={{ background: 'var(--color3)' }}>
            <h3 className='cakeName'>Mango Berry Cloud</h3>
            <p className='cakePrice'>1 kg- ₹ 1800</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <p className='message'>For customisation drop a message on WhatsApp</p>
    </>
  )
}
