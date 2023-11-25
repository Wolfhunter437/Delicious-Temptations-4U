import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';;

export default function Choc_o_licious() {
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
                <img src="assets/18.png" alt="" />
              </div>
            </div>
            <div className='menuContentInnerItemText' style={{ background: 'var(--bgColor)' }}>
              <h3 className='cakeName'>Chocolate Nutella Cake</h3>
              <p className='cakePrice'>1 kg- ₹ 600</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='menuContentInnerItem'>
            <div className="imgContainerBg" style={{ background: 'var(--color3)' }}>
              <div className="imgContainer">
                <img src="assets/19.png" alt="" />
              </div>
            </div>
            <div className='menuContentInnerItemText' style={{ background: 'var(--color3)' }}>
              <h3 className='cakeName'>Caramel Chocolate Cake</h3>
              <p className='cakePrice'>1 kg- ₹ 1500</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='menuContentInnerItem'>
            <div className="imgContainerBg" style={{ background: 'var(--color2)' }}>
              <div className="imgContainer">
                <img src="assets/20.png" alt="" />
              </div>
            </div>
            <div className='menuContentInnerItemText' style={{ background: 'var(--color2)' }}>
              <h3 className='cakeName'>Orea Filling Caramel</h3>
              <p className='cakePrice'>1 kg- ₹ 1500</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='menuContentInnerItem'>
            <div className="imgContainerBg" style={{ background: 'var(--bgColor)' }}>
              <div className="imgContainer">
                <img src="assets/14.png" alt="" />
              </div>
            </div>
            <div className='menuContentInnerItemText' style={{ background: 'var(--bgColor)' }}>
              <h3 className='cakeName'>Chocolate Strawberry Truffle</h3>
              <p className='cakePrice'>1 kg- ₹ 1500</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='menuContentInnerItem'>
            <div className="imgContainerBg" style={{ background: 'var(--color3)' }}>
              <div className="imgContainer">
                <img src="assets/16.png" alt="" />
              </div>
            </div>
            <div className='menuContentInnerItemText' style={{ background: 'var(--color3)' }}>
              <h3 className='cakeName'>Chocolate Oreo Cake</h3>
              <p className='cakePrice'>1 kg- ₹ 1600</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='menuContentInnerItem'>
            <div className="imgContainerBg" style={{ background: 'var(--bgColor)' }}>
              <div className="imgContainer">
                <img src="assets/18.png" alt="" />
              </div>
            </div>
            <div className='menuContentInnerItemText' style={{ background: 'var(--bgColor)' }}>
              <h3 className='cakeName'>Chocolate Nutella Cake</h3>
              <p className='cakePrice'>1 kg- ₹ 600</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='menuContentInnerItem'>
            <div className="imgContainerBg" style={{ background: 'var(--color3)' }}>
              <div className="imgContainer">
                <img src="assets/19.png" alt="" />
              </div>
            </div>
            <div className='menuContentInnerItemText' style={{ background: 'var(--color3)' }}>
              <h3 className='cakeName'>Caramel Chocolate Cake</h3>
              <p className='cakePrice'>1 kg- ₹ 1500</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='menuContentInnerItem'>
            <div className="imgContainerBg" style={{ background: 'var(--color2)' }}>
              <div className="imgContainer">
                <img src="assets/20.png" alt="" />
              </div>
            </div>
            <div className='menuContentInnerItemText' style={{ background: 'var(--color2)' }}>
              <h3 className='cakeName'>Orea Filling Caramel</h3>
              <p className='cakePrice'>1 kg- ₹ 1500</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='menuContentInnerItem'>
            <div className="imgContainerBg" style={{ background: 'var(--bgColor)' }}>
              <div className="imgContainer">
                <img src="assets/14.png" alt="" />
              </div>
            </div>
            <div className='menuContentInnerItemText' style={{ background: 'var(--bgColor)' }}>
              <h3 className='cakeName'>Chocolate Strawberry Truffle</h3>
              <p className='cakePrice'>1 kg- ₹ 1500</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='menuContentInnerItem'>
            <div className="imgContainerBg" style={{ background: 'var(--color3)' }}>
              <div className="imgContainer">
                <img src="assets/16.png" alt="" />
              </div>
            </div>
            <div className='menuContentInnerItemText' style={{ background: 'var(--color3)' }}>
              <h3 className='cakeName'>Chocolate Oreo Cake</h3>
              <p className='cakePrice'>1 kg- ₹ 1600</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='menuContentInnerItem'>
            <div className="imgContainerBg" style={{ background: 'var(--bgColor)' }}>
              <div className="imgContainer">
                <img src="assets/18.png" alt="" />
              </div>
            </div>
            <div className='menuContentInnerItemText' style={{ background: 'var(--bgColor)' }}>
              <h3 className='cakeName'>Chocolate Nutella Cake</h3>
              <p className='cakePrice'>1 kg- ₹ 600</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='menuContentInnerItem'>
            <div className="imgContainerBg" style={{ background: 'var(--color3)' }}>
              <div className="imgContainer">
                <img src="assets/19.png" alt="" />
              </div>
            </div>
            <div className='menuContentInnerItemText' style={{ background: 'var(--color3)' }}>
              <h3 className='cakeName'>Caramel Chocolate Cake</h3>
              <p className='cakePrice'>1 kg- ₹ 1500</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='menuContentInnerItem'>
            <div className="imgContainerBg" style={{ background: 'var(--color2)' }}>
              <div className="imgContainer">
                <img src="assets/20.png" alt="" />
              </div>
            </div>
            <div className='menuContentInnerItemText' style={{ background: 'var(--color2)' }}>
              <h3 className='cakeName'>Orea Filling Caramel</h3>
              <p className='cakePrice'>1 kg- ₹ 1500</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='menuContentInnerItem'>
            <div className="imgContainerBg" style={{ background: 'var(--bgColor)' }}>
              <div className="imgContainer">
                <img src="assets/14.png" alt="" />
              </div>
            </div>
            <div className='menuContentInnerItemText' style={{ background: 'var(--bgColor)' }}>
              <h3 className='cakeName'>Chocolate Strawberry Truffle</h3>
              <p className='cakePrice'>1 kg- ₹ 1500</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='menuContentInnerItem'>
            <div className="imgContainerBg" style={{ background: 'var(--color3)' }}>
              <div className="imgContainer">
                <img src="assets/16.png" alt="" />
              </div>
            </div>
            <div className='menuContentInnerItemText' style={{ background: 'var(--color3)' }}>
              <h3 className='cakeName'>Chocolate Oreo Cake</h3>
              <p className='cakePrice'>1 kg- ₹ 1600</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <p className='message'>For customisation drop a message on WhatsApp</p>
    </>
  )
}
