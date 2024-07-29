import React from "react";
import './HomePage.css'
import Header from "./Components/Header";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";
import Section4 from "./Components/Section4";
import Section5 from "./Components/Section5";
import Section6 from "./Components/Section6";
import Section7 from "./Components/Section7";
import Section8 from "./Components/Section8";
import Section9 from "./Components/Section9";
import Section10 from "./Components/Section10";
import Footer from "./Components/Footer";



const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="udemy_body_content">
        <Section1 />
        <div className="section2_div"><Section2 /></div>
        <div className="section3_div"><Section3 /></div>
        <div className="section4_div"><Section4 /></div>
        <div className="section5_div"><Section5 /></div>
        <div className="section6_div"><Section6 /></div>
        <div className="section7_div"><Section7 /></div>
        <div className="section8_div"><Section8 /></div>
        <div className="section9_div"><Section9 /></div>
        <div className="section10_div"><Section10 /></div>
      </div>
      <div className="Footer_div"><Footer /></div>
    </div>
  );
};

export default HomePage;
