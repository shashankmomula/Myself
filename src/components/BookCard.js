import React, { useState } from 'react';
import Book1 from "../Book1.png";
import { AMAZON, FLIPKART, GITHUB, LINKEDIN, MAIL, NOTION } from "../utils/Constants";

function BookCard({ image, description }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="shadow-black border rounded-lg overflow-hidden">
      <div className="flex flex-col md:flex-row items-center">
        <img
          src={image}
          alt="Book"
          className="w-32 md:w-52 m-7 shadow-gray-900 hover:shadow-2xl"
        />
        <div className="p-5 md:p-7">
          <p className={`transition-all duration-300 ${isVisible ? "max-h-screen" : "max-h-16 overflow-hidden"}`}>
            {description}
          </p>
          <button
            onClick={toggleVisibility}
            className="mt-4 text-blue-500 hover:underline focus:outline-none"
          >
            {isVisible ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
      {isVisible && (
        <div className="p-5 md:p-7 flex justify-end">
          <a href="https://notionpress.com/author/928880" target="_blank" rel="noopener noreferrer">
            <img src={NOTION} className="w-10 h-10 mt-5 cursor-pointer" />
          </a>
          <a href="https://www.flipkart.com/explore-your-c-programming-real-world-hello/p/itm8771619b7e3f5" target="_blank" rel="noopener noreferrer">
            <img src={FLIPKART} className="w-9 h-9 mt-5 cursor-pointer" />
          </a>
          <a href="https://www.amazon.in/Explore-Your-Programming-Real-world/dp/B0CMHZZ9C2/ref=sr_1_1?crid=29IR70QWERCL1&dib=eyJ2IjoiMSJ9.cY-eT9waY5Ut_9dnL89A45kXT2TsoZXaCQM_hEBjkMc.ytBsPr89uISicN8hmXJfBPH9f-rMRNa0aGuq3vqLhQI&dib_tag=se&keywords=explore+your+c+programming+in+real+world&qid=1720017131&sprefix=explore+your+c+programming+in+real+worl%2Caps%2C244&sr=8-1" target="_blank" rel="noopener noreferrer">
            <img src={AMAZON} className="w-10 h-10 mt-5 ml-1 cursor-pointer" />
          </a>
        </div>
      )}
    </div>
  );
}

export default BookCard;
