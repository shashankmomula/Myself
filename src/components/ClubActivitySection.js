import React from 'react';
import { motion } from 'framer-motion';
import ClubActivityCard from './ClubActivityCard';
import { ClubActivityitems } from '../utils/ClubActivityData';

const ClubActivitySection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent mb-4">
            Club Activities & Events
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Exploring technology, innovation, and community through engaging activities
          </p>
        </motion.div>

        <div className="space-y-8">
          {ClubActivityitems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <ClubActivityCard
                title={item.title}
                description={item.description}
                images={item.images}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClubActivitySection; 