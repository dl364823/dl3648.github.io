import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <div className="relative w-40 h-40 mb-8 rounded-full overflow-hidden">
        <Image
          src="/profile-placeholder.jpg"
          alt="Profile"
          fill
          className="object-cover"
          priority
        />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Hi, I'm Dongzhou Li 👋
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
        A passionate software developer specializing in web development and machine learning
      </p>
      <div className="flex space-x-6">
        <a
          href="https://github.com/dl3648"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/dongzhou-li"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:dl3648@columbia.edu"
          className="text-2xl hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        >
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
} 