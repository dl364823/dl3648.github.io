import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import ScrollableCards from '@/components/ScrollableCards';

export default function Home() {
  const experiences = [
    {
      title: 'Software Engineer Intern',
      company: 'Network Tree',
      period: 'Aug 2024 - Dec 2024',
      description: 'Developed and launched a cross-platform personal networks management application using React Native, achieving successful deployment to iOS App Store with 4.5+ star rating.',
      tags: ['React Native', 'Node.js', 'AWS']
    },
    {
      title: 'Software Engineer Intern',
      company: 'Smart H.S.E Tech',
      period: 'May 2024 - Jul 2024',
      description: 'Led development of a data visualization portal serving 1000+ daily active users, implementing real-time data interaction and SSO authentication.',
      tags: ['Java', 'Spring Boot', 'PostgreSQL']
    },
    {
      title: 'Master of Computer Science',
      company: 'Columbia University',
      period: 'May 2023 - May 2025',
      description: 'GPA: 4.0/4.0 • Courses: Cloud Computing, Mobile App Development, Database Systems, UI Design, Data Structure and Algorithms, Advanced Programming, Design for Gen AI, NLP',
      tags: ['Cloud Computing', 'Mobile Development', 'AI']
    },
    {
      title: 'Master of Arts in Politics',
      company: 'New York University',
      period: 'Sep 2021 - May 2023',
      description: 'GPA: 3.8/4.0',
      tags: ['Politics', 'Research', 'Analysis']
    },
    {
      title: 'Bachelor of Social Sciences',
      company: 'City University of Hong Kong',
      period: 'Sep 2015 - Dec 2019',
      description: 'GPA: 3.7/4.0',
      tags: ['Social Sciences', 'Research', 'Analysis']
    }
  ];

  const projects = [
    {
      title: 'String Swift',
      description: 'Racket Stringing Ordering Platform - Architected microservices platform using AWS (EC2, Lambda, API Gateway, Step Functions, CloudWatch) and Heroku, reducing order processing time by 35%.',
      period: 'Sep 2024 - Dec 2024',
      tags: ['React', 'Python', 'AWS'],
      link: 'https://github.com/dl3648/string-swift'
    },
    {
      title: 'CoverCraft AI',
      description: 'Cover Letter Generator Application - Built OpenAI Assistant API-powered solution generating tailored cover letters in <3 minutes, featuring job-resume alignment analysis with 10+ comparison metrics.',
      period: 'Jan 2024 - May 2024',
      tags: ['React', 'Node.js', 'OpenAI'],
      link: 'https://github.com/dl3648/covercraft-ai'
    }
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
