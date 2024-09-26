import { Link } from "react-router-dom";
import { useState } from "react";
import logo from '../final.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between items-center w-full h-24 shadow-sm px-4 sm:px-8">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-16 h-16 rounded-md" />
      </div>
      <div className="sm:hidden">
        <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <nav className={`flex-col sm:flex-row sm:flex space-x-6 mr-4 items-center ${isOpen ? 'flex' : 'hidden'} sm:flex`}>
        <Link to="/" className="hover:text-orange-500 transition duration-300">Home</Link>
        <Link to="/about" className="hover:text-orange-500 transition duration-300">About Me</Link>
        <Link to="/contact" className="hover:text-orange-500 transition duration-300">Contact</Link>
        <Link to="/projects" className="hover:text-orange-500 transition duration-300">Projects</Link>
        <Link to="/PublicationsInsights" className="hover:text-orange-500 transition duration-300">Publications & Insights</Link>
      </nav>
    </header>
  );
};

export default Header;



