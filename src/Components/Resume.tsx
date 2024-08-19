import React from "react";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Others";
import { FaSquare } from "react-icons/fa6";

const Resume: React.FC = () => {
  return (
    <div className="bg-[#ccd0cf] min-h-screen pt-40 px-40">
        <div className="flex items-center justify-center gap-2">
        <FaSquare className="text-blue-800 text-3xl mt-1" />

    <h1 className=" text-center text-4xl font-bold">Resume</h1>

        </div>
      <Experience />
      <Education />
      <Skills />
    </div>
  );
};

export default Resume;
