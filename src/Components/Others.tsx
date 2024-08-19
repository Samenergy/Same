import React from "react";
import { FaSquare } from "react-icons/fa";

const Others: React.FC = () => {
  return (
    <div className="mt-16 flex justify-center">
      <div className="w-full max-w-3xl">
        <section className="bg-white rounded-lg shadow-md px-20 py-24 flex gap-10 flex-col">
          <div className="w-full">
          <h4 className="text-3xl font-bold mb-6">Technical Skills</h4>
          <div className="flex flex-wrap gap-10">
  <div className="flex-1 min-w-[250px] max-w-[350px]">
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
  <div className="flex-1 min-w-[250px] max-w-[350px]">
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
          <div className="w-full mt-10">
            <h4 className="text-3xl font-bold">Languages</h4>
            <ul className="list-none ml-6 mt-4 text-gray-700">
              <li className="flex items-center">
                <FaSquare className="text-blue-500 mr-2" />
                Kinyarwanda (Native)
              </li>
              <li className="flex items-center mt-2">
                <FaSquare className="text-blue-500 mr-2" />
                English (Proficient)
              </li>
              </ul>
              
              <ul>
              <li className="flex items-center mt-2">
                <FaSquare className="text-blue-500 mr-2" />
                French (Good)
              </li>
              <li className="flex items-center mt-2">
                <FaSquare className="text-blue-500 mr-2" />
                German (Good)
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Others;
