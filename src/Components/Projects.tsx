import React from "react";

const ProjectsSection: React.FC = () => {
  return (
    <section className="bg-[#f5e9db] py-10 mt-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-black flex justify-center items-center">
          <span className="mr-2 text-blue-600">■</span> Projects
        </h2>
        <p className="text-gray-600 mt-4">
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. I’m a great place for you to
          tell a story and let your users know a little more about you.
        </p>
      </div>

      <div className="mt-10 max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden flex ">
        <div className="p-10 w-2/3">
          <div className="border-l-8 border-blue-500 pl-8 -ml-10">
            <h3 className="text-xl font-bold text-blue-600">
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
            insurance claims processing. my approach ensures security,
            compliance, and continuous improvement, meeting the evolving needs
            of healthcare providers and improving patient care throughout the
            country.
          </p>
        </div>
        <div className="w-1/3 bg-[#002e6c] ">
          <img
            className="h-auto w-64 object-cover mt-20"
            src="/Cloud analytic logo design template.gif"
            alt="Project thumbnail"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
