import React, { useState } from "react";
import { GITHUB } from "../utils/Constants";


const ProjectCard = ({ Title, image, description,URL }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  // const Projectimages = Projectitems[0].images;

  return (
    <div className="bg-slate-50 shadow-black hover:shadow-inner mb-6 mt-6">
      <div className="text-center mb-4 mt-2 p-4">
         <p className= "text-sm font-bold sm:text-3xl">{Title}</p>
        </div>
    <div className="flex items-center">
      {/* Image Section */}
      <div className="p-2 md:p-6">
  <img
    src={image}
    alt="netflix-gpt"
    className="object-contain w-full h-auto max-w-[400px] md:max-w-[600px] rounded-lg"
  />
</div>

      
      {/* Description Section */}
      <div className="p-4 md:p-6 flex flex-col gap-y-4">
  <div className="flex flex-col gap-y-2">
    {description}
  </div>
  <div className="flex  md:flex-row ">
    <button
        className="bg-slate-300 hover:bg-slate-400 font-semibold rounded-md m-2 p-3"
        onClick={() => window.open(URL, "_blank")}
    >
        View Code
    </button>
    
    <button
        className="bg-slate-300 hover:bg-slate-400 font-semibold rounded-md m-2 p-3"
        onClick={() => window.open("", "_blank")}
    >
        Try Now
    </button>
</div>


</div>

    </div>
  </div>
  
          
      
       
     
  );
};

export default ProjectCard;

