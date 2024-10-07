import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Hero: React.FC = () => {
  return (
    <div className="relative flex flex-col md:flex-row min-h-screen">
      <div className="w-full md:w-2/5 h-[300px] md:h-[800px] bg-[#253745]"></div>
      <div className="w-full md:w-4/5 h-[300px] md:h-[800px] min-h-screen bg-[#CCD0CF]"></div>

      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center mt-20 md:mt-0">
        <div className="bg-[#4A5C6A] p-8 rounded-t-lg md:rounded-l-lg md:rounded-r-none border-lg shadow-lg max-w-lg">
          <div className="flex flex-col items-center">
            <div>
              <img
                src="/IMG_5322-transformed.jpeg"
                alt="Samuel Dushime"
                className="w-[150px] md:w-[200px] rounded-full h-auto mb-4"
              />
            </div>
            <div className="text-white text-center text-xl md:text-2xl font-semibold mb-2">
              Samuel <br /> Dushime
            </div>
            <div className="text-white text-center text-lg font-light mb-2">
              —————
            </div>
            <div className="text-white text-lg font-light mb-6 tracking-widest">
              SOFTWARE ENGINEER
            </div>
            <div className="w-full py-2 flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com/in/samuel-dushime-47a927278/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="text-xl md:text-2xl text-gray-50 hover:text-[#06141B] duration-300" />
              </a>
              <a
                href="https://github.com/Samenergy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-xl md:text-2xl text-gray-50 hover:text-[#06141B] duration-300" />
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 border border-lg rounded-b-lg md:rounded-r-lg md:rounded-l-none shadow-lg max-w-lg">
          <div className="mb-6 text-center md:text-left">
            <p className="text-5xl md:text-8xl font-bold mb-2">Hello</p>
            <p className="text-xl md:text-2xl mb-6">
              Here's who I am & what I do
            </p>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-6">
              <a href="/Resume" rel="noopener noreferrer">
                <button className="bg-blue-500 text-white px-5 py-2 rounded-full hover:border border-blue-500 hover:bg-white hover:text-black duration-500">
                  Resume
                </button>
              </a>

              <a href="/Projects" rel="noopener noreferrer">
                <button className="bg-blue-500 text-white px-5 py-2 rounded-full hover:border border-blue-500 hover:bg-white hover:text-black duration-500">
                  Projects
                </button>
              </a>
            </div>
          </div>
          <p className="font-light text-center md:text-left">
            I am a passionate Software Engineering student, I excel in
            problem-solving and crafting innovative solutions. My strong
            organizational skills, attention to detail, and efficient time
            management enable me to thrive in dynamic environments and deliver
            exceptional results. <br /> With a proactive mindset and technical
            expertise, I am equipped to tackle complex challenges and contribute
            significantly to the evolving world of technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
