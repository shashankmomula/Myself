import React, { useState } from 'react';
import Book1 from "../Book1.png";
import { AMAZON, FLIPKART, GITHUB, LINKEDIN, MAIL, NOTION } from "../utils/Constants";



function BookCard({image,description}) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className='bg-slate-50  shadow-black hover:shadow-inner m-2'>
      
        <div className="flex items-center">
          <img src={image} alt="Book" className="w-52 ml-40 m-7 shadow-gray-900 hover:shadow-2xl" />
          
          <div onClick={toggleVisibility} className="cursor-pointer toggle-icon">
          {isVisible? <svg class="h-10 w-10 text-gray-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
        </svg>:<svg class="h-10 w-10 text-gray-7000 animate-pulse"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
</svg> }
            </div>
            {isVisible && (
        <div className="bg-slate-100 border border-b-slate-100 mr-9 p-2">
         {description}
         <div className="flex justify-end">
                <a href="https://notionpress.com/author/928880" target="_blank">
                    <img src={NOTION} className="w-10 h-10 mt-5  cursor-pointer"/>
                </a>
                <a href="https://www.flipkart.com/explore-your-c-programming-real-world-hello/p/itm8771619b7e3f5" target="_blank">
                    <img src={FLIPKART} className="w-9 h-9 mt-5 cursor-pointer"/>
                </a>
                <a href="https://www.amazon.in/Explore-Your-Programming-Real-world/dp/B0CMHZZ9C2/ref=sr_1_1?crid=29IR70QWERCL1&dib=eyJ2IjoiMSJ9.cY-eT9waY5Ut_9dnL89A45kXT2TsoZXaCQM_hEBjkMc.ytBsPr89uISicN8hmXJfBPH9f-rMRNa0aGuq3vqLhQI&dib_tag=se&keywords=explore+your+c+programming+in+real+world&qid=1720017131&sprefix=explore+your+c+programming+in+real+worl%2Caps%2C244&sr=8-1" target="_black">
                    <img src={AMAZON } className="w-10 h-10 mt-5 ml-1 cursor-pointer"/>    
                </a>
           
            </div>
        </div>
      )}
        
        </div>
        
      </div>
      
    
  );
}

export default BookCard;