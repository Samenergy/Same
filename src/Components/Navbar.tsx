import React, { useState } from "react";
import { FaSquare } from "react-icons/fa6";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full py-5 bg-[#fff] text-black shadow-lg z-50 px-5">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-black text-xl font-bold">
          <div className="flex items-center gap-2">
            <FaSquare className="text-blue-800" />
            <p>
              Samuel Dushime{" "}
              <span className="font-light uppercase"> / Software Engineer</span>
            </p>
          </div>
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden text-black focus:outline-none"
        >
          {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
        </button>
        <div className="hidden md:flex space-x-4">
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

      {/* Full-screen overlay menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#f5f5f5] text-center flex flex-col items-center justify-center z-40">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 text-black focus:outline-none"
          >
            <FaTimes className="h-8 w-8" />
          </button>
          <a href="/" className="text-black hover:text-blue-400 text-2xl mb-6">
            ABOUT ME
          </a>
          <a href="/Resume" className="text-black hover:text-blue-400 text-2xl mb-6">
            RESUME
          </a>
          <a href="/projects" className="text-black hover:text-blue-400 text-2xl mb-6">
            PROJECTS
          </a>
          <a href="/contact" className="text-black hover:text-blue-400 text-2xl mb-6">
            CONTACTS
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
