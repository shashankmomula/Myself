// BackgroundNav.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaBlog, FaUsers, FaCertificate } from 'react-icons/fa';

const BackgroundNav = () => {
  const [activeSection, setActiveSection] = useState('books');
  const [isHovered, setIsHovered] = useState(null);

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
    { 
      id: 'books', 
      label: 'Book Publications', 
      icon: <FaBook />,
      color: 'from-orange-500 to-amber-500',
      hoverColor: 'from-orange-600 to-amber-600'
    },
    { 
      id: 'blogs', 
      label: 'Blog Articles', 
      icon: <FaBlog />,
      color: 'from-blue-500 to-cyan-500',
      hoverColor: 'from-blue-600 to-cyan-600'
    },
    { 
      id: 'activities', 
      label: 'Club Activities', 
      icon: <FaUsers />,
      color: 'from-green-500 to-emerald-500',
      hoverColor: 'from-green-600 to-emerald-600'
    },
    { 
      id: 'certifications', 
      label: 'Certifications', 
      icon: <FaCertificate />,
      color: 'from-purple-500 to-indigo-500',
      hoverColor: 'from-purple-600 to-indigo-600'
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {navItems.map((item) => (
          <motion.a
            key={item.id}
            href={`#${item.id}`}
            onMouseEnter={() => setIsHovered(item.id)}
            onMouseLeave={() => setIsHovered(null)}
            className={`relative group overflow-hidden rounded-2xl shadow-lg transition-all duration-300 ${
              activeSection === item.id 
                ? 'ring-2 ring-offset-2 ring-amber-500 dark:ring-amber-400' 
                : ''
            }`}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Background Gradient */}
            <div 
              className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-90 group-hover:opacity-100 transition-opacity duration-300`}
            />

            {/* Content */}
            <div className="relative p-6 text-white">
              <motion.div
                initial={false}
                animate={{ 
                  scale: isHovered === item.id ? 1.1 : 1,
                  rotate: isHovered === item.id ? 5 : 0
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="text-3xl mb-4"
              >
                {item.icon}
              </motion.div>
              
              <h3 className="text-xl font-semibold mb-2">{item.label}</h3>
              
              {/* Active Indicator */}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-white"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}

              {/* Hover Effect */}
              <motion.div
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                initial={false}
                animate={{ 
                  scale: isHovered === item.id ? 1.5 : 1,
                  opacity: isHovered === item.id ? 0.1 : 0
                }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Shine Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default BackgroundNav;
