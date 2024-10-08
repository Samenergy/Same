import React from "react";

const Experience: React.FC = () => {
  return (
    <div className="mt-16 flex justify-center">
      <div className="w-full max-w-3xl px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">Experience</h3>
          <a
            href="#"
            className="text-lg font-semibold bg-blue-500 px-4 py-2 rounded-full text-white hover:text-black hover:bg-transparent hover:border border-blue-500 transition duration-300"
          >
            Download CV
          </a>
        </div>
        <section className="bg-white rounded-lg shadow-lg p-6 md:p-10 flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/3">
            <h4 className="text-lg text-blue-500 font-bold">Feb 2024 - Present</h4>
            <h5 className="text-lg font-medium mt-2">Backend Developer</h5>
            <p className="text-gray-600 mt-2">Green Art Tech</p>
            <p className="text-gray-600">Kigali, Rwanda</p>
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-gray-700">
              Working as a Backend Developer, responsible for creating and
              maintaining web applications. Developing APIs, working with
              databases, and integrating third-party services. Ensuring that
              applications are secure, scalable, and maintainable.
            </p>
          </div>
        </section>
        <section className="bg-white rounded-lg shadow-lg p-6 md:p-10 flex flex-col md:flex-row gap-6 mt-10">
          <div className="w-full md:w-1/3">
            <h4 className="text-lg text-blue-500 font-bold">Aug 2022 - Dec 2023</h4>
            <h5 className="text-lg font-medium mt-2">Website Tester</h5>
            <p className="text-gray-600 mt-2">Consultified Rwanda</p>
            <p className="text-gray-600">Kigali, Rwanda</p>
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-gray-700">
              Conducted website testing, identified issues, executed test cases,
              and provided feedback. Collaborated with teams to implement
              improvements and maintained clear documentation.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Experience;
