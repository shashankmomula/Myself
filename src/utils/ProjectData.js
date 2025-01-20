import Book1 from "../Book1.png";
import cravings1 from "../cravings1.png";
import Netflixgpt1 from "../Netflixgpt1.png";
import portfolio1 from "../portfolio1.jpg";
import DevTinder from "../DevTinder_EditProfile.png";
export const Projectitems = [
  {
    id: 1,
    Title: "DevTinder - Connecting Developers Effortlessly",
    image: DevTinder, // Replace with the actual image variable or path
    description: (
      <>
        <p className="text-xs md:text-xl">
          ➡️ Project setup from scratch using Node.js, Express, and MongoDB.
        </p>
        <p className="text-sm md:text-xl">
          ➡️ Built RESTful APIs and handled routing with Express.
        </p>
        <p className="text-sm md:text-xl">
          ➡️ Implemented JWT-based authentication and secure password
          encryption.
        </p>
        <p className="text-sm md:text-xl">
          ➡️ Modeled databases and established relationships using Mongoose (ref
          & populate).
        </p>
        <p className="text-sm md:text-xl">
          ➡️ Developed middleware for error handling and API validation,
          ensuring secure data flow.
        </p>
        <p className="text-sm md:text-xl">
          ➡️ Created a dynamic feed API with pagination for scalable content
          delivery.
        </p>
        <p className="text-sm md:text-xl">
          ➡️ Planned and designed both High-Level (HLD) and Low-Level (LLD)
          architecture.
        </p>
        <p className="text-sm md:text-xl">
          ➡️ Built the UI with React, managed state, and connected APIs
          effectively.
        </p>
        <p className="text-sm md:text-xl">
          ➡️ Optimized database performance with compound indexes and efficient
          queries.
        </p>
      </>
    ),

    git_url: "https://github.com/shashankmomula/DevTinder", // Replace with the actual GitHub URL
    host_url: "https://devtinder.netlify.app", // Replace with the actual hosting URL
  },

  {
    id: 2,
    Title:
      "A movie recommendation app powered by GPT-3.5 Turbo integration. 🚀",
    image: Netflixgpt1,
    description: (
      <>
        {" "}
        <p class=" text-xs md:text-xl">
          ➡️ GPT Search, using the latest GPT-3.5 Turbo API 🚀.
        </p>
        <p class=" text-sm md:text-xl">
          ➡️ Authentication - Sign Up, Log In, Sign Out.
        </p>
        <p class=" text-sm md:text-xl">
          ➡️ Form Handling, and Form validations
        </p>
        <p class=" text-sm md:text-xl">➡️ Advanced Tailwind.</p>
        <p class=" text-sm md:text-xl">➡️ useRef hook.</p>
        <p class=" text-sm md:text-xl">➡️ Multi-Language support.</p>
        <p class=" text-sm md:text-xl">
          ➡️ Advanced data handling with Redux Toolkit.
        </p>
        <p class=" text-sm md:text-xl">
          ➡️ Use of .env files to secure secret API keys
        </p>
      </>
    ),
    git_url: "https://github.com/shashankmomula/Netflix-Gpt",
    host_url: "https://netfilxx-gpt.netlify.app",
  },
  {
    id: 3,
    Title:
      "Cravings: Discover Top-Rated Restaurants and Delicious Dishes in Your Locality",
    image: cravings1,
    description: (
      <>
        <p class=" text-xs md:text-xl">➡️ Tailwind CSS.</p>
        <p class=" text-xs md:text-xl">➡️ useState, useEffect hooks</p>
        <p class=" text-xs md:text-xl">➡️ Data handling with Redux Toolkit.</p>
        <p class=" text-xs md:text-xl">➡️ Live API data and data handling</p>
        <p class=" text-xs md:text-xl">➡️ Testing</p>
      </>
    ),
    git_url: "https://github.com/shashankmomula/Cravings",
    host_url: "https://cravingss.netlify.app",
  },
  {
    id: 4,
    Title:
      "Explore My Portfolio: Showcasing Projects, Skills, and Achievements in Tech",
    image: portfolio1,
    description: (
      <>
        <p class=" text-xs md:text-xl">➡️ Tailwind CSS.</p>
        <p class=" text-xs md:text-xl">➡️ React hooks</p>
      </>
    ),
    git_url: "https://github.com/shashankmomula/Myself",
    host_url: "https://shashankmomula.netlify.app/",
  },
];
