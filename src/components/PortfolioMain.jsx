import React from 'react';
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import airbnb from "../assets/portfolio/airbnb.png";
import zerodha from "../assets/portfolio/zerodha.png";
import comingsoon from "../assets/portfolio/comingsoon.jpeg";

const PortfolioMain = () => {
    
    const portfolios=[
        {
            id:1,
            src:airbnb,
            href:"https://github.com/harshrawate/Airbnb-Project",
        },
        {
            id:2,
            src:zerodha,
            href:"https://github.com/harshrawate/Zerodha-DashboardPage-And-Backend",
        },
        {
            id:3,
            src:reactWeather,
            href:"https://github.com/harshrawate/Virtual-Weather-Station",
        },
        {
            id:4,
            src:comingsoon,
            href:"https://github.com/harshrawate",
        },
        {
            id:5,
            src:comingsoon,
            href:"https://github.com/harshrawate",
        },
        {
            id:6,
            src:comingsoon,
            href:"https://github.com/harshrawate",
        },
    ]


  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>Portfolio</p>
                <p className='py-6 '>Check out some of my work right here</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-90"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={href}>Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioMain;