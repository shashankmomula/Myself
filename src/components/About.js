import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload } from 'react-icons/fa';
import image from "../IMG_4449.jpg";
import Skills from "./Skills";
import Timeline from "./Timeline";

const About = () => {
  const openPDF = () => {
    window.open(
      "https://drive.google.com/file/d/17l6Vsyw8Y5pMw1NkE1yUYpoSyrGZ3op4/view?usp=drive_link/view",
      "_blank"
    );
  };

  const socialLinks = [
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      href: "https://www.linkedin.com/in/momula-shashank-92a2a925a/",
      label: "LinkedIn"
    },
    {
      icon: <FaGithub className="w-6 h-6" />,
      href: "https://github.com/shashankmomula/",
      label: "GitHub"
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      href: "mailto:shashankmomula11@gmail.com",
      label: "Email"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 pt-32 pb-32 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-7xl mx-auto">
        {/* Profile Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row gap-12 items-center md:items-start"
        >
          {/* Left Column - Profile Image and Social Links */}
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              {/* Glowing Border Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl">
                <motion.img
                  src={image}
                  className="w-64 h-96 object-cover transform transition duration-500 group-hover:scale-110"
                  alt="Profile"
                  whileHover={{ scale: 1.05 }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
            
            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-6 mt-8"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Column - About Text */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full md:w-2/3"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-center md:text-left mb-8 bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">
              About Me
            </h1>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform transition duration-500 hover:shadow-2xl"
            >
              <div className="space-y-6">
                <p className="text-lg md:text-xl font-sans text-gray-700 dark:text-gray-300 leading-relaxed">
                  I am{" "}
                  <span className="text-amber-600 dark:text-amber-400 font-bold">
                    M. Shashank
                  </span>
                  , a 19-year-old Bachelor of Technology graduate in Artificial
                  Intelligence and Data Science from St. Martin's Engineering College,
                  with a CGPA of 9.09. I authored{" "}
                  <span className="italic text-amber-600 dark:text-amber-400">
                    "Explore Your C Programming"
                  </span>
                  , a book covering both foundational and advanced concepts of the C
                  programming language.
                </p>
                <p className="text-lg md:text-xl font-sans text-gray-700 dark:text-gray-300 leading-relaxed">
                  Passionate about teaching, I actively educate peers and juniors in various programming languages and development
                  practices. As a dedicated crew member of the COHO Coding Club, I teach web development and coding.
                </p>
                <p className="text-lg md:text-xl font-sans text-gray-700 dark:text-gray-300 leading-relaxed">
                  My interests lie in exploring topics in depth and continuously learning and
                  teaching in the field of programming. I am focused on enhancing my{" "}
                  <span className="font-bold text-amber-600 dark:text-amber-400">
                    problem-solving skills
                  </span>{" "}
                  in Data Structures and Algorithms{" "}
                  <span className="font-bold text-amber-600 dark:text-amber-400">
                    (DSA)
                  </span>
                  , aiming to secure a position in top multinational companies (MNCs).
                </p>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex justify-center md:justify-start mt-8"
              >
                <motion.button
                  onClick={openPDF}
                  className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-semibold px-8 py-4 rounded-lg overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">View Resume</span>
                  <FaDownload className="w-5 h-5 relative z-10 group-hover:translate-y-1 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20"
        >
          <Skills />
        </motion.div>

        {/* Timeline Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20"
        >
          <Timeline />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
