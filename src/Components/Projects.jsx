import React from "react";
import img from "../images/sm.png";
import img1 from "../images/re.jpg";
import img2 from "../images/p.webp";

function Projects() {
  return (
    <div id="project-section" className="h-screen w-full gradient-transition2">
      <div>
        {/* Title aligned to the right */}
        <div className="flex justify-end mr-4 md:mr-20 text-[#82f5da] font-bold text-3xl md:text-5xl pt-12 md:pt-24 animate-slide-in">
          Projects
        </div>

        {/* Underline aligned to the right */}
        <div className="flex justify-end mr-4 md:mr-20 mt-1 md:mt-4">
          <div className="border-b-4 md:border-b-8 rounded-lg mt-1 md:mt-2 border-[#3cbb9d] w-40 md:w-80 animate-slide-in"></div>
        </div>
      </div>

      {/* Project boxes in column on smaller screens */}
      <div className="flex flex-col items-center md:flex-row md:justify-center md:gap-20 mt-3 md:mt-16 px-4 md:px-0">
        <div className="flex flex-wrap justify-center md:justify-start md:gap-4">
          <a
            href="https://anil-dada-smart-assistant-project.vercel.app/"
            className="relative group h-[8rem] mr-4 md:mr-0 mb-2 md:mb-0 w-[10rem] md:h-56 md:w-96 text-white bg-[#165969] flex rounded-xl items-center justify-center transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl overflow-hidden"
          >
            <img
              src={img}
              alt="Smart Assistant"
              className="rounded-xl h-full w-full object-fill"
            />
            <div className="absolute bottom-0 inset-x-0 flex items-center justify-center h-16 transform translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-[#2cb9a7] bg-opacity-80">
              <span className="text-lg md:text-2xl text-[#000000] font-bold">
                Smart Assistant
              </span>
            </div>
          </a>
          <div className="relative group h-[8rem] w-[10rem] md:h-56 md:w-96 text-white bg-[#165969] flex rounded-xl items-center justify-center transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl overflow-hidden">
            <img
              src={img1}
              alt="Find Recipe"
              className="rounded-xl h-full w-full object-cover"
            />
            <div className="absolute bottom-0 inset-x-0 flex items-center justify-center h-16 transform translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-[#2cb9a7] bg-opacity-80">
              <span className="text-lg md:text-2xl text-[#000000] font-bold">
                Find Recipe
              </span>
            </div>
          </div>
          <div className="relative group h-[8rem] w-[10rem] md:h-56 md:w-96 text-white bg-[#165969] flex rounded-xl items-center justify-center transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl overflow-hidden">
            <img
              src={img2}
              alt="Breaking News"
              className="rounded-xl h-full w-full object-fill"
            />
            <div className="absolute bottom-0 inset-x-0 flex items-center justify-center h-16 transform translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-[#2cb9a7] bg-opacity-80">
              <span className="text-lg md:text-2xl text-[#000000] font-bold">
                Breaking News
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* About Our Projects section */}
      <div className="md:mt-10 mt-2 text-center px-4 md:px-0">
        <h1 className="text-white text-2xl md:text-4xl font-semibold md:mb-4 mb-2">
          About Our Projects
        </h1>
        <div className="border-b-2 border-white w-1/2 mx-auto mb-2 md:mb-6"></div>
        <p className="text-white text-[13px] md:text-lg leading-relaxed">
          The <strong>L A Smart Assistant</strong> application leverages
          advanced AI to offer intuitive voice recognition, task management, and
          personalized recommendations, streamlining user interactions and
          boosting productivity. Our <strong>Recipe Finder</strong> platform
          simplifies meal preparation by providing a user-friendly interface for
          searching recipes based on available ingredients and dietary
          preferences, with features like meal planning and recipe management.
          Additionally, <strong>Breaking News</strong> Aggregator consolidates
          real-time news from various sources into a single, customizable feed,
          ensuring users stay informed with relevant comprehensive coverage.
        </p>
      </div>
    </div>
  );
}

export default Projects;
