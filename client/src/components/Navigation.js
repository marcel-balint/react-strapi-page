import React, { useState } from "react";
import logo from "../media/boas_logo.png";
import profileIcon from "../media/profile_circle.svg";
import shoppingCart from "../media/shopping_cart.svg";
import mobileMenu from "../media/menu-mobile.svg";
import mobileMenuImage from "../media/mountains_mobile.png";
import googlePlayIcon from "../media/googleplay.svg";
import appleStoreIcon from "../media/appstore.svg";
import closeMenuIcon from "../media/close_menu.svg";

import "./Navigation.css";

const Navigation = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMobileMenu = () => {
    setOpenMenu((prevVal) => !prevVal);
  };

  return (
    <nav>
      <div className="nav-top">
        <img
          onClick={toggleMobileMenu}
          className="mobile-menu"
          src={mobileMenu}
          alt="Mobile menu"
        />
        <div className="nav-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="nav-profile">
          <div className="nav-profile__account">
            <img src={profileIcon} alt="Profile" />
            <p>Account</p>
          </div>
          <div className="nav-profile__cart">
            <img src={shoppingCart} alt="Cart" />
            <p>Cart</p>
          </div>
        </div>
      </div>
      <div className={`mobile-backdrop ${openMenu ? "active-mobile" : ""}`}>
        <img
          onClick={toggleMobileMenu}
          className="close-menu"
          src={closeMenuIcon}
          alt="Close"
        />
        <div className="mobile-sidebar">
          <img className="mobile-logo" src={logo} alt="Logo" />
          <ul className="mobile-nav">
            <li>
              <a href="#">Vintage Women</a>
            </li>
            <li>
              <a href="#">Vintage Men</a>
            </li>
            <li>
              <a href="#">Jeans under €30 / £30</a>
            </li>
            <li>
              <a href="#">Levi's Jeans</a>
            </li>
          </ul>
          <div className="mobile-images">
            <div className="mobile-images__first">
              <img src={mobileMenuImage} alt="Image" />
              <p>blog</p>
            </div>
            <div className="mobile-images__second">
              <img src={mobileMenuImage} alt="Image" />
              <div className="icons-overlay">
                <img src={googlePlayIcon} alt="GooglePlay" />
                <img src={appleStoreIcon} alt="ApplePay" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="nav-bottom">
        <ul>
          <li>
            <a href="#">Vintage Women</a>
          </li>
          <li>
            <a href="#">Vintage Men</a>
          </li>
          <li>
            <a href="#">Jeans under €30 / £30</a>
          </li>
          <li>
            <a href="#">Levi's Jeans</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
