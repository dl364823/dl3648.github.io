import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import ScrollableCards from '@/components/ScrollableCards';

export default function Home() {
  const experiences = [
    {
      title: 'Graduate Student',
      description: 'Columbia University',
      period: '2023 - Present',
      tags: ['Computer Science', 'Machine Learning']
    },
    // Add more experiences here
  ];

  const projects = [
    {
      title: 'Personal Portfolio Website',
      description: 'A modern, responsive portfolio website built with Next.js and Tailwind CSS.',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      link: 'https://github.com/dl3648/dl3648.github.io'
    },
    // Add more projects here
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left Sidebar */}
        <div className="w-full md:w-1/3 p-8 bg-gray-50 dark:bg-gray-900">
          <div className="sticky top-8">
            <div className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden">
              <Image
                src="/profile-placeholder.jpg"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold mb-2">Dongzhou Li</h1>
              <p className="text-gray-600 dark:text-gray-300">Graduate Student at Columbia University</p>
            </div>
            <div className="flex flex-col gap-4">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FaFileAlt /> Resume
              </a>
              <a
                href="https://linkedin.com/in/dongzhou-li"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 py-2 px-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                href="https://github.com/dl3648"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 py-2 px-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="mailto:dl3648@columbia.edu"
                className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 py-2 px-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <FaEnvelope /> Email
              </a>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-2/3 p-8">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-gray-600 dark:text-gray-300">
              I am a graduate student at Columbia University, passionate about software development
              and machine learning. With a strong foundation in computer science and practical
              experience in web development, I enjoy creating innovative solutions that combine
              cutting-edge technologies with user-friendly interfaces.
            </p>
          </section>

          <section className="mb-12">
            <ScrollableCards title="Experience" cards={experiences} />
          </section>

          <section>
            <ScrollableCards title="Projects" cards={projects} />
          </section>
        </div>
      </div>
    </main>
  );
}
