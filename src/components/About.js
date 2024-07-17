import { Button } from "@material-tailwind/react";
import image from "../IMG_4449.jpg";
import ProgressColors from "./Skills";
import Skills from "./Skills";
import { GITHUB, LINKEDIN, MAIL } from "../utils/Constants";

const About=()=> {
    return(
        <>
        <div className="flex justify-between">
        <div className="w-1/3 mt-10">
            <img src={image} className="h-96 w-64 rounded-full ml-20 border border-black-500 "/>
            <div className="flex">
                <a href="https://www.linkedin.com/in/momula-shashank-92a2a925a/" target="_blank">
                    <img src={LINKEDIN} className="w-20 h-20 ml-24 cursor-pointer"/>
                </a>
                <a href="https://github.com/shashankmomula/" target="_blank">
                    <img src={GITHUB} className="w-10 h-10 mt-5 cursor-pointer"/>
                </a>
                <a href="mailto:shashankmomula11@gmail.com" target="_black">
                    <img src={MAIL} className="w-14 h-14 mt-3 ml-3 cursor-pointer"/>    
                </a>
           
            </div>
          
        </div>
       
        <div className="w-2/3">
        <h1 className="text-4xl font-serif flex justify-center m-7 ">About me</h1>
           <p className="bg-blue-100 text-xl font-sans p-3 mr-5 bg-opacity-20 text-justify">
           I am <span className="text-gray-800 font-bold">M. Shashank</span>,a 19-year-old Bachelor of Technology graduate in Artificial Intelligence and Data 
           Science from St. Martin's Engineering College, with a CGPA of 9.18. 
           I authored "Explore Your C Programming," a book covering both foundational 
           and advanced concepts of the C programming language. Passionate about teaching, 
           I actively educate peers and juniors in various programming languages and development practices.
            Additionally, I am a dedicated crew member of the COHO Coding Club,
             where I teach web development and coding. My interests lie in exploring topics in depth and continuously learning and teaching in the field of programming.
             I am focused on enhancing my <span className="font-bold">problem-solving skills</span> in Data Structures and Algorithms <span className="font-bold">(DSA)</span>, aiming to secure a position in top multinational companies (MNCs).
           </p>
         <button className="m-2 ml-80 p-3 bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow transition delay-150 duration-300 ease-in-out" >Resume</button>
        </div>
        
        
        
        </div>
    <div>
    <Skills/>
    </div>
    </>
    );
};

export default About;