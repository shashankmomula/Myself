import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import React, { useState } from "react";
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousel = ({images}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,              // Shows navigation dots
    infinite: true,          // Enables infinite looping of slides
    speed: 500,              // Transition speed in milliseconds
    slidesToShow: 1,         // Number of slides to show at once
    slidesToScroll: 1,       // Number of slides to scroll at once
    autoplay: true,          // Enables automatic slide movement
    autoplaySpeed: 3000,     // Time between each slide transition in milliseconds
    arrows: true,            // Shows navigation arrows
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    nextArrow: (
      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-2 rounded-full shadow-lg cursor-pointer hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200">
          <FaChevronRight className="w-5 h-5 text-gray-800 dark:text-gray-200" />
        </div>
      </div>
    ),
    prevArrow: (
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-2 rounded-full shadow-lg cursor-pointer hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200">
          <FaChevronLeft className="w-5 h-5 text-gray-800 dark:text-gray-200" />
        </div>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`w-2 h-2 rounded-full transition-all duration-300 ${
          i === currentSlide
            ? "bg-amber-600 dark:bg-amber-400 w-4"
            : "bg-gray-400 dark:bg-gray-600"
        }`}
      />
    ),
  };
  
  return (
    <div className="relative w-full overflow-hidden rounded-2xl shadow-xl">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-video"
            >
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </motion.div>
          </div>
        ))}
      </Slider>

      {/* Slide Counter */}
      <div className="absolute bottom-4 right-4 z-10">
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200">
          {currentSlide + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};
export default Carousel;
