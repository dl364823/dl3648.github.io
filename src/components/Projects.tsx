import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  const projects = [
    {
      title: 'Personal Portfolio Website',
      description: 'A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features dark mode, smooth scrolling, and a contact form.',
      image: '/project1-placeholder.jpg',
      github: 'https://github.com/dl3648/dl3648.github.io',
      demo: 'https://dl3648.github.io',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React']
    },
    {
      title: 'Machine Learning Projects',
      description: 'Collection of machine learning projects including image classification, natural language processing, and predictive modeling using TensorFlow and PyTorch.',
      image: '/project2-placeholder.jpg',
      github: 'https://github.com/dl3648/ml-projects',
      demo: 'https://github.com/dl3648/ml-projects',
      tags: ['Python', 'TensorFlow', 'PyTorch', 'Machine Learning']
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 