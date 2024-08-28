import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-white text-2xl font-bold ">
                Aniket Tiwari
              </span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <ScrollLink
                to="herosection"
                smooth={true}
                duration={1000}
                className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md text-sm font-medium cursor-pointer hover:text-indigo-600"
              >
                Home
              </ScrollLink>
              <ScrollLink
                to="about"
                smooth={true}
                duration={1000}
                className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md text-sm font-medium cursor-pointer hover:text-indigo-600"
              >
                About Me
              </ScrollLink>
              <ScrollLink 
                to="skills"
                smooth={true}
                duration={1000}
                className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md text-sm font-medium cursor-pointer hover:text-indigo-600"
              >
                Skills
              </ScrollLink>
              <ScrollLink
                to="projects"
                smooth={true}
                duration={1000}
                className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md text-sm font-medium cursor-pointer hover:text-indigo-600"
              >
                Projects
              </ScrollLink>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={1000}
                className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md text-sm font-medium cursor-pointer hover:text-indigo-600"
              >
                Contact Me
              </ScrollLink>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-md"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <ScrollLink
              to="herosection"
              smooth={true}
                duration={1000}
              className="text-white hover:bg-white hover:bg-opacity-20 block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
                duration={1000}
              className="text-white hover:bg-white hover:bg-opacity-20 block px-3 py-2 rounded-md text-base font-medium"
            >
              About Me
            </ScrollLink>
            <ScrollLink
              to="skills"
              smooth={true}
                duration={1000}
              className="text-white hover:bg-white hover:bg-opacity-20 block px-3 py-2 rounded-md text-base font-medium"
            >
              Skills
            </ScrollLink>
            <ScrollLink
              to="projects"
              smooth={true}
                duration={1000}
              className="text-white hover:bg-white hover:bg-opacity-20 block px-3 py-2 rounded-md text-base font-medium"
            >
              Projects
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
                duration={1000}
              className="text-white hover:bg-white hover:bg-opacity-20 block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact Me
            </ScrollLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
