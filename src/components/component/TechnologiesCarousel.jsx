"use client";
import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPython } from 'react-icons/fa';
import { DiDjango, DiVisualstudio, DiGit, DiGithubAlt } from "react-icons/di";

const TechnologiesCarousel = () => {
  const technologies = [
    <FaHtml5 className='text-orange-600' key="html5" size={50} />,
    <FaCss3Alt className='text-blue-600' key="css3"  size={50} />,
    <FaJsSquare className='text-yellow-600' key="javascript" size={50} />,
    <FaReact className='text-sky-600' key="react" size={50} />,
    <DiGit className='text-orange-600' key="git" size={50} />,
    <FaPython className='text-sky-800' key="python" size={50} />,
    <DiDjango className='text-green-700' key="django" size={50} />,
    <DiVisualstudio className='text-sky-600' key="VisualStudio" size={50} />,
    <DiGithubAlt className='text-gray-400' key="GithubAlt" size={50} />,
  ];

  const duration = technologies.length * 2;

  return (
    <div className="overflow-hidden bg-black pb-3" style={{ paddingBottom: '60px' }}>
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
          animation: scrollAnimation ${duration}s linear infinite; 
        }
      `}</style>
    </div>
  );
};

export default TechnologiesCarousel;
