import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-white/80 backdrop-blur-sm shadow-lg z-50"
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link to="/" className="text-xl font-bold text-gray-800">
            Shadrack.
          </Link>
        </motion.div>
        <div className="flex space-x-4">
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link to="/" className="text-gray-800 hover:text-blue-500">
              Home
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link to="/projects" className="text-gray-800 hover:text-blue-500">
              Projects
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link to="/contact" className="text-gray-800 hover:text-blue-500">
              Contact
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;