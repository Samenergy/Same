import React from "react";

const Experience: React.FC = () => {
  return (
    <div className="mt-16 flex justify-center">
      <div className="w-full max-w-3xl">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">Experience</h3>
          <a
            href="#"
            className="text-lg font-semibold bg-blue-500 px-4 py-2 rounded-full text-white hover:text-black hover:bg-transparent hover:border border-blue-500 transition duration-300"
          >
            Download CV
          </a>
        </div>
        <section className="  bg-white rounded-lg shadow-md p-20 flex gap-10">
          <div className="w-1/3">
            <h4 className="text-xl text-blue-500 font-bold">2024 - Present</h4>
            <h5 className="text-lg font-medium mt-2">Backend Developer</h5>
            <p className="text-gray-600 mt-2">Green Art Tech</p>
            <p className="text-gray-600">Kigali, Rwanda</p>
          </div>
          <div className="w-2/3">
            <p className="text-gray-700">
              Working as a Backend Developer, responsible for creating and
              maintaining web applications. Developing APIs, working with
              databases, and integrating third-party services. Ensuring that
              applications are secure, scalable, and maintainable.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Experience;
