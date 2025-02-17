import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-50"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20"></div>
        <div className="absolute inset-0 animate-pulse bg-[url('/sparkles.svg')] opacity-30"></div>
      </div>

      {/* GIF Profile Picture */}
      <div className="w-full md:w-1/2 flex items-center justify-center order-2 md:order-none z-10 mx-4 md:mx-8"> {/* Reduced margins */}
        <motion.img
          src="image.gif" 
          alt="Profile"
          className="w-64 h-64 rounded-full border-4 border-white shadow-lg"
          whileHover={{ scale: 1.1 }}
        />
      </div>

      {/* Text Content (Left Side) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 text-center md:text-left p-4 order-1 md:order-none z-10 mx-4 md:mx-8" // Reduced margins
      >
        <h1 className="text-6xl font-bold text-white mb-4">
          Hi, I'm <span className="text-yellow-300">Shadrack</span>.
        </h1>
        <p className="text-xl text-white mb-8">
          A passionate software developer building amazing web experiences.
        </p>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link
            to="/projects"
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold"
          >
            View My Work
          </Link>
        </motion.div>
      </motion.div>

    </section>
  );
};

export default Home;