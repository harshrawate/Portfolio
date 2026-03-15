import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-white text-slate-900 py-24 md:py-32"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col justify-center w-full px-6 sm:px-10">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column: Bold Statement */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Passionate about creating <span className="text-indigo-600">user-centric</span> experiences.
            </h3>
            <div className="w-20 h-1.5 bg-indigo-500 rounded-full"></div>
          </div>

          {/* Right Column: Detailed Text */}
          <div className="lg:col-span-7 space-y-8 text-base sm:text-lg text-slate-600 leading-relaxed">
            <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-indigo-600 first-letter:mr-2 first-letter:float-left">
              Hello! I’m a passionate full-stack developer who thrives on turning
              ideas into reality. With a strong command of the MERN stack (MongoDB,
              Express.js, React, Node.js), I create dynamic web applications that
              are both powerful and user-friendly. My journey also includes
              mastering SQL and TypeScript, allowing me to build robust and
              scalable solutions.
            </p>
            
            <p>
              What sets me apart? I bring a unique blend of creativity and technical
              prowess, honed through my experience with Python, C, and C++. I’m
              dedicated to crafting responsive designs using Tailwind CSS that not
              only captivate users but also provide seamless interactions. I believe
              in continuous learning and collaboration to drive innovation.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;