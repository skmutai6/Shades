import React from 'react';
import { motion } from 'framer-motion';
import { FaXTwitter, FaInstagram, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa6';
import { socialLinks } from '../config/socialLinks';

const Footer = () => {
  const iconComponents = {
    FaXTwitter,
    FaInstagram,
    FaLinkedin,
    FaFacebook,
    FaWhatsapp,
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-900 text-white py-8 relative overflow-hidden"
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

      {/* Footer Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Social Media Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => {
              const IconComponent = iconComponents[link.icon];
              return (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${link.color} transition-colors`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IconComponent className="w-6 h-6" />
                </motion.a>
              );
            })}
          </div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <p className="text-sm">Email: skmutai6@gmail.com</p>
            <p className="text-sm">Phone: +254723486218</p>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-8 border-t border-gray-700 pt-4"
        >
          <p className="text-sm">&copy; {new Date().getFullYear()} Shadrack. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
