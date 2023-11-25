import React from 'react'

export default function AboutUS() {
  return (
    <div className='container' id='about'>
      <div className="row">
        <div className="aboutUs">
          <h1 className='AboutUs fade-in'>About Us</h1>
          <div className="aboutContent">
            <div className="tagline fade-in"><h1 className='taglineh1'>Welcome to Delicious Temptations 4U</h1><h2 className='taglineh2'>Where Sweet Dreams Come True!</h2></div>
            <div className="firstPara">
              <div className="aboutShape1">
                <img src="assets/aboutShape1.png" alt="" />
              </div>
              <p className='firstPara1 fade-in'>At Delicious Temptations 4U, we take immense pride in being a bakery run entirely by a team of dedicated and talented women. We believe that life is sweeter when empowered women come together to create culinary magic. Our journey began with a shared passion for crafting mouthwatering pastries and confections that bring joy to every moment, and we've turned that passion into a delightful reality.</p>
            </div>
            <div className="aboutImg1 fade-in">
              <img className='aboutImg1-1' src="assets/about1.jpg" alt="" />
            </div>
            <h3 className="ourStory fade-in">Our Story</h3>
            <div className='secondPara'>
              <div className="aboutShape2">
                <img src="assets/aboutShape2.png" alt="" />
              </div>
              <p className="secondPara1 fade-in">Founded by a group of visionary bakers and pastry chefs who happen to be women, Delicious Temptations 4U was born out of a collective love for all things sweet. Drawing inspiration from both traditional recipes and innovative flavors, our bakery has become a haven for those seeking a slice of happiness.
                Our story is one of resilience, creativity, and unwavering dedication to our craft. From humble beginnings to a bustling bakery, we've remained steadfast in our mission: to create tempting treats that ignite the senses and warm the heart while celebrating the power of women in business.
              </p>
            </div>
            <div className='aboutImg2 fade-in'>
              <img src="assets/ourStory.jpg" alt="" className="aboutImg2-2" />
            </div>
            <h3 className="visit fade-in">Visit Us</h3>
            <div className="visitContent">
              <div className="aboutShape3">
                <img src="assets/aboutShape3.png" alt="" />
              </div>
              <div className="aboutImg3 fade-in">
                <iframe className='aboutImg3-3' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1931078.571778277!2d72.920973!3d19.035674!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b859c95086cf%3A0xd2df154a59ecb72c!2sMarathon%20Monte%20Vista!5e0!3m2!1sen!2sin!4v1700175109825!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div className="thirdPara">
                <p className="thirdPara1 fade-in">Come and experience the irresistible allure of Delicious Temptations 4U, where women's creativity and culinary expertise shine. Whether you're celebrating a special occasion, seeking your daily dose of sweetness, or simply want to treat yourself, we're here to make your day a little bit sweeter.<br />We look forward to serving you and being a part of your sweetest moments while championing the strength and talent of women in business.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
