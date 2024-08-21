import React from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";

const ProjectsSection: React.FC = () => {
  return (
    <section className="bg-[#ccd0cf] py-10 mt-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-black flex justify-center items-center">
          <span className="mr-2 text-blue-600">■</span> Projects
        </h2>
      </div>

      <div className="mt-20 max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row">
        <div className="p-6 md:p-10 w-full md:w-2/3">
          <div className="border-l-8 border-[#05b5ee] pl-4 md:pl-8 -ml-4 md:-ml-10">
            <h3 className="text-lg md:text-xl font-bold text-[#05b5ee]">
              HealthSync Rwanda
            </h3>
            <p className="text-gray-700">Project Overview</p>
          </div>
          <p className="text-gray-600 mt-4">
            HealthSync Rwanda is a cutting-edge solution designed to modernize
            record management in Rwanda’s healthcare system. By combining
            thorough research, innovative technology, and collaboration with
            healthcare professionals, we created a user-friendly system that
            enhances patient care, streamlines data storage, and automates
            insurance claims processing. My approach ensures security,
            compliance, and continuous improvement, meeting the evolving needs
            of healthcare providers and improving patient care throughout the
            country.
          </p>
          <div className="mt-6 flex space-x-6 md:space-x-10 text-4xl md:text-6xl">
            <a
              href="https://github.com/Samenergy/HealthSync-Rwanda"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#05b5ee]"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://healthsyncrwanda.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#05b5ee]"
            >
              <FaGlobe size={30} />
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/3 bg-[#002e6c]">
          <img
            className="w-full h-auto object-cover"
            src="/Cloud analytic logo design template.gif"
            alt="Project thumbnail"
          />
        </div>
      </div>

      <div className="mt-20 max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row">
        <div className="p-6 md:p-10 w-full md:w-2/3">
          <div className="border-l-8 border-[#37af65] pl-4 md:pl-8 -ml-4 md:-ml-10">
            <h3 className="text-lg md:text-xl font-bold text-[#37af65]">Smart Bin</h3>
            <p className="text-gray-700">Project Overview</p>
          </div>
          <p className="text-gray-600 mt-4">
            Smart Bin aims to revolutionize waste collection and recycling
            processes. Utilizing IoT sensors, the system provides real-time data
            on waste levels, optimizing collection routes and schedules. This
            approach not only reduces operational costs but also improves waste
            management efficiency and promotes environmental sustainability by
            ensuring timely recycling and waste reduction.
          </p>
          <div className="mt-6 flex space-x-6 md:space-x-10 text-4xl md:text-6xl">
            <a
              href="https://github.com/Samenergy/Smart-Bin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#37af65]"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://smart-bin-sigma.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#37af65]"
            >
              <FaGlobe size={30} />
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/3 bg-[#15532e]">
          <img
            className="w-full h-auto object-cover"
            src="/Cloud analytic logo design template (1).gif"
            alt="Project thumbnail"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
