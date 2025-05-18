import React, { useState } from 'react';
import ImageCarousel from "./ImageCarousel";
import { motion } from 'framer-motion';

const ClubActivityCard = ({ title, description, images }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col md:flex-row">
        {/* Image Carousel Section */}
        <div className="md:w-1/2 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
          <div className="relative">
            <ImageCarousel images={images} />
          </div>
        </div>

        {/* Content Section */}
        <div className="md:w-1/2 p-8">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4"
          >
            {title}
          </motion.h3>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            {description}
          </motion.div>

          {/* Interactive Elements */}
          <div className="mt-6 flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-lg font-medium hover:from-amber-600 hover:to-yellow-600 transition-all duration-300"
            >
              Learn More
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 border-2 border-amber-500 text-amber-500 dark:text-amber-400 rounded-lg font-medium hover:bg-amber-50 dark:hover:bg-gray-700 transition-all duration-300"
            >
              Join Activity
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ClubActivityCard;