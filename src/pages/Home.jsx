import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Dark Gradient Layer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 opacity-90"
        />

        {/* Moving Grid Pattern */}
        <motion.div
          initial={{ x: -100, y: -100 }}
          animate={{ x: 0, y: 0 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'mirror' }}
          className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20"
        />

        {/* Floating Sparkles */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: 'mirror' }}
          className="absolute inset-0 bg-[url('/sparkles.svg')] opacity-30"
        />
      </div>

      {/* GIF Profile Picture (Right Side) */}
      <div className="w-full md:w-1/2 flex items-center justify-center order-2 md:order-none z-10 mx-4 md:mx-8">
        <motion.img
          src="image.gif" // Path to your GIF
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
        className="w-full md:w-1/2 text-center md:text-left p-4 order-1 md:order-none z-10 mx-4 md:mx-8"
      >
        <h1 className="text-6xl font-bold text-white mb-4">
          Hi, I'm <span className="text-yellow-300">Shadrack</span>
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