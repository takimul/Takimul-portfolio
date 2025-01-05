import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import cv from "../assets/cv.pdf";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-black text-white fixed z-50 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {/* Use `Link` with `#id` */}
              <li>
                <ScrollLink
                  to="about-me"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer"
                >
                  About me
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="skills"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer"
                >
                  Skills
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="education"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer"
                >
                  Education
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="projects"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer"
                >
                  Projects
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer"
                >
                  Contact
                </ScrollLink>
              </li>
            </ul>
          </div>
          <NavLink to="/">
            <a className="btn btn-ghost text-xl">
              <img
                src="https://i.ibb.co.com/B2w3MPX/Screenshot-2025-01-05-145458.jpg"
                alt=""
                className="h-12 w-12 rounded-full"
              />
            </a>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <ScrollLink
                to="about-me"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                About me
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="skills"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Skills
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="education"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Education
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Projects
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a
            href={cv} // Path to your CV in the public folder
            download="Resume_of_Takimul_Hasan_Nihal" // File name for the downloaded file
            className="px-6 py-3 bg-gray-500 text-white font-semibold rounded shadow-lg hover:bg-blue-600 transition duration-300"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
