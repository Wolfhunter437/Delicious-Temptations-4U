import React, { useEffect, useState } from 'react';
import CHOC_O_LICIOUS from './MenuComponents/Choc_o_licious';
import FLAVOURS_WITH_A_TWIST from './MenuComponents/Flavours_with_a_twist';
import Cookies from './MenuComponents/Cookies';
import INDO_FUSION_FEVER from './MenuComponents/Indo_fusion_fever'
import ARTISAN_CAKES from './MenuComponents/Artisan_Cakes';

export default function Menu({ activeTab, changeTab}) {
  useEffect(() => {
    const openMenuButtons = document.querySelectorAll('.openMenu');

    const handleButtonClick = () => {
      const popupMenus = document.querySelectorAll('.popup');
      for (const popupMenu of popupMenus) {
        popupMenu.classList.add('active');
      }
    };

    const closeMenu = () => {
      const popupMenus = document.querySelectorAll('.popup');
      for (const popupMenu of popupMenus) {
        popupMenu.classList.remove('active');
        popupMenu.classList.add('closing');
        setTimeout(() => {
          popupMenu.classList.remove('closing');
        }, 1500); // Adjust the duration to match your animation duration
      }
    };

    for (const button of openMenuButtons) {
      button.addEventListener('click', handleButtonClick);
    }

    const closeButtons = document.querySelectorAll('.popup-close-btn');
    for (const closeButton of closeButtons) {
      closeButton.addEventListener('click', closeMenu);
    }

    return () => {
      for (const button of openMenuButtons) {
        button.removeEventListener('click', handleButtonClick);
      }
      for (const closeButton of closeButtons) {
        closeButton.removeEventListener('click', closeMenu);
      }
    };
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'Choc_o_licious':
        return <CHOC_O_LICIOUS />;
      case 'Flavours_with_a_twist':
        return <FLAVOURS_WITH_A_TWIST />;
      case 'Cookies':
        return <Cookies />;
      case 'Indo_fusion_fever':
        return <INDO_FUSION_FEVER />;
      case 'Artisan_Cakes':
        return <ARTISAN_CAKES />;
      default:
        return <Cookies />;
    }
  };

  return (
    <>
      <div className='container p-md-0'>
        <div className="row">
          <div className="menu">
          <div className='menuShape'>
            <img src="assets/menuShape.png" alt="" />
          </div>
            <div className="menuContent">
              <div className="menuImg fade-in">
                <video className='menuVideo' autoPlay muted loop>
                  <source src='assets/video.mp4' type='video/mp4' />
                </video>
              </div>
              <div className='menuTextBtn fade-in'  id='menu'>
                <h3 className="Menu">Menu</h3>
                <p className='menuText'>Indulge your senses with our delectable menu offerings at Delicious Temptations 4U. Our menu is a culinary journey that promises to tantalize your taste buds with an array of mouthwatering treats, from freshly baked cookies to exquisite cakes and savory delights. Each item on our menu is thoughtfully crafted, using only the finest ingredients, to ensure an unforgettable dining experience. Whether you're seeking a sweet escape or a savory delight, our menu offers a delightful selection that caters to every craving. Welcome to a world of flavors, where every bite is a taste of pure temptation.</p>
                <button className='openMenu'>Menu</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className="popup">
          <div className="row">
            <div className="content">
              <div className='menuBackground'>
                <div className='menuShape1'></div>
                <div className='menuShape2'></div>
                <div className='menuShape3'></div>
                <div className='menuShape4'></div>
                <div className='menuShape5'></div>
              </div>
              <button className="popup-close-btn">Close</button>
              <h1 className="inner-menu-title">Menu</h1>
              <div className="container-fluid menu-items">
                <nav className="menuNav">
                  <ul className='menuNav-list'>
                    <li className="menuNav-list-item">
                      <button className={`menuNav-list-itemLink ${activeTab === 'Cookies' ? 'activeMenu' : ''}`} onClick={() => changeTab('Cookies')}>
                        COOKIES
                      </button>
                    </li>
                    <li className="menuNav-list-item">
                      <button className={`menuNav-list-itemLink ${activeTab === 'Artisan_Cakes' ? 'activeMenu' : ''}`} onClick={() => changeTab('Artisan_Cakes')}>
                        ARTISAN CAKES
                      </button>
                    </li>
                    <li className="menuNav-list-item">
                      <button className={`menuNav-list-itemLink ${activeTab === 'Indo_fusion_fever' ? 'activeMenu' : ''}`} onClick={() => changeTab('Indo_fusion_fever')}>
                        INDO FUSION FEVER
                      </button>
                    </li>
                    <li className="menuNav-list-item">
                      <button className={`menuNav-list-itemLink ${activeTab === 'Flavours_with_a_twist' ? 'activeMenu' : ''}`} onClick={() => changeTab('Flavours_with_a_twist')}>
                        FLAVOURS WITH A TWIST
                      </button>
                    </li>
                    <li className="menuNav-list-item">
                      <button className={`menuNav-list-itemLink ${activeTab === 'Choc_o_licious' ? 'activeMenu' : ''}`} onClick={() => changeTab('Choc_o_licious')}>
                        CHOC-O-LICIOUS
                      </button>
                    </li>
                  </ul>
                </nav>
                {renderContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
