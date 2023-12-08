import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";

import "./Header.css";

const Header = () => {
  const [headerData, setHeaderData] = useState(null);
  const [headerImage, setHeaderImage] = useState(null);
  const [hours, setHours] = useState(15);
  const [minutes, setMinutes] = useState(59);
  const [seconds, setSeconds] = useState(59);

  const getData = async () => {
    try {
      const response = await fetch(
        "http://localhost:1337/api/titles?populate=image"
      );
      const { data } = await response.json();
      const imageBlob =
        data[0].attributes.image.data[0].attributes.formats?.medium?.url;
      setHeaderData(data[0]);
      setHeaderImage(imageBlob);
    } catch (error) {
      console.log("Something went wrong.", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Timmer
  let timmer = 59;
  useEffect(() => {
    timmer = setInterval(() => {
      setSeconds(seconds - 1);

      // Decrease minutes if seconds === 0
      if (seconds === 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      }

      // Decrease hours if minutes === 0
      if (minutes === 0) {
        setHours(hours - 1);
        setMinutes(59);
      }
    }, 1000);
    return () => clearInterval(timmer);
  });

  return (
    <header>
      <Navigation />
      <div className="header-banner">
        <p>FREE SHIPPING OVER €29</p>
      </div>
      <div className="header-bottom">
        <div className="header-bottom__text">
          <h1>{headerData?.attributes?.title}</h1>
          <p>{headerData?.attributes?.paragraph}</p>
          <div className="timmer">
            <h2>Price drops in</h2>
            <div className="time">
              <div className="hours">
                <p>{hours}</p>
                <p>hours</p>
              </div>
              <div className="minutes">
                <p>{minutes}</p>
                <p>minutes</p>
              </div>
              <div className="seconds">
                <p>{seconds}</p>
                <p>seconds</p>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom__image">
          <div className="image-box">
            <img src={`http://localhost:1337${headerImage}`} alt="Image" />
            <div className="action-btns">
              <button>Shop Women</button>
              <button>Shop Men</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
