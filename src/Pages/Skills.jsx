import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faGitAlt,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";

const Skills = () => {
  return (
    <div>
      <div className="space-x-4 border-black text-center w-fit mx-auto mt-24 px-6 py-4 border-[6px] text-xl font-bold">
        <span>S K I L L S</span>
      </div>
      <div className="flex text-5xl text-center space-x-6 justify-center my-12 font-semibold">
        <div>
          <FontAwesomeIcon
            icon={faHtml5}
            size="lg"
            style={{ color: "#ff5722" }}
          />
          <h1 className="text-sm">HTML5</h1>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faCss3Alt}
            size="lg"
            style={{ color: "#74C0FC" }}
          />
          <h1 className="text-sm">CSS3</h1>
        </div>
        <div>
          <FontAwesomeIcon icon={faJs} size="lg" style={{ color: "#FFD43B" }} />
          <h1 className="text-sm">JAVASCRIPT</h1>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faReact}
            size="lg"
            style={{ color: "#74C0FC" }}
          />
          <h1 className="text-sm">REACT</h1>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faGitAlt}
            size="lg"
            style={{ color: "#f05033" }}
          />
          <h1 className="text-sm">GIT</h1>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faFigma}
            size="lg"
            style={{ color: "#f24e1e" }}
          />
          <h1 className="text-sm">FIGMA</h1>
        </div>
      </div>
      <div className="flex h-fit justify-center my-12 gap-6 text-center font-semibold">
        <div className="">
          <img src="https://i.ibb.co.com/Nn5ptpp/tailwind.png" alt="" />
          <h1 className="text-sm ">TAILWIND</h1>
        </div>
        <div>
          <img src="https://i.ibb.co.com/0V1B1yj/firebase.png" alt="" />
          <h1 className="text-sm">FIREBASE</h1>
        </div>
        <div>
          <img src="https://i.ibb.co.com/FXFR6TG/express.png" alt="" />
          <h1 className="text-sm">EXPRESS</h1>
        </div>
        <div>
          <img src="https://i.ibb.co.com/X5hptZ1/mongo.png" alt="" />
          <h1 className="text-sm">MONGODB</h1>
        </div>
        <div>
          <img src="https://i.ibb.co.com/Dr5pxqp/node.png" alt="" />
          <h1 className="text-sm">NODEJS</h1>
        </div>
      </div>
    </div>
  );
};

export default Skills;
