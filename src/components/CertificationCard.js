import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaCalendarAlt, FaBuilding } from 'react-icons/fa';

const CertificationCard = ({ title, issuer, date, image, credentialUrl, skills }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden group"
    >
      {/* Card Header with Image */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Card Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
          {title}
        </h3>

        {/* Issuer and Date */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            <FaBuilding className="w-4 h-4 mr-2" />
            <span className="text-sm">{issuer}</span>
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            <FaCalendarAlt className="w-4 h-4 mr-2" />
            <span className="text-sm">{date}</span>
          </div>
        </div>

        {/* Skills Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* View Credential Button */}
        <motion.a
          href={credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-lg font-medium hover:from-amber-600 hover:to-yellow-600 transition-all duration-300"
        >
          View Credential
          <FaExternalLinkAlt className="ml-2 w-4 h-4" />
        </motion.a>
      </div>

      {/* Hover Effect Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 to-yellow-500/0 group-hover:from-amber-500/5 group-hover:to-yellow-500/5 transition-all duration-500"></div>
    </motion.div>
  );
};

export default CertificationCard; 