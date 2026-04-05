import React from 'react';
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import nodejs from "../assets/node.png";
import mongodb from "../assets/mongodb.png";
import express from "../assets/express-js.png";
import sql from "../assets/sql.png";
import python from "../assets/Python.webp";
import supabase from "../assets/supabase.jpg";
import redux from "../assets/redux.png";
import postgres from "../assets/postgresql.jpg";
import nextjs from "../assets/nextjs.png";
import genai from "../assets/genai.avif";
import docker from "../assets/docker.png";
import c from "../assets/c++.png";
import { FaAws, FaServer, FaCloud, FaGlobe, FaRocket } from 'react-icons/fa';

const Experience = () => {
  const companyExperiences = [
    {
      id: 1,
      role: "Full Stack Developer",
      company: "Idevify Solution Pvt. Ltd. | Nagpur",
      duration: "April 2025 - Feb 2026",
      bullets: [
        <>Worked on a <strong>SaaS-based platform</strong> with <strong>multi-tenant architecture</strong>, enabling multiple organizations to manage operations within a single scalable system.</>,
        <>Developed and maintained modules for the company's <strong>ERP and CRM systems</strong>, including customer management, product management, order tracking, and reporting features.</>,
        <>Built and integrated <strong>RESTful APIs using Node.js and Express.js</strong> for smooth data flow.</>,
        <>Implemented <strong>role-based access control</strong> and optimized MongoDB queries to improve system performance and scalability.</>
      ],
    },
    {
      id: 2,
      role: "Full Stack Developer Intern",
      company: "Idevify Solution Pvt. Ltd. | Nagpur",
      duration: "Jan 2025 - April 2025",
      bullets: [
        <>Contributed to <strong>Amulya (Jewelry E-commerce)</strong>, implementing admin panel CRUD operations, payment integration with Razorpay, and dynamic pricing using real-time gold rates.</>,
        <>Worked on <strong>Adhyay (Social Organization Platform)</strong>, improving UI components and frontend responsiveness.</>,
        <>Integrated logistics management using Shiprocket API for e-commerce workflows.</>
      ]
    }
  ];

  const deployments = [
    { id: 1, name: "AWS", icon: <FaAws className="text-4xl text-slate-700" /> },
    { id: 2, name: "Plesk", icon: <FaServer className="text-4xl text-slate-700" /> },
    { id: 3, name: "CloudPE", icon: <FaCloud className="text-4xl text-slate-700" /> },
    { id: 4, name: "GoDaddy", icon: <FaGlobe className="text-4xl text-slate-700" /> },
    { id: 5, name: "Hostinger", icon: <FaServer className="text-4xl text-slate-700" /> },
    { id: 6, name: "Vercel", icon: <FaRocket className="text-4xl text-slate-700" /> },
    { id: 7, name: "Render", icon: <FaCloud className="text-4xl text-slate-700" /> },
  ];

  const techs = [
    { id: 1, src: html, title: "HTML" },
    { id: 2, src: css, title: "CSS" },
    { id: 3, src: javascript, title: "JavaScript" },
    { id: 4, src: reactImage, title: "React" },
    { id: 5, src: tailwind, title: "Tailwind" },
    { id: 6, src: nodejs, title: "Node.js" },
    { id: 7, src: express, title: "Express.js" },
    { id: 8, src: github, title: "GitHub" },
    { id: 9, src: mongodb, title: "MongoDB" },
    { id: 10, src: sql, title: "SQL" },
    { id: 11, src: python, title: "Python" },
    { id: 12, src: supabase, title: "Supabase" },
    { id: 13, src: redux, title: "Redux" },
    { id: 14, src: postgres, title: "PostgreSQL" },
    { id: 15, src: nextjs, title: "Next.js" },
    { id: 16, src: genai, title: "Generative AI" },
    { id: 17, src: docker, title: "Docker" },
    { id: 18, src: c, title: "C++" },
  ];

  return (
    <div name="experience" className="bg-white w-full py-20">
      <div className="max-w-screen-xl mx-auto p-4 flex flex-col justify-center w-full text-slate-900">
        <div className="text-center sm:text-left mb-12">
          <p className="text-3xl sm:text-4xl font-extrabold inline border-b-4 border-indigo-500 pb-2">
            Experience & Skills
          </p>
          <p className="py-6 text-slate-600 text-lg">A detailed overview of my professional experience, deployment expertise, and technical skills.</p>
        </div>
        
        {/* Professional Experience Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-6">Professional Experience</h3>
          <div className="flex flex-col space-y-6">
            {companyExperiences.map(({ id, role, company, duration, bullets }) => (
              <div key={id} className="bg-slate-50 border border-slate-100 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-indigo-600">{role}</h4>
                    <p className="text-lg font-semibold text-slate-700">{company}</p>
                  </div>
                  <span className="mt-2 sm:mt-0 px-4 py-1.5 bg-indigo-100 text-indigo-800 rounded-full text-sm font-semibold whitespace-nowrap">
                    {duration}
                  </span>
                </div>
                <ul className="text-slate-600 leading-relaxed list-disc list-outside ml-4 space-y-2 text-justify">
                  {bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Deployment Experience Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 flex flex-col sm:flex-row sm:items-center">
            Deployment Expertise
            <span className="mt-2 sm:mt-0 sm:ml-4 px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full font-bold self-start sm:self-auto">
              Deployed 6+ Real-World Projects
            </span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 text-center">
            {deployments.map(({ id, name, icon }) => (
              <div
                key={id}
                className="bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 rounded-2xl p-4 flex flex-col items-center justify-center group"
              >
                <div className="mb-3 group-hover:scale-110 transition-transform duration-300">
                  {icon}
                </div>
                <p className="font-semibold text-sm sm:text-base text-slate-700">{name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Section */}
        <div>
          <h3 className="text-2xl font-bold text-slate-800 mb-6">Technologies I Work With</h3>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 text-center">
            {techs.map(({ id, src, title }) => (
              <div
                key={id}
                className="bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 rounded-2xl p-6 flex flex-col items-center justify-center group"
              >
                <img
                  src={src}
                  alt={title}
                  className="w-16 h-16 object-contain mb-4 group-hover:scale-110 transition-transform duration-300"
                />
                <p className="font-semibold text-slate-700">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;