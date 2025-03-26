'use client';

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-gray-950/80 backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-end items-center gap-4">
          <a
            href="https://github.com/dl3648"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-gray-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/dongzhou-roger-li-161318278/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-gray-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:dongzholi23@gmail.com"
            className="text-xl hover:text-gray-300"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </nav>
  );
} 