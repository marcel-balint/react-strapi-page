import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testImage from "../../media/boas_logo.png";

import "./FeaturedProducts.css";

// Slider arrows
function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "rgba(0, 0, 0, .6)",
        padding: "1rem",
      }}
      onClick={onClick}
    />
  );
}

const FeaturedProducts = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="featured-products__carousel">
      <Slider {...settings}>
        <div className="card">
          <img src={testImage} alt="Image" />
          <p>TITLE</p>
        </div>
        <div className="card">
          <img src={testImage} alt="Image" />
          <p>TITLE</p>
        </div>
        <div className="card">
          <img src={testImage} alt="Image" />
          <p>TITLE</p>
        </div>
        <div className="card">
          <img src={testImage} alt="Image" />
          <p>TITLE</p>
        </div>
        <div className="card">
          <img src={testImage} alt="Image" />
          <p>TITLE</p>
        </div>
        <div className="card">
          <img src={testImage} alt="Image" />
          <p>TITLE</p>
        </div>
      </Slider>
    </div>
  );
};

export default FeaturedProducts;
