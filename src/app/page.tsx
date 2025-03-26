import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import ScrollableCards from '@/components/ScrollableCards';
import Navbar from '@/components/Navbar';

export default function Home() {
  const experiences = [
    {
      title: 'Software Engineer Intern',
      company: 'Network Tree',
      period: 'Aug 2024 - Dec 2024',
      tags: ['React Native', 'Node.js', 'AWS'],
      logo: '/NetworkTree.png'
    },
    {
      title: 'Software Engineer Intern',
      company: 'Smart H.S.E Tech',
      period: 'May 2024 - Jul 2024',
      tags: ['Java', 'Spring Boot', 'PostgreSQL'],
      logo: '/SmartHSE.png'
    },
    {
      title: 'Master of Computer Science',
      company: 'Columbia University',
      period: 'May 2023 - May 2025',
      tags: ['Cloud Computing', 'Mobile Development', 'AI'],
      logo: '/Columbia.png'
    },
    {
      title: 'Master of Arts in Politics',
      company: 'New York University',
      period: 'Sep 2021 - May 2023',
      tags: ['Politics', 'Research', 'Analysis'],
      logo: '/NYU.png'
    },
    {
      title: 'Bachelor of Social Sciences',
      company: 'City University of Hong Kong',
      period: 'Sep 2015 - Dec 2019',
      tags: ['Social Sciences', 'Research', 'Analysis'],
      logo: '/CityU.png'
    }
  ];

  const projects = [
    {
      title: 'String Swift',
      company: 'Racket Stringing Ordering Platform',
      period: 'Sep 2024 - Dec 2024',
      tags: ['React', 'Python', 'AWS'],
      link: 'https://github.com/Cloud-404BrainNotFound/String-Swift',
      logo: '/StringSwift.png'
    },
    {
      title: 'CoverCraft AI',
      company: 'Cover Letter Generator Application',
      period: 'Jan 2024 - May 2024',
      tags: ['React', 'Node.js', 'OpenAI'],
      link: 'https://github.com/dl364823/CoverCraftAi',
      logo: '/CoverCraft.png'
    }
  ];

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-1/3">
            <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-500">
              <Image
                src="/profile-placeholder.jpg"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
            <h1 className="text-3xl font-bold text-center mb-2">Dongzhou Li</h1>
            <p className="text-gray-400 text-center mb-8">Software Engineer</p>
            <div className="flex flex-col gap-4">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-blue-600 py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FaFileAlt /> Resume
              </a>
              <a
                href="https://www.linkedin.com/in/dongzhou-roger-li-161318278/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gray-800 py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                href="https://github.com/dl3648"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gray-800 py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="mailto:dongzholi23@gmail.com"
                className="flex items-center justify-center gap-2 bg-gray-800 py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <FaEnvelope /> Email
              </a>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full md:w-2/3 p-8 pt-24">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">About Me</h2>
              <p className="text-gray-300 leading-relaxed">
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
      </div>
    </main>
  );
}
