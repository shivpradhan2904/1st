import React from "react";
import img from "../images/whatsapp.png";
import img1 from "../images/email.png";
import img3 from "../images/instagram.png";
import img4 from "../images/git.png";
import img5 from "../images/linkedin (1).png";
import "./styles.css";

function Contact() {
  const speakUtterance = () => {
    const inputText = document.querySelector("input").value;
    const utterance = new SpeechSynthesisUtterance(inputText);
    speechSynthesis.speak(utterance);
  };
  const openWhatsApp = () => {
    const phoneNumber = "+919078738600"; // Replace with your phone number
    const message = "Hello, I would like to connect with you."; // Pre-filled message
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  // Email handler
  const sendEmail = () => {
    const email = "sibapradhan2904@gmail.com"; // Replace with your email
    const subject = "Inquiry"; // Pre-filled subject
    const body = "Hello, I would like to get more information."; // Pre-filled body
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl, "_blank");
  };

  return (
    <div id="contact-section" className="gradient-transition h-screen w-full">
      <section className="gradient-transition text-[#75f3e0] py-8 md:py-28 flex flex-col items-center justify-between min-h-screen relative">
        <div className="w-full gradient-transition shadow-lg pt-10 md:p-8 rounded-lg">
          <div className="text-center mb-3 md:mb-12">
            <h2 className="text-4xl font-bold">
              {Array.from("GET").map((char, index) => (
                <span
                  key={index}
                  className="inline-block md:hover:animate-jump md:hover:translate-y-[-16px] transition-transform duration-300"
                >
                  {char}
                </span>
              ))}
              &nbsp;
              {Array.from("IN").map((char, index) => (
                <span
                  key={index}
                  className="inline-block md:hover:animate-jump md:hover:translate-y-[-16px] transition-transform duration-300"
                >
                  {char}
                </span>
              ))}
              &nbsp;
              {Array.from("TOUCH").map((char, index) => (
                <span
                  key={index}
                  className="inline-block md:hover:animate-jump md:hover:translate-y-[-16px] transition-transform duration-300"
                >
                  {char}
                </span>
              ))}
            </h2>
            <p
              className="text-[#4ae9b2] mt-2 text-lg tracking-wide"
              style={{ fontFamily: '"Pacifico", cursive', fontWeight: 400 }}
            >
              Let's Work Together
            </p>
          </div>

          <div
            className="container mx-auto flex flex-wrap justify-center md:gap-8 text-center"
            style={{ fontFamily: '"Pacifico ", cursive', fontWeight: 400 }}
          >
            {/* Phone Button */}
            <div className="p-6 rounded-lg transition duration-300 group">
              <button
                onClick={openWhatsApp}
                className="transition duration-500 ease-in-out transform group-hover:scale-110"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={img}
                    alt="Icon"
                    className="h-8 w-8 transition duration-500 ease-in-out transform group-hover:scale-125"
                  />
                </div>
              </button>
              <h3 className="md:text-xl text-sm font-semibold text-white">Whatsapp</h3>
            </div>

            {/* Email Button */}
            <div className="p-6 rounded-lg transition duration-300 group">
              <button
                onClick={sendEmail}
                className="transition duration-500 ease-in-out transform group-hover:scale-110"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={img1}
                    alt="Icon"
                    className="h-8 w-8 transition duration-500 ease-in-out transform group-hover:scale-125"
                  />
                </div>
              </button>
              <h3 className="md:text-xl text-sm font-semibold text-white">Email</h3>
            </div>

            {/* GitHub Button */}
            <div className="p-6 rounded-lg transition duration-300 group">
              <a
                href="https://github.com/shivpradhan2904"
                className="transition duration-500 ease-in-out transform group-hover:scale-110"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={img4}
                    alt="Icon"
                    className="h-8 w-8 transition duration-500 ease-in-out transform group-hover:scale-125"
                  />
                </div>
              </a>
              <h3 className="md:text-xl text-sm font-semibold text-white">GitHub</h3>
            </div>

            {/* LinkedIn Button */}
            <div className="p-6 rounded-lg transition duration-300 group">
              <a
                href="https://www.linkedin.com/in/siba-pradhan-2606a9289/"
                className="transition duration-500 ease-in-out transform group-hover:scale-110"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={img5}
                    alt="Icon"
                    className="h-8 w-8 transition duration-500 ease-in-out transform group-hover:scale-125"
                  />
                </div>
              </a>
              <h3 className="md:text-xl text-sm font-semibold text-white">LinkedIn</h3>
            </div>

            {/* Instagram Button */}
            <div className="p-6 rounded-lg transition duration-300 group">
              <a
                href="https://www.instagram.com/shiv___2904/"
                className="transition duration-500 ease-in-out transform group-hover:scale-110"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={img3}
                    alt="Icon"
                    className="h-8 w-8 transition duration-500 ease-in-out transform group-hover:scale-125"
                  />
                </div>
              </a>
              <h3 className="md:text-xl text-sm font-semibold text-white">Instagram</h3>
            </div>
          </div>
          <div className="flex justify-center my-10">
            <div className="relative w-[20rem] md:w-[60rem]">
              <input
                type="text"
                className="md:h-14 h-9 pl-2 pr-16 md:pl-3 md:pr-32 bg-[#144d5b] text-white w-full rounded-lg"
                placeholder="Enter Your Review"
              />
              <button
                className="absolute right-0 top-0 md:w-32 w-20 md:h-14 h-9 rounded-lg bg-[#268e9b] font-bold text-lg"
                onClick={speakUtterance}
              >
                Speak
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full absolute bottom-0 bg-[#0c1111]">
          <div className="container mx-auto grid grid-cols-4 md:grid-cols-4 gap-4 text-white py-2  md:py-4">
            {/* Community */}
            <div>
              <h3 className="md:text-lg text-sm font-bold mb-2">Community</h3>
              <ul className="md:space-y-3 ">
                <li>
                  <a
                    href="https://www.youtube.com/"
                    className="hover:text-[#87f0da] text-xs md:text-[1rem]"
                  >
                    Youtube
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/shivpradhan2904"
                    className="hover:text-[#87f0da] text-xs md:text-[1rem]"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <button
                    onClick={openWhatsApp}
                    className="hover:text-[#87f0da] text-xs md:text-[1rem]"
                  >
                    Whatsapp
                  </button>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="md:text-lg text-sm font-bold mb-2">Social</h3>
              <ul className="md:space-y-3 ">
                <li>
                  <a
                    href="https://www.instagram.com/shiv___2904/"
                    className="hover:text-[#87f0da] text-xs md:text-[1rem]"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-[#87f0da] text-xs md:text-[1rem]">
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/siba-pradhan-2606a9289/"
                    className="hover:text-[#87f0da] text-xs md:text-[1rem]"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            {/* About */}
            <div>
              <h3 className="md:text-lg text-sm font-bold mb-2">About</h3>
              <ul className="md:space-y-3 ">
                <li>
                  <a href="/" className="hover:text-[#87f0da] text-xs md:text-[1rem]">
                    Become Sponsor
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-[#87f0da] text-xs md:text-[1rem]">
                    Learning about me
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:sibapradhan2904@gmail.com"
                    className="hover:text-[#87f0da] text-xs md:text-[1rem]"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>

            {/* Explore */}
            <div>
              <h3 className="md:text-lg text-sm font-bold mb-2">Explore</h3>
              <ul className="md:space-y-3 ">
                <li>
                  <a href="/" className="hover:text-[#87f0da] text-xs md:text-[1rem]">
                    Developer
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-[#87f0da] text-xs md:text-[1rem]">
                    PartnerShip
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:sibapradhan2904@gmail.com"
                    className="hover:text-[#87f0da] text-xs md:text-[1rem]"
                  >
                    Affiliates
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:sibapradhan2904@gmail.com"
                    className="hover:text-[#87f0da] text-xs md:text-[1rem]"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:sibapradhan2904@gmail.com"
                    className="hover:text-[#87f0da] text-xs md:text-[1rem]"
                  >
                    Apps
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Ensure the copyright text sticks to the bottom of the page */}
          <div className="w-full absolute bottom-0">
            <p className="text-center md:text-[13px] text-[8px] text-white">
              Copyright ©2024 by Shiv Pradhan | All Rights Reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
