import { Button } from "@material-tailwind/react";
import image from "../IMG_4449.jpg";
import ProgressColors from "./Skills";
import Skills from "./Skills";
// import resume from "../../public/NEW_RESUME.pdf"
import { GITHUB, LINKEDIN, MAIL } from "../utils/Constants";

const About = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between p-6">
        <div className="md:w-1/3 mt-10 flex flex-col items-center">
          <img
            src={image}
            className="w-32 h-48 md:h-96 md:w-60  rounded-full border border-black-500"
            alt="Profile"
          />
          <div className="flex  mt-6">
            <a
              href="https://www.linkedin.com/in/momula-shashank-92a2a925a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={LINKEDIN}
                className="w-10 h-10 md:w-8 md:h-8 cursor-pointer mt-2 mr-1.5"
                alt="LinkedIn"
              />
            </a>
            <a
              href="https://github.com/shashankmomula/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={GITHUB}
                className="w-10 h-10 md:w-12 md:h-12 cursor-pointer"
                alt="GitHub"
              />
            </a>
            <a
              href="mailto:shashankmomula11@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={MAIL}
                className="w-10 h-10 md:w-8 md:h-8 mt-2 ml-2 cursor-pointer"
                alt="Email"
              />
            </a>
          </div>
        </div>

        <div className="md:w-2/3 mt-10 md:mt-0">
          <h1 className="text-4xl font-serif text-center mb-7">About Me</h1>
          <p className="bg-blue-100 text-lg md:text-xl font-sans p-4 rounded-lg bg-opacity-20 text-justify">
            I am <span className="text-gray-800 font-bold">M. Shashank</span>, a
            19-year-old Bachelor of Technology graduate in Artificial
            Intelligence and Data Science from St. Martin's Engineering College,
            with a CGPA of 9.18. I authored "Explore Your C Programming," a book
            covering both foundational and advanced concepts of the C
            programming language. Passionate about teaching, I actively educate
            peers and juniors in various programming languages and development
            practices. Additionally, I am a dedicated crew member of the COHO
            Coding Club, where I teach web development and coding. My interests
            lie in exploring topics in depth and continuously learning and
            teaching in the field of programming. I am focused on enhancing my{" "}
            <span className="font-bold">problem-solving skills</span> in Data
            Structures and Algorithms <span className="font-bold">(DSA)</span>,
            aiming to secure a position in top multinational companies (MNCs).
          </p>
          <div className="flex justify-center mt-6">
            <a href="/NEW_RESUME.pdf" target="_blank" rel="noopener noreferrer">
            <button className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow transition delay-150 duration-300 ease-in-out">
              Resume
            </button>
            </a>
            
          </div>
        </div>
      </div>

      <div className="mt-10">
        <Skills />
      </div>
    </>
  );
};

export default About;
