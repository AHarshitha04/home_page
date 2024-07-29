import React from "react";
import "./Styles/Section4.css";
import step1 from "./assets/step1.png";
import step2 from "./assets/step2.png";
import step3 from "./assets/step3.png";
import step4 from "./assets/step4.png";
import learning_score_img from "./assets/learning_score_img.png";

const Section4 = () => {
  return (
    <div>
      <div>
        <h3 id="goals_steps_heading">Learning focused on your goals</h3>
      </div>
      <div className="Learning_goal_setting_section">
        <div className="goal_cards">
          <div className="goal_step_active">
            <div>
              <img src={step1} id="goal_step_img" />
            </div>
            <div>
              <h3>Hands-on traning</h3>
              <p id="step_goal_ptag">
                Upskill effectively with AI-powered coding exercises, practice
                tests, skills assessments, labs, and workspaces.
              </p>
            </div>
          </div>
          <div className="goal_step">
            <div>
              <img src={step2} id="goal_step_img" />
            </div>
            <div>
              <h3>Hands-on traning</h3>
              <p id="step_goal_ptag">
                Upskill effectively with AI-powered coding exercises, practice
                tests, skills assessments, labs, and workspaces.
              </p>
            </div>
          </div>
          <div className="goal_step">
            <div>
              <img src={step3} id="goal_step_img" />
            </div>
            <div>
              <h3>Hands-on traning</h3>
              <p id="step_goal_ptag">
                Upskill effectively with AI-powered coding exercises, practice
                tests, skills assessments, labs, and workspaces.
              </p>
            </div>
          </div>
          <div className="goal_step">
            <div>
              <img src={step4} id="goal_step_img" />
            </div>
            <div>
              <h3>Hands-on traning</h3>
              <p id="step_goal_ptag">
                Upskill effectively with AI-powered coding exercises, practice
                tests, skills assessments, labs, and workspaces.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={learning_score_img} id="learning_score_img" />
        </div>
      </div>
    </div>
  );
};

export default Section4;
