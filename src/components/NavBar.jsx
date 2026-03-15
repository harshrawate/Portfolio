import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-6 sm:px-10 z-50 fixed bg-white/90 backdrop-blur-md border-b text-slate-900 border-slate-200/50">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          Harsh<span className="text-indigo-600">.</span>
        </h1>
      </div>

      <ul className="hidden md:flex space-x-8">
        {links.map(({ id, link }) => (
          <li key={id} className="cursor-pointer capitalize font-medium text-slate-600 hover:text-indigo-600 transition-colors duration-200">
            <Link to={link} smooth duration={200} offset={-80}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer z-10 text-slate-600 md:hidden"
      >
        {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-slate-50 text-slate-900">
          {links.map(({ id, link }) => (
            <li key={id} className="px-4 cursor-pointer capitalize py-6 text-3xl font-medium">
              <Link
                onClick={() => setNav(false)}
                to={link}
                smooth
                duration={200}
                offset={-80}
                className="hover:text-indigo-600 transition-colors duration-200"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;