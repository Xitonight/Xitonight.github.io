import { DrawOutlineButton } from "./AnimatedButton";
import Navbar from "./Navbar";

const App = () => {
  return (
    <div className="min-h-screen bg-white text-gray-600 dark:bg-[#1b1b1f] dark:text-white">
      <Navbar />
      {/* Header */}
      <header className="flex items-center justify-center py-8">
        {/* Container for text */}
        <div className="relative text-center font-mono text-5xl font-bold">
          <h1>
            <span className="text-[#5271ff]">{`{ `}</span>
            <span>Xitonight</span>
            <span className="text-[#8c52ff]">{` }`}</span>
          </h1>
          <div className="absolute top-full left-0 mt-1 text-lg text-[#d9d9d9]">
            ~ stay moony
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* About Me Section */}
        <section id="about" className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-blue-700">
            About Me
          </h2>
          <p className="text-lg">
            I'm a beginner with a passion for creating open-source software. I
            love exploring new technologies and contributing to projects of all
            kinds. My main programming languages are TypeScript, Python, C++,
            and Kotlin (for Android development). If you're working on something
            interesting, I'd love to collaborate!
          </p>
        </section>

        {/* Contact & Socials Section */}
        <section id="contact" className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-blue-700">
            Contact & Socials
          </h2>
          <div className="flex flex-col space-y-2">
            <a
              href="https://t.me/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Telegram: @yourusername
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              GitHub: github.com/yourusername
            </a>
            <a
              href="mailto:youremail@example.com"
              className="text-blue-500 hover:underline"
            >
              Email: youremail@example.com
            </a>
          </div>
        </section>

        {/* Projects Showcase Section */}
        <section id="projects" className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-blue-700">
            Projects Showcase
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Project 1 */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-2 text-xl font-semibold">
                Open Source Library
              </h3>
              <p className="text-gray-700">
                A TypeScript library for simplifying API calls. Designed to be
                lightweight and easy to use.
              </p>
              <a
                href="https://github.com/yourusername/opensource-library"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-blue-500 hover:underline"
              >
                View on GitHub
              </a>
            </div>

            {/* Project 2 */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-2 text-xl font-semibold">Personal Blog</h3>
              <p className="text-gray-700">
                This very blog! Built with React and TailwindCSS to showcase my
                work and thoughts.
              </p>
              <a
                href="https://github.com/yourusername/personal-blog"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-blue-500 hover:underline"
              >
                View on GitHub
              </a>
            </div>

            {/* Project 3 */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-2 text-xl font-semibold">Android App</h3>
              <p className="text-gray-700">
                A simple Android app built with Kotlin to track daily habits and
                improve productivity.
              </p>
              <a
                href="https://github.com/yourusername/android-app"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-blue-500 hover:underline"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="pt-4 text-white">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
