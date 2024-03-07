import React from 'react';
import { FaCss3Alt, FaHtml5, FaBootstrap } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

const WorkExperienceItem = () => {
  return (
    <div className="relative mx-4 md:mx-12 pb-8 md:pb-12 grid before:absolute before:left-[-25px] before:block before:h-full before:border-l-2 before:border-gray-200 dark:before:border-gray-800 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4 md:before:left-[-37px]">
      <div className="relative pb-8 md:pb-12 md:col-span-2">
        <div className="sticky top-4 md:top-28">
          <h3 className="text-lg md:text-xl font-bold text-gray-700 dark:text-gray-200">Charitative project</h3>
          <time className="text-xs md:text-sm text-gray-700 dark:text-gray-300">5/23 - 6/23</time>
          <p className="text-sm text-gray-600 mt-2 dark:text-gray-100">I developed a charitable project so that people who visit the website have the possibility of donating to a student house, thus being able to raise funds to improve the infrastructure problems of the house.</p>
          <div className="flex gap-2 mt-2">
            <FaHtml5 className="text-orange-600" size={50} />
            <FaCss3Alt className="text-blue-600" size={50} />
            <SiJavascript className='text-yellow-500' size={50} />
            <FaBootstrap className="text-purple-700" size={50}/>

          </div>
        </div>
      </div>
      <div className="relative flex flex-col gap-2 pb-4 text-gray-300 md:col-span-3">
        <a href="#" className="text-blue-500 hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 md:w-5 inline-block" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 6l6 6l-6 6" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default WorkExperienceItem;



