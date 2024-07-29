import React from 'react'
import './Styles/Footer.css'
import logo_Pic1 from './assets/logo_Pic1.png';
import logo_Pic2 from './assets/logo_Pic2.png';
import logo_Pic3 from './assets/logo_Pic3.png';
import logo_Pic4 from './assets/logo_Pic4.png';
import logo_Pic5 from './assets/logo_Pic5.png';
import bg_removed_udemylogo from "./assets/bg_removed_udemylogo.png";

const Footer = () => {
  return (
    <div>
      <div className='footer_div1'>
        <div><h2 id='footer_heading'>Top companies choose <span id='Udemy_Business_span'>Udemy Business</span> to build in-demand career skills.</h2></div>
        <div className='logo_pics_container'>
            <img src={logo_Pic1} alt='logo_Pic1' />
            <img src={logo_Pic2} alt='logo_Pic2' />
            <img src={logo_Pic3} alt='logo_Pic3' />
            <img src={logo_Pic4} alt='logo_Pic4' />
            <img src={logo_Pic5} alt='logo_Pic5' />
        </div>
      </div>
      <div className='footer_div2'>
        <div>
            <ul id='footer_ul'>
                <li>Udemy Business</li>
                <li>Teach on Udemy</li>
                <li>Get the app</li>
                <li>About us</li>
                <li>Contact us</li>
            </ul>
        </div>
        <div>
            <ul  id='footer_ul'>
                <li>Careers</li>
                <li>Blog</li>
                <li>Help and Support</li>
                <li>Affiliate</li>
                <li>Investors</li>
            </ul>
        </div>
        <div>
            <ul  id='footer_ul'>
                <li>Terms</li>
                <li>Privacy policy</li>
                <li>Cookie settings</li>
                <li>Sitemap</li>
                <li>Accessibility statement</li>
            </ul>
        </div>
        <div className='english_icon_btn'><button id='english_btn'><i class="fa-solid fa-globe" id='eng_icon'></i>English</button></div>
      </div>
      <div className='footer_bottom'>
        <div><img src={bg_removed_udemylogo} id="udemy_logo" /></div>
        <div><p id=''>© 2024 Udemy, Inc.</p></div>
      </div>
    </div>
  )
}

export default Footer
