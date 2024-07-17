import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { LOGO } from "../utils/Constants";


const Body =()=>{
    return(
        <section className="flex justify-between">
         <div className="felx justify-between ">
      <div className="font-serif pt-28 m-10 text-4xl">
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
      <div >
        <a href="/skills">
        <button className="bg-amber-100 rounded-md p-5 m-5">Explore My work</button>
        </a>
      <a href="/contact">
      <button className="bg-slate-400 rounded-md p-5 m-5 bg-opacity-15">Get In Touch</button>
      </a>
      
      </div>
      
      
    </div>
            <div className="
              w-2/5 m-2">
                <img src={LOGO}/>
            </div>
            
        </section>
        
    );
};

export default Body;