import React, { useState } from "react";
import { GITHUB } from "../utils/Constants";

const ProjectCard = ({ Title, image, description, GIT_URL, HOST_URL }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition duration-500 hover:shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="md:w-1/2 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <img
            src={image}
            alt={Title}
            className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content Section */}
        <div className="md:w-1/2 p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {Title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              {description}
            </p>
          </div>

          {/* Buttons Section */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href={GIT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transform hover:scale-105 transition-all duration-300"
            >
              <img src={GITHUB} className="w-5 h-5" alt="GitHub" />
              <span>View Code</span>
            </a>
            <a
              href={HOST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-semibold px-6 py-3 rounded-lg hover:from-amber-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
