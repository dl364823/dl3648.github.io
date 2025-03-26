import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-xl" />
                <a
                  href="mailto:dl3648@columbia.edu"
                  className="hover:text-gray-600 dark:hover:text-gray-300"
                >
                  dl3648@columbia.edu
                </a>
              </p>
              <p className="flex items-center gap-3">
                <FaGithub className="text-xl" />
                <a
                  href="https://github.com/dl3648"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-600 dark:hover:text-gray-300"
                >
                  github.com/dl3648
                </a>
              </p>
              <p className="flex items-center gap-3">
                <FaLinkedin className="text-xl" />
                <a
                  href="https://linkedin.com/in/dongzhou-li"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-600 dark:hover:text-gray-300"
                >
                  LinkedIn Profile
                </a>
              </p>
            </div>
          </div>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
} 