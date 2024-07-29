import React from 'react'
import "./Styles/Section5.css";

const Section5 = () => {
  return (
    <div>
      <div>
        <h2 id='Accelerate_h2_tag'>Accelerate growth — for you or your organization</h2>
        <p id='Accelerate_p_tag'>Reach goals faster with one of our plans or programs. Try one free today or contact sales to learn more.</p>
      </div>
      <div className='Accelerate_cards_container'>
        <div className='Accelerate_card'>
            <header className='Accelerate_header_tag'>
                <h3>Personal Plan</h3>
                <p>For you</p>
                <p><i class="fa-solid fa-user"></i> Individual</p>
            </header>
            <div>
                <ul className='Accelerate_ul'>
                    <li><h5 id='ul_heading'>Starting at Rs: 850 per month</h5></li>
                    <li><p>Billed monthly or annually. Cancel anytime</p></li>
                    <li><button id='subscrib_btn'>Start subscription<i class="fa-solid fa-arrow-right-long" id='right'></i></button></li>
                    <div id='tick_mark_li'>
                    <li> <i class="fa-solid fa-check" id='tickmark'></i>Access to 11,000+ top courses</li>
                    <li><i class="fa-solid fa-check" id='tickmark'></i>Certification prep</li>
                    <li><i class="fa-solid fa-check" id='tickmark'></i>Goal-focused recommendations</li>
                    <li><i class="fa-solid fa-check" id='tickmark'></i>AI-powered coding exercises</li>
                    </div>
                </ul>
            </div>
        </div>
        <div className='Accelerate_card'>
            <header className='Accelerate_header_tag'>
                <h3>Team Plan</h3>
                <p>For you</p>
                <p><i class="fa-solid fa-users"></i> 2 to 20 people</p>
            </header>
            <div>
                <ul className='Accelerate_ul'>
                    <li><h5 id='ul_heading'>Rs:1,167 a month per user</h5></li>
                    <li><p>Billed annually. Cancel anytime</p></li>
                    <li><button id='subscrib_btn'>Start subscription<i class="fa-solid fa-arrow-right-long" id='right'></i></button></li>
                    <div id='tick_mark_li'>
                    <li> <i class="fa-solid fa-check" id='tickmark'></i>Access to 11,000+ top courses</li>
                    <li><i class="fa-solid fa-check" id='tickmark'></i>Certification prep</li>
                    <li><i class="fa-solid fa-check" id='tickmark'></i>Goal-focused recommendations</li>
                    <li><i class="fa-solid fa-check" id='tickmark'></i>AI-powered coding exercises</li>
                    </div>
                </ul>
            </div>
        </div>
        <div className='Accelerate_card'>
            <header className='Accelerate_header_tag'>
                <h3>Enterprise Plan</h3>
                <p>For you</p>
                <p><i class="fa-solid fa-users"></i> More than 20 people</p>
            </header>
            <div>
                <ul className='Accelerate_ul'>
                    <li><h5 id='ul_heading'>Contact sales for pricing</h5></li>
                    <li><p>Billed monthly or annually. Cancel anytime</p></li>
                    <li><button id='subscrib_btn'>Request a demo<i class="fa-solid fa-arrow-right-long" id='right'></i></button></li>
                    <div id='tick_mark_li'>
                    <li> <i class="fa-solid fa-check" id='tickmark'></i>Access to 11,000+ top courses</li>
                    <li><i class="fa-solid fa-check" id='tickmark'></i>Certification prep</li>
                    <li><i class="fa-solid fa-check" id='tickmark'></i>Goal-focused recommendations</li>
                    <li><i class="fa-solid fa-check" id='tickmark'></i>AI-powered coding exercises</li>
                    </div>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Section5
