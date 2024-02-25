import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="absolute bottom-0 w-full bg-primary-grey-100 text-gray-300 py-1">
      <div className="container mx-auto flex items-center justify-center">
        <span className="mr-1">
          <a
            href="https://github.com/kutaysahindev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-green-400" size={16} />
          </a>
        </span>

        <span className="ml-1">
          <a
            href="https://www.linkedin.com/in/kutaysahin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-green-400" size={16} />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
