import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-6 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-sm sm:text-base md:text-lg mt-8 leading-relaxed text-gray-300">
          Hello! I’m a passionate full-stack developer who thrives on turning
          ideas into reality. With a strong command of the MERN stack (MongoDB,
          Express.js, React, Node.js), I create dynamic web applications that
          are both powerful and user-friendly. My journey also includes
          mastering SQL and TypeScript, which allow me to build robust and
          scalable solutions.
        </p>
        <br />
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300">
          What sets me apart? I bring a unique blend of creativity and technical
          prowess, honed through my experience with Python, C, and C++. I’m
          dedicated to crafting responsive designs using Tailwind CSS that not
          only captivate users but also provide seamless interactions. I believe
          in continuous learning and collaboration to drive innovation. If
          you’re looking for someone who can transform challenges into
          opportunities, let’s connect and explore how we can create something
          extraordinary together!
        </p>
      </div>
    </div>
  );
};

export default About;