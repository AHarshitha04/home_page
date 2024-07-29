// import React from "react";
// import "./Styles/Section10.css";
// import Slider from "react-slick";
// import Img1 from "./assets/Img1.png";
// import Img2 from "./assets/Img2.png";
// import Img3 from "./assets/Img3.png";
// import Img4 from "./assets/Img4.png";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Section10 = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true, // Enable navigation arrows
//   };

//   return (
//     <div>
//       <Slider {...settings}>
//         <div className="story_slider_abt_others">
//           <div id="content_div">
//             <h2>Hello</h2>
//             <div>
//               <div>
//                 <h4>hi</h4>
//                 <p>5000/-</p>
//               </div>
//               <div>
//                 <h4>hi</h4>
//                 <p>5000/-</p>
//               </div>
//             </div>
//             <div>
//               <button>Read full story</button>
//             </div>
//           </div>
//           <div id="img_div">
//             {" "}
//             <img
//               src={Img1}
//               alt="Img1"
//               style={{ width: "50%", height: "auto" }}
//             />
//           </div>
//         </div>
//         <div className="story_slider_abt_others">
//           <div>
//             <h2>Hello</h2>
//             <div>
//               <div>
//                 <h4>hi</h4>
//                 <p>5000/-</p>
//               </div>
//               <div>
//                 <h4>hi</h4>
//                 <p>5000/-</p>
//               </div>
//             </div>
//             <div>
//               <button>Read full story</button>
//             </div>
//           </div>
//           <div>
//             <img
//               src={Img2}
//               alt="Img2"
//               style={{ width: "50%", height: "auto" }}
//             />
//           </div>
//         </div>
//         <div className="story_slider_abt_others">
//           <div>
//             <h2>Hello</h2>
//             <div>
//               <div>
//                 <h4>hi</h4>
//                 <p>5000/-</p>
//               </div>
//               <div>
//                 <h4>hi</h4>
//                 <p>5000/-</p>
//               </div>
//             </div>
//             <div>
//               <button>Read full story</button>
//             </div>
//           </div>
//           <div>
//             <img
//               src={Img3}
//               alt="Img3"
//               style={{ width: "50%", height: "auto" }}
//             />
//           </div>
//         </div>
//         <div className="story_slider_abt_others">
//           <div>
//             <h2>Hello</h2>
//             <div>
//               <div>
//                 <h4>hi</h4>
//                 <p>5000/-</p>
//               </div>
//               <div>
//                 <h4>hi</h4>
//                 <p>5000/-</p>
//               </div>
//             </div>
//             <div>
//               <button>Read full story</button>
//             </div>
//           </div>
//           <div>
//             <img
//               src={Img4}
//               alt="Img4"
//               style={{ width: "50%", height: "auto" }}
//             />
//           </div>
//         </div>
//       </Slider>
//     </div>
//   );
// };

// export default Section10;


import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the default styles
import Img1 from "./assets/Img1.png";
import Img2 from "./assets/Img2.png";
import Img3 from "./assets/Img3.png";
import Img4 from "./assets/Img4.png";
import "./Styles/Section10.css";

const Section10 = () => {
  return (
    <div>
      <Carousel
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        infiniteLoop={true}
        interval={5000}
      >
        <div className="story_slider_abt_others" key="1">
          <div id="content_div">
            <h2>Booz Allen Hamilton Unlocks Talent Retention and Productivity Through Upskilling</h2>
            <div>
              <div>
                <h4>93%</h4>
                <p>retention rate among participating employees</p>
              </div>
              <div>
                <h4>65%</h4>
                <p>of learners noted a positive impact on their productivity
</p>
              </div>
            </div>
            <div>
              <button  id="read_btn">Read full story</button>
            </div>
          </div>
          <div id="img_div">
            <img
              src={Img1}
              alt="Img1"
              style={{ width: "50%", height: "auto" }}
            />
          </div>
        </div>
        <div className="story_slider_abt_others" key="2">
          <div>
            <h2>Capital One Accelerates Transformational Learning through Udemy Business</h2>
            <div>
              <div>
                <h4>95%</h4>
                <p>of learners rated Udemy as “very helpful” to their success</p>
              </div>
              <div>
                <h4>65%</h4>
                <p>increase in retention for in-demand tech roles</p>
              </div>
            </div>
            <div>
              <button  id="read_btn">Read full story</button>
            </div>
          </div>
          <div>
            <img
              src={Img2}
              alt="Img2"
              style={{ width: "50%", height: "auto" }}
            />
          </div>
        </div>
        <div className="story_slider_abt_others" key="3">
          <div>
            <h2>Eventbrite Navigates Change Through Skill-Building and Leadership Development</h2>
            <div>
              <div>
                <h4>4,800+</h4>
                <p>increase in employee enrollments for professional development courses</p>
              </div>
              <div>
                <h4>65%</h4>
                <p>revenue growth supported by a business model backed by learning</p>
              </div>
            </div>
            <div>
              <button  id="read_btn">Read full story</button>
            </div>
          </div>
          <div>
            <img
              src={Img3}
              alt="Img3"
              style={{ width: "50%", height: "auto" }}
            />
          </div>
        </div>
        <div className="story_slider_abt_others" key="4">
          <div>
            <h2>Toyota Tsusho Enhances its L&D Program to Improve Employee Outcomes</h2>
            <div>
              <div>
                <h4>50%</h4>
                <p>training cost reduction per person</p>
              </div>
              <div>
                <h4>+7000</h4>
                <p>hours of upskilling</p>
              </div>
            </div>
            <div>
              <button id="read_btn">Read full story</button>
            </div>
          </div>
          <div>
            <img
              src={Img4}
              alt="Img4"
              // style={{ width: "50%", height: "auto" }}
              id="slide_img"
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Section10;
