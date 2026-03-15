import React from 'react';
import airbnb from "../assets/portfolio/airbnb.png";
import zerodha from "../assets/portfolio/zerodha.png";
import samagri from "../assets/samagri.png";
import dashboard from "../assets/dashboard.png";
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const PortfolioMain = () => {
  const portfolios = [
    {
      id: 1,
      src: samagri,
      href: "https://github.com/harshrawate/Samgri",
      title: "samagri",
      desc: "A web platform that enables users to easily book priests for religious ceremonies and buy required pooja samagri through a seamless e-commerce experience.",
      featured: true
    },
    {
      id: 2,
      src: zerodha,
      href: "https://github.com/harshrawate/Zerodha-DashboardPage-And-Backend",
      title: "Zerodha Dashboard",
      desc: "A comprehensive trading dashboard and robust backend.",
      featured: true
    },
    {
      id: 3,
      src: dashboard,
      href: "https://github.com/harshrawate/Advanced-Analytics-Dashboard",
      title: "Advanced Analytics Dashboard",
      desc: "An advanced analytics dashboard that visualizes key data insights using interactive charts, filters, and real-time metrics to help users analyze trends and make data-driven decisions.",
      featured: true
    },
    {
      id: 4,
      src: airbnb,
      href: "https://github.com/harshrawate/Airbnb-Project",
      title: "Airbnb Clone",
      desc: "A full-stack booking application mimicking core Airbnb functionalities.",
      featured: true
    },
  ];

  return (
    <div name="portfolio" className="bg-slate-50 w-full py-24 md:py-32 text-slate-900">
      <div className="max-w-screen-xl px-6 sm:px-10 mx-auto flex flex-col justify-center w-full">
        
        <div className="mb-16 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Selected Projects
            </h2>
            <div className="w-20 h-1.5 bg-indigo-500 rounded-full mt-4 mx-auto md:mx-0"></div>
          </div>
          <p className="mt-6 md:mt-0 text-slate-600 text-lg max-w-md">
            A showcase of my recent work, highlighting full-stack development and responsive design.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-16">
          {portfolios.map(({ id, src, href, title, desc, featured }) => (
            <div key={id} className={`flex flex-col group ${featured ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
              <div className="relative rounded-3xl overflow-hidden mb-6 shadow-sm group-hover:shadow-2xl transition-all duration-500 bg-white">
                <img
                  src={src}
                  alt={title}
                  className="w-full h-64 sm:h-80 object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="flex flex-col flex-grow px-2">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{title}</h3>
                <p className="text-slate-600 text-base leading-relaxed mb-6 flex-grow">{desc}</p>
                
                <div className="flex items-center space-x-4 mt-auto">
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors px-5 py-2.5 rounded-full"
                  >
                    <FaGithub className="mr-2" size={16} /> View Code
                  </a>
                  <button className="flex items-center text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors px-4 py-2.5 rounded-full cursor-not-allowed group">
                    Live Demo <FaExternalLinkAlt className="ml-2 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default PortfolioMain;