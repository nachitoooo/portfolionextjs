import React from 'react';

const WorkExperienceItem = () => {
  return (
    <div className="relative mx-12 pb-12 grid before:absolute before:left-[-25px] before:block before:h-full before:border-l-2 before:border-gray-200 dark:before:border-gray-800 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4 md:before:left-[-37px]">
      <div className="relative mx-12 pb-12 grid before:absolute before:left-[-25px] before:block before:h-full before:border-l-2 before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4 md:before:left-[-37px]">
        <div className="relative pb-12 md:col-span-2">
          <div className="sticky top-28">
            <svg className="dark:bg-gray-900 text-gray-400 dark:text-gray-700 bg-gray-100 absolute left-[-38px] ring-1 dark:ring-gray-700 ring-gray-200 rounded-full md:left-[-50px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28">
              <path fillRule="evenodd" d="M15.5 11.75a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm1.444-.75a5.001 5.001 0 00-9.888 0H2.75a.75.75 0 100 1.5h4.306a5.001 5.001 0 009.888 0h4.306a.75.75 0 100-1.5h-4.306z" fill="currentColor"></path>
            </svg>
            <h3 className="text-xl font-bold text-gray-700 dark:text-gray-200">Papelera Distrimar</h3>
            <time className="p-0 m-0 text-sm text-gray-700 dark:text-gray-300">12/23 - 3/24 </time>
          </div>
          <div className="sticky top-0">
            <span className="text-yellow-400 -left-11 absolute rounded-full text-5xl">&bull;</span>
            <h3 className="text-xl font-bold text-yellow-400">a1</h3>
            <h4 className="font-semibold text-xl text-white">a2</h4>
            <time className="p-0 m-0 text-sm text-white/80">a3</time>
          </div>
        </div>
        <div className="relative flex flex-col gap-4 pb-4 text-gray-700 dark:text-gray-300 md:col-span-3">
          <div className="relative flex flex-col gap-2 pb-4 text-gray-300 md:col-span-3">
              <a className="text-blue-500 hover:underline">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 inline-block" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 6l6 6l-6 6" />
                </svg>
              </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceItem;
