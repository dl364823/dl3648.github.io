'use client';

import { useState, useEffect } from 'react';
import { FaMoon, FaSun, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsDark(document.documentElement.classList.contains('dark'));
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-end items-center gap-4">
          <a
            href="https://github.com/dl3648"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-gray-600 dark:hover:text-gray-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/dongzhou-roger-li-161318278/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-gray-600 dark:hover:text-gray-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:dongzholi23@gmail.com"
            className="text-xl hover:text-gray-600 dark:hover:text-gray-300"
          >
            <FaEnvelope />
          </a>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle dark mode"
          >
            {isDark ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
          </button>
        </div>
      </div>
    </nav>
  );
} 