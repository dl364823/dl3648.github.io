'use client';

import { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

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
        <div className="flex justify-between items-center">
          <a href="#" className="text-xl font-bold">
            Dongzhou Li
          </a>
          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-6">
              <a href="#about" className="hover:text-gray-600 dark:hover:text-gray-300">
                About
              </a>
              <a href="#projects" className="hover:text-gray-600 dark:hover:text-gray-300">
                Projects
              </a>
              <a href="#contact" className="hover:text-gray-600 dark:hover:text-gray-300">
                Contact
              </a>
            </div>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle dark mode"
            >
              {isDark ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 