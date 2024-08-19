import React from 'react';

const ProfileSection: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-950">
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center max-w-sm">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="rounded-full w-32 h-32 object-cover"
        />
        <h2 className="mt-4 text-xl font-bold text-gray-800">Maya Nelson</h2>
        <p className="text-gray-600">Project Manager</p>
        <div className="border-t-2 w-full mt-4"></div>
        <div className="mt-4 flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="ml-12">
        <h1 className="text-4xl font-bold text-gray-900">Hello</h1>
        <p className="text-lg text-gray-600 mt-2">
          Here's who I am & what I do
        </p>
        <div className="mt-4 flex space-x-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
            Resume
          </button>
          <button className="border-2 border-gray-900 text-gray-900 px-4 py-2 rounded-full hover:bg-gray-900 hover:text-white">
            Projects
          </button>
        </div>
        <div className="mt-4 text-gray-600">
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It's
            easy. Just click "Edit Text" or double click me to add your own
            content and make changes to the font.
          </p>
          <p className="mt-4">
            I'm a great place for you to tell a story and let your users know a
            little more about you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
