import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const TestimonalCard = ({ name, description, regarding }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:shadow-2xl"
    >
      {/* Quote Icon */}
      <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center text-white shadow-lg">
        <FaQuoteLeft className="w-6 h-6" />
      </div>

      {/* Content */}
      <div className="space-y-4">
        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
          {description}
        </p>
        
        <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300">
            {name}
          </h3>
          <p className="text-sm text-amber-600 dark:text-amber-400 font-medium">
            {regarding}
          </p>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
    </motion.div>
  );
};

export default TestimonalCard;
