import React from "react";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#ffffff] text-black py-8 px-5 text-sm">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="text-sm font-normal text-center md:text-left">
          <p>
            &copy; 2024 Samuel Dushime. <br className="" /> All rights reserved.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:gap-20 items-center text-center md:text-center">
          <div>
            <p className="font-bold mb-2">Call</p>
            <p>+250-791-449-850</p>
          </div>
          <div>
            <p className="font-bold mb-2">Write</p>
            <p>sdushime38@gmail.com</p>
          </div>
          <div>
            <p className="font-bold mb-2">Follow</p>
            <div className="flex gap-2 justify-center md:justify-start">
              <a
                href="https://www.linkedin.com/in/samuel-dushime-47a927278/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="text-lg hover:text-blue-500 duration-300" />
              </a>
              <a
                href="https://github.com/Samenergy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-lg hover:text-blue-500 duration-300" />
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
