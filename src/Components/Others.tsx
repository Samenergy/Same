import React from "react";
import { FaSquare } from "react-icons/fa";

const Others: React.FC = () => {
  return (
    <div className="mt-16 flex justify-center pb-20">
      <div className="w-full max-w-3xl px-4">
        <section className="bg-white rounded-lg shadow-lg px-6 md:px-10 py-12 md:py-24 flex flex-col gap-10">
          <div className="w-full">
            <h4 className="text-2xl md:text-3xl font-bold mb-6">Technical Skills</h4>
            <div className="flex flex-wrap gap-6">
              <div className="flex-1 min-w-[200px] max-w-[350px]">
                <ul className="list-none text-gray-700">
                  <li className="flex items-center mb-4">
                    <FaSquare className="text-blue-500 mr-2" />
                    Proficiency in JavaScript and Python
                  </li>
                  <li className="flex items-center mb-4">
                    <FaSquare className="text-blue-500 mr-2" />
                    Web Development (React)
                  </li>
                  <li className="flex items-center mb-4">
                    <FaSquare className="text-blue-500 mr-2" />
                    Database Management
                  </li>
                  <li className="flex items-center mb-4">
                    <FaSquare className="text-blue-500 mr-2" />
                    Version Control (Git)
                  </li>
                  <li className="flex items-center mb-4">
                    <FaSquare className="text-blue-500 mr-2" />
                    APIs and Web Services
                  </li>
                </ul>
              </div>
              <div className="flex-1 min-w-[200px] max-w-[350px]">
                <ul className="list-none text-gray-700">
                  <li className="flex items-center mb-4">
                    <FaSquare className="text-blue-500 mr-2" />
                    Software Dev. Methodologies
                  </li>
                  <li className="flex items-center mb-4">
                    <FaSquare className="text-blue-500 mr-2" />
                    Testing and Debugging
                  </li>
                  <li className="flex items-center mb-4">
                    <FaSquare className="text-blue-500 mr-2" />
                    Continuous Learning
                  </li>
                  <li className="flex items-center mb-4">
                    <FaSquare className="text-blue-500 mr-2" />
                    Time Management
                  </li>
                  <li className="flex items-center mb-4">
                    <FaSquare className="text-blue-500 mr-2" />
                    Work Independently
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full">
            <h4 className="text-2xl md:text-3xl font-bold mb-6">Languages</h4>
            <ul className="list-none text-gray-700">
              <li className="flex items-center mb-4">
                <FaSquare className="text-blue-500 mr-2" />
                English (Fluent)
              </li>
              <li className="flex items-center mb-4">
                <FaSquare className="text-blue-500 mr-2" />
                Kinyarwanda (Native)
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Others;
