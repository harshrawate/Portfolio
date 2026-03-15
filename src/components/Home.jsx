import React from 'react';
import HeroImage from "../assets/heroImage.png";
import { RiArrowRightLine } from "react-icons/ri";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="min-h-screen w-full bg-slate-50 flex flex-col justify-center pt-24"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center px-6 sm:px-10 md:flex-row w-full space-y-12 md:space-y-0 md:space-x-12">
        
        {/* Text Section */}
        <div className="flex flex-col justify-center text-center md:text-left flex-1 space-y-8 max-w-2xl">
          <div className="flex justify-center md:justify-start">
            <span className="px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-semibold tracking-wide shadow-sm">
              ✨ Full Stack Developer
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
            Building software that <span className="text-indigo-600 block mt-2">makes an impact.</span>
          </h2>
          
          <p className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-xl mx-auto md:mx-0">
            I’m driven by a strong enthusiasm for solving complex problems,
            learning new technologies, and crafting robust, user-centric web applications.
          </p>
          
          <div className="flex justify-center md:justify-start pt-2">
            <Link
              to="portfolio"
              smooth
              duration={200}
              offset={-80}
              className="group text-white px-8 py-4 flex items-center rounded-full bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer font-medium text-lg"
            >
              View Projects
              <span className="group-hover:translate-x-1 transition-transform duration-300 ml-2">
                <RiArrowRightLine size={20} />
              </span>
            </Link>
          </div>
        </div>

        {/* Circular Image Section */}
        <div className="flex-1 flex justify-center md:justify-end pb-10 md:pb-0">
          <div className="relative group">
            {/* Subtle decorative ring behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-200 to-indigo-50 rounded-full blur-xl opacity-70 group-hover:scale-110 transition-transform duration-700"></div>
            
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] rounded-full p-2 bg-white shadow-xl shadow-indigo-900/5">
              <img
                src={HeroImage}
                alt="my profile"
                className="rounded-full w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Home;