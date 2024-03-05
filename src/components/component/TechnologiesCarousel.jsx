"use client";
import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGit, FaPython } from 'react-icons/fa';
import { DiDjango } from "react-icons/di";

const TechnologiesCarousel = () => {
  const technologies = [
    <FaHtml5 key="html5" size={40} />,
    <FaCss3Alt key="css3" size={40} />,
    <FaJsSquare key="javascript" size={40} />,
    <FaReact key="react" size={40} />,
    <FaGit key="git" size={40} />,
    <FaPython key="python" size={40} />,
    <DiDjango key="django" size={60} />,
  ];

  const duration = technologies.length * 2; 

  return (
    <div className="overflow-hidden bg-black p-4"> 
      <div className={`flex animate-scroll linear infinite w-max duration-${duration}s`}>
        {technologies.map((tech, index) => (
          <div key={index} className="mr-4">
            {tech}
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes scrollAnimation {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll {
          animation: scrollAnimation ${duration}s linear infinite; /* Utilizamos la duración calculada */
        }
      `}</style>
    </div>
  );
};

export default TechnologiesCarousel;
