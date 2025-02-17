import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-sm shadow-lg z-50"
    >
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

      {/* Navbar Content */}
      <div className="container mx-auto flex justify-between items-center p-4 relative z-10">
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link to="/" className="text-xl font-bold text-white">
            Shadrack.
          </Link>
        </motion.div>
        <div className="flex space-x-4">
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link to="/" className="text-white hover:text-blue-400 transition-colors">
              Home
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link to="/projects" className="text-white hover:text-blue-400 transition-colors">
              Projects
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link to="/contact" className="text-white hover:text-blue-400 transition-colors">
              Contact
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;