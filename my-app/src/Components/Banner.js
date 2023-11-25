import React, { useEffect, useState } from 'react'

export default function Banner({ changeTab, activeTab }) {
    useEffect(() => {
        const computer = window.matchMedia('(min-width: 992px)').matches;

        if (computer) {

            window.addEventListener("load", function () {
                const afterLoad = document.getElementsByClassName('Banner')[0];
                setTimeout(function () {
                    const fadeIn = [
                        { opacity: '1', transform: 'translateY(0)' }
                    ]

                    afterLoad.animate(fadeIn, {
                        duration: 1000, easing: 'ease-in-out',
                        fill: 'forwards',
                    });
                }, 4900)
            });
        }
    }, []);

    return (
        <>
            <div className='container-fluid p-0'>
                <div className="row">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1777.117" height="747.266" viewBox="0 0 1777.117 747.266" className='bannerSVG'>
                        <path id="Path_1" data-name="Path 1" d="M564.744,345.792c315.38,95.209,687.992-56.715,687.992-56.715S1496.9,200.9,1651.615,418.984s-75.275,436.474-75.275,436.474-225.654,295.437-507.414,88.952-682.333,0-682.333,0S134.221,1061.645,13.127,877.177s-102.835-445.293,0-531.385C135.113,243.665,249.364,250.583,564.744,345.792Z" transform="translate(71.492 -270.928)" fill="var(--color2)" />
                    </svg>
                    <div className="Banner">
                        <div className="bannerText">
                            <div className="bannerInnerText">
                                <h4 className="bannerLove">Baked with love</h4>
                                <div className="bannerLine">
                                    <h1 className='bannerSweet'>SWEETNESS</h1>
                                    <h2 className='bannerTempt'>in every bite</h2>
                                </div>
                                <a href="#menu"><button className="bannerButton">Order Now</button></a>
                            </div>
                        </div>
                        <div className="bannerImg">
                            <img className='bannerCakeImg' src="assets/18.png" alt="" />
                        </div>
                    </div>
                    <div className="Category">
                        <button className='CategoryImg openMenu' onClick={() => changeTab('Cookies')}>
                            <img src="assets/10.png" alt="" />
                            <h3>Cookies</h3>
                        </button>
                        <button className='CategoryImg openMenu' onClick={() => changeTab('Artisan_Cakes')}>
                            <img src="assets/7.jpg" alt="" />
                            <h3>Artisan Cakes</h3>
                        </button>
                        <button className='CategoryImg openMenu' onClick={() => changeTab('Indo_fusion_fever')}>
                            <img src="assets/29.png" alt="" />
                            <h3>Indo Fusion Fever</h3>
                        </button>
                        <button className='CategoryImg openMenu' onClick={() => changeTab('Flavours_with_a_twist')}>
                            <img src="assets/21.png" alt="" />
                            <h3>Flavours With A Twist</h3>
                        </button>
                        <button className='CategoryImg openMenu' onClick={() => changeTab('Choc_o_licious')}>
                            <img src="assets/18.png" alt="" />
                            <h3>Chocolicious</h3>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
