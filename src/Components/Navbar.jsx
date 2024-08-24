import React from 'react';
import { Link } from 'react-scroll';
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
            className="cursor-pointer font-bold shadow-black shadow-lg lg:text-lg text-black bg-[#13574e] rounded-xl px-3 transition-all duration-300"
          >
            My Portfolio
          </Link>
        </div>
        <ul className="flex space-x-10 justify-center items-center mr-10">
          <li>
            <Link
              to="education"
              smooth={true}
              duration={500}
              className="cursor-pointer text-base lg:text-lg hover:text-[19px] hover:shadow-lg hover:shadow-black hover:text-[#42c3b1] transition-transform transform hover:scale-110 duration-300"
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              to="about-section"
              smooth={true}
              duration={500}
              className="cursor-pointer text-base lg:text-lg hover:shadow-lg hover:shadow-black hover:text-[19px] hover:text-[#42c3b1] transition-transform transform hover:scale-110 duration-300"
            >
              About Me
            </Link>
          </li>
          
          <li>
            <Link
              to="project"
              smooth={true}
              duration={500}
              className="cursor-pointer text-base lg:text-lg hover:shadow-lg hover:shadow-black hover:text-[19px] hover:text-[#42c3b1] transition-transform transform hover:scale-110 duration-300"
            >
              Project
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer text-base lg:text-lg hover:shadow-lg hover:shadow-black hover:text-[19px] hover:text-[#42c3b1] transition-transform transform hover:scale-110 duration-300"
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="flex justify-end">
          <img
            src={img2}
            className="h-10 w-10 transition-transform duration-500 transform hover:rotate-360"
            alt="Icon"
          />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
