import React, { useState, useEffect } from "react";
import img1 from "../images/my.jpg";

const titles = [
  "Frontend Developer",
  "MERN Stack Developer",
  "Full Stack Developer",
  "Photographer",
];

function Home() {
  const [currentTitle, setCurrentTitle] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isBlinking, setIsBlinking] = useState(true);

  // Speed controls
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const pauseBetweenTitles = 1500;

  useEffect(() => {
    const handleTyping = () => {
      const currentFullTitle = titles[titleIndex];

      // Blinking effect control
      if (!isDeleting && currentTitle === currentFullTitle && !isBlinking) {
        setTimeout(() => setIsDeleting(true), pauseBetweenTitles);
        return;
      }

      if (!isDeleting) {
        if (charIndex < currentFullTitle.length) {
          setCurrentTitle((prev) => prev + currentFullTitle[charIndex]);
          setCharIndex((prev) => prev + 1);
          setIsBlinking(false);
        } else {
          setIsBlinking(true);
        }
      } else {
        if (charIndex > 0) {
          setCurrentTitle((prev) => prev.substring(0, prev.length - 1));
          setCharIndex((prev) => prev - 1);
          setIsBlinking(false);
        } else {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
          setIsBlinking(true);
        }
      }
    };

    const typingTimeout = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(typingTimeout);
  }, [charIndex, isDeleting, titleIndex, currentTitle, isBlinking]);

  useEffect(() => {
    const blinkTimeout = setInterval(() => {
      setIsBlinking((prev) => !prev);
    }, 500);

    return () => clearInterval(blinkTimeout);
  }, []);

  return (
    <div id="about-section" className="relative h-screen bg-cover bg-center backdrop-blur-lg">
      <div id="about" className="absolute flex flex-col bg-[#011b21] h-full w-full">
        <div className="relative flex-grow flex items-center justify-between mt-16 p-8 mb-10 bg-[#011b21]">
          <div className="text-white ml-10">
            <h1 className="text-6xl font-mono inline-block text-[#00FFFF]">
              Hello, I'm Shiv <br /> a passionate
            </h1>
            <h1 className="text-5xl font-semibold text-[#28a9a9] mt-4">
              <span>{currentTitle}</span>
              <span
                className={`cursor ${isBlinking ? "opacity-100" : "opacity-0"}`}
              >
                |
              </span>
            </h1>
            <p className="text-xl mt-8 w-[40rem]">
              Aspiring Web & MERN Stack Developer with a strong passion for
              building innovative and impactful web applications. Skilled in
              designing and implementing databases using MongoDB, ensuring data
              integrity and optimized performance in CRUD operations...
            </p>
            <div className="flex mt-12 gap-2 items-center">
              <span className="cursor-pointer text-[#0164a2] text-xl">
                Get Details{">>"}
              </span>
              <button className="h-10 w-32 text-xl rounded-lg shadow-lg shadow-black hover:shadow-lg hover:shadow-[#365d46] bg-[#20ce74a0]">
                Get Resume
              </button>
            </div>
          </div>
          <div
            className="w-[30rem] h-[30rem] shadow-2xl shadow-black mr-10 bg-no-repeat bg-cover bg-center rounded-full"
            style={{ backgroundImage: `url(${img1})` }}
          ></div>
        </div>
      </div>

      {/* Ensure to give the right ID for the Education section */}
      <div id="education" className="h-screen bg-[#011b21]">
        {/* Education content goes here */}
      </div>

      {/* Additional sections go here */}
    </div>
  );
}

export default Home;
