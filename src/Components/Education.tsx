import React from "react";

const Education: React.FC = () => {
  return (
    <div className="mt-16 flex justify-center">
      <div className="w-full max-w-3xl px-4">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">Education</h3>
        </div>
        <section className="bg-white rounded-lg shadow-lg p-6 md:p-10 flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/3">
            <h4 className="text-xl text-blue-500 font-bold">Jan 2023 - Present</h4>
            <h5 className="text-lg font-medium mt-2">African Leadership University</h5>
            <p className="text-gray-600 mt-2">Bachelor's Degree in Software Engineering</p>
            <p className="text-gray-600">Kigali, Rwanda</p>
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-gray-700">
              Currently in my second year, focusing on machine learning. I've
              also gained extensive knowledge in full-stack web development and
              mobile application development, working on various projects that
              have sharpened my skills in these areas.
            </p>
          </div>
        </section>
        <section className="bg-white rounded-lg shadow-lg p-6 md:p-10 mt-10 flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/3">
            <h4 className="text-xl text-blue-500 font-bold">2018 - 2021</h4>
            <h5 className="text-lg font-medium mt-2">IFAK Don Bosco</h5>
            <p className="text-gray-600 mt-2">Secondary School Diploma in Mathematics, Economics, and Computer Science</p>
            <p className="text-gray-600">Kigali, Rwanda</p>
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-gray-700 mt-4">
              Completed secondary education with a focus on Mathematics,
              Economics, and Computer Science. This foundation provided me with
              strong analytical skills and a passion for technology, which
              greatly influenced my decision to pursue a degree in Software
              Engineering.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Education;
