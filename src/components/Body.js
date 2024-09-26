import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { LOGO } from "../utils/Constants";


const Body =()=>{
    return(
        <section className="flex flex-col-reverse sm:flex-row justify-between items-center sm:items-start">
         <div className="flex flex-col items-center sm:items-start pt-10 sm:pt-28elx justify-between sm:flex flex-col">
      <div className="font-serif text-center text-4xl sm:text-left m-10 sm:text-2xl">
        <h1>Hi, My name is Shashank</h1>
        <h2>
          and I am good at{' '}
          <span className="text-yellow-800 font-serif">
            <Typewriter
              words={['HTML','Javascript','React','C++','DSA','Java','Redux','Tailwind','Node.js']}
              loop={5}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>
      </div>
      <div className="flex">
        <a href="/skills">
        <button className="bg-amber-100 rounded-md p-5 m-5 sm:w-auto h-auto">Explore My work</button>
        </a>
      <a href="/contact">
      <button className="bg-slate-400 rounded-md p-5 m-5 bg-opacity-15 sm:">Get In Touch</button>
      </a>
      
      </div>
      
      
    </div>
            <div className="w-1/3 mr-28">
                <img src={LOGO} className='mr-28 sm:mt-10'/>
            </div>
            
        </section>
        
    );
};

export default Body;