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
import Img5 from "./assets/logo-boozallenhamilton-2.svg";
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
            <div className="Img5"><img src={Img5} className="content_img"  /></div>
            
            <div className="Booz">
              Booz Allen Hamilton Unlocks Talent Retention and Productivity
              Through Upskilling
            </div>
            <div>
              <div className="participating">
                <div>
                <h1 className="Booz1">93%</h1>
                <p>retention rate among participating </p><p>employees</p>
                <hr></hr>
                </div>
              
                <div>
                <h1 className="Booz1">65%</h1>
                <p>of learners noted a positive impact on</p> <p>their productivity</p>
                <hr></hr>
              </div>
              </div>
            
            </div>
            <div>
              <button id="read_btn">Read full story <i class="fa-solid fa-arrow-right"></i></button>
            </div>
          </div>
          <div >
            <img
              src={Img1}
              alt="Img1"
              className="img_div"
            />
          </div>
        </div>
        <div className="story_slider_abt_others" key="2">
        <div id="content_div">
            <div className="Img5"><img src={Img5} className="content_img"  /></div>
            
            <div className="Booz">
            Capital One Accelerates Transformational Learning through Udemy
            Business
            </div>
            <div>
              <div className="participating">
                <div>
                <h1 className="Booz1">95%</h1>
                <p> of learners rated Udemy as “very </p><p>helpful” to their success</p>
                <hr></hr>
                </div>
              
                <div>
                <h1 className="Booz1">65%</h1>
                <p>increase in retention for in-demand</p> <p>tech roles</p>
                <hr></hr>
              </div>
              </div>
            
            </div>
            <div>
              <button id="read_btn">Read full story <i class="fa-solid fa-arrow-right"></i></button>
            </div>
          </div>
          <div >
            <img
             src={Img2}
              alt="Img2"
              className="img_div"
            />
          </div>
        </div>
        <div className="story_slider_abt_others" key="3">
        <div id="content_div">
            <div className="Img5"><img src={Img5} className="content_img"  /></div>
            <div className="Booz">
            Eventbrite Navigates Change Through Skill-Building and Leadership
            Development
            </div>
            <div>
              <div className="participating">
                <div>
                <h1 className="Booz1">4,800+</h1>
                <p> increase in employee enrollments for </p><p>professional development  courses</p>
                <hr></hr>
                </div>
              
                <div>
                <h1 className="Booz1">65%</h1>
                <p>revenue growth supported by a business </p> <p>model backed by learning</p>
                <hr></hr>
              </div>
              </div>
            
            </div>
            <div>
              <button id="read_btn">Read full story <i class="fa-solid fa-arrow-right"></i></button>
            </div>
          </div>
          <div >
            <img
             src={Img3}
              alt="Img3"
              className="img_div"
            />
          </div>
        </div>
        <div className="story_slider_abt_others" key="4">
        <div id="content_div">
            <div className="Img5"><img src={Img5} className="content_img"  /></div>
            <div className="Booz">
            Toyota Tsusho Enhances its L&D Program to Improve Employee
              Outcomes
            </div>
            <div>
              <div className="participating">
                <div>
                <h1 className="Booz1">50%</h1>
                <p>training cost reduction per person</p>
                <hr></hr>
                </div>
              
                <div>
                <h1 className="Booz1">+7000</h1>
                <p>hours of upskilling</p>
                <hr></hr>
              </div>
              </div>
            
            </div>
            <div>
              <button id="read_btn">Read full story <i class="fa-solid fa-arrow-right"></i></button>
            </div>
          </div>
         
          <div>
            <img
              src={Img4}
              alt="Img4"
              // style={{ width: "50%", height: "auto" }}
              className="img_div"
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Section10;
