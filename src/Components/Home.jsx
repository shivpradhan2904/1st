import React, { useState, useEffect } from "react";
import img1 from "../images/my.jpg";
import img from "../images/re.jpg";

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
    <div
      id="about-section"
        className="relative h-screen bg-cover gradient-transition3 bg-center backdrop-blur-lg">
      <div className="absolute flex flex-col gradient-transition3 h-full w-full">
        <div className="md:relative md:flex-grow md:grid lg:flex grid grid-cols-1 md:mx-6 ml-[1.1rem] items-center md:mb-9 justify-between mt-[3.3rem] md:mt-[5rem] py-4 md:py-0 mx-4 pr-1 rounded-3xl bg-[#011b21] hover:scale-[1.02] hover:shadow-xl hover:shadow-[#203632] transition-all duration-300 ease-in-out">
          <div className="text-white ml-7 md:ml-10">
            <h1 className="text-2xl font-mono inline-block text-[#00FFFF] md:text-6xl sm:text-4xl xs:text-3xl">
              Hello.... I'm Shiv <br /> a passionate
            </h1>
            <h1 className="text-2xl font-semibold md:w-[35rem] w-[19rem]  text-[#28a9a9] mt-1 md:mt-2 md:text-5xl sm:text-3xl xs:text-2xl">
              <span>{currentTitle}</span>
              <span
                className={`cursor ${isBlinking ? "opacity-100" : "opacity-0"}`}
              >
                |
              </span>
            </h1>
            <p className="text-[14px] md:mt-5 mt-1 w-[15rem] pr-5 md:pr-0 sm:[17rem] md:text-xl md:w-[40rem] sm:text-base sm:w-[20rem] xs:text-sm xs:w-[15rem]">
              Aspiring Web & MERN Stack Developer with a strong passion for
              building innovative and impactful web applications. I stay updated
              with the latest technologies to ensure my skills remain sharp and
              relevant in the ever-evolving web development landscape. Skilled
              in designing and implementing databases using MongoDB, ensuring
              data integrity and optimized performance in CRUD operations...
            </p>
            <div className="flex mt-2 md:mt-12 md:grid justify-center xl:justify-start">
              <a
                href={img}
                download="my-image.png"
                className="h-5 px-5 pb-7 md:pt-1 mt-1 md:mt-0 mr-8  font-bold text-black text-lg rounded-lg shadow-lg shadow-black hover:shadow-lg hover:shadow-[#87d2c0] bg-[#00FFFF] md:h-10 md:px-10 md:text-xl sm:h-8 sm:px-6 sm:text-base xs:h-7 xs:px-4 xs:text-sm"
              >
                Get Resume
              </a>
            </div>
          </div>
          <div
            className="w-[10rem] h-[10rem] ml-[3rem] md:ml-0 mt-2 shadow-2xl shadow-black mr-10 bg-no-repeat bg-cover bg-center rounded-full md:w-[30rem] md:h-[30rem] sm:w-[20rem] sm:h-[20rem] xs:w-[15rem] xs:h-[15rem]"
            style={{ backgroundImage: `url(${img1})` }}
          ></div>
        </div>

      </div>
    </div>
  );
}

export default Home;
