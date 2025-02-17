import React from 'react';
import { motion } from 'framer-motion';

const NoPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Animated Gradient */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'mirror' }}
          className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900"
        ></motion.div>

        {/* Animated Grid Pattern */}
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: 'mirror' }}
          className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20"
        ></motion.div>

        {/* Animated Sparkles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'mirror' }}
          className="absolute inset-0 bg-[url('/sparkles.svg')]"
        ></motion.div>
      </div>

      {/* 404 Content */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center relative z-10"
      >
        <h1 className="text-6xl font-bold text-white mb-4">404 - Page Not Found</h1>
        <p className="text-xl text-gray-300">Oops! The page you're looking for doesn't exist.</p>
      </motion.div>
    </section>
  );
};

export default NoPage;