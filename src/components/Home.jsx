import React from 'react';
import HeroImage from "../assets/heroImage.png";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center min-h-screen px-6 md:flex-row">
        {/* Text Section */}
        <div className="flex flex-col justify-center h-full text-center md:text-left">
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md mx-auto md:mx-0 text-sm sm:text-base md:text-lg">
            I’m driven by a strong enthusiasm for solving complex problems,
            learning new technologies, and delivering impactful software
            solutions.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <RiArrowRightSLine size={20} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-6 md:mt-0">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-3xl mx-auto w-3/4 sm:w-1/2 md:w-2/3"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;