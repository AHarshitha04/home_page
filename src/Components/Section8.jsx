import React from "react";
import "./Styles/Section8.css";

const Section8 = () => {
  return (
    <div>
      <div>
        <h1 className="Trending_heading">Trending Now</h1>
      </div>
      <div className="Trending_now_sections">
        <div id="Trending_now_section_div">
            <h2 className="Trending_now_sub_heading">ChatGPT is a top skill</h2>
            <div>
                <p  className="Trending_course_heading">See ChatGPT courses</p>
            <p>3,299,975 learners</p>
            <button id="chatgpt_btn">Show all trending skills</button>  
            </div>
          
        </div>
        <div id="Trending_now_section_div">
            <h2  className="Trending_now_sub_heading">Development</h2>
            <div>
            <p className="Trending_course_heading">Python</p>
            <p>3,299,975 learners</p>
            </div>
             <div>
            <p className="Trending_course_heading">Web Development</p>
            <p>3,299,975 learners</p>
            </div>
            <div>
            <p className="Trending_course_heading">Data Science</p>
            <p>3,299,975 learners</p>
            </div>
        </div>
        <div id="Trending_now_section_div">
            <h2  className="Trending_now_sub_heading">Design</h2>
            <div>
            <p className="Trending_course_heading">Blender</p>
            <p>3,299,975 learners</p>
            </div>
             <div>
            <p className="Trending_course_heading">Graphic Design</p>
            <p>3,299,975 learners</p>
            </div>
            <div>
            <p className="Trending_course_heading">User Experience (UX) Design</p>
            <p>3,299,975 learners</p>
            </div>
        </div>
        <div id="Trending_now_section_div">
            <h2  className="Trending_now_sub_heading">Business</h2>
            <div>
            <p className="Trending_course_heading">PMI Project Management Professional (PMP)</p>
            <p>3,299,975 learners</p>
            </div>
             <div>
            <p className="Trending_course_heading">Microsoft Power BI</p>
            <p>3,299,975 learners</p>
            </div>
            <div>
            <p className="Trending_course_heading">Project Management</p>
            <p>3,299,975 learners</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Section8;
