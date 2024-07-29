import React from 'react'
import "./Styles/Section3.css";
import icon1 from './assets/icon1.png'
import icon2 from './assets/icon2.png'
import icon3 from './assets/icon3.png'
import icon4 from './assets/icon4.png'
import icon5 from './assets/icon5.png'
import icon6 from './assets/icon6.png'
import icon7 from './assets/icon7.png'
import icon8 from './assets/icon8.png'

const Section3 = () => {
  return (
    <div className='about_icons'>
      <h2>Trusted by over 15,000 companies and millions of learners around the world</h2>
      <ul className='icons_container'>
        <li><img src={icon1} /></li>
        <li><img src={icon2} /></li>
        <li><img src={icon3} /></li>
        <li><img src={icon4} /></li>
        <li><img src={icon5} /></li>
        <li><img src={icon6} /></li>
        <li><img src={icon7} /></li>
        <li><img src={icon8} /></li>
      </ul>
    </div>
  )
}

export default Section3
