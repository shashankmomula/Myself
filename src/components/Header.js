import { Link } from "react-router-dom";
import logo from '../final.png';

const Header = () => {
  return (
    <header className="flex justify-between items-center w-full h-24 shadow-sm">
      <div className="ml-4">
        {/* <img src={logo} alt="Logo" className="w-16 h-16 rounded-md" /> */}
      </div>
      <nav className="flex space-x-6 mr-4">
        <Link to="/" className=" hover:text-orange-500 transition duration-300">Home</Link>
        <Link to="/about" className=" hover:text-orange-500 ">About Me</Link>
        <Link to="/contact" className="hover:text-orange-500 transition duration-300">Contact</Link>
        <Link to="/projects" className=" hover:text-orange-500 transition duration-300">Projects</Link>
        <Link to="/PublicationsInsights" className=" hover:text-orange-500 transition duration-300">Publications & Insights</Link>
      </nav>
    </header>
  );
};

export default Header;
