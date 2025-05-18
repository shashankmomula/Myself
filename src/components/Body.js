import React from "react";
import { Typewriter } from "react-simple-typewriter";
// import { LOGO } from "../utils/Constants";
// import { Link } from 'react-router-dom';
import { Link } from "react-router-dom";
import Diff from "./Diff";
import { motion } from "framer-motion";

const Body = () => {
  return (
    <section className="min-h-screen flex flex-col-reverse sm:flex-row justify-between items-center sm:items-center px-4 sm:px-8 lg:px-16 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center sm:items-start pt-10 sm:pt-0 justify-between sm:flex flex-col max-w-2xl"
      >
        <div className="font-serif text-center sm:text-left">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent"
          >
            Hi, I'm Shashank
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl sm:text-3xl lg:text-4xl mb-8 text-gray-700 dark:text-gray-300"
          >
            I specialize in{" "}
            <span className="text-amber-600 dark:text-amber-400 font-bold">
              <Typewriter
                words={[
                  "HTML",
                  "Javascript",
                  "React",
                  "C++",
                  "DSA",
                  "Java",
                  "Redux",
                  "Tailwind",
                  "Node.js",
                  "Express.js",
                  "Mongo DB",
                ]}
                loop={5}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-xl"
          >
            A passionate full-stack developer crafting beautiful and functional web experiences.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link to="/skills">
            <button className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-semibold px-8 py-4 rounded-lg hover:from-amber-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Explore My Work
            </button>
          </Link>
          <Link to="/contact">
            <button className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white font-semibold px-8 py-4 rounded-lg border-2 border-amber-500 hover:bg-amber-50 dark:hover:bg-gray-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Get In Touch
            </button>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full sm:w-1/2 lg:w-1/3 flex justify-center sm:justify-end mt-8 sm:mt-0"
      >
        <Diff />
      </motion.div>
    </section>
  );
};

export default Body;

// import React from 'react';
// import { Typewriter } from 'react-simple-typewriter';
// import { LOGO } from "../utils/Constants";

// const Body = () => {
//     return (
//         <section className="flex flex-col-reverse sm:flex-row justify-between items-center sm:items-start">
//             {/* Container for text and buttons */}
//             <div className="flex flex-col items-center sm:items-start pt-10 sm:pt-28 justify-between">
//                 <div className="font-serif text-center text-4xl sm:text-left m-10 sm:text-2xl">
//                     <h1>Hi, My name is Shashank</h1>
//                     <h2>
//                         and I am good at{' '}
//                         <span className="text-yellow-800 font-serif">
//                             <Typewriter
//                                 words={['HTML', 'Javascript', 'React', 'C++', 'DSA', 'Java', 'Redux', 'Tailwind', 'Node.js']}
//                                 loop={5}
//                                 cursor
//                                 cursorStyle='|'
//                                 typeSpeed={70}
//                                 deleteSpeed={50}
//                                 delaySpeed={1000}
//                             />
//                         </span>
//                     </h2>
//                 </div>
//                 <div className="flex flex-col items-center">
//                     <a href="/skills" className="mb-2">
//                         <button className="bg-amber-100 rounded-md p-5 sm:w-auto h-auto">Explore My work</button>
//                     </a>
//                     <a href="/contact">
//                         <button className="bg-slate-400 rounded-md p-5 bg-opacity-15">Get In Touch</button>
//                     </a>
//                 </div>
//             </div>
//             {/* Logo section */}
//             <div className="flex justify-center w-full sm:w-1/3">
//                 <img src={LOGO} alt="Logo" className='w-32 h-32' /> {/* Adjust size as necessary */}
//             </div>
//         </section>
//     );
// };

// export default Body;
