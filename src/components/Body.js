import React from "react";
import { Typewriter } from "react-simple-typewriter";
// import { LOGO } from "../utils/Constants";
// import { Link } from 'react-router-dom';
import { Link } from "react-router-dom";
import Diff from "./Diff";

const Body = () => {
  return (
    <section className="flex flex-col-reverse sm:flex-row justify-between items-center sm:items-start">
      <div className="flex flex-col items-center sm:items-start pt-10 sm:pt-28elx justify-between sm:flex flex-col">
        <div className="font-serif text-center text-2xl m-10 sm:ml-28 lg:mr-28 mt-16 sm:text-4xl">
          <h1>Hi, My name is Shashank</h1>
          <h2 className="h-10 h-12">
            and I am good at{" "}
            <span className="text-yellow-800 font-serif inline-block dark:text-yellow-200">
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
          </h2>
        </div>

        <div className="flex sm:ml-36">
          <Link to="/skills">
            <button className="bg-amber-100 rounded-md p-5 m-5 sm:w-auto h-auto dark:text-black">
              Explore My Work
            </button>
          </Link>
          <Link to="/contact">
            <button className="bg-slate-400 rounded-md p-5 m-5 bg-opacity-15 sm:">
              Get In Touch
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full sm:w-1/3 mr-0 sm:mr-28 flex justify-center sm:justify-start">
        {/* <img
          src={LOGO}
          className="w-44 h-44 mt-6 sm:w-80 sm:h-80 sm:mt-20 mix-blend-multiply dark:mix-blend-normal"
        /> */}
        <Diff />
      </div>
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
