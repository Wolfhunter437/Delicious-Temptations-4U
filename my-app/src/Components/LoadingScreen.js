import React, { useEffect } from 'react'

export default function LoadingScreen() {
    useEffect(() => {
        window.addEventListener("load", function () {
            const loadingScreen = document.getElementById("loading-screen");
            const loadingTextConainer = document.querySelector('.loading-text-container');
            setTimeout(function () {
              const keyframes = [
                { height: '100vh' },
                { height: '0' }
              ];
              const animation = loadingScreen.animate(keyframes, {
                duration: 1000, easing: 'ease-in-out',
              });
          
              const fadeOut = [
                { opacity: '1' },
                { opacity: '0' }
              ];
              const fadeAnimation = loadingTextConainer.animate(fadeOut, {
                duration: 1000, easing: 'ease-in-out',
              });
            }, 3700);
          
            setTimeout(function () {
              loadingScreen.style.display = 'none';
            }, 4700);
          });
    })
  return (
    <div id="loading-screen">
        <div className='loading-text-container'>
          <div className="loading-text">Welcome&nbsp;to&nbsp;Delicious&nbsp;Temptations&nbsp;4U</div>
          <div className="loading-text-animation">Welcome&nbsp;to&nbsp;Delicious&nbsp;Temptations&nbsp;4U</div>
        </div>
      </div>
  )
}
