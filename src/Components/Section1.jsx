import React from 'react';
import Slider from 'react-slick';
import banner1 from './assets/banner1.jpg';
import banner2 from './assets/banner2.jpg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Styles/Section1.css';

const Section1 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true // Enable navigation arrows
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src={banner1} alt="Banner 1" style={{ width: '100%', height: 'auto' }} />
        </div>
        <div>
          <img src={banner2} alt="Banner 2" style={{ width: '100%', height: 'auto' }} />
        </div>
      </Slider>
    </div>
  );
};

export default Section1;
