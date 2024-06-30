import React from 'react';
import { Typewriter } from 'react-simple-typewriter';


const Body =()=>{
    return(
        
        <section className="flex justify-between">
         <div className="felx justify-between ">
      <div className="font-serif pt-28 m-3 text-5xl">
        <h1>Hi, My name is Shashank</h1>
        <h2>
          and I am good at{' '}
          <span className="text-yellow-800 font-serif">
            <Typewriter
              words={['HTML', 'CSS','Javascript','React','C++','DSA','Java','Redux','Tailwind']}
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
        <a href="/about">
        <button className="bg-amber-100 rounded-md p-5 m-5">Explore My work</button>
        </a>
      <a href="/contact">
      <button className="bg-slate-400 rounded-md p-5 m-5 bg-opacity-15">Get In Touch</button>
      </a>
      
      </div>
      
      
    </div>
            <div className="
              w-2/5 m-10">
                <img src="https://www.samayo.org/wp-content/uploads/2020/11/Samayo.org-Blog-Web-Design-SEO-creazione-siti-web-blog-e-commerce-Ayouni-Housam-102-1024x1024.png"/>
            </div>
            
        </section>
        
    );
};

export default Body;