import React from "react";
import "./Styles/Header.css";
import udemy_logo from "./assets/udemy_logo.jpg";

const Header = () => {
  return (
    <div className="Header">
      <img src={udemy_logo} id="udemy_logo" />
      <p>Categories</p>
      <p className="searchBar_pTag">
        <i class="fa-solid fa-magnifying-glass" id="search_icon"></i>
        <input
          type="text"
          placeholder="Search for anything"
          id="header_searchBar"
        />
      </p>

      <p>Plans & Pricing</p>
      <p>Udemy Business</p>
      <p>Teach on Udemy</p>
      <p>
        <i class="fa-solid fa-cart-shopping"></i>
      </p>
      <button id="Login_btn">Login</button>
      <button id="Signup_btn">Sign up</button>
      <p id="globe_icon">
        <i class="fa-solid fa-globe"></i>
      </p>
    </div>
  );
};

export default Header;
