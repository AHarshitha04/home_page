import React from 'react'
import './Styles/Section7.css'
import Angled_Trends_report_image from './assets/Angled_Trends_report_image.png'

const Section7 = () => {
  return (
    <div className='section7'>
      <div className='section7_child_div'>
        <div><h3>Top trends for the future of work</h3></div>
        <div><p>GenAI and leadership are at the core of today's skills-based economy. Get the 2024 Global Learning & Skills Trends Report to learn more.</p></div>
        <div><button id='get_report_btn'>Get the report <i class="fa-solid fa-arrow-right"></i></button></div>
      </div>
      <div>
        <img src={Angled_Trends_report_image} id='Angled_Trends_report_image'/>
      </div>
    </div>
  )
}

export default Section7
