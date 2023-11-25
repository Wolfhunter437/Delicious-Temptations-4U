import React, { useEffect, } from "react";
import ScrollToTop from 'react-scroll-to-top'

export default function Navbar() {

    useEffect(() => {
        const computer = window.matchMedia('(min-width: 992px)').matches;

        if (computer) {
            window.addEventListener("load", function () {
                const afterLoad = document.getElementsByClassName('afterLoad')[0];
                setTimeout(function () {
                    const fadeIn = [
                        { opacity: '1', transform: 'translateY(0)' }
                    ]

                    afterLoad.animate(fadeIn, {
                        duration: 1000, easing: 'ease-in-out',
                        fill: 'forwards',
                    });
                }, 4700)
            });
        }

        let logo = document.getElementById('logo');
        let icon = document.getElementsByClassName('icon')[0];
        let logo1 = document.getElementsByClassName('logo')[0];
        let nav = document.getElementById('nav');
        let lastScrollPosition = window.scrollY;
        let initialTranslateY;

        const isMobile = window.matchMedia('(max-width: 991px)').matches;

        if (isMobile) {
            initialTranslateY = 15;
        }
        else {
            initialTranslateY = 20;
        }
        let translateY = initialTranslateY;

        window.addEventListener('scroll', function () {
            let value = window.scrollY
            let targetSize = 60;
            let minSize = 25;
            let targetY = 1;
            let scale = Math.max(minSize / targetSize, 1 - value * 0.1 / targetSize);
            translateY = Math.max(0, initialTranslateY - value * 0.1 / targetY);

            logo.style.transform = `scale(${scale}) translateY(${translateY}vh)`;
            logo.style.transition = `ease-out 0.1s`


            if (isMobile) {
                nav.style.backgroundColor = 'var(--bgColor)';
            }

            if (value >= 450) {
                nav.classList.add('hide');
            }
            else {
                nav.classList.remove('hide');
            };

            if (value < lastScrollPosition) {
                nav.classList.add('show');
            }
            else {
                nav.classList.remove('show');
            };

            if (value < 1000) {
                nav.classList.remove('show')
            }

            lastScrollPosition = value;

            if (value >= 800) {
                logo1.style.display = 'none';
                icon.style.display = 'block';
            }
            else {
                logo1.style.display = 'block';
                icon.style.display = 'none';
            }
        })
    }, []);

    function handleLogoClick() {
        window.location.reload();
    }

    const ToggleScreen = window.matchMedia('(max-width: 991px)').matches;

    let handleNavItemClick = null;

    if(ToggleScreen){
        handleNavItemClick = function() {
            // Close the navbar by selecting the toggle button and triggering a click
            const navbarToggleBtn = document.getElementById('navbar-toggle-btn');
            if (navbarToggleBtn) {
                navbarToggleBtn.click();

                const afterLoad = document.getElementsByClassName('afterLoad')[0];
                
                const fadeOut = [
                    { opacity: '0', transform: 'translateY(100px)' }
                ]

                afterLoad.animate(fadeOut, {
                    duration: 1000, easing: 'ease-in-out',
                })
            }
        };
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg col-12" id="nav">
                <div className="container-fluid p-0 col-12 afterLoad">
                    <form className="navLeft mb-lg-0 col-xl-5 col-lg-4">
                        <input className="input-form" type="text" placeholder="Type here..." style={{ width: '35%' }} />
                        <button className="search-btn" type="submit">Search</button>
                    </form>
                    <div className="d-xl-none d-lg-none col-md-2 col-sm-2 col-2"></div>
                    <a className="col-xl-2 col-lg-4 col-md-6 col-sm-6 col-6" id="logo" href="" onClick={handleLogoClick}>
                        <img src="assets/logo.png" className="logo" alt="Logo"/>
                        <img src="assets/feviconLogo.png" className="icon" alt="Icon" />
                    </a>
                    <button className="navbar-toggler col-md-2 col-sm-2 col-2" id="navbar-toggle-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-icon">☰</span>
                    </button>
                    <div className="collapse navbar-collapse col-xl-5 col-lg-4 justify-content-end" id="navbarSupportedContent">
                        <ul className="navRight navbar-nav">
                            <li className="nav-item"><div className="a nav-link openMenu" onClick={handleNavItemClick} style={{ cursor: 'pointer' }}>Menu</div></li>
                            <li className="nav-item"><a className="a nav-link" href="#gallery" onClick={handleNavItemClick}>Gallery</a></li>
                            <li className="nav-item"><a className="a nav-link" href="#about" onClick={handleNavItemClick}>About Us</a></li>
                            <li className="nav-item"><a className="a nav-link" href="#reviews" onClick={handleNavItemClick}>Reviews</a></li>
                            <form className="navLeft">
                                <input className="input-form" type="text" placeholder="Type here..." style={{ width: '35%' }} />
                                <button className="search-btn" type="submit">Search</button>
                            </form>
                        </ul>
                    </div>
                </div>
            </nav>
            <a href="https://wa.me/+918097403930" className="whatsapp" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-whatsapp"></i>
            </a>
            <ScrollToTop smooth={true} top={700} color="var(--color3)" />
        </>
    );
}
