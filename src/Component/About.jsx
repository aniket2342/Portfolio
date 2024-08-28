import React from "react";
import Resume from '../assets/final2.pdf';
import { Element } from "react-scroll";

function About() 
{
  return (
    <Element name="about">
    <div className="mt-40 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl">
        <h1 className="text-3xl sm:text-4xl mb-4 font-medium text-indigo-600 pt-10">
          About Me
        </h1>

        <div className="flex flex-col items-start">
          <h1 className="text-2xl font-semibold text-white">
            Hi! I'm <span className="text-indigo-400 underline">Aniket Tiwari</span>
          </h1>
          <p className="mb-8 mt-8 leading-relaxed text-white text-justify">
            A highly motivated and detail-oriented front-end developer with a
            foundational understanding of HTML, CSS, and JavaScript. Proficient
            in creating responsive and user-friendly web interfaces, with
            hands-on experience in React.js for building dynamic and interactive
            applications. Strong problem-solving skills and a keen interest in
            continuous learning and adapting to new technologies. Eager to
            contribute to a collaborative team and enhance user experience
            through innovative web solutions.
          </p>
        </div>

        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col justify-between">
          <div className="flex gap-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            <p className="text-white">Aniket Tiwari</p>
          </div>
          <div className="flex gap-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            <p className="text-white">anikettiwarichat@gmail.com</p>
          </div>
          <div className="flex gap-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            <p className="text-white">Mumbai, India</p>
          </div>
       </div>
       <div className="items-start flex pb-5">
         <a href={Resume} target="_blank" rel="noopener noreferrer">
           <button className="inline-flex text-white bg-indigo-600 hover:bg-white hover:text-black border-0 py-2 px-6 focus:outline-none rounded text-lg">
             Download CV
           </button>
         </a>
       </div>
      </div>
    </div>
    </Element>
  );
}

export default About;