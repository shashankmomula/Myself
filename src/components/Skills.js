import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaCuttlefish,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";
import { SiTailwindcss, SiRedux, SiMongodb, SiExpress } from "react-icons/si";

const skills = [
  { 
    name: "HTML5", 
    icon: <FaHtml5 className="w-8 h-8" />, 
    level: 90,
    color: "from-orange-500 to-orange-600",
    category: "Frontend"
  },
  { 
    name: "CSS3", 
    icon: <FaCss3Alt className="w-8 h-8" />, 
    level: 85,
    color: "from-blue-500 to-blue-600",
    category: "Frontend"
  },
  { 
    name: "JavaScript", 
    icon: <FaJs className="w-8 h-8" />, 
    level: 80,
    color: "from-yellow-400 to-yellow-500",
    category: "Frontend"
  },
  { 
    name: "React", 
    icon: <FaReact className="w-8 h-8" />, 
    level: 85,
    color: "from-cyan-500 to-cyan-600",
    category: "Frontend"
  },
  { 
    name: "Redux", 
    icon: <SiRedux className="w-8 h-8" />, 
    level: 75,
    color: "from-purple-500 to-purple-600",
    category: "Frontend"
  },
  { 
    name: "Tailwind CSS", 
    icon: <SiTailwindcss className="w-8 h-8" />, 
    level: 90,
    color: "from-teal-500 to-teal-600",
    category: "Frontend"
  },
  { 
    name: "Node.js", 
    icon: <FaNodeJs className="w-8 h-8" />, 
    level: 80,
    color: "from-green-500 to-green-600",
    category: "Backend"
  },
  { 
    name: "Express.js", 
    icon: <SiExpress className="w-8 h-8" />, 
    level: 75,
    color: "from-gray-500 to-gray-600",
    category: "Backend"
  },
  { 
    name: "MongoDB", 
    icon: <SiMongodb className="w-8 h-8" />, 
    level: 70,
    color: "from-green-600 to-green-700",
    category: "Database"
  },
  { 
    name: "Git", 
    icon: <FaGitAlt className="w-8 h-8" />, 
    level: 85,
    color: "from-orange-600 to-orange-700",
    category: "Tools"
  },
  { 
    name: "Java", 
    icon: <FaJava className="w-8 h-8" />, 
    level: 75,
    color: "from-red-500 to-red-600",
    category: "Programming"
  },
  { 
    name: "Python", 
    icon: <FaPython className="w-8 h-8" />, 
    level: 70,
    color: "from-blue-600 to-blue-700",
    category: "Programming"
  }
];

const Skills = () => {
  const categories = [...new Set(skills.map(skill => skill.category))];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my technical expertise and proficiency levels
          </p>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 relative group hover:shadow-2xl transition-all duration-300"
                    >
                      <div className="flex items-center space-x-4 mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {skill.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                            {skill.name}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {skill.level}% Proficiency
                          </p>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        />
                      </div>

                      {/* Hover Effect Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 to-yellow-500/0 group-hover:from-amber-500/5 group-hover:to-yellow-500/5 rounded-2xl transition-all duration-500"></div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
