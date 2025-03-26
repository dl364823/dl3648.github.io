export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Background</h3>
            <p className="text-gray-600 dark:text-gray-300">
              I'm a graduate student at Columbia University, passionate about software development
              and machine learning. With a strong foundation in computer science and practical
              experience in web development, I enjoy creating innovative solutions that combine
              cutting-edge technologies with user-friendly interfaces.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Frontend</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>React</li>
                  <li>Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>HTML5/CSS3</li>
                  <li>JavaScript</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Backend & ML</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>Python</li>
                  <li>Node.js</li>
                  <li>TensorFlow</li>
                  <li>PyTorch</li>
                  <li>SQL</li>
                  <li>RESTful APIs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 