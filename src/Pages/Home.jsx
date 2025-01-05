// import React from "react";
// import AboutMe from "./AboutMe";
// import Skills from "./Skills";
// import Projects from "./Projects";
// import ContactMe from "./ContactMe";
// import Education from "./Education";
// import Banner from "./Banner";

// const Home = () => {
//   return (
//     <div>
//       <div className="pt-16">
//         <Banner></Banner>
//       </div>
//       {/* Add an id to the About Me section */}
//       <div id="about-me">
//         <AboutMe />
//       </div>
//       <div id="skills" className="mt-96">
//         <Skills></Skills>
//       </div>
//       <div id="education" className="mt-96">
//         <Education></Education>
//       </div>
//       <div id="projects">
//         <Projects></Projects>
//       </div>
//       <div>
//         <ContactMe></ContactMe>
//       </div>
//     </div>
//   );
// };

// export default Home;

import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import Education from "./Education";
import Banner from "./Banner";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when scrolling down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="pt-16">
        <Banner />
      </div>
      <div id="about-me">
        <AboutMe />
      </div>
      <div id="skills" className="mt-96">
        <Skills />
      </div>
      <div id="education" className="mt-96">
        <Education />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <ContactMe />
      </div>

      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-gray-500 text-white px-3 py-2 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
          title="Scroll to Top"
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
    </div>
  );
};

export default Home;
