import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import cv from "../assets/cv.pdf";

const Banner = () => {
  return (
    <div>
      <div className="bg-[#D7D7D7] flex items-center ">
        <div className="md:w-1/2 flex flex-col items-center ">
          <h1 className="text-start text-3xl font-bold">Hi, I am</h1>
          <br />
          <h1 className="text-5xl text-black font-bold text-center md:text-center">
            Md Takimul Hasan Nihal
          </h1>
          <p className="text-slate-500 text-lg font-bold">
            Full-Stack Developer
          </p>
          <br />
          <div className="flex gap-6 text-2xl">
            <a href="https://www.facebook.com/takimul.nihal/">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.linkedin.com/in/md-takimul-hasan-nihal-7970341b5/  ">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/takimul">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <a
            href={cv} // Path to your CV in the public folder
            download="Resume_of_Takimul_Hasan_Nihal" // File name for the downloaded file
            className="px-6 py-3 bg-gray-500 text-white font-semibold rounded shadow-lg hover:bg-blue-600 transition duration-300 md:mt-24"
          >
            Download CV
          </a>
        </div>
        {/* Corrected Clip-Path Usage */}
        <div
          style={{
            clipPath: "polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
          className="bg-black w-full h-full hidden md:block "
        >
          <img
        // src="https://i.ibb.co.com/nMyZVQN/Whats-App-Image-2025-01-05-at-1-58-12-PM.jpg" 
          src="https://i.postimg.cc/cC005TTQ/Chat-GPT-Image-Jul-2-2025-02-34-03-PM.jpg"
            alt=""
            className="drop-shadow-2xl mx-auto"
          />
        </div>
      </div>
      <div className="bg-[#1d1d1d] text-white ">
        <p className="md:w-2/4 pl-12 py-6">
          Experienced in building scalable web applications with the MERN stack
          (MongoDB, Express.js, React.js, Node.js). Skilled in front-end and
          back-end development, database management and creating seamless user
          experiences. Passionate about solving problems and delivering
          high-quality code.
        </p>
      </div>
    </div>
  );
};

export default Banner;
