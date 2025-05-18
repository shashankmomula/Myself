import React, { useState } from "react";
import { AMAZON, FLIPKART, NOTION } from "../utils/Constants";

function BookCard({ image, description }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition duration-500 hover:shadow-2xl">
      <div className="flex flex-col md:flex-row">
        {/* Book Image Section */}
        <div className="md:w-1/3 p-6 flex justify-center items-center bg-gray-50 dark:bg-gray-700">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <img
              src={image}
              alt="Book Cover"
              className="relative w-48 h-64 object-cover rounded-lg shadow-lg transform transition duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="md:w-2/3 p-6 md:p-8">
          <div className="space-y-4">
            <p className={`text-gray-600 dark:text-gray-300 leading-relaxed transition-all duration-300 ${
              isExpanded ? "line-clamp-none" : "line-clamp-3"
            }`}>
              {description}
            </p>
            
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-amber-600 dark:text-amber-400 font-semibold hover:text-amber-700 dark:hover:text-amber-300 transition-colors duration-200"
            >
              {isExpanded ? "Show Less" : "Read More"}
            </button>
          </div>

          {/* Purchase Links */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://notionpress.com/author/928880"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              <img src={NOTION} className="w-6 h-6" alt="Notion Press" />
              <span>Notion Press</span>
            </a>
            <a
              href="https://www.flipkart.com/explore-your-c-programming-real-world-hello/p/itm8771619b7e3f5"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              <img src={FLIPKART} className="w-6 h-6" alt="Flipkart" />
              <span>Flipkart</span>
            </a>
            <a
              href="https://www.amazon.in/Explore-Your-Programming-Real-world/dp/B0CMHZZ9C2/ref=sr_1_1?crid=29IR70QWERCL1&dib=eyJ2IjoiMSJ9.cY-eT9waY5Ut_9dnL89A45kXT2TsoZXaCQM_hEBjkMc.ytBsPr89uISicN8hmXJfBPH9f-rMRNa0aGuq3vqLhQI&dib_tag=se&keywords=explore+your+c+programming+in+real+world&qid=1720017131&sprefix=explore+your+c+programming+in+real+worl%2Caps%2C244&sr=8-1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              <img src={AMAZON} className="w-6 h-6 rounded-full" alt="Amazon" />
              <span>Amazon</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
