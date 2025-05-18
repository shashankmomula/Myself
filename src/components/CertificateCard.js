import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

const CertificateCard = ({ title, description, image }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl"
    >
      <div className="flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="relative md:w-1/3 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
          <img
            src={image}
            alt={title}
            className="w-full h-48 md:h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          {/* Certificate Icon */}
          <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center text-white shadow-lg">
            <FaCertificate className="w-6 h-6" />
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 md:w-2/3">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300 mb-4">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            {description}
          </p>
          
          {/* Hover Effect Border */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default CertificateCard;
