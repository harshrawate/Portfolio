import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from 'react-icons/bs'

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: <><FaLinkedin size={24} /></>,
      href: 'https://www.linkedin.com/in/harsh-rawate-4a6b1a225',
      label: 'LinkedIn'
    },
    {
      id: 2,
      child: <><FaGithub size={24} /></>,
      href: 'https://github.com/harshrawate',
      label: 'GitHub'
    },
    {
      id: 3,
      child: <><HiOutlineMail size={24} /></>,
      href: 'mailto:harshrawate7@gmail.com',
      label: 'Mail'
    },
    {
      id: 4,
      child: <><BsFillPersonLinesFill size={24} /></>,
      href: '/Harsh_Resume.pdf',
      download: true,
      label: 'Resume'
    },
  ];

  // Footer version for mobile/tablet, sticky side bar for desktop
  return (
    <>
      {/* Desktop Sticky Sidebar */}
      <div className="hidden lg:flex flex-col top-[35%] left-0 fixed z-50">
        <ul className="space-y-4 ml-4">
          {links.map(({ id, child, href, download, label }) => (
            <li
              key={id}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-500 text-slate-500 hover:text-indigo-600 transition-all duration-300 group relative"
            >
              <a
                href={href}
                className="flex items-center justify-center w-full h-full"
                download={download}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
              >
                {child}
              </a>
              {/* Tooltip */}
              <span className="absolute left-16 bg-slate-800 text-white text-xs font-semibold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile/Tablet Simple Footer */}
      <div className="lg:hidden w-full bg-white border-t border-slate-200 py-8">
        <ul className="flex justify-center space-x-8">
          {links.map(({ id, child, href, download, label }) => (
            <li key={id} className="text-slate-500 hover:text-indigo-600 transition-colors duration-300">
              <a
                href={href}
                download={download}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
              >
                {child}
              </a>
            </li>
          ))}
        </ul>
        <div className="text-center text-slate-400 text-sm mt-6">
          © {new Date().getFullYear()} Harsh. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default SocialLinks;
