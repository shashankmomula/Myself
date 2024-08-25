import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";

const Carousel = ({images}) => {
  const settings = {
    dots: true,              // Shows navigation dots
    infinite: true,          // Enables infinite looping of slides
    speed: 500,              // Transition speed in milliseconds
    slidesToShow: 1,         // Number of slides to show at once
    slidesToScroll: 1,       // Number of slides to scroll at once
    autoplay: true,          // Enables automatic slide movement
    autoplaySpeed: 2000,     // Time between each slide transition in milliseconds
    arrows: false             // Shows navigation arrows
  };
  
  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-60 mt-8 object-cover rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default Carousel;
