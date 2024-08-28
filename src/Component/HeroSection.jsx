import { useState, useEffect } from "react";
import React from "react";
import ReactTypingEffect from "react-typing-effect";

import img from "../assets/profile2.jpg";
import { Element, Link as ScrollLink } from "react-scroll";

import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contact";

const HeroSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Toggle animation state every 500ms (or any interval you prefer)
    const interval = setInterval(() => {
      setAnimate((prev) => !prev);
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      {/*  // herosection */}
      <Element name="herosection">
        <div className="relative  px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <section className="body-font">
              <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                    Hey There, I am
                  </h1>
                  <h1 className="title-font sm:text-5xl text-6xl mb-4 font-medium text-indigo-400">
                    <ReactTypingEffect
                      text={[
                        "Aniket Tiwari",
                        "Front-end Developer",
                        "React JS Developer",
                      ]}
                      cursorRenderer={(cursor) => <h1>{cursor}</h1>}
                      displayTextRenderer={(text, i) => {
                        return (
                          <h1>
                            {text.split("").map((char, i) => {
                              return <span key={i}>{char}</span>;
                            })}
                          </h1>
                        );
                      }}
                      speed={100}
                      eraseSpeed={100}
                      typingDelay={500}
                      eraseDelay={2000}
                    />
                  </h1>
                  <p className="mb-8 leading-relaxed text-white">
                    Based in Mumbai, India
                  </p>
                  <div className="flex justify-center">
                    <ScrollLink to="projects" smooth={true} duration={1000}>
                      <p className="inline-flex text-white bg-indigo-600 hover:bg-white hover:text-black border-0 py-2 px-6 focus:outline-none  rounded text-lg cursor-pointer">
                        View My Works
                      </p>
                    </ScrollLink>
                    <ScrollLink to="contact" smooth={true} duration={1000}>
                    <p className="ml-4 inline-flex  text-white border-0 py-2 px-6 hover:bg-indigo-600 focus:outline-none  rounded text-lg cursor-pointer">
                      Contact Me{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-6 "
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                        />
                      </svg>
                    </p>
                    </ScrollLink>
                  </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
                  <img
                    src={img}
                    className="object-cover object-center border-8 border-indigo-600 rounded-full w-2/3 "
                    alt={img.src}
                  ></img>
                </div>
              </div>
            </section>

            {/* icon */}

            <div className="flex justify-center">
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`size-6 text-white transition-transform duration-500 ease-in-out ${
                    animate
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-10 opacity-0"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                  />
                </svg>
              </p>
            </div>
          </div>
        </div>
      </Element>

      <About />
      <Skills />
      <Project />
      <Contact />
    </>
  );
};

export default HeroSection;
