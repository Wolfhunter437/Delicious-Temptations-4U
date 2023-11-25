import React from 'react'

export default function Footer() {
  return (
    <>
      <div className='container-fluid p-0'>
        <div className='row FooterNav'>
          <div className="section1 col-xl-6 col-lg-6 col-md-6 col-sm-6 fade-in">
            <a href="https://www.facebook.com/DeliciousTemptations4u" target='_blank' rel='noreferrer'><i className="fa-brands fa-facebook footerIcons"></i></a>
            <a href="https://www.instagram.com/delicious_temptations_4U/" target='_blank' rel='noreferrer'><i className="fa-brands fa-square-instagram footerIcons"></i></a>
            <a href="https://cooked-at-home.com/mumbai/poornima-bhat.php#" target='_blank' rel='noreferrer'><i class="fa-solid fa-globe footerIcons"></i></a>
            <a href="https://www.google.com/maps/place/Marathon+Monte+Vista/@19.035674,72.920973,8z/data=!4m6!3m5!1s0x3be7b859c95086cf:0xd2df154a59ecb72c!8m2!3d19.170631!4d72.942946!16s%2Fg%2F11bttj66y1?hl=en&entry=ttu" target='_blank' rel='noreferrer'><i class="fa-solid fa-map-location-dot footerIcons"></i></a>
          </div>
          <div className="section2 col-xl-6 col-lg-6 col-md-6 col-sm-6 fade-in">
            <nav>
              <ul className='footerNav'>
                <li><a className="a" href="#about">About Us</a></li>
                <li><div className="a openMenu" style={{ cursor: 'pointer' }}>Menu</div></li>
                <li><a className="a" href="#reviews">Reviews</a></li>
                <li><a className="a" href="#gallery">Gallery</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className='container-fluid p-0'>
        <div className="row footer">
          <div className="section1 col-xl-5 col-lg-4 fade-in">
            <h4>About Us</h4>
            <p>At Delicious Temptations 4U, we take immense pride in being a bakery run entirely by a team of dedicated and talented women. We believe that life is sweeter when empowered women come together to create culinary magic. Our journey began with a shared passion for crafting mouth watering confections that bring joy to every moment, and we've turned that passion into a delightful reality.</p>
          </div>
          <div className="section2 col-xl-3 col-lg-4 fade-in">
            <h4>Our Policies</h4>
            <ul className='Policies'>
              <li><a href="#policy" className='policies'>Policy</a></li>
              <li><a href="#terms" className='policies'>Terms & Conditions</a></li>
              <li><a href="#refund" className='policies'>Refund Policy</a></li>
              <li><a href="#shipping" className='policies'>Shipping Policy</a></li>
            </ul>
          </div>
          <div className="section3 col-xl-4 col-lg-4 fade-in">
            <h4>Contact Us</h4>
            <div className='contact'>
              <p className='details'><b>Email: </b>delicioustemptations4u@yahoo.com</p>
              <p className='details'><b>Phone: </b>8097 403 930, 022 2597 1842</p>
              <p className='details'><b>Calling Hours: </b>Daily 10 am - 6 pm</p>
              <p className="details"><b>Address: </b>308, Marathon Monte Vista,<br />M.M.Malviya Marg, near P and T Colony,<br />Mulund - West, Mumbai 400 080</p>
            </div>
          </div>
          <hr className='hr' />
          <div className="section4 col-xl-12 col-lg-12">
            <span>&#169; 2023 || Delicious Temptations 4U</span>
          </div>
        </div>
      </div>
    </>
  )
}
