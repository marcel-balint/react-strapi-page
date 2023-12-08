import React from "react";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header>
      <Navigation />
      <div className="header-banner">
        <p>FREE SHIPPING OVER €29</p>
      </div>
    </header>
  );
};

export default Header;
