import './App.css';
import './Responsive.css';
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import AboutUS from './Components/AboutUS';
import Menu from './Components/Menu';
import Reviews from './Components/Reviews';
import Gallery from './Components/Gallery';
import Footer from './Components/Footer';
import ChooseUs from './Components/ChooseUs';
import LoadingScreen from './Components/LoadingScreen';
import Video from './Components/Video';

function App() {
  const [activeTab, setActiveTab] = useState('Cookies');

  const changeTab = (newTab) => {
    setActiveTab(newTab);
  };

  window.addEventListener('scroll', function () {
    const elements = document.querySelectorAll('.fade-in');
  
    elements.forEach(function (element) {
      const elementPosition = element.getBoundingClientRect().top;
  
      if (elementPosition < window.innerHeight - 100) {
        element.classList.add('visible');
      }
    });
  });
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <Banner changeTab={changeTab} activeTab={activeTab}/>
      <Menu changeTab={changeTab} activeTab={activeTab}/>
      <Gallery />
      <ChooseUs />
      <Video />
      <AboutUS />
      <Reviews />
      <Footer />
    </>
  );
}

export default App;
