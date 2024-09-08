import React from "react";
import { Link } from "react-scroll";
import img2 from "../images/ic.png";

function Navbar() {
  return (
    <div>
      <nav className="fixed top-1 md:top-4 sm:top-3 left-0 right-0  mx-auto w-[90%] h-[2.5rem] bg-[#1a8173]/30 backdrop-blur-xl rounded-full flex justify-between items-center text-lg text-[#A3E4D7] px-3 shadow-lg z-50 md:w-[90%] md:h-14 md:px-6 sm:w-[95%] sm:h-12 sm:px-4 sm:text-base xs:w-full xs:h-10 xs:px-2 xs:text-sm xs:rounded-none xs:top-0 xs:bg-[#1a8173]/30 xs:backdrop-blur-none space-x-3 custom-translate">
        <div className="flex justify-start xs:rounded-none">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer font-semibold md:font-bold text-[10px] text-[#c2e4dd] bg-[#000000] rounded-2xl px-2 md:py-1 transition-all duration-300 hover:bg-[#4a4a4a] hover:text-[#99d5c2] transform md:px-3 md:text-lg sm:px-1 sm:text-base xs:text-xs xs:px-1 xs:py-1"
          >
            Portfolio
          </Link>
        </div>

        <ul className="flex space-x-2 justify-center items-center md:mr-10 md:h-[55px] h-[2.5rem] backdrop-blur-[50px] bg-[#104f4f] p-3 rounded-full md:space-x-10 md:p-3 sm:space-x-6 sm:p-2 xs:space-x-4 xs:p-1 xs:rounded-none xs:top-0 xs:left-0 xs:right-0 xs:bg-[#1a8173]/30 xs:backdrop-blur-none">
          <li className="relative overflow-hidden">
            <Link
              to="about-section"
              smooth={true}
              duration={500}
              className="cursor-pointer text-[10px] lg:text-lg hover:text-white transition-transform transform hover:scale-105 duration-300 ease-in-out md:text-lg sm:text-sm xs:text-xs font-bold "
            >
              About Me
            </Link>
          </li>
          <li className="relative overflow-hidden">
            <Link
              to="education-section"
              smooth={true}
              duration={500}
              className="cursor-pointer text-[10px] lg:text-lg hover:text-white transition-transform transform hover:scale-105 duration-300 ease-in-out md:text-lg sm:text-sm xs:text-xs font-bold "
            >
              Education
            </Link>
          </li>
          <li className="relative overflow-hidden">
            <Link
              to="project-section"
              smooth={true}
              duration={500}
              className="cursor-pointer text-[10px] lg:text-lg hover:text-white transition-transform transform hover:scale-105 duration-300 ease-in-out md:text-lg sm:text-sm xs:text-xs font-bold "
            >
              Project
            </Link>
          </li>
          <li className="relative overflow-hidden">
            <Link
              to="contact-section"
              smooth={true}
              duration={500}
              className="cursor-pointer text-[10px] lg:text-lg hover:text-white transition-transform transform hover:scale-105 duration-300 ease-in-out md:text-lg sm:text-sm xs:text-xs font-bold "
            >
              Contact Us
            </Link>
          </li>
        </ul>

        <div className="flex justify-end">
          <img
            src={img2}
            className="h-6 w-6 md:h-10 md:w-10 sm:h-8 sm:w-68 "
            alt="Icon"
          />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
