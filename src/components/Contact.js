import { GITHUB, LINKEDIN, MAIL } from "../utils/Constants";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-12 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform transition duration-500 hover:shadow-2xl">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 dark:focus:ring-amber-800 text-gray-900 dark:text-white transition duration-200"
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 dark:focus:ring-amber-800 text-gray-900 dark:text-white transition duration-200"
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your message"
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 dark:focus:ring-amber-800 text-gray-900 dark:text-white transition duration-200 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-semibold px-8 py-4 rounded-lg hover:from-amber-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform transition duration-500 hover:shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Let's Connect
              </h3>
              <div className="space-y-6">
                <a
                  href="mailto:shashankmomula11@gmail.com"
                  className="flex items-center space-x-4 text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200"
                >
                  <div className="bg-amber-100 dark:bg-amber-900 p-3 rounded-full">
                    <img src={MAIL} className="w-6 h-6" alt="Email" />
                  </div>
                  <span className="text-lg">shashankmomula11@gmail.com</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/momula-shashank-92a2a925a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200"
                >
                  <div className="bg-amber-100 dark:bg-amber-900 p-3 rounded-full">
                    <img src={LINKEDIN} className="w-6 h-6" alt="LinkedIn" />
                  </div>
                  <span className="text-lg">Connect on LinkedIn</span>
                </a>
                <a
                  href="https://github.com/shashankmomula/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200"
                >
                  <div className="bg-amber-100 dark:bg-amber-900 p-3 rounded-full">
                    <img src={GITHUB} className="w-6 h-6" alt="GitHub" />
                  </div>
                  <span className="text-lg">Follow on GitHub</span>
                </a>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform transition duration-500 hover:shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Quick Response
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                I typically respond to all messages within 24 hours. Feel free to reach out for:
              </p>
              <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-center">
                  <span className="text-amber-500 mr-2">•</span>
                  Project collaborations
                </li>
                <li className="flex items-center">
                  <span className="text-amber-500 mr-2">•</span>
                  Job opportunities
                </li>
                <li className="flex items-center">
                  <span className="text-amber-500 mr-2">•</span>
                  Technical discussions
                </li>
                <li className="flex items-center">
                  <span className="text-amber-500 mr-2">•</span>
                  Mentorship requests
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 dark:text-gray-400 text-sm mt-16">
          <p>© 2024 Shashank. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
