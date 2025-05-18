import React, { useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const BlogCard = ({ image, title, description, url }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.open(url, '_blank');
  };

  return (
    <div
      className="group bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            <button
              onClick={handleClick}
              className="w-full bg-white/90 hover:bg-white text-gray-900 font-medium py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300"
            >
              Read Article
              <FaExternalLinkAlt className="text-sm" />
            </button>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
