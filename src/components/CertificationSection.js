import React from 'react';
import { motion } from 'framer-motion';
import CertificationCard from './CertificationCard';
import { Certificationitems } from '../utils/CertificationData';

const CertificationSection = () => {
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
            Professional Certifications
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Validating expertise and continuous learning in technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Certificationitems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <CertificationCard
                title={item.title}
                issuer={item.issuer}
                date={item.date}
                image={item.image}
                credentialUrl={item.credentialUrl}
                skills={item.skills}
              />
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-2">
              {Certificationitems.length}+
            </h3>
            <p className="text-gray-600 dark:text-gray-400">Certifications</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-2">
              {new Set(Certificationitems.flatMap(item => item.skills)).size}+
            </h3>
            <p className="text-gray-600 dark:text-gray-400">Skills Validated</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-2">
              {new Set(Certificationitems.map(item => item.issuer)).size}+
            </h3>
            <p className="text-gray-600 dark:text-gray-400">Certifying Bodies</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationSection; 