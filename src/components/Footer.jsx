import React from 'react';
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
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Social Media Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => {
              const IconComponent = iconComponents[link.icon];
              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${link.color} transition-colors`}
                >
                  <IconComponent className="w-6 h-6" />
                </a>
              );
            })}
          </div>

          {/* Contact Details */}
          <div className="text-center md:text-right">
            <p className="text-sm">Email: skmutai6@gmail.com</p>
            <p className="text-sm">Phone: +254723486218</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 border-t border-gray-700 pt-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} Shadrack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;