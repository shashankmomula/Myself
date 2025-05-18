
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBook, FaCode, FaUsers, FaLaptopCode, FaChalkboardTeacher } from 'react-icons/fa';

const Timeline = () => {
  const timelineData = [
    {
      date: "November 3, 2022",
      title: "Started BTech",
      description: "Enrolled in BTech (Artificial Intelligence & Data Science) at St. Martin's Engineering College.",
      icon: <FaGraduationCap className="w-6 h-6" />,
      position: "left"
    },
    {
      date: "May 2023",
      title: "Stepped into DSA",
      description: "Began learning Data Structures and Algorithms, building a strong foundation for problem-solving.",
      icon: <FaCode className="w-6 h-6" />,
      position: "right"
    },
    {
      date: "September 2023",
      title: "Published 'Explore Your C Programming'",
      description: "Launched your first book, sharing insights and expertise on C programming.",
      icon: <FaBook className="w-6 h-6" />,
      position: "left"
    },
    {
      date: "November 2023",
      title: "Joined COHO club",
      description: "Became a crew member of COHO, the coding club, teaching development skills to students.",
      icon: <FaUsers className="w-6 h-6" />,
      position: "right"
    },
    {
      date: "January 2024",
      title: "Joined Namaste Dev",
      description: "Became part of the Namaste Dev platform to explore development, focusing on learning React through hands-on experience and practical projects.",
      icon: <FaCode className="w-6 h-6" />,
      position: "left"
    },
    {
      date: "February 2024",
      title: "Completed Cravings Project",
      description: "Showcased front-end development skills by creating a project displaying restaurant details and dishes using local APIs.",
      icon: <FaLaptopCode className="w-6 h-6" />,
      position: "right"
    },
    {
      date: "March 2024",
      title: "Built Netflix GPT",
      description: "Developed an innovative app using React, Redux, and Tailwind to search for movies in a Netflix-like UI.",
      icon: <FaLaptopCode className="w-6 h-6" />,
      position: "left"
    },
    {
      date: "April 2024",
      title: "Conducted 1st COHO Session",
      description: "Taught basic HTML, CSS, and JavaScript for creating web pages, inspiring students to explore web development.",
      icon: <FaChalkboardTeacher className="w-6 h-6" />,
      position: "right"
    }
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
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
            My Journey
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A timeline of my professional growth and achievements
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-500 to-yellow-500"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  item.position === "left" ? "justify-start" : "justify-end"
                }`}
              >
                <div className={`w-1/2 ${item.position === "left" ? "pr-12" : "pl-12"}`}>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 relative group hover:shadow-2xl transition-all duration-300">
                    {/* Icon Circle */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>

                    {/* Content */}
                    <div className="mt-4">
                      <time className="text-sm font-medium text-amber-600 dark:text-amber-400">
                        {item.date}
                      </time>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mt-2">
                        {item.description}
                      </p>
                    </div>

                    {/* Hover Effect Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 to-yellow-500/0 group-hover:from-amber-500/5 group-hover:to-yellow-500/5 rounded-2xl transition-all duration-500"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
