import React from 'react';
import img from '../images/sm.png';
import img1 from '../images/re.jpg';
import img2 from '../images/p.webp';

function Projects() {
  return (
    <div id='project-section' className="h-screen w-full gradient-transition2">
      <div>
        {/* Center the Projects title */}
        <div className="flex ml-20 text-[#82f5da] font-bold text-5xl pt-24 animate-slide-in">
          Projects
        </div>
        
        {/* Add a border under the title */}
        <div className="flex ml-20 mt-4">
          <div className="border-b-8 rounded-lg mt-2 border-[#3cbb9d] w-80 animate-slide-in"></div>
        </div>
      </div>

      {/* Flex container for project boxes */}
      <div className="flex justify-center items-center gap-20 mt-16">
        <a href=' https://anil-dada-smart-assistant-project.vercel.app/' className="relative group h-64 w-96 text-white bg-[#165969] flex rounded-xl items-center justify-center transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl overflow-hidden">
          <img src={img} alt="Smart Assistant" className="rounded-xl h-full w-full object-fill" />
          <div className="absolute bottom-0 inset-x-0 flex items-center justify-center h-16 transform translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-[#2cb9a7] bg-opacity-80">
            <span className="text-2xl text-[#000000] font-bold">Smart Assistant</span>
          </div>
        </a>
        <div className="relative group h-64 w-96 text-white bg-[#165969] flex rounded-xl items-center justify-center transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl overflow-hidden">
          <img src={img1} alt="Find Recipe" className="rounded-xl h-full w-full object-cover" />
          <div className="absolute bottom-0 inset-x-0 flex items-center justify-center h-16 transform translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-[#2cb9a7] bg-opacity-80">
            <span className="text-2xl text-[#000000] font-bold">Find Recipe</span>
          </div>
        </div>
        <div className="relative group h-64 w-96 text-white bg-[#165969] flex rounded-xl items-center justify-center transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl overflow-hidden">
          <img src={img2} alt="Breaking News" className="rounded-xl h-full w-full object-fill" />
          <div className="absolute bottom-0 inset-x-0 flex items-center justify-center h-16 transform translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-[#2cb9a7] bg-opacity-80">
            <span className="text-2xl text-[#000000] font-bold">Breaking News</span>
          </div>
        </div>
      </div>

      {/* About Our Projects heading and description */}
      <div className="mt-10 text-center">
        <h1 className="text-white text-4xl font-semibold mb-4">About Our Projects</h1>
        <div className="border-b-2 border-white w-1/2 mx-auto mb-6"></div>
        <p className="text-white text-lg px-4">
          The <strong> L A Smart Assistant</strong> application leverages advanced AI to offer intuitive voice recognition, task management, and personalized recommendations, streamlining user interactions and boosting productivity. Our <strong>Recipe Finder</strong> platform simplifies meal preparation by providing a user-friendly interface for searching recipes based on available ingredients and dietary preferences, with features like meal planning and recipe management. Additionally, <strong>Breaking News</strong> Aggregator consolidates real-time news from various sources into a single, customizable feed, ensuring users stay informed with relevant updates and comprehensive coverage.
        </p>
      </div>
    </div>
  );
}

export default Projects;
