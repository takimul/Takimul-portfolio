import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-neutral text-neutral-content p-10">
        <aside>
          <NavLink to="/">
            <a className="btn btn-ghost text-xl">
              <img
                src="https://i.ibb.co.com/B2w3MPX/Screenshot-2025-01-05-145458.jpg"
                alt=""
                className="h-12 w-12 rounded-full"
              />
            </a>
          </NavLink>
          <p>
            Md Takimul Hasan nihal
            <br />
            Full-Stack Web Developer
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
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
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
