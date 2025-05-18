import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const TestimonialCard = ({ name, role, company, image, testimonial, rating }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 relative overflow-hidden group"
    >
      {/* Quote Icon */}
      <div className="absolute top-4 right-4 text-amber-500/20 dark:text-amber-400/20 transform rotate-12">
        <FaQuoteLeft size={40} />
      </div>

      {/* Rating Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={`w-5 h-5 ${
              index < rating
                ? 'text-amber-500'
                : 'text-gray-300 dark:text-gray-600'
            }`}
          />
        ))}
      </div>

      {/* Testimonial Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-600 dark:text-gray-300 mb-6 relative z-10"
      >
        "{testimonial}"
      </motion.p>

      {/* Author Info */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <img
            src={image}
            alt={name}
            className="relative w-12 h-12 rounded-full object-cover border-2 border-white dark:border-gray-800"
          />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white">
            {name}
          </h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {role} at {company}
          </p>
        </div>
      </div>

      {/* Hover Effect Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 to-yellow-500/0 group-hover:from-amber-500/5 group-hover:to-yellow-500/5 transition-all duration-500"></div>
    </motion.div>
  );
};

export default TestimonialCard; 