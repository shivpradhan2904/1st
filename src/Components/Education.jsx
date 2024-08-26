import React from "react";
import img3 from "../images/ed.png";

function Education() {
  return (
    <div
      id="education-section"
      className="w-full h-screen gradient-transition1 bg-cover bg-center backdrop-blur-lg transition-transform duration-500"
    >
      <h2
        className="text-6xl md:text-9xl font-extrabold text-transparent pt-[4rem] md:pt-[4rem] mr-[1rem] md:mr-[7rem] flex justify-center md:justify-end animate-jump"
        style={{ WebkitTextStroke: "1px #15221f" }}
      >
        {Array.from("2018 - 2025").map((char, index) => (
          <span
            key={index}
            className="inline-block hover:animate-jump md:hover:translate-y-[-30px] transition-transform duration-300"
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
            {char}
          </span>
        ))}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 items-start mx-[2rem] md:ml-[4.4rem]">
        <div>
          <h1 className="text-[#82f5da] text-3xl md:text-5xl font-bold inline-block animate-slide-in">
            {Array.from("Education").map((char, index) => (
              <span
                key={index}
                className="inline-block"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {char}
              </span>
            ))}
          </h1>
          <div className="h-1 md:h-2 rounded-xl w-1 sm:w-32 md:w-80 bg-[#1fa485] mt-2 md:mt-4 mb-4 md:mb-8 animate-border-slide-in"></div>

          <p className="text-sm md:text-lg leading-relaxed text-gray-300 inline-block animate-slide-in-paragraph">
            {Array.from(
              "My educational journey has been shaped by a passion for creativity and technology. I began with a strong foundation in the arts, earning my Higher Secondary School diploma from the Ksub in 2018. Here, I honed my skills in visual design and developed an appreciation for the power of creative expression. Building on this, I pursued a Bachelor's Degree in Zoology hons from Berhampur University, graduating in 2023. My time at university deepened my understanding of design principles and equipped me with the tools to bring ideas to life through visual storytelling."
            ).map((char, index) => (
              <span
                key={index}
                className="inline-block"
                style={{ animationDelay: `${index * 0.02}s` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </p>

          <div className="mt-4 md:mt-8">
            <div className="mb-5 md:mb-10">
              <h3 className="text-xl md:text-2xl text-[#152b26] font-bold">
                Bachelor Degree
              </h3>
              <p className="text-sm md:text-lg text-[#a9dfdf]">
                Berhampur University || 2020-2023
              </p>
            </div>

            <div className="mb-3 md:mb-5">
              <h3 className="text-xl md:text-2xl text-[#152b26] font-bold">
                Master Degree
              </h3>
              <p className="text-sm md:text-lg text-[#a9dfdf]">
                Institute Of Management And Infromation Technology || 2023-2025
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center hidden md:flex">
          <img
            className="w-[20rem] h-[20rem] md:w-[35rem] md:h-[35rem] mt-4 md:mt-10 rounded-lg"
            src={img3}
            alt="sorry"
          />
        </div>
      </div>
    </div>
  );
}

export default Education;
