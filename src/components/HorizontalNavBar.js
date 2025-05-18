// HorizontalNavBar.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaBlog, FaUsers, FaCertificate } from 'react-icons/fa';

const HorizontalNavBar = () => {
  const [activeSection, setActiveSection] = useState('books');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['books', 'blogs', 'activities', 'certifications'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'books', label: 'Book Publications', icon: <FaBook /> },
    { id: 'blogs', label: 'Blog Articles', icon: <FaBlog /> },
    { id: 'activities', label: 'Club Activities', icon: <FaUsers /> },
    { id: 'certifications', label: 'Certifications', icon: <FaCertificate /> },
  ];

  return (
    <motion.div 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-16 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              className={`relative flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                activeSection === item.id
                  ? 'text-amber-600 dark:text-amber-400'
                  : 'text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-600 to-yellow-500"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default HorizontalNavBar;
  