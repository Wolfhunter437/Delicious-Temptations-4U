import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

export default function Cookies() {
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
            <div className='imgContainerBg' style={{ background: 'var(--bgColor)' }}>
              <div className="imgContainer">
                <img src="assets/9.jpg" alt="" />
              </div>
            </div>
            <div className='menuContentInnerItemText' style={{ background: 'var(--bgColor)' }}>
              <h3 className='cakeName'>Lamp Shape</h3>
              <p className='cakePrice'>1 pc- ₹ 1800</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='menuContentInnerItem'>
            <div className="imgContainerBg" style={{ background: 'var(--color3)' }}>
              <div className="imgContainer">
                <img src="assets/10.png" alt="" />
              </div>
            </div>
            <div className="menuContentInnerItemText" style={{ background: 'var(--color3)' }}>
              <h3 className='cakeName'>Oats Choco Chip</h3>
              <p className='cakePrice'>6 pc- ₹ 1800</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='menuContentInnerItem'>
            <div className="imgContainerBg" style={{ background: 'var(--color2)' }}>
              <div className="imgContainer">
                <img src="assets/5.jpg" alt="" />
              </div>
            </div>
            <div className="menuContentInnerItemText" style={{ background: 'var(--color2)' }}>
              <h3 className='cakeName'>Texture Cookies</h3>
              <p className='cakePrice'>6 pc- ₹ 1800</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='menuContentInnerItem'>
            <div className="imgContainerBg" style={{ background: 'var(--bgColor)' }}>
              <div className="imgContainer">
                <img src="assets/11.jpg" alt="" />
              </div>
            </div>
            <div className="menuContentInnerItemText" style={{ background: 'var(--bgColor)' }}>
              <h3 className='cakeName'>Coconut Cokkies</h3>
              <p className='cakePrice'>6 pc- ₹ 1800</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='menuContentInnerItem'>
            <div className="imgContainerBg" style={{ background: 'var(--color3)' }}>
              <div className="imgContainer">
                <img src="assets/12.png" alt="" />
              </div>
            </div>
            <div className="menuContentInnerItemText" style={{ background: 'var(--color3)' }}>
              <h3 className='cakeName'>Whole Wheat</h3>
              <p className='cakePrice'>8 pc- ₹ 2000</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='menuContentInnerItem'>
            <div className='imgContainerBg' style={{ background: 'var(--bgColor)' }}>
              <div className="imgContainer">
                <img src="assets/9.jpg" alt="" />
              </div>
            </div>
            <div className='menuContentInnerItemText' style={{ background: 'var(--bgColor)' }}>
              <h3 className='cakeName'>Lamp Shape</h3>
              <p className='cakePrice'>1 pc- ₹ 1800</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='menuContentInnerItem'>
            <div className="imgContainerBg" style={{ background: 'var(--color3)' }}>
              <div className="imgContainer">
                <img src="assets/10.png" alt="" />
              </div>
            </div>
            <div className="menuContentInnerItemText" style={{ background: 'var(--color3)' }}>
              <h3 className='cakeName'>Oats Choco Chip</h3>
              <p className='cakePrice'>6 pc- ₹ 1800</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='menuContentInnerItem'>
            <div className="imgContainerBg" style={{ background: 'var(--color2)' }}>
              <div className="imgContainer">
                <img src="assets/5.jpg" alt="" />
              </div>
            </div>
            <div className="menuContentInnerItemText" style={{ background: 'var(--color2)' }}>
              <h3 className='cakeName'>Texture Cookies</h3>
              <p className='cakePrice'>6 pc- ₹ 1800</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='menuContentInnerItem'>
            <div className="imgContainerBg" style={{ background: 'var(--bgColor)' }}>
              <div className="imgContainer">
                <img src="assets/11.jpg" alt="" />
              </div>
            </div>
            <div className="menuContentInnerItemText" style={{ background: 'var(--bgColor)' }}>
              <h3 className='cakeName'>Coconut Cokkies</h3>
              <p className='cakePrice'>6 pc- ₹ 1800</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='menuContentInnerItem'>
            <div className="imgContainerBg" style={{ background: 'var(--color3)' }}>
              <div className="imgContainer">
                <img src="assets/12.png" alt="" />
              </div>
            </div>
            <div className="menuContentInnerItemText" style={{ background: 'var(--color3)' }}>
              <h3 className='cakeName'>Whole Wheat</h3>
              <p className='cakePrice'>8 pc- ₹ 2000</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='menuContentInnerItem'>
            <div className='imgContainerBg' style={{ background: 'var(--bgColor)' }}>
              <div className="imgContainer">
                <img src="assets/9.jpg" alt="" />
              </div>
            </div>
            <div className='menuContentInnerItemText' style={{ background: 'var(--bgColor)' }}>
              <h3 className='cakeName'>Lamp Shape</h3>
              <p className='cakePrice'>1 pc- ₹ 1800</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='menuContentInnerItem'>
            <div className="imgContainerBg" style={{ background: 'var(--color3)' }}>
              <div className="imgContainer">
                <img src="assets/10.png" alt="" />
              </div>
            </div>
            <div className="menuContentInnerItemText" style={{ background: 'var(--color3)' }}>
              <h3 className='cakeName'>Oats Choco Chip</h3>
              <p className='cakePrice'>6 pc- ₹ 1800</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='menuContentInnerItem'>
            <div className="imgContainerBg" style={{ background: 'var(--color2)' }}>
              <div className="imgContainer">
                <img src="assets/5.jpg" alt="" />
              </div>
            </div>
            <div className="menuContentInnerItemText" style={{ background: 'var(--color2)' }}>
              <h3 className='cakeName'>Texture Cookies</h3>
              <p className='cakePrice'>6 pc- ₹ 1800</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='menuContentInnerItem'>
            <div className="imgContainerBg" style={{ background: 'var(--bgColor)' }}>
              <div className="imgContainer">
                <img src="assets/11.jpg" alt="" />
              </div>
            </div>
            <div className="menuContentInnerItemText" style={{ background: 'var(--bgColor)' }}>
              <h3 className='cakeName'>Coconut Cokkies</h3>
              <p className='cakePrice'>6 pc- ₹ 1800</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='menuContentInnerItem'>
            <div className="imgContainerBg" style={{ background: 'var(--color3)' }}>
              <div className="imgContainer">
                <img src="assets/12.png" alt="" />
              </div>
            </div>
            <div className="menuContentInnerItemText" style={{ background: 'var(--color3)' }}>
              <h3 className='cakeName'>Whole Wheat</h3>
              <p className='cakePrice'>8 pc- ₹ 2000</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <p className='message'>For customisation drop a message on WhatsApp</p>
    </>
  );
}