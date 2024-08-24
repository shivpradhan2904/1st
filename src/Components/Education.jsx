import React from "react";
import img3 from "../images/st.webp";

function Education() {
  return (
    <div id="education" className="w-full h-screen bg-[#0b2a31] bg-cover bg-center backdrop-blur-lg transition-transform duration-500">
          <h2
            className="text-9xl font-extrabold text-transparent pt-[4rem] mr-[7rem] flex justify-end animate-jump"
            style={{ WebkitTextStroke: "1px #78a4ad" }}
          >
            {Array.from("2018 - 2025").map((char, index) => (
              <span
                key={index}
                className="inline-block animate-jump"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {char}
              </span>
            ))}
          </h2>

          <div className="grid grid-cols-2 gap-10 items-start ml-[4.4rem]">
            <div>
              <h1 className="text-[#82f5da] text-5xl font-bold inline-block animate-slide-in">
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
              <div className="h-2 rounded-xl w-80 bg-[#1a735e] mt-4 mb-8 animate-border-slide-in"></div>

              <p className="text-lg leading-relaxed text-gray-300 inline-block animate-slide-in-paragraph">
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

              <div className="mt-8">
                <div className="mb-6">
                  <h3 className="text-2xl  font-bold">
                    Higher Secondary School
                  </h3>
                  <p className="text-lg text-gray-400">
                    KSUB college | 2018-2020
                  </p>
                </div>
                <div className="mb-6">
                  <h3 className="text-2xl  font-bold">Bachelor Degree</h3>
                  <p className="text-lg text-gray-400">
                    Berhampur University | Zoology Honours | 2020-2023
                  </p>
                </div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold">Master Degree</h3>
                  <p className="text-lg text-gray-400">
                    IMIT | Master In Computer Application | 2023-2025
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <img
                className="w-[30rem] h-[30rem] rounded-lg"
                src={img3}
                alt="sorry"
              />
            </div>
          </div>
        </div>
  );
}

export default Education;