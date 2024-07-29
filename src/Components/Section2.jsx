import React from "react";
import "./Styles/Section2.css";
import cardImg1 from './assets/cardImg1.jpg'
import cardImg2 from './assets/cardImg2.jpg'
import cardImg3 from './assets/cardImg3.jpg'
import cardImg4 from './assets/cardImg4.jpg'

const Section2 = () => {
  return (
    <div>
      <div>
        <h2 id="section2_h2Tag">All the skills you need in one place</h2>
        <p id="section2_pTag">
          From critical skills to technical topics, Udemy supports your
          professional development.
        </p>
      </div>
      <div className="Section2_parent_div2">
        <div className="active_class_links">
          <p>Web Development</p>
          <p>IT Certifications</p>
          <p>Leadership</p>
          <p>Data Science</p>
          <p>Communication</p>
          <p>Business Analytics & Intelli</p>
        </div>
        <div>
          <div className="course_buttons">
            <div id="specific_courseButton_activeDiv">
              <h3>Web Development</h3>
              <p>13.3M+ learners</p>
            </div>
            <div id="specific_courseButton_div">
              <h3>JavaScript</h3>
              <p>13.3M+ learners</p>
            </div>
            <div  id="specific_courseButton_div">
              <h3>React JS</h3>
              <p>13.3M+ learners</p>
            </div>
            <div  id="specific_courseButton_div">
              <h3>Angular</h3>
              <p>13.3M+ learners</p>
            </div>
            <div  id="specific_courseButton_div"> 
              <h3>Java</h3>
              <p>13.3M+ learners</p>
            </div>
            <div  id="specific_courseButton_div">
              <h3>iOS Development</h3>
              <p>13.3M+ learners</p>
            </div>
          </div>
          <div className="Cards_container">
            <div id="Specific_card">
              <div>
                <img id="Specific_card_img" src={cardImg1}/>
              </div>
              <div>
                <ul className="Specific_card_ul">
                  <li>
                    <h4 id="specific_card_h4Tag">The Complete 2024 Web Development Bootcamp</h4>
                  </li>
                  <li>Dr.Angela Yu, Developer and Lead...</li>
                  <li>
                    4.7<span class="rating-stars">
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star-half-stroke"></i>
  </span>(391,486)
                  </li>
                  <li>
                    <h4><i class="fa-solid fa-indian-rupee-sign"></i>3,099</h4>
                  </li>
                </ul>
              </div>
            </div>
            <div id="Specific_card">
              <div>
                <img id="Specific_card_img" src={cardImg2}/>
              </div>
              <div>
                <ul className="Specific_card_ul">
                  <li>
                    <h4 id="specific_card_h4Tag">The Web Developer Bootcamp 2024</h4>
                  </li>
                  <li>Colt Steele</li>
                  <li>
                    4.7<span class="rating-stars">
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star-half-stroke"></i>
  </span>(274,169)
                  </li>
                  <li>
                    <h4><i class="fa-solid fa-indian-rupee-sign"></i>3,499</h4>
                  </li>
                </ul>
              </div>
            </div>
            <div id="Specific_card">
              <div>
                <img id="Specific_card_img" src={cardImg3}/>
              </div>
              <div>
                <ul className="Specific_card_ul">
                  <li>
                    <h4 id="specific_card_h4Tag">Web Development Masterclass Online Certificate Course</h4>
                  </li>
                  <li>YouAccel Training.</li>
                  <li>
                    4.7<span class="rating-stars">
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star-half-stroke"></i>
  </span>(9,867)
                  </li>
                  <li>
                    <h4><i class="fa-solid fa-indian-rupee-sign"></i>3,099</h4>
                  </li>
                </ul>
              </div>
            </div>
            <div id="Specific_card">
              <div>
                <img id="Specific_card_img" src={cardImg4}/>
              </div>
              <div>
                <ul className="Specific_card_ul">
                  <li>
                    <h4 id="specific_card_h4Tag">Practical Web Development: 22 Courses in 1</h4>
                  </li>
                  <li>Creative Online School</li>
                  <li>
                    4.2<span class="rating-stars">
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star-half-stroke"></i>
  </span>(4,327)
                  </li>
                  <li>
                    <h4><i class="fa-solid fa-indian-rupee-sign"></i>3,699</h4>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="courses_button">
            <button id="ViewCourses_btn">Show all Web Development courses</button>
        </div>
      </div>
    </div>
  );
};

export default Section2;
