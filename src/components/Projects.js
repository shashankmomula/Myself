import { Projectitems } from "../utils/ProjectData";
import ProjectCard from "./ProjectCard";
import { GITHUB } from "../utils/Constants";

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 py-16 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent mb-4">
            My Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent works. Each project is a unique piece of development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8">
          {Projectitems.map((item) => (
            <ProjectCard
              key={item.id}
              Title={item.Title}
              image={item.image}
              description={item.description}
              GIT_URL={item.git_url}
              HOST_URL={item.host_url}
            />
          ))}
        </div>

        {/* GitHub Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/shashankmomula/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-semibold px-8 py-4 rounded-lg hover:from-amber-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <img src={GITHUB} className="w-6 h-6" alt="GitHub" />
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
