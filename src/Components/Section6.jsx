import React from "react";
import "./Styles/Section6.css";
import logo_stackoverflow from "./assets/logo_stackoverflow.png";
import abt_other_profileImg_Alvin_Lim from "./assets/abt_other_profileImg_Alvin_Lim.jpeg";
import William_A_Wachlin from "./assets/William_A_Wachlin.jpeg";
import Ian_Stevens from "./assets/Ian_Stevens.png";


const Section6 = () => {
  return (
    <div>
      <div>
        <h2 id="see_abt_others">
          See what others are achieving through learning
        </h2>
      </div>
      <div className="abt_others_cards_container">
        <div className="abt_others_card">
          <div>
            <i class="fa-solid fa-quote-left"></i>
          </div>
          <div>
            <p>
              Udemy was rated the most popular online course or certification
              program for learning how to code according to{" "}
              <span>StackOverflow’s 2023 Developer survey.</span>
            </p>
          </div>
          <div>
            <img id="abt_others_img" src={logo_stackoverflow} />
            <p>37,076 reponses collected</p>
          </div>
          <div>
            <p>
              View Web Development coures
              <i class="fa-solid fa-chevron-right"></i>
            </p>
          </div>
        </div>
        <div className="abt_others_card">
          <div>
            <i class="fa-solid fa-quote-left"></i>
          </div>
          <div>
            <p>
              Udemy was rated the most popular online course or certification
              program for learning how to code according to{" "}
              <span>StackOverflow’s 2023 Developer survey.</span>
            </p>
          </div>
          <div>
            <img id="abt_others_img1" src={abt_other_profileImg_Alvin_Lim} />
            <p>37,076 reponses collected</p>
          </div>
          <div>
            <p>
              View Web Development coures
              <i class="fa-solid fa-chevron-right"></i>
            </p>
          </div>
        </div>
        <div className="abt_others_card">
          <div>
            <i class="fa-solid fa-quote-left"></i>
          </div>
          <div>
            <p>
              Udemy was rated the most popular online course or certification
              program for learning how to code according to{" "}
              <span>StackOverflow’s 2023 Developer survey.</span>
            </p>
          </div>
          <div>
            <img id="abt_others_img1" src={William_A_Wachlin} />
            <p>37,076 reponses collected</p>
          </div>
          <div>
            <p>
              View Web Development coures
              <i class="fa-solid fa-chevron-right"></i>
            </p>
          </div>
        </div>
        <div className="abt_others_card">
          <div>
            <i class="fa-solid fa-quote-left"></i>
          </div>
          <div>
            <p>
              Udemy was rated the most popular online course or certification
              program for learning how to code according to{" "}
              <span>StackOverflow’s 2023 Developer survey.</span>
            </p>
          </div>
          <div>
            <img id="abt_others_img1"src={Ian_Stevens} />
            <p>37,076 reponses collected</p>
          </div>
          <div>
            <p>
              View Web Development coures
              <i class="fa-solid fa-chevron-right"></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
