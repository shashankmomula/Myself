import { Link } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom/dist";
import logo from '../final.png';


const Header = () =>{
    return (
      <div className="flex justify-between  bg-opacity-30 w-90 h-30 bg-gradient-to-tr bg-orange-300">
        <div className="logo-container">
           <img src={logo} alt="Logo" className="size-28 rounded-md ml-10"/>
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
           
            <li className="px-4">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4">
              <Link to="/about">About Me</Link>
            </li>
            <li className="px-4">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="px-4">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="px-4">
              <Link to="/PublicationsInsights">Publications & Insights</Link>
            </li>
           
          
          </ul>
        </div>
      </div>
    );
};



export default Header;

