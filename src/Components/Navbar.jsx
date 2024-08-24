import React from "react";
import { Link } from "react-scroll";
import img2 from "../images/ic.png";

function Navbar() {
  return (
    <div>
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] h-16 bg-[#1a8173]/30 backdrop-blur-xl rounded-full flex justify-between items-center text-lg text-[#A3E4D7] px-8 shadow-lg z-50">
        <div className="flex justify-start">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer font-bold shadow-black shadow-lg lg:text-lg text-[#bdbdbd] bg-[#000000] rounded-xl px-3 transition-all duration-300 hover:bg-[#1d6d68] hover:text-[#e1f7f0] transform"
          >
            Portfolio
          </Link>
        </div>
        <ul className="flex space-x-10 justify-center items-center mr-10 backdrop-blur-[50px] bg-[#104f4f] p-4 rounded-full">
          <li className="relative overflow-hidden">
            <Link
              to="education-section"
              smooth={true}
              duration={500}
              className="cursor-pointer text-base lg:text-lg hover:text-white transition-transform transform hover:scale-105 duration-300 ease-in-out"
            >
              Education
            </Link>
          </li>
          <li className="relative overflow-hidden">
            <Link
              to="about-section"
              smooth={true}
              duration={500}
              className="cursor-pointer text-base lg:text-lg hover:text-[#ffffff] transition-transform transform hover:scale-105 duration-300 ease-in-out"
            >
              About Me
            </Link>
          </li>
          <li className="relative overflow-hidden">
            <Link
              to="project-section"
              smooth={true}
              duration={500}
              className="cursor-pointer text-base lg:text-lg hover:text-[#ffffff] transition-transform transform hover:scale-105 duration-300 ease-in-out"
            >
              Project
            </Link>
          </li>
          <li className="relative overflow-hidden">
            <Link
              to="contact-section"
              smooth={true}
              duration={500}
              className="cursor-pointer text-base lg:text-lg hover:text-[#ffffff] transition-transform transform hover:scale-105 duration-300 ease-in-out"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        <div className="flex justify-end">
          <img
            src={img2}
            className="h-10 w-10 transition-transform duration-500 transform hover:rotate-360 hover:scale-105"
            alt="Icon"
          />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
