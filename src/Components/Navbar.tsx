import React, { useState } from "react";
import { FaSquare } from "react-icons/fa6";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full py-5 bg-[#fff] text-black shadow-lg z-50 px-5 ">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-black text-xl font-bold">
          <div className="flex items-center gap-2">
            <FaSquare className="text-blue-800" />
            <p>
              Samuel Dushime{" "}
              <span className="font-light uppercase"> / Software Engineer</span>{" "}
            </p>
          </div>
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden text-black focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <div className={`md:flex ${isOpen ? "block" : "hidden"} space-x-4`}>
          <a href="/" className="text-black hover:text-blue-300">
            ABOUT ME
          </a>
          <a href="/Resume" className="text-black hover:text-blue-300">
            RESUME
          </a>
          <a href="/projects" className="text-black hover:text-blue-300">
            PROJECTS
          </a>
          <a href="/contact" className="text-black hover:text-blue-300">
            CONTACTS
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
