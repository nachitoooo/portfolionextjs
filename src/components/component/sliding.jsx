import React from 'react';
import { SiDjango, SiPython, SiNextDotJs, SiHtml5, SiCss3, SiGit, SiJavascript, SiBootstrap } from 'react-icons/si';
import 'tailwindcss/tailwind.css';

const SlidingIcons = () => {
  return (
    <div className="flex overflow-hidden">
      <SiDjango className="text-2xl mr-4 transform transition-transform ease-in-out -translate-x-full" />
      <SiPython className="text-2xl mr-4 transform transition-transform ease-in-out -translate-x-full" />
      <SiNextDotJs className="text-2xl mr-4 transform transition-transform ease-in-out -translate-x-full" />
      <SiHtml5 className="text-2xl mr-4 transform transition-transform ease-in-out -translate-x-full" />
      <SiCss3 className="text-2xl mr-4 transform transition-transform ease-in-out -translate-x-full" />
      <SiGit className="text-2xl mr-4 transform transition-transform ease-in-out -translate-x-full" />
      <SiJavascript className="text-2xl mr-4 transform transition-transform ease-in-out -translate-x-full" />
      <SiBootstrap className="text-2xl mr-4 transform transition-transform ease-in-out -translate-x-full" />
    </div>
  );
};

export default SlidingIcons;
