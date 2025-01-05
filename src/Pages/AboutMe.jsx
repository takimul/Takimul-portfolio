import React from "react";

const AboutMe = () => {
  return (
    <div>
      <div className="space-x-4 border-black text-center w-fit mx-auto mt-24 px-6 py-4 border-[6px] text-xl font-bold">
        <span>A B O U T</span> <span>M E</span>
      </div>
      <div className="text-center w-3/4 mx-auto mt-12">
        <p>
          I am a passionate Full Stack Developer and a tech enthusiast with a
          Bachelor's degree in Computer Science and Engineering from Daffodil
          International University. I thrive on solving problems, building
          innovative solutions, and continuously exploring the latest in
          technology. Known for my punctuality and commitment, I aim to deliver
          efficient, scalable, and user-friendly applications. Let's create
          something amazing together!
        </p>
      </div>
      <div className="text-center font-extrabold my-12">
        <p>----\\\///----</p>
      </div>
      <div className="md:flex justify-between md:px-44 mt-12 gap-24">
        <div className="w-fit shadow-2xl p-4 rounded-lg">
          <h1 className="font-bold text-lg mb-4">DESIGN</h1>
          <p>
            I can design the site based on your needs and suggestions. I can
            also design the site from scratch and consult you during the job.
          </p>
        </div>
        <div className="w-fit shadow-2xl p-4 rounded-lg">
          <h1 className="font-bold text-lg mb-4">DEVELOPMENT</h1>
          <p>
            I can design the site based on your needs and suggestions. I can
            also design the site from scratch and consult you during the job.
          </p>
        </div>
      </div>
      <div className="md:w-1/3 mx-auto mt-20 shadow-2xl p-4 rounded-lg">
        <h1 className="font-bold text-lg mb-4">DESIGN</h1>
        <p>
          I can design the site based on your needs and suggestions. I can also
          design the site from scratch and consult you during the job.
        </p>
      </div>
      <div className="text-center font-extrabold my-12">
        <p>----\\\///----</p>
      </div>
    </div>
  );
};

export default AboutMe;
