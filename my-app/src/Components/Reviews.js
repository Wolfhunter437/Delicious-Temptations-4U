import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay, Navigation } from 'swiper/modules';

export default function Reviews() {
    return (
        <>
            <div className='container' id='reviews'>
                <div className="row">
                    <div className="reviews fade-in">
                        <h3 className="Reviews">Testimonials</h3>
                    </div>
                </div>
            </div>
            <div className="container-fluid p-0">
                <div className="row">
                    <div className="reviewsContent fade-in">
                        <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            loop={true}
                            navigation={true}
                            slidesPerView={'auto'}
                            coverflowEffect={{
                                rotate: 50,
                                stretch: 100,
                                depth: 100,
                                modifier: 1,
                                slideShadows: true,
                            }}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                dynamicBullets: true,
                            }}
                            modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
                            className="mySwiper">
                            <SwiperSlide style={{ background: 'var(--color2)' }}>
                                <div className="customer">
                                    <div className="imgContainer">
                                        <img className='customerImg' src="assets/monika.jpg" alt="" />
                                    </div>
                                    <h2 className="name" style={{ color: 'var(--color1)' }}>Hinata Hyuga</h2>
                                </div>
                                <h4 className='revTitle' style={{ color: 'var(--color1)' }}>Delicious</h4>
                                <p className="rev" style={{ color: 'var(--color1)' }}>I have known Poornima since last 6 years now. Her cakes are an integral part of all our celebrations. She has surpassed our expectations each and every time we have ordered a cake from her.</p>
                                <div className="starRating">
                                    <span className="fa fa-star checked" style={{ color: 'var(--color1)' }}></span>
                                    <span className="fa fa-star checked" style={{ color: 'var(--color1)' }}></span>
                                    <span className="fa fa-star checked" style={{ color: 'var(--color1)' }}></span>
                                    <span className="fa fa-star checked" style={{ color: 'var(--color1)' }}></span>
                                    <span className="fa fa-star" style={{ color: 'white' }}></span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide style={{ background: 'var(--color1)' }}>
                                <div className="customer">
                                    <div className="imgContainer">
                                        <img className='customerImg' src="assets/sarabhjeet.jpg" alt="" />
                                    </div>
                                    <h2 className="name" style={{ color: 'white' }}>Son Goku</h2>
                                </div>
                                <h4 className='revTitle' style={{ color: 'white' }}>Very Tasty</h4>
                                <p className="rev" style={{ color: 'white' }}>Got to know about Poornima through a friend and i am so glad to come accross such a creative person.</p>
                                <div className="starRating">
                                    <span className="fa fa-star" style={{ color: 'white' }}></span>
                                    <span className="fa fa-star" style={{ color: 'white' }}></span>
                                    <span className="fa fa-star" style={{ color: 'white' }}></span>
                                    <span className="fa fa-star" style={{ color: 'white' }}></span>
                                    <span className="fa fa-star" style={{ color: 'white' }}></span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide style={{ background: 'var(--color3)' }}>
                                <div className="customer">
                                    <div className="imgContainer">
                                        <img className='customerImg' src="assets/yash.jpg" alt="" />
                                    </div>
                                    <h2 className="name" style={{ color: 'white' }}>Sasuke Uchiha</h2>
                                </div>
                                <h4 className='revTitle' style={{ color: 'white' }}>So Tempting</h4>
                                <p className="rev" style={{ color: 'white' }}>Poornima's cakes are pure magic. Amazing to look at and absolutely heavenly to taste. I had ordered a peppa pig inspired cake for my niece's birthday last week. It was made to perfection.</p>
                                <div className="starRating">
                                    <span className="fa fa-star checked" style={{ color: 'white' }}></span>
                                    <span className="fa fa-star checked" style={{ color: 'white' }}></span>
                                    <span className="fa fa-star checked" style={{ color: 'white' }}></span>
                                    <span className="fa fa-star" style={{ color: 'var(--color1)' }}></span>
                                    <span className="fa fa-star" style={{ color: 'var(--color1)' }}></span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide style={{ background: 'var(--color2)' }}>
                                <div className="customer">
                                    <div className="imgContainer">
                                        <img className='customerImg' src="assets/parth.jpg" alt="" />
                                    </div>
                                    <h2 className="name" style={{ color: 'var(--color1)' }}>Baki Hanma</h2>
                                </div>
                                <h4 className='revTitle' style={{ color: 'var(--color1)' }}>Mazze aa gaye</h4>
                                <p className="rev" style={{ color: 'var(--color1)' }}>The cake was so amazing everyone loved it so much and the design was so beautiful. Such a unique and beautiful cake.</p>
                                <div className="starRating">
                                    <span className="fa fa-star checked" style={{ color: 'var(--color1)' }}></span>
                                    <span className="fa fa-star checked" style={{ color: 'var(--color1)' }}></span>
                                    <span className="fa fa-star checked" style={{ color: 'var(--color1)' }}></span>
                                    <span className="fa fa-star checked" style={{ color: 'var(--color1)' }}></span>
                                    <span className="fa fa-star" style={{ color: 'var(--color3)' }}></span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide style={{ background: 'var(--color3)' }}>
                                <div className="customer">
                                    <div className="imgContainer">
                                        <img className='customerImg' src="assets/utkarsh.jpg" alt="" />
                                    </div>
                                    <h2 className="name" style={{ color: 'white' }}>Roronoa Zoro</h2>
                                </div>
                                <h4 className='revTitle' style={{ color: 'white' }}>Luffy loved it</h4>
                                <p className="rev" style={{ color: 'white' }}>My captain Luffy finally became King Of The Pirates and to celebrate that i orderd a custom cake from Poornima. And I have to say, that cake worthy for a pirate king.</p>
                                <div className="starRating">
                                    <span className="fa fa-star checked" style={{ color: 'white' }}></span>
                                    <span className="fa fa-star checked" style={{ color: 'white' }}></span>
                                    <span className="fa fa-star checked" style={{ color: 'white' }}></span>
                                    <span className="fa fa-star checked" style={{ color: 'white' }}></span>
                                    <span className="fa fa-star" style={{ color: 'var(--color1)' }}></span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide style={{ background: 'var(--color2)' }}>
                                <div className="customer">
                                    <div className="imgContainer">
                                        <img className='customerImg' src="assets/monika.jpg" alt="" />
                                    </div>
                                    <h2 className="name" style={{ color: 'var(--color1)' }}>Hinata Hyuga</h2>
                                </div>
                                <h4 className='revTitle' style={{ color: 'var(--color1)' }}>Delicious</h4>
                                <p className="rev" style={{ color: 'var(--color1)' }}>I have known Poornima since last 6 years now. Her cakes are an integral part of all our celebrations. She has surpassed our expectations each and every time we have ordered a cake from her.</p>
                                <div className="starRating">
                                    <span className="fa fa-star checked" style={{ color: 'var(--color1)' }}></span>
                                    <span className="fa fa-star checked" style={{ color: 'var(--color1)' }}></span>
                                    <span className="fa fa-star checked" style={{ color: 'var(--color1)' }}></span>
                                    <span className="fa fa-star checked" style={{ color: 'var(--color1)' }}></span>
                                    <span className="fa fa-star" style={{ color: 'white' }}></span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide style={{ background: 'var(--color1)' }}>
                                <div className="customer">
                                    <div className="imgContainer">
                                        <img className='customerImg' src="assets/sarabhjeet.jpg" alt="" />
                                    </div>
                                    <h2 className="name" style={{ color: 'white' }}>Son Goku</h2>
                                </div>
                                <h4 className='revTitle' style={{ color: 'white' }}>Very Tasty</h4>
                                <p className="rev" style={{ color: 'white' }}>Got to know about Poornima through a friend and i am so glad to come accross such a creative person.</p>
                                <div className="starRating">
                                    <span className="fa fa-star" style={{ color: 'white' }}></span>
                                    <span className="fa fa-star" style={{ color: 'white' }}></span>
                                    <span className="fa fa-star" style={{ color: 'white' }}></span>
                                    <span className="fa fa-star" style={{ color: 'white' }}></span>
                                    <span className="fa fa-star" style={{ color: 'white' }}></span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide style={{ background: 'var(--color3)' }}>
                                <div className="customer">
                                    <div className="imgContainer">
                                        <img className='customerImg' src="assets/yash.jpg" alt="" />
                                    </div>
                                    <h2 className="name" style={{ color: 'white' }}>Sasuke Uchiha</h2>
                                </div>
                                <h4 className='revTitle' style={{ color: 'white' }}>So Tempting</h4>
                                <p className="rev" style={{ color: 'white' }}>Poornima's cakes are pure magic. Amazing to look at and absolutely heavenly to taste. I had ordered a peppa pig inspired cake for my niece's birthday last week. It was made to perfection.</p>
                                <div className="starRating">
                                    <span className="fa fa-star checked" style={{ color: 'white' }}></span>
                                    <span className="fa fa-star checked" style={{ color: 'white' }}></span>
                                    <span className="fa fa-star checked" style={{ color: 'white' }}></span>
                                    <span className="fa fa-star" style={{ color: 'var(--color1)' }}></span>
                                    <span className="fa fa-star" style={{ color: 'var(--color1)' }}></span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide style={{ background: 'var(--color2)' }}>
                                <div className="customer">
                                    <div className="imgContainer">
                                        <img className='customerImg' src="assets/parth.jpg" alt="" />
                                    </div>
                                    <h2 className="name" style={{ color: 'var(--color1)' }}>Baki Hanma</h2>
                                </div>
                                <h4 className='revTitle' style={{ color: 'var(--color1)' }}>Mazze aa gaye</h4>
                                <p className="rev" style={{ color: 'var(--color1)' }}>The cake was so amazing everyone loved it so much and the design was so beautiful. Such a unique and beautiful cake.</p>
                                <div className="starRating">
                                    <span className="fa fa-star checked" style={{ color: 'var(--color1)' }}></span>
                                    <span className="fa fa-star checked" style={{ color: 'var(--color1)' }}></span>
                                    <span className="fa fa-star checked" style={{ color: 'var(--color1)' }}></span>
                                    <span className="fa fa-star checked" style={{ color: 'var(--color1)' }}></span>
                                    <span className="fa fa-star" style={{ color: 'var(--color3)' }}></span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide style={{ background: 'var(--color3)' }}>
                                <div className="customer">
                                    <div className="imgContainer">
                                        <img className='customerImg' src="assets/utkarsh.jpg" alt="" />
                                    </div>
                                    <h2 className="name" style={{ color: 'white' }}>Roronoa Zoro</h2>
                                </div>
                                <h4 className='revTitle' style={{ color: 'white' }}>Luffy loved it</h4>
                                <p className="rev" style={{ color: 'white' }}>My captain Luffy finally became King Of The Pirates and to celebrate that i orderd a custom cake from Poornima. And I have to say, that cake worthy for a pirate king.</p>
                                <div className="starRating">
                                    <span className="fa fa-star checked" style={{ color: 'white' }}></span>
                                    <span className="fa fa-star checked" style={{ color: 'white' }}></span>
                                    <span className="fa fa-star checked" style={{ color: 'white' }}></span>
                                    <span className="fa fa-star checked" style={{ color: 'white' }}></span>
                                    <span className="fa fa-star" style={{ color: 'var(--color1)' }}></span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide style={{ background: 'var(--color2)' }}>
                                <div className="customer">
                                    <div className="imgContainer">
                                        <img className='customerImg' src="assets/monika.jpg" alt="" />
                                    </div>
                                    <h2 className="name" style={{ color: 'var(--color1)' }}>Hinata Hyuga</h2>
                                </div>
                                <h4 className='revTitle' style={{ color: 'var(--color1)' }}>Delicious</h4>
                                <p className="rev" style={{ color: 'var(--color1)' }}>I have known Poornima since last 6 years now. Her cakes are an integral part of all our celebrations. She has surpassed our expectations each and every time we have ordered a cake from her.</p>
                                <div className="starRating">
                                    <span className="fa fa-star checked" style={{ color: 'var(--color1)' }}></span>
                                    <span className="fa fa-star checked" style={{ color: 'var(--color1)' }}></span>
                                    <span className="fa fa-star checked" style={{ color: 'var(--color1)' }}></span>
                                    <span className="fa fa-star checked" style={{ color: 'var(--color1)' }}></span>
                                    <span className="fa fa-star" style={{ color: 'white' }}></span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide style={{ background: 'var(--color1)' }}>
                                <div className="customer">
                                    <div className="imgContainer">
                                        <img className='customerImg' src="assets/sarabhjeet.jpg" alt="" />
                                    </div>
                                    <h2 className="name" style={{ color: 'white' }}>Son Goku</h2>
                                </div>
                                <h4 className='revTitle' style={{ color: 'white' }}>Very Tasty</h4>
                                <p className="rev" style={{ color: 'white' }}>Got to know about Poornima through a friend and i am so glad to come accross such a creative person.</p>
                                <div className="starRating">
                                    <span className="fa fa-star" style={{ color: 'white' }}></span>
                                    <span className="fa fa-star" style={{ color: 'white' }}></span>
                                    <span className="fa fa-star" style={{ color: 'white' }}></span>
                                    <span className="fa fa-star" style={{ color: 'white' }}></span>
                                    <span className="fa fa-star" style={{ color: 'white' }}></span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide style={{ background: 'var(--color3)' }}>
                                <div className="customer">
                                    <div className="imgContainer">
                                        <img className='customerImg' src="assets/yash.jpg" alt="" />
                                    </div>
                                    <h2 className="name" style={{ color: 'white' }}>Sasuke Uchiha</h2>
                                </div>
                                <h4 className='revTitle' style={{ color: 'white' }}>So Tempting</h4>
                                <p className="rev" style={{ color: 'white' }}>Poornima's cakes are pure magic. Amazing to look at and absolutely heavenly to taste. I had ordered a peppa pig inspired cake for my niece's birthday last week. It was made to perfection.</p>
                                <div className="starRating">
                                    <span className="fa fa-star checked" style={{ color: 'white' }}></span>
                                    <span className="fa fa-star checked" style={{ color: 'white' }}></span>
                                    <span className="fa fa-star checked" style={{ color: 'white' }}></span>
                                    <span className="fa fa-star" style={{ color: 'var(--color1)' }}></span>
                                    <span className="fa fa-star" style={{ color: 'var(--color1)' }}></span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide style={{ background: 'var(--color2)' }}>
                                <div className="customer">
                                    <div className="imgContainer">
                                        <img className='customerImg' src="assets/parth.jpg" alt="" />
                                    </div>
                                    <h2 className="name" style={{ color: 'var(--color1)' }}>Baki Hanma</h2>
                                </div>
                                <h4 className='revTitle' style={{ color: 'var(--color1)' }}>Mazze aa gaye</h4>
                                <p className="rev" style={{ color: 'var(--color1)' }}>The cake was so amazing everyone loved it so much and the design was so beautiful. Such a unique and beautiful cake.</p>
                                <div className="starRating">
                                    <span className="fa fa-star checked" style={{ color: 'var(--color1)' }}></span>
                                    <span className="fa fa-star checked" style={{ color: 'var(--color1)' }}></span>
                                    <span className="fa fa-star checked" style={{ color: 'var(--color1)' }}></span>
                                    <span className="fa fa-star checked" style={{ color: 'var(--color1)' }}></span>
                                    <span className="fa fa-star" style={{ color: 'var(--color3)' }}></span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide style={{ background: 'var(--color3)' }}>
                                <div className="customer">
                                    <div className="imgContainer">
                                        <img className='customerImg' src="assets/utkarsh.jpg" alt="" />
                                    </div>
                                    <h2 className="name" style={{ color: 'white' }}>Roronoa Zoro</h2>
                                </div>
                                <h4 className='revTitle' style={{ color: 'white' }}>Luffy loved it</h4>
                                <p className="rev" style={{ color: 'white' }}>My captain Luffy finally became King Of The Pirates and to celebrate that i orderd a custom cake from Poornima. And I have to say, that cake worthy for a pirate king.</p>
                                <div className="starRating">
                                    <span className="fa fa-star checked" style={{ color: 'white' }}></span>
                                    <span className="fa fa-star checked" style={{ color: 'white' }}></span>
                                    <span className="fa fa-star checked" style={{ color: 'white' }}></span>
                                    <span className="fa fa-star checked" style={{ color: 'white' }}></span>
                                    <span className="fa fa-star" style={{ color: 'var(--color1)' }}></span>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}
