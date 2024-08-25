import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { LOGO } from "../utils/Constants";


const Body =()=>{
    return(
        <section className="flex justify-between">
         <div className="felx justify-between ">
      <div className="font-serif pt-28 m-10 text-4xl sm:">
        <h1>Hi, My name is Shashank</h1>
        <h2>
          and I am good at{' '}
          <span className="text-yellow-800 font-serif">
            <Typewriter
              words={['HTML','Javascript','React','C++','DSA','Java','Redux','Tailwind']}
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
            <div className="w-full m-2 sm:w-1/2 pt-36">
                <img src={LOGO} className='w-2/3 ml-28 '/>
            </div>
            
        </section>
        
    );
};

export default Body;