import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../final.png";
import logo1 from "../darkThemeLogo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Sync with localStorage and the document's dark mode state
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") === "dark";
    setDarkMode(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    const newTheme = !darkMode ? "dark" : "light";
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme); // Save theme preference
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="flex justify-between items-center w-full h-24 shadow-lg px-4 sm:px-8 bg-white dark:bg-gray-800">
      {/* Logo Section */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-28 h-24 rounded-md mix-blend-multiply" />
      </div>

      {/* Mobile Menu Button */}
      <div className="sm:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-800 bg-slate-200 rounded-lg focus:outline-none"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <nav
        className={`fixed flex-col sm:flex-row sm:flex space-x-6 absolute sm:relative top-24 rounded-lg sm:top-auto right-3 sm:right-0 p-4 sm:p-0 ${
          isOpen ? "flex" : "hidden"
        } sm:flex text-right ${
          isOpen ? "bg-black text-white" : "bg-transparent text-black"
        }`}
      >
        <Link
          to="/"
          className="hover:text-orange-600 transition duration-300 m-1 p-1 dark:text-white dark:hover:text-amber-300"
          onClick={closeMenu}
        >
          Home
        </Link>
        <Link
          to="/about"
          className="hover:text-orange-600 transition duration-300 m-1 p-1 dark:text-white dark:hover:text-amber-300"
          onClick={closeMenu}
        >
          About Me
        </Link>
        <Link
          to="/contact"
          className="hover:text-orange-600 transition duration-300 m-1 p-1 dark:text-white dark:hover:text-amber-300"
          onClick={closeMenu}
        >
          Contact
        </Link>
        <Link
          to="/projects"
          className="hover:text-orange-600 transition duration-300 m-1 p-1 dark:text-white dark:hover:text-amber-300"
          onClick={closeMenu}
        >
          Projects
        </Link>
        <Link
          to="/PublicationsInsights"
          className="hover:text-orange-600 transition duration-300 m-1 p-1 dark:text-white dark:hover:text-amber-300"
          onClick={closeMenu}
        >
          Publications & Insights
        </Link>

        <button
          onClick={toggleDarkMode}
          className="text-2xl pl-2 transition-transform transform hover:scale-110 cursor-pointer"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? "🌞" : "🌙"}
        </button>
      </nav>
    </header>
  );
};

export default Header;
