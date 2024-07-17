import React, { useState } from "react";
import { GITHUB } from "../utils/Constants";


const ProjectCard = ({ Title, image, description }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  // const Projectimages = Projectitems[0].images;

  return (
    <div className="bg-slate-50 shadow-black hover:shadow-inner m-2">
     
      <div className="flex items-center">
     
      <div class="p-2 md:p-6 flex flex-col gap-y-3 md:gap-y-6 mb-8 md:mb-16 border-2 rounded-lg darkFrontPageCoreOffering shadow-xl">
        <div class=" text-center">
          <p class=" text-2xl md:text-3xl text-logo-orange font-bold">{Title}</p>
          </div><div class=" p-0 md:p-4 flex flex-col gap-y-4 md:flex-col lg:flex-row gap-x-8 justify-center items-center">
            <div>
              <img src={image} alt="netflix-gpt" width="400" height="400" class="object-contain w-[300px] md:w-[600px] rounded-lg"/>
              </div>
              <div class="flex flex-col gap-y-1">
               {description}
                </div>
                </div>
                </div>
          
      
        {isVisible && (
          <div className="bg-slate-100 border border-b-slate-100 mr-9 p-2 text-justify">
            {description}
            <div className="flex justify-end">
              <a href="https://notionpress.com/author/928880" target="_blank">
                <img src={GITHUB} className="w-10 h-10 mt-5 cursor-pointer" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

