import React from "react";
import logo from "../media/boas_logo.png";
import profileIcon from "../media/profile_circle.svg";
import shoppingCart from "../media/shopping_cart.svg";
import mobileMenu from "../media/menu-mobile.svg";

import "./Navigation.css";

const Navigation = () => {
  return (
    <nav>
      <div className="nav-top">
        <img className="mobile-menu" src={mobileMenu} alt="Mobile menu" />
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
